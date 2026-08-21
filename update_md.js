const fs = require('fs');

const content = fs.readFileSync('generate_full_spm.js', 'utf8');

const p1Match = content.match(/const P1_DATA = (\[[\s\S]*?\]);\r?\n\r?\n\/\/ 3\. Paper 2/);
const p2Match = content.match(/const P2_DATA = (\[[\s\S]*?\]);\r?\n\r?\n\/\/ Helper/);

if (p1Match && p2Match) {
  const P1_DATA = eval(p1Match[1]);
  const P2_DATA = eval(p2Match[1]);
  const letters = ['A', 'B', 'C', 'D'];

  let md1 = '# SIJIL PELAJARAN MALAYSIA 2026\n## MATEMATIK (1449/1) — KERTAS 1 / PAPER 1\n**Masa / Time:** 1 jam 30 minit / 1 hour 30 minutes\n\n---\n\n';
  P1_DATA.forEach(q => {
    md1 += '### Soalan ' + q.id + '\n' + q.qBM + '\n*' + q.qEN + '*\n\n';
    q.options.forEach((opt, i) => {
      md1 += '- **' + letters[i] + '.** ' + opt.bm + (opt.en ? ' / *' + opt.en + '*' : '') + '\n';
    });
    md1 += '\n---\n\n';
  });
  fs.writeFileSync('SPM_Matematik_Kertas_1_Forecast.md', md1);

  let md2 = '# SIJIL PELAJARAN MALAYSIA 2026\n## MATEMATIK (1449/2) — KERTAS 2 / PAPER 2\n**Masa / Time:** 2 jam 30 minit / 2 hours 30 minutes\n**Jumlah Markah / Total Marks:** 100 Markah / 100 Marks\n\n---\n\n';
  let curSec = '';
  P2_DATA.forEach(q => {
    if (q.section !== curSec) {
      curSec = q.section;
      md2 += '## ' + curSec.toUpperCase() + '\n\n';
    }
    md2 += '### Soalan ' + q.id + ' <span style="color:#4338ca;">' + q.totalMarks + '</span>\n';
    if (q.introBM) {
      md2 += q.introBM + '\n*' + q.introEN + '*\n\n';
    }
    q.parts.forEach(p => {
      md2 += '**' + p.label + '** ' + p.qBM + '\n*' + p.qEN + '*\n\n<div align="right"><b>' + p.marks + '</b></div>\n\n';
    });
    md2 += '---\n\n';
  });
  fs.writeFileSync('SPM_Matematik_Kertas_2_Forecast.md', md2);
  console.log('Markdown files synchronized successfully.');
}
