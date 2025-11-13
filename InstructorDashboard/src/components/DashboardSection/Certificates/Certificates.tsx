import React, { useState } from "react";
import "./Certificates.css";
import { FiEye, FiEdit2, FiTrash2, FiUpload } from "react-icons/fi";

const certificates = [
  { id: 1, title: "Certificate 01", img: "https://img.freepik.com/free-vector/certificate-template_23-2148892978.jpg" },
  { id: 2, title: "Certificate 02", img: "https://img.freepik.com/free-vector/certificate-template-classic-elegant-style_23-2148810532.jpg" },
  { id: 3, title: "Certificate 03", img: "https://img.freepik.com/free-vector/certificate-template_23-2148892700.jpg" },
  { id: 4, title: "Certificate 04", img: "https://img.freepik.com/free-vector/certificate-template_23-2148892678.jpg" },
];

const Certificates: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log("File submitted:", selectedFile.name);
      alert(`File submitted: ${selectedFile.name}`);
      setSelectedFile(null);
      setShowModal(false);
    } else {
      alert("Please select a file!");
    }
  };

  return (
    <div className="certificates-container">
      <div className="certificates-header">
        <h2>Certificates</h2>
        <button className="certificates-add-btn" onClick={() => setShowModal(true)}>
          + Add Certificate
        </button>
      </div>

      <div className="certificates-grid">
        {certificates.map((c) => (
          <div key={c.id} className="certificates-card">
            <img src={c.img} alt={c.title} className="certificates-img" />
            <div className="certificates-title">{c.title}</div>
            <div className="certificates-actions">
              <button><FiEye /></button>
              <button><FiEdit2 /></button>
              <button className="delete"><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="certificates-modal-overlay">
          <div className="certificates-modal">
            <h3>Add New Certificate</h3>

            <div className="certificates-upload">
              <p>Attachments</p>
              <p>(Drag and drop your files)</p>
              <p>Accept File Type: doc, docx, jpg, jpeg, png, txt, pdf</p>

              <label className="certificates-upload-icon">
                <FiUpload size={40} />
                <span>{selectedFile ? selectedFile.name : "Upload"}</span>
                <input type="file" accept=".doc,.docx,.jpg,.jpeg,.png,.txt,.pdf" onChange={handleFileChange} style={{ display: "none" }} />
              </label>
            </div>

            <div className="certificates-modal-buttons">
              <button className="cancel-btn" onClick={() => { setShowModal(false); setSelectedFile(null); }}>
                Cancel
              </button>
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
