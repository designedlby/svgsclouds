var ifrm = document.createElement("iframe");
ifrm.src = document.getElementById("ytburl").href.replace("watch?v=", "embed/");
ifrm.style.height = "300px";
ifrm.style.width = "500px";
document.getElementById("ifrmholder").appendChild(ifrm);
