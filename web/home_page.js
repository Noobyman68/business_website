
const button = document.getElementById("");


class IG_link extends HTMLElement{
  constructor(){
    super()
    const template = document.createElement("template");
    template.innerHTML = `
      <a href = "https://www.youtube.com/" rel = "noopener" target = "_blank">
        <img class = "IG_img" src = "images/instagram-logo.webp" alt = "IG_LINK">
      </a>`;
      this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));

      const styles = document.createElement("link");
      styles.setAttribute("rel", "stylesheet");
      styles.setAttribute("href", "styles/home_page.css");
      this.shadowRoot.appendChild(styles);
  }
}
customElements.define("ig-link", IG_link);