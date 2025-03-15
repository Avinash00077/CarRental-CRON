'use strict';
import BookingsDTO from '../dto/bookings.dto.js';
import logger from '../utility/logger.utility.js';
import emailTemplates from '../config/app/email.template.js';
import sendEmail from '../utility/email.utility.js';

const ExpiredBookingsService = async () => {
  try {
    const bookingsData = await BookingsDTO.GetExpiredBookingsDTO();
    if (bookingsData.length > 0) {
      Promise.all(
        bookingsData.map(async (b) => {
          const { booking_id, name, brand, car_name, user_email, start_date, start_time, end_date, end_time, car_location, total_price } = b;
          const model = `${brand}-${car_name}`;
          const emailTemplate = emailTemplates.expiredBookingTemplate(
            name,
            start_date,
            start_time,
            end_date,
            end_time,
            booking_id,
            model,
            car_location,
            total_price / 2,
          );
          const subject = emailTemplate.subject;
          const body = emailTemplate.body;
          await sendEmail(user_email, subject, body);
          await BookingsDTO.UpdateExpiredBookingsDTO(booking_id);
        }),
      );
      return bookingsData.length;
    } else {
      return bookingsData.length;
    }
  } catch (error) {
    logger.error({ GetExpiredBookingsService: error.message });
  }
};

export default ExpiredBookingsService;
