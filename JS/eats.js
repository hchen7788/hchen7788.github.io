function toGif(fileName){
    console.log("in toGif");
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../eats-images/${fileName}.gif`);
    console.log("toGif done");
}

function leaveGif(fileName){
    console.log("in leaveGif");
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../eats-images/${fileName}.png`);
    console.log("leaveGif done");
}

function toSub(fileName){
    console.log("in toSub");
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../eats-images/${fileName}Sub.png`);
    console.log("toSub done");
}

function leaveSub(fileName){
    console.log("in leaveSub");
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../eats-images/${fileName}.png`);
    console.log("leaveSub done");
}