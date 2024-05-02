'use strict';

/**
 * microapp controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::microapp.microapp');
