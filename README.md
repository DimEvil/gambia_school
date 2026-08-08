# Sare Saidy Lower Basic Cycle School 🏫🇬🇲

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Impact](https://img.shields.io/badge/Charity-100%25%20Direct%20Impact-brightgreen.svg)](#about-the-project)
[![Location](https://img.shields.io/badge/Location-Jarra%20West%20District%2C%20The%20Gambia-blue.svg)](#location)

> Official website and fundraising portal for the construction of **Sare Saidy Lower Basic Cycle School (LBCS)** in Sare Saidy village, Jarra West District, Lower River Region, The Gambia.

---

## 🌟 About the Project

**Sare Saidy Lower Basic Cycle School (LBCS)** is a grassroots community charity project building a permanent 4-classroom primary school block in Sare Saidy village. 

Located in the Jarra West District (approximately 9.2 km from the regional capital of Mansa Konko), the school provides safe primary education, solar-powered lighting, and clean drinking water to over 150 local children.

---

## 📸 Adding Your Own Real Photos

You can easily replace or add your own photos of the construction site and village!

1. Place your image files (e.g. `building.jpg`, `children.jpg`) into the [`images/`](file:///g:/Documents/github/gambia_school/images/) directory.
2. Open [`script.js`](file:///g:/Documents/github/gambia_school/script.js) and update the `galleryData` list with your file names and captions:
```javascript
const galleryData = [
  { 
    src: "images/building.jpg", 
    title: "Ground Foundation Work", 
    category: "construction", 
    caption: "Local builders preparing the foundation in Sare Saidy." 
  },
  // Add more entries here!
];
```
3. Or replace existing files (`hero.png`, `roof.png`, `community.png`, `classroom.png`, `solar.png`) directly in the `images/` folder!

---

## 🚀 Website Features & Interactive Widgets

- **Hero & Live Progress Tracker**: Dynamic progress bar showing **0 € raised of 25,000 € goal** for campaign launch.
- **Interactive Building Timeline**: 4-phase milestone tracker (Land & Prep, Masonry, Roofing & Windows, Desks & Solar).
- **Impact Calculator**: Interactive slider (15 € to 1,000 €) displaying real-time equipment output (Cement Bags, Wooden Desks, Metal Roof Sheets, Solar Units).
- **Virtual Donor Wall ("Sponsor a Brick")**: Interactive brick donor wall where supporters can dedicate custom engraved virtual bricks for 25 €.
- **Field Photo Gallery & Fullscreen Lightbox**: Categorized site photos (Construction, Village Community, Architectural Vision) with full-screen lightbox modal.
- **Simulated Donation & Receipt Generator**: Interactive donation modal with custom receipt confirmation (*"A-Baraka! Thank You!"*).

---

## 📁 Repository Structure

```text
gambia_school/
├── index.html        # Semantic HTML5 document with EUR currency formatting
├── styles.css        # Custom CSS design system, typography & responsive layouts
├── script.js        # Interactive logic (calculators, modals, donor wall, lightbox)
├── LICENSE           # MIT Open Source License
├── README.md         # Project documentation & custom photo setup guide
└── images/
    ├── hero.png      # School construction site hero photo
    ├── roof.png      # Roofing phase progress photo
    ├── classroom.png # Architectural interior render
    ├── community.png # Sare Saidy village leaders & children
    └── solar.png     # Solar panel & clean water borehole installation
```

---

## 🌐 Deploying to GitHub Pages (1-Click Hosting)

You can publish this website live on the internet for free using **GitHub Pages**:

1. Create a new public repository on [GitHub](https://github.com/new) named `gambia_school`.
2. Push this directory to your repository.
3. In your GitHub repository settings:
   - Go to **Settings** ⚙️ > **Pages**.
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Choose `main` (or `master`) branch and `/ (root)` folder.
   - Click **Save**.
4. Your website will be live in ~60 seconds at `https://<your-username>.github.io/gambia_school/`!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) - feel free to use, modify, and distribute for non-profit and community educational initiatives.

---

*Made with ❤️ for the community of Sare Saidy, Jarra West District, The Gambia.*
