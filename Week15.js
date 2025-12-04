const createBtn = document.querySelector('#createBtn');
const outputContainer = document.querySelector('#outputContainer');

if (createBtn && outputContainer) {
    createBtn.addEventListener('click', function() {
        
        const type = document.querySelector('#elementType').value;
        const text = document.querySelector('#elementText').value;
        const bgColor = document.querySelector('#bgColor').value;
        const fontColor = document.querySelector('#fontColor').value;

        if (text === "") {
            alert("Please enter some text content!");
            return;
        }

        const newElement = document.createElement(type);

        newElement.textContent = text;
        newElement.style.backgroundColor = bgColor;
        newElement.style.color = fontColor;
        newElement.style.padding = "10px";
        newElement.style.borderRadius = "5px";
        newElement.style.border = "1px solid rgba(0,0,0,0.1)"; 

        outputContainer.appendChild(newElement);
    });
}