module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Albums', [{
      title: 'John Doe',
      status: true,
      userid: 1,
    },
    {
      title: 'Album 2',
      status: true,
      userid: 1,
    },
    {
      title: 'My album',
      status: true,
      userid: 1,
    },
    {
      title: 'I hate cats',
      status: true,
      userid: 1,
    },
    {
      title: 'I love dogs',
      status: false,
      userid: 1,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
