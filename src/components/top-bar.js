class TopBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
            <style>
                h4 {
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                }
            </style>

            <h4>RECIPE</h4>
        `;
	}
}

customElements.define("top-bar", TopBar);
