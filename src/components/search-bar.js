class SearchBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.shadowDOM.querySelector("#search-field").value;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
            <style>
                .form-group {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }
                input {
                    border: 1px solid rgb(29,117,208);
                    padding: 10px 15px;
                    border-radius: 5px;
                    margin-right: 5px;
                    outline: unset;
                }
                input:focus, button:focus {
                    outline: unset;
                    box-shadow: 0px 0px 5px rgba(29,117,208,.9);
                }
                button {
                    border: unset;
                    background: blue;
                    padding: 10px 25px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>

            <form>
                <div class="form-group">
                    <input id="search-field" placeholder="find recipe, e.g pizza" />
                    <button class="form-button" type="button" id="btn-search">search</button>
                </div>
            </form>
        `;

		this.shadowDOM
			.querySelector("#btn-search")
			.addEventListener("click", this._clickEvent);
	}
}

customElements.define("search-bar", SearchBar);
