function expandPost(){
    const dia = document.getElementById("md-html");
    const d = document.getElementById("md-content");
    dia.showModal();
    dia.addEventListener('click', () => dia.close());
    d.addEventListener('click', (event) => event.stopPropagation());
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../blogs-posts/2023-02-06.md', true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            let output = document.getElementById('md-content');
            output.innerHTML = xhr.responseText;
            // console.log(xhr.responseText); // log the file contents to the console

            // var template = document.getElementById("md-html");
            // var clon = template.content.cloneNode(true);
            // document.body.appendChild(clon);
          }
    };
    xhr.send();
}