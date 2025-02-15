function solution() {
    const elements = {
        scentTypeInput: document.getElementById('scent-type'),
        budgetInput: document.getElementById('budget'),
        occasionInput: document.getElementById('occasion'),
        brandPreferenceInput: document.getElementById('brand'),
        skinTypeInput: document.getElementById('skin-type'),
        nextButton: document.getElementById('next-btn'),
        preferenceList: document.querySelector('.preference-list'),
        thanksText: document.getElementById('thanks-text'),
        perfumeInfoSection: document.querySelector('#perfume-info'),
    };

    function clearInputFields() {
        Object.values(elements).forEach(input => {
            if (input.tagName === 'INPUT' || input.tagName === 'SELECT') input.value = '';
        });
    }

    function toggleButtons() {
        elements.nextButton.disabled = true;
        createButton('Edit', 'edit-btn', handleEdit);
        createButton('Continue', 'continue-btn', handleContinue);
    }

    function createButton(text, className, handler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add(className);
        button.addEventListener('click', handler);
        elements.perfumeInfoSection.appendChild(button);
    }

    function handleNext(event) {
        event.preventDefault(); // Prevent form submission

        const inputs = getInputValues();
        if (Object.values(inputs).some(value => !value)) {
            alert('Please fill in all fields before proceeding.');
            return;
        }

        elements.thanksText.textContent = '';
        const listItem = createListItem(inputs);
        elements.preferenceList.appendChild(listItem);
        clearInputFields();
        toggleButtons();
    }

    function getInputValues() {
        return {
            scentType: elements.scentTypeInput.value.trim(),
            budget: elements.budgetInput.value.trim(),
            occasion: elements.occasionInput.value.trim(),
            brandPreference: elements.brandPreferenceInput.value.trim(),
            skinType: elements.skinTypeInput.value.trim(),
        };
    }

    function createListItem(inputs) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Preferred Scent Type:</strong> ${inputs.scentType}<br>
            <strong>Budget:</strong> ${inputs.budget}<br>
            <strong>Occasion:</strong> ${inputs.occasion}<br>
            <strong>Brand Preference:</strong> ${inputs.brandPreference}<br>
            <strong>Skin Type:</strong> ${inputs.skinType}
        `;
        return listItem;
    }

    function handleEdit() {
        const listItem = elements.preferenceList.querySelector('li');
        if (listItem) {
            const inputs = Array.from(listItem.querySelectorAll('strong')).map(strong => strong.nextSibling.textContent.trim());
            [elements.scentTypeInput.value, elements.budgetInput.value, elements.occasionInput.value, elements.brandPreferenceInput.value, elements.skinTypeInput.value] = inputs;
            elements.preferenceList.removeChild(listItem);
            elements.nextButton.disabled = false;
            removeButtons();
        }
    }

    function removeButtons() {
        const buttons = ['edit-btn', 'continue-btn'];
        buttons.forEach(className => {
            const button = document.querySelector(`.${className}`);
            if (button) document.removeChild(button)
            });
    }

    function handleContinue() {
        const confirmList = document.querySelector('.confirm-list');
        const listItem = elements.preferenceList.querySelector('li');
        if (listItem) {
            confirmList.appendChild(listItem);
            createButton('Confirm', 'confirm-btn', handleConfirm);
            createButton('Cancel', 'cancel-btn', handleCancel);
        }
    }

    function handleConfirm() {
        const confirmList = document.querySelector('.confirm-list');
        const listItem = confirmList.querySelector('li');
        if (listItem) {
            confirmList.removeChild(listItem);
            elements.nextButton.disabled = false;
            elements.thanksText.textContent = 'Thank you for sharing your preferences!';
            removeButtons();
        }
    }

    function handleCancel() {
        const confirmList = document.querySelector('.confirm-list');
        const listItem = confirmList.querySelector('li');
        if (listItem) {
            confirmList.removeChild(listItem);
            elements.nextButton.disabled = false;
            removeButtons();
        }
    }

    elements.nextButton.addEventListener('click', handleNext);
}

solution();