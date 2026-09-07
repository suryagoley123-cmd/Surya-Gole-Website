const PROJECTS = [
  {
    id: "01",
    title: "Posters, Flyers & Print Designs",
    category: "Posters, Flyers & Print Designs",
    year: "2025",
    tags: ["Identity", "Print Ready Files", "Strategy", "Book Cover"],
    image: "Posters.jpg",
    desc: "Bold, purposeful print designs that capture attention, communicate clearly, and elevate your brand across every physical touchpoint."
  },
  {
    id: "02",
    title: "Mural & Motion",
    category: "Art Direction",
    year: "2024",
    tags: ["Art Direction", "Editorial", "Mural"],
    image: "https://images.unsplash.com/photo-1558707538-c56435bdcdf3?w=900&h=680&fit=crop&auto=format",
    desc: "Creative direction for a public art campaign spanning 12 cities, bridging street culture and institutional design."
  },
  {
    id: "03",
    title: "Curious Press",
    category: "Editorial Design",
    year: "2024",
    tags: ["Books", "Typography", "Print"],
    image: "https://images.unsplash.com/photo-1760702156699-dd893dc7c7cc?w=900&h=680&fit=crop&auto=format",
    desc: "Series of six literary covers for an independent press — each cover a distinct typographic argument within a unified system."
  },
  {
    id: "04",
    title: "Yeti Homes Estate Pvt. Ltd.",
    category: "Brand Identity & Logo Design",
    year: "2023",
    tags: ["Logo Design", "Strategy", "Brand Identity", "Systems"],
    image: "Logo & Brand Identity.jpg",
    desc: "Crafting distinctive visual identities that elevate brands, build recognition, and leave a lasting impression entering the Real-Estate market."
  }
];

const SERVICES = [
  ["01", "Brand Identity & Logo Design"],
  ["02", "Social Media & Digital Content"],
  ["03", "Posters, Flyers & Print Design"],
  ["04", "Advertising & Marketing Creatives"],
  ["05", "Photo Editing & Visual Retouching"],
  ["06", "Presentation, Packaging & Merchandise Design"]
];

const app = document.getElementById("root");

