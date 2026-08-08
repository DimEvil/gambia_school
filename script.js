/**
 * Sare Saidy Lower Basic Cycle School - Interactive Application Logic
 * Location: Sare Saidy Village, Jarra West District, Lower River Region, The Gambia
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFundraiserCounter();
  initTimeline();
  initImpactCalculator();
  initDonorWall();
  initGallery();
  initModals();
  initContactForm();
});

/* 1. Navbar Scroll Effect & Mobile Menu */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Active link highlight
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* 2. Fundraiser Counter Animation */
function initFundraiserCounter() {
  const progressBar = document.getElementById('hero-progress-bar');
  if (progressBar) {
    setTimeout(() => {
      progressBar.style.width = '0%'; // Starting campaign at 0 €
    }, 300);
  }
}

/* 3. Construction Timeline Switcher */
const timelineData = {
  1: {
    title: "Phase 1: Land & Prep in Sare Saidy",
    status: "Completed",
    statusClass: "status-completed",
    description: "Secured official community land allocation in Sare Saidy village (Jarra West District), conducted site topographical survey, and cleared ground soil for foundation digging.",
    checklist: [
      "Official Sare Saidy village land title registered",
      "Architectural blueprint design for 4-classroom LBCS block",
      "Ground soil clearing & excavation complete",
      "Clean water source borehole drilling approved"
    ],
    image: "images/community.png"
  },
  2: {
    title: "Phase 2: Foundation & Wall Masonry",
    status: "Completed",
    statusClass: "status-completed",
    description: "Laid reinforced concrete foundations and constructed 4 primary classroom blocks using locally crafted red masonry bricks and mortar.",
    checklist: [
      "Concrete footings & foundation slab poured",
      "Classroom perimeter brickwork raised to ring beam level",
      "Steel reinforcement pillars installed",
      "Local Gambian builders & apprentices hired"
    ],
    image: "images/hero.png"
  },
  3: {
    title: "Phase 3: Roofing & Window Installation",
    status: "Active Phase",
    statusClass: "status-progress",
    description: "Currently mounting heavy-duty timber rafters and corrugated metal roof sheets to protect Sare Saidy classrooms from rainy season weather, followed by window shutters and doors.",
    checklist: [
      "Timber roof truss structure constructed ✅",
      "Metal roof sheet installation (In Progress 🏗️)",
      "Window frame installation & safety ironwork",
      "Exterior plastering & protective paint"
    ],
    image: "images/roof.png"
  },
  4: {
    title: "Phase 4: Desks, Solar Power & Supplies",
    status: "Upcoming",
    statusClass: "status-upcoming",
    description: "Final interior fit-out: furnishing 4 classrooms with sturdy wooden double-desks, installing rooftop solar panels for fans and evening lighting, and stocking books.",
    checklist: [
      "Custom wooden desks & teacher podiums",
      "Rooftop solar panel & battery storage system",
      "Chalkboards & educational wall maps",
      "Inaugural opening ceremony for Sare Saidy children!"
    ],
    image: "images/classroom.png"
  }
};

function initTimeline() {
  const tabs = document.querySelectorAll('.timeline-tab');
  const cardTitle = document.getElementById('timeline-title');
  const cardStatus = document.getElementById('timeline-status');
  const cardDesc = document.getElementById('timeline-desc');
  const cardChecklist = document.getElementById('timeline-checklist');
  const cardImg = document.getElementById('timeline-img');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const phaseId = tab.dataset.phase;
      const data = timelineData[phaseId];

      if (data) {
        cardTitle.textContent = data.title;
        cardStatus.textContent = data.status;
        cardStatus.className = `timeline-status ${data.statusClass}`;
        cardDesc.textContent = data.description;
        cardImg.src = data.image;

        // Render checklist
        cardChecklist.innerHTML = data.checklist
          .map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`)
          .join('');
      }
    });
  });
}

/* 4. Interactive Impact Calculator */
function initImpactCalculator() {
  const slider = document.getElementById('impact-slider');
  const amountDisplay = document.getElementById('impact-amount-display');
  const countCement = document.getElementById('count-cement');
  const countDesk = document.getElementById('count-desk');
  const countRoof = document.getElementById('count-roof');
  const countSolar = document.getElementById('count-solar');
  const presetBtns = document.querySelectorAll('.preset-btn');

  function updateImpact(value) {
    const val = parseInt(value, 10);
    amountDisplay.textContent = `${val} €`;

    // Calculation formulas based on cost items in Euros (€)
    // Cement Bag = 15 €, Desk = 35 €, Roof Sheet = 120 €, Solar Unit = 500 €
    const cement = Math.floor(val / 15);
    const desk = Math.floor(val / 35);
    const roof = Math.floor(val / 120);
    const solar = Math.floor(val / 500);

    countCement.textContent = cement;
    countDesk.textContent = desk;
    countRoof.textContent = roof;
    countSolar.textContent = solar;

    // Update slider background gradient
    const percent = ((val - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${percent}%, var(--bg-alt) ${percent}%, var(--bg-alt) 100%)`;
  }

  if (slider) {
    slider.addEventListener('input', (e) => {
      updateImpact(e.target.value);
      presetBtns.forEach(btn => btn.classList.remove('active'));
    });

    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.value;
        slider.value = val;
        updateImpact(val);
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    updateImpact(slider.value);
  }
}

