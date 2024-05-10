function mdToHtml(fileName){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `./${fileName}`, true);
    xhr.responseType = 'text';
    xhr.onload = function() {
        if (xhr.status === 200) {
            var markdownText = xhr.responseText;
            var htmlContent = marked.parse(markdownText);
            var markdownContent = document.getElementById('blog-body');
            markdownContent.innerHTML = htmlContent;
        } else {
            console.error('Failed to fetch Markdown file. Status:', xhr.status);
        }
    };
    xhr.onerror = function() {
        console.error('Error fetching Markdown file.');
    };
    xhr.send();
}

function toGif(fileName, folder){
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../${folder}/${fileName}.gif`);
}

function leaveGif(fileName, folder){
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../${folder}/${fileName}.png`);
}

function toSub(fileName, folder){
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../${folder}/${fileName}Sub.png`);
}

function leaveSub(fileName, folder){
    let image = document.getElementById(`${fileName}Img`);
    image.setAttribute('src', `../${folder}/${fileName}.png`);
}