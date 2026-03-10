const Review = require("../models/Review.model");


/* CREATE REVIEW */

exports.createReview = async (req, res) => {

  try {

    const review = new Review(req.body);

    const saved = await review.save();

    res.status(201).json(saved);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


/* GET REVIEWS */

exports.getReviews = async (req, res) => {

  try {

    const reviews = await Review.find().sort({ createdAt: -1 });

    res.json(reviews);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};



exports.getReviewsByInternship = async (req, res) => {

  try {

    const reviews = await Review.find({
      internshipId: req.params.id
    }).sort({ createdAt: -1 });

    res.json(reviews);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};