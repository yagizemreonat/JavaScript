function pieceOfPie(pieFlavors , firstPieFlavor, lastPieFlavor) {
    const firstIndex = pieFlavors.indexOf(firstPieFlavor);
    const lastIndex = pieFlavors.indexOf(lastPieFlavor);
        
    const result = pieFlavors.slice(firstIndex, lastIndex + 1);    
    return result;
}

pieceOfPie (['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie');
pieceOfPie (['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');


// Piece of Pie

// Write a function that receives three parameters – an array of pie flavors as strings, two target flavors as strings. 
// The result of the function should be a new array, containing a section of the original array, 
// starting at the first flavor parameter, and ending at (and including) the second flavor parameter.
// The input comes as three arguments:
// · An array of strings, representing pie flavors
// · Two more strings, representing the start and end of the section, respectively
// The output is the return value of the function and should be an array of strings.
 
// Input       ['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie'          
// Output      ['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']

// Input       ['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'
// Output      ['Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie']