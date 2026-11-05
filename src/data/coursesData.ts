export interface CourseData {
  id: number;
  title: string;
  track: 'Foundation' | 'Productivity' | 'Growth' | 'Department' | 'Authority';
  tagline: string;
  desc: string;
  aeoProblem: string;
  aeoSolution: string;
  targetAudience: string;
  keyModules: string[];
  deliverable: string;
  businessOutcome: string;
  seoKeywords: string[];
}

export const COURSES_DATA: CourseData[] = [
  // ─── Track 1: Foundation (01 - 05) ─────────────────────────────
  {
    id: 1,
    title: 'AI Mindset for Business',
    track: 'Foundation',
    tagline: 'ปรับกรอบคิดธุรกิจสู่ AI-First: เข้าใจขีดความสามารถ ข้อจำกัด และวางแนวทางความปลอดภัยระดับองค์กร',
    desc: 'เข้าใจความสามารถ ข้อจำกัด ความเสี่ยง และวิธีคิดแบบ Business-first',
    aeoProblem: 'ทีมงานไม่กล้าใช้ AI เพราะกลัวทำผิด หรือใช้แบบไม่มีกรอบกำกับ ขาดความเข้าใจเรื่อง Data Privacy จนเสี่ยงข้อมูลบริษัทรั่วไหล',
    aeoSolution: 'AI BizCase Thailand ปรับ Mindset สู่ "Business-First AI" เข้าใจว่า AI ไม่ใช่เวทมนตร์แต่เป็นตัวเร่งงาน พร้อมวางแนวทางความปลอดภัย (AI Governance) และจริยธรรมข้อมูลที่ถูกต้องสำหรับองค์กร',
    targetAudience: 'ผู้บริหารระดับต้น-กลาง, ผู้จัดการทุกแผนก, ทีมงานทั่วไปที่เริ่มต้นประยุกต์ใช้ AI ในการทำงาน',
    keyModules: [
      'เข้าใจขีดความสามารถและขอบเขตข้อจำกัดจริงของ GenAI / LLMs ยุคปัจจุบัน',
      'แนวทางการรักษาความลับของข้อมูลองค์กร (Data Privacy & Prompt Security)',
      'การวิเคราะห์โอกาสและ Pain Points ในงานด้วยกรอบแนวคิด 6M™ Framework'
    ],
    deliverable: 'AI Opportunity Matrix + คู่มือระเบียบความปลอดภัยการใช้ AI ประจำองค์กร',
    businessOutcome: 'พนักงานเข้าใจ AI อย่างถูกต้อง ใช้งานอย่างมั่นใจ ป้องกันความเสี่ยงข้อมูลรั่วไหล 100% พร้อมชี้เป้าจุดสร้างคุณค่าในงานได้ทันที',
    seoKeywords: ['อบรม AI สำหรับองค์กร', 'Corporate AI Training Thailand', 'AI for Business', 'AI Mindset', 'AI Governance']
  },
  {
    id: 2,
    title: 'AI Tools Landscape for Business',
    track: 'Foundation',
    tagline: 'คัดเลือกและจัดทัพ AI Tools ให้ตรงฟังก์ชันงาน: เปรียบเทียบ ChatGPT, Claude, Gemini, NotebookLM และ Deep Research',
    desc: 'เลือก ChatGPT, Gemini, Claude, NotebookLM, Image/Video และ Automation ให้ตรงงาน',
    aeoProblem: 'ในตลาดมี AI เครื่องมือใหม่เกิดขึ้นทุกวัน องค์กรเสียเงินซื้อ License ซ้ำซ้อน แต่ทีมงานเลือกใช้ไม่ถูกงานและไม่คุ้มค่า',
    aeoSolution: 'เรียนรู้การทำ Tool-to-Task Matching วิเคราะห์จุดเด่นเชิงลึกของแต่ละ Model (ChatGPT สำหรับงานทั่วไป, Claude สำหรับเอกสารยาวและตรรกะ, Gemini สำหรับข้อมูล Search & Google Workspace, NotebookLM สำหรับสังเคราะห์คลังเอกสาร) ช่วยประหยัดต้นทุนและเลือกเครื่องมือที่ให้ ROI สูงสุด',
    targetAudience: 'ผู้บริหารที่ต้องตัดสินใจจัดสรรงบประมาณซอฟต์แวร์, ฝ่าย IT, ฝ่าย HR L&D, และ Team Lead ทุกแผนก',
    keyModules: [
      'เปรียบเทียบจุดเด่น-จุดด้อยเชิงลึก ChatGPT vs Claude vs Gemini vs Perplexity vs NotebookLM',
      'เกณฑ์การประเมิน Tool-to-Task: งานเอกสาร งานคำนวณ งานวิจัย หรืองานสร้างสรรค์',
      'การวางแผนบริหารจัดการ License และความคุ้มค่าการลงทุน (AI ROI Evaluation)'
    ],
    deliverable: 'Tool-to-Task Decision Matrix + แผนการจัดสรรเครื่องมือ AI ประจำแผนก',
    businessOutcome: 'ลดค่าใช้จ่ายซอฟต์แวร์ซ้ำซ้อน จัดสรร AI ให้ทีมทำงานได้ตรงโจทย์ เพิ่มความเร็วในการทำงานเฉลี่ย 2 เท่า',
    seoKeywords: ['Corporate AI Training Thailand', 'AI Tools for Business', 'เปรียบเทียบ AI สำหรับองค์กร', 'อบรม AI บริษัท', 'In-house AI Training']
  },
  {
    id: 3,
    title: 'Prompt Architecture for Business',
    track: 'Foundation',
    tagline: 'ยกระดับการสั่งงาน AI สู่สถาปัตยกรรมคำสั่งมาตรฐาน: ทำซ้ำได้ แม่นยำ และส่งต่อเป็น Asset ของทีม',
    desc: 'เปลี่ยน Prompt แบบลองผิดลองถูกให้เป็นคำสั่งที่ทำซ้ำและส่งต่อในทีมได้',
    aeoProblem: 'แต่ละคนเขียน Prompt ตามความคุ้นเคยส่วนตัว ผลลัพธ์ไม่แน่นอน เสียเวลาตรวจแก้งานซ้ำซาก ไม่สามารถตั้งเป็นระบบมาตรฐานขององค์กรได้',
    aeoSolution: 'สอนโครงสร้าง Prompt Architecture สำหรับงานธุรกิจ (Role, Context, Task, Constraint, Few-Shot Examples, Output Format) เปลี่ยนการพิมพ์แบบลองผิดลองถูกให้กลายเป็นคำสั่งเชิงวิศวกรรมที่ลด Hallucination และสามารถรวบรวมเป็น Prompt Library ใช้งานร่วมกันได้ทั้งทีม',
    targetAudience: 'พนักงานสายงานความรู้ (Knowledge Workers), ทีมคอนเทนต์, ทีมวิเคราะห์ข้อมูล, ฝ่ายปฏิบัติการ',
    keyModules: [
      'สถาปัตยกรรมโครงสร้าง Prompt ชั้นสูงสำหรับงาน B2B และงานที่ต้องการความแม่นยำสูง',
      'เทคนิค Few-Shot Prompting, Chain-of-Thought และการกำหนด Guardrails ป้องกัน AI หลอน',
      'การจัดทำและบริหารจัดการ Internal Prompt Library เพื่อใช้ร่วมกันทั้งแผนก'
    ],
    deliverable: 'Standard Prompt Library + Reusable Prompt Template สำหรับฟังก์ชันงานจริง',
    businessOutcome: 'ผลลัพธ์ของงานมีมาตรฐานสม่ำเสมอ ลดเวลาการตรวจแก้งานลง 50-70% สมาชิกใหม่ในทีมเริ่มงานได้ทันทีด้วย Prompt สำเร็จรูป',
    seoKeywords: ['Prompt Architecture', 'Customized AI Training for Business', 'Prompt Engineering สำหรับองค์กร', 'AI for Business Thailand']
  },
  {
    id: 4,
    title: 'AI Research & Decision Intelligence',
    track: 'Foundation',
    tagline: 'ย่นเวลาค้นคว้าข้อมูล วิจัยตลาด และวิเคราะห์คู่แข่ง: สังเคราะห์เป็น Executive Decision Memo พร้อมใช้งาน',
    desc: 'Research ตลาด คู่แข่ง ประเด็นสำคัญ และสังเคราะห์เป็นข้อมูลเพื่อการตัดสินใจ',
    aeoProblem: 'การรีเสิร์ชข้อมูลตลาด เทรนด์อุตสาหกรรม และคู่แข่งใช้เวลานาน ข้อมูลกระจัดกระจาย ขาดการคัดกรองความถูกต้อง และยากต่อการสรุปประเด็นตัดสินใจ',
    aeoSolution: 'ผสาน AI Deep Research, Perplexity และการประมวลผลข้อมูลหลายแหล่ง เพื่อคัดกรองแหล่งข้อมูลที่น่าเชื่อถือ ตรวจสอบ Fact-check และแปลงข้อมูลมหาศาลให้กลายเป็นบันทึกสรุปข้อเสนอแนะเชิงกลยุทธ์ (Decision Memo) สำหรับผู้บริหาร',
    targetAudience: 'ฝ่ายวางแผนกลยุทธ์ (Corporate Strategy), ทีม Business Development (BD), นักวิเคราะห์, ผู้บริหาร',
    keyModules: [
      'เทคนิคการค้นหาเชิงลึก (Deep Web Research) และการตรวจสอบแหล่งที่มา (Fact Verification)',
      'การวิเคราะห์คู่แข่ง (Competitor Intelligence) และประเมินโอกาสในตลาดด้วย AI',
      'การแปลงข้อมูลดิบสู่โครงสร้าง Executive Decision Memo พร้อมข้อเสนอแนะเชิงปฏิบัติ'
    ],
    deliverable: 'Executive Decision Memo + Competitive Research Framework Template',
    businessOutcome: 'ลดระยะเวลาการทำ Market Research จากหลายวันเหลือเพียงไม่กี่ชั่วโมง ตัดสินใจได้รวดเร็วบนข้อมูลที่มีหลักฐานรองรับ',
    seoKeywords: ['AI Research', 'Decision Intelligence', 'AI for Business Thailand', 'อบรม AI องค์กร', 'AI Transformation']
  },
  {
    id: 5,
    title: 'AI Personal Assistant & Knowledge System',
    track: 'Foundation',
    tagline: 'สร้างผู้ช่วย AI ประจำทีมบนฐานความรู้และ SOP ของบริษัท: ตอบคำถามและช่วยงานแม่นยำตามระเบียบองค์กร',
    desc: 'สร้างผู้ช่วยส่วนตัว/ทีมบน SOP และ Knowledge ที่เชื่อถือได้',
    aeoProblem: 'เอกสารคู่มือ นโยบายบริษัท และขั้นตอนการทำงาน (SOP) กระจัดกระจายตามโฟลเดอร์ พนักงานใหม่ค้นหายาก และต้องคอยถามรุ่นพี่ซ้ำๆ',
    aeoSolution: 'ออกแบบและสร้าง Custom GPT / AI Assistant ที่เชื่อมโยงกับฐานข้อมูลภายในและ SOP ขององค์กรโดยตรง สามารถตอบคำถาม ให้คำปรึกษาขั้นตอนงาน และช่วยร่างเอกสารตามกฎระเบียบของบริษัทได้อย่างแม่นยำ',
    targetAudience: 'ฝ่ายปฏิบัติการ (Operations), ฝ่ายทรัพยากรบุคคล (HR), ผู้จัดการทีม, ฝ่ายสนับสนุนลูกค้า',
    keyModules: [
      'การจัดระเบียบและเตรียมไฟล์เอกสารภายใน (Knowledge Structuring) เพื่อให้ AI เข้าใจ',
      'การตั้งค่า Custom GPTs / Internal Assistants พร้อมระบบคำสั่งกำกับบทบาทอย่างรัดกุม',
      'การทดสอบความแม่นยำและการป้องกันการรั่วไหลของข้อมูลลับเฉพาะ'
    ],
    deliverable: 'Custom Assistant Blueprint + Internal SOP Knowledge System ประจำทีม',
    businessOutcome: 'ลดเวลาการตอบคำถามภายในองค์กรลงกว่า 80% พนักงานเข้าถึงข้อมูลมาตรฐานได้ทันที 24/7 ลดความผิดพลาดจากความเข้าใจคลาดเคลื่อน',
    seoKeywords: ['AI Personal Assistant', 'Customized AI Training for Business', 'AI Knowledge Base', 'อบรม AI บริษัท']
  },

  // ─── Track 2: Productivity (06 - 10) ───────────────────────────
  {
    id: 6,
    title: 'AI Office Productivity',
    track: 'Productivity',
    tagline: 'เพิ่มประสิทธิผลงานออฟฟิศประจำวัน: จัดการอีเมล สรุปบันทึกการประชุม รายงาน และสไลด์นำเสนอด้วย AI',
    desc: 'Email, Meeting, Report, Proposal, Presentation และงานความรู้ประจำวัน',
    aeoProblem: 'พนักงานสูญเสียเวลาส่วนใหญ่ในแต่ละวันไปกับงาน Routine เช่น ร่างอีเมลโต้ตอบภาษาทางการ ถอดเสียงและสรุปการประชุม และจัดทำรายงานประจำสัปดาห์',
    aeoSolution: 'ฝัง AI เข้ากับ Workflow ประจำวันของงานออฟฟิศ: ใช้ AI ช่วยร่างและตรวจอีเมลธุรกิจ (ทั้งภาษาไทยและอังกฤษ), สรุปประเด็นการประชุมสู่ Action Items พร้อมมอบหมายงาน, และสรุปรายงานความยาวหลายหน้าในเวลาไม่กี่วินาที',
    targetAudience: 'พนักงานออฟฟิศทุกสายงาน, เลขานุการ, ผู้ช่วยผู้บริหาร, ผู้จัดการโครงการ',
    keyModules: [
      'การร่างและปรับแต่งโทนอีเมลสื่อสารธุรกิจทั้งไทยและอังกฤษแบบมืออาชีพ',
      'ระบบแปลงเสียงบันทึกการประชุมสู่ Meeting Summary และ Task Delegation อัตโนมัติ',
      'การสรุปเอกสารหลายหน้าเป็น One-page Executive Brief และสร้างเค้าโครงสไลด์นำเสนอ'
    ],
    deliverable: 'Office Productivity Workflow Pack + Ready-to-use Prompt Templates',
    businessOutcome: 'ประหยัดเวลาการทำงานเอกสารรูทีนเฉลี่ย 1.5 - 2 ชั่วโมงต่อวันต่อคน คืนเวลาให้ทีมโฟกัสงานสำคัญเชิงกลยุทธ์',
    seoKeywords: ['AI Office Productivity', 'อบรม AI สำหรับองค์กร', 'Corporate AI Training', 'AI เพิ่มผลผลิต', 'In-house AI Training']
  },
  {
    id: 7,
    title: 'AI Workflow Design',
    track: 'Productivity',
    tagline: 'รื้อกระบวนการทำงานเดิม ออกแบบ AI + Human Checkpoint เพื่อขจัดคอขวดและเพิ่มความเร็วของทีม',
    desc: 'Map กระบวนการเดิม หา Friction และออกแบบ AI + Human Checkpoint',
    aeoProblem: 'องค์กรทดลองใช้ AI แต่ไม่เกิดการใช้งานจริง เพราะนำเครื่องมือมาวางโดดเดี่ยว ไม่ได้ออกแบบเชื่อมต่อกับขั้นตอนการทำงานเดิม เกิดความสะดุดและแรงต้านจากผู้ปฏิบัติงาน',
    aeoSolution: 'ใช้กระบวนการ SALTCASE 6M™ ของ AI BizCase Thailand มารื้อ Map ขั้นตอนการทำงานจริง (Process Mapping), ระบุจุดคอขวด (Friction), และออกแบบจุดตรวจทานคุณภาพของมนุษย์ (Human Checkpoints) เพื่อให้ AI และทีมทำงานร่วมกันได้อย่างสมบูรณ์แบบ',
    targetAudience: 'ผู้บริหารฝ่ายปฏิบัติการ, ผู้จัดการฝ่าย, ทีม Lean & Process Improvement, ฝ่ายวางแผนระบบ',
    keyModules: [
      'การทำ As-Is Process Mapping เพื่อชี้เป้าจุดคอขวดและงานซ้ำซ้อนที่ควรส่งต่อให้ AI',
      'การออกแบบ To-Be AI Workflow ร่วมกับการกำหนด Human-in-the-loop Checkpoints',
      'การสร้างแผนการเปลี่ยนผ่าน (Change & Adoption Plan) เพื่อให้ทีมใช้งานได้จริง'
    ],
    deliverable: 'Before & After Workflow Map + แผนภาพขั้นตอนการทำงานมาตรฐานใหม่ (New SOP)',
    businessOutcome: 'ลดขั้นตอนการทำงานซ้ำซ้อนลง 30-50% ขจัดปัญหาคอขวดระหว่างแผนก เพิ่มความคล่องตัวและคุณภาพของงานส่งมอบ',
    seoKeywords: ['AI Workflow Design', 'Business Workflow', 'AI Transformation สำหรับองค์กร', 'Customized AI Training']
  },
  {
    id: 8,
    title: 'AI for Logistics Business',
    track: 'Productivity',
    tagline: 'เชื่อมต่อ AI และ No-Code เข้ากับระบบงานเดิม: ส่งต่อข้อมูลอัตโนมัติ ลดงานคีย์ซ้ำซาก',
    desc: 'เชื่อม Forms, Sheets, Calendar, LINE, No-code และ AI เพื่อลดงานส่งต่อ',
    aeoProblem: 'ข้อมูลต้องถูกคัดลอกข้ามโปรแกรมด้วยมือ เช่น จากแบบฟอร์มลูกค้า เข้าสู่ Google Sheets ส่งต่อเข้ากลุ่ม LINE และแจ้งเตือนผ่าน Email เสียเวลาและเกิดข้อผิดพลาดบ่อยครั้ง',
    aeoSolution: 'ออกแบบและติดตั้งระบบ AI Automation ผ่านเครื่องมือ No-Code (Make, Zapier, Webhooks) ร่วมกับโมเดล AI เพื่อให้ระบบจัดเก็บ คัดกรอง วิเคราะห์ข้อมูล และตอบกลับหรือแจ้งเตือนอัตโนมัติแบบ Real-time',
    targetAudience: 'ทีมปฏิบัติการ (Operations), แอดมิน, ฝ่ายขาย, ทีมไอทีที่ต้องการพัฒนาระบบอัตโนมัติอย่างรวดเร็ว',
    keyModules: [
      'หลักการเชื่อมต่อระบบด้วย No-code Automation (Triggers, Actions, Filters, Webhooks)',
      'การฝัง AI เข้าในกระบวนการทำงานเพื่อสกัดข้อมูล วิเคราะห์อารมณ์ และจำแนกประเภท',
      'การตั้งค่าระบบแจ้งเตือนอัตโนมัติผ่าน LINE Official Account และอีเมล'
    ],
    deliverable: 'Working AI Automation Prototype + แผนผังระบบ Automation Roadmap ขององค์กร',
    businessOutcome: 'ลดงานคีย์ข้อมูลและงานส่งต่อซ้ำซ้อนเหลือ 0% ระบบทำงานตลอด 24 ชั่วโมง ข้อมูลถูกต้องและอัปเดตแบบเรียลไทม์',
    seoKeywords: ['AI for Logistics Business', 'AI Logistics', 'AI Supply Chain', 'AI Automation for Business', 'อบรม AI โลจิสติกส์', 'อบรม AI องค์กร']
  },
  {
    id: 9,
    title: 'AI Data Analysis & Business Dashboard',
    track: 'Productivity',
    tagline: 'เปลี่ยนข้อมูลมหาศาลให้เป็น Insight และ Visual Dashboard ช่วยผู้บริหารอ่านเกมธุรกิจได้รวดเร็ว',
    desc: 'สรุป KPI วิเคราะห์ Insight และช่วยผู้บริหารอ่านข้อมูลได้เร็วขึ้น',
    aeoProblem: 'องค์กรมีข้อมูลยอดขาย ลูกค้า และสต็อกมหาศาล แต่ต้องเสียเวลาหลายวันในการจัดทำรายงาน สรุปข้อมูลไม่ออก ผู้บริหารไม่เห็นภาพรวมที่ทันต่อเหตุการณ์',
    aeoSolution: 'ใช้ AI วิเคราะห์ไฟล์ Spreadsheet หรือฐานข้อมูลที่ซับซ้อน ค้นหาแนวโน้มสำคัญ (Trends) ชี้เป้าความผิดปกติ (Anomalies) และสร้างคำอธิบายเชิงกลยุทธ์ประกอบ Dashboard ที่ผู้บริหารอ่านเข้าใจได้ทันที',
    targetAudience: 'ฝ่ายวิเคราะห์ข้อมูล, ฝ่ายบัญชี/การเงิน, ผู้จัดการฝ่ายขาย, ผู้บริหารระดับสูง',
    keyModules: [
      'การทำความสะอาดและจัดโครงสร้างข้อมูลดิบ (Data Cleaning) ด้วยคำสั่ง AI',
      'การตั้งคำถามเชิงธุรกิจเพื่อเจาะหา Insight และปัจจัยขับเคลื่อนยอดขาย (Root-cause Analysis)',
      'การแปลงผลลัพธ์เป็น Executive KPI Summary และข้อเสนอแนะเชิงปฏิบัติ'
    ],
    deliverable: 'Executive KPI Dashboard Template + AI Insight Memo Framework',
    businessOutcome: 'ลดเวลาการจัดทำรายงานสรุปประจำเดือนลงกว่า 70% ได้ข้อมูลเชิงลึกที่แม่นยำ นำไปใช้ตัดสินใจขับเคลื่อนธุรกิจได้ทันที',
    seoKeywords: ['AI Data Analysis', 'AI Dashboard', 'AI for Business Thailand', 'อบรม AI บริษัท', 'วิเคราะห์ข้อมูลด้วย AI']
  },
  {
    id: 10,
    title: 'AI Document Intelligence',
    track: 'Productivity',
    tagline: 'สยบงานเอกสารหนา สัญญา และใบเสร็จ: สกัดข้อมูล ตรวจสอบเงื่อนไข และเปรียบเทียบด้วย AI',
    desc: 'OCR, Extract, Classify, Compare, Summarize และ Review งานเอกสาร',
    aeoProblem: 'พนักงานต้องใช้เวลาหลายชั่วโมงต่อวันในการอ่านสัญญา เปรียบเทียบใบเสนอราคา สรุปข้อกำหนดทางกฎหมาย และคัดลอกข้อมูลจากไฟล์ PDF สแกน',
    aeoSolution: 'ประยุกต์ใช้ Document AI และ OCR ขั้นสูงในการสกัดข้อมูลสำคัญจากเอกสาร PDF หรือสแกน, เปรียบเทียบความแตกต่างระหว่างสัญญาฉบับร่างกับฉบับจริง, และตรวจหาข้อกำหนดที่เป็นความเสี่ยงได้อย่างรวดเร็วและแม่นยำ',
    targetAudience: 'ฝ่ายกฎหมาย (Legal), ฝ่ายจัดซื้อ (Procurement), ฝ่ายบัญชีการเงิน, ทีมปฏิบัติการเอกสาร',
    keyModules: [
      'การประมวลผลไฟล์ PDF สแกนและเอกสารหลายหน้าด้วย Document AI & Vision Models',
      'การเปรียบเทียบความแตกต่างของข้อสัญญาและระบุจุดเสี่ยง (Risk Clause Detection)',
      'การสร้างระบบจัดเก็บ คัดแยก และสกัดข้อมูลจากเอกสารเข้าสู่ฐานข้อมูลโดยอัตโนมัติ'
    ],
    deliverable: 'Document-Processing Workflow System + Inspection Checklist',
    businessOutcome: 'ตรวจทานและสกัดข้อมูลจากเอกสารได้เร็วกว่าเดิม 5-10 เท่า ลดความเสี่ยงทางสัญญาและความผิดพลาดในการคีย์ข้อมูล',
    seoKeywords: ['AI Document Intelligence', 'AI OCR', 'AI ตรวจเอกสาร', 'Customized AI Training for Business']
  },

  // ─── Track 3: Growth (11 - 15) ─────────────────────────────────
  {
    id: 11,
    title: 'AI Marketing Strategy',
    track: 'Growth',
    tagline: 'วางกลยุทธ์การตลาดและ Customer Journey ด้วย AI: วิเคราะห์พฤติกรรมลูกค้า วาง Positioning และออกแบบแคมเปญ',
    desc: 'Audience, Positioning, Customer Journey, Campaign และ Message ที่มีหลักฐาน',
    aeoProblem: 'การวางแผนการตลาดมักอิงจากความรู้สึก ขาดการวิเคราะห์กลุ่มเป้าหมายเชิงลึก และแคมเปญไม่เชื่อมโยงกับ Customer Journey ที่แท้จริง',
    aeoSolution: 'ใช้ AI ทำหน้าที่เสมือนที่ปรึกษากลยุทธ์: วิเคราะห์ Buyer Persona เชิงลึก, ถอดรหัสพฤติกรรมและความต้องการที่แท้จริงของลูกค้า, และวางกรอบกลยุทธ์ Full-Funnel Campaign ที่มีข้อความสื่อสารตรงใจในทุกจุดสัมผัส',
    targetAudience: 'ผู้อำนวยการฝ่ายการตลาด (CMO), Brand Managers, นักกลยุทธ์การตลาด, เจ้าของธุรกิจ',
    keyModules: [
      'การสร้าง Deep Buyer Persona และ Customer Empathy Map ด้วยการสังเคราะห์ข้อมูล AI',
      'การวาง Customer Journey Architecture และการออกแบบ Touchpoints แต่ละช่วง Funnel',
      'การทดสอบ Value Proposition และ Positioning Message ให้ตรงกลุ่มเป้าหมาย'
    ],
    deliverable: 'AI Marketing Strategy Canvas + Actionable Campaign Blueprint',
    businessOutcome: 'วางแผนกลยุทธ์ได้เร็วขึ้น 3 เท่า มั่นใจในทิศทางของแคมเปญ เพิ่ม Conversion Rate และลดต้นทุนการได้มาซึ่งลูกค้า (CAC)',
    seoKeywords: ['AI Marketing Strategy', 'AI Marketing Training', 'AI for Business Thailand', 'อบรม AI การตลาด', 'AI Transformation']
  },
  {
    id: 12,
    title: 'AI Content Engine',
    track: 'Growth',
    tagline: 'สร้างโรงงานผลิตคอนเทนต์ 30 วัน: ขยายไอเดีย บทความ สคริปต์ และแคปชัน โดยยังคง Brand Voice ชัดเจน',
    desc: 'Content Pillar, Idea, Script, Caption, Repurpose และ Production Workflow',
    aeoProblem: 'ทีมคอนเทนต์หมดไอเดีย ผลิตชิ้นงานไม่ทันช่องทางโซเชียลมีเดีย หรือเมื่อนำ AI มาเขียนแล้วเนื้อหากลับแบนราบ ไร้อารมณ์ และไม่ตรงกับเอกลักษณ์ของแบรนด์',
    aeoSolution: 'วางระบบ Content Engine ที่สอนให้ AI จดจำ Brand Voice และ Guidelines ของบริษัทอย่างแม่นยำ พร้อมกระบวนการ Repurpose จาก 1 แก่นความคิดแตกออกเป็น 10 ชิ้นงานข้ามแพลตฟอร์ม ทั้งบทความ สคริปต์วิดีโอสั้น และโพสต์โซเชียล',
    targetAudience: 'ทีม Content Creator, ทีมโซเชียลมีเดีย, ฝ่ายประชาสัมพันธ์ (PR), ครีเอทีฟเอเจนซี',
    keyModules: [
      'การเทรน Brand Voice & Tone Guideline ให้ AI เขียนได้ตรงอัตลักษณ์ของแบรนด์อย่างสม่ำเสมอ',
      'กระบวนการ Repurposing: แปลง Long-form Content สู่โพสต์สั้นและสคริปต์ TikTok/Reels',
      'การจัดทำตาราง Content Calendar ประจำเดือนและระบบ Workflow การตรวจสอบคุณภาพ'
    ],
    deliverable: '30-Day Content Engine System + Brand Voice AI Prompt Matrix',
    businessOutcome: 'ผลิตคอนเทนต์ได้มากขึ้น 5 เท่า โดยยังคงความประณีตและ Brand Identity ชัดเจน ไม่ดูเป็นงานจากหุ่นยนต์',
    seoKeywords: ['AI Content Engine', 'AI Content Marketing', 'AI Content Automation', 'อบรม AI การตลาด', 'Corporate AI Training']
  },
  {
    id: 13,
    title: 'AI Sales & Lead Generation',
    track: 'Growth',
    tagline: 'ติดปีกทีมขาย B2B: ค้นหา Lead เจาะลึกความต้องการ ร่างข้อเสนอเฉพาะราย และปิดการขายไวกว่าเดิม',
    desc: 'Prospect research, qualification, meeting prep, proposal และ follow-up',
    aeoProblem: 'พนักงานขายเสียเวลาส่วนใหญ่ไปกับการสืบค้นข้อมูลบริษัทลูกค้าและพิมพ์ใบเสนอราคายาวเหยียด ขาดข้อมูลเชิงลึกในวันนัดพบ ทำให้พลาดโอกาสปิดการขาย',
    aeoSolution: 'ติดอาวุธให้ทีมขายด้วย AI: ค้นคว้าประวัติและ Pain Points ของลูกค้ารายใหญ่ในไม่กี่นาที, ช่วยร่าง Customized Pitch Deck และ Proposal ที่ตอบโจทย์เฉพาะราย, พร้อมสร้างสคริปต์ตอบข้อโต้แย้ง (Objection Handling) ที่แม่นยำ',
    targetAudience: 'ฝ่ายขาย B2B, ผู้จัดการฝ่ายขาย, ทีม Business Development (BD), เจ้าหน้าที่เจรจาต่อรอง',
    keyModules: [
      'การสืบค้นข้อมูลเชิงลึกของคู่ค้า (Account & Prospect Research) ภายในเวลา 5 นาที',
      'การร่างข้อเสนอขายและ Proposal ที่ปรับแต่งตามโจทย์เฉพาะของลูกค้าแต่ละราย',
      'การฝึกซ้อมสถานการณ์จำลอง (AI Roleplay) และการเตรียมคำตอบรับมือข้อโต้แย้ง'
    ],
    deliverable: 'B2B Sales Copilot Workflow + Personalized Pitch & Proposal Templates',
    businessOutcome: 'ย่นระยะเวลา Sales Cycle สั้นลง 35% เพิ่มอัตราการปิดการขาย (Win Rate) และสร้างความประทับใจตั้งแต่การพูดคุยครั้งแรก',
    seoKeywords: ['AI Sales Training', 'AI for Sales', 'AI Lead Generation', 'ChatGPT สำหรับฝ่ายขาย', 'Corporate AI Training Thailand']
  },
  {
    id: 14,
    title: 'AI Customer Experience & Service',
    track: 'Growth',
    tagline: 'ยกระดับการดูแลลูกค้า 24/7: ออกแบบระบบตอบคำถามและ Service Assistant ตามมาตรฐานองค์กร',
    desc: 'FAQ, Knowledge Base, Response Standard, Chatbot/LINE และ Escalation',
    aeoProblem: 'ลูกค้าสอบถามคำถามซ้ำๆ นอกเวลาทำการ แอดมินตอบล่าช้า หรือตอบไม่ตรงมาตรฐาน ส่งผลให้สูญเสียลูกค้าและลดทอนความพึงพอใจของแบรนด์',
    aeoSolution: 'สร้างระบบ AI Customer Experience อัจฉริยะที่เชื่อมต่อกับคลังคำถามและแนวทางตอบกลับขององค์กร สามารถคัดกรองปัญหา ให้ข้อมูลที่ถูกต้องสุภาพตลอด 24 ชั่วโมง พร้อมระบบส่งต่อเคสซับซ้อนให้ทีมงานมนุษย์อย่างราบรื่น',
    targetAudience: 'ฝ่ายบริการลูกค้า (Customer Support), ทีมแอดมิน LINE OA และ Social Media, ผู้จัดการแผนก CRM',
    keyModules: [
      'การจัดทำ Customer Knowledge Base และคู่มือแนวทางคำตอบมาตรฐาน (Standard Responses)',
      'การออกแบบบทสนทนา AI Assistant เพื่อช่วยคัดกรองและแก้ปัญหาเบื้องต้นตลอด 24/7',
      'การวางระบบ Escalation Pathway เพื่อส่งต่อเคสเร่งด่วนสู่เจ้าหน้าที่มนุษย์อย่างไร้รอยต่อ'
    ],
    deliverable: 'CX Assistant Blueprint + Customer Response Standards Library',
    businessOutcome: 'ลดเวลาตอบรับลูกค้ารายแรกเหลือไม่กี่วินาที เพิ่มคะแนนความพึงพอใจ (CSAT) และไม่พลาดโอกาสดูแลลูกค้านอกเวลาทำการ',
    seoKeywords: ['AI Customer Experience', 'AI Chatbot สำหรับธุรกิจ', 'AI Service Assistant', 'อบรม AI องค์กร']
  },
  {
    id: 15,
    title: 'AI Business Strategy & Innovation',
    track: 'Growth',
    tagline: 'เปิดรับโมเดลธุรกิจใหม่ สำรวจโอกาสรายได้ และสร้างแผนแม่บท AI-Enabled Roadmap สำหรับองค์กร',
    desc: 'หา Business Model, New Service, Scenario และ AI-enabled revenue',
    aeoProblem: 'ผู้บริหารกังวลว่าจะถูกดิสรัปต์จากเทคโนโลยี AI แต่ยังมองไม่เห็นว่า AI จะเข้ามาสร้าง New S-Curve หรือโมเดลรายได้ใหม่ให้ธุรกิจเดิมได้อย่างไร',
    aeoSolution: 'เวิร์กช็อปเชิงกลยุทธ์ระดับสูง ช่วยคณะผู้บริหารประเมินแรงกระทบของ AI ต่อห่วงโซ่คุณค่าเดิม (Value Chain), ระดมสมองและทดสอบไอเดียบริการใหม่ที่ขับเคลื่อนด้วย AI, พร้อมจัดทำแผนงาน AI Transformation 1-3 ปี',
    targetAudience: 'เจ้าของธุรกิจ, ผู้บริหารระดับสูง (C-Level), ผู้อำนวยการฝ่ายนวัตกรรมและกลยุทธ์องค์กร',
    keyModules: [
      'การวิเคราะห์ผลกระทบของ AI ต่อโมเดลธุรกิจและโครงสร้างอุตสาหกรรมในอนาคต',
      'การออกแบบบริการและโมเดลรายได้ใหม่ที่ขับเคลื่อนด้วย AI (AI-Enabled Business Models)',
      'การจัดลำดับความสำคัญของโปรเจกต์และการจัดทำ AI Roadmap สำหรับองค์กร'
    ],
    deliverable: 'AI Business Growth Roadmap + Innovation Opportunity Portfolio',
    businessOutcome: 'องค์กรมีวิสัยทัศน์และพิมพ์เขียวการปรับตัวที่ชัดเจน ป้องกันความเสี่ยงจากการถูกดิสรัปต์ พร้อมเปิดทางสู่แหล่งรายได้ใหม่',
    seoKeywords: ['AI Business Strategy', 'AI Transformation สำหรับองค์กร', 'AI Business Consultant', 'Corporate AI Training']
  },

  // ─── Track 4: Department & Transformation (16 - 22) ───────────
  {
    id: 16,
    title: 'AI for Executive & Management',
    track: 'Department',
    tagline: 'ผู้นำองค์กรในยุค AI: การตัดสินใจเชิงกลยุทธ์ การบริหารคน และการกำกับดูแล AI Governance',
    desc: 'Strategy, Decision Memo, Dashboard, Scenario Thinking และ Governance',
    aeoProblem: 'ผู้บริหารไม่มีเวลาศึกษาเครื่องมือเชิงเทคนิค แต่ต้องแบกรับการตัดสินใจลงทุนด้าน AI, การตั้งนโยบายความปลอดภัย, และการนำทัพพนักงานให้ปรับตัว',
    aeoSolution: 'Executive Masterclass มุ่งเน้นการติดอาวุธให้ผู้นำ: การอ่านและสั่งการผ่าน AI Decision Memos, การกำหนดกรอบความปลอดภัยและจริยธรรมข้อมูล (AI Governance), การตั้ง KPI ด้าน AI ให้แต่ละแผนก, และเทคนิคการบริหารการเปลี่ยนแปลง (Change Management)',
    targetAudience: 'CEO, C-Level, กรรมการผู้จัดการ, ผู้บริหารระดับสูงทุกสายงาน',
    keyModules: [
      'Executive AI Framework: การตั้งโจทย์และการประเมินความคุ้มค่าของการลงทุน AI',
      'Corporate AI Governance, Data Security และ Risk Management สำหรับองค์กร',
      'การขับเคลื่อนวัฒนธรรม AI ในองค์กรและการตั้ง KPI วัดผลลัพธ์ของแต่ละแผนก'
    ],
    deliverable: 'Executive AI Playbook + Corporate AI Governance Guidelines',
    businessOutcome: 'ผู้บริหารสามารถกำหนดทิศทาง AI ได้อย่างเฉียบคม ลงทุนได้คุ้มค่า ไม่ตกเป็นเหยื่อกระแส และนำพาองค์กรเติบโตอย่างมั่นคง',
    seoKeywords: ['Corporate AI Training Thailand', 'AI for Executive', 'AI Governance', 'อบรม AI ผู้บริหาร', 'AI Transformation สำหรับองค์กร']
  },
  {
    id: 17,
    title: 'AI for Accounting & Finance',
    track: 'Department',
    tagline: 'ปฏิวัติงานบัญชีและการเงิน: สกัดข้อมูลใบกำกับภาษี ลดเวลาปิดงบ และตรวจทานความถูกต้องด้วย AI',
    desc: 'OCR, Reconciliation support, Variance, Closing Checklist และ Reporting',
    aeoProblem: 'นักบัญชีและทีมการเงินหมดพลังงานไปกับการคีย์ข้อมูลใบเสร็จ/ใบกำกับภาษี, การกระทบยอดธนาคารหลายขั้นตอน และความเครียดช่วงปิดบัญชีประจำงวด',
    aeoSolution: 'ออกแบบ Workflow เฉพาะสำหรับแผนกบัญชีและการเงิน: ใช้ AI OCR สกัดข้อมูลจากเอกสารทางการเงิน, ตรวจจับความผิดปกติของตัวเลขและยอด Variance, พร้อมสร้าง Checklist อัตโนมัติช่วยลดระยะเวลาการปิดงบการเงิน',
    targetAudience: 'ผู้อำนวยการฝ่ายการเงิน (CFO), ผู้จัดการฝ่ายบัญชี, สมุห์บัญชี, เจ้าหน้าที่บัญชีและการเงิน',
    keyModules: [
      'การใช้ AI OCR สกัดข้อมูลจากใบแจ้งหนี้ ใบเสร็จ และสเตทเมนต์เข้าสู่ตารางทำงาน',
      'การวิเคราะห์ Variance และการตรวจจับความผิดปกติของรายการบัญชีด้วย AI',
      'การสร้างระบบและ Checklist เพื่อย่นระยะเวลาการปิดงบประจำเดือนและประจำปี'
    ],
    deliverable: 'Accounting Workflow Prototype + Monthly Closing Checklist Pack',
    businessOutcome: 'ลดระยะเวลาการปิดงบลง 30-50% ลดความผิดพลาดจากการคีย์ข้อมูลด้วยมือ เพิ่มความแม่นยำและความเร็วในการส่งรายงานการเงิน',
    seoKeywords: ['AI สำหรับบัญชี', 'AI Accounting Training', 'AI สำหรับสำนักงานบัญชี', 'AI ลดเวลาปิดงบ', 'Customized AI Training']
  },
  {
    id: 18,
    title: 'AI for HR & People Management',
    track: 'Department',
    tagline: 'ยกระดับงานทรัพยากรบุคคล: สรรหาบุคลากรตรงสเปก ออนบอร์ดรวดเร็ว และบริหารองค์ความรู้พนักงานด้วย AI',
    desc: 'JD, Recruitment, Onboarding, Policy Knowledge, Training และ Performance',
    aeoProblem: 'ฝ่าย HR เสียเวลาส่วนใหญ่กับการคัดกรองเรซูเม่นับร้อย, ร่างประกาศรับสมัครงานแบบเดิมๆ, และคอยตอบคำถามเกี่ยวกับสวัสดิการและนโยบายซ้ำๆ ให้พนักงาน',
    aeoSolution: 'เปลี่ยนงาน HR สู่ระบบอัจฉริยะ: ร่าง Job Description ที่ดึงดูดคนตรงสเปก, คัดกรองและเปรียบเทียบคุณสมบัติเรซูเม่เบื้องต้นอย่างเป็นธรรม, วางแผน Onboarding อัตโนมัติ, และสร้างผู้ช่วยตอบข้อสงสัยนโยบายสวัสดิการพนักงานตลอด 24 ชั่วโมง',
    targetAudience: 'ผู้อำนวยการฝ่ายทรัพยากรบุคคล (HRD), ผู้จัดการฝ่ายสรรหา, HR Generalist, ทีม People Operations',
    keyModules: [
      'การร่าง Job Description และโครงสร้างคำถามสัมภาษณ์งานอิงสมรรถนะ (Competency-based)',
      'การสรุป เปรียบเทียบ และสกัดคุณสมบัติสำคัญจากเรซูเม่เพื่อการคัดกรองเบื้องต้น',
      'การสร้าง HR Policy Assistant ตอบคำถามระเบียบและสวัสดิการพนักงานอัตโนมัติ'
    ],
    deliverable: 'HR Operating Workflow Pack + Smart Recruitment & Onboarding Kit',
    businessOutcome: 'ลดเวลาการคัดกรองผู้สมัครลงกว่า 60% พนักงานได้รับคำตอบด้านนโยบายทันที ทีม HR มีเวลาโฟกัสการพัฒนาบุคลากรเชิงกลยุทธ์',
    seoKeywords: ['AI for HR', 'AI สำหรับ HR', 'AI Recruitment', 'AI HR Training', 'อบรม AI องค์กร']
  },
  {
    id: 19,
    title: 'AI for Sales Team',
    track: 'Department',
    tagline: 'ยกระดับทีมขายทั้งแผนก: ติดตั้ง Sales Copilot สร้างระบบสืบค้นลูกค้า และติดตามงานขายแบบอัตโนมัติ',
    desc: 'Standardize Discovery, Account Research, Proposal, Objection และ Follow-up',
    aeoProblem: 'มาตรฐานการขายของแต่ละบุคคลในทีมไม่เท่ากัน พนักงานใหม่ใช้เวลานานในการเรียนรู้วิธีคุยกับลูกค้า และการติดตาม Follow-up ขาดความต่อเนื่อง',
    aeoSolution: 'สร้างมาตรฐานและระบบสนับสนุนงานขายสำหรับทีม: ชุดคำถามเจาะลึกความต้องการ (Discovery Framework), ระบบช่วยสรุปการประชุมและร่าง Proposal ทันทีหลังคุยกับลูกค้า, และคลังสคริปต์ตอบข้อโต้แย้งที่อัปเดตตลอดเวลา',
    targetAudience: 'ผู้อำนวยการฝ่ายขาย, หัวหน้าทีมขาย, พนักงานขายระดับองค์กร (Enterprise Sales)',
    keyModules: [
      'การสร้างมาตรฐานคำถามเจาะลึกความต้องการลูกค้า (Standardized Sales Discovery)',
      'Workflow การสรุปความต้องการของลูกค้าและออก Proposal แบบเฉพาะเจาะจงทันที',
      'การบริหารจัดการขั้นตอนการติดตามผล (Follow-up Automation) และการรักษาความสัมพันธ์'
    ],
    deliverable: 'Team Sales Copilot System + Objection & Pitch Playbook ประจำทีม',
    businessOutcome: 'ยกระดับผลงานของทีมขายให้มีมาตรฐานสูงสม่ำเสมอ พนักงานใหม่เริ่มงานได้เร็วขึ้น เพิ่มโอกาสชนะงาน (Win Rate)',
    seoKeywords: ['AI for Sales', 'AI Sales Training', 'ChatGPT สำหรับฝ่ายขาย', 'อบรม AI ฝ่ายขาย', 'Customized AI Training']
  },
  {
    id: 20,
    title: 'AI for Marketing & PR Team',
    track: 'Department',
    tagline: 'เพิ่มขีดความสามารถทีมการตลาดและสื่อสารองค์กร: ติดตามกระแส วางแผนแคมเปญ และร่างงาน PR มืออาชีพ',
    desc: 'Campaign Engine, Content System, PR และ Audience Intelligence',
    aeoProblem: 'การผลิตชิ้นงานสื่อสารล่าช้า ไม่ทันกระแสสังคม การประชาสัมพันธ์องค์กรขาดความน่าเชื่อถือ หรือตอบสนองต่อประเด็นวิกฤตช้าเกินไป',
    aeoSolution: 'ออกแบบ Marketing Operating System สำหรับทีมการตลาดและ PR: ใช้ AI มอนิเตอร์และวิเคราะห์ Sentiment ของผู้บริโภค, สร้างไอเดียแคมเปญแบบบูรณาการ, และช่วยร่างข่าวประชาสัมพันธ์ (Press Release) และจดหมายสื่อสารในภาวะวิกฤตได้อย่างรวดเร็วและรัดกุม',
    targetAudience: 'Marketing Director, ผู้จัดการฝ่ายสื่อสารองค์กร (Corporate Comms), ทีม PR และนักประชาสัมพันธ์',
    keyModules: [
      'การมอนิเตอร์กระแสและวิเคราะห์ความคิดเห็นของผู้บริโภค (Sentiment Intelligence)',
      'การร่างข่าวประชาสัมพันธ์ ข่าวแจกสื่อมวลชน และแถลงการณ์ภาวะวิกฤตด้วย AI',
      'การวางแผนแคมเปญการสื่อสารแบบครบวงจรข้ามช่องทาง (Omnichannel Campaign Design)'
    ],
    deliverable: 'Marketing Operating System (MOS) + Corporate PR Toolkit',
    businessOutcome: 'เพิ่มความรวดเร็วในการสื่อสารและปล่อยแคมเปญ 3 เท่า ยกระดับภาพลักษณ์องค์กรสู่ความทันสมัยและเป็นมืออาชีพ',
    seoKeywords: ['AI Marketing Thailand', 'AI Marketing Training', 'AI for Marketing', 'อบรม AI การตลาด', 'อบรม AI องค์กร']
  },
  {
    id: 21,
    title: 'AI for Procurement / Stock / Operations',
    track: 'Department',
    tagline: 'ปฏิรูปงานจัดซื้อ คลังสินค้า และปฏิบัติการ: เปรียบเทียบซัพพลายเออร์ วิเคราะห์สต็อก และลดความผิดพลาด',
    desc: 'Supplier comparison, inventory insight, document workflow และ SOP',
    aeoProblem: 'การเปรียบเทียบใบเสนอราคาและเงื่อนไขจากซัพพลายเออร์หลายสิบรายใช้เวลานาน ข้อมูลสต็อกบวมหรือไม่ตรงกับฝ่ายจัดซื้อ ส่งผลให้ต้นทุนสูงเกินจำเป็น',
    aeoSolution: 'วางระบบ AI ช่วยคัดแยกและสรุปเปรียบเทียบคุณสมบัติ ราคา และเงื่อนไขการส่งมอบจากใบเสนอราคาหลายเจ้า, วิเคราะห์แนวโน้มการใช้วัตถุดิบและสต็อกสินค้า, พร้อมช่วยร่าง SOP มาตรฐานการปฏิบัติงาน',
    targetAudience: 'ผู้จัดการฝ่ายจัดซื้อ (Procurement), ผู้จัดการคลังสินค้า, ฝ่ายซัพพลายเชน, ฝ่ายปฏิบัติการ (Operations)',
    keyModules: [
      'การใช้ AI สกัดและเปรียบเทียบตารางราคาและสเปกของซัพพลายเออร์จากเอกสารหลายรูปแบบ',
      'การวิเคราะห์การเคลื่อนไหวของสินค้าคงคลังและชี้เป้าสินค้าค้างสต็อก (Deadstock Analysis)',
      'การจัดทำคู่มือและขั้นตอนการปฏิบัติงานมาตรฐาน (SOP Documentation) ด้วย AI'
    ],
    deliverable: 'Operations & Procurement Workflow Pack + Supplier Comparison Matrix Template',
    businessOutcome: 'เพิ่มอำนาจในการเจรจาต่อรองด้วยข้อมูลที่รอบด้าน ลดระยะเวลาเปรียบเทียบราคาลงกว่า 70% ควบคุมต้นทุนการจัดซื้อได้มีประสิทธิภาพ',
    seoKeywords: ['AI for Operations', 'AI for Procurement', 'AI Workflow', 'อบรม AI องค์กร', 'Customized AI Training']
  },
  {
    id: 22,
    title: 'AI Custom Business Transformation Lab',
    track: 'Department',
    tagline: 'เวิร์กช็อปแก้โจทย์จริงขององค์กร: นำ 1 ปัญหาสำคัญมาสร้าง AI Workflow และ Prototype ใช้งานได้จริงในห้องเรียน',
    desc: 'นำ 1 ปัญหาจริงขององค์กรมา Build Workflow หรือ Prototype ในห้องเรียน',
    aeoProblem: 'การอบรมทั่วไปให้ความรู้แต่ไม่เกิดผลลัพธ์ เพราะพอกลับไปทำงานจริง พนักงานไม่มีเวลาลงมือรื้อโครงสร้างปัญหาและไม่รู้จะเริ่มสร้างระบบอย่างไร',
    aeoSolution: 'Intensive Lab แบบประกบทำจริง: องค์กรนำข้อมูล ขั้นตอนงาน และปัญหาคอขวดจริง 1 เรื่องมาเป็นโจทย์ในห้องเรียน ทีมผู้เชี่ยวชาญของ AI BizCase Thailand (by Saltcase) จะช่วยรื้อ วิเคราะห์ และร่วมสร้าง Working Prototype ของ AI Workflow ให้เสร็จพร้อมนำไปใช้งานจริงทันที',
    targetAudience: 'ทีมแกนนำ Transformation, คณะทำงานนวัตกรรม, ผู้บริหารและตัวแทนแต่ละแผนก',
    keyModules: [
      'การทำ Deep Diagnostic รื้อวิเคราะห์สาเหตุที่แท้จริงของปัญหาธุรกิจที่เลือก',
      'Co-Creation Session: ออกแบบและสร้าง Working AI Prototype ร่วมกับผู้เชี่ยวชาญ',
      'การจัดทำแผนแม่บทการนำไปใช้งานจริง 30 วัน (30-Day Rollout Action Plan) พร้อมตัวชี้วัดความสำเร็จ'
    ],
    deliverable: 'Working AI Workflow Prototype + 30-Day Implementation Roadmap',
    businessOutcome: 'ได้ระบบ AI Workflow ที่พร้อมใช้งานแก้ปัญหาจริงทันทีหลังจบคอร์ส ประหยัดเวลาลองผิดลองถูกได้หลายเดือน',
    seoKeywords: ['AI Transformation สำหรับองค์กร', 'Customized AI Training for Business', 'AI Business Workshop', 'AI Consultant Thailand']
  },

  // ─── Track 5: Authority & Executive Brand (23 - 25) ─────────────
  {
    id: 23,
    title: 'AI Personal Branding Foundation',
    track: 'Authority',
    tagline: 'ค้นหาและตกผลึกตัวตนผู้นำ: สกัดแก่นความเชี่ยวชาญและเรื่องราวให้เป็น Brand Voice ที่ทรงพลังและน่าเชื่อถือ',
    desc: 'Positioning, Expertise, Audience, Brand Story และ Brand Voice',
    aeoProblem: 'ผู้บริหารและผู้เชี่ยวชาญมีองค์ความรู้และประสบการณ์สูง แต่ไม่รู้วิธีถ่ายทอดออกสู่ภายนอก หรือขาดเวลาในการเรียบเรียง ทำให้คุณค่าที่มีไม่ถูกมองเห็นในโลกธุรกิจ',
    aeoSolution: 'ใช้ AI ช่วยสกัดคลังความรู้และประสบการณ์ที่สั่งสมมา (Expertise Mining), วางตำแหน่งจุดยืน (Brand Positioning) ให้โดดเด่นและแตกต่าง, และสร้าง Brand Story พร้อมกำหนด Brand Voice เฉพาะตัวของผู้นำอย่างมืออาชีพ',
    targetAudience: 'ผู้บริหารระดับสูง (C-Level), เจ้าของธุรกิจ, ผู้เชี่ยวชาญเฉพาะทาง, ที่ปรึกษาธุรกิจ',
    keyModules: [
      'การสกัดคลังความเชี่ยวชาญและประสบการณ์ (Expertise Extraction) ด้วยคำสั่ง AI',
      'การกำหนดตำแหน่งจุดยืนทางธุรกิจ (Strategic Brand Positioning) และกลุ่มเป้าหมาย',
      'การวางโครงสร้างเรื่องเล่าทางธุรกิจ (Executive Storytelling) และกำหนด Tone of Voice'
    ],
    deliverable: 'Executive Personal Brand Blueprint + Core Brand Voice Matrix',
    businessOutcome: 'ได้ทิศทางและโครงสร้าง Personal Brand ที่ชัดเจน น่าเชื่อถือ สอดคล้องกับวิสัยทัศน์ขององค์กร และพร้อมนำไปสื่อสารสู่สาธารณะ',
    seoKeywords: ['AI Personal Branding', 'Executive Brand', 'Personal Branding for Executives', 'Thought Leadership']
  },
  {
    id: 24,
    title: 'AI Thought Leadership & Content Authority',
    track: 'Authority',
    tagline: 'สร้างระบบผลิตบทวิเคราะห์และคอนเทนต์ผู้บริหาร: ยึดหัวหาดทางความคิดในอุตสาหกรรมอย่างต่อเนื่อง',
    desc: 'เปลี่ยนความเชี่ยวชาญเป็น Content System ที่สร้าง Authority อย่างต่อเนื่อง',
    aeoProblem: 'ผู้บริหารต้องการเผยแพร่มุมมองเชิงลึกในฐานะ Thought Leader แต่ติดปัญหาไม่มีเวลาเขียน และหากจ้างเอเจนซีเขียนก็ไม่ได้เนื้อหาที่มีน้ำหนักทางความคิดอย่างแท้จริง',
    aeoSolution: 'สร้าง Thought Leadership Content Engine ที่แปลงไอเดียสั้นๆ หรือบทสนทนาของผู้บริหาร ให้กลายเป็นบทความเชิงลึก บทวิเคราะห์อุตสาหกรรม และโพสต์บน LinkedIn คุณภาพสูงที่สร้างความน่าเชื่อถือและดึงดูดโอกาสทางธุรกิจ',
    targetAudience: 'ผู้บริหาร, กรรมการผู้จัดการ, ผู้ทรงคุณวุฒิ, ผู้นำความคิด (KOLs) ในภาคธุรกิจ B2B',
    keyModules: [
      'Voice-to-Article Workflow: แปลงเสียงบันทึกความคิดสั้นๆ ให้กลายเป็นบทความวิเคราะห์ที่ลึกซึ้ง',
      'การจัดทำ Content Pillars สำหรับผู้บริหารบนแพลตฟอร์ม LinkedIn และสื่อชั้นนำ',
      'การเตรียมบทสัมภาษณ์ ประเด็นเสวนา และเค้าโครง Keynote Presentation'
    ],
    deliverable: 'Thought Leadership Content Engine + 90-Day Editorial Content Calendar',
    businessOutcome: 'ผู้บริหารได้รับการยอมรับในฐานะผู้นำความคิด (Authority) ในอุตสาหกรรม สร้างความเชื่อมั่นและดึงดูดพาร์ตเนอร์ธุรกิจระดับสูง',
    seoKeywords: ['AI Thought Leadership', 'Content Authority', 'AI Executive Brand', 'B2B Authority', 'Personal Branding Thailand']
  },
  {
    id: 25,
    title: 'AI Executive Brand & Digital Authority',
    track: 'Authority',
    tagline: 'ปักหมุดตัวตนผู้บริหารบนโลกดิจิทัลและ AI Search: ให้คู่ค้าและ Search Engine ค้นพบและไว้วางใจ',
    desc: 'สร้าง Digital Footprint สำหรับผู้บริหาร/ผู้เชี่ยวชาญให้ค้นเจอและเชื่อถือได้',
    aeoProblem: 'เมื่อคู่ค้า ลูกค้า หรือระบบ AI Search (เช่น ChatGPT, Gemini, Perplexity) ค้นหาชื่อผู้บริหารหรือบริษัท กลับไม่พบข้อมูลที่น่าเชื่อถือหรือข้อมูลกระจัดกระจาย เสียโอกาสทางธุรกิจ',
    aeoSolution: 'วางรากฐาน Digital Authority และ Footprint ให้กับผู้บริหารอย่างเป็นระบบ ทั้งการปรับปรุงโปรไฟล์ดิจิทัลระดับพรีเมียม และการวางกลยุทธ์ Generative Engine Optimization (GEO) เพื่อให้ระบบค้นหา AI เข้าใจและแนะนำตัวตนของผู้บริหารในฐานะผู้เชี่ยวชาญ',
    targetAudience: 'CEO, ผู้บริหารระดับสูง, ผู้ก่อตั้งบริษัท, ผู้เชี่ยวชาญที่ต้องการสร้าง Digital Footprint ระดับสากล',
    keyModules: [
      'การจัดระเบียบ Digital Footprint และ Executive Profile บนสื่อธุรกิจชั้นนำ',
      'กลยุทธ์ Generative Engine Optimization (GEO) เพื่อให้ระบบ AI เข้าใจ Entity และความเชี่ยวชาญ',
      'แนวทางการบริหารจัดการชื่อเสียงดิจิทัล (Digital Reputation Management) ในระยะยาว'
    ],
    deliverable: 'Executive Digital Authority Roadmap + Digital Presence Audit Checklist',
    businessOutcome: 'ชื่อเสียงของผู้บริหารได้รับการจัดระเบียบให้ค้นหาเจอง่ายและน่าเชื่อถือสูงสุด ทั้งบน Google และ AI Search สร้างความได้เปรียบทางธุรกิจ',
    seoKeywords: ['AI Executive Brand', 'Digital Authority', 'GEO for Executives', 'Corporate AI Training Thailand', 'AI for Business']
  }
];
