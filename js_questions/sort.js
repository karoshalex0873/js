// sort allay of objects by name
const Products = [ 
{name: "Laptop", price: 100 ,quantity: 10},
{name: "Mobile", price: 50 ,quantity: 20},
{name: "TV", price: 500 ,quantity: 5},
{name: "Tablet", price: 150 ,quantity: 15},
{name: "Earphone", price: 10 ,quantity: 50},
];
//  sort by name
const  sortedProducts = Products.map((product)=>product.name).sort();
console.log(`sorted product list ${sortedProducts}`)

// sort by price
const sortProductPrice = Products.map((product) => product.price).sort((a , b)=> a-b);  
console.log(`sorted product price ${sortProductPrice}`)

// sort by quantity
const sortProductQuantity = Products.map((product) => product.quantity).sort((a,b)=>b-a)
console.log(`sorted product quantity ${sortProductQuantity}`)


// functions in javascript
function areaOfTriangle(base,height){
  Area= 0.5 * base * height;
  return Area;
}
console.log(areaOfTriangle(5,20));

const areaOfSquare = (side ,width)=> side*width;
console.log(areaOfSquare(5,10));