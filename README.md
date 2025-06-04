# Loanovo Backend

This is the backend service for the Loanovo loan application system. It provides APIs for user management, loan applications, and loan management.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   NODE_ENV=development
   DATABASE_URL="postgresql://user:password@localhost:5432/loanovo?schema=public"
   JWT_SECRET="your-secret-key"
   JWT_EXPIRES_IN="24h"
   CORS_ORIGIN="http://localhost:3000"
   ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
/src
  /config      - Configuration files
  /controllers - Route controllers
  /routes      - API routes
  /models      - Data models
  /middleware  - Custom middleware
  /services    - Business logic
  /utils       - Utility functions
  server.js    - Entry point
```

## API Documentation

The API documentation will be available at `/api-docs` when the server is running.

## Development

- Run tests: `npm test`
- Generate Prisma client: `npx prisma generate`
- View database: `npx prisma studio`

## License

ISC 