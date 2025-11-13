import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "./Quiz.css";

interface QuizType {
  title: string;
  questions: number;
  minutes: number;
}

const initialQuizzes: QuizType[] = [
  { title: "Information About UI/UX Design Degree", questions: 25, minutes: 30 },
  { title: "Learn JavaScript and Express to become a Expert", questions: 15, minutes: 25 },
  { title: "Introduction to Python Programming", questions: 22, minutes: 15 },
  { title: "Build Responsive Websites with HTML5 and CSS3", questions: 30, minutes: 50 },
  { title: "Information About Photoshop Design Degree", questions: 20, minutes: 20 },
];

const Quiz: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizType[]>(initialQuizzes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    course: "",
    title: "",
    questions: "",
    totalMarks: "",
    passMark: "",
    duration: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.questions || !formData.duration) {
      alert("Please fill required fields!");
      return;
    }
    setQuizzes([
      ...quizzes,
      { title: formData.title, questions: Number(formData.questions), minutes: Number(formData.duration) },
    ]);
    setFormData({ course: "", title: "", questions: "", totalMarks: "", passMark: "", duration: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <h2>Quiz</h2>
        <button className="quiz-add-btn" onClick={() => setIsModalOpen(true)}>Add Quiz</button>
      </div>

      {/* List View */}
      <div className="quiz-table-wrapper">
        <table className="quiz-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Questions</th>
              <th>Minutes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((q, idx) => (
              <tr key={idx}>
                <td>{q.title}</td>
                <td>💬 {q.questions}</td>
                <td>⏱️ {q.minutes}</td>
                <td>
                  <div className="quiz-actions">
                    <FiEdit2 className="quiz-action-icon" />
                    <FiTrash2 className="quiz-action-icon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="quiz-modal-overlay">
          <div className="quiz-modal">
            <h3>Add New Quiz</h3>

            {/* Row 1 */}
            <div className="quiz-modal-row">
              <label>
                Course *
                <select name="course" value={formData.course} onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Python">Python</option>
                  <option value="Photoshop">Photoshop</option>
                </select>
              </label>

              <label>
                Quiz Title *
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                No of Questions *
                <input
                  type="number"
                  name="questions"
                  value={formData.questions}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            {/* Row 2 */}
            <div className="quiz-modal-row">
              <label>
                Total Marks *
                <input
                  type="number"
                  name="totalMarks"
                  value={formData.totalMarks}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Pass Mark *
                <input
                  type="number"
                  name="passMark"
                  value={formData.passMark}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            {/* Row 3 */}
            <div className="quiz-modal-row">
              <label style={{ width: "100%" }}>
                Duration *
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="quiz-modal-buttons">
              <button className="quiz-cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="quiz-submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
