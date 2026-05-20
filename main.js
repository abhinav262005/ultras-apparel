/* ============================================================
   ULTRAS. — main.js
   Generates all repetitive HTML content dynamically
   ============================================================ */

/* ── DATA ─────────────────────────────────────────────────── */

const NAV_LINKS = [
  "Women", "Men", "Kids", "Accessories",
  "Collections", "Brand", "Sale", "Blog"
];

const HEADER_ICONS = [
  {
    label: "Search",
    svg: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
  },
  {
    label: "Account",
    svg: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
  },
  {
    label: "Wishlist",
    svg: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  },
  {
    label: "Cart",
    svg: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`
  }
];

const PRODUCTS = [
  {
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    name: "Full Sleeve Cover Shirt",
    price: "$ 40.00"
  },
  {
    img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80",
    name: "Volunteer Half Blue",
    price: "$ 35.00"
  },
  {
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80",
    name: "Double Yellow Shirt",
    price: "$ 36.00"
  },
  {
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",
    name: "Long Belly Grey Pant",
    price: "$ 32.00"
  }
];

const BANNERS = [
  {
    wrapClass: "banner banner--street",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    alt: "Street Wear",
    overlayClass: "banner-overlay",
    label: "CASUAL COLLECTION",
    labelClass: "banner-label",
    title: "Street Wear.",
    titleClass: "banner-title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Dapibusm massa diam elementum.",
    linkClass: "banner-link",
    linkText: "Shop Collection &rarr;"
  },
  {
    wrapClass: "banner banner--shoes",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700&q=80",
    alt: "Basic Shoes",
    overlayClass: "banner-overlay banner-overlay--light",
    label: "CASUAL COLLECTION",
    labelClass: "banner-label banner-label--dark",
    title: "Basic Shoes.",
    titleClass: "banner-title banner-title--dark",
    desc: "",
    linkClass: "banner-link banner-link--dark",
    linkText: "Shop Collection &rarr;"
  },
  {
    wrapClass: "banner banner--hat",
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=700&q=80",
    alt: "Woolen Hat",
    overlayClass: "banner-overlay",
    label: "BEST SELLING PRODUCT",
    labelClass: "banner-label",
    title: "Woolen Hat.",
    titleClass: "banner-title",
    desc: "",
    linkClass: "banner-link",
    linkText: "Shop It Now &rarr;"
  }
];

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
  },
  {
    label: "Facebook",
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`
  },
  {
    label: "Twitter",
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`
  },
  {
    label: "Pinterest",
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.82-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.84.26 1.73.4 2.65.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>`
  },
  {
    label: "YouTube",
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`
  }
];

const FOOTER_COLS = [
  {
    heading: "Shop",
    links: ["Women", "Men", "Kids", "Accessories", "Sale", "New Arrivals"]
  },
  {
    heading: "Collections",
    links: ["Summer Collection", "Street Wear", "Basic Shoes", "Woolen Hats", "Casual Wear", "Formal Wear"]
  },
  {
    heading: "Help",
    links: ["FAQ", "Shipping & Returns", "Size Guide", "Track Order", "Contact Us", "Privacy Policy"]
  }
];

const CONTACT_ITEMS = [
  {
    svg: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    text: "123 Fashion Ave, New York, NY 10001"
  },
  {
    svg: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>`,
    text: "+1 (800) 123-4567"
  },
  {
    svg: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    text: "hello@ultras.store"
  }
];

const PAY_BADGES = ["VISA", "MC", "AMEX", "PayPal"];

const FOOTER_BOTTOM_LINKS = ["Terms of Service", "Privacy Policy", "Cookie Policy"];

/* ── SVG HELPERS (reused inside product cards) ────────────── */

const SVG_EYE = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
const SVG_HEART = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

/* ── RENDER FUNCTIONS ─────────────────────────────────────── */

function renderNav() {
  const nav = document.querySelector(".nav");
  NAV_LINKS.forEach(link => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = link;
    nav.appendChild(a);
  });
}

function renderHeaderIcons() {
  const container = document.querySelector(".header-icons");
  HEADER_ICONS.forEach(({ label, svg }) => {
    const btn = document.createElement("button");
    btn.className = "icon-btn";
    btn.setAttribute("aria-label", label);
    btn.innerHTML = svg;
    container.appendChild(btn);
  });
}

