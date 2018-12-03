const works = [
    {
        name: "first",
        source: "./assets/img/file.png"
    },
    {
        name: "second",
        source: "./assets/img/file.png"
    },
    {
        name: "third",
        source: "./assets/img/file.png"
    },
    {
        name: "fourth",
        source: "./assets/img/file.png"
    },
    {
        name: "fifth",
        source: "./assets/img/file.png"
    },
    {
        name: "sixth",
        source: "./assets/img/file.png"
    },
    {
        name: "seventh",
        source: "./assets/img/file.png"
    },
    {
        name: "eighth",
        source: "./assets/img/file.png"
    },
    {
        name: "ninth",
        source: "./assets/img/file.png"
    },
    {
        name: "tenth",
        source: "./assets/img/file.png"
    },
    {
        name: "eleventh",
        source: "./assets/img/file.png"
    },
    {
        name: "twelfth",
        source: "./assets/img/file.png"
    },
    {
        name: "thirteenth",
        source: "./assets/img/file.png"
    },
];
let mainDiv = document.getElementsByClassName("descriptionContainer")[0];
for (let i = 0; i < works.length; i++) {
    const newImg= document.createElement("img");
    newImg.src = works[i].source;
    newImg.style.minWidth = "200px";
    newImg.style.height = "200px";
    newImg.style.margin = "10px";
    mainDiv.appendChild(newImg);
}
