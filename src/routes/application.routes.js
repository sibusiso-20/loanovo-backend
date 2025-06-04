const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application.controller");

// Endpoint for WordPress Forminator form to submit applications
router.post("/", applicationController.submitApplication);

module.exports = router; 