function renderProducts() {
  const grid = document.querySelector(".products-grid");
  PRODUCTS.forEach(({ img, name, price }) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-thumb">
        <img src="${img}" alt="${name}" />
        <div class="product-hover">
          <button class="btn-cart">Add To Cart &rarr;</button>
          <div class="product-icons">
            <button aria-label="Quick view" class="p-icon">${SVG_EYE}</button>
            <button aria-label="Wishlist" class="p-icon">${SVG_HEART}</button>
          </div>
        </div>
      </div>
      <div class="product-meta">
        <p class="product-name">${name}</p>
        <p class="product-price">${price}</p>
      </div>`;
    grid.appendChild(card);
  });
}

function renderDots() {
  const row = document.querySelector(".dots-row");
  PRODUCTS.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === 0 ? " dot--active" : "");
    row.appendChild(dot);
  });
}

function renderBanners() {
  const grid = document.querySelector(".banners-grid");

  // First banner goes directly into the grid
  const first = BANNERS[0];
  grid.insertAdjacentHTML("beforeend", buildBannerHTML(first));

  // Remaining banners go into a stacked column
  const stack = document.createElement("div");
  stack.className = "banner-stack";
  BANNERS.slice(1).forEach(b => {
    stack.insertAdjacentHTML("beforeend", buildBannerHTML(b));
  });
  grid.appendChild(stack);
}

function buildBannerHTML({ wrapClass, img, alt, overlayClass, label, labelClass, title, titleClass, desc, linkClass, linkText }) {
  return `
    <div class="${wrapClass}">
      <img src="${img}" alt="${alt}" class="banner-img" />
      <div class="${overlayClass}"></div>
      <div class="banner-body">
        <span class="${labelClass}">${label}</span>
        <h2 class="${titleClass}">${title}</h2>
        ${desc ? `<p class="banner-desc">${desc}</p>` : ""}
        <a href="#" class="${linkClass}">${linkText}</a>
      </div>
    </div>`;
}

function renderSocialIcons() {
  const row = document.querySelector(".social-row");
  SOCIAL_ICONS.forEach(({ label, svg }) => {
    const a = document.createElement("a");
    a.href = "#";
    a.setAttribute("aria-label", label);
    a.className = "soc";
    a.innerHTML = svg;
    row.appendChild(a);
  });
}

function renderFooterCols() {
  const footerTop = document.querySelector(".footer-top");

  FOOTER_COLS.forEach(({ heading, links }) => {
    const col = document.createElement("div");
    col.className = "footer-col";
    col.innerHTML = `<h4>${heading}</h4>`;

    const ul = document.createElement("ul");
    links.forEach(text => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#">${text}</a>`;
      ul.appendChild(li);
    });

    col.appendChild(ul);
    footerTop.appendChild(col);
  });
}

function renderContactCol() {
  const footerTop = document.querySelector(".footer-top");
  const col = document.createElement("div");
  col.className = "footer-col";
  col.innerHTML = `<h4>Contact</h4>`;

  const ul = document.createElement("ul");
  ul.className = "contact-list";
  CONTACT_ITEMS.forEach(({ svg, text }) => {
    const li = document.createElement("li");
    li.innerHTML = `${svg} ${text}`;
    ul.appendChild(li);
  });
  col.appendChild(ul);

  const payRow = document.createElement("div");
  payRow.className = "pay-row";
  PAY_BADGES.forEach(badge => {
    const span = document.createElement("span");
    span.className = "pay-badge";
    span.textContent = badge;
    payRow.appendChild(span);
  });
  col.appendChild(payRow);

  footerTop.appendChild(col);
}

function renderFooterBottom() {
  const linksDiv = document.querySelector(".footer-links");
  FOOTER_BOTTOM_LINKS.forEach(text => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = text;
    linksDiv.appendChild(a);
  });
}

/* ── INIT ─────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderHeaderIcons();
  renderProducts();
  renderDots();
  renderBanners();
  renderSocialIcons();
  renderFooterCols();
  renderContactCol();
  renderFooterBottom();
});
