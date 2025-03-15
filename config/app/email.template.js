'use strict';

const expiredBookingTemplate = (name, start_date, start_time, end_date, end_time, bookingId, model, location) => {
  return {
    subject: 'Your Car Booking Has Expired 🚫',
    body: `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Expired Notification</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              background-color: white;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              border-top: 5px solid #d9534f;
          }
          h2 {
              color: #d9534f;
              text-align: center;
          }
          .details {
              background: #f9f9f9;
              padding: 15px;
              border-radius: 5px;
              margin-bottom: 15px;
          }
          .details p {
              margin: 8px 0;
              color: #333;
          }
          .note {
              font-size: 14px;
              color: #6c757d;
              margin-top: 15px;
          }
          .footer {
              text-align: center;
              font-size: 14px;
              color: #6c757d;
              margin-top: 20px;
              border-top: 1px solid #ddd;
              padding-top: 10px;
          }
          .btn {
              display: block;
              width: 100%;
              max-width: 220px;
              margin: 20px auto;
              padding: 12px;
              text-align: center;
              background-color: #d9534f;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              transition: 0.3s;
          }
          .btn:hover {
              background-color: #c9302c;
              color: white;
              transform: scale(1.05);
          }
          .section-title {
              font-weight: bold;
              font-size: 16px;
              margin-top: 10px;
              color: #d9534f;
          }
      </style>
  </head>
  <body>
  
  <div class="container">
      <h2>🚫 Booking Expired</h2>
  
      <p>Dear <strong>${name}</strong>,</p>
      <p>We regret to inform you that your car booking with <strong>DND CarRental</strong> has expired as the ride was not started on time. Below are the details:</p>
  
      <div class="details">
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          <p><strong>Car:</strong> ${model}</p>
          <p><strong>Scheduled Pickup Date & Time:</strong> ${start_date} ${start_time}</p>
          <p><strong>Scheduled Drop-off Date & Time:</strong> ${end_date} ${end_time}</p>
          <p><strong>Pickup Location:</strong> ${location}</p>
          <p><strong>Drop-off Location:</strong> ${location}</p>
      </div>
  
      <p class="section-title">📢 Important Information:</p>
      <ul>
          <li>This booking has been marked as <strong>expired</strong> since the ride was not started on time.</li>
          <li>Unfortunately, expired bookings are <strong>non-refundable</strong> as per our policy.</li>
          <li>If you still wish to book a car, you can make a new reservation through our website.</li>
      </ul>
  
      <a href="https://carrentalsdnd.web.app/" class="btn">Book Again</a>
  
      <div class="footer">
          <p>For any assistance, contact us at <a href="mailto:dndcarrentals@gmail.com" style="color: #007bff;">dndcarrentals@gmail.com</a> or call <strong>[Customer Support Number]</strong>.</p>
          <p>&copy; <span id="year"></span> DND CarRental. All rights reserved.</p>
      </div>
  </div>
  
  <script>
      document.getElementById("year").textContent = new Date().getFullYear();
  </script>
  
  </body>
  </html>
  `,
  };
};

const paymentFailureTemplate = (name, bookingId, amount, paymentMode, transactionId, supportEmail) => {
    return {
      subject: 'Payment Failure Notification ❌',
      body: `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Failure Alert</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              background-color: white;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              border-top: 5px solid #d9534f;
          }
          h2 {
              color: #d9534f;
              text-align: center;
          }
          .details {
              background: #f9f9f9;
              padding: 15px;
              border-radius: 5px;
              margin-bottom: 15px;
          }
          .details p {
              margin: 8px 0;
              color: #333;
          }
          .amount {
              text-align: center;
              font-size: 22px;
              font-weight: bold;
              color: #d9534f;
              background: #fce4e4;
              padding: 12px;
              border-radius: 8px;
          }
          .note {
              font-size: 14px;
              color: #6c757d;
              margin-top: 15px;
          }
          .footer {
              text-align: center;
              font-size: 14px;
              color: #6c757d;
              margin-top: 20px;
              border-top: 1px solid #ddd;
              padding-top: 10px;
          }
          .btn {
              display: block;
              width: 100%;
              max-width: 220px;
              margin: 20px auto;
              padding: 12px;
              text-align: center;
              background-color: #d9534f;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              transition: 0.3s;
          }
          .btn:hover {
              background-color: #c9302c;
              color: white;
              transform: scale(1.05);
          }
          .section-title {
              font-weight: bold;
              font-size: 16px;
              margin-top: 10px;
              color: #d9534f;
          }
      </style>
  </head>
  <body>
  
  <div class="container">
      <h2>❌ Payment Failure Notice</h2>
  
      <p>Dear <strong>${name}</strong>,</p>
      <p>We regret to inform you that your recent payment attempt for your booking has failed.</p>
  
      <div class="details">
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          <p><strong>Amount Attempted:</strong> ₹${amount}</p>
          <p><strong>Payment Mode:</strong> ${paymentMode}</p>
          <p><strong>Transaction ID:</strong> ${transactionId || 'N/A'}</p>
      </div>

      <div class="amount">
          💰 Payment Status: <strong>Failed</strong>
      </div>
  
      <p class="section-title">📢 What To Do Next?</p>
      <ul>
          <li>Ensure your bank account or card has sufficient funds.</li>
          <li>Try processing the payment again using a different method.</li>
          <li>If the issue persists, please contact our support team immediately.</li>
      </ul>
  
      <a href="https://carrentalsdnd.web.app/" class="btn">Book Again</a>
  
      <div class="footer">
          <p>For urgent concerns, please contact us at <a href="mailto:${supportEmail}" style="color: #007bff;">${supportEmail}</a>.</p>
          <p>&copy; <span id="year"></span> DND CarRental. All rights reserved.</p>
      </div>
  </div>
  
  <script>
      document.getElementById("year").textContent = new Date().getFullYear();
  </script>
  
  </body>
  </html>
  `,
    };
  };


const emailTemplates = {
  expiredBookingTemplate,
  paymentFailureTemplate,
};

export default emailTemplates;
