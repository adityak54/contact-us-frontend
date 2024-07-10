const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || "";
const fetchIssues = async (type: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/issues/${type}/v1`);
    if (!response.ok) {
      throw new Error("Failed to fetch unresolved queries");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching unresolved queries:", error);
    return { error: "Failed to fetch unresolved queries" };
  }
};

const updateIssueStatus = async (id: string, newStatus: 'pending' | 'resolved') => {
  try {
    const response = await fetch(`${BACKEND_URL}/issues/update/v1`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: newStatus }), // Send status in the body
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating issue status:", error);
    return { error: "Failed to update issue status" };
  }
};


export { updateIssueStatus, fetchIssues };
