const { execSync } = require('child_process');
const path = require('path');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

function convertToPdf(htmlName, pdfName) {
  const htmlPath = path.join(__dirname, htmlName);
  const pdfPath = path.join(__dirname, pdfName);
  const cmd = `"${edgePath}" --headless=new --disable-gpu --virtual-time-budget=4000 --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlPath}"`;
  console.log("Running:", cmd);
  try {
    execSync(cmd, { stdio: 'inherit', timeout: 45000 });
    console.log(`Successfully generated ${pdfName}`);
  } catch (err) {
    console.error(`Error generating ${pdfName}:`, err.message);
  }
}

convertToPdf('generate_pdf_paper1.html', 'SPM_Matematik_Kertas_1_Exam.pdf');
convertToPdf('generate_pdf_paper2.html', 'SPM_Matematik_Kertas_2_Exam.pdf');
convertToPdf('generate_pdf_skema.html', 'SPM_Matematik_Skema_Pemarkahan.pdf');
