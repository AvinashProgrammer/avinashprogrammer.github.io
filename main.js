const data = [
    {
        repo: "Typing Speedo",
        page: "Typing Speedo/index.html"
    },
    {
        repo: "Sweet-Alert"
    },
    {
        repo: "T-rex Runner Game",
        page: "T-rex Runner Game/index.html"
    },
];




let html = "";
let githubProfile = "https://github.com/avinashprogrammer/";
data.forEach(obj => {
    if(obj.page != undefined) {
        html += 
        `
            <div class="card">
                <div>
                    <h2 class="project-name">${obj.repo}</h2>
                    <a href="files/${obj.page}" class="button secondary-btn">View</a>
                    <a href="${githubProfile}avinashprogrammer.github.io/tree/main/files/${obj.repo}" class="button primary-btn">Code</a>
                </div>
            </div>
        `;
    }
    
    else {
        html += 
        `
            <div class="card">
                <div>
                    <h2 class="project-name">${obj.repo}</h2>
                    <a href="${githubProfile}avinashprogrammer.github.io/tree/main/files/${obj.repo}" class="button primary-btn">Code</a>
                </div>
            </div>
        `;
    }
})

document.querySelector("#projects-container").innerHTML += html;
