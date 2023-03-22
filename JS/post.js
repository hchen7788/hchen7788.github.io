function expandPost(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../blogs-posts/2023-02-06.md', true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            let output = document.getElementById('md-html');
            output.innerHTML = xhr.responseText;
            console.log(xhr.responseText); // log the file contents to the console
          }
    };
    xhr.send();
}