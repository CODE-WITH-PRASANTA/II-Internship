import React, { useEffect, useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiPlay } from "react-icons/fi";
import "./CourseStepThreeCurriculum.css";

interface Lesson { id: number; title: string; video?: string; description?: string; premium?: boolean; }
interface Topic { id: number; title: string; lessons: Lesson[]; open: boolean; video?: string; description?: string; premium?: boolean; }

interface Props {
  data?: any;
  onChange?: (data: any) => void;
}

const CourseStepThreeCurriculum: React.FC<Props> = ({ data = {}, onChange }) => {
  const [topics, setTopics] = useState<Topic[]>(data.topics || [
    {
      id: 1,
      title: "Introduction of Digital Marketing",
      open: true,
      lessons: [
        { id: 1, title: "Introduction" },
        { id: 2, title: "What is Digital Marketing" },
      ],
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"topic" | "lesson">("topic");
  const [modalAction, setModalAction] = useState<"add" | "edit">("add");
  const [modalTopicId, setModalTopicId] = useState<number | null>(null);
  const [modalLessonId, setModalLessonId] = useState<number | null>(null);

  // New state for extra fields
  const [inputTitle, setInputTitle] = useState("");
  const [inputVideo, setInputVideo] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    onChange?.({ topics });
  }, [topics, onChange]);

  const toggleTopic = (id: number) => {
    setTopics(prev => prev.map(t => t.id === id ? { ...t, open: !t.open } : t));
  };

  const openModal = (
    type: "topic" | "lesson",
    action: "add" | "edit",
    topicId: number | null = null,
    lessonId: number | null = null,
    currentTitle: string = "",
    currentVideo: string = "",
    currentDescription: string = "",
    currentPremium: boolean = false
  ) => {
    setModalType(type);
    setModalAction(action);
    setModalTopicId(topicId);
    setModalLessonId(lessonId);
    setInputTitle(currentTitle);
    setInputVideo(currentVideo);
    setInputDescription(currentDescription);
    setIsPremium(currentPremium);
    setModalOpen(true);
  };

  const handleModalSubmit = () => {
    if (!inputTitle.trim()) return;

    if (modalAction === "add") {
      if (modalType === "topic") {
        setTopics(prev => [...prev, { 
          id: Date.now(), 
          title: inputTitle.trim(), 
          open: true, 
          lessons: [],
          video: inputVideo,
          description: inputDescription,
          premium: isPremium
        }]);
      } else if (modalType === "lesson" && modalTopicId) {
        setTopics(prev =>
          prev.map(t => t.id === modalTopicId
            ? { ...t, lessons: [...t.lessons, { 
                id: Date.now(), 
                title: inputTitle.trim(), 
                video: inputVideo, 
                description: inputDescription,
                premium: isPremium 
              }] }
            : t
          )
        );
      }
    } else if (modalAction === "edit") {
      if (modalType === "topic" && modalTopicId) {
        setTopics(prev => prev.map(t => t.id === modalTopicId ? { 
          ...t, 
          title: inputTitle.trim(),
          video: inputVideo,
          description: inputDescription,
          premium: isPremium
        } : t));
      } else if (modalType === "lesson" && modalTopicId && modalLessonId) {
        setTopics(prev => prev.map(t =>
          t.id === modalTopicId
            ? { ...t, lessons: t.lessons.map(l => l.id === modalLessonId ? { 
                ...l, 
                title: inputTitle.trim(), 
                video: inputVideo, 
                description: inputDescription,
                premium: isPremium
              } : l) }
            : t
        ));
      }
    }

    setModalOpen(false);
  };

  const deleteLesson = (topicId: number, lessonId: number) => {
    setTopics(prev =>
      prev.map(t => t.id === topicId ? { ...t, lessons: t.lessons.filter(l => l.id !== lessonId) } : t)
    );
  };

  return (
    <div className="coursestepthreecurriculum-step">
      <h2 className="coursestepthreecurriculum-section-title">Curriculum</h2>
      <div className="coursestepthreecurriculum-upload">
        {topics.map(topic => (
          <div key={topic.id} className="coursestepthreecurriculum-lecture-section">
            <div
              className="coursestepthreecurriculum-lecture-header"
              onClick={() => toggleTopic(topic.id)}
            >
              <strong>{topic.title}</strong>
              <div>
                <button
                  className="coursestepthreecurriculum-add-lecture-btn"
                  onClick={(e) => { e.stopPropagation(); openModal("lesson", "add", topic.id); }}
                >
                  <FiPlus /> Add Lecture
                </button>
              </div>
            </div>

            {topic.open && (
              <div className="coursestepthreecurriculum-lecture-topics">
                {topic.lessons.map(lesson => (
                  <div key={lesson.id} className="coursestepthreecurriculum-topic-item">
                    <span className="coursestepthreecurriculum-play-icon"><FiPlay /></span>
                    <span className="coursestepthreecurriculum-topic-title">{lesson.title}</span>
                    <div className="coursestepthreecurriculum-topic-actions">
                      <button
                        className="coursestepthreecurriculum-edit-btn"
                        onClick={() => openModal("lesson", "edit", topic.id, lesson.id, lesson.title, lesson.video || "", lesson.description || "", lesson.premium || false)}
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        className="coursestepthreecurriculum-delete-btn"
                        onClick={() => deleteLesson(topic.id, lesson.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          className="coursestepthreecurriculum-add-topic-btn"
          onClick={() => openModal("topic", "add")}
        >
          <FiPlus /> Add Topic
        </button>
      </div>

{modalOpen && (
  <div className="coursestepthreecurriculum-modal-overlay">
    <div className="coursestepthreecurriculum-modal">
      <h3>
        {modalAction === "add"
          ? modalType === "topic" ? "Add New Topic" : "Add New Lecture"
          : modalType === "topic" ? "Edit Topic" : "Edit Lecture"}
      </h3>

      {/* Title field (for both Topic & Lecture) */}
      <input
        type="text"
        placeholder={modalType === "topic" ? "Enter topic title" : "Enter lecture title"}
        value={inputTitle}
        onChange={e => setInputTitle(e.target.value)}
        className="coursestepthreecurriculum-modal-input"
      />

      {/* ONLY for Lecture */}
      {modalType === "lesson" && (
        <>
          <input
            type="text"
            placeholder="Video link"
            value={inputVideo}
            onChange={e => setInputVideo(e.target.value)}
            className="coursestepthreecurriculum-modal-input"
          />

          <textarea
            placeholder="Course description"
            value={inputDescription}
            onChange={e => setInputDescription(e.target.value)}
            className="coursestepthreecurriculum-modal-input"
            rows={3}
          />

          <div className="coursestepthreecurriculum-premium-toggle">
            <span>Free</span>
            <label className="switch">
              <input type="checkbox" checked={isPremium} onChange={() => setIsPremium(!isPremium)} />
              <span className="slider round"></span>
            </label>
            <span>Premium</span>
          </div>
        </>
      )}

      <div className="coursestepthreecurriculum-modal-actions">
        <button onClick={handleModalSubmit} className="coursestepthreecurriculum-modal-submit">
          {modalAction === "add" ? "Add" : "Update"}
        </button>
        <button onClick={() => setModalOpen(false)} className="coursestepthreecurriculum-modal-cancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CourseStepThreeCurriculum;
