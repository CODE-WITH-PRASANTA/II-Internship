const Internship = require("../models/Internship.model");


// CREATE INTERNSHIP
exports.createInternship = async (req, res) => {

  try {

    const internship = new Internship(req.body);

    const saved = await internship.save();

    res.status(201).json(saved);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};



// GET ALL INTERNSHIPS
exports.getInternships = async (req, res) => {

  try {

    const data = await Internship.find().sort({ createdAt: -1 });

    res.json(data);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};



// GET INTERNSHIP BY ID
exports.getInternshipById = async (req, res) => {

  try {

    const internship = await Internship.findById(req.params.id);

    res.json(internship);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};



// UPDATE INTERNSHIP
exports.updateInternship = async (req, res) => {

  try {

    const updated = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};



// DELETE INTERNSHIP
exports.deleteInternship = async (req, res) => {

  try {

    await Internship.findByIdAndDelete(req.params.id);

    res.json({ message: "Internship Deleted" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};