document.getElementById("colorform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let color = document.getElementById("color-input").value;
    document.body.style.backgroundColor = color;
});
