export const revalidate = 60;
import { createClient } from '@/utils/supabase/client'
import { sendHashToAdmin } from './bot';
import { txScanList } from '@/lib/utils';

// Define the interface for transaction data
interface WebHookTransaction {
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
        input: string;
    }>;
    txsInternal: Array<{
      transactionHash: string;
      from: string;
      to: string;
      value: string;
  }>
}

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const body = await request.json();

    // Ensure payload matches expected structure
    const { confirmed, txsInternal, txs, chainId, block }: WebHookTransaction = body;

    if (!txsInternal || txsInternal.length === 0) {
      return Response.json({ error: "No transactions found" }, { status: 200 });
    }

    // Extract data from the first transaction
    const { to, value, transactionHash } = txsInternal[0];
    const { fromAddress, input } = txs[0];
    const orderId = parseInt(input.substring(10));
    console.log(`orderId`, orderId)

    const { error } = await supabase.from('order').upsert({
        hash: transactionHash,
        fromAddress: fromAddress,
        value: value,
        orderId: orderId,
        chainId: parseInt(chainId),
        confirmed: confirmed,
        blockNumber: block.number
      })
      if (error) throw error
      if (confirmed) await sendHashToAdmin(txScanList[parseInt(chainId)] + transactionHash);

    return Response.json({
      confirmed,
      fromAddress,
      to,
      value,
    });
  } catch (error) {
    return Response.json({ error }, { status: 200 });
  }
}
