const data = [
    {
        repoName: "Typing Speedo",
        repoPage: "Typing-Speedo/index.html",
        repo: "Typing Speedo"
    },
    {
        repoName: "Sweet Alert",
        repo: "Sweet-Alert"
    },
    {
        repoName: "T-rex Runner Game",
        repoPage: "T-rex-Runner-Game/index.html",
        repo: "T-rex-Runner-Game"
    },
];




let html = "";
let githubProfile = "https://github.com/avinashprogrammer/";
data.forEach(obj => {
    if(obj.repoPage != undefined) {
        html += 
        `
            <div class="card">
                <div>
                    <h2 class="project-name">${obj.repoName}</h2>
                    <a href="files/${obj.repoPage}" class="button secondary-btn">View</a>
                    <a href="${githubProfile}${obj.repo}" class="button primary-btn">Code</a>
                </div>
            </div>
        `;
    }
    
    else {
        html += 
        `
            <div class="card">
                <div>
                    <h2 class="project-name">${obj.repoName}</h2>
                    <a href="${githubProfile}${obj.repo}" class="button primary-btn">Code</a>
                </div>
            </div>
        `;
    }
})

document.querySelector("#projects-container").innerHTML += html;
