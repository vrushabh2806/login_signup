const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up User Authentication System...\n');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists. Skipping environment setup.');
} else {
  // Create .env file with default values
  const envContent = `PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file with default configuration');
  console.log('📝 Please update the JWT_SECRET in .env file for production use\n');
}

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('✅ Dependencies already installed');
} else {
  console.log('📦 Installing dependencies...');
  console.log('   Run: npm install');
  console.log('');
}

console.log('📋 Next steps:');
console.log('1. Install dependencies: npm install');
console.log('2. Start MongoDB (local or Atlas)');
console.log('3. Update .env file with your MongoDB connection string');
console.log('4. Start the server: npm run dev');
console.log('5. Test the API: npm test');
console.log('');
console.log('🌐 API will be available at: http://localhost:3000');
console.log('📚 API Documentation: http://localhost:3000');
console.log('');
console.log('✨ Setup complete!'); 