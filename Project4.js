
const navToggle = document.getElementById("hamburgerBtn");
const sideNav = document.getElementById("js-side-nav");

if (navToggle && sideNav) {
    navToggle.addEventListener("click", () => {
        sideNav.classList.toggle("active");
    });
}

const createBtn = document.getElementById('createBtn');
const outputContainer = document.getElementById('outputContainer');

if (createBtn && outputContainer) {
    createBtn.addEventListener('click', function() {
        // Get values from inputs
        const type = document.getElementById('elementType').value;
        const text = document.getElementById('elementText').value;
        const bgColor = document.getElementById('bgColor').value;
        const fontColor = document.getElementById('fontColor').value;

        // Validation
        if (text === "") {
            alert("Please enter some text content!");
            return;
        }

        // Create the element
        const newElement = document.createElement(type);

        // Apply styles and content
        newElement.textContent = text;
        newElement.style.backgroundColor = bgColor;
        newElement.style.color = fontColor;
        newElement.style.padding = "15px";
        newElement.style.margin = "10px 0";
        newElement.style.borderRadius = "8px";
        newElement.style.display = "block"; 
        newElement.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
        newElement.style.textAlign = "center";

        // Add to page
        outputContainer.appendChild(newElement);
    });
}


const teamContainer = document.getElementById("team-container");

if (teamContainer) {
    const teamMembers = [
        {
            alias: "CR7",
            role: "Forward",
            realName: "Cristiano Ronaldo",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", 
            socials: { youtube: "#", facebook: "#", instagram: "#" }
        },
        {
            alias: "Messi",
            role: "Forward",
            realName: "Lionel Messi",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
            socials: { youtube: "#", facebook: "#", instagram: "#" }
        },
        {
            alias: "Neymar",
            role: "Forward",
            realName: "Neymar Jr.",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg",
            socials: { youtube: "#", facebook: "#", instagram: "#" }
        }
    ];

    teamMembers.forEach(player => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <img src="${player.image}" alt="${player.alias}" class="player-img">
            <div class="player-name">${player.alias}</div>
            <div class="player-role">${player.role}</div>
            <div class="real-name">${player.realName}</div>
            <div class="social-links">
                <a href="${player.socials.youtube}" class="social-icon"><i class="fab fa-youtube"></i></a>
                <a href="${player.socials.facebook}" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="${player.socials.instagram}" class="social-icon"><i class="fab fa-instagram"></i></a>
            </div>
        `;
        
        teamContainer.appendChild(card);
    });
}