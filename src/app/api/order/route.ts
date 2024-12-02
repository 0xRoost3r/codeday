export const revalidate = 60;
import { createClient } from '@/utils/supabase/client'

// Define the interface for transaction data
interface Transaction {
    confirmed: boolean;
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
    const { confirmed, txs, chainId }: Transaction = body;

    if (!txs || txs.length === 0) {
      return Response.json({ error: "No transactions found" }, { status: 400 });
    }

    // Extract data from the first transaction
    const { fromAddress, toAddress, value, hash } = txs[0];

    const { error } = await supabase.from('order').upsert({
        hash: hash,
        fromAddress: fromAddress,
        value: value,
        chainId: chainId,
        confirmed: confirmed,
      })
      if (error) throw error

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
