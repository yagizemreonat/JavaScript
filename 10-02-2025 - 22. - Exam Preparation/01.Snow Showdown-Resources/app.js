window.addEventListener("load", solve);

function solve() {
  // extract html elements
  let snowmanNameElement = document.getElementById("snowman-name");
  let snowmanHeightElement = document.getElementById("snowman-height");
  let locationElement = document.getElementById("location");
  let creatorNameElement = document.getElementById("creator-name");
  let attributeElement = document.getElementById("special-attribute");
  
  let addButtonElement = document.querySelector(".add-btn");
  let snowListElement = document.querySelector(".snowman-preview");
  let snowSnowmanElement = document.querySelector(".snow-list");

  let main = document.getElementById("hero");
  let bodyElement = document.querySelector(".body");
  let backImg = document.getElementById("back-img");
  

  addButtonElement.addEventListener("click", onAdd);

  function onAdd(e){
    e.preventDefault();

    if (
      snowmanNameElement.value === '' ||
      snowmanHeightElement.value === '' ||
      locationElement.value === '' ||
      creatorNameElement.value === '' ||
      attributeElement.value === ''
    ) {
      return;
    }

    // create snow man data elements
    
    let articleElementInfo = document.createElement("article");
    let liElementInfo = document.createElement("li");
    liElementInfo.setAttribute("class", "snowman-info");


    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    let snowmanName = document.createElement("p");
    snowmanName.textContent = `Name: ${snowmanNameElement.value}`;

    let snowmanHeight = document.createElement("p");
    snowmanHeight.textContent = `Height: ${snowmanHeightElement.value}`;
    
    let location = document.createElement("p");
    location.textContent = `Location: ${locationElement.value}`;

    let creator = document.createElement("p");
    creator.textContent = `Creator: ${creatorNameElement.value}`;

    let attribute = document.createElement("p");
    attribute.textContent = `Attribute: ${attributeElement.value}`;
    
    //button
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit";
    
    let nextButton = document.createElement("button");
    nextButton.setAttribute("class", "next-btn");
    nextButton.textContent = "Next";

    
    articleElementInfo.appendChild(snowmanName);
    articleElementInfo.appendChild(snowmanHeight);
    articleElementInfo.appendChild(location);
    articleElementInfo.appendChild(creator);
    articleElementInfo.appendChild(attribute);


    btnContainer.appendChild(editButton);
    btnContainer.appendChild(nextButton);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(btnContainer);

    snowListElement.append(liElementInfo);

    // save values into variables and clear them
    let editedSnowmanName = snowmanNameElement.value;
    let editedHeight = snowmanHeightElement.value;
    let editedLocation = locationElement.value;
    let editedCreatorName = creatorNameElement.value;
    let editedAttribute = attributeElement.value;
        
    snowmanNameElement.value = "";
    snowmanHeightElement.value = "";
    locationElement.value = "";
    creatorNameElement.value = "";
    attributeElement.value = "";

    addButtonElement.disabled = true;     // after add the button disabled

    // Edit function
    editButton.addEventListener("click", onEdit); 
    function onEdit () { 
      snowmanNameElement.value = editedSnowmanName;
      snowmanHeightElement.value = editedHeight;
      locationElement.value = editedLocation;
      creatorNameElement.value = editedCreatorName;
      attributeElement.value = editedAttribute;

      liElementInfo.remove();
      addButtonElement.disabled = false;
    }

    // Next function
    nextButton.addEventListener("click", onNext); 
    function onNext () { 
       let liElementConfirm = document.createElement("li");
       liElementConfirm.setAttribute("class", "snowman-content");

       let articleElementContinue = articleElementInfo;

       let sendBtn = document.createElement("button");
       sendBtn.setAttribute("class", "send-btn");
       sendBtn.textContent = "Send";

       articleElementContinue.appendChild(sendBtn);
       liElementConfirm.appendChild(articleElementContinue);

       liElementInfo.remove();
       snowSnowmanElement.appendChild(liElementConfirm);

       sendBtn.addEventListener("click", onConfirm);

       function onConfirm () {

        main.remove();

        let backButton = document.createElement("button");
        backButton.setAttribute("class", "back-button");
        backButton.textContent = "Back";
        backImg.hidden = false;

        bodyElement.appendChild(backButton);

        backButton.addEventListener("click", onBack); 

        function onBack () {
          window.location.reload();
        }

       }
    }
  }
}
