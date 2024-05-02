'use strict';

/**
 * microapp router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::microapp.microapp');
