
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

// function  elementFix(elementS, offset){
//   window.scrollY >= offset ? elementS.style.position = 'fixed' : elementS.style.position = 'relativeoff';
// }

// const Contact = document.getElementById('Contact');
// const offsetC = 900

// const Portfolio = document.getElementById('Portfolio');
// const offsetP = 1000

// const Testemonials = document.getElementById('Testemonials');
// const offsetT = 2000

// const About_us = document.getElementById('About_us');
// const offsetA = 2300

// window.addEventListener("scroll", function() {
//   window.scrollY >= offsetC ? Contact.style.position = 'fixed' : Contact.style.position = 'static';
//   window.scrollY >= offsetP ? Portfolio.style.position = 'fixed' : Portfolio.style.position = 'static';
//   window.scrollY >= offsetT ? Testemonials.style.position = 'fixed' : Testemonials.style.position = 'static';
//   window.scrollY >= offsetA ? About_us.style.position = 'fixed' : About_us.style.position = 'static';
//   console.log(window.scrollY)
// });

