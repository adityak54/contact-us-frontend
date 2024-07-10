const fetchUnresolvedQueries = async () => {
  try {
    const response = await fetch("/api/unresolved");
    if (!response.ok) {
      throw new Error("Failed to fetch unresolved queries");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching unresolved queries:", error);
    return { error: "Failed to fetch unresolved queries" };
  }
};

const fetchResolvedQueries = async () => {
  try {
    const response = await fetch("/api/resolved");
    if (!response.ok) {
      throw new Error("Failed to fetch resolved queries");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching resolved queries:", error);
    return { error: "Failed to fetch resolved queries" };
  }
};

export { fetchUnresolvedQueries, fetchResolvedQueries };
