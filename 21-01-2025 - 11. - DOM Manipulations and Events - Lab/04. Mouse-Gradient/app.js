function attachGradientEvents() {
    const resultElement = document.getElementById("result");
    const grandiendElement = document.getElementById("gradient");
    
    grandiendElement.addEventListener("mousemove", (event) => {
        const currentMousePosition = event.offsetX;
        const elementWidth = event.currentTarget.clientWidth;

        const percentage = Math.floor((currentMousePosition / elementWidth) * 100);
        resultElement.textContent = `${percentage}%`;
    });
}