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
            <a href="https://docs.google.com/document/d/1pymvXqyczpcKYYplnFrErOaaqzcPqVB7J3MQrqn1mv4/edit?usp=sharing" target="_blank">Resumé</a></a></p>
            <p>Copyright &copy Haitong Chen</p>
        </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);

class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav id="headernav">
            <a href="/index.html">HOME</a> |
            <a href="/exp.html">EXP</a> |
            <a href="/blogs.html">BLOGS</a> |
            <a href="/eats.html">EATS</a> |
            <a href="/travels.html">TRAVELS</a>
        </nav>
        `;
    }
}

customElements.define('custom-nav', Nav);


class HamNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="hamburger-navbar">
                <div class="container nav-container">
                    <input class="checkbox" type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                    </div>  
                <div class="menu-items">
                    <li><a href="/index.html">HOME</a></li>
                    <li><a href="/exp.html">EXP</a></li>
                    <li><a href="/blogs.html">BLOGS</a></li>
                    <li><a href="/eats.html">EATS</a></li>
                    <li><a href="/travels.html">TRAVELS</a></li>
                </div>
                </div>
            </div>
        `;
    }
}

customElements.define('hamburger-nav', HamNav);