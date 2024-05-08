class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>Find me here: <a href="https://www.linkedin.com/in/haitongc/" target="_blank">LinkedIn</a>,
            <a href="https://github.com/hchen7788" target="_blank">GitHub</a>,
            <a href="mailto:haitongchen116@gmail.com" target="_blank">email</a>,
            <a href="https://docs.google.com/document/d/1pymvXqyczpcKYYplnFrErOaaqzcPqVB7J3MQrqn1mv4/edit?usp=sharing" target="_blank">Resume</a></a></p>
            <p>Copyright &copy Haitong Chen</p>
        </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);