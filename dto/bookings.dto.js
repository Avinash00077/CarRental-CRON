'use strict';

import { QueryTypes } from 'sequelize';
import DB from '../config/app/query.config.js';
import mysql from '../config/database/database.config.js';
import logger from '../utility/logger.utility.js';

const GetExpiredBookingsDTO = async () => {
  try {
    const query = DB.QUERY.GET_EXPIRED_BOOKINGS;
    const data = await mysql.query(query, { type: QueryTypes.SELECT });
    return data;
  } catch (error) {
    logger.error({ GetExpiredBookingsDTO: error.message });
    throw new Error(error.message);
  }
};

const GetPaymentPendingBookingsDTO = async () => {
  try {
    const query = DB.QUERY.GET_PAYMENT_PENDING_BOOKINGS;
    const data = await mysql.query(query, { type: QueryTypes.SELECT });
    return data;
  } catch (error) {
    logger.error({ GetPaymentPendingBookingsDTO: error.message });
    throw new Error(error.message);
  }
};

const UpdateExpiredBookingsDTO = async (booking_id) => {
  try {
    const query = DB.QUERY.UPDATE_EXPIRED_BOOKINGS;
    const replacements = { booking_id };
    const data = await mysql.query(query, { replacements, type: QueryTypes.UPDATE });
    return data;
  } catch (error) {
    logger.error({ UpdateExpiredBookingsDTO: error.message });
    throw new Error(error.message);
  }
};

const UpdatePaymentFailureBookingsDTO = async (booking_id) => {
  try {
    const query = DB.QUERY.UPDATE_FAILURE_BOOKING;
    const replacements = { booking_id };
    const data = await mysql.query(query, { replacements, type: QueryTypes.UPDATE });
    return data;
  } catch (error) {
    logger.error({ UpdatePaymentFailureBookingsDTO: error.message });
    throw new Error(error.message);
  }
};

const BookingsDTO = {
  GetExpiredBookingsDTO,
  UpdateExpiredBookingsDTO,
  GetPaymentPendingBookingsDTO,
  UpdatePaymentFailureBookingsDTO,
};

export default BookingsDTO;