/* 5. Sponsor a Brick & Virtual Donor Wall */
// Start clean for live campaign launch
const initialDonors = [
  { name: "Sare Saidy Community", msg: "Foundation Brick #1", tier: "platinum" }
];

function initDonorWall() {
  const wallGrid = document.getElementById('virtual-wall-grid');
  const donorTitle = document.getElementById('donor-wall-title');
  
  function renderBricks() {
    if (donorTitle) {
      donorTitle.textContent = `🧱 ${initialDonors.length} Brick${initialDonors.length === 1 ? '' : 's'} Placed`;
    }

    wallGrid.innerHTML = initialDonors.map(donor => `
      <div class="donor-brick ${donor.tier}-brick">
        <div class="brick-name">${escapeHtml(donor.name)}</div>
        <div class="brick-msg">"${escapeHtml(donor.msg)}"</div>
        <div class="brick-tier">${donor.tier} Brick</div>
      </div>
    `).join('');
  }

  renderBricks();

  // Brick Sponsorship Form
  const brickForm = document.getElementById('brick-sponsor-form');
  if (brickForm) {
    brickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('brick-donor-name').value;
      const msgInput = document.getElementById('brick-donor-msg').value;
      const tierInput = document.getElementById('brick-donor-tier').value;

      if (nameInput.trim()) {
        initialDonors.unshift({
          name: nameInput.trim(),
          msg: msgInput.trim() || "Proud supporter of Sare Saidy LBCS!",
          tier: tierInput
        });

        renderBricks();
        closeModal('brick-modal');
        brickForm.reset();

        showToast(`🧱 Thank you ${nameInput}! Your brick has been placed on the Sare Saidy wall.`);
      }
    });
  }
}

/* 6. Photo Gallery & Lightbox */
/**
 * TIP: You can easily add your own photos!
 * Simply place your image files (e.g. photo1.jpg) into the 'images/' folder
 * and add a new entry to the galleryData array below.
 */
const galleryData = [
  { src: "images/hero.png", title: "Sare Saidy Masonry Block", category: "construction", caption: "Local builders completing red brick classroom walls under the Gambian sun." },
  { src: "images/roof.png", title: "Classroom Roof Framing", category: "construction", caption: "Skilled carpenters fitting sturdy metal roof sheets to protect against heavy rains." },
  { src: "images/community.png", title: "Sare Saidy Village Community", category: "community", caption: "Village leaders, elders, and future students gathered at the school site." },
  { src: "images/classroom.png", title: "Future Classroom Design", category: "vision", caption: "Architectural visualizer showing finished bright wooden desks and solar fans." },
  { src: "images/solar.png", title: "Solar & Clean Water Site", category: "vision", caption: "Eco-friendly solar panel array and clean drinking water pump borehole for Sare Saidy." }
];

function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = galleryData
      .filter(item => filter === 'all' || item.category === filter)
      .map(item => `
        <div class="gallery-item" data-src="${item.src}" data-title="${item.title}" data-caption="${item.caption}">
          <img src="${item.src}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay">
            <h4>${item.title}</h4>
            <p>${item.caption}</p>
          </div>
        </div>
      `).join('');

    // Rebind Lightbox click events
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        openLightbox(item.dataset.src, item.dataset.title, item.dataset.caption);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  renderGallery('all');
}

/* Lightbox Modal logic */
function openLightbox(src, title, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');

  img.src = src;
  captionEl.innerHTML = `<strong>${title}</strong> — ${caption}`;
  modal.classList.add('active');
}

function initModals() {
  // Global modal close triggers
  document.querySelectorAll('.modal-close, .modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        el.closest('.modal-backdrop').classList.remove('active');
      }
    });
  });

  // Donation Modal Presets
  const donationOptions = document.querySelectorAll('.donation-option');
  const customDonationInput = document.getElementById('custom-donation-amount');

  donationOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      donationOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      if (customDonationInput) {
        customDonationInput.value = opt.dataset.amount;
      }
    });
  });

  // Main Donation Form Submission
  const donationForm = document.getElementById('main-donation-form');
  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = customDonationInput ? customDonationInput.value || 50 : 50;
      closeModal('donate-modal');
      
      // Open thank you receipt modal
      document.getElementById('receipt-amount').textContent = `${amount} €`;
      openModal('receipt-modal');
    });
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

/* 7. Contact Form Handler */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      form.reset();
      showToast(`✨ Thank you ${name}! Your message was sent to the Sare Saidy LBCS team.`);
    });
  }
}

/* Helper Utilities */
function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #1F2421;
      color: #FFF;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.25);
      z-index: 3000;
      font-weight: 600;
      font-size: 0.95rem;
      border-left: 4px solid var(--primary);
      transition: all 0.3s ease;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 4000);
}

// Global modal triggers for HTML onclick bindings
window.openModal = openModal;
window.closeModal = closeModal;
