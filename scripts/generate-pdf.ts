import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4', // 595.28 x 841.89 pt
});

const pageWidth = doc.internal.pageSize.getWidth();
const margin = 36; // 0.5 inch margins
const contentWidth = pageWidth - margin * 2;
let y = 36;

// Helper for horizontal rules with title
const drawSectionHeader = (title: string) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(title + ':', margin, y);
  y += 3;
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.75);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;
};

// Helper for bullet items
const drawBullet = (text: string, indent = 14, maxWidth = contentWidth - indent) => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(20, 20, 20);
  
  // Draw bullet dot
  doc.text('•', margin + indent - 7, y);
  
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, margin + indent, y);
  y += lines.length * 10.5 + 2;
};

// ================= HEADER =================
// Name
doc.setFont('helvetica', 'bold');
doc.setFontSize(15);
doc.setTextColor(0, 0, 0);
doc.text('THARSHINI SK', pageWidth / 2, y, { align: 'center' });
y += 12;

// Contact info
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(30, 30, 30);

// Email | Phone
const contactLine1 = 'Email: tharshinimoorth2006@gmail.com   |   Phone: +91 6369260277';
doc.text(contactLine1, pageWidth / 2, y, { align: 'center' });
y += 10.5;

// LinkedIn
doc.setFont('helvetica', 'bold');
doc.text('LinkedIn: ', margin + 80, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(0, 70, 150);
const linkedInText = 'https://www.linkedin.com/in/tharshini-sk-0b40862b9';
doc.text(linkedInText, margin + 125, y);
doc.link(margin + 125, y - 8, doc.getTextWidth(linkedInText), 10, {
  url: 'https://www.linkedin.com/in/tharshini-sk-0b40862b9',
});
y += 10.5;

// GitHub
doc.setTextColor(30, 30, 30);
doc.setFont('helvetica', 'bold');
doc.text('GitHub: ', margin + 80, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(0, 70, 150);
const githubText = 'https://github.com/Tharshinisk';
doc.text(githubText, margin + 120, y);
doc.link(margin + 120, y - 8, doc.getTextWidth(githubText), 10, {
  url: 'https://github.com/Tharshinisk',
});
y += 12;

// ================= OBJECTIVE =================
drawSectionHeader('Objective');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(30, 30, 30);
const objectiveText =
  'Seeking an opportunity to apply my skills in circuit design, embedded systems, software design and communication networks to develop practical industry experience. Aiming to apply academic knowledge to real-world challenges and support impactful engineering initiatives.';
const objLines = doc.splitTextToSize(objectiveText, contentWidth);
doc.text(objLines, margin, y);
y += objLines.length * 10.5 + 5;

// ================= AREA OF INTEREST =================
drawSectionHeader('Area of Interest');
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(30, 30, 30);
doc.text('1.  VLSI design', margin + 18, y);
y += 10.5;
doc.text('2.  Embedded System', margin + 18, y);
y += 11;

// ================= EDUCATION =================
drawSectionHeader('Education');

// B.E.
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('Bachelor of Engineering', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('  |  Dr. Mahalingam College of Engineering and Technology, Pollachi.', margin + 98, y);
y += 10.5;
doc.text('May 2026  |  CGPA – 8.5%', margin, y);
y += 11;

// HSC
doc.setFont('helvetica', 'bold');
doc.text('HSC', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('  |  Saratha Matric Higher Secondary School – Modachur', margin + 24, y);
y += 10.5;
doc.text('May, 2023  |  86%', margin, y);
y += 11;

// SSLC
doc.setFont('helvetica', 'bold');
doc.text('SSLC', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('  |  Saratha Matric Higher Secondary School – Modachur', margin + 28, y);
y += 10.5;
doc.text('March, 2021', margin, y);
y += 13;

// ================= SKILLS =================
drawSectionHeader('Skills');

const col1X = margin;
const col2X = margin + contentWidth * 0.54;
const skillsStartY = y;

// Left Column: Technical Skills
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('Technical Skills:', col1X, y);
y += 10.5;

// Tech Bullets
const drawTechBullet = (label: string, value: string) => {
  doc.setFont('helvetica', 'normal');
  doc.text('•', col1X + 8, y);
  doc.setFont('helvetica', 'bold');
  doc.text(label + ': ', col1X + 16, y);
  const labelWidth = doc.getTextWidth(label + ': ');
  doc.setFont('helvetica', 'normal');
  const valLines = doc.splitTextToSize(value, contentWidth * 0.5 - 18 - labelWidth);
  doc.text(valLines, col1X + 16 + labelWidth, y);
  y += Math.max(valLines.length * 10, 10.5);
};

drawTechBullet('Programming Languages', 'C, Java');
drawTechBullet('Web Technologies', 'HTML, CSS, JavaScript');
drawTechBullet('Circuit Design', 'Analog Design, Layout Creation, Circuit Simulation');
drawTechBullet('Tools & Technologies', 'MATLAB, ADS Software, Figma, MULTISIM');
const leftEndY = y;

// Right Column: Soft Skills
let rightY = skillsStartY;
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('Soft Skills:', col2X, rightY);
rightY += 10.5;

const drawSoftBullet = (label: string, value: string) => {
  doc.setFont('helvetica', 'normal');
  doc.text('•', col2X + 8, rightY);
  doc.setFont('helvetica', 'bold');
  doc.text(label + ': ', col2X + 16, rightY);
  const labelWidth = doc.getTextWidth(label + ': ');
  doc.setFont('helvetica', 'normal');
  const valLines = doc.splitTextToSize(value, contentWidth * 0.44 - 18 - labelWidth);
  doc.text(valLines, col2X + 16 + labelWidth, rightY);
  rightY += Math.max(valLines.length * 10, 10.5);
};

drawSoftBullet('Communication', 'Good at verbal and written');
drawSoftBullet('Leadership Skills', 'Strong team coordination');
drawSoftBullet('Quick learner', 'Adaptive to new environment');

y = Math.max(leftEndY, rightY) + 5;

// ================= PROJECTS =================
drawSectionHeader('Projects');

// Project 1
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('Reverse Engineering Project Bluetooth Speaker:', margin, y);
y += 10.5;
drawBullet(
  'It helps understand the internal components such as the Bluetooth module, amplifier, battery, and speaker driver.',
  14
);

// Project 2
doc.setFont('helvetica', 'bold');
doc.text('Automatic Railway Gate Control System:', margin, y);
y += 10.5;
drawBullet(
  'An Automatic railway gate control system uses sensors and a microcontroller to detect an approaching train and automatically close the gate. After the train passes, the gate opens automatically, reducing accidents.',
  14
);
y += 2;

// ================= INTERNSHIPS =================
drawSectionHeader('Internships');

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('Profenna Infotech – Web Development', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('[6 June, 2025 – 20 June, 2025]', pageWidth - margin, y, { align: 'right' });
y += 10.5;
drawBullet('Learned practical web development during internship', 14);
drawBullet('Built a simple project using HTML and CSS', 14);
y += 2;

// ================= CERTIFICATIONS =================
drawSectionHeader('Certifications');
drawBullet('Certification in Linguaskill and secured B1 grade', 14);
drawBullet('Certification in Codsoft UI/UX design', 14);
y += 2;

// ================= ACHIEVEMENTS =================
drawSectionHeader('Achievements');
drawBullet(
  "Participated in TANCAM's Hackathon for Tamil Nadu Women in Science and Engineering (TNWISE 2025), Hosur.",
  14
);
y += 2;

// ================= EXTRACURRICULAR ACTIVITIES =================
drawSectionHeader('Extracurricular Activities');
drawBullet('Member of National Service Scheme', 14);

// Write output
const outputDir = path.resolve('public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
const outputPath = path.join(outputDir, 'Tharshini_SK_Resume.pdf');
fs.writeFileSync(outputPath, pdfBuffer);
console.log(`Successfully generated valid PDF at ${outputPath}, size: ${pdfBuffer.length} bytes`);
