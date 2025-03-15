'use strict';
import properties from '../index.config.js';

const QUERY = {
 
  GET_EXPIRED_BOOKINGS: properties.get('query.get_expired_bookings'),
  UPDATE_EXPIRED_BOOKINGS: properties.get('query.update_expired_bookings'),

  
};

const DB = { QUERY };
export default DB;