app.innerHTML = `
  <div class="site">
    <nav class="pf-nav" id="siteNav">
      <a href="#hero" class="pf-nav__name">Surya Gole</a>
      <ul class="pf-nav__links">
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <header class="pf-hero" id="hero">
      <div class="pf-hero__eyebrow">
        <span>Graphic Designer - Surya</span>
      </div>

      <div class="pf-hero__type">
        <span class="pf-hero__line pf-hero__line--italic">Visual</span>
        <span class="pf-hero__line pf-hero__line--bold">Design</span>
      </div>

      <div class="pf-hero__footer">
        <p class="pf-hero__desc">
          <span>Identity Systems · Editorial · Art Direction</span><br>
          <span>for studios, publishers, and cultural institutions</span>
        </p>

        <div class="pf-hero__stats">
          <div class="pf-hero__stat"><strong>+3</strong><span>Years</span></div>
          <div class="pf-hero__stat"><strong>80+</strong><span>Projects</span></div>
          <div class="pf-hero__stat"><strong>3+</strong><span>Certifications</span></div>
        </div>
      </div>
    </header>

    <section class="pf-work" id="work">
      <div class="pf-section-header">
        <span class="pf-label">Selected Work</span>
        <span class="pf-label pf-label--faded">2023–2025</span>
      </div>
      <div class="pf-projects">
        ${PROJECTS.map((p, i) => `
          <article class="pf-project${i % 2 === 1 ? " pf-project--indent" : ""}">
            <div class="pf-project__img-wrap">
              <img src="${p.image}" alt="${p.title}" class="pf-project__img">
              <div class="pf-project__overlay">
                <p class="pf-project__overlay-desc">${p.desc}</p>
                <div class="pf-project__tags">
                  ${p.tags.map(t => `<span class="pf-tag">${t}</span>`).join("")}
                </div>
              </div>
            </div>

            <footer class="pf-project__footer">
              <div class="pf-project__meta">
                <span class="pf-project__num">${p.id}</span>
                <span class="pf-project__cat">${p.category}</span>
              </div>
              <div class="pf-project__title-row">
                <h2 class="pf-project__title">${p.title}</h2>
                <span class="pf-project__year">${p.year}</span>
              </div>
            </footer>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="pf-about" id="about">
      <span class="pf-label">About</span>
      <div class="pf-about__grid">
        <div class="pf-about__text">
          <h2 class="pf-about__heading">
            Design is a conversation between <em>form</em> and meaning.
          </h2>
          <p class="pf-about__desc">
            I’m Surya Gole - a graphic designer shaping ideas into bold, meaningful visual experiences.
            <br><br>
            From brand identities and visual systems to editorial, print, and digital design, I create work where <b style="color: #DDFF00">clarity meets character</b>. My practice is rooted in thoughtful typography, strong composition, and a deep appreciation for the details that turn ordinary visuals into memorable identities.
            <br><br>
            I believe great design is more than aesthetics. It gives ideas a voice, gives brands a presence, and leaves an impression long after the first glance.
          </p>
          <h2>Skills</h2>
          <div class="pf-about__skills">
              ${["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Canva", "CorelDRAW"]
              .map(s => `<span class="pf-skill">${s}</span>`).join("")}
          </div>
        </div>

        <div class="pf-about__photo-col">
          <div class="pf-about__photo-wrap">
            <img src="Surya.jpg" alt="Surya Gole, graphic designer" class="pf-about__photo">
            <div class="pf-about__photo-caption">— Surya Gole</div>
          </div>
        </div>
      </div>
    </section>

    <section class="pf-services">
      <span class="pf-label">What I Do</span>
      <ul class="pf-services__list">
        ${SERVICES.map(([num, name]) => `
          <li class="pf-service">
            <span class="pf-service__num">${num}</span>
            <span class="pf-service__name">${name}</span>
            <span class="pf-service__arrow">↗</span>
          </li>
        `).join("")}
      </ul>
    </section>

    <section class="pf-contact" id="contact">
      <span class="pf-label">Get in Touch</span>

      <a href="tel:+9779749421388" class="pf-contact__email">+977 9749421388</a>
      <a href="mailto:suryagoley123@gmail.com" class="pf-contact__email">suryagoley123@gmail.com</a>

      <div class="pf-contact__foot">
        <div class="pf-contact__socials">
          <a href="https://www.facebook.com/suryagoley123" target="_blank" rel="noopener noreferrer" class="pf-contact__social">Facebook</a>
          <a href="https://www.instagram.com/suryagole4/" target="_blank" rel="noopener noreferrer" class="pf-contact__social">Instagram</a>
          <a href="https://www.tiktok.com/@surya.gole" target="_blank" rel="noopener noreferrer" class="pf-contact__social">TikTok</a>
          <a href="https://www.linkedin.com/in/suryagole/" target="_blank" rel="noopener noreferrer" class="pf-contact__social">LinkedIn</a>
          <a href="https://wa.me/9779749421388" target="_blank" rel="noopener noreferrer" class="pf-contact__social">WhatsApp</a>
          <a href="https://www.snapchat.com/@surya_goley?share_id=BhXseTaovQo&locale=en-GB" target="_blank" rel="noopener noreferrer" class="pf-contact__social">Snapchat</a>
        </div>
        <p class="pf-contact__copy">© 2025 Surya Gole. All rights reserved.</p>
      </div>
    </section>
  </div>
`;

const nav = document.getElementById("siteNav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("pf-nav--solid", window.scrollY > 60);
}, { passive: true });

document.querySelectorAll(".pf-project").forEach(project => {
  project.addEventListener("mouseenter", () => {
    project.querySelector(".pf-project__overlay").classList.add("pf-project__overlay--visible");
  });

  project.addEventListener("mouseleave", () => {
    project.querySelector(".pf-project__overlay").classList.remove("pf-project__overlay--visible");
  });
});
