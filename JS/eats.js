function toGif(fileName){
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../eats-images/${fileName}.gif`);
}

function leaveGif(fileName){
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../eats-images/${fileName}.png`);
}