function lockedProfile() {

let buttonElements = Array.from(document.querySelectorAll('.profile button'));

for (let button of buttonElements) {
    button.addEventListener('click', show);
}

function show(e){
    let divChildren = Array.from(e.target.parentElement.children);

    let locked = divChildren[2].checked;

    if(locked == false) {
        let hiddedFieldsElement = e.target.previousElementSibling;

        if(e.target.textContent == 'Show more') {
            hiddedFieldsElement.style.display = 'inline';
            e.target.textContent = 'Hide it';
        } else {
            hiddedFieldsElement.style.display = '';
            e.target.textContent = 'Show more';
        }
    }
}

}