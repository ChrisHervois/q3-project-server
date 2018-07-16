
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {user_name: 'Bruce Wayne', email: 'bruce@gotham.com', zip_code: '58394'},
        { user_name: 'Tyler Durden', email: 'fight@fc.com', zip_code: '82937' },
        { user_name: 'Jackie Chan', email: 'kung@fu.com', zip_code: '59283' }
      ]);
    });
};
