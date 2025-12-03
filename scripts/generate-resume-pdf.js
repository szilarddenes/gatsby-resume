// PDF Generator using Puppeteer - Creates clean HTML then converts to PDF
// This approach gives us FULL control over layout and styling

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

// Format dates to match website
function formatDate(dateStr) {
  if (!dateStr) return 'present';
  if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${day}, ${months[parseInt(month) - 1]}, ${year}`;
  }
  if (dateStr.match(/^\d{4}-\d{2}$/)) {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]}, ${year}`;
  }
  return dateStr;
}

const formatDateRange = (start, end) => `${formatDate(start)} — ${formatDate(end) || 'present'}`;

// Generate HTML for the resume
function generateResumeHTML(data, profileImageBase64) {
  const { basics, work, education, trainings, awards, skillsMain, languages, interests, references } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Helvetica', 'Arial', sans-serif;
      font-size: 9.5pt;
      line-height: 1.4;
      color: #222;
      background: white;
      padding: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 2px solid #000;
    }
    .header-left {
      display: flex;
      align-items: center;
    }
    .profile-img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .header-text h1 {
      font-size: 20pt;
      color: #000;
      margin-bottom: 3px;
      font-weight: bold;
      letter-spacing: 0.5px;
    }
    .header-text h2 {
      font-size: 11pt;
      color: #444;
      margin-bottom: 0;
      font-weight: 600;
    }
    .contact {
      font-size: 8.5pt;
      color: #555;
      text-align: right;
      line-height: 1.6;
    }
    .contact-item {
      display: block;
      margin-bottom: 2px;
    }
    .section {
      margin-top: 10px;
    }
    .section-small {
      page-break-inside: avoid;
    }
    .section-title {
      font-size: 11pt;
      font-weight: bold;
      color: #000;
      text-transform: uppercase;
      border-bottom: 2px solid #000;
      padding-bottom: 3px;
      margin-bottom: 8px;
      letter-spacing: 1px;
      page-break-after: avoid;
    }
    .item {
      margin-bottom: 8px;
      page-break-inside: avoid;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
      border-bottom: 0.5px dotted #ccc;
      padding-bottom: 2px;
    }
    .item-title {
      font-weight: bold;
      font-size: 10pt;
      color: #000;
    }
    .item-subtitle {
      font-size: 9pt;
      color: #444;
      margin-bottom: 3px;
      font-weight: 500;
    }
    .item-date {
      font-size: 8.5pt;
      color: #666;
      white-space: nowrap;
      font-style: italic;
    }
    .item-summary {
      font-size: 9pt;
      color: #333;
      margin-bottom: 5px;
      line-height: 1.4;
    }
    ul {
      margin-left: 18px;
      margin-bottom: 6px;
    }
    li {
      font-size: 8.5pt;
      margin-bottom: 3px;
      color: #444;
      line-height: 1.4;
    }
    li::marker {
      color: #000;
    }
    .tag-container {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 4px;
    }
    .tag {
      background: #ddd;
      color: #000;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 7pt;
      display: inline-block;
    }
    .two-column {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .skill-software {
      margin-bottom: 6px;
      margin-top: 4px;
      margin-left: 10px;
    }
    .skill-software-name {
      font-weight: 600;
      font-size: 9pt;
      margin-bottom: 2px;
      color: #333;
      font-style: italic;
    }
    .skill-software-desc {
      font-size: 8.5pt;
      color: #444;
      margin-bottom: 3px;
      line-height: 1.4;
    }
    .profile-item {
      font-size: 8pt;
      margin-right: 12px;
      display: inline-block;
    }
    @page {
      size: A4;
      margin: 20mm 20mm 25mm 20mm;
      @bottom-center {
        content: counter(page) " / " counter(pages);
        font-size: 8pt;
        color: #666;
      }
    }
    @media print {
      body {
        padding: 0;
        orphans: 2;
        widows: 2;
      }
      .item {
        page-break-inside: avoid;
      }
      .section-title {
        page-break-after: avoid;
      }
      h1, h2, h3 {
        page-break-after: avoid;
      }
    }
  </style>
</head>
<body>
  <!-- HEADER -->
  <div class="header">
    <div class="header-left">
      <img src="${profileImageBase64}" class="profile-img" alt="Profile">
      <div class="header-text">
        <h1>${basics.name}</h1>
        <h2>${basics.label}</h2>
      </div>
    </div>
    <div class="contact">
      <span class="contact-item">${basics.email}</span>
      <span class="contact-item">+36 30 8134832</span>
      <span class="contact-item">szilarddenes.com</span>
    </div>
  </div>

  <!-- ABOUT -->
  <div class="section">
    <div class="section-title">About</div>
    <ul>
      ${(Array.isArray(basics.summary) ? basics.summary : [basics.summary]).filter(Boolean).map(item => `<li>${item}</li>`).join('')}
    </ul>
  </div>


  <!-- SKILLS -->
  <div class="section">
    <div class="section-title">Skills</div>
    ${(skillsMain || []).map(skill => `
      <div class="item">
        <div class="item-title">${skill.name}</div>
        ${skill.description ? `<div class="item-summary">${skill.description}</div>` : ''}
        ${skill.keywords ? `<div class="tag-container">${skill.keywords.map(kw => `<span class="tag">${kw}</span>`).join('')}</div>` : ''}
        ${skill.software ? skill.software.map(sw => `
          <div class="skill-software">
            <div class="skill-software-name">${sw.name} (${sw.experience})</div>
            ${sw.description ? `<div class="skill-software-desc">${sw.description}</div>` : ''}
          </div>
        `).join('') : ''}
        ${skill.highlights ? `<ul>${skill.highlights.map(hl => `<li>${hl}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('')}
  </div>


  <!-- WORK -->
  <div class="section">
    <div class="section-title">Work Experience</div>
    ${(work || []).map((job, index) => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${job.name}</div>
            <div class="item-subtitle">${job.position}</div>
          </div>
          <div class="item-date">${formatDateRange(job.startDate, job.endDate)}</div>
        </div>
        ${job.summary ? `<div class="item-summary">${job.summary}</div>` : ''}
        ${job.highlights && job.highlights.length > 0 ? `<ul>${job.highlights.map(h => `<li>${h}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('')}
  </div>

  <!-- EDUCATION -->
  <div class="section section-small">
    <div class="section-title">Education</div>
    ${(education || []).map(edu => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${edu.institution}</div>
            <div class="item-subtitle">${edu.studyType} - ${edu.area}</div>
          </div>
          <div class="item-date">${formatDateRange(edu.startDate, edu.endDate)}</div>
        </div>
        ${edu.thesis ? `<div style="font-size: 7.5pt; color: #666;">Thesis: ${edu.thesis}</div>` : ''}
      </div>
    `).join('')}
  </div>

  <!-- TRAININGS -->
  ${trainings && trainings.length > 0 ? `
  <div class="section">
    <div class="section-title">Professional Training</div>
    ${trainings.map(t => `
      <div class="item" style="margin-bottom: 6px;">
        <div class="item-header">
          <div class="item-title" style="font-size: 9pt;">${t.title}</div>
          <div class="item-date">${formatDateRange(t.startDate, t.endDate)}</div>
        </div>
        <div style="font-size: 8.5pt; color: #555;">${t.location} • Instructor: ${t.heldBy}</div>
      </div>
    `).join('')}
  </div>` : ''}

  <!-- AWARDS -->
  ${awards && awards.length > 0 ? `
  <div class="section section-small">
    <div class="section-title">Awards & Recognition</div>
    ${awards.map(a => `
      <div class="item">
        <div class="item-title">${a.title}</div>
        <div style="font-size: 8.5pt; color: #666; margin-bottom: 3px;">${a.awarder} • ${formatDate(a.date)}</div>
        ${a.summary ? `<div class="item-summary">${a.summary}</div>` : ''}
      </div>
    `).join('')}
  </div>` : ''}

  <!-- LANGUAGES -->
  <div class="section section-small">
    <div class="section-title">Languages</div>
    <div style="font-size: 9pt; line-height: 1.6;">
      ${(languages || []).map(l => `<div style="margin-bottom: 4px;"><strong>${l.language}:</strong> ${l.fluency}</div>`).join('')}
    </div>
  </div>

  <!-- REFERENCES -->
  ${references && references.length > 0 ? `
  <div class="section">
    <div class="section-title">References</div>
    ${references.map(ref => `
      <div style="margin-bottom: 5px;">
        <div style="font-weight: 600; font-size: 8.5pt; color: #000;">${ref.name}</div>
        <div style="font-size: 8pt; color: #333; line-height: 1.3; font-style: italic; margin-top: 1px;">"${ref.reference}"</div>
      </div>
    `).join('')}
  </div>` : ''}
</body>
</html>
  `;
}

async function generateResumePDF() {
  try {
    // Check for command-line flags
    const args = process.argv.slice(2);
    const screenshotsOnly = args.includes('--screenshots-only');
    const verbose = args.includes('--verbose');

    console.log('🔄 Starting PDF generation with Puppeteer...');
    if (screenshotsOnly) console.log('📸 Screenshots-only mode enabled');

    // Read resume data
    const resumePath = path.join(__dirname, '../resume/resume.yaml');
    const yamlContent = fs.readFileSync(resumePath, 'utf8');
    const resumeData = yaml.parse(yamlContent);

    // Read and encode profile image
    const profileImagePath = path.join(__dirname, '../src/img/szilarddenes_profile_circle.png');
    const profileImageBuffer = fs.readFileSync(profileImagePath);
    const profileImageBase64 = `data:image/png;base64,${profileImageBuffer.toString('base64')}`;

    console.log('✅ Resume data loaded');
    console.log(`   Name: ${resumeData.basics.name}`);

    // Generate HTML
    const html = generateResumeHTML(resumeData, profileImageBase64);

    // Launch Puppeteer
    console.log('🌐 Launching browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport to A4 dimensions (at 96 DPI: 794x1123px)
    await page.setViewport({ width: 794, height: 1123 });
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, '../screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    // Take full-page screenshot
    console.log('📸 Taking full-page screenshot...');
    const screenshotPath = path.join(screenshotsDir, 'resume-full.png');
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });
    console.log(`✅ Screenshot saved: ${screenshotPath}`);

    // Take individual page screenshots (A4 size: 794x1123px at 96 DPI)
    const pageHeight = 1123;
    // Calculate number of pages based on full page screenshot height
    const metrics = await page.evaluate(() => {
      return {
        height: document.documentElement.scrollHeight
      };
    });
    const numPages = Math.ceil(metrics.height / pageHeight);

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const pageScreenshotPath = path.join(screenshotsDir, `resume-page-${pageNum}.png`);
      await page.screenshot({
        path: pageScreenshotPath,
        clip: {
          x: 0,
          y: (pageNum - 1) * pageHeight,
          width: 794,
          height: pageHeight
        }
      });
      if (verbose) console.log(`✅ Page ${pageNum} screenshot saved`);
    }
    console.log(`✅ Individual page screenshots saved (1-${numPages})`);

    if (screenshotsOnly) {
      console.log('📸 Screenshots-only mode: Skipping PDF generation');
      await browser.close();
      console.log('✅ Done! Screenshots saved to screenshots/');
      return;
    }

    // Generate PDF
    const outputPath = path.join(__dirname, '../public/resume-szilard-denes.pdf');
    console.log('🎨 Generating PDF...');

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    });

    await browser.close();

    const stats = fs.statSync(outputPath);
    console.log('✅ PDF generated successfully!');
    console.log(`📄 Output: ${outputPath}`);
    console.log(`📊 Size: ${(stats.size / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('❌ Error:', error);
    console.error(error.stack);
    process.exit(1);
  }
}

generateResumePDF();
