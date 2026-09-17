require('dotenv').config();
const { sendOrderEmail } = require('./config/email');

(async () => {
  try {
    const success = await sendOrderEmail({
      orderId: 'TEST-123',
      customerName: 'Test User',
      address: '123 Test St, Test City, Test State - 123456',
      items: [{ name: 'Test Product', qty: 1, price: 100 }],
      total: 100,
      email: 'mohamedibrahim+test@gmail.com', // Change this if needed, but it should output logs either way
      phone: '1234567890',
      altPhone: '',
      estimatedDelivery: new Date(),
      voiceReviewUrl: null
    });
    console.log('Result:', success);
  } catch (err) {
    console.log('Script Error:', err);
  }
})();
