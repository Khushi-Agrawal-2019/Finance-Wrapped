export async function fetchTransactions() {
    const res = await fetch("http://localhost:3000/api/transactions")
  
    if (!res.ok) {
      throw new Error("Failed to fetch transactions")
    }
  
    return res.json()
  }
  