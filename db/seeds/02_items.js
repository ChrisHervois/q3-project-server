
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        { item_name: 'Boxing Gloves', item_description: 'For solving any disagreemetns', item_price: '10', img_url: 'https://s7d2.scene7.com/is/image/dkscdn/16ELSYYTHBXNGGLVSBXN_is/', duration: 'Day', user_id: '2' },
        { item_name: 'Snowboard', item_description: 'shred the gnarly pow pow', item_price: '35', img_url: 'https://images-na.ssl-images-amazon.com/images/I/61jRhAr-aGL._SL1000_.jpg', duration: 'Day', user_id: '3' },
        { item_name: 'Golf Clubs', item_description: 'Win every game', item_price: '120', img_url: 'https://images-na.ssl-images-amazon.com/images/I/61XwqksgbaL._SY355_.jpg', duration: 'Day', user_id: '1' },
        { item_name: 'Camping Gear', item_description: 'Complete camping set comes with tent and camping gear', item_price: '120', img_url: 'http://coldoutdoorsman.com/wp-content/uploads/2016/03/camping-gear-sales.jpg', duration: 'Day', user_id: '1' },
        { item_name: 'Surfboard', item_description: 'Catch some waves bro!', item_price: '120', img_url: 'https://lostsurfboards.wpengine.com/wp-content/uploads/2018/05/vdt.jpg', duration: 'Day', user_id: '1' },
        { item_name: 'Playstation 4', item_description: 'Better than Xbox!', item_price: '120', img_url: 'https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$', duration: 'Day', user_id: '1' },
        { item_name: 'Complete tool set', item_description: 'Take on your next project with confidence!', item_price: '120', img_url: 'http://molotilo.com/wp-content/uploads/2016/07/complete-tool-set-with-box.jpg', duration: 'Day', user_id: '1' },
      ]);
    });
};
