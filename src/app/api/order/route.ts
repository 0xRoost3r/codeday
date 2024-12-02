export const revalidate = 60;
import { createClient } from '@/utils/supabase/client'
import { sendHashToAdmin } from './bot';
import { txScanList } from '@/lib/utils';

// Define the interface for transaction data
interface Transaction {
    confirmed: boolean;
    block: {
      number: Number;
    }
    chainId: string;
    txs: Array<{
        hash: string;
        fromAddress: string;
        toAddress: string;
        value: string;
    }>;
}

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const body = await request.json();

    // Ensure payload matches expected structure
    const { confirmed, txs, chainId, block }: Transaction = body;

    if (!txs || txs.length === 0) {
      return Response.json({ error: "No transactions found" }, { status: 200 });
    }

    // Extract data from the first transaction
    const { fromAddress, toAddress, value, hash } = txs[0];

    const { error } = await supabase.from('order').upsert({
        hash: hash,
        fromAddress: fromAddress,
        value: value,
        chainId: chainId,
        confirmed: confirmed,
        blockNumber: block.number
      })
      if (error) throw error
      if (confirmed) await sendHashToAdmin(txScanList[chainId] + hash);

    return Response.json({
      confirmed,
      fromAddress,
      toAddress,
      value,
    });
  } catch (error) {
    return Response.json({ error }, { status: 200 });
  }
}
