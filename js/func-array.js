// https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056#.il7mn3ua3


var animals = [
  { name: ‘Waffles’, type: ‘dog’, age: 12 },
  { name: ‘Fluffy’, type: ‘cat’, age: 14 },
  { name: ‘Spelunky’, type: ‘dog’, age: 4 },
  { name: ‘Hank’, type: ‘dog’, age: 11 },
];
var oldDogNames = 
  animals
    .filter(function(animal) {
      return animal.age > 10 && animal.type === ‘dog’;
    })
    .map(function(animal) {
      return animal.name;
    });
// oldDogNames will now be the array [ ‘Waffles’, ‘Hank’ ].


