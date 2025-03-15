'use strict';
import properties from '../index.config.js';

const QUERY = {
 
  GET_EXPIRED_BOOKINGS: properties.get('query.get_expired_bookings'),
  UPDATE_EXPIRED_BOOKINGS: properties.get('query.update_expired_bookings'),
  GET_PAYMENT_PENDING_BOOKINGS: properties.get('query.get_payment_pending_bookings'),
  UPDATE_FAILURE_BOOKING: properties.get('query.update_failure_booking'),

  
};

const DB = { QUERY };
export default DB;
