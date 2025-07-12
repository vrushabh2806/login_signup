# User Authentication System

A simple user authentication system built with Node.js, Express, MongoDB, and JWT.

## Features

- User signup with password hashing
- User login with JWT token generation
- Protected profile access with JWT authentication
- MongoDB integration for data persistence

## Prerequisites

- Node.js (version 16.0.0 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd user-authentication-system
```

2. Run the setup script (optional but recommended):
```bash
npm run setup
```

3. Install dependencies:
```bash
npm install
```

4. Configure environment variables:
   - The setup script will create a `.env` file automatically
   - Or create it manually with the following content:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your-super-secret-jwt-key-here
```

5. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

6. Test the API:
```bash
npm test
```

## API Endpoints

### 1. Signup API
- **URL**: `POST /api/signup`
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### 2. Login API
- **URL**: `POST /api/login`
- **Body**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### 3. Profile API (Protected)
- **URL**: `GET /api/profile`
- **Headers**: `Authorization: Bearer <jwt-token>`

## Sample Login Credentials

After running the application, you can use these sample credentials for testing:

**Email**: `test@example.com`
**Password**: `password123`

Or create your own account using the signup endpoint.

## MongoDB Connection Instructions

### Option 1: Local MongoDB
1. Install MongoDB on your system
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/auth-system`

### Option 2: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace the MONGODB_URI in your `.env` file

## Dependencies and Versions

- **Node.js**: 16.0.0+
- **Express**: 4.18.2
- **Mongoose**: 7.5.0
- **bcryptjs**: 2.4.3
- **jsonwebtoken**: 9.0.2
- **dotenv**: 16.3.1
- **cors**: 2.8.5
- **express-validator**: 7.0.1

## Project Structure

```
user-authentication-system/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
├── README.md             # This file
├── models/
│   └── User.js           # User model
├── routes/
│   ├── auth.js           # Authentication routes
│   └── profile.js        # Profile routes
├── middleware/
│   ├── auth.js           # JWT authentication middleware
│   └── validation.js     # Input validation middleware
└── config/
    └── db.js             # Database configuration
```

## Testing the API

You can test the API endpoints using tools like:
- Postman
- cURL
- Thunder Client (VS Code extension)

### Example cURL commands:

**Signup:**
```bash
curl -X POST http://localhost:3000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

**Get Profile (replace <token> with the JWT token from login):**
```bash
curl -X GET http://localhost:3000/api/profile \
  -H "Authorization: Bearer <token>"
```

## Security Features

- Password hashing using bcryptjs
- JWT token-based authentication
- Input validation and sanitization
- CORS enabled for cross-origin requests
- Environment variable configuration

## License

MIT License 