/**
 * SALTCASE AI ACADEMY — Interactive Engine & Component Logic
 */

// 25 Complete Courses Dataset
const COURSES_DATA = [
  { id: 1, title: 'AI Mindset for Business', track: 'Foundation', desc: 'เข้าใจความสามารถ ข้อจำกัด ความเสี่ยง และวิธีคิดแบบ Business-first', deliverable: 'AI opportunity list + personal usage rules' },
  { id: 2, title: 'AI Tools Landscape for Business', track: 'Foundation', desc: 'เลือก ChatGPT, Gemini, Claude, NotebookLM, Image/Video และ Automation ให้ตรงงาน', deliverable: 'Tool-to-task matrix' },
  { id: 3, title: 'Prompt Architecture for Business', track: 'Foundation', desc: 'เปลี่ยน Prompt แบบลองผิดลองถูกให้เป็นคำสั่งที่ทำซ้ำและส่งต่อในทีมได้', deliverable: 'Prompt / Skill library' },
  { id: 4, title: 'AI Research & Decision Intelligence', track: 'Foundation', desc: 'Research ตลาด คู่แข่ง ประเด็นสำคัญ และสังเคราะห์เป็นข้อมูลเพื่อการตัดสินใจ', deliverable: 'Research brief + decision memo' },
  { id: 5, title: 'AI Personal Assistant & Knowledge System', track: 'Foundation', desc: 'สร้างผู้ช่วยส่วนตัว/ทีมบน SOP และ Knowledge ที่เชื่อถือได้', deliverable: 'Assistant blueprint' },
  { id: 6, title: 'AI Office Productivity', track: 'Productivity', desc: 'Email, Meeting, Report, Proposal, Presentation และงานความรู้ประจำวัน', deliverable: 'Office workflow pack' },
  { id: 7, title: 'AI Workflow Design', track: 'Productivity', desc: 'Map กระบวนการเดิม หา Friction และออกแบบ AI + Human Checkpoint', deliverable: 'Before / after workflow' },
  { id: 8, title: 'AI Automation for Business', track: 'Productivity', desc: 'เชื่อม Forms, Sheets, Calendar, LINE, No-code และ AI เพื่อลดงานส่งต่อ', deliverable: 'Automation prototype / roadmap' },
  { id: 9, title: 'AI Data Analysis & Business Dashboard', track: 'Productivity', desc: 'สรุป KPI วิเคราะห์ Insight และช่วยผู้บริหารอ่านข้อมูลได้เร็วขึ้น', deliverable: 'KPI dashboard + insight memo' },
  { id: 10, title: 'AI Document Intelligence', track: 'Productivity', desc: 'OCR, Extract, Classify, Compare, Summarize และ Review งานเอกสาร', deliverable: 'Document-processing workflow' },
  { id: 11, title: 'AI Marketing Strategy', track: 'Growth', desc: 'Audience, Positioning, Customer Journey, Campaign และ Message ที่มีหลักฐาน', deliverable: 'Marketing strategy canvas' },
  { id: 12, title: 'AI Content Engine', track: 'Growth', desc: 'Content Pillar, Idea, Script, Caption, Repurpose และ Production Workflow', deliverable: '30-day content engine' },
  { id: 13, title: 'AI Sales & Lead Generation', track: 'Growth', desc: 'Prospect research, qualification, meeting prep, proposal และ follow-up', deliverable: 'AI sales workflow' },
  { id: 14, title: 'AI Customer Experience & Service', track: 'Growth', desc: 'FAQ, Knowledge Base, Response Standard, Chatbot/LINE และ Escalation', deliverable: 'CX assistant blueprint' },
  { id: 15, title: 'AI Business Strategy & Innovation', track: 'Growth', desc: 'หา Business Model, New Service, Scenario และ AI-enabled revenue', deliverable: 'AI growth roadmap' },
  { id: 16, title: 'AI for Executive & Management', track: 'Department', desc: 'Strategy, Decision Memo, Dashboard, Scenario Thinking และ Governance', deliverable: 'Executive AI playbook' },
  { id: 17, title: 'AI for Accounting & Finance', track: 'Department', desc: 'OCR, Reconciliation support, Variance, Closing Checklist และ Reporting', deliverable: 'Accounting workflow prototype' },
  { id: 18, title: 'AI for HR & People Management', track: 'Department', desc: 'JD, Recruitment, Onboarding, Policy Knowledge, Training และ Performance', deliverable: 'HR workflow pack' },
  { id: 19, title: 'AI for Sales Team', track: 'Department', desc: 'Standardize Discovery, Account Research, Proposal, Objection และ Follow-up', deliverable: 'Team sales copilot' },
  { id: 20, title: 'AI for Marketing & PR Team', track: 'Department', desc: 'Campaign Engine, Content System, PR และ Audience Intelligence', deliverable: 'Marketing operating system' },
  { id: 21, title: 'AI for Procurement / Stock / Operations', track: 'Department', desc: 'Supplier comparison, inventory insight, document workflow และ SOP', deliverable: 'Operations workflow pack' },
  { id: 22, title: 'AI Custom Business Transformation Lab', track: 'Department', desc: 'นำ 1 ปัญหาจริงขององค์กรมา Build Workflow หรือ Prototype ในห้องเรียน', deliverable: 'Working prototype + 30-day plan' },
  { id: 23, title: 'AI Personal Branding Foundation', track: 'Authority', desc: 'Positioning, Expertise, Audience, Brand Story และ Brand Voice', deliverable: 'Personal brand blueprint' },
  { id: 24, title: 'AI Thought Leadership & Content Authority', track: 'Authority', desc: 'เปลี่ยนความเชี่ยวชาญเป็น Content System ที่สร้าง Authority อย่างต่อเนื่อง', deliverable: 'Thought leadership engine' },
  { id: 25, title: 'AI Executive Brand & Digital Authority', track: 'Authority', desc: 'สร้าง Digital Footprint สำหรับผู้บริหาร/ผู้เชี่ยวชาญให้ค้นเจอและเชื่อถือได้', deliverable: 'Executive authority roadmap' }
];

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
  // Course Grid Rendering & Search
  const courseGrid = document.getElementById('coursesGrid');
  const searchInput = document.getElementById('courseSearch');
  const tabButtons = document.querySelectorAll('.tab-btn');
  let currentTrack = 'all';
  let searchQuery = '';

  function renderCourses() {
    if (!courseGrid) return;
    courseGrid.innerHTML = '';
    
    const filtered = COURSES_DATA.filter(course => {
      const matchTrack = currentTrack === 'all' || course.track === currentTrack;
      const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.deliverable.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTrack && matchSearch;
    });

    if (filtered.length === 0) {
      courseGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px; background: var(--bg-surface); border-radius: 16px; border: 1px dashed var(--border-subtle)">
          <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 12px;">ไม่พบหลักสูตรที่ตรงกับคำค้นหา "${searchQuery}"</p>
          <button class="btn btn-gold-outline btn-sm" onclick="resetCourseSearch()">ดูหลักสูตรทั้งหมด</button>
        </div>
      `;
      return;
    }

    filtered.forEach(c => {
      const card = document.createElement('article');
      card.className = 'course-item-card';
      card.innerHTML = `
        <div class="course-header">
          <span class="course-code">${String(c.id).padStart(2, '0')}</span>
          <span class="course-track-badge badge-${c.track}">${c.track}</span>
        </div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="course-takehome">
          <strong>Take-home Deliverable:</strong>
          <span>✦ ${c.deliverable}</span>
        </div>
      `;
      courseGrid.appendChild(card);
    });
  }

  window.resetCourseSearch = function() {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    currentTrack = 'all';
    tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.track === 'all'));
    renderCourses();
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTrack = btn.dataset.track;
      renderCourses();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderCourses();
    });
  }

  renderCourses();

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
