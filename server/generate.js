var faker = require('faker');

var db = { items: []};
for (var i = 1; i<= 300; i++) {
  db.items.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}
console.log(JSON.stringify(db));