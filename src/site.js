window.onload = function() {
    var elem = document.getElementsByTagName("p");
    elem[0].innerHTML = "Hello Usenmfon uko";

    var p = document.createElement("p");
    var node = document.createTextNode("evening to you!");
    p.appendChild(node);
    var parent = document.getElementById("new");
    var child = document.getElementById("p1");
    parent.replaceChild(p, child);

    var e = document.getElementsByTagName("a");
    e[1].href = "http://www.sololearn.com";
};