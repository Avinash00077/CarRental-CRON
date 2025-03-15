import cron from 'node-cron';
import ExpiredBookingsService from './service/expired.service.js';
import PaymentPendingService from './service/paymentFailure.service.js';
import logger from './utility/logger.utility.js';
import customUtility from './utility/custom.utility.js';

cron.schedule('0 0 * * *', async () => {
  try {
    await customUtility.setTimeZone();
    logger.info('Running Expired bookings job');
    await ExpiredBookingsService();
    logger.info('Expired bookings job executed successfully');
  } catch (error) {
    logger.error('Expired bookings job failed');
  }
});

cron.schedule('*/5 * * * *', async () => {
  try {
    await customUtility.setTimeZone();
    logger.info('Running Payment Pending job');
    await PaymentPendingService();
    logger.info('Payment Pending job executed successfully');
  } catch (error) {
    logger.error(' Payment Pending job failed ');
  }
});

logger.info('cronjob pod is started');
