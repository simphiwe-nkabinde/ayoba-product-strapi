'use strict';

/**
 * microapp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::microapp.microapp');
