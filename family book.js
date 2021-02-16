var names = [
    "My Family Book",
    "Yukesh LS",
    "Yukthika LS",
    "Shylaja L",
    "Lakshmi Kanth N",
    "Indrani N"
];
var imgs = [
    "images.jpg",
    "download.jpg",
    "yukthika.jpg",
    "shy.jpg",
    "lk.jpg",
    "indra.jpg"
];
var i = 0;
function change() {
    document.getElementById("name").innerHTML = names[i];
    document.getElementById("img").src = imgs[i];
    i++;
    if (i > 5) {
        i = 0;
    }
}