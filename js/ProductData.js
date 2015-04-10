module.exports = {
  // Load the mock produt data into localStorage
  init: function() {
    localStorage.clear();
    localStorag.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Some beer',
        image: 'scoth-beer.png',
        description: 'Mmmmmmm',
        variants: [
          {
            sku: '123123',
            type: '40oz Bottle',
            price: 4.99,
            inventory: 1
          }, {
            sku: '1231234',
            type: '6 Pack',
            price: 12.99,
            inventory: 5
          }, {
            sku: '1231235',
            type: '30 Pack',
            price: 19.99,
            inventory: 3
          }
        ]
      }
    ]));
  }
};
