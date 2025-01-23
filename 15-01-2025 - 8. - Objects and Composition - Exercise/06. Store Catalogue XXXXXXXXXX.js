// Store Catalogue

// You have to create a sorted catalog of store products. You will be given the products’ names and prices. 
// You need to order them in alphabetical order.

// Input
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. 
// There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.

// Output
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. 
// The products must be divided into groups, by the initial of their name. 
// The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names. 
// For more info check the examples.
 
// Input Output  

// Input   ['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'] 
// Output  A Anti-Bug Spray: 15 Apple: 1.25 Appricot: 20.4 B Boiler: 300 D Deodorant: 10 F Fridge: 1500 T T-Shirt: 10 TV: 1499  

// Input   ['Banana : 2','Rubic's Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']
// Output  B Banana: 2 Barrel: 10 P Pesho: 0.000001 R Rali Car: 2000000 Raspberry P: 4999 Rolex: 100000 Rollon: 10 Rubic's Cube: 5

