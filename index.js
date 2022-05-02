const main = document.querySelector("main");
main.remove();

const newHeader = document.createElement("h1");
document.body.append(newHeader);

newHeader.setAttribute("id","victory");
newHeader.innerHTML = "YOUR-NAME is the champion"