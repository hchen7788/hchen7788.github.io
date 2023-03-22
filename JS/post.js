function expandPost(){
    const dia = document.getElementById("md-html");
    dia.showModal();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../blogs-posts/2023-02-06.md', true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            let output = document.getElementById('md-html');
            output.innerHTML = xhr.responseText;
            // console.log(xhr.responseText); // log the file contents to the console

            // var template = document.getElementById("md-html");
            // var clon = template.content.cloneNode(true);
            // document.body.appendChild(clon);
          }
    };
    xhr.send();
}