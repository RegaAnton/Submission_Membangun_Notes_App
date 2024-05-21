class NoteItem extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    this.attachShadow({ mode: "open" });

    // Define template
    this.shadowRoot.innerHTML = `
          <style>
              /* Styling for the note item */
              :host {
                  display: block;
                  background: #f9f9f9;
                  padding: 10px;
                  margin-bottom: 10px;
                  border-radius: 8px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  transition: transform 0.3s ease;
              }

              :host:hover {
                  transform: translateY(-5px);
              }

              h2 {
                  margin-top: 0;
                  color: #333;
              }

              p {
                  margin-bottom: 5px;
                  font-style: italic;
                  color: #666;
              }
          </style>
          <h2></h2>
          <p></p>
      `;
  }

  connectedCallback() {
    // Set note title and body
    this.shadowRoot.querySelector("h2").textContent =
      this.getAttribute("title");
    this.shadowRoot.querySelector("p").textContent = this.getAttribute("body");
  }
}

customElements.define("note-item", NoteItem);
