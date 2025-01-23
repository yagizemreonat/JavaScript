console.log("My External Script is working!");

const wrapperElement = document.querySelector("#wrapper");
 
    [1,2,3,4].forEach((el) =>{
    // Create span element    
    const divche = document.createElement("div");

    // Add text to the span
    divche.textContent = `${el}. Div Item`;

    // Append to div with ID of "Wrapper"
    wrapperElement.appendChild(divche);
}); 
