const imgList = ["bg_01.jpg", "bg_02.jpg", "bg_03.jpg"];

function setBackground() {
    const bgImage = document.createElement("img");
    const num = Math.floor(Math.random() * imgList.length);

    bgImage.src = `img/${imgList[num]}`;
    bgImage.id = "bgImage";
    document.body.appendChild(bgImage);
}

setBackground();

