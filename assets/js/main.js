/**
 * SALTCASE AI ACADEMY — Interactive Engine & Component Logic
 */

// Readiness Level Recommendations Map
const READINESS_DATA = {
  1: {
    level: '01 Explore (ระดับทดลองใช้)',
    summary: 'ทีมงานเริ่มทดลองใช้ AI เช่น ChatGPT เป็นรายบุคคล แต่ยังไม่มีนโยบาย แนวทาง หรือมาตรฐานการใช้งานที่ปลอดภัย',
    recommendation: 'แนะนำเริ่มจาก: AI Mindset & Foundation Course เพื่อสร้างความเข้าใจเรื่อง Data Privacy, Tool Selection และ Prompt Framework ที่มีมาตรฐาน',
    suggestedCourses: ['01 · AI Mindset for Business', '02 · AI Tools Landscape', '03 · Prompt Architecture']
  },
  2: {
    level: '02 Use (เริ่มใช้หลายคนในทีม)',
    summary: 'มีคนในทีมใช้งานประจำ แต่ต่างคนต่างทำ ไม่มี Prompt Template กลาง หรือคลังความรู้ที่ส่งต่อกันได้',
    recommendation: 'แนะนำสร้าง: Standard Prompt Library และระบุงานประจำที่ใช้เวลานานเพื่อทำ Prompt System สำหรับแผนก',
    suggestedCourses: ['05 · AI Personal Assistant & Knowledge', '06 · AI Office Productivity', '19/20 · Department AI Copilots']
  },
  3: {
    level: '03 Workflow (เชื่อม AI ในขั้นตอนทำงาน)',
    summary: 'เริ่มมี Workflow ชัดเจน แต่ยังขาดการวัดผล ROI และจุดเชื่อมโยง (Handoff) ระหว่างระบบหรือคนทำงาน',
    recommendation: 'แนะนำออกแบบ: End-to-End Workflow Design ร่วมกับ Human Checkpoint เพื่อลด Rework และเพิ่ม Speed x3',
    suggestedCourses: ['07 · AI Workflow Design', '10 · AI Document Intelligence', '12 · AI Content Engine']
  },
  4: {
    level: '04 Integrate (เชื่อมระบบและ Governance)',
    summary: 'องค์กรเริ่มเชื่อมโยง AI กับ Database, CRM หรือระบบภายใน ต้องการระบบ Governance และ Automation ไร้รอยต่อ',
    recommendation: 'แนะนำจัดทำ: Automation Architecture & Data Security Governance พร้อม Training Lab ระดับองค์กร',
    suggestedCourses: ['08 · AI Automation for Business', '09 · AI Data Analysis Dashboard', '16 · Executive AI Playbook']
  },
  5: {
    level: '05 AI-Enabled Business (ขับเคลื่อนธุรกิจด้วย AI)',
    summary: 'AI กลายเป็น DNA ของ Operating Model และสร้าง New Revenue Stream หรือความได้เปรียบทางธุรกิจอย่างต่อเนื่อง',
    recommendation: 'แนะนำจัดทำ: Transformation Lab & Thought Leadership เพื่อสร้าง Brand Authority และขยายผลทั้ง Ecosystem',
    suggestedCourses: ['15 · AI Business Strategy & Innovation', '22 · Custom Transformation Lab', '25 · AI Executive Authority']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Course Grid Filtering & Search (cards are statically rendered in HTML for SEO/AI crawlers)
  const courseGrid = document.getElementById('coursesGrid');
  const courseCards = courseGrid ? Array.from(courseGrid.querySelectorAll('.course-item-card')) : [];
  const emptyState = document.getElementById('coursesEmptyState');
  const searchInput = document.getElementById('courseSearch');
  const tabButtons = document.querySelectorAll('.tab-btn');
  let currentTrack = 'all';
  let searchQuery = '';

  function applyCourseFilter() {
    if (!courseGrid) return;
    const query = searchQuery.toLowerCase();
    let visibleCount = 0;

    courseCards.forEach(card => {
      const matchTrack = currentTrack === 'all' || card.dataset.track === currentTrack;
      const text = card.textContent.toLowerCase();
      const matchSearch = !query || text.includes(query);
      const show = matchTrack && matchSearch;
      card.hidden = !show;
      if (show) visibleCount++;
    });

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.hidden = false;
        emptyState.innerHTML = `ไม่พบหลักสูตรที่ตรงกับคำค้นหา "${searchQuery}" <button class="btn btn-gold-outline btn-sm" onclick="resetCourseSearch()" style="display:block;margin:12px auto 0;">ดูหลักสูตรทั้งหมด</button>`;
      } else {
        emptyState.hidden = true;
      }
    }
  }

  window.resetCourseSearch = function() {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    currentTrack = 'all';
    tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.track === 'all'));
    applyCourseFilter();
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTrack = btn.dataset.track;
      applyCourseFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      applyCourseFilter();
    });
  }

  // Readiness Interactive Selector
  const readinessItems = document.querySelectorAll('.readiness-item');
  const recommendationBox = document.getElementById('readinessRecommendation');

  function updateReadinessDisplay(levelId) {
    const data = READINESS_DATA[levelId];
    if (!data || !recommendationBox) return;

    recommendationBox.innerHTML = `
      <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg> วิเคราะห์สำหรับ ${data.level}</h4>
      <p style="margin-bottom: 10px;">${data.summary}</p>
      <p style="color: var(--accent-gold-light); font-weight: 600; margin-bottom: 12px;">${data.recommendation}</p>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        ${data.suggestedCourses.map(c => `<span style="background: rgba(201,147,90,0.15); color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; border: 1px solid var(--border-accent);">${c}</span>`).join('')}
      </div>
    `;
  }

  readinessItems.forEach(item => {
    item.addEventListener('click', () => {
      readinessItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const level = item.dataset.level;
      updateReadinessDisplay(level);
    });
  });

  // Modal Dialog Handlers
  const inquiryModal = document.getElementById('inquiryModal');
  const modalTriggers = document.querySelectorAll('[data-open-modal]');
  const modalClose = document.querySelectorAll('[data-close-modal]');

  function openModal() {
    if (inquiryModal) {
      inquiryModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (inquiryModal) {
      inquiryModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  modalTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  modalClose.forEach(btn => btn.addEventListener('click', closeModal));

  if (inquiryModal) {
    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal) closeModal();
    });
  }

  // Handle Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'กำลังประมวลผล...';
      btn.disabled = true;

      setTimeout(() => {
        alert('ขอบคุณสำหรับข้อมูล! ทีมที่ปรึกษา Saltcase AI จะติดต่อกลับเพื่อส่งแบบวิเคราะห์ AI Business Diagnostic ภายใน 24 ชั่วโมง');
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        closeModal();
      }, 900);
    });
  }

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'rgba(11, 13, 16, 0.98)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '24px';
        navMenu.style.borderBottom = '1px solid var(--border-accent)';
      }
    });
  }
});
