import React, { useEffect, useState } from "react";
import { FiEdit2, FiTrash2, FiPlus, FiX } from "react-icons/fi";

import "./CourseStepFourAdditionalInfo.css";

interface FAQ { id: number; question: string; answer: string; open?: boolean; }
interface Step1 { title: string; description: string; }
interface Step2 { curriculum: string[]; }
interface Step3 { additionalContent: string; }
interface Step4 { faqs: FAQ[]; tags: string; message: string; checked: boolean; }

interface Props { data?: any; onChange?: (data: any) => void; }

const CourseStepFourAdditionalInfo: React.FC<Props> = ({ data = {}, onChange }) => {
  const [faqs, setFaqs] = useState<FAQ[]>(data.faqs ?? [
    { id: 1, question: "How Digital Marketing Works?", answer: "Comfort reached gay perhaps chamber his six detract besides add." },
    { id: 2, question: "What is SEO?", answer: "SEO stands for Search Engine Optimization — helps websites rank better in search results." },
  ]);

  const [tags, setTags] = useState<string>(data.tags ?? "digital marketing, seo");
  const [message, setMessage] = useState<string>(data.message ?? "Please review my course content.");
  const [checked, setChecked] = useState<boolean>(data.checked ?? true);
  const [previewOpen, setPreviewOpen] = useState(false);

  const [addQuestionOpen, setAddQuestionOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => { onChange?.({ faqs, tags, message, checked }); }, [faqs, tags, message, checked, onChange]);

  const addFAQ = (question?: string, answer?: string) => {
    if(question && answer) {
      setFaqs(prev => [...prev, { id: prev.length + 1, question, answer, open: false }]);
    } else {
      setAddQuestionOpen(true);
    }
  };

  const deleteFAQ = (id: number) => setFaqs(prev => prev.filter(f => f.id !== id));
  const toggleFAQ = (id: number) => setFaqs(prev => prev.map(f => f.id === id ? { ...f, open: !f.open } : f));

  const handleSaveNewFAQ = () => {
    if(newQuestion.trim() && newAnswer.trim()) {
      addFAQ(newQuestion.trim(), newAnswer.trim());
      setNewQuestion("");
      setNewAnswer("");
      setAddQuestionOpen(false);
    }
  };

  // Demo data for preview
  const demoStepsData: { step1: Step1; step2: Step2; step3: Step3; step4: Step4 } = {
    step1: { title: "Digital Marketing 101", description: "Intro to marketing and course overview." },
    step2: { curriculum: ["Intro", "SEO Basics", "Content Marketing", "Social Media Marketing"] },
    step3: { additionalContent: "Supplementary materials, downloads, and resources." },
    step4: { faqs, tags, message, checked }
  };

  return (
    <div className="coursestepfouradditionalInfo-step">
      <h2 className="coursestepfouradditionalInfo-title">Additional Information</h2>

      {/* FAQ Section */}
      <div className="coursestepfouradditionalInfo-section">
        <div className="coursestepfouradditionalInfo-header">
          <h3>Upload FAQs</h3>
          <button className="coursestepfouradditionalInfo-add-btn" onClick={() => addFAQ()}>
            <FiPlus /> Add Question
          </button>
        </div>

        {faqs.map(faq => (
          <div key={faq.id} className="coursestepfouradditionalInfo-faq-card">
            <div className="coursestepfouradditionalInfo-faq-header">
              <strong>{faq.question}</strong>
              <div className="coursestepfouradditionalInfo-faq-actions">
                <button className="coursestepfouradditionalInfo-edit-btn" onClick={() => { setNewQuestion(faq.question); setNewAnswer(faq.answer); setAddQuestionOpen(true); }}>
                  <FiEdit2 />
                </button>
                <button className="coursestepfouradditionalInfo-delete-btn" onClick={() => deleteFAQ(faq.id)}>
                  <FiTrash2 />
                </button>
                <button onClick={() => toggleFAQ(faq.id)} style={{ display: 'none' }}></button>
              </div>
            </div>
            {faq.open && <p className="coursestepfouradditionalInfo-faq-body">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="coursestepfouradditionalInfo-section">
        <h3>Tags</h3>
        <input
          type="text"
          className="coursestepfouradditionalInfo-tag-input"
          placeholder="Enter tags separated by commas"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <p className="coursestepfouradditionalInfo-tag-hint">
          Maximum of 14 keywords. Use lowercase, e.g. javascript, react.
        </p>
      </div>

      {/* Message */}
      <div className="coursestepfouradditionalInfo-section">
        <h3>Message to Reviewer</h3>
        <textarea
          className="coursestepfouradditionalInfo-message-box"
          placeholder="Write a message..."
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label className="coursestepfouradditionalInfo-checkbox-line">
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          Any assets not my own are licensed and I have rights to sell.
        </label>
      </div>

      {/* Buttons */}
      <div className="coursestepfouradditionalInfo-navigation">
        <button className="coursestepfouradditionalInfo-preview-btn" onClick={() => setPreviewOpen(true)}>
          Preview Course
        </button>
      </div>

      {/* Submit Note */}
      <p className="coursestepfouradditionalInfo-submit-note">
        Once you click "Submit a Course", your course will be uploaded and marked as pending for review.
      </p>

      {/* Add Question Modal */}
      {addQuestionOpen && (
        <div className="coursestepfouradditionalInfo-modal-overlay">
          <div className="coursestepfouradditionalInfo-modal">
            <div className="coursestepfouradditionalInfo-modal-header">
              <h3>Add New FAQ</h3>
              <button className="coursestepfouradditionalInfo-modal-close" onClick={() => setAddQuestionOpen(false)}>
                <FiX />
              </button>
            </div>
            <div className="coursestepfouradditionalInfo-modal-body">
              <input
                type="text"
                placeholder="Enter Question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
              />
              <textarea
                placeholder="Enter Answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                rows={4}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
              />
              <button
                className="coursestepfouradditionalInfo-preview-btn"
                style={{ marginTop: '15px' }}
                onClick={handleSaveNewFAQ}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewOpen && (
        <div className="coursestepfouradditionalInfo-modal-overlay">
          <div className="coursestepfouradditionalInfo-modal">
            <div className="coursestepfouradditionalInfo-modal-header">
              <h3>Course Preview</h3>
              <button className="coursestepfouradditionalInfo-modal-close" onClick={() => setPreviewOpen(false)}>
                <FiX />
              </button>
            </div>
            <div className="coursestepfouradditionalInfo-modal-body">
              {/* Step 1 */}
              <div className="coursestepfouradditionalInfo-preview-step">
                <h4>Step 1: Course Info</h4>
                <p><strong>Title:</strong> {demoStepsData.step1.title}</p>
                <p><strong>Description:</strong> {demoStepsData.step1.description}</p>
              </div>
              {/* Step 2 */}
              <div className="coursestepfouradditionalInfo-preview-step">
                <h4>Step 2: Curriculum</h4>
                <ul className="coursestepfouradditionalInfo-preview-list">
                  {demoStepsData.step2.curriculum.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              {/* Step 3 */}
              <div className="coursestepfouradditionalInfo-preview-step">
                <h4>Step 3: Additional Content</h4>
                <p>{demoStepsData.step3.additionalContent}</p>
              </div>
              {/* Step 4 */}
              <div className="coursestepfouradditionalInfo-preview-step">
                <h4>Step 4: FAQs & Tags</h4>
                <ul className="coursestepfouradditionalInfo-preview-list">
                  {faqs.map(f => <li key={f.id}><strong>{f.question}:</strong> {f.answer}</li>)}
                </ul>
                <p><strong>Tags:</strong> {tags}</p>
                <p><strong>Message:</strong> {message}</p>
                <p><strong>Assets Licensed:</strong> {checked ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseStepFourAdditionalInfo;
