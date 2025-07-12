const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

// Test data
const testUser = {
  name: 'Test User',
  email: 'test@example.com',
  password: 'Password123'
};

let authToken = '';

// Test signup
async function testSignup() {
  try {
    console.log('Testing signup...');
    const response = await axios.post(`${BASE_URL}/signup`, testUser);
    console.log('✅ Signup successful:', response.data.message);
    authToken = response.data.data.token;
    console.log('Token received:', authToken.substring(0, 20) + '...');
  } catch (error) {
    if (error.response && error.response.status === 400 && error.response.data.message.includes('already exists')) {
      console.log('⚠️  User already exists, proceeding with login...');
    } else {
      console.error('❌ Signup failed:', error.response?.data || error.message);
    }
  }
}

// Test login
async function testLogin() {
  try {
    console.log('\nTesting login...');
    const response = await axios.post(`${BASE_URL}/login`, {
      email: testUser.email,
      password: testUser.password
    });
    console.log('✅ Login successful:', response.data.message);
    authToken = response.data.data.token;
    console.log('Token received:', authToken.substring(0, 20) + '...');
  } catch (error) {
    console.error('❌ Login failed:', error.response?.data || error.message);
  }
}

// Test profile access
async function testProfile() {
  try {
    console.log('\nTesting profile access...');
    const response = await axios.get(`${BASE_URL}/profile`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    console.log('✅ Profile access successful:', response.data.message);
    console.log('User profile:', response.data.data.user);
  } catch (error) {
    console.error('❌ Profile access failed:', error.response?.data || error.message);
  }
}

// Test profile access without token
async function testProfileWithoutToken() {
  try {
    console.log('\nTesting profile access without token...');
    const response = await axios.get(`${BASE_URL}/profile`);
    console.log('❌ This should have failed but succeeded:', response.data);
  } catch (error) {
    console.log('✅ Profile access correctly denied without token:', error.response?.data?.message);
  }
}

// Run all tests
async function runTests() {
  console.log('🚀 Starting API Tests...\n');
  
  await testSignup();
  await testLogin();
  await testProfile();
  await testProfileWithoutToken();
  
  console.log('\n✨ All tests completed!');
}

// Check if server is running
async function checkServer() {
  try {
    const response = await axios.get('http://localhost:3000/');
    console.log('✅ Server is running:', response.data.message);
    return true;
  } catch (error) {
    console.error('❌ Server is not running. Please start the server first with: npm run dev');
    return false;
  }
}

// Main execution
async function main() {
  const serverRunning = await checkServer();
  if (serverRunning) {
    await runTests();
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testSignup, testLogin, testProfile, testProfileWithoutToken }; 