function extractText() {
    // get ul list elements
    const liElements = document.querySelectorAll('#items > li');
    console.log(liElements);
    
// Extract li items text
    const items = Array.from(liElements).map(li => {
        return li.textContent;
        
    });
    console.log(items);
    
    // Get result element
    const resultTextArea = document.getElementById("result");
    resultTextArea.value = items.join("\n");

}



//

// function extractText() {
//     // get ul list elements
//     const liElements = document.querySelectorAll('#items > li');

//     // Extract li items text
//     const items = Array.from(liElements);
//     const items = liElToArray.map(li => {
//         return li.textContent;
//     });

//     // Get result element
//     const resultTextArea = document.getElementById("result");
//     resultTextArea.value = items.join("\n");

// }