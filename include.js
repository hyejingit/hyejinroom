//getBody
const body = document.getElementsByTagName("body")[e];
//header
const divHeader = document.createElement("div");
divHeader.id = "header";
body.prepend(divHeader);
const header = document.getElementById("header");
header.style.backgroundColor = "red";
header.style.width - "100px";
header.style.height = "100px";
// footer
const divFooter = document.createElement("div");
divFooter.id = "footer";
body.appendChild(divFooter);
const footer = document.getElementById("footer");
footer.style.backgroundColor = "blue";
footer.style.width = "100px";
footer.style.height = "100px";
