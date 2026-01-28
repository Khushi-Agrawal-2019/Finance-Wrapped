import { useState } from "react";

export default function CsvUploadCard() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setMessage("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a CSV file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("http://localhost:3000/api/upload-csv", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setMessage("File uploaded successfully 🎉");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-gray-900 p-6">
      <h2 className="text-lg font-semibold">Upload Bank Statement</h2>
      <p className="mt-1 text-sm text-gray-400">
        Upload your CSV file to analyze your spending.
      </p>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mt-4 block w-full text-sm text-gray-300
                   file:mr-4 file:rounded-md file:border-0
                   file:bg-gray-800 file:px-4 file:py-2
                   file:text-gray-300 hover:file:bg-gray-700"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-4 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-black hover:bg-green-400 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload CSV"}
      </button>

      {message && (
        <p className="mt-3 text-sm text-gray-300">{message}</p>
      )}
    </div>
  );
}
