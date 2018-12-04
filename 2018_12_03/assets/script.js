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
const positionParagraph = document.getElementsByClassName("img-position")[0];
positionParagraph.innerText = `1 of ${works.length}`;
const img = document.getElementsByClassName("img-container")[0];

function keyPressed(event) {
    switch (event.keyCode) {
        case 37:
            currentPhoto--;
            if (currentPhoto < 0)
                currentPhoto = works.length - 1;
            break;
        case 39:
            currentPhoto++;
            if (currentPhoto === works.length)
                currentPhoto = 0;
            break;
    }
    img.style.backgroundImage = `url(${works[currentPhoto].source})`;
    positionParagraph.innerText = `${currentPhoto + 1} of ${works.length}`;
}


