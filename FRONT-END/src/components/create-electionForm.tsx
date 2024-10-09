// pages/create-election.tsx
"use-client"

import { useState } from "react";








export default function CreateElection() {
  
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [candidates, setCandidates] = useState([{ name: "" }]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Handle input changes
  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newCandidates = [...candidates];
    newCandidates[index].name = event.target.value;
    setCandidates(newCandidates);
  };

  // Add a new candidate input field
  const addCandidate = () => {
    setCandidates([...candidates, { name: "" }]);
  };

  // Remove a candidate input field
  const removeCandidate = (index: number) => {
    const newCandidates = candidates.filter((_, i) => i !== index);
    setCandidates(newCandidates);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Build the election object
    const electionData = {
      title,
      description,
      candidates,
      startDate,
      endDate,
    };

    // TODO: Handle election submission (e.g., save to the blockchain, API call)
    console.log("Election Created: ", electionData);

    // Navigate to another page after successful creation (optional)
  };

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Create Election</h1>
        
       
        <div className="mb-6">
        </div>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Election Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Election Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Candidates */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Candidates
            </label>
            {candidates.map((candidate, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  type="text"
                  value={candidate.name}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder={`Candidate ${index + 1}`}
                  className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
                <button
                  type="button"
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => removeCandidate(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-blue-500 hover:text-blue-700"
              onClick={addCandidate}
            >
              + Add another candidate
            </button>
          </div>

          {/* Start Date */}
          <div className="mb-4">
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* End Date */}
          <div className="mb-4">
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-10 py-3 bg-primary-green text-white font-medium rounded-md hover:opacity-95 transition-colors w-full"
            >
              Create Election
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
