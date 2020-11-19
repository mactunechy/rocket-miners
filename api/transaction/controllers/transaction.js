"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByUser(ctx) {
    const result = strapi.query("transaction").model.find({
      user: ctx.params.id,
    });

    return result;
  },
};
