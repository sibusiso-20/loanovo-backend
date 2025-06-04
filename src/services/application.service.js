const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const handleNewApplication = async ({ fullName, email, phone, income, amountRequested }) => {
  // 1. Find or create user
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        fullName,
        phone,
      },
    });
  }

  // 2. Create application for this user
  const application = await prisma.loanApplication.create({
    data: {
      userId: user.id,
      income: parseInt(income),
      amountRequested: parseInt(amountRequested),
      status: "pending",
    },
  });

  return application;
};

module.exports = {
  handleNewApplication,
}; 