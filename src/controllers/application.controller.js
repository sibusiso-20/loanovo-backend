const applicationService = require("../services/application.service");

const submitApplication = async (req, res) => {
  try {
    console.log("Received raw data:", req.body); // ADD THIS

    const { fullName, email, phone, income, amountRequested } = req.body;

    if (!fullName || !email || !phone || !income || !amountRequested) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const result = await applicationService.handleNewApplication({
      fullName,
      email,
      phone,
      income,
      amountRequested,
    });

    res.status(201).json({ message: "Application received", data: result });
  } catch (error) {
    console.error("Submit error:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};

module.exports = {
  submitApplication,
}; 