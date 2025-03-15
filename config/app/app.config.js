'use strict';
import properties from '../index.config.js';

const AppConfig = {
  EMAIL_ADDRESS: properties.get('email.email'),
  EMAIL_PASSWORD: properties.get('email.password'),
};

export default AppConfig;
