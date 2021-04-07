function spicoderSwal(obj){const css=`@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);*{margin:0;padding:0;box-sizing:border-box}.mainDiv{display:grid;place-items:center;position:fixed;top:0;left:0;width:100%;height:100vh;background:#00000034;background:rgba(0,0,0,.4)}.alertBox{display:flex;justify-content:center;align-items:center;flex-direction:column;max-width:400px;width:90%;min-height:230px;background:#fff;border-radius:15px;padding:20px;user-select:none;animation:pop .2s linear 1;box-shadow:0 0 20px rgba(0,0,0,.4)}@keyframes pop{0%{transform:scale(.7);opacity:.2}100%{transform:scale(1);opacity:1}}.alertBox .title{text-align:center;color:#484f57;font-family:Rubik,Sans-Serif;font-weight:400;margin-bottom:10px}.alertBox .content{text-align:center;color:#5d6670;font-family:Rubik,Sans-Serif}.alertBox .alert-button{display:block;min-width:120px;height:40px;border:none;outline:0;background:#0cf;border-radius:4px;color:#fff;margin:20px auto 0 auto;transition:.5s;font-family:Rubik,Sans-Serif}.alertBox .alert-button:hover{background:#00a2ca}.alertBox.display-none{animation:pop2 .2s linear 1}@keyframes pop2{0%{transform:scale(1);opacity:1}100%{transform:scale(.7);opacity:0}}`;const style=document.createElement("style");style.appendChild(document.createTextNode(css));document.head.appendChild(style);const mainDiv=document.createElement("div");const alertBox=document.createElement("div");const title=document.createElement("h2");const content=document.createElement("p");const button=document.createElement("button");title.appendChild(document.createTextNode(obj.title));content.appendChild(document.createTextNode(obj.content));button.appendChild(document.createTextNode(obj.buttonText));alertBox.appendChild(title);alertBox.appendChild(content);alertBox.appendChild(button);mainDiv.appendChild(alertBox);mainDiv.setAttribute("class","mainDiv");alertBox.setAttribute("class","alertBox");title.setAttribute("class","title");content.setAttribute("class","content");button.setAttribute("class","alert-button");document.body.appendChild(mainDiv);button.addEventListener("click",()=>{obj.call();alertBox.setAttribute("class","alertBox display-none");setTimeout(()=>{mainDiv.style.display="none";},200)})}