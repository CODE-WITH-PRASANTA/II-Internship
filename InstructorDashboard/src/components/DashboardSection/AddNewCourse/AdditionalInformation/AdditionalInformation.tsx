import React, { useState } from "react";
import { FiBookOpen, FiChevronDown, FiChevronUp, FiPlus } from "react-icons/fi";
import "./AdditionalInformation.css";

interface FAQ {
  id: number;
  question: string;
  open: boolean;
}

interface AdditionalInformationProps {
  data?: any;
  onChange?: (data: any) => void;
}

const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  data,
  onChange,
}) => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    { id: 1, question: "Hello World Project from GitHub", open: false },
    { id: 2, question: "New Update", open: false },
  ]);

  const [tags, setTags] = useState<string>(data?.tags || "");
  const [message, setMessage] = useState<string>(data?.message || "");
  const [checked, setChecked] = useState<boolean>(true);

  const toggleFAQ = (id: number) => {
    setFaqs((prev) =>
      prev.map((faq) => ({
        ...faq,
        open: faq.id === id ? !faq.open : faq.open,
      }))
    );
  };

  const addNewFAQ = () => {
    const newFAQ: FAQ = {
      id: faqs.length + 1,
      question: `New FAQ ${faqs.length + 1}`,
      open: false,
    };
    setFaqs([...faqs, newFAQ]);
  };

  return (
    <div className="additionalinfo-container">
      {/* Header */}
      <div className="additionalinfo-header">
        <h2 className="additionalinfo-title">FAQ’s</h2>
        <button onClick={addNewFAQ} className="additionalinfo-add-btn">
          <FiPlus /> Add New
        </button>
      </div>

      {/* FAQ Accordion */}
      <div className="additionalinfo-faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="additionalinfo-faq-item">
            <div
              className="additionalinfo-faq-header"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="additionalinfo-faq-title">
                <FiBookOpen className="faq-icon" />
                {faq.question}
              </div>
              {faq.open ? (
                <FiChevronUp className="toggle-icon" />
              ) : (
                <FiChevronDown className="toggle-icon" />
              )}
            </div>

            {faq.open && (
              <div className="additionalinfo-faq-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Donec in justo eget lorem tempor gravida.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <hr className="additionalinfo-divider" />

      {/* Tags Section */}
      <div className="additionalinfo-tags">
        <h3 className="additionalinfo-subtitle">Tags</h3>
        <p className="additionalinfo-tag-note">
          Maximum of 14 keywords. Keywords should all be in lowercase. e.g.
          javascript, react, marketing
        </p>
        <input
          type="text"
          className="additionalinfo-input"
          placeholder="Enter tags separated by commas"
          value={tags}
          onChange={(e) => {
            setTags(e.target.value);
            onChange?.({ ...data, tags: e.target.value });
          }}
        />
      </div>

      <hr className="additionalinfo-divider" />

      {/* Message to Reviewer */}
      <div className="additionalinfo-reviewer">
        <h3 className="additionalinfo-subtitle">Message to a reviewer</h3>
        <textarea
          className="additionalinfo-textarea"
          placeholder="Write your message..."
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            onChange?.({ ...data, message: e.target.value });
          }}
        ></textarea>
      </div>

      {/* Checkbox */}
      <div className="additionalinfo-checkbox">
        <input
          type="checkbox"
          id="license"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="license">
          Any images, sounds, or other assets that are not my own work have been
          appropriately licensed for use in the file preview or main course.
          Other than these items, this work is entirely my own and I have full
          rights to sell it here.
        </label>
      </div>
    </div>
  );
};

export default AdditionalInformation;
