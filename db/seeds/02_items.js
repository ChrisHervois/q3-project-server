
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        { item_name: 'Boxing Gloves', item_description: 'These gloves will win every fight!', item_price: '10', img_url: 'https://s7d2.scene7.com/is/image/dkscdn/16ELSYYTHBXNGGLVSBXN_is/', user_id: '2' },
        { item_name: 'Grappling Hook', item_description: 'Lets you climb any building', item_price: '120', img_url: 'https://images-na.ssl-images-amazon.com/images/I/81Ba5zIjRxL._SX355_.jpg', user_id: '1' },
        { item_name: 'Snowboard', item_description: 'shred the gnarly pow pow', item_price: '35', img_url: 'https://images-na.ssl-images-amazon.com/images/I/61jRhAr-aGL._SL1000_.jpg', user_id: '3' }
      ]);
    });
};
