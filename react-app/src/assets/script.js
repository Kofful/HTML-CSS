const works = [
    {
        name: "first",
        source: "./assets/img/p1.jpg"
    },
    {
        name: "second",
        source: "./assets/img/p2.jpg"
    },
    {
        name: "third",
        source: "./assets/img/p3.jpg"
    },
    {
        name: "fourth",
        source: "./assets/img/p4.jpg"
    },
    {
        name: "fifth",
        source: "./assets/img/p5.jpg"
    },
    {
        name: "sixth",
        source: "./assets/img/environment-1.jpg"
    },
    {
        name: "seventh",
        source: "./assets/img/environment-2.jpg"
    }
];
let currentPhoto = 0;
const containers = document.getElementsByClassName("img-container");

let image = document.createElement("img");
image.className = "img-position";
image.src = works[works.length - 1].source;
image.alt = works[works.length - 1].name;
containers[0].appendChild(image);
containers[0].style.marginLeft = "-500px";

image = document.createElement("img");
image.className = "img-position";
image.src = works[0].source;
image.alt = works[0].name;
containers[1].appendChild(image);

image = document.createElement("img");
image.className = "img-position";
image.src = works[1].source;
image.alt = works[1].name;
containers[2].appendChild(image);
containers[2].style.marginLeft = "500px";

let img;

function keyPressed(event) {
    image = document.createElement("img");
    img = document.createElement("div");
    img.className = "img-container";
    switch (event) {
        case 37:
            currentPhoto--;
            if (currentPhoto < 0)
                currentPhoto = works.length - 1;
            containers[0].style.marginLeft = "0px";
            containers[1].style.marginLeft = "500px";
            document.getElementsByClassName("img-containers")[0].removeChild(containers[2]);
            if (currentPhoto === 0) {
                image.className = "img-position";
                image.src = works[works.length - 1].source;
                image.alt = works[works.length - 1].name;
                img.appendChild(image);
            }
            else {
                image.className = "img-position";
                image.src = works[currentPhoto - 1].source;
                image.alt = works[currentPhoto - 1].name;
                img.appendChild(image);
            }
            img.style.marginLeft = "-500px";
            document.getElementsByClassName("img-containers")[0].insertAdjacentElement("afterbegin", img);
            break;
        case 39:
            currentPhoto++;
            if (currentPhoto === works.length)
                currentPhoto = 0;
            containers[1].style.marginLeft = "-500px";
            containers[2].style.marginLeft = "0px";
            document.getElementsByClassName("img-containers")[0].removeChild(containers[0]);
            if (currentPhoto === works.length - 1) {
                image.className = "img-position";
                image.src = works[0].source;
                image.alt = works[0].name;
                img.appendChild(image);
            }
            else {
                image.className = "img-position";
                image.src = works[currentPhoto + 1].source;
                image.alt = works[currentPhoto + 1].name;
                img.appendChild(image);
            }
            img.style.marginLeft = "500px";
            document.getElementsByClassName("img-containers")[0].appendChild(img);
            break;
    }
}


