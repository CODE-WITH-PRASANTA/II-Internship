const RunningInternship = require("../models/RunningInternship.model");


// CREATE Internship
exports.createInternship = async (req, res) => {
  try {

    const data = {
      ...req.body,
      image: req.file ? req.file.path : null
    };

    const internship = new RunningInternship(data);
    const saved = await internship.save();

    res.status(201).json(saved);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET All Internships
exports.getInternships = async (req, res) => {
  try {
    const data = await RunningInternship.find().sort({ createdAt: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET Internship By ID
exports.getInternshipById = async (req, res) => {
  try {

    const internship = await RunningInternship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }

    res.json(internship);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// UPDATE Internship
exports.updateInternship = async (req, res) => {
  try {

    const updateData = {
      ...req.body
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updated = await RunningInternship.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE Internship
exports.deleteInternship = async (req, res) => {
  try {
    await RunningInternship.findByIdAndDelete(req.params.id);

    res.json({ message: "Internship Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};