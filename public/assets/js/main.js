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
    suggestedCourses: ['08 · AI for Logistics Business', '09 · AI Data Analysis Dashboard', '16 · Executive AI Playbook']
  },
  5: {
    level: '05 AI-Enabled Business (ขับเคลื่อนธุรกิจด้วย AI)',
    summary: 'AI กลายเป็น DNA ของ Operating Model และสร้าง New Revenue Stream หรือความได้เปรียบทางธุรกิจอย่างต่อเนื่อง',
    recommendation: 'แนะนำจัดทำ: Transformation Lab & Thought Leadership เพื่อสร้าง Brand Authority และขยายผลทั้ง Ecosystem',
    suggestedCourses: ['15 · AI Business Strategy & Innovation', '22 · Custom Transformation Lab', '25 · AI Executive Authority']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const scrollHero = document.querySelector('[data-scroll-expand-hero]');

  if (scrollHero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;

    const updateHeroProgress = () => {
      const rect = scrollHero.getBoundingClientRect();
      // Hold the hero still for the first ~45% of a viewport of scrolling, then
      // ease the expand in (smoothstep) so it doesn't jump on the first wheel tick.
      const hold = window.innerHeight * 0.45;
      const scrollableDistance = Math.max(scrollHero.offsetHeight - window.innerHeight - hold, 1);
      const linear = Math.min(Math.max((-rect.top - hold) / scrollableDistance, 0), 1);
      const progress = linear * linear * (3 - 2 * linear);
      scrollHero.style.setProperty('--hero-progress', progress.toFixed(3));
      scrollHero.dataset.heroExpanded = progress > 0.64 ? 'true' : 'false';
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeroProgress);
        ticking = true;
      }
    }, { passive: true });

    // A page can load (or an in-page link can jump) straight to a hash below the
    // hero before this script runs, or before images have finished laying out —
    // recompute once layout settles so the reveal isn't stuck mid-track showing
    // a blank gap instead of the expanded quicknav/statement.
    updateHeroProgress();
    window.addEventListener('load', updateHeroProgress);
    window.addEventListener('hashchange', () => window.requestAnimationFrame(updateHeroProgress));
    window.addEventListener('resize', () => window.requestAnimationFrame(updateHeroProgress));
  }

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

  // ─── Course Detail Modal (SEO / AEO / GEO Enriched) ──────────────
  const courseModal   = document.getElementById('courseModal');
  const cmCode        = document.getElementById('courseModalCode');
  const cmTrack       = document.getElementById('courseModalTrack');
  const cmKeywords    = document.getElementById('courseModalKeywords');
  const cmTitle       = document.getElementById('courseModalTitle');
  const cmTagline     = document.getElementById('courseModalTagline');
  const cmSeoTags     = document.getElementById('courseModalSeoTags');
  const cmProblem     = document.getElementById('courseModalProblem');
  const cmSolution    = document.getElementById('courseModalSolution');
  const cmAudience    = document.getElementById('courseModalAudience');
  const cmModules     = document.getElementById('courseModalModules');
  const cmDeliverable = document.getElementById('courseModalDeliverable');
  const cmOutcome     = document.getElementById('courseModalOutcome');
  const cmEmailBtn    = document.getElementById('courseModalEmailBtn');
  const cmInquiryBtn  = document.getElementById('courseModalInquiryBtn');

  let coursesDataMap = {};
  const coursesDataScript = document.getElementById('saltcaseCoursesData');
  if (coursesDataScript) {
    try {
      const parsed = JSON.parse(coursesDataScript.textContent);
      if (Array.isArray(parsed)) {
        parsed.forEach(item => {
          coursesDataMap[item.id] = item;
        });
      }
    } catch (e) {
      console.warn('Could not parse courses data', e);
    }
  }

  function openCourseModal(card) {
    if (!courseModal) return;
    const d = card.dataset;
    const courseId = parseInt(d.courseId, 10);
    const idStr = String(d.courseId).padStart(2, '0');
    const track = d.courseTrack;
    const info = coursesDataMap[courseId];

    if (cmCode)        cmCode.textContent = idStr;
    if (cmTrack)       cmTrack.textContent = track;
    if (cmKeywords)    cmKeywords.textContent = d.courseKeywords || 'THINK / PROMPT / RESEARCH';
    if (cmTitle)       cmTitle.textContent = (info && info.title) || d.courseTitle;
    if (cmTagline)     cmTagline.textContent = (info && info.tagline) || d.courseDesc || '';
    if (cmProblem)     cmProblem.textContent = (info && info.aeoProblem) || 'ปัญหาความซ้ำซ้อนในกระบวนการทำงานที่ยังไม่ได้นำ AI มาช่วย';
    if (cmSolution)    cmSolution.textContent = (info && info.aeoSolution) || d.courseDesc || '';
    if (cmAudience)    cmAudience.textContent = (info && info.targetAudience) || 'ผู้บริหาร, ผู้จัดการฝ่าย และทีมงานที่ต้องการยกระดับทักษะ AI องค์กร';
    if (cmDeliverable) cmDeliverable.textContent = (info && info.deliverable) || d.courseDeliverable || '';
    if (cmOutcome)     cmOutcome.textContent = (info && info.businessOutcome) || 'เพิ่มความเร็ว ลดความผิดพลาด และยกระดับผลลัพธ์ทางธุรกิจ';

    // Key Practical Modules
    if (cmModules) {
      if (info && Array.isArray(info.keyModules) && info.keyModules.length > 0) {
        cmModules.innerHTML = info.keyModules.map(m => `<li>${m}</li>`).join('');
      } else {
        cmModules.innerHTML = `<li>ทำความเข้าใจเครื่องมือและกระบวนการทำงาน</li><li>เวิร์กช็อปลงมือทำจริงจากโจทย์ธุรกิจ</li><li>สร้าง Deliverable นำกลับไปใช้ในงานได้ทันที</li>`;
      }
    }

    // SEO / AEO / GEO Tag Pills
    if (cmSeoTags) {
      if (info && Array.isArray(info.seoKeywords) && info.seoKeywords.length > 0) {
        cmSeoTags.innerHTML = info.seoKeywords.map(k => `<span class="seo-tag-pill">#${k}</span>`).join('');
      } else {
        cmSeoTags.innerHTML = `<span class="seo-tag-pill">#อบรมAIสำหรับองค์กร</span><span class="seo-tag-pill">#CorporateAITraining</span><span class="seo-tag-pill">#AIforBusiness</span>`;
      }
    }

    // Update track badge class for colour
    if (cmTrack) {
      cmTrack.className = 'course-modal-track-badge';
      cmTrack.classList.add(`badge-${track}`);
    }

    // Update email link dynamically with rich subject & body
    if (cmEmailBtn) {
      const courseTitle = (info && info.title) || d.courseTitle;
      cmEmailBtn.href = `mailto:mail.saltcase@gmail.com?subject=${encodeURIComponent(`ขอใบเสนอราคาหลักสูตร In-house: [${idStr}] ${courseTitle}`)}&body=${encodeURIComponent(`เรียน ทีมที่ปรึกษา Saltcase AI Academy,\n\nทางองค์กรสนใจหลักสูตร: [${idStr}] ${courseTitle}\n\nข้อมูลติดต่อเบื้องต้น:\n- ชื่อผู้ติดต่อ:\n- ชื่อองค์กร / บริษัท:\n- เบอร์โทรศัพท์ / LINE ID:\n- จำนวนผู้เข้าอบรมโดยประมาณ:\n- ความต้องการ / โจทย์เฉพาะทางขององค์กร:\n\nขอบคุณครับ/ค่ะ`)}`;
    }

    courseModal.classList.add('active');
    courseModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCourseModal() {
    if (!courseModal) return;
    courseModal.classList.remove('active');
    courseModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach click to every course card (including dynamically visible ones)
  if (courseGrid) {
    courseGrid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-course-id]');
      if (card) openCourseModal(card);
    });

    // Keyboard accessibility (Enter / Space)
    courseGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('[data-course-id]');
        if (card) { e.preventDefault(); openCourseModal(card); }
      }
    });
  }

  // Close course modal
  document.querySelectorAll('[data-close-course-modal]').forEach(btn =>
    btn.addEventListener('click', closeCourseModal)
  );
  if (courseModal) {
    courseModal.addEventListener('click', e => { if (e.target === courseModal) closeCourseModal(); });
  }

  // "นัดหมายทีมที่ปรึกษา" in course modal → open inquiry modal
  if (cmInquiryBtn) {
    cmInquiryBtn.addEventListener('click', () => {
      closeCourseModal();
      const inquiryModal = document.getElementById('inquiryModal');
      if (inquiryModal) {
        inquiryModal.classList.add('active');
        inquiryModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
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
        ${data.suggestedCourses.map(c => `<span style="background: rgba(91,58,150,0.10); color: #5b3a96; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; border: 1px solid var(--border-accent);">${c}</span>`).join('')}
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
  let modalTrigger = null;

  function openModal(trigger) {
    if (inquiryModal) {
      modalTrigger = trigger;
      inquiryModal.classList.add('active');
      inquiryModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      inquiryModal.querySelector('input, select, button')?.focus();
    }
  }

  function closeModal() {
    if (inquiryModal) {
      inquiryModal.classList.remove('active');
      inquiryModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      modalTrigger?.focus();
    }
  }

  modalTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(btn);
  }));

  modalClose.forEach(btn => btn.addEventListener('click', closeModal));

  if (inquiryModal) {
    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal) closeModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && inquiryModal?.classList.contains('active')) closeModal();
  });

  // Hand inquiry details to the visitor's email client.
  document.querySelectorAll('[data-inquiry-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const values = new FormData(form);
      const source = form.dataset.formSource || 'แบบฟอร์มเว็บไซต์';
      const subject = `ขอรับคำปรึกษาจาก ${source}`;
      const body = [
        `ชื่อ: ${values.get('name')}`,
        `องค์กร: ${values.get('company')}`,
        `ช่องทางติดต่อ: ${values.get('contact')}`,
        `ความสนใจ: ${values.get('interest')}`,
      ].join('\n');

      window.location.href = `mailto:mail.saltcase@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.setAttribute('aria-label', isOpen ? 'ปิดเมนูนำทาง' : 'เปิดเมนูนำทาง');
    });

    navMenu.addEventListener('click', (event) => {
      if (!event.target.closest('a')) return;
      navMenu.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'เปิดเมนูนำทาง');
    });
  }
});
