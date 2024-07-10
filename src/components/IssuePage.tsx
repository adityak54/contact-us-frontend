import React, { useState } from "react";
import {
  fetchUnresolvedQueries,
  fetchResolvedQueries,
} from "../api/QueriesApi";

const IssuePage = () => {
  const [unresolvedQueries, setUnresolvedQueries] = useState([]);
  const [resolvedQueries, setResolvedQueries] = useState([]);
  const [error, setError] = useState(null);

  const handleFetchUnresolvedQueries = async () => {
    const data = await fetchUnresolvedQueries();
    if (data.error) {
      setError(data.error);
    } else {
      setUnresolvedQueries(data);
      setError(null);
    }
  };

  const handleFetchResolvedQueries = async () => {
    const data = await fetchResolvedQueries();
    if (data.error) {
      setError(data.error);
    } else {
      setResolvedQueries(data);
      setError(null);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen container mx-auto flex flex-col items-center">
      <div className="flex justify-between mt-8 w-full">
        <div className="flex-1 flex items-center justify-center m-2">
          <button
            className="border border-white rounded-lg shadow-md py-1 px-4 md:px-6 text-center hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={handleFetchUnresolvedQueries}
          >
            Unresolved Queries
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center m-2">
          <button
            className="border border-white rounded-lg shadow-md py-1 px-4 md:px-6 text-center hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={handleFetchResolvedQueries}
          >
            Resolved Queries
          </button>
        </div>
      </div>

      <div className="child-item flex mt-6">
        {error && <p className="text-red-500">Error: {error}</p>}

        {unresolvedQueries.length > 0 && (
          <ul className="text-white">
            {unresolvedQueries.map((query) => (
              <li key={query.id}>{query.text}</li>
            ))}
          </ul>
        )}

        {resolvedQueries.length > 0 && (
          <ul className="text-white">
            {resolvedQueries.map((query) => (
              <li key={query.id}>{query.text}</li>
            ))}
          </ul>
        )}

        {!error &&
          unresolvedQueries.length === 0 &&
          resolvedQueries.length === 0 && <p>No queries found.</p>}
      </div>
    </div>
  );
};

export default IssuePage;
