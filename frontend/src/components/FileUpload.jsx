import React, { useState } from "react";
import axios from "axios";

//useState -> Adds state to a functional component
//state = data that changes over time and affects what’s rendered on the screen.
//A functional component in React is a JavaScript function that returns JSX (what the UI should look like)

//axios → Library to make HTTP requests (like sending files to a server).

function FileUpload() {
  const [file, setFile] = useState(null);
  //file → Stores the file selected by the user. Initially null.
  const [message, setMessage] = useState("");
  //message → Stores success or error messages (like "Uploaded!" or "Upload failed"). Initially an empty string.

// useState returns a pair: [value, setter].
// file is the current state.
// setFile updates it.

  const handleFileChange = (e) => setFile(e.target.files[0]);
// Triggered when the user selects a file in <input type="file">.
// e.target.files → array of selected files.
// [0] → picks the first file if multiple are allowed.
// setFile updates the file state with the selected file.

  const handleUpload = async () => {
    if (!file) return setMessage("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(`Uploaded! URL: ${res.data.file_url}`);
    } catch (err) {
      setMessage(`Upload failed: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileChange} className="border p-2" />
      <button
        onClick={handleUpload}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
      <p className="mt-2 text-gray-700">{message}</p>
    </div>
  );
}

export default FileUpload;
