const data = [
    {
        repoName: "Typing Speedo",
        repoPage: "Typing-Speedo/index.html",
        repo: "Typing-Speedo"
    }
];


let html = "";
let githubProfile = "https://github.com/avinashprogrammer/";
data.forEach(obj => {
    html += 
    `
        <div class="card">
            <div class="project-name">${obj.repoName}</div>
            <a href="files/${obj.repoPage}">View</a>
            <a href="${githubProfile}${obj.repo}">Code</a>
        </div>
    `;
})

document.querySelector("#projects-container").innerHTML += html;
