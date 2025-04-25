"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          id: uuidv4(),
          title: "First Post",
          content: "This is the first blog post.",
          userId: "user-uuid-1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: "Second Post",
          content: "This is the second blog post.",
          userId: "user-uuid-2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
