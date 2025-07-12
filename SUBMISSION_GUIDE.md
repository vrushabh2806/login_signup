# Submission Guide

This document provides step-by-step instructions to complete the Node.js Developer practical task submission.

## ✅ Task Completion Checklist

### 1. Project Structure ✅
- [x] Complete Node.js authentication system
- [x] Express.js server setup
- [x] MongoDB integration with Mongoose
- [x] JWT-based authentication
- [x] Password hashing with bcryptjs
- [x] Input validation
- [x] Error handling

### 2. API Endpoints ✅
- [x] **POST /api/signup** - User registration with password hashing
- [x] **POST /api/login** - User authentication with JWT token
- [x] **GET /api/profile** - Protected profile access

### 3. README Requirements ✅
- [x] Node.js version (16.0.0+)
- [x] JWT version (9.0.2)
- [x] bcrypt version (2.4.3)
- [x] Sample login credentials
- [x] MongoDB connection instructions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16.0.0 or higher)
- MongoDB (local or Atlas)
- Git

### Quick Start
1. **Clone and setup:**
   ```bash
   git clone <your-repository-url>
   cd user-authentication-system
   npm run setup
   npm install
   ```

2. **Configure MongoDB:**
   - Local: Start MongoDB service
   - Atlas: Update MONGODB_URI in .env file

3. **Start the server:**
   ```bash
   npm run dev
   ```

4. **Test the API:**
   ```bash
   npm test
   ```

## 📋 Submission Steps

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it: `user-authentication-system`
4. Make it public
5. Don't initialize with README (we already have one)

### Step 2: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit: User Authentication System"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/user-authentication-system.git
git push -u origin main
```

### Step 3: Verify Repository Contents
Ensure your repository includes:
- ✅ `package.json` with all dependencies
- ✅ `README.md` with complete documentation
- ✅ `server.js` - main server file
- ✅ `models/User.js` - user model
- ✅ `routes/auth.js` - authentication routes
- ✅ `routes/profile.js` - profile routes
- ✅ `middleware/auth.js` - JWT middleware
- ✅ `middleware/validation.js` - input validation
- ✅ `config/db.js` - database configuration
- ✅ `.gitignore` - excludes sensitive files
- ✅ `test-api.js` - API testing script
- ✅ `setup.js` - project setup script

### Step 4: Test Your API
1. Start the server: `npm run dev`
2. Run tests: `npm test`
3. Verify all endpoints work:
   - Signup: `POST http://localhost:3000/api/signup`
   - Login: `POST http://localhost:3000/api/login`
   - Profile: `GET http://localhost:3000/api/profile`

### Step 5: Submit Repository Link
Email your GitHub repository link to: **stackdot.hr@gmail.com**

## 🔧 API Testing Examples

### Using cURL:

**Signup:**
```bash
curl -X POST http://localhost:3000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"Password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"Password123"}'
```

**Get Profile (replace <token> with JWT from login):**
```bash
curl -X GET http://localhost:3000/api/profile \
  -H "Authorization: Bearer <token>"
```

### Using Postman:
1. Import the collection (if available)
2. Set base URL: `http://localhost:3000/api`
3. Test each endpoint with sample data

## 📊 Sample Credentials
- **Email:** `test@example.com`
- **Password:** `password123`

## 🔒 Security Features
- Password hashing with bcryptjs (salt rounds: 12)
- JWT tokens with 24-hour expiration
- Input validation and sanitization
- CORS enabled
- Environment variable configuration
- Password strength requirements

## 🐛 Troubleshooting

### Common Issues:
1. **MongoDB Connection Error:**
   - Ensure MongoDB is running
   - Check connection string in .env file

2. **Port Already in Use:**
   - Change PORT in .env file
   - Kill existing process on port 3000

3. **JWT Secret Missing:**
   - Ensure JWT_SECRET is set in .env file

4. **Dependencies Not Found:**
   - Run `npm install`
   - Check Node.js version: `node --version`

## 📞 Support
If you encounter any issues:
1. Check the README.md for detailed instructions
2. Run `npm test` to verify API functionality
3. Check server logs for error messages
4. Ensure all environment variables are set correctly

---

**Good luck with your submission! 🚀** 