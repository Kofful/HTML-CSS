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
        source: "./assets/img/file.png"
    }
];
let currentPhoto = 0;
const containers = document.getElementsByClassName("img-container");
containers[0].style.backgroundImage = `url(${works[works.length - 1].source})`;
containers[0].style.marginLeft = "-300px";
containers[1].style.backgroundImage = `url(${works[0].source})`;
containers[2].style.backgroundImage = `url(${works[1].source})`;
containers[2].style.marginLeft = "300px";
let img;

function keyPressed(event) {
    img = document.createElement("div");
    img.className = "img-container";
    switch (event) {
        case 37:
            currentPhoto--;
            if (currentPhoto < 0)
                currentPhoto = works.length - 1;
            containers[0].style.marginLeft = "0px";
            containers[1].style.marginLeft = "300px";
            document.getElementsByClassName("img-containers")[0].removeChild(containers[2]);
            if (currentPhoto === 0)
                img.style.backgroundImage = `url(${works[works.length - 1].source})`;
            else
                img.style.backgroundImage = `url(${works[currentPhoto - 1].source})`;
            img.style.marginLeft = "-300px";
            document.getElementsByClassName("img-containers")[0].insertAdjacentElement("afterbegin", img);
            break;
        case 39:
            currentPhoto++;
            if (currentPhoto === works.length)
                currentPhoto = 0;
            containers[1].style.marginLeft = "-300px";
            containers[2].style.marginLeft = "0px";
            document.getElementsByClassName("img-containers")[0].removeChild(containers[0]);
            if (currentPhoto === works.length - 1)
                img.style.backgroundImage = `url(${works[0].source})`;
            else
                img.style.backgroundImage = `url(${works[currentPhoto + 1].source})`;
            img.style.marginLeft = "300px";
            document.getElementsByClassName("img-containers")[0].appendChild(img);
            break;
    }
}


