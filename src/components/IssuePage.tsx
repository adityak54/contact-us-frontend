import { useState } from "react";
import { fetchIssues, updateIssueStatus } from "../api/IssuesApi";
import { IssuesType } from "../types/Issues";

const IssuePage = () => {
  const [issues, setIssues] = useState<IssuesType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [issueType, setIssueType] = useState<'pending' | 'resolved' | null>(null); // Track the type of queries

  const handleFetchIssues = async (type: 'pending' | 'resolved') => {
    setLoading(true);
    setIssueType(type);
    try {
      const data = await fetchIssues(type);
      if (data.error) {
        setError(data.error);
        setIssues([]);
      } else {
        setIssues(data);
        setError(null);
      }
    } catch (err) {
      setError('Failed to fetch queries');
      setIssues([]);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: 'pending' | 'resolved') => {
    setLoading(true);
    try {
      // Update issue status on the server
      const response = await updateIssueStatus(id, newStatus);

      if (response.error) {
        setError(response.error);
      } else {
        // Re-fetch the issues based on the current filter (issueType)
        if (issueType) {
          const fetchResponse = await fetchIssues(issueType);
          if (fetchResponse.error) {
            setError(fetchResponse.error);
          } else {
            setIssues(fetchResponse);
            setError(null);
          }
        } else {
          setError('No issue type selected');
        }
      }
    } catch (err) {
      setError('Failed to update issue status');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen container mx-auto flex flex-col items-center p-4">
      <div className="flex justify-between mb-4 w-full">
        <div className="flex-1 flex items-center justify-center m-2">
          <button
            className="border border-white rounded-lg shadow-md py-1 px-4 md:px-6 text-center hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={() => handleFetchIssues('pending')}
            disabled={loading}
          >
            {loading && issueType === 'pending' ? 'Loading...' : 'Unresolved Queries'}
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center m-2">
          <button
            className="border border-white rounded-lg shadow-md py-1 px-4 md:px-6 text-center hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={() => handleFetchIssues('resolved')}
            disabled={loading}
          >
            {loading && issueType === 'resolved' ? 'Loading...' : 'Resolved Queries'}
          </button>
        </div>
      </div>

      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="w-full">
        {issues.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">
              {issueType === 'pending' ? 'Unresolved Issues' : 'Resolved Issues'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {issues.map((issue) => (
                <div key={issue._id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{issue.name}</h3>
                  <p className="mb-2"><strong>Email:</strong> {issue.email}</p>
                  <p className="mb-2"><strong>Message:</strong> {issue.message}</p>
                  <p className="mb-2"><strong>Status:</strong> {issue.status}</p>
                  <div className="flex justify-end">
                    {issueType === 'pending' && (
                      <button
                        className="border border-white rounded-lg py-1 px-2 bg-green-500 hover:bg-green-700"
                        onClick={() => handleUpdateStatus(issue._id, 'resolved')}
                        disabled={loading}
                      >
                        Mark as Resolved
                      </button>
                    )}
                    {issueType === 'resolved' && (
                      <button
                        className="border border-white rounded-lg py-1 px-2 bg-yellow-500 hover:bg-yellow-700"
                        onClick={() => handleUpdateStatus(issue._id, 'pending')}
                        disabled={loading}
                      >
                        Mark as Pending
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {issues.length === 0 && !loading && <p>No issues found.</p>}
      </div>
    </div>
  );
};

export default IssuePage;
