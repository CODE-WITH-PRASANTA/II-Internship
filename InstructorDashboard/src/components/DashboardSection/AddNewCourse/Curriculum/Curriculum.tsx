import React, { useState, useEffect } from "react";
import {
  FiBookOpen,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiChevronUp,
  FiPlay,
} from "react-icons/fi";
import "./Curriculum.css";

interface Lesson {
  id: number;
  title: string;
}

interface Topic {
  id: number;
  title: string;
  lessons: Lesson[];
  open: boolean;
}

interface CurriculumProps {
  data: any;
  onChange: (data: any) => void;
}

const Curriculum: React.FC<CurriculumProps> = ({ data, onChange }) => {
  const [topics, setTopics] = useState<Topic[]>(
    data?.topics || [
      {
        id: 1,
        title: "Introduction of Digital Marketing",
        open: true,
        lessons: [
          { id: 1, title: "Describe SEO Engine" },
          { id: 2, title: "Know about all marketing" },
        ],
      },
      {
        id: 2,
        title: "Installing Development Software",
        open: false,
        lessons: [],
      },
      {
        id: 3,
        title: "Hello World Project from GitHub",
        open: false,
        lessons: [],
      },
    ]
  );

  useEffect(() => {
    onChange({ topics });
  }, [topics]);

  const toggleTopic = (id: number) => {
    setTopics((prev) =>
      prev.map((topic) =>
        topic.id === id ? { ...topic, open: !topic.open } : topic
      )
    );
  };

  const addTopic = () => {
    const newTopic: Topic = {
      id: topics.length + 1,
      title: `New Topic ${topics.length + 1}`,
      open: true,
      lessons: [],
    };
    setTopics([...topics, newTopic]);
  };

  const addLesson = (topicId: number) => {
    const newLesson: Lesson = {
      id: Date.now(),
      title: "New Lesson",
    };
    setTopics(
      topics.map((topic) =>
        topic.id === topicId
          ? { ...topic, lessons: [...topic.lessons, newLesson] }
          : topic
      )
    );
  };

  const deleteLesson = (topicId: number, lessonId: number) => {
    setTopics(
      topics.map((topic) =>
        topic.id === topicId
          ? {
              ...topic,
              lessons: topic.lessons.filter((lesson) => lesson.id !== lessonId),
            }
          : topic
      )
    );
  };

  return (
    <div className="curriculum-container">
      <div className="curriculum-header">
        <h2 className="curriculum-title">Curriculum</h2>
        <button onClick={addTopic} className="curriculum-add-topic-btn">
          <FiPlus /> Add New Topic
        </button>
      </div>

      <div className="curriculum-list">
        {topics.map((topic) => (
          <div key={topic.id} className="curriculum-topic">
            <div
              className="curriculum-topic-header"
              onClick={() => toggleTopic(topic.id)}
            >
              <div className="curriculum-topic-title">
                <FiBookOpen className="curriculum-topic-icon" />
                {topic.title}
              </div>
              {topic.open ? (
                <FiChevronUp className="curriculum-toggle-icon" />
              ) : (
                <FiChevronDown className="curriculum-toggle-icon" />
              )}
            </div>

            {topic.open && (
              <div className="curriculum-lessons">
                {topic.lessons.map((lesson) => (
                  <div key={lesson.id} className="curriculum-lesson">
                    <div className="curriculum-lesson-left">
                      <FiPlay className="curriculum-lesson-play" />
                      <span>{lesson.title}</span>
                    </div>
                    <div className="curriculum-lesson-actions">
                      <FiEdit2 className="edit-icon" />
                      <FiTrash2
                        className="delete-icon"
                        onClick={() => deleteLesson(topic.id, lesson.id)}
                      />
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => addLesson(topic.id)}
                  className="curriculum-add-lesson-btn"
                >
                  <FiPlus /> Add Lesson
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
