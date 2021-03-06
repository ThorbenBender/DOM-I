const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.querySelectorAll('nav a');
for (let i = 0; i < 6; i++){
    nav[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}


// cta
let ctaH1 = document.querySelector('.cta .cta-text h1');
let ctaBtn = document.querySelector('.cta .cta-text button');
let ctaImg = document.getElementById('cta-img');
ctaH1.style.color = 'yellow';
ctaBtn.addEventListener('click', function(){
  ctaH1.style.color = 'green';
})

ctaImg.setAttribute('src', siteContent.cta["img-src"]);
ctaH1.textContent = siteContent.cta.h1;
ctaBtn.textContent = siteContent.cta.button;

// main content
let H4 = document.querySelectorAll('.top-content .text-content h4');
let textP = document.querySelectorAll('.top-content .text-content p');
let middleImg = document.getElementById('middle-img');

H4[0].textContent = siteContent["main-content"]["features-h4"];
H4[1].textContent = siteContent["main-content"]["about-h4"];
textP[0].textContent = siteContent["main-content"]["features-content"];
textP[1].textContent = siteContent["main-content"]["about-content"];
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom content
let bH4 = document.querySelectorAll('.bottom-content .text-content h4');
let btextP = document.querySelectorAll('.bottom-content .text-content p');

bH4[0].textContent = siteContent["main-content"]["services-h4"];
bH4[1].textContent = siteContent["main-content"]["product-h4"];
bH4[2].textContent = siteContent["main-content"]["vision-h4"];
btextP[0].textContent = siteContent["main-content"]["services-content"];
btextP[1].textContent = siteContent["main-content"]["product-content"];
btextP[2].textContent = siteContent["main-content"]["vision-content"];

// contact
let contactH4 = document.querySelector('.contact h4');
let contactP = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent.contact["contact-h4"];
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;


// footer 
let footerCopyright = document.querySelector('footer p');

footerCopyright.textContent = siteContent.footer.copyright;


/// stretch