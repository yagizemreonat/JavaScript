// Game object creation
const gameArea = document.querySelector(".game-area");

export const factory = {
  createWizzard(wizardConfig) {
    // Create element
    const wizardElement = document.createElement("div");
    wizardElement.classList.add("wizard");

    // Set styles
    wizardElement.style.width = wizardConfig.width + "px";
    wizardElement.style.height = wizardConfig.height + "px";
    wizardElement.style.backgroundImage = 'url("images/wizard.png")';
    wizardElement.style.backgroundSize = "contain";
    wizardElement.style.backgroundRepeat = "no-repeat";
    wizardElement.style.backgroundPosition = "center";

    // Set postion
    wizardElement.style.position = "absolute";
    wizardElement.style.top = wizardConfig.y + "px";
    wizardElement.style.left = wizardConfig.x + "px";

    // Attach wizard to the game area
    gameArea.appendChild(wizardElement);
  },
    createFireball() {},
    createBug() {}
};