const API_URL = "http://localhost:5000"; // Update with deployed backend URL if needed

export const fetchTransactions = async () => {
  try {
    const response = await fetch(`${API_URL}/transactions`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};
