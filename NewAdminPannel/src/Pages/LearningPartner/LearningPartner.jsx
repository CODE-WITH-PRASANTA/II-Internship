import React, { useEffect, useState } from "react";
import API from "../../api/api";
import LearningPartnerForm from "../../components/LearningPartnerForm/LearningPartnerForm";
import LearningPartnerList from "../../components/LearningPartnerForm/LearningPartnerList";
import "./LearningPartner.css";

const LearningPartner = () => {

  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  /* ================= FETCH ================= */
  const fetchPartners = async () => {
    try {
      const res = await API.get("/learning-partners");
      setData(res.data || []);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  /* ================= SAVE ================= */
  const savePartner = async (file) => {
    if (!file && !editItem) return;

    const formData = new FormData();
    if (file) formData.append("image", file);

    try {
      if (editItem && editItem._id) {
        await API.put(`/learning-partners/${editItem._id}`, formData);
      } else {
        await API.post("/learning-partners", formData);
      }

      fetchPartners();
      setEditItem(null);

    } catch (err) {
      console.error("SAVE ERROR:", err);
    }
  };

  /* ================= DELETE ================= */
  const deletePartner = async (id) => {
    if (!window.confirm("Delete this partner?")) return;

    try {
      await API.delete(`/learning-partners/${id}`);
      fetchPartners();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  return (
    <div className="tsk-partner-wrapper">
      <div className="tsk-partner-grid">
        <LearningPartnerForm
          onSubmit={savePartner}
          editItem={editItem}
        />

        <LearningPartnerList
          list={data}
          onEdit={setEditItem}
          onDelete={deletePartner}
        />
      </div>
    </div>
  );
};

export default LearningPartner;