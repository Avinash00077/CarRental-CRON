'use strict';

import logger from '../utility/logger.utility.js';
import BookingsDTO from '../dto/bookings.dto.js';
import emailTemplates from '../config/app/email.template.js';
import AppConfig from '../config/app/app.config.js';
import sendEmail from '../utility/email.utility.js';

const PaymentPendingService = async () => {
  try {
    const bookingsData = await BookingsDTO.GetPaymentPendingBookingsDTO();
    if (bookingsData.length > 0) {
      Promise.all(
        bookingsData.map(async (b) => {
          const { booking_id, name, user_email, total_price, payment_mode } = b;

          const emailTemplate = emailTemplates.paymentFailureTemplate(
            name,
            booking_id,
            total_price,
            payment_mode,
            'N/A',
            AppConfig.EMAIL_ADDRESS,
          );
          const subject = emailTemplate.subject;
          const body = emailTemplate.body;
          await sendEmail(user_email, subject, body);
          await BookingsDTO.UpdatePaymentFailureBookingsDTO(booking_id);
        }),
      );
      return bookingsData.length;
    } else {
      return bookingsData.length;
    }
  } catch (error) {
    logger.error({ PaymentPendingService: error.message });
    throw new Error(error.message);
  }
};

export default PaymentPendingService;
