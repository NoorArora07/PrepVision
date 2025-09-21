//A page is basically a whole screen that the user navigates to.
import React from "react";
import FileUpload from "../components/FileUpload";

function UploadPage() { //UploadPage is a functional component
  //This will be used as a page in your app’s routing (e.g., /upload route).
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Files / PDFs</h2>
      <FileUpload />
{/* this <FileUpload /> Renders the FileUpload component you created earlier (file input + button + message).This is where the user actually selects and uploads a file.*/}
    </div>
  );
}

export default UploadPage;
