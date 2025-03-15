import cron from 'node-cron';
import ExpiredBookingsService from "./service/expired.service.js";
import logger from './utility/logger.utility.js';


cron.schedule('0 0 * * *', async () => {
    await ExpiredBookingsService();  // ✅ Call function inside callback
    logger.info("Expired bookings job executed successfully");
});

cron.schedule('* * * * * *', () => {
    logger.info("Expired bookings job executed successfully (Every Second)");
});

logger.info('cronjob pod is started')