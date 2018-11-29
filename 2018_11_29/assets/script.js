// const products = [
//     {
//         name: "cola",
//         count: 2,
//         isBought: true
//     },
//     {
//         name: "ice cream",
//         count: 3,
//         isBought: false
//     },
//     {
//         name: "cake",
//         count: 1,
//         isBought: true
//     },
//     {
//         name: "Ford Mustang 2018",
//         count: 1,
//         isBought: false
//     }
// ];
//
// function showSorted() {
//     products.sort((a, b) => a.isBought - b.isBought);
//     for (let i = 0; i < products.length; i++) {
//         console.log(products[i]);
//     }
// }
//
// function addProduct(product) {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].name === product.name) {
//             products[i].count += product.count;
//             return;
//         }
//     }
//     products.push(product);
// }
//
// function buyProduct(name) {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].name === name) {
//             products[i].isBought = true;
//             return;
//         }
//     }
// }
//
// addProduct({name:"ice cream",count:2,isBought:false});
// addProduct({name:"milk",count:2,isBought:false});
// buyProduct("ice cream");
// showSorted();


