'use strict'

import mysql from '../config/database/database.config.js';

const formatDateTime = (date, time) => {
    const [year, month, day] = date.split('-');
    return `${year}-${month}-${day}T${time}`;
  };

  const istTimestamp = () => {
    const now = new Date();
    const offset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    const istTime = new Date(now.getTime() + offset).toISOString().replace('T', ' ').substring(0, 19);
    return istTime;
  };

const setTimeZone = async (req, res, next) => {
  
  await mysql.query("SET time_zone = '+05:30';"); // Enforces IST per session
  next();
};


const customUtility = { formatDateTime, istTimestamp, setTimeZone};
export default customUtility;