const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("=== COMPILING COMPLETE SPM MATHEMATICS FORECAST WITH FULL LOCAL KATEX & PERFECT MATH RENDERING ===");

// 1. ALL SVGS REDESIGNED WITH GENEROUS PADDING & PERFECT VIEWBOXES
const SVGS = {
  p1_q2: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 320 150" width="320" height="150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="35" y1="105" x2="120" y2="105" stroke="#0f172a" stroke-width="2.5"/><line x1="120" y1="105" x2="200" y2="45" stroke="#0f172a" stroke-width="2.5"/><line x1="200" y1="45" x2="280" y2="45" stroke="#0f172a" stroke-width="2.5" stroke-dasharray="4,4"/><line x1="120" y1="105" x2="210" y2="105" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M 95,105 A 25 25 0 0 1 135,93" fill="none" stroke="#2563eb" stroke-width="2.2"/><text x="80" y="82" font-family="Arial" font-size="12" font-weight="bold" fill="#2563eb">144°</text><path d="M 148,105 A 25 25 0 0 0 135,93" fill="none" stroke="#dc2626" stroke-width="2"/><text x="156" y="96" font-family="Arial" font-size="12" font-weight="bold" fill="#dc2626">θ</text><text x="30" y="130" font-family="Arial" font-size="11" fill="#475569">Sisi poligon / Polygon side</text></svg></div>`,
  p1_q6: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 300 190" width="300" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><path d="M 65,145 L 185,145 A 120 120 0 0 0 65,25 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2.2"/><circle cx="65" cy="145" r="4" fill="#0f172a"/><text x="45" y="158" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a">O</text><text x="195" y="150" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a">P</text><text x="60" y="18" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a">Q</text><text x="105" y="165" font-family="Arial" font-size="11" font-weight="bold" fill="#1e40af">j = 14 cm</text><path d="M 95,145 A 30 30 0 0 0 65,115" fill="none" stroke="#dc2626" stroke-width="2"/><text x="80" y="130" font-family="Arial" font-size="13" font-weight="bold" fill="#dc2626">θ</text><text x="95" y="85" font-family="Arial" font-size="11.5" font-weight="bold" fill="#1e3a8a">Luas / Area = 154 cm²</text></svg></div>`,
  p1_q19: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 350 200" width="350" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="50" y1="160" x2="320" y2="160" stroke="#0f172a" stroke-width="1.8"/><line x1="50" y1="160" x2="50" y2="25" stroke="#0f172a" stroke-width="1.8"/><polygon points="320,160 314,156 314,164" fill="#0f172a"/><polygon points="50,25 46,31 54,31" fill="#0f172a"/><text x="10" y="20" font-family="Arial" font-size="10.5" font-weight="bold">Jarak / Dist (km)</text><text x="230" y="184" font-family="Arial" font-size="10.5" font-weight="bold">Masa / Time (min)</text><text x="38" y="174" font-family="Arial" font-size="10">0</text><line x1="50" y1="90" x2="170" y2="90" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="50" y1="40" x2="300" y2="40" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="170" y1="160" x2="170" y2="90" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="215" y1="160" x2="215" y2="90" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="300" y1="160" x2="300" y2="40" stroke="#94a3b8" stroke-dasharray="3,3"/><text x="22" y="94" font-family="Arial" font-size="10.5">60</text><text x="18" y="44" font-family="Arial" font-size="10.5">100</text><text x="160" y="176" font-family="Arial" font-size="10.5">45</text><text x="206" y="176" font-family="Arial" font-size="10.5">60</text><text x="290" y="176" font-family="Arial" font-size="10.5">90</text><line x1="50" y1="160" x2="170" y2="90" stroke="#2563eb" stroke-width="2.5"/><line x1="170" y1="90" x2="215" y2="90" stroke="#2563eb" stroke-width="2.5"/><line x1="215" y1="90" x2="300" y2="40" stroke="#2563eb" stroke-width="2.5"/><circle cx="170" cy="90" r="3.5" fill="#2563eb"/><circle cx="215" cy="90" r="3.5" fill="#2563eb"/><circle cx="300" cy="40" r="3.5" fill="#2563eb"/></svg></div>`,
  p1_q20: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 350 200" width="350" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><polygon points="50,160 145,55 305,55 305,160" fill="#eff6ff"/><line x1="50" y1="160" x2="325" y2="160" stroke="#0f172a" stroke-width="1.8"/><line x1="50" y1="160" x2="50" y2="25" stroke="#0f172a" stroke-width="1.8"/><polygon points="325,160 319,156 319,164" fill="#0f172a"/><polygon points="50,25 46,31 54,31" fill="#0f172a"/><text x="10" y="20" font-family="Arial" font-size="10.5" font-weight="bold">Laju / Speed (m/s)</text><text x="235" y="184" font-family="Arial" font-size="10.5" font-weight="bold">Masa / Time (s)</text><text x="38" y="174" font-family="Arial" font-size="10">0</text><line x1="50" y1="55" x2="145" y2="55" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="145" y1="160" x2="145" y2="55" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="305" y1="160" x2="305" y2="55" stroke="#94a3b8" stroke-dasharray="3,3"/><text x="34" y="59" font-family="Arial" font-size="11.5" font-weight="bold">v</text><text x="137" y="176" font-family="Arial" font-size="10.5">10</text><text x="296" y="176" font-family="Arial" font-size="10.5">30</text><line x1="50" y1="160" x2="145" y2="55" stroke="#16a34a" stroke-width="2.5"/><line x1="145" y1="55" x2="305" y2="55" stroke="#16a34a" stroke-width="2.5"/><circle cx="145" cy="55" r="3.5" fill="#16a34a"/><circle cx="305" cy="55" r="3.5" fill="#16a34a"/><text x="160" y="115" font-family="Arial" font-size="11" font-weight="bold" fill="#1e40af">Luas / Area = 500 m</text></svg></div>`,
  p1_q34: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 340 185" width="340" height="185" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><circle cx="35" cy="150" r="4" fill="#dc2626"/><text x="15" y="168" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">P(2, 3)</text><line x1="35" y1="150" x2="310" y2="35" stroke="#94a3b8" stroke-dasharray="2,2"/><line x1="35" y1="150" x2="310" y2="150" stroke="#94a3b8" stroke-dasharray="2,2"/><polygon points="90,150 145,150 145,100" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/><text x="85" y="165" font-family="Arial" font-size="10.5" font-weight="bold">A</text><text x="145" y="165" font-family="Arial" font-size="10.5" font-weight="bold">B</text><text x="150" y="100" font-family="Arial" font-size="10.5" font-weight="bold">C</text><text x="105" y="145" font-family="Arial" font-size="9.5" fill="#c2410c">6 cm</text><polygon points="175,150 310,150 310,35" fill="none" stroke="#2563eb" stroke-width="2.2"/><text x="168" y="165" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">A'</text><text x="310" y="165" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">B'</text><text x="315" y="35" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">C'</text><text x="230" y="145" font-family="Arial" font-size="10.5" font-weight="bold" fill="#1e40af">15 cm</text></svg></div>`,
  p1_q35: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 320 150" width="320" height="150" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><polygon points="25,110 60,110 75,75 40,55 12,75" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8"/><text x="33" y="90" font-family="Arial" font-size="12" font-weight="bold" fill="#854d0e">P</text><text x="10" y="132" font-family="Arial" font-size="10" fill="#713f12">Luas = 24 cm²</text><text x="100" y="90" font-family="Arial" font-size="13" font-weight="bold" fill="#64748b">──[ k = 3 ]──></text><polygon points="190,125 270,125 305,50 225,15 165,50" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="230" y="75" font-family="Arial" font-size="15" font-weight="bold" fill="#166534">Q</text><text x="195" y="142" font-family="Arial" font-size="10.5" font-weight="bold" fill="#15803d">Luas / Area = ?</text></svg></div>`,
  p1_q37: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 360 185" width="360" height="185" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="40" y1="150" x2="340" y2="150" stroke="#0f172a" stroke-width="1.5"/><line x1="40" y1="150" x2="40" y2="20" stroke="#0f172a" stroke-width="1.5"/><text x="24" y="154" font-family="Arial" font-size="10.5">0</text><text x="24" y="126" font-family="Arial" font-size="10.5">1</text><line x1="36" y1="123" x2="44" y2="123" stroke="#0f172a"/><text x="24" y="86" font-family="Arial" font-size="10.5">3</text><line x1="36" y1="83" x2="44" y2="83" stroke="#0f172a"/><text x="24" y="44" font-family="Arial" font-size="10.5">5</text><line x1="36" y1="41" x2="44" y2="41" stroke="#0f172a"/><text x="18" y="20" font-family="Arial" font-size="11.5" font-weight="bold">y</text><text x="105" y="168" font-family="Arial" font-size="10.5">90°</text><text x="175" y="168" font-family="Arial" font-size="10.5">180°</text><text x="245" y="168" font-family="Arial" font-size="10.5">270°</text><text x="310" y="168" font-family="Arial" font-size="10.5">360°</text><text x="345" y="154" font-family="Arial" font-size="11.5" font-weight="bold">x</text><line x1="40" y1="41" x2="320" y2="41" stroke="#cbd5e1" stroke-dasharray="2,2"/><line x1="40" y1="123" x2="185" y2="123" stroke="#cbd5e1" stroke-dasharray="2,2"/><path d="M 40,41 Q 112,41 112,83 T 185,123 T 257,83 T 320,41" fill="none" stroke="#7c3aed" stroke-width="2.5"/><circle cx="40" cy="41" r="3.5" fill="#7c3aed"/><circle cx="185" cy="123" r="3.5" fill="#7c3aed"/><circle cx="320" cy="41" r="3.5" fill="#7c3aed"/></svg></div>`,
  p1_q39: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 360 205" width="360" height="205" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="50" y1="170" x2="340" y2="170" stroke="#0f172a" stroke-width="1.6"/><line x1="50" y1="170" x2="50" y2="25" stroke="#0f172a" stroke-width="1.6"/><text x="10" y="20" font-family="Arial" font-size="10" font-weight="bold">Kekerapan Longgokan / Cum. Freq</text><text x="230" y="195" font-family="Arial" font-size="10.5" font-weight="bold">Masa / Time (min)</text><text x="30" y="174" font-family="Arial" font-size="9.5">0</text><text x="25" y="136" font-family="Arial" font-size="9.5">20 (Q₁)</text><text x="25" y="102" font-family="Arial" font-size="9.5">40</text><text x="25" y="65" font-family="Arial" font-size="9.5">60 (Q₃)</text><text x="28" y="32" font-family="Arial" font-size="9.5">80</text><text x="45" y="184" font-family="Arial" font-size="9.5">20</text><text x="120" y="184" font-family="Arial" font-size="9.5" font-weight="bold" fill="#2563eb">42</text><text x="245" y="184" font-family="Arial" font-size="9.5" font-weight="bold" fill="#2563eb">68</text><text x="305" y="184" font-family="Arial" font-size="9.5">80</text><path d="M 50,170 C 95,170 110,145 130,133 C 160,118 190,80 255,62 C 285,50 300,28 320,28" fill="none" stroke="#2563eb" stroke-width="2.2"/><line x1="50" y1="133" x2="130" y2="133" stroke="#ef4444" stroke-dasharray="2,2"/><line x1="130" y1="133" x2="130" y2="170" stroke="#ef4444" stroke-dasharray="2,2"/><line x1="50" y1="62" x2="255" y2="62" stroke="#ef4444" stroke-dasharray="2,2"/><line x1="255" y1="62" x2="255" y2="170" stroke="#ef4444" stroke-dasharray="2,2"/></svg></div>`,

  p2_q3: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 340 210" width="340" height="210" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><rect x="10" y="10" width="320" height="190" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/><text x="22" y="30" font-family="Arial" font-size="14" font-weight="bold">ξ</text><circle cx="115" cy="90" r="58" fill="rgba(59, 130, 246, 0.12)" stroke="#2563eb" stroke-width="2"/><circle cx="225" cy="90" r="58" fill="rgba(16, 185, 129, 0.12)" stroke="#059669" stroke-width="2"/><circle cx="170" cy="142" r="48" fill="rgba(245, 158, 11, 0.12)" stroke="#d97706" stroke-width="2"/><text x="75" y="60" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">A</text><text x="255" y="60" font-family="Arial" font-size="14" font-weight="bold" fill="#059669">B</text><text x="165" y="184" font-family="Arial" font-size="14" font-weight="bold" fill="#d97706">C</text><text x="85" y="95" font-family="Arial" font-size="14" font-weight="bold">3</text><text x="245" y="95" font-family="Arial" font-size="14" font-weight="bold">5</text><text x="165" y="152" font-family="Arial" font-size="14" font-weight="bold">6</text><text x="120" y="132" font-family="Arial" font-size="13" font-weight="bold">2</text><text x="205" y="132" font-family="Arial" font-size="13" font-weight="bold">4</text></svg></div>`,
  p2_q5: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 340 185" width="340" height="185" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="30" y1="140" x2="310" y2="140" stroke="#0f172a" stroke-width="1.5"/><line x1="80" y1="170" x2="80" y2="20" stroke="#0f172a" stroke-width="1.5"/><text x="315" y="144" font-family="Arial" font-size="11.5" font-weight="bold">x</text><text x="75" y="16" font-family="Arial" font-size="11.5" font-weight="bold">y</text><text x="65" y="154" font-family="Arial" font-size="11">O</text><line x1="50" y1="150" x2="150" y2="25" stroke="#2563eb" stroke-width="2.2"/><text x="38" y="162" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">P</text><text x="155" y="30" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">Q (2y - 4x = 7)</text><line x1="120" y1="160" x2="220" y2="35" stroke="#059669" stroke-width="2.2"/><text x="108" y="172" font-family="Arial" font-size="11.5" font-weight="bold" fill="#059669">S</text><text x="225" y="40" font-family="Arial" font-size="11.5" font-weight="bold" fill="#059669">R(3, 2)</text><circle cx="185" cy="78" r="3.5" fill="#059669"/><path d="M 96,92 L 101,86 L 96,80" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 166,102 L 171,96 L 166,90" fill="none" stroke="#059669" stroke-width="2"/></svg></div>`,
  p2_q6: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 360 195" width="360" height="195" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="50" y1="160" x2="330" y2="160" stroke="#0f172a" stroke-width="1.6"/><line x1="50" y1="160" x2="50" y2="25" stroke="#0f172a" stroke-width="1.6"/><text x="10" y="20" font-family="Arial" font-size="10.5" font-weight="bold">Laju / Speed (m/s)</text><text x="245" y="184" font-family="Arial" font-size="10.5" font-weight="bold">Masa / Time (s)</text><text x="38" y="174" font-family="Arial" font-size="10.5">0</text><text x="25" y="112" font-family="Arial" font-size="10.5">12</text><text x="25" y="48" font-family="Arial" font-size="10.5">30</text><line x1="50" y1="44" x2="135" y2="44" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="50" y1="108" x2="205" y2="108" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="135" y1="160" x2="135" y2="44" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="205" y1="160" x2="205" y2="108" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="310" y1="160" x2="310" y2="108" stroke="#94a3b8" stroke-dasharray="3,3"/><text x="127" y="176" font-family="Arial" font-size="10.5">10</text><text x="197" y="176" font-family="Arial" font-size="10.5">16</text><text x="302" y="176" font-family="Arial" font-size="10.5">25</text><line x1="50" y1="44" x2="135" y2="44" stroke="#2563eb" stroke-width="2.5"/><line x1="135" y1="44" x2="205" y2="108" stroke="#2563eb" stroke-width="2.5"/><line x1="205" y1="108" x2="310" y2="108" stroke="#2563eb" stroke-width="2.5"/><circle cx="135" cy="44" r="3.5" fill="#2563eb"/><circle cx="205" cy="108" r="3.5" fill="#2563eb"/><circle cx="310" cy="108" r="3.5" fill="#2563eb"/></svg></div>`,
  p2_q11: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 360 195" width="360" height="195" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="25" y1="160" x2="340" y2="160" stroke="#0f172a" stroke-width="1.5"/><line x1="45" y1="180" x2="45" y2="20" stroke="#0f172a" stroke-width="1.5"/><text x="345" y="164" font-family="Arial" font-size="10.5">x</text><text x="40" y="16" font-family="Arial" font-size="10.5">y</text><circle cx="65" cy="140" r="4" fill="#dc2626"/><text x="50" y="134" font-family="Arial" font-size="10" font-weight="bold" fill="#dc2626">P(1, 1)</text><polygon points="95,140 150,140 140,100 95,100" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/><text x="90" y="154" font-family="Arial" font-size="9.5" font-weight="bold">A</text><text x="148" y="154" font-family="Arial" font-size="9.5" font-weight="bold">B (3 cm)</text><text x="142" y="94" font-family="Arial" font-size="9.5" font-weight="bold">C</text><text x="88" y="94" font-family="Arial" font-size="9.5" font-weight="bold">D</text><polygon points="160,140 320,140 290,28 160,28" fill="rgba(37, 99, 235, 0.08)" stroke="#2563eb" stroke-width="2.2"/><text x="155" y="156" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">E</text><text x="315" y="156" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">F (9 cm)</text><text x="292" y="22" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">G</text><text x="152" y="22" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">H</text><text x="105" y="124" font-family="Arial" font-size="9.5" font-weight="bold" fill="#c2410c">14 cm²</text></svg></div>`,
  p2_q12: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 380 230" width="380" height="230" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><polygon points="55,180 190,180 190,125 150,125 110,70 55,70" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/><polygon points="55,70 110,70 170,28 115,28" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/><polygon points="110,70 150,125 210,83 170,28" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.8"/><polygon points="150,125 190,125 250,83 210,83" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/><polygon points="190,180 250,138 250,83 190,125" fill="#94a3b8" stroke="#0f172a" stroke-width="1.8"/><line x1="55" y1="180" x2="115" y2="138" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="115" y1="138" x2="250" y2="138" stroke="#94a3b8" stroke-dasharray="3,3"/><line x1="115" y1="138" x2="115" y2="28" stroke="#94a3b8" stroke-dasharray="3,3"/><text x="40" y="192" font-family="Arial" font-size="11.5" font-weight="bold">A</text><text x="190" y="196" font-family="Arial" font-size="11.5" font-weight="bold">B</text><text x="256" y="144" font-family="Arial" font-size="11.5" font-weight="bold">C</text><text x="40" y="70" font-family="Arial" font-size="11.5" font-weight="bold">F</text><text x="110" y="64" font-family="Arial" font-size="11.5" font-weight="bold">G</text><text x="145" y="138" font-family="Arial" font-size="11.5" font-weight="bold">K</text><text x="195" y="135" font-family="Arial" font-size="11.5" font-weight="bold">L</text><text x="115" y="195" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">AB = 6 cm</text><text x="225" y="168" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">BC = 8 cm</text><text x="15" y="125" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">5 cm</text><text x="200" y="160" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">3 cm</text><path d="M 125,220 L 125,198" stroke="#dc2626" stroke-width="2.5"/><polygon points="125,190 120,200 130,200" fill="#dc2626"/><text x="135" y="216" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">X (Depan / Front)</text><path d="M 285,175 L 258,158" stroke="#dc2626" stroke-width="2.5"/><polygon points="252,154 257,163 262,156" fill="#dc2626"/><text x="275" y="192" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">Y (Sisi / Side)</text></svg></div>`,
  p2_q15: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 360 195" width="360" height="195" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="55" y1="50" x2="305" y2="50" stroke="#94a3b8" stroke-width="2"/><line x1="55" y1="50" x2="140" y2="105" stroke="#94a3b8" stroke-width="2"/><line x1="55" y1="50" x2="55" y2="155" stroke="#94a3b8" stroke-width="2"/><line x1="305" y1="50" x2="220" y2="105" stroke="#94a3b8" stroke-width="2"/><line x1="305" y1="50" x2="305" y2="155" stroke="#94a3b8" stroke-width="2"/><line x1="140" y1="105" x2="220" y2="105" stroke="#94a3b8" stroke-width="2"/><line x1="140" y1="105" x2="55" y2="155" stroke="#94a3b8" stroke-width="2"/><line x1="220" y1="105" x2="305" y2="155" stroke="#94a3b8" stroke-width="2"/><line x1="55" y1="155" x2="305" y2="155" stroke="#94a3b8" stroke-width="2"/><text x="175" y="42" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">7</text><text x="85" y="70" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">8</text><text x="38" y="110" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">9</text><text x="270" y="70" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">6</text><text x="312" y="110" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">5</text><text x="178" y="100" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">4</text><text x="80" y="135" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">10</text><text x="270" y="135" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">7</text><text x="175" y="172" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">11</text><circle cx="55" cy="50" r="15" fill="#2563eb"/><text x="49" y="55" font-family="Arial" font-size="13" font-weight="bold" fill="#fff">P</text><circle cx="305" cy="50" r="15" fill="#2563eb"/><text x="299" y="55" font-family="Arial" font-size="13" font-weight="bold" fill="#fff">Q</text><circle cx="140" cy="105" r="15" fill="#2563eb"/><text x="135" y="110" font-family="Arial" font-size="13" font-weight="bold" fill="#fff">R</text><circle cx="220" cy="105" r="15" fill="#2563eb"/><text x="215" y="110" font-family="Arial" font-size="13" font-weight="bold" fill="#fff">S</text><circle cx="55" cy="155" r="15" fill="#2563eb"/><text x="51" y="160" font-family="Arial" font-size="13" font-weight="bold" fill="#fff">T</text><circle cx="305" cy="155" r="15" fill="#2563eb"/><text x="299" y="160" font-family="Arial" font-size="13" font-weight="bold" fill="#fff">U</text></svg></div>`,
  p2_q16: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 360 185" width="360" height="185" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><line x1="50" y1="90" x2="140" y2="45" stroke="#94a3b8" stroke-width="2"/><line x1="50" y1="90" x2="140" y2="140" stroke="#94a3b8" stroke-width="2"/><line x1="140" y1="45" x2="140" y2="140" stroke="#94a3b8" stroke-width="2"/><line x1="140" y1="45" x2="250" y2="45" stroke="#94a3b8" stroke-width="2"/><line x1="140" y1="140" x2="250" y2="140" stroke="#94a3b8" stroke-width="2"/><line x1="250" y1="45" x2="250" y2="140" stroke="#94a3b8" stroke-width="2"/><text x="80" y="60" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">6 km</text><text x="75" y="130" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">10 km</text><text x="145" y="95" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">5 km</text><text x="190" y="36" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">8 km</text><text x="190" y="156" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">7 km</text><text x="255" y="95" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">4 km</text><circle cx="50" cy="90" r="17" fill="#16a34a"/><text x="44" y="95" font-family="Arial" font-size="14" font-weight="bold" fill="#fff">S</text><circle cx="140" cy="45" r="15" fill="#0f172a"/><text x="129" y="50" font-family="Arial" font-size="11" font-weight="bold" fill="#fff">M₁</text><circle cx="140" cy="140" r="15" fill="#0f172a"/><text x="129" y="145" font-family="Arial" font-size="11" font-weight="bold" fill="#fff">M₂</text><circle cx="250" cy="45" r="15" fill="#0f172a"/><text x="239" y="50" font-family="Arial" font-size="11" font-weight="bold" fill="#fff">M₃</text><circle cx="250" cy="140" r="15" fill="#0f172a"/><text x="239" y="145" font-family="Arial" font-size="11" font-weight="bold" fill="#fff">M₄</text></svg></div>`,
  p2_q17: `<div style="text-align:center; margin:14px 0;"><svg viewBox="0 0 380 220" width="380" height="220" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; display:inline-block; box-shadow:0 1px 3px rgba(0,0,0,0.05);"><polygon points="55,180 255,180 330,150 130,150" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/><text x="40" y="185" font-family="Arial" font-size="11.5" font-weight="bold">D</text><text x="260" y="185" font-family="Arial" font-size="11.5" font-weight="bold">C</text><line x1="55" y1="180" x2="55" y2="95" stroke="#0f172a" stroke-width="3"/><line x1="255" y1="180" x2="255" y2="95" stroke="#0f172a" stroke-width="3"/><text x="40" y="95" font-family="Arial" font-size="11.5" font-weight="bold">A</text><text x="260" y="95" font-family="Arial" font-size="11.5" font-weight="bold">B</text><text x="20" y="145" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">4 m</text><polygon points="55,95 255,95 330,40 130,40" fill="rgba(59, 130, 246, 0.2)" stroke="#2563eb" stroke-width="2.5"/><text x="120" y="36" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">E</text><text x="335" y="40" font-family="Arial" font-size="11.5" font-weight="bold" fill="#2563eb">F</text><line x1="130" y1="150" x2="130" y2="40" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="3,3"/><line x1="330" y1="150" x2="330" y2="40" stroke="#0f172a" stroke-width="1.8"/><text x="145" y="112" font-family="Arial" font-size="11" font-weight="bold" fill="#0f172a">AB = 10 m</text><text x="65" y="62" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">AE = 5 m</text><line x1="55" y1="95" x2="130" y2="95" stroke="#64748b" stroke-dasharray="2,2"/><path d="M 80,95 A 25 25 0 0 0 74,78" fill="none" stroke="#dc2626" stroke-width="2"/><text x="88" y="88" font-family="Arial" font-size="11.5" font-weight="bold" fill="#dc2626">30°</text></svg></div>`
};

// 2. Paper 1 Dataset with 100% Bilingual Choices & Standard Math Mode
const P1_DATA = [
  { id:1, qBM:"Ungkapkan $\\frac{0.00048 \\times 10^{-3}}{1.2 \\times 10^5}$ dalam bentuk piawai.", qEN:"Express $\\frac{0.00048 \\times 10^{-3}}{1.2 \\times 10^5}$ in standard form.", options:[{bm:"$4.0 \\times 10^{-12}$", en:""},{bm:"$4.0 \\times 10^{-11}$", en:""},{bm:"$4.0 \\times 10^{-10}$", en:""},{bm:"$4.0 \\times 10^{-9}$", en:""}], correct:0, steps:[{text:"$0.00048 \\times 10^{-3} = 4.8 \\times 10^{-4} \\times 10^{-3} = 4.8 \\times 10^{-7}$",type:"K1"},{text:"$\\frac{4.8 \\times 10^{-7}}{1.2 \\times 10^5} = 4.0 \\times 10^{-7 - 5} = 4.0 \\times 10^{-12}$",type:"N1"}], tip:"Ensure indices of 10 are subtracted carefully: $-7 - 5 = -12$." },
  { id:2, svg:"p1_q2", qBM:"Rajah di bawah menunjukkan sebahagian daripada sebuah poligon sekata dengan $n$ sisi. Diberi sudut pedalaman ialah $144^\\circ$. Cari nilai $n$.", qEN:"The diagram below shows part of a regular polygon with $n$ sides. Given that the interior angle is $144^\\circ$. Find the value of $n$.", options:[{bm:"8", en:""},{bm:"9", en:""},{bm:"10", en:""},{bm:"12", en:""}], correct:2, steps:[{text:"Sudut peluaran / Exterior angle $= 180^\\circ - 144^\\circ = 36^\\circ$",type:"K1"},{text:"$n = \\frac{360^\\circ}{36^\\circ} = 10$",type:"N1"}], tip:"Using the exterior angle formula $\\frac{360^\\circ}{\\text{exterior}}$ is always faster." },
  { id:3, qBM:"Garis lurus $2y - 6x = 9$ adalah selari dengan garis lurus $y = (k + 1)x - 4$. Cari nilai $k$.", qEN:"The straight line $2y - 6x = 9$ is parallel to the straight line $y = (k + 1)x - 4$. Find the value of $k$.", options:[{bm:"2", en:""},{bm:"3", en:""},{bm:"5", en:""},{bm:"6", en:""}], correct:0, steps:[{text:"$2y = 6x + 9 \\implies y = 3x + 4.5 \\implies m_1 = 3$",type:"K1"},{text:"$k + 1 = 3 \\implies k = 2$",type:"N1"}], tip:"Parallel lines have equal gradients ($m_1 = m_2$)." },
  { id:4, qBM:"Encik Farid menyimpan RM8,000 dalam akaun simpanan tetap dengan kadar faedah $3.5\\%$ setahun yang dikompaun setiap 3 bulan selama 4 tahun. Hitung nilai matang simpanan beliau.", qEN:"Encik Farid deposits RM8,000 in a fixed deposit account with an interest rate of $3.5\\%$ per annum compounded quarterly for 4 years. Calculate the maturity value of his savings.", options:[{bm:"RM9,197.81", en:""},{bm:"RM9,190.45", en:""},{bm:"RM9,203.20", en:""},{bm:"RM9,315.60", en:""}], correct:0, steps:[{text:"$P = 8000, r = 0.035, n = 4, t = 4$",type:"P1"},{text:"$MV = 8000\\left(1 + \\frac{0.035}{4}\\right)^{4 \\times 4} = 8000(1.00875)^{16} = \\text{RM}9,197.81$",type:"N1"}], tip:"$n = 4$ because compounding every 3 months occurs 4 times a year ($12/3 = 4$)." },
  { id:5, qBM:"Diberi $s = \\frac{3t + 4}{2 - t}$. Ungkapkan $t$ dalam sebutan $s$.", qEN:"Given $s = \\frac{3t + 4}{2 - t}$. Express $t$ in terms of $s$.", options:[{bm:"$t = \\frac{2s - 4}{s + 3}$", en:""},{bm:"$t = \\frac{2s + 4}{s - 3}$", en:""},{bm:"$t = \\frac{4 - 2s}{s + 3}$", en:""},{bm:"$t = \\frac{s + 3}{2s - 4}$", en:""}], correct:0, steps:[{text:"$s(2 - t) = 3t + 4 \\implies 2s - st = 3t + 4$",type:"K1"},{text:"$2s - 4 = t(s + 3) \\implies t = \\frac{2s - 4}{s + 3}$",type:"N1"}], tip:"Collect all terms with $t$ on one side and factorise $t$." },
  { id:6, svg:"p1_q6", qBM:"Rajah di bawah menunjukkan sebuah sektor bulatan $OPQ$ dengan pusat $O$ dan jejari $14\\text{ cm}$. Diberi luas sektor itu ialah $154\\text{ cm}^2$. Cari nilai $\\theta$. $\\left[\\text{Guna } \\pi = \\frac{22}{7}\\right]$", qEN:"The diagram below shows a sector of a circle $OPQ$ with centre $O$ and radius $14\\text{ cm}$. Given that the area of the sector is $154\\text{ cm}^2$. Find the value of $\\theta$. $\\left[\\text{Use } \\pi = \\frac{22}{7}\\right]$", options:[{bm:"$60^\\circ$", en:""},{bm:"$90^\\circ$", en:""},{bm:"$120^\\circ$", en:""},{bm:"$135^\\circ$", en:""}], correct:1, steps:[{text:"$\\frac{\\theta}{360^\\circ} \\times \\frac{22}{7} \\times 14^2 = 154$",type:"K1"},{text:"$\\frac{\\theta}{360^\\circ} \\times 616 = 154 \\implies \\theta = \\frac{154 \\times 360^\\circ}{616} = 90^\\circ$",type:"N1"}], tip:"Formula: $\\text{Luas sektor} = \\frac{\\theta}{360^\\circ} \\pi j^2$." },
  { id:7, qBM:"Antara yang berikut, yang manakah lokus bagi suatu titik yang sentiasa berjarak sama dari dua titik tetap $P$ dan $Q$?", qEN:"Which of the following is the locus of a point which is always equidistant from two fixed points $P$ and $Q$?", options:[
    {bm:"Sebuah bulatan berpusat di titik tengah $PQ$", en:"A circle centred at the midpoint of $PQ$"},
    {bm:"Garis lurus yang selari dengan garis $PQ$", en:"A straight line parallel to line $PQ$"},
    {bm:"Pembahagi dua sama serenjang bagi tembereng garis $PQ$", en:"Perpendicular bisector of line segment $PQ$"},
    {bm:"Pembahagi dua sama sudut", en:"Angle bisector"}
  ], correct:2, steps:[{text:"Lokus berjarak sama dari 2 titik tetap ialah pembahagi dua sama serenjang.",type:"P1"},{text:"Jawapan: C",type:"N1"}], tip:"Equidistant from 2 points $\\rightarrow$ Perpendicular bisector." },
  { id:8, qBM:"Selesaikan ketaksamaan linear berikut: $\\frac{3 - 2x}{5} \\le x - 5$.", qEN:"Solve the following linear inequality: $\\frac{3 - 2x}{5} \\le x - 5$.", options:[{bm:"$x \\ge 4$", en:""},{bm:"$x \\le 4$", en:""},{bm:"$x \\ge -4$", en:""},{bm:"$x \\le -4$", en:""}], correct:0, steps:[{text:"$3 - 2x \\le 5(x - 5) \\implies 3 - 2x \\le 5x - 25$",type:"K1"},{text:"$28 \\le 7x \\implies x \\ge 4$",type:"N1"}], tip:"Be careful with sign changes when moving variables." },
  { id:9, qBM:"Cari koordinat titik maksimum bagi fungsi kuadratik $f(x) = -2x^2 + 8x - 5$.", qEN:"Find the coordinates of the maximum point for the quadratic function $f(x) = -2x^2 + 8x - 5$.", options:[{bm:"$(2, 3)$", en:""},{bm:"$(2, -5)$", en:""},{bm:"$(-2, 3)$", en:""},{bm:"$(4, 3)$", en:""}], correct:0, steps:[{text:"Paksi simetri: $x = -\\frac{b}{2a} = -\\frac{8}{2(-2)} = 2$",type:"K1"},{text:"$f(2) = -2(2)^2 + 8(2) - 5 = -8 + 16 - 5 = 3 \\implies (2, 3)$",type:"N1"}], tip:"$a = -2 < 0$, graph is an inverted parabola (maximum vertex)." },
  { id:10, qBM:"Ungkapkan nombor perduaan $110111_2$ sebagai nombor dalam asas lapan.", qEN:"Express the binary number $110111_2$ as a number in base eight.", options:[{bm:"$57_8$", en:""},{bm:"$67_8$", en:""},{bm:"$73_8$", en:""},{bm:"$133_8$", en:""}], correct:1, steps:[{text:"Kumpulkan 3 digit dari kanan: $(110)_2 = 6$, $(111)_2 = 7$",type:"K1"},{text:"$110111_2 = 67_8$",type:"N1"}], tip:"Group 3 binary digits to form 1 octal digit ($2^3 = 8$)." },
  { id:11, qBM:"Hitung nilai bagi $423_5 - 134_5$ dan nyatakan jawapan dalam asas lima.", qEN:"Calculate the value of $423_5 - 134_5$ and state the answer in base five.", options:[{bm:"$234_5$", en:""},{bm:"$244_5$", en:""},{bm:"$289_5$", en:""},{bm:"$344_5$", en:""}], correct:0, steps:[{text:"Tukar ke asas 10: $423_5 = 113_{10}$, $134_5 = 44_{10} \\implies 113 - 44 = 69_{10}$",type:"K1"},{text:"$69_{10} = (2 \\times 25) + (3 \\times 5) + 4 = 234_5$",type:"N1"}], tip:"Borrowing in base 5 borrows a value of 5, not 10." },
  { id:12, qBM:"Antara pernyataan majmuk berikut, yang manakah bernilai BENAR?", qEN:"Which of the following compound statements is TRUE?", options:[
    {bm:"3 ialah faktor bagi 14 dan $3^2 = 6$", en:"3 is a factor of 14 and $3^2 = 6$"},
    {bm:"$5 > 2$ atau $-3 > -1$", en:"$5 > 2$ or $-3 > -1$"},
    {bm:"Sebuah heksagon mempunyai 5 sisi dan 2 ialah nombor perdana", en:"A hexagon has 5 sides and 2 is a prime number"},
    {bm:"$4 + 3 = 8$ atau $\\sqrt{16} = -4$", en:"$4 + 3 = 8$ or $\\sqrt{16} = -4$"}
  ], correct:1, steps:[{text:"$5 > 2$ adalah Benar. Bagi 'ATAU', Benar $\\lor$ Palsu = Benar.",type:"P1"},{text:"Jawapan: B",type:"N1"}], tip:"An 'OR' compound statement is TRUE if at least one component is true." },
  { id:13, qBM:"Tentukan kontrapositif bagi implikasi berikut: 'Jika $x$ ialah gandaan 6, maka $x$ ialah gandaan 3.'", qEN:"Determine the contrapositive of the following implication: 'If $x$ is a multiple of 6, then $x$ is a multiple of 3.'", options:[
    {bm:"Jika $x$ bukan gandaan 6, maka $x$ bukan gandaan 3.", en:"If $x$ is not a multiple of 6, then $x$ is not a multiple of 3."},
    {bm:"Jika $x$ ialah gandaan 3, maka $x$ ialah gandaan 6.", en:"If $x$ is a multiple of 3, then $x$ is a multiple of 6."},
    {bm:"Jika $x$ bukan gandaan 3, maka $x$ bukan gandaan 6.", en:"If $x$ is not a multiple of 3, then $x$ is not a multiple of 6."},
    {bm:"$x$ ialah gandaan 6 jika dan hanya jika $x$ ialah gandaan 3.", en:"$x$ is a multiple of 6 if and only if $x$ is a multiple of 3."}
  ], correct:2, steps:[{text:"Kontrapositif bagi $p \\implies q$ ialah $\\sim q \\implies \\sim p$.",type:"P1"},{text:"Jawapan: C",type:"N1"}], tip:"Contrapositive reverses and negates both statements." },
  { id:14, qBM:"Diberi set semesta $\\xi = \\{x : 1 \\le x \\le 20, x \\text{ ialah integer}\\}$, set $P = \\{x : x \\text{ ialah nombor ganjil}\\}$ dan set $Q = \\{x : x \\text{ ialah nombor perdana}\\}$. Cari $n(P \\cap Q')$.", qEN:"Given the universal set $\\xi = \\{x : 1 \\le x \\le 20, x \\text{ is an integer}\\}$, set $P = \\{x : x \\text{ is an odd number}\\}$ and set $Q = \\{x : x \\text{ is a prime number}\\}$. Find $n(P \\cap Q')$.", options:[{bm:"2", en:""},{bm:"3", en:""},{bm:"7", en:""},{bm:"8", en:""}], correct:1, steps:[{text:"$P = \\{1, 3, 5, 7, 9, 11, 13, 15, 17, 19\\}$, $Q = \\{2, 3, 5, 7, 11, 13, 17, 19\\}$",type:"K1"},{text:"$P \\cap Q' = \\{1, 9, 15\\} \\implies n(P \\cap Q') = 3$",type:"N1"}], tip:"1, 9, and 15 are odd numbers that are NOT prime." },
  { id:15, qBM:"Dalam sebuah kelas dengan 40 orang murid, 25 orang gemar badminton, 18 orang gemar bola sepak dan 5 orang tidak gemar kedua-dua sukan tersebut. Cari bilangan murid yang gemar sukan badminton SAHAJA.", qEN:"In a class of 40 students, 25 like badminton, 18 like football and 5 do not like both sports. Find the number of students who like badminton ONLY.", options:[{bm:"8", en:""},{bm:"10", en:""},{bm:"17", en:""},{bm:"20", en:""}], correct:2, steps:[{text:"$n(B \\cup F) = 40 - 5 = 35 \\implies n(B \\cap F) = 25 + 18 - 35 = 8$",type:"K1"},{text:"Badminton sahaja $= 25 - 8 = 17$",type:"N1"}], tip:"Subtract the intersection from the total number who like badminton." },
  { id:16, qBM:"Sebuah graf mempunyai 6 bucu dengan darjah bucu 2, 3, 3, 4, $k$, 2. Diberi jumlah darjah graf ialah 16. Cari nilai $k$ dan bilangan tepi bagi graf itu.", qEN:"A graph has 6 vertices with degrees 2, 3, 3, 4, $k$, 2. Given the sum of degrees of the graph is 16. Find the value of $k$ and the number of edges of the graph.", options:[
    {bm:"$k = 2$, Bilangan tepi = 8", en:"$k = 2$, Number of edges = 8"},
    {bm:"$k = 2$, Bilangan tepi = 16", en:"$k = 2$, Number of edges = 16"},
    {bm:"$k = 4$, Bilangan tepi = 8", en:"$k = 4$, Number of edges = 8"},
    {bm:"$k = 4$, Bilangan tepi = 16", en:"$k = 4$, Number of edges = 16"}
  ], correct:0, steps:[{text:"$2 + 3 + 3 + 4 + k + 2 = 16 \\implies 14 + k = 16 \\implies k = 2$",type:"K1"},{text:"Bilangan tepi $E = \\frac{\\sum d(v)}{2} = \\frac{16}{2} = 8$",type:"N1"}], tip:"Handshaking Lemma: $\\sum d(v) = 2E$." },
  { id:17, qBM:"Antara pernyataan berikut, yang manakah BUKAN ciri-ciri bagi sebuah pokok dalam teori graf?", qEN:"Which of the following is NOT a property of a tree in graph theory?", options:[
    {bm:"Merupakan graf mudah yang bersambung", en:"Is a connected simple graph"},
    {bm:"Bilangan tepi $E = V - 1$", en:"Number of edges $E = V - 1$"},
    {bm:"Mempunyai sekurang-kurangnya satu gelung", en:"Has at least one loop"},
    {bm:"Tidak mengandungi kitaran", en:"Does not contain cycles"}
  ], correct:2, steps:[{text:"Pokok ialah graf mudah tanpa gelung dan tanpa kitaran.",type:"P1"},{text:"Jawapan: C",type:"N1"}], tip:"A tree can NEVER contain loops or multiple edges." },
  { id:18, qBM:"Antara titik berikut, yang manakah memuaskan sistem ketaksamaan linear $y \\le 2x + 4$, $y + x \\ge 3$, dan $x < 4$?", qEN:"Which of the following points satisfies the system of linear inequalities $y \\le 2x + 4$, $y + x \\ge 3$, and $x < 4$?", options:[{bm:"$(1, 1)$", en:""},{bm:"$(2, 5)$", en:""},{bm:"$(4, 2)$", en:""},{bm:"$(0, 5)$", en:""}], correct:1, steps:[{text:"Uji titik $(2, 5)$: (1) $5 \\le 2(2)+4 = 8$ [Benar]; (2) $5 + 2 = 7 \\ge 3$ [Benar]; (3) $2 < 4$ [Benar]",type:"K1"},{text:"Semua syarat dipenuhi: $(2, 5)$",type:"N1"}], tip:"Test the point in all 3 inequalities simultaneously." },
  { id:19, svg:"p1_q19", qBM:"Rajah di bawah menunjukkan graf jarak-masa bagi perjalanan sebuah motosikal. Hitung laju purata, dalam $\\text{km/h}$, bagi keseluruhan perjalanan itu.", qEN:"The diagram below shows the distance-time graph for the journey of a motorcycle. Calculate the average speed, in $\\text{km/h}$, for the whole journey.", options:[{bm:"$66.67\\text{ km/h}$", en:""},{bm:"$75.00\\text{ km/h}$", en:""},{bm:"$80.00\\text{ km/h}$", en:""},{bm:"$100.00\\text{ km/h}$", en:""}], correct:0, steps:[{text:"Jumlah jarak $= 100\\text{ km}$, Jumlah masa $= 90\\text{ min} = 1.5\\text{ jam}$",type:"K1"},{text:"Laju purata $= \\frac{100\\text{ km}}{1.5\\text{ jam}} = 66.67\\text{ km/h}$",type:"N1"}], tip:"Include stationary time (15 mins) when finding total journey time." },
  { id:20, svg:"p1_q20", qBM:"Rajah di bawah menunjukkan graf laju-masa bagi pergerakan suatu zarah dalam tempoh 30 saat. Diberi jumlah jarak yang dilalui ialah $500\\text{ m}$. Cari nilai $v$.", qEN:"The diagram below shows the speed-time graph for the motion of a particle for a period of 30 seconds. Given the total distance travelled is $500\\text{ m}$. Find the value of $v$.", options:[{bm:"15", en:""},{bm:"20", en:""},{bm:"25", en:""},{bm:"30", en:""}], correct:1, steps:[{text:"Luas bentuk trapezoid $= \\frac{1}{2}(20 + 30)v = 25v$",type:"K1"},{text:"$25v = 500 \\implies v = 20\\text{ m/s}$",type:"N1"}], tip:"Area under speed-time graph = Total Distance." },
  { id:21, qBM:"Diberi set data: 4, 7, 9, 12, 15, 18, 22. Cari julat antara kuartil bagi data itu.", qEN:"Given the data set: 4, 7, 9, 12, 15, 18, 22. Find the interquartile range of the data.", options:[{bm:"9", en:""},{bm:"11", en:""},{bm:"14", en:""},{bm:"18", en:""}], correct:1, steps:[{text:"$Q_1 = 7$, Median $= 12$, $Q_3 = 18$",type:"K1"},{text:"$\\text{Julat antara kuartil} = Q_3 - Q_1 = 18 - 7 = 11$",type:"N1"}], tip:"$\text{IQR} = Q_3 - Q_1$." },
  { id:22, qBM:"Suatu set data mempunyai min 14 dan sisihan piawai 3.2. Jika setiap cerapan didarab dengan 2 dan kemudian ditambah dengan 5, cari min dan sisihan piawai yang baharu.", qEN:"A data set has a mean of 14 and a standard deviation of 3.2. If each data value is multiplied by 2 and then added by 5, find the new mean and new standard deviation.", options:[
    {bm:"Min = 33, Sisihan piawai = 6.4", en:"Mean = 33, Standard deviation = 6.4"},
    {bm:"Min = 33, Sisihan piawai = 11.4", en:"Mean = 33, Standard deviation = 11.4"},
    {bm:"Min = 28, Sisihan piawai = 6.4", en:"Mean = 28, Standard deviation = 6.4"},
    {bm:"Min = 33, Sisihan piawai = 3.2", en:"Mean = 33, Standard deviation = 3.2"}
  ], correct:0, steps:[{text:"Min baharu $= 2(14) + 5 = 33$",type:"K1"},{text:"Sisihan piawai baharu $= 2 \\times 3.2 = 6.4$ (penambahan 5 tidak mengubah serakan)",type:"N1"}], tip:"Adding a constant changes the mean, but DOES NOT affect standard deviation." },
  { id:23, qBM:"Sebuah kotak mengandungi 5 biji guli merah dan 7 biji guli biru. Dua biji guli dipilih secara rawak satu demi satu tanpa pemulangan. Cari kebarangkalian bahawa kedua-dua guli yang dipilih berlainan warna.", qEN:"A box contains 5 red marbles and 7 blue marbles. Two marbles are selected at random one after another without replacement. Find the probability that both marbles selected are of different colours.", options:[{bm:"$\\frac{35}{144}$", en:""},{bm:"$\\frac{35}{72}$", en:""},{bm:"$\\frac{35}{66}$", en:""},{bm:"$\\frac{31}{66}$", en:""}], correct:2, steps:[{text:"$P(MB) + P(BM) = \\left(\\frac{5}{12} \\times \\frac{7}{11}\\right) + \\left(\\frac{7}{12} \\times \\frac{5}{11}\\right)$",type:"K1"},{text:"$= \\frac{35}{132} + \\frac{35}{132} = \\frac{70}{132} = \\frac{35}{66}$",type:"N1"}], tip:"Denominator becomes 11 on the second draw without replacement." },
  { id:24, qBM:"Pendapatan aktif Encik Chong ialah RM4,500 dan pendapatan pasifnya ialah RM600. Perbelanjaan tetap beliau ialah RM2,200 manakala perbelanjaan tidak tetap ialah RM1,800. Hitung aliran tunai bulanan Encik Chong.", qEN:"Encik Chong's active income is RM4,500 and his passive income is RM600. His fixed expenses are RM2,200 while variable expenses are RM1,800. Calculate Encik Chong's monthly cash flow.", options:[
    {bm:"+RM1,100 (Aliran tunai positif)", en:"+RM1,100 (Positive cash flow)"},
    {bm:"+RM500 (Aliran tunai positif)", en:"+RM500 (Positive cash flow)"},
    {bm:"-RM500 (Aliran tunai negatif)", en:"-RM500 (Negative cash flow)"},
    {bm:"+RM1,500 (Aliran tunai positif)", en:"+RM1,500 (Positive cash flow)"}
  ], correct:0, steps:[{text:"Jumlah pendapatan $= 4500 + 600 = 5100$, Jumlah perbelanjaan $= 2200 + 1800 = 4000$",type:"K1"},{text:"Aliran tunai $= 5100 - 4000 = +\\text{RM}1,100$",type:"N1"}], tip:"Cash Flow = Total Income - Total Expenses." },
  { id:25, qBM:"Diberi bahawa $y$ berubah secara langsung dengan kuasa dua $x$ dan secara songsang dengan punca kuasa dua $z$. Diberi $y = 12$ apabila $x = 2$ dan $z = 9$. Ungkapkan $y$ dalam sebutan $x$ dan $z$.", qEN:"Given that $y$ varies directly as the square of $x$ and inversely as the square root of $z$. Given $y = 12$ when $x = 2$ and $z = 9$. Express $y$ in terms of $x$ and $z$.", options:[{bm:"$y = \\frac{9x^2}{\\sqrt{z}}$", en:""},{bm:"$y = \\frac{3x^2}{\\sqrt{z}}$", en:""},{bm:"$y = \\frac{36x^2}{\\sqrt{z}}$", en:""},{bm:"$y = \\frac{6x^2}{\\sqrt{z}}$", en:""}], correct:0, steps:[{text:"$y = \\frac{k x^2}{\\sqrt{z}} \\implies 12 = \\frac{k(2^2)}{\\sqrt{9}} \\implies 12 = \\frac{4k}{3} \\implies k = 9$",type:"K1"},{text:"$y = \\frac{9x^2}{\\sqrt{z}}$",type:"N1"}], tip:"Always substitute given values to solve for the constant $k$ first." },
  { id:26, qBM:"Jisim silinder, $M$, berubah secara langsung dengan tinggi silinder, $h$, dan kuasa dua jejari, $r$. Jika tinggi bertambah sebanyak $20\\%$ dan jejari berkurang sebanyak $10\\%$, tentukan peratus perubahan jisim silinder itu.", qEN:"The mass of a cylinder, $M$, varies directly as its height, $h$, and the square of its radius, $r$. If the height increases by $20\\%$ and the radius decreases by $10\\%$, determine the percentage change in the cylinder's mass.", options:[
    {bm:"Berkurang 2.8%", en:"Decreases by 2.8%"},
    {bm:"Meningkat 2.8%", en:"Increases by 2.8%"},
    {bm:"Berkurang 8.0%", en:"Decreases by 8.0%"},
    {bm:"Meningkat 8.0%", en:"Increases by 8.0%"}
  ], correct:0, steps:[{text:"$M_{\\text{baru}} = (1.20 h) \\times (0.90 r)^2 = 1.20 \\times 0.81 \\times h r^2 = 0.972 M$",type:"K1"},{text:"Perubahan $= (0.972 - 1) \\times 100\\% = -2.8\\%$ (Berkurang $2.8\\%$)",type:"N1"}], tip:"Square the $0.90$ factor for the radius: $(0.90)^2 = 0.81$." },
  { id:27, qBM:"Diberi matriks $P = \\begin{pmatrix} 3 & -2 \\\\ 1 & 4 \\end{pmatrix}$ dan matriks $Q = \\begin{pmatrix} 2 \\\\ -5 \\end{pmatrix}$. Hitung $PQ$.", qEN:"Given matrix $P = \\begin{pmatrix} 3 & -2 \\\\ 1 & 4 \\end{pmatrix}$ and matrix $Q = \\begin{pmatrix} 2 \\\\ -5 \\end{pmatrix}$. Calculate $PQ$.", options:[{bm:"$\\begin{pmatrix} 16 \\\\ -18 \\end{pmatrix}$", en:""},{bm:"$\\begin{pmatrix} -4 \\\\ -18 \\end{pmatrix}$", en:""},{bm:"$\\begin{pmatrix} 16 & -18 \\end{pmatrix}$", en:""},{bm:"$\\begin{pmatrix} 6 & 10 \\\\ 2 & -20 \\end{pmatrix}$", en:""}], correct:0, steps:[{text:"$PQ = \\begin{pmatrix} 3(2) + (-2)(-5) \\\\ 1(2) + 4(-5) \\end{pmatrix} = \\begin{pmatrix} 6 + 10 \\\\ 2 - 20 \\end{pmatrix}$",type:"K1"},{text:"$= \\begin{pmatrix} 16 \\\\ -18 \\end{pmatrix}$",type:"N1"}], tip:"Matrix multiplication dimension: $(2 \\times 2) \\times (2 \\times 1) = (2 \\times 1)$." },
  { id:28, qBM:"Diberi matriks $M = \\begin{pmatrix} 2x & 4 \\\\ 3 & x - 1 \\end{pmatrix}$ tidak mempunyai songsangan. Cari nilai-nilai yang mungkin bagi $x$.", qEN:"Given that matrix $M = \\begin{pmatrix} 2x & 4 \\\\ 3 & x - 1 \\end{pmatrix}$ does not have an inverse. Find the possible values of $x$.", options:[{bm:"$x = 3, x = -2$", en:""},{bm:"$x = -3, x = 2$", en:""},{bm:"$x = 4, x = -3$", en:""},{bm:"$x = 6, x = -1$", en:""}], correct:0, steps:[{text:"$|M| = 0 \\implies 2x(x - 1) - (4)(3) = 0 \\implies 2x^2 - 2x - 12 = 0$",type:"K1"},{text:"$x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0 \\implies x = 3, x = -2$",type:"N1"}], tip:"Matrix has no inverse when its determinant $ad - bc = 0$." },
  { id:29, qBM:"Diberi $\\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 10 \\\\ 12 \\end{pmatrix}$. Cari nilai $x$ dan nilai $y$.", qEN:"Given $\\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 10 \\\\ 12 \\end{pmatrix}$. Find the value of $x$ and of $y$.", options:[{bm:"$x = 3, y = 2$", en:""},{bm:"$x = 2, y = 3$", en:""},{bm:"$x = 4, y = 1$", en:""},{bm:"$x = 1, y = -6$", en:""}], correct:0, steps:[{text:"$4x - y = 10$ dan $2x + 3y = 12 \\implies y = 4x - 10$",type:"K1"},{text:"$2x + 3(4x - 10) = 12 \\implies 14x = 42 \\implies x = 3, y = 2$",type:"N1"}], tip:"Can be solved using inverse matrix or simultaneous substitution." },
  { id:30, qBM:"Puan Lily ingin membeli polisi insurans hayat bernilai RM250,000 dengan kadar premium tahunan RM2.45 bagi setiap RM1,000 nilai muka. Beliau turut menambah rider penyakit kritikal bernilai RM100,000 dengan kadar RM1.80 bagi setiap RM1,000. Hitung jumlah premium tahunan beliau.", qEN:"Puan Lily wants to buy a life insurance policy worth RM250,000 with an annual premium rate of RM2.45 per RM1,000 face value. She also adds a critical illness rider worth RM100,000 with a rate of RM1.80 per RM1,000. Calculate her total annual premium.", options:[{bm:"RM612.50", en:""},{bm:"RM792.50", en:""},{bm:"RM850.00", en:""},{bm:"RM967.50", en:""}], correct:1, steps:[{text:"Insurans asas: $\\frac{250000}{1000} \\times 2.45 = 612.50$; Rider: $\\frac{100000}{1000} \\times 1.80 = 180.00$",type:"K1"},{text:"Jumlah $= 612.50 + 180.00 = \\text{RM}792.50$",type:"N1"}], tip:"Add the basic life premium and the rider premium." },
  { id:31, qBM:"Encik Kumar mempunyai polisi insurans perubatan dengan peruntukan deduktibel sebanyak RM500 dan fasal penyertaan ko-insurans 80/20. Jika kos rawatan hospital beliau ialah RM12,500, hitung jumlah kos yang perlu ditanggung sendiri oleh Encik Kumar.", qEN:"Encik Kumar has a medical insurance policy with a deductible provision of RM500 and an 80/20 co-insurance clause. If his hospital treatment cost is RM12,500, calculate the total cost borne by Encik Kumar himself.", options:[{bm:"RM2,400", en:""},{bm:"RM2,900", en:""},{bm:"RM9,600", en:""},{bm:"RM10,100", en:""}], correct:1, steps:[{text:"Baki selepas deduktibel $= 12500 - 500 = 12000$; Bahagian ko-insurans 20% $= 0.20 \\times 12000 = 2400$",type:"K1"},{text:"Jumlah ditanggung sendiri $= 500 + 2400 = \\text{RM}2,900$",type:"N1"}], tip:"Policyholder pays Deductible + Co-insurance share." },
  { id:32, qBM:"Nilai sewa tahunan bagi rumah Encik Halim dianggarkan RM18,000 dan kadar cukai pintu ialah $4\\%$. Hitung jumlah cukai pintu yang perlu dibayar bagi setiap setengah tahun.", qEN:"The annual rental value of Encik Halim's house is estimated at RM18,000 and the property assessment tax rate is $4\\%$. Calculate the assessment tax payable for each half-year.", options:[{bm:"RM180", en:""},{bm:"RM360", en:""},{bm:"RM720", en:""},{bm:"RM1,440", en:""}], correct:1, steps:[{text:"Cukai tahunan $= 0.04 \\times 18000 = \\text{RM}720$",type:"K1"},{text:"Cukai setengah tahun $= \\frac{720}{2} = \\text{RM}360$",type:"N1"}], tip:"Divide annual assessment tax by 2 for each half-year payment." },
  { id:33, qBM:"Pendapatan tahunan Puan Aina ialah RM68,000. Beliau telah menderma RM1,500 kepada badan kebajikan yang diluluskan dan jumlah pelepasan cukai yang dituntut ialah RM16,500. Diberi jadual kadar cukai: RM35,000 pertama dikenakan RM600 dan kadar seterusnya ialah $8\\%$. Hitung cukai pendapatan yang perlu dibayar oleh Puan Aina.", qEN:"Puan Aina's annual income is RM68,000. She donated RM1,500 to an approved charity and claimed a total tax relief of RM16,500. Given the tax schedule: the first RM35,000 is taxed at RM600 and the subsequent rate is $8\\%$. Calculate the income tax payable by Puan Aina.", options:[{bm:"RM1,600", en:""},{bm:"RM1,800", en:""},{bm:"RM2,100", en:""},{bm:"RM2,640", en:""}], correct:1, steps:[{text:"Pendapatan bercukai $= 68000 - 1500 - 16500 = 50000$",type:"P1"},{text:"Cukai $= 600 + 0.08(50000 - 35000) = 600 + 1200 = \\text{RM}1,800$",type:"N1"}], tip:"Chargeable Income = Total Income - Tax Deductions - Tax Reliefs." },
  { id:34, svg:"p1_q34", qBM:"Rajah di bawah menunjukkan pembesaran segi tiga $ABC$ kepada segi tiga $A'B'C'$ dengan pusat $P(2, 3)$. Diberi panjang $AB = 6\\text{ cm}$ dan $A'B' = 15\\text{ cm}$. Tentukan faktor skala pembesaran itu.", qEN:"The diagram below shows the enlargement of triangle $ABC$ to triangle $A'B'C'$ with centre $P(2, 3)$. Given the length of $AB = 6\\text{ cm}$ and $A'B' = 15\\text{ cm}$. Determine the scale factor of the enlargement.", options:[{bm:"$\\frac{2}{5}$", en:""},{bm:"$\\frac{5}{2}$", en:""},{bm:"$-\\frac{5}{2}$", en:""},{bm:"$\\frac{3}{5}$", en:""}], correct:1, steps:[{text:"$k = \\frac{\\text{Panjang sisi imej}}{\\text{Panjang sisi objek}} = \\frac{15}{6} = \\frac{5}{2}$",type:"N1"}], tip:"Scale factor $k = \\frac{\\text{Image}}{\\text{Object}}$." },
  { id:35, svg:"p1_q35", qBM:"Rajah di bawah menunjukkan bentuk $P$ dipetakan kepada bentuk $Q$ di bawah suatu pembesaran dengan faktor skala $k = 3$. Diberi luas bentuk $P$ ialah $24\\text{ cm}^2$. Hitung luas bentuk $Q$.", qEN:"The diagram below shows shape $P$ mapped onto shape $Q$ under an enlargement with scale factor $k = 3$. Given that the area of shape $P$ is $24\\text{ cm}^2$. Calculate the area of shape $Q$.", options:[{bm:"72", en:""},{bm:"144", en:""},{bm:"216", en:""},{bm:"240", en:""}], correct:2, steps:[{text:"$\\text{Luas imej} = k^2 \\times \\text{Luas objek} = 3^2 \\times 24 = 9 \\times 24 = 216\\text{ cm}^2$",type:"N1"}], tip:"Area of Image $= k^2 \\times \\text{Area of Object}$." },
  { id:36, qBM:"Diberi $\\tan \\theta = -0.75$ dan $\\theta$ terletak dalam Sukuan II ($90^\\circ < \\theta < 180^\\circ$). Cari nilai bagi $\\cos \\theta$.", qEN:"Given that $\\tan \\theta = -0.75$ and $\\theta$ lies in Quadrant II ($90^\\circ < \\theta < 180^\\circ$). Find the value of $\\cos \\theta$.", options:[{bm:"0.6", en:""},{bm:"-0.6", en:""},{bm:"0.8", en:""},{bm:"-0.8", en:""}], correct:3, steps:[{text:"$\\tan \\theta = -\\frac{3}{4} \\implies \\text{tentang}=3, \\text{sebelah}=4, \\text{hipotenus}=5$",type:"K1"},{text:"Dalam Sukuan II, $\\cos \\theta$ bernilai negatif $\\implies \\cos \\theta = -\\frac{4}{5} = -0.8$",type:"N1"}], tip:"Cosine is negative in Quadrant II (ASTC rule: Sine is positive)." },
  { id:37, svg:"p1_q37", qBM:"Rajah di bawah menunjukkan graf fungsi trigonometri $y = a\\cos(bx) + c$ untuk $0^\\circ \\le x \\le 360^\\circ$. Cari nilai $a$, nilai $b$ dan nilai $c$.", qEN:"The diagram below shows the graph of a trigonometric function $y = a\\cos(bx) + c$ for $0^\\circ \\le x \\le 360^\\circ$. Find the values of $a$, $b$ and $c$.", options:[{bm:"$a = 2, b = 1, c = 3$", en:""},{bm:"$a = 3, b = 1, c = 2$", en:""},{bm:"$a = 2, b = 2, c = 3$", en:""},{bm:"$a = 4, b = 1, c = 1$", en:""}], correct:0, steps:[{text:"Amplitud $a = \\frac{5 - 1}{2} = 2$; Garis tengah $c = \\frac{5 + 1}{2} = 3$; Kitaran dalam $360^\\circ$ ialah 1 kitaran $\\implies b = 1$",type:"N1"}], tip:"$a = \\frac{\\text{Max} - \\text{Min}}{2}$, $c = \\frac{\\text{Max} + \\text{Min}}{2}$." },
  { id:38, qBM:"Jadual kekerapan menunjukkan masa ulangkaji (jam) bagi sekumpulan murid: 11-20 (4), 21-30 (9), 31-40 (18), 41-50 (12), 51-60 (7). Tentukan kelas mod dan titik tengah bagi kelas mod itu.", qEN:"The frequency table shows the revision time (hours) of a group of students: 11-20 (4), 21-30 (9), 31-40 (18), 41-50 (12), 51-60 (7). Determine the modal class and its midpoint.", options:[{bm:"21-30, 25.5", en:""},{bm:"31-40, 35.5", en:""},{bm:"41-50, 45.5", en:""},{bm:"31-40, 35.0", en:""}], correct:1, steps:[{text:"Kekerapan tertinggi ialah 18 pada selang 31-40 $\\implies$ Kelas mod = 31-40",type:"P1"},{text:"Titik tengah $= \\frac{31 + 40}{2} = 35.5$",type:"N1"}], tip:"Modal class is the class interval with the highest frequency." },
  { id:39, svg:"p1_q39", qBM:"Rajah di bawah menunjukkan sebuah ogif bagi masa menunggu pelanggan di sebuah klinik. Diberi $Q_1 = 42\\text{ minit}$ dan $Q_3 = 68\\text{ minit}$. Hitung julat antara kuartil bagi data tersebut.", qEN:"The diagram below shows an ogive of customer waiting times at a clinic. Given $Q_1 = 42\\text{ minutes}$ and $Q_3 = 68\\text{ minutes}$. Calculate the interquartile range of the data.", options:[{bm:"20", en:""},{bm:"26", en:""},{bm:"40", en:""},{bm:"48", en:""}], correct:1, steps:[{text:"$\\text{Julat antara kuartil} = Q_3 - Q_1 = 68 - 42 = 26\\text{ minit}$",type:"N1"}], tip:"$\text{IQR} = Q_3 - Q_1$ directly from graph." },
  { id:40, qBM:"Antara berikut, yang manakah menunjukkan urutan yang betul bagi peringkat-peringkat dalam kitaran pemodelan matematik?", qEN:"Which of the following shows the correct sequence of stages in the mathematical modeling cycle?", options:[
    {bm:"Mengenal pasti masalah $\\rightarrow$ Membuat andaian $\\rightarrow$ Mengaplikasi matematik $\\rightarrow$ Menentusahkan penyelesaian $\\rightarrow$ Memurnikan model $\\rightarrow$ Melaporkan dapatan", en:"Identifying the problem $\\rightarrow$ Making assumptions $\\rightarrow$ Applying mathematics $\\rightarrow$ Verifying solutions $\\rightarrow$ Refining the model $\\rightarrow$ Reporting findings"},
    {bm:"Membuat andaian $\\rightarrow$ Mengenal pasti masalah $\\rightarrow$ Mengaplikasi matematik $\\rightarrow$ Melaporkan dapatan", en:"Making assumptions $\\rightarrow$ Identifying the problem $\\rightarrow$ Applying mathematics $\\rightarrow$ Reporting findings"},
    {bm:"Mengenal pasti masalah $\\rightarrow$ Melaporkan dapatan $\\rightarrow$ Memurnikan model $\\rightarrow$ Membuat andaian", en:"Identifying the problem $\\rightarrow$ Reporting findings $\\rightarrow$ Refining the model $\\rightarrow$ Making assumptions"},
    {bm:"Mengenal pasti masalah $\\rightarrow$ Mengaplikasi matematik $\\rightarrow$ Membuat andaian $\\rightarrow$ Melaporkan dapatan", en:"Identifying the problem $\\rightarrow$ Applying mathematics $\\rightarrow$ Making assumptions $\\rightarrow$ Reporting findings"}
  ], correct:0, steps:[{text:"Urutan standard 6 langkah KSSM: Mengenal pasti $\\rightarrow$ Andaian $\\rightarrow$ Aplikasi $\\rightarrow$ Tentusah $\\rightarrow$ Murni $\\rightarrow$ Lapor",type:"P1"},{text:"Jawapan: A",type:"N1"}], tip:"Official DSKP 6-stage mathematical modeling sequence." }
];

// 3. Paper 2 Dataset with Structured Parts and Explicit Right-Aligned Marks
const P2_DATA = [
  {
    id: 1, section: "Bahagian A", totalMarks: "[3 markah / 3 marks]",
    introBM: "", introEN: "",
    parts: [
      {
        label: "(a)",
        qBM: "Diberi $110101_2 + p_8 = 324_5$. Hitung nilai $p$.",
        qEN: "Given $110101_2 + p_8 = 324_5$. Calculate the value of $p$.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)",
        qBM: "Nyatakan nilai tempat dan nilai digit bagi digit 4 dalam nombor $2431_5$ dalam asas sepuluh.",
        qEN: "State the place value and digit value of digit 4 in the number $2431_5$ in base ten.",
        marks: "[1 markah / 1 mark]"
      }
    ],
    steps: [
      { text: "(a) Tukar ke asas 10: $110101_2 = 53_{10}$, $324_5 = (3 \\times 25) + (2 \\times 5) + 4 = 89_{10}$", type: "K1" },
      { text: "$p_8 = 89 - 53 = 36_{10} \\implies 36_{10} = (4 \\times 8) + 4 = 44_8 \\implies p = 44$", type: "N1" },
      { text: "(b) Nilai digit $4 = 4 \\times 5^2 = 100$", type: "N1" }
    ],
    tip: "Marker's Tip: State $p = 44$ (the digits in base 8), not $44_8$ as the variable value."
  },
  {
    id: 2, section: "Bahagian A", totalMarks: "[3 markah / 3 marks]",
    introBM: "", introEN: "",
    parts: [
      {
        label: "(a)",
        qBM: "Tentukan nilai kebenaran bagi pernyataan majmuk berikut: '12 ialah gandaan 3 dan $(-4)^2 = -16$'.",
        qEN: "Determine the truth value of the following compound statement: '12 is a multiple of 3 and $(-4)^2 = -16$'.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)",
        qBM: "Tulis Premis 2 untuk melengkapkan hujah deduktif berikut:<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>Premis 1:</b> Semua poligon sekata dengan $n$ sisi mempunyai $n$ paksi simetri.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>Premis 2:</b> .....................................................................................<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>Kesimpulan:</b> Sebuah heptagon sekata mempunyai 7 paksi simetri.",
        qEN: "Write Premise 2 to complete the following deductive argument:<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>Premise 1:</b> All regular polygons with $n$ sides have $n$ axes of symmetry.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>Premise 2:</b> .....................................................................................<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>Conclusion:</b> A regular heptagon has 7 axes of symmetry.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(c)",
        qBM: "Buat satu kesimpulan induktif yang kuat bagi pola nombor berikut:<br>&nbsp;&nbsp;&nbsp;&nbsp;$3 = 2(1)^2 + 1$<br>&nbsp;&nbsp;&nbsp;&nbsp;$9 = 2(2)^2 + 1$<br>&nbsp;&nbsp;&nbsp;&nbsp;$19 = 2(3)^2 + 1$<br>&nbsp;&nbsp;&nbsp;&nbsp;$\\dots$",
        qEN: "Make a strong inductive conclusion for the following sequence of numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;$3 = 2(1)^2 + 1$<br>&nbsp;&nbsp;&nbsp;&nbsp;$9 = 2(2)^2 + 1$<br>&nbsp;&nbsp;&nbsp;&nbsp;$19 = 2(3)^2 + 1$<br>&nbsp;&nbsp;&nbsp;&nbsp;$\\dots$",
        marks: "[1 markah / 1 mark]"
      }
    ],
    steps: [
      { text: "(a) Palsu / False (kerana $(-4)^2 = +16$, bukan $-16$)", type: "N1" },
      { text: "(b) Premis 2: Sebuah heptagon sekata ialah poligon sekata dengan 7 sisi / A regular heptagon is a regular polygon with 7 sides.", type: "N1" },
      { text: "(c) $2n^2 + 1, \\quad n = 1, 2, 3, \\dots$", type: "N1" }
    ],
    tip: "Marker's Tip: For inductive conclusion, always state the domain $n = 1, 2, 3, \\dots$ to receive the full mark."
  },
  {
    id: 3, section: "Bahagian A", totalMarks: "[3 markah / 3 marks]", svg: "p2_q3",
    introBM: "Rajah di bawah menunjukkan gambar rajah Venn dengan set semesta $\\xi = A \\cup B \\cup C$. Bilangan unsur bagi setiap kawasan ditunjukkan di dalam rajah.",
    introEN: "The diagram below shows a Venn diagram with universal set $\\xi = A \\cup B \\cup C$. The number of elements in each region is shown in the diagram.",
    parts: [
      {
        label: "(a)",
        qBM: "Cari $n(A \\cap B')$.",
        qEN: "Find $n(A \\cap B')$.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)",
        qBM: "Cari $n[(A \\cup B) \\cap C']$.",
        qEN: "Find $n[(A \\cup B) \\cap C']$.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a) Kawasan di dalam $A$ tetapi di luar $B$: $3 + 2 = 5$", type: "N1" },
      { text: "(b) $(A \\cup B) \\cap C' = 3 + 5$", type: "K1" },
      { text: "$= 8$", type: "N1" }
    ],
    tip: "Marker's Tip: Region $(A \\cup B) \\cap C'$ refers to elements inside $A$ or $B$ that are strictly outside circle $C$."
  },
  {
    id: 4, section: "Bahagian A", totalMarks: "[4 markah / 4 marks]",
    introBM: "Sebuah kedai kek membakar $x$ biji kek coklat dan $y$ biji kek keju setiap hari. Penghasilan kek tersebut memenuhi kekangan berikut:<br>I. Jumlah bilangan kek yang dibakar tidak melebihi 80 biji.<br>II. Bilangan kek keju adalah sekurang-kurangnya separuh daripada bilangan kek coklat.<br>III. Kos membuat sebiji kek coklat ialah RM20 dan sebiji kek keju ialah RM30. Jumlah kos harian minimum ialah RM1,200.",
    introEN: "A bakery bakes $x$ chocolate cakes and $y$ cheese cakes each day. The cake production satisfies the following constraints:<br>I. The total number of cakes baked does not exceed 80.<br>II. The number of cheese cakes is at least half the number of chocolate cakes.<br>III. The cost of making a chocolate cake is RM20 and a cheese cake is RM30. The minimum daily cost is RM1,200.",
    parts: [
      {
        label: "",
        qBM: "Tulis tiga ketaksamaan linear selain $x \\ge 0$ dan $y \\ge 0$ yang memuaskan semua kekangan di atas.",
        qEN: "Write three linear inequalities other than $x \\ge 0$ and $y \\ge 0$ that satisfy all the above constraints.",
        marks: "[4 markah / 4 marks]"
      }
    ],
    steps: [
      { text: "Kekangan I: $x + y \\le 80$", type: "K1" },
      { text: "Kekangan II: $y \\ge \\frac{1}{2}x$ atau $2y \\ge x$", type: "K1" },
      { text: "Kekangan III: $20x + 30y \\ge 1200$ atau $2x + 3y \\ge 120$", type: "K1" },
      { text: "Ketiga-tiga ketaksamaan ditulis dengan tepat tanpa ralat simbol.", type: "N1" }
    ],
    tip: "Marker's Tip: 'Tidak melebihi' translates to $\\le$, while 'sekurang-kurangnya' translates to $\\ge$."
  },
  {
    id: 5, section: "Bahagian A", totalMarks: "[4 markah / 4 marks]", svg: "p2_q5",
    introBM: "Rajah di bawah menunjukkan garis lurus $PQ$ yang selari dengan garis lurus $RS$ pada satah Cartes. Persamaan garis lurus $PQ$ ialah $2y - 4x = 7$. Garis lurus $RS$ melalui titik $R(3, 2)$.",
    introEN: "The diagram below shows a straight line $PQ$ which is parallel to straight line $RS$ on a Cartesian plane. The equation of straight line $PQ$ is $2y - 4x = 7$. The straight line $RS$ passes through point $R(3, 2)$.",
    parts: [
      {
        label: "(a)",
        qBM: "Cari kecerunan bagi garis lurus $RS$.",
        qEN: "Find the gradient of straight line $RS$.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)",
        qBM: "Cari persamaan garis lurus $RS$.",
        qEN: "Find the equation of straight line $RS$.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(c)",
        qBM: "Seterusnya, cari pintasan-$x$ bagi garis lurus $RS$.",
        qEN: "Hence, find the $x$-intercept of straight line $RS$.",
        marks: "[1 markah / 1 mark]"
      }
    ],
    steps: [
      { text: "(a) Dari $2y - 4x = 7 \\implies y = 2x + 3.5 \\implies m_{PQ} = 2 \\implies m_{RS} = 2$", type: "N1" },
      { text: "(b) $y - y_1 = m(x - x_1) \\implies y - 2 = 2(x - 3) \\implies y - 2 = 2x - 6$", type: "K1" },
      { text: "$y = 2x - 4$", type: "N1" },
      { text: "(c) Pada pintasan-$x$, $y = 0 \\implies 0 = 2x - 4 \\implies x = 2$", type: "N1" }
    ],
    tip: "Marker's Tip: For $x$-intercept, substitute $y = 0$ into the linear equation."
  },
  {
    id: 6, section: "Bahagian A", totalMarks: "[4 markah / 4 marks]", svg: "p2_q6",
    introBM: "Rajah di bawah menunjukkan graf laju-masa bagi gerakan suatu zarah dalam tempoh 25 saat.",
    introEN: "The diagram below shows the speed-time graph for the motion of a particle for a period of 25 seconds.",
    parts: [
      {
        label: "(a)",
        qBM: "Nyatakan tempoh masa, dalam saat, zarah itu bergerak dengan laju seragam.",
        qEN: "State the duration of time, in seconds, the particle moves with uniform speed.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)",
        qBM: "Hitung kadar perubahan laju, dalam $\\text{m s}^{-2}$, bagi zarah itu dalam 9 saat yang terakhir.",
        qEN: "Calculate the rate of change of speed, in $\\text{m s}^{-2}$, of the particle in the last 9 seconds.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(c)",
        qBM: "Hitung jumlah jarak, dalam meter, yang dilalui oleh zarah itu dalam tempoh 25 saat.",
        qEN: "Calculate the total distance, in metres, travelled by the particle in the 25 seconds.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a) Tempoh laju seragam $= 10\\text{ s}$ (atau $9\\text{ s}$ dari $t=16$ ke $t=25$)", type: "N1" },
      { text: "(b) Kadar perubahan laju $= \\frac{12 - 12}{25 - 16} = 0\\text{ m s}^{-2}$", type: "N1" },
      { text: "(c) Jumlah jarak $= (10 \\times 30) + \\frac{1}{2}(30 + 12)(6) + (9 \\times 12) = 300 + 126 + 108$", type: "K1" },
      { text: "$= 534\\text{ m}$", type: "N1" }
    ],
    tip: "Marker's Tip: Split the area under the graph into Rectangle 1, Trapezium, and Rectangle 2."
  },
  {
    id: 7, section: "Bahagian A", totalMarks: "[4 markah / 4 marks]",
    introBM: "Encik Amirul mempunyai polisi insurans perubatan utama dengan had tahunan RM150,000, deduktibel sebanyak RM400 dan fasal penyertaan ko-insurans 85/15. Pada suatu tahun, beliau dimasukkan ke hospital dan kos rawatan perubatannya berjumlah RM24,400.",
    introEN: "Encik Amirul has a major medical insurance policy with an annual limit of RM150,000, a deductible of RM400 and an 85/15 co-insurance participation clause. In a particular year, he was hospitalised and his medical treatment cost was RM24,400.",
    parts: [
      {
        label: "(a)",
        qBM: "Hitung kos perubatan yang ditanggung oleh syarikat insurans.",
        qEN: "Calculate the medical cost borne by the insurance company.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)",
        qBM: "Hitung jumlah kos yang perlu dibayar oleh Encik Amirul.",
        qEN: "Calculate the total cost payable by Encik Amirul.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a) Kos selepas deduktibel $= 24400 - 400 = \\text{RM}24,000$; Ditanggung insurans $= 0.85 \\times 24000$", type: "K1" },
      { text: "$= \\text{RM}20,400$", type: "N1" },
      { text: "(b) Bahagian ko-insurans Encik Amirul $= 0.15 \\times 24000 = \\text{RM}3,600$; Jumlah bayaran $= 400 + 3600$", type: "K1" },
      { text: "$= \\text{RM}4,000$", type: "N1" }
    ],
    tip: "Marker's Tip: The deductible is always deducted first before applying the 85/15 ratio."
  },
  {
    id: 8, section: "Bahagian A", totalMarks: "[5 markah / 5 marks]",
    introBM: "Diberi bahawa $W$ berubah secara langsung dengan punca kuasa dua $x$ dan secara songsang dengan kuasa dua $y$. Diberi bahawa $W = 6$ apabila $x = 16$ dan $y = 2$.",
    introEN: "Given that $W$ varies directly as the square root of $x$ and inversely as the square of $y$. Given that $W = 6$ when $x = 16$ and $y = 2$.",
    parts: [
      {
        label: "(a)",
        qBM: "Ungkapkan $W$ dalam sebutan $x$ dan $y$.",
        qEN: "Express $W$ in terms of $x$ and $y$.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)(i)",
        qBM: "Cari nilai $W$ apabila $x = 36$ dan $y = 3$.",
        qEN: "Find the value of $W$ when $x = 36$ and $y = 3$.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)(ii)",
        qBM: "Cari nilai positif bagi $y$ apabila $W = 2$ dan $x = 64$.",
        qEN: "Find the positive value of $y$ when $W = 2$ and $x = 64$.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a) $W = \\frac{k\\sqrt{x}}{y^2} \\implies 6 = \\frac{k\\sqrt{16}}{2^2} \\implies 6 = \\frac{4k}{4} \\implies k = 6$", type: "K1" },
      { text: "$W = \\frac{6\\sqrt{x}}{y^2}$", type: "N1" },
      { text: "(b)(i) $W = \\frac{6\\sqrt{36}}{3^2} = \\frac{6(6)}{9} = 4$", type: "N1" },
      { text: "(b)(ii) $2 = \\frac{6\\sqrt{64}}{y^2} \\implies 2y^2 = 6(8) = 48 \\implies y^2 = 24$", type: "K1" },
      { text: "$y = \\sqrt{24} = 4.899$ atau $2\\sqrt{6}$", type: "N1" }
    ],
    tip: "Marker's Tip: Question specifies 'positive value of $y$', so reject negative root $-\\sqrt{24}$."
  },
  {
    id: 9, section: "Bahagian A", totalMarks: "[5 markah / 5 marks]",
    introBM: "Satu set data yang mengandungi 5 nombor mempunyai min 8 dan varians 6.4.",
    introEN: "A set of data containing 5 numbers has a mean of 8 and a variance of 6.4.",
    parts: [
      {
        label: "(a)",
        qBM: "Cari nilai bagi $\\sum x$ dan $\\sum x^2$.",
        qEN: "Find the values of $\\sum x$ and $\\sum x^2$.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)(i)",
        qBM: "Jika satu nombor baharu, $k = 14$, ditambah ke dalam set data tersebut, hitung min yang baharu.",
        qEN: "If a new number, $k = 14$, is added to the data set, calculate the new mean.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)(ii)",
        qBM: "Hitung sisihan piawai yang baharu bagi set data tersebut.",
        qEN: "Calculate the new standard deviation of the data set.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a) $\\sum x = N \\bar{x} = 5 \\times 8 = 40$", type: "P1" },
      { text: "$\\sigma^2 = \\frac{\\sum x^2}{N} - \\bar{x}^2 \\implies 6.4 = \\frac{\\sum x^2}{5} - 64 \\implies \\sum x^2 = 5(70.4) = 352$", type: "N1" },
      { text: "(b)(i) $\\bar{x}_{\\text{baru}} = \\frac{40 + 14}{6} = \\frac{54}{6} = 9$", type: "N1" },
      { text: "(b)(ii) $\\sum x^2_{\\text{baru}} = 352 + 14^2 = 352 + 196 = 548$; $\\sigma = \\sqrt{\\frac{548}{6} - 9^2} = \\sqrt{91.333 - 81} = \\sqrt{10.333}$", type: "K1" },
      { text: "$= 3.21$", type: "N1" }
    ],
    tip: "Marker's Tip: The new number of observations $N$ increases from 5 to 6."
  },
  {
    id: 10, section: "Bahagian A", totalMarks: "[5 markah / 5 marks]",
    introBM: "Kotak $A$ mengandungi empat keping kad berlabel $\\{M, A, T, H\\}$ dan Kotak $B$ mengandungi tiga keping kad bernombor $\\{2, 3, 5\\}$. Sekeping kad dipilih secara rawak dari Kotak $A$ dan kemudian sekeping kad dipilih dari Kotak $B$.",
    introEN: "Box $A$ contains four cards labelled $\\{M, A, T, H\\}$ and Box $B$ contains three numbered cards $\\{2, 3, 5\\}$. A card is picked at random from Box $A$ and then a card is picked from Box $B$.",
    parts: [
      {
        label: "(a)",
        qBM: "Senaraikan ruang sampel bagi peristiwa tersebut.",
        qEN: "List the sample space for the event.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)(i)",
        qBM: "Cari kebarangkalian bahawa kad berlabel huruf konsonan dan kad bernombor perdana dipilih.",
        qEN: "Find the probability that a consonant card and a prime number card are selected.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)(ii)",
        qBM: "Cari kebarangkalian bahawa kad berlabel huruf vokal atau kad bernombor ganjil dipilih.",
        qEN: "Find the probability that a vowel card or an odd number card is selected.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a) $S = \\{(M,2),(M,3),(M,5),(A,2),(A,3),(A,5),(T,2),(T,3),(T,5),(H,2),(H,3),(H,5)\\}$, $n(S) = 12$", type: "N1" },
      { text: "(b)(i) Konsonan $\\{M,T,H\\}$, Perdana $\\{2,3,5\\} \\implies 3 \\times 3 = 9$ kesudahan $\\implies P = \\frac{9}{12} = \\frac{3}{4}$", type: "N1" },
      { text: "(b)(ii) Vokal atau Ganjil: $\\{(A,2),(A,3),(A,5),(M,3),(M,5),(T,3),(T,5),(H,3),(H,5)\\} \\implies 9$ kesudahan", type: "K1" },
      { text: "$P = \\frac{9}{12} = \\frac{3}{4}$", type: "N1" }
    ],
    tip: "Marker's Tip: List all outcomes in set notation before calculating probability."
  },
  {
    id: 11, section: "Bahagian B", totalMarks: "[9 markah / 9 marks]", svg: "p2_q11",
    introBM: "Rajah di bawah menunjukkan transformasi satah Cartes.",
    introEN: "The diagram below shows transformations on a Cartesian plane.",
    parts: [
      {
        label: "(a)(i)",
        qBM: "Transformasi $V$ ialah pantulan pada garis lurus $x = 2$. Nyatakan koordinat imej bagi titik $K(4, 1)$ di bawah transformasi $V$.",
        qEN: "Transformation $V$ is a reflection in the straight line $x = 2$. State the coordinates of the image of point $K(4, 1)$ under transformation $V$.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(a)(ii)",
        qBM: "Transformasi $U$ ialah putaran $90^\\circ$ ikut arah jam pada pusat $(1, 3)$. Nyatakan koordinat imej bagi titik $K(4, 1)$ di bawah gabungan transformasi $UV$.",
        qEN: "Transformation $U$ is a clockwise rotation of $90^\\circ$ about centre $(1, 3)$. State the coordinates of the image of point $K(4, 1)$ under combined transformation $UV$.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)(i)",
        qBM: "Rajah menunjukkan trapezium $ABCD$ yang dipetakan kepada trapezium $EFGH$ di bawah suatu pembesaran pada pusat $P(1, 1)$. Diberi $AB = 3\\text{ cm}$ dan $EF = 9\\text{ cm}$. Tentukan faktor skala pembesaran itu.",
        qEN: "Diagram shows trapezium $ABCD$ mapped onto trapezium $EFGH$ under an enlargement with centre $P(1, 1)$. Given $AB = 3\\text{ cm}$ and $EF = 9\\text{ cm}$. Determine the scale factor of enlargement.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)(ii)",
        qBM: "Diberi luas $ABCD = 14\\text{ cm}^2$. Hitung luas kawasan berlorek.",
        qEN: "Given the area of $ABCD = 14\\text{ cm}^2$. Calculate the area of the shaded region.",
        marks: "[3 markah / 3 marks]"
      },
      {
        label: "(c)",
        qBM: "Terangkan secara ringkas ciri-ciri dua bentuk yang kongruen.",
        qEN: "Briefly explain the properties of two congruent shapes.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a)(i) Jarak titik $K(4, 1)$ ke garis $x=2$ ialah 2 unit ke kanan $\\implies$ Imej $V(K) = (0, 1)$", type: "N1" },
      { text: "(a)(ii) Putaran $(0, 1)$ $90^\\circ$ ikut arah jam pada pusat $(1, 3)$: Vektor $\\begin{pmatrix} -1 \\\\ -2 \\end{pmatrix} \\rightarrow \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} = (-1, 4)$", type: "K1" },
      { text: "$UV(K) = (-1, 4)$", type: "N1" },
      { text: "(b)(i) Faktor skala $k = \\frac{EF}{AB} = \\frac{9}{3} = 3$", type: "N1" },
      { text: "(b)(ii) $\\text{Luas imej } EFGH = 3^2 \\times 14 = 9 \\times 14 = 126\\text{ cm}^2$", type: "K1" },
      { text: "$\\text{Luas kawasan berlorek} = 126 - 14 = 112\\text{ cm}^2$", type: "N1" },
      { text: "(c) Bentuk dan saiz yang serupa secara persis (semua panjang sisi sepadan dan sudut sepadan adalah sama).", type: "P2" }
    ],
    tip: "Marker's Tip: $UV$ means perform transformation $V$ first, followed by transformation $U$."
  },
  {
    id: 12, section: "Bahagian B", totalMarks: "[9 markah / 9 marks]", svg: "p2_q12",
    introBM: "Rajah di bawah menunjukkan sebuah prisma tegak dengan tapak segi empat tepat $ABCD$ di atas satah mengufuk. Permukaan $ABLKGF$ ialah keratan rentas seragam prisma tersebut. Tepi $AF$ dan $BG$ adalah tegak dengan tinggi $5\\text{ cm}$. Tepi $DL$ dan $CK$ mempunyai tinggi $3\\text{ cm}$. Satah $FG$ dan $LK$ adalah mengufuk dengan panjang $2\\text{ cm}$.",
    introEN: "The diagram below shows a right prism with rectangular base $ABCD$ on a horizontal plane. Surface $ABLKGF$ is the uniform cross-section of the prism. Edges $AF$ and $BG$ are vertical with a height of $5\\text{ cm}$. Edges $DL$ and $CK$ have a height of $3\\text{ cm}$. Planes $FG$ and $LK$ are horizontal with a length of $2\\text{ cm}$.",
    parts: [
      {
        label: "(a)",
        qBM: "Lukis dengan skala penuh dongakan objek itu pada satah mencancang yang selari dengan $AB$ sebagaimana dilihat dari arah $X$.",
        qEN: "Draw to full scale the elevation of the object on a vertical plane parallel to $AB$ as viewed from $X$.",
        marks: "[3 markah / 3 marks]"
      },
      {
        label: "(b)",
        qBM: "Lukis dengan skala penuh dongakan objek itu pada satah mencancang yang selari dengan $BC$ sebagaimana dilihat dari arah $Y$.",
        qEN: "Draw to full scale the elevation of the object on a vertical plane parallel to $BC$ as viewed from $Y$.",
        marks: "[3 markah / 3 marks]"
      },
      {
        label: "(c)",
        qBM: "Lukis dengan skala penuh pelan bagi objek itu.",
        qEN: "Draw to full scale the plan of the object.",
        marks: "[3 markah / 3 marks]"
      }
    ],
    steps: [
      { text: "(a) Dongakan Depan $X$: Bentuk poligon $ABLKGF$ dengan ukuran tepat $AB=6\\text{ cm}, AF=5\\text{ cm}, FG=2\\text{ cm}, LK=2\\text{ cm}, CK=3\\text{ cm}$", type: "K2" },
      { text: "Semua garis lurus kemas dan bersambung tepat $\\pm 0.1\\text{ cm}$", type: "N1" },
      { text: "(b) Dongakan Sisi $Y$: Segi empat tepat $8\\text{ cm} \\times 5\\text{ cm}$ dengan garis sempadan aras $3\\text{ cm}$ dilukis tepat.", type: "K2" },
      { text: "Sudut tepat $90^\\circ$ dan ukuran tepat.", type: "N1" },
      { text: "(c) Pelan: Segi empat tepat $6\\text{ cm} \\times 8\\text{ cm}$ dengan satah atas $FG$, serong, dan $LK$ dibahagikan mengikut ukuran sebenar.", type: "K2" },
      { text: "Ketepatan garisan dan skala penuh sempurna.", type: "N1" }
    ],
    tip: "Marker's Tip: Use solid thick lines for visible edges and dashed lines for hidden interior edges."
  },
  {
    id: 13, section: "Bahagian B", totalMarks: "[9 markah / 9 marks]",
    introBM: "Koperasi SMK Wawasan menjual pen dan buku nota. Kumpulan Alpha membeli 5 batang pen dan 2 buah buku nota dengan harga RM19. Kumpulan Beta membeli 3 batang pen dan 1 buah buku nota dengan harga RM11.",
    introEN: "SMK Wawasan Cooperative sells pens and notebooks. Group Alpha bought 5 pens and 2 notebooks for RM19. Group Beta bought 3 pens and 1 notebook for RM11.",
    parts: [
      {
        label: "(a)",
        qBM: "Diberi matriks $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix}$. Cari matriks songsang, $A^{-1}$.",
        qEN: "Given matrix $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix}$. Find the inverse matrix, $A^{-1}$.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)(i)",
        qBM: "Tulis persamaan linear serentak di atas dalam bentuk persamaan matriks.",
        qEN: "Write the simultaneous linear equations in matrix form.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)(ii)",
        qBM: "Seterusnya, dengan menggunakan kaedah matriks, hitung harga, dalam RM, sebatang pen dan sebuah buku nota.",
        qEN: "Hence, using the matrix method, calculate the price, in RM, of a pen and a notebook.",
        marks: "[4 markah / 4 marks]"
      },
      {
        label: "(b)(iii)",
        qBM: "Hitung jumlah harga bagi 10 batang pen dan 4 buah buku nota.",
        qEN: "Calculate the total price of 10 pens and 4 notebooks.",
        marks: "[1 markah / 1 mark]"
      }
    ],
    steps: [
      { text: "(a) $|A| = (5)(1) - (2)(3) = 5 - 6 = -1 \\implies A^{-1} = \\frac{1}{-1}\\begin{pmatrix} 1 & -2 \\\\ -3 & 5 \\end{pmatrix} = \\begin{pmatrix} -1 & 2 \\\\ 3 & -5 \\end{pmatrix}$", type: "N1" },
      { text: "(b)(i) $\\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 19 \\\\ 11 \\end{pmatrix}$", type: "P2" },
      { text: "(b)(ii) $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -1 & 2 \\\\ 3 & -5 \\end{pmatrix} \\begin{pmatrix} 19 \\\\ 11 \\end{pmatrix} = \\begin{pmatrix} -1(19) + 2(11) \\\\ 3(19) - 5(11) \\end{pmatrix}$", type: "K1" },
      { text: "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix} \\implies \\text{Harga sebatang pen} = \\text{RM}3.00, \\; \\text{Harga sebuah buku nota} = \\text{RM}2.00$", type: "N2" },
      { text: "(b)(iii) Jumlah kos $= 10(3) + 4(2) = 30 + 8 = \\text{RM}38.00$", type: "N1" }
    ],
    tip: "Marker's Tip: You MUST show the matrix multiplication explicitly to gain the method mark K1."
  },
  {
    id: 14, section: "Bahagian B", totalMarks: "[9 markah / 9 marks]",
    introBM: "Jadual kekerapan di bawah menunjukkan skor ujian kecergasan bagi 60 orang calon:<br><table border='1' style='border-collapse:collapse; margin:8px 0; text-align:center; width:100%; max-width:480px;'><tr><th>Skor / Score</th><th>Kekerapan / Frequency</th></tr><tr><td>21 - 30</td><td>4</td></tr><tr><td>31 - 40</td><td>8</td></tr><tr><td>41 - 50</td><td>14</td></tr><tr><td>51 - 60</td><td>18</td></tr><tr><td>61 - 70</td><td>10</td></tr><tr><td>71 - 80</td><td>6</td></tr></table>",
    introEN: "The frequency table below shows fitness test scores of 60 candidates:<br><table border='1' style='border-collapse:collapse; margin:8px 0; text-align:center; width:100%; max-width:480px;'><tr><th>Skor / Score</th><th>Kekerapan / Frequency</th></tr><tr><td>21 - 30</td><td>4</td></tr><tr><td>31 - 40</td><td>8</td></tr><tr><td>41 - 50</td><td>14</td></tr><tr><td>51 - 60</td><td>18</td></tr><tr><td>61 - 70</td><td>10</td></tr><tr><td>71 - 80</td><td>6</td></tr></table>",
    parts: [
      {
        label: "(a)",
        qBM: "Lengkapkan sempadan atas dan kekerapan longgokan bagi data tersebut.",
        qEN: "Complete the upper boundary and cumulative frequency table for the data.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)",
        qBM: "Untuk ceraian soalan ini, gunakan kertas graf. Dengan menggunakan skala $2\\text{ cm}$ kepada 10 unit pada paksi mengufuk dan $2\\text{ cm}$ kepada 10 orang calon pada paksi mencancang, lukis sebuah ogif bagi data tersebut.",
        qEN: "For this part of the question, use graph paper. Using a scale of $2\\text{ cm}$ to 10 units on the horizontal axis and $2\\text{ cm}$ to 10 candidates on the vertical axis, draw an ogive for the data.",
        marks: "[4 markah / 4 marks]"
      },
      {
        label: "(c)(i)",
        qBM: "Daripada ogif yang dilukis di (b), cari median.",
        qEN: "From the ogive drawn in (b), find the median.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(c)(ii)",
        qBM: "Daripada ogif yang dilukis di (b), cari julat antara kuartil.",
        qEN: "From the ogive drawn in (b), find the interquartile range.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(d)",
        qBM: "Calon yang mendapat skor 65 dan ke atas layak menyertai peringkat akhir. Hitung peratusan calon yang layak.",
        qEN: "Candidates who score 65 and above qualify for the final stage. Calculate the percentage of candidates who qualify.",
        marks: "[1 markah / 1 mark]"
      }
    ],
    steps: [
      { text: "(a) Sempadan atas: 30.5, 40.5, 50.5, 60.5, 70.5, 80.5; Kekerapan longgokan: 4, 12, 26, 44, 54, 60", type: "P1" },
      { text: "(b) Skala seragam pada kedua-dua paksi dan 7 titik diplot dengan tepat bermula pada $(20.5, 0)$", type: "K2" },
      { text: "Lengkung ogif licin dan berterusan melalui semua titik.", type: "N1" },
      { text: "(c)(i) Median (pada $N/2 = 30$) $\\approx 52.5 \\pm 1.0$", type: "N1" },
      { text: "(c)(ii) $Q_1$ (pada $15$) $\\approx 42.5$, $Q_3$ (pada $45$) $\\approx 61.0 \\implies \\text{IQR} = 61.0 - 42.5 = 18.5$", type: "N2" },
      { text: "(d) Pada skor 65, kekerapan longgokan $= 49 \\implies \\text{Bilangan layak} = 60 - 49 = 11 \\implies \\frac{11}{60} \\times 100\\% = 18.33\\%$", type: "N1" }
    ],
    tip: "Marker's Tip: Ogive must always start on the horizontal axis at the lower boundary of the first class $(20.5, 0)$."
  },
  {
    id: 15, section: "Bahagian B", totalMarks: "[9 markah / 9 marks]", svg: "p2_q15",
    introBM: "Rajah di bawah menunjukkan satu rangkaian paip air yang menghubungkan 6 stesen utama: $P, Q, R, S, T, U$. Pemberat pada setiap tepi mewakili jarak dalam km.",
    introEN: "The diagram below shows a water pipeline network connecting 6 main stations: $P, Q, R, S, T, U$. The weights represent distances in km.",
    parts: [
      {
        label: "(a)(i)",
        qBM: "Lukis satu pokok dengan pemberat minimum yang menghubungkan semua 6 stesen tersebut.",
        qEN: "Draw a minimum spanning tree connecting all 6 stations.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(a)(ii)",
        qBM: "Hitung jumlah pemberat minimum bagi pokok tersebut.",
        qEN: "Calculate the minimum total weight of the tree.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(b)(i)",
        qBM: "Encik Rizal mempunyai jumlah pendapatan tahunan sebanyak RM82,000 pada tahun 2025. Beliau telah menderma RM2,000 kepada sebuah hospital kebajikan yang diluluskan kerajaan. Pelepasan cukai yang dituntut berjumlah RM23,000. Hitung pendapatan bercukai Encik Rizal.",
        qEN: "Encik Rizal had a total annual income of RM82,000 in 2025. He donated RM2,000 to an approved charity hospital. His claimed tax reliefs totaled RM23,000. Calculate Encik Rizal's chargeable income.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)(ii)",
        qBM: "Berdasarkan jadual cukai pendapatan (RM50,000 pertama dikenakan RM1,800 dan kadar seterusnya ialah $13\\%$), hitung cukai pendapatan yang perlu dibayar oleh beliau.",
        qEN: "Based on the tax schedule (first RM50,000 taxed at RM1,800, next rate is $13\\%$), calculate his payable income tax.",
        marks: "[3 markah / 3 marks]"
      },
      {
        label: "(b)(iii)",
        qBM: "Jika Potongan Cukai Berjadual (PCB) sebanyak RM250 dipotong setiap bulan daripada gajinya, tentukan sama ada Encik Rizal perlu membayar baki cukai atau menerima bayaran balik cukai. Nyatakan nilainya.",
        qEN: "If Monthly Tax Deduction (PCB) of RM250 was deducted from his salary, determine whether Encik Rizal needs to pay additional tax or receive a tax refund. State the amount.",
        marks: "[1 markah / 1 mark]"
      }
    ],
    steps: [
      { text: "(a)(i) Pokok minimum mengandungi $V-1 = 5$ tepi terpilih: $(R,S)=4, (Q,U)=5, (S,Q)=6, (P,Q)=7, (P,T)=9$", type: "K1" },
      { text: "(a)(ii) Jumlah pemberat minimum $= 4 + 5 + 6 + 7 + 9 = 31\\text{ km}$", type: "N1" },
      { text: "(b)(i) Pendapatan bercukai $= 82000 - 2000 - 23000 = \\text{RM}57,000$", type: "N2" },
      { text: "(b)(ii) Cukai $= 1800 + 0.13(57000 - 50000) = 1800 + 0.13(7000) = 1800 + 910 = \\text{RM}2,710$", type: "K2" },
      { text: "Jumlah cukai pendapatan perlu dibayar $= \\text{RM}2,710$", type: "N1" },
      { text: "(b)(iii) Jumlah PCB tahunan $= 12 \\times 250 = \\text{RM}3,000 > \\text{RM}2,710 \\implies$ **Menerima bayaran balik cukai sebanyak RM290** ($3000 - 2710$)", type: "N1" }
    ],
    tip: "Marker's Tip: PCB refund occurs when annual PCB deduction is greater than the actual calculated tax."
  },
  {
    id: 16, section: "Bahagian C", totalMarks: "[15 markah / 15 marks]", svg: "p2_q16",
    introBM: "<b>KAJIAN KES 1: INOVASI PERTANIAN BANDAR & KEUSAHAWANAN AGROTEKNOLOGI</b><br>Encik Khairul mengusahakan projek penanaman cili secara fertigasi pintar di atas bumbung bangunan komersial.",
    introEN: "<b>CASE STUDY 1: URBAN AGROTECHNOLOGY & SMART FARMING</b><br>Encik Khairul manages a smart fertigation chilli project on a commercial rooftop.",
    parts: [
      {
        label: "(a)(i)",
        qBM: "Fungsi keuntungan harian diberi oleh $P(x) = -2x^2 + 80x - 300$, dengan $x$ ialah bilangan pasu cili (dalam puluh) dan $P(x)$ ialah keuntungan dalam RM. Hitung keuntungan harian jika beliau menanam 150 pasu cili ($x = 15$).",
        qEN: "The daily profit function is given by $P(x) = -2x^2 + 80x - 300$, where $x$ is the number of pots (in tens) and $P(x)$ is profit in RM. Calculate the daily profit if he plants 150 chilli pots ($x = 15$).",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(a)(ii)",
        qBM: "Tentukan bilangan pasu cili yang perlu ditanam untuk memperoleh keuntungan maksimum, dan seterusnya hitung keuntungan maksimum harian tersebut.",
        qEN: "Determine the number of chilli pots to be planted to obtain maximum profit, and hence calculate the maximum daily profit.",
        marks: "[3 markah / 3 marks]"
      },
      {
        label: "(b)",
        qBM: "Rajah di bawah menunjukkan graf rangkaian laluan penghantaran cili dari pusat pengumpulan $S$ ke empat pasar raya $M_1, M_2, M_3, M_4$. Tentukan laluan pokok rentangan minimum untuk menghantar cili ke semua pasar raya dan hitung jumlah jarak minimum tersebut.",
        qEN: "The diagram below shows the delivery network from collection centre $S$ to 4 supermarkets $M_1, M_2, M_3, M_4$. Determine the minimum spanning tree route and calculate the minimum total distance.",
        marks: "[4 markah / 4 marks]"
      },
      {
        label: "(c)(i)",
        qBM: "Encik Khairul merancang membeli sistem pengairan pintar berharga RM3,600 dalam tempoh 12 bulan. Pendapatan bersih bulanannya ialah RM2,400 dan perbelanjaan bulanannya ialah RM1,600. Hitung aliran tunai bulanan beliau.",
        qEN: "He plans to buy a smart irrigation system worth RM3,600 in 12 months. His monthly net income is RM2,400 and expenses are RM1,600. Calculate his monthly cash flow.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(c)(ii)",
        qBM: "Nilaikan sama ada matlamat kewangan beliau boleh dicapai berasaskan konsep SMART.",
        qEN: "Evaluate whether his financial goal is achievable based on the SMART concept.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(d)",
        qBM: "Dua kaedah pembajaan diuji ke atas 50 pokok cili. Kaedah $A$ menghasilkan min jisim cili $42\\text{ g}$ dengan sisihan piawai $2.1\\text{ g}$, manakala Kaedah $B$ menghasilkan min jisim cili $42\\text{ g}$ dengan sisihan piawai $5.8\\text{ g}$. Kaedah manakah yang lebih konsisten? Berikan justifikasi anda.",
        qEN: "Two fertilisation methods were tested on 50 chilli plants. Method $A$ produces mean mass $42\\text{ g}$, std dev $2.1\\text{ g}$. Method $B$ produces mean mass $42\\text{ g}$, std dev $5.8\\text{ g}$. Which method is more consistent? Justify your answer.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a)(i) $P(15) = -2(15)^2 + 80(15) - 300 = -2(225) + 1200 - 300 = -450 + 1200 - 300 = \\text{RM}450$", type: "N1" },
      { text: "(a)(ii) $x = -\\frac{b}{2a} = -\\frac{80}{2(-2)} = 20 \\implies 20 \\times 10 = 200\\text{ pasu cili}$", type: "K1" },
      { text: "$P(20) = -2(400) + 80(20) - 300 = -800 + 1600 - 300 = \\text{RM}500$", type: "N1" },
      { text: "(b) Tepi pokok minimum: $(S, M_1)=6\\text{ km}, (M_1, M_2)=5\\text{ km}, (M_1, M_3)=8\\text{ km}, (M_3, M_4)=4\\text{ km}$", type: "K3" },
      { text: "Jumlah jarak minimum $= 6 + 5 + 8 + 4 = 23\\text{ km}$", type: "N1" },
      { text: "(c)(i) Aliran tunai bulanan $= 2400 - 1600 = +\\text{RM}800$", type: "N1" },
      { text: "(c)(ii) Simpanan bulanan diperlukan $= \\frac{3600}{12} = \\text{RM}300$. Kerana $\\text{RM}300 \\le \\text{RM}800$, matlamat ini **Boleh Dicapai (Achievable/SMART)**.", type: "K2" },
      { text: "(d) Kaedah $A$ lebih konsisten kerana sisihan piawainya ($2.1\\text{ g}$) lebih kecil daripada Kaedah $B$ ($5.8\\text{ g}$), menunjukkan serakan data yang lebih rendah.", type: "N2" }
    ],
    tip: "Marker's Tip: Consistency in statistics is always determined by a smaller standard deviation."
  },
  {
    id: 17, section: "Bahagian C", totalMarks: "[15 markah / 15 marks]", svg: "p2_q17",
    introBM: "<b>KAJIAN KES 2: KEJURUTERAAN LESTARI & SISTEM TENAGA SOLAR</b><br>Sebuah syarikat kejuruteraan mereka bentuk bumbung kanopi solar untuk tempat letak kereta hospital.",
    introEN: "<b>CASE STUDY 2: SUSTAINABLE ENGINEERING & SOLAR CANOPY SYSTEMS</b><br>An engineering company designs a solar canopy for a hospital parking lot.",
    parts: [
      {
        label: "(a)(i)",
        qBM: "Rajah di bawah menunjukkan struktur kanopi solar $ABFE$ yang condong $30^\\circ$ kepada satah mengufuk. Diberi panjang $AB = 10\\text{ m}$ dan lebar condong $AE = 5\\text{ m}$. Hitung luas permukaan panel solar $ABFE$.",
        qEN: "Diagram shows solar canopy $ABFE$ inclined at $30^\\circ$ to horizontal. Given length $AB = 10\\text{ m}$ and slope width $AE = 5\\text{ m}$. Calculate surface area of solar panel $ABFE$.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(a)(ii)",
        qBM: "Disokong oleh tiang menegak $AD$ dan $BC$ dengan ketinggian $4\\text{ m}$. Hitung tinggi maksimum, dalam meter, titik $E$ dari tanah.",
        qEN: "Supported by vertical pillars $AD, BC$ of height $4\\text{ m}$. Calculate the maximum height of point $E$ from the ground.",
        marks: "[3 markah / 3 marks]"
      },
      {
        label: "(b)(i)",
        qBM: "Pelan reka bentuk asal berkeluasan $50\\text{ cm}^2$ dibesarkan dengan faktor skala $k = 2.5$ untuk poster pameran. Hitung luas pelan pada poster pameran.",
        qEN: "Original plan of area $50\\text{ cm}^2$ is enlarged by scale factor $k = 2.5$ for an exhibition poster. Calculate the area on the poster.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(b)(ii)",
        qBM: "Huraikan selengkapnya pembesaran tersebut jika pusat pembesaran ialah asalan $(0, 0)$.",
        qEN: "Describe fully the enlargement if the centre of enlargement is origin $(0, 0)$.",
        marks: "[2 markah / 2 marks]"
      },
      {
        label: "(c)",
        qBM: "Nilai boleh diinsuranskan bagi struktur solar tersebut ialah RM600,000. Polisi insurans mempunyai peruntukan ko-insurans $80\\%$ dan deduktibel RM3,000. Syarikat menginsuranskan kanopi tersebut pada jumlah RM400,000. Jika ribut menyebabkan kerugian sebanyak RM48,000, hitung bayaran pampasan yang akan diterima.",
        qEN: "Insurable value of structure is RM600,000 with $80\\%$ co-insurance clause and RM3,000 deductible. Insured amount is RM400,000. Storm loss is RM48,000. Calculate compensation received.",
        marks: "[4 markah / 4 marks]"
      },
      {
        label: "(d)(i)",
        qBM: "Sistem solar dilengkapi dengan dua pemutus litar keselamatan $C_1$ ($P=0.95$) dan $C_2$ ($P=0.90$) yang beroperasi secara bebas. Lukis gambar rajah pokok yang lengkap.",
        qEN: "Solar system has two circuit breakers $C_1$ ($P=0.95$) and $C_2$ ($P=0.90$) operating independently. Draw a complete tree diagram.",
        marks: "[1 markah / 1 mark]"
      },
      {
        label: "(d)(ii)",
        qBM: "Hitung kebarangkalian bahawa sekurang-kurangnya satu pemutus litar berfungsi dengan baik.",
        qEN: "Calculate the probability that at least one circuit breaker operates successfully.",
        marks: "[2 markah / 2 marks]"
      }
    ],
    steps: [
      { text: "(a)(i) $\\text{Luas panel solar} = 10 \\times 5 = 50\\text{ m}^2$", type: "N1" },
      { text: "(a)(ii) Kenaikan tegak $= 5\\sin 30^\\circ = 5(0.5) = 2.5\\text{ m}$", type: "K1" },
      { text: "Tinggi maksimum dari tanah $= 4\\text{ m} + 2.5\\text{ m} = 6.5\\text{ m}$", type: "N2" },
      { text: "(b)(i) $\\text{Luas poster} = (2.5)^2 \\times 50 = 6.25 \\times 50 = 312.5\\text{ cm}^2$", type: "N1" },
      { text: "(b)(ii) Pembesaran pada pusat asalan $(0, 0)$ dengan faktor skala $2.5$.", type: "P2" },
      { text: "(c) Jumlah insurans harus dibeli $= 0.80 \\times 600000 = \\text{RM}480,000$; $\\text{Pampasan} = \\frac{400000}{480000} \\times 48000 - 3000 = 40000 - 3000$", type: "K2" },
      { text: "$= \\text{RM}37,000$", type: "N1" },
      { text: "(d)(i) Rajah pokok lengkap menunjukkan 4 cabang keberhasilan: $(C_1, C_2), (C_1, C_2'), (C_1', C_2), (C_1', C_2')$", type: "P1" },
      { text: "(d)(ii) $P(\\text{sekurang-kurangnya satu berfungsi}) = 1 - P(C_1' \\cap C_2') = 1 - (0.05 \\times 0.10) = 1 - 0.005 = 0.995$", type: "N2" }
    ],
    tip: "Marker's Tip: Co-insurance compensation formula: $\\frac{\\text{Amount insured}}{\\text{Required insurance}} \\times \\text{Loss} - \\text{Deductible}$."
  }
];

// Helper to render Paper 1 MCQ Options in HTML & Interactive
function renderMCQGridHTML(q, cardId) {
  const letters = ['A', 'B', 'C', 'D'];
  let html = '<div class="mcq-grid">';
  q.options.forEach((opt, i) => {
    html += `
      <div class="mcq-opt" onclick="checkMCQ('${cardId}', ${i}, ${q.correct})">
        <div style="font-weight:800; color:#2563eb; font-size:1.05rem; margin-bottom:4px;">${letters[i]}.</div>
        <div style="color:#0f172a; font-weight:500;">${opt.bm}</div>
        ${opt.en ? `<div style="color:#64748b; font-style:italic; font-size:0.88rem; margin-top:3px;">${opt.en}</div>` : ''}
      </div>
    `;
  });
  html += '</div>';
  return html;
}

// Helper to render Paper 2 Question Body in HTML Interactive
function renderP2QuestionHTML(q) {
  let html = '';
  if (q.introBM) {
    html += `<div style="margin-bottom:12px;"><div class="q-bm">${q.introBM}</div><span class="q-en">${q.introEN}</span></div>`;
  }
  if (q.svg) {
    html += SVGS[q.svg];
  }
  html += `<div class="sub-q-container" style="margin-top:12px;">`;
  q.parts.forEach(p => {
    html += `
      <div class="sub-q-row">
        ${p.label ? `<div class="sub-q-label">${p.label}</div>` : ''}
        <div class="sub-q-main">
          <div class="q-bm">${p.qBM}</div>
          <span class="q-en">${p.qEN}</span>
        </div>
        <div class="sub-q-marks">${p.marks}</div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

// Helper to render Paper 2 Question Body in Printable PDF
function renderP2QuestionPDF(q) {
  let html = '';
  if (q.introBM) {
    html += `<div style="margin-bottom:6px;"><div class="q-bm">${q.introBM}</div><span class="q-en">${q.introEN}</span></div>`;
  }
  if (q.svg) {
    html += SVGS[q.svg];
  }
  q.parts.forEach(p => {
    html += `
      <div style="margin-top:10px; page-break-inside:avoid;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px; gap:12px;">
          <div style="flex:1;">
            <div class="q-bm">${p.label ? `<b>${p.label}</b> ` : ''}${p.qBM}</div>
            <span class="q-en">${p.qEN}</span>
          </div>
          <div style="text-align:right; font-weight:bold; font-size:9.5pt; color:#334155; white-space:nowrap; min-width:115px;">
            ${p.marks}
          </div>
        </div>
        <div class="answer-space">Ruang Jawapan Calon / Candidate's Answer Space</div>
      </div>
    `;
  });
  return html;
}

// KaTeX Header Block with Local and CDN fallback
const KATEX_HEAD = `
<link rel="stylesheet" href="katex/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
`;

// KaTeX Scripts placed at the bottom for guaranteed synchronous execution
const KATEX_FOOT = `
<script src="katex/katex.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script src="katex/auto-render.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '\\\\[', right: '\\\\]', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\\\(', right: '\\\\)', display: false}
      ],
      throwOnError: false
    });
    document.body.setAttribute('data-rendered', 'true');
  });
  if (document.readyState === "complete" || document.readyState === "interactive") {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '\\\\[', right: '\\\\]', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\\\(', right: '\\\\)', display: false}
      ],
      throwOnError: false
    });
    document.body.setAttribute('data-rendered', 'true');
  }
</script>
`;

// Build Unified Interactive HTML
function buildInteractivePortal() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SPM Mathematics 1449 Forecast — Interactive Discussion Portal</title>
${KATEX_HEAD}
<style>
  :root {
    --primary: #2563eb; --primary-dark: #1d4ed8; --primary-light: #eff6ff;
    --success: #16a34a; --success-light: #f0fdf4; --success-border: #86efac;
    --tip-border: #f59e0b; --tip-text: #b45309; --tip-bg: #fffbeb;
    --bg-page: #f8fafc; --card-bg: #ffffff; --text-main: #1e293b;
    --text-muted: #64748b; --border-color: #e2e8f0;
    --p-bg: #fef3c7; --p-text: #92400e;
    --k-bg: #dbeafe; --k-text: #1e40af;
    --n-bg: #dcfce7; --n-text: #166534;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-page); color: var(--text-main); line-height: 1.6; padding: 20px;
  }
  body.projector-mode { font-size: 1.18rem; }
  .container { max-width: 1020px; margin: 0 auto; }
  .header-bar {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid var(--border-color);
  }
  .header-bar h1 { font-size: 1.5rem; font-weight: 800; color: #0f172a; }
  .nav-tabs { display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; }
  .tab-btn {
    padding: 10px 20px; border-radius: 8px; border: none; background: #e2e8f0; color: #334155;
    font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s ease;
  }
  .tab-btn.active { background: var(--primary); color: #fff; }
  .tab-btn:hover:not(.active) { background: #cbd5e1; }
  .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; }
  .btn-tool { padding: 8px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; font-weight: 600; font-size: 0.88rem; cursor: pointer; }
  .btn-tool:hover { background: #f1f5f9; }

  .q-card {
    background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 10px;
    padding: 24px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  }
  .q-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; }
  .q-num { font-size: 1.25rem; font-weight: 800; color: var(--primary); min-width: 42px; }
  .q-body { flex: 1; }
  .q-bm { color: #0f172a; font-size: 1.02rem; margin-bottom: 4px; }
  .q-en { color: #64748b; font-style: italic; font-size: 0.96rem; margin-bottom: 8px; display: block; }
  
  .q-total-badge {
    background: #f1f5f9;
    color: #334155;
    border: 1px solid #cbd5e1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 9999px;
    white-space: nowrap;
    letter-spacing: 0.2px;
  }

  .mcq-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 14px 0 14px 0;
  }
  @media (max-width: 640px) {
    .mcq-grid { grid-template-columns: 1fr; }
  }
  .mcq-opt {
    background: #f8fafc; border: 1px solid var(--border-color); border-radius: 6px;
    padding: 12px 14px; cursor: pointer; font-size: 0.95rem; transition: all 0.15s ease;
  }
  .mcq-opt:hover { border-color: var(--primary); background: var(--primary-light); }
  .mcq-opt.correct { background: #dcfce7 !important; border-color: #22c55e !important; color: #166534 !important; font-weight: bold; }
  .mcq-opt.incorrect { background: #fee2e2 !important; border-color: #ef4444 !important; color: #991b1b !important; }

  .sub-q-container { width: 100%; }
  .sub-q-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px dashed #f1f5f9;
  }
  .sub-q-row:last-child { border-bottom: none; }
  .sub-q-label { font-weight: 800; color: #0f172a; min-width: 32px; }
  .sub-q-main { flex: 1; }
  .sub-q-marks {
    text-align: right;
    font-weight: 700;
    font-size: 0.88rem;
    color: #059669;
    white-space: nowrap;
    min-width: 120px;
    padding-left: 10px;
  }

  .btn-toggle-scheme {
    background-color: var(--primary); color: white; border: none; border-radius: 6px;
    padding: 8px 16px; font-weight: 600; font-size: 0.88rem; cursor: pointer; margin-top: 12px;
    transition: all 0.2s ease;
  }
  .btn-toggle-scheme:hover { background-color: var(--primary-dark); }
  .btn-toggle-scheme.active { background-color: #475569; }

  .marking-box {
    display: none; margin-top: 16px; background-color: var(--success-light);
    border: 1px solid var(--success-border); border-left: 4px solid var(--success); border-radius: 8px; padding: 18px;
  }
  .marking-box.show { display: block; }
  .marking-title { font-size: 1.05rem; font-weight: 700; color: #15803d; margin-bottom: 12px; }
  .marking-steps { list-style: none; padding: 0; margin: 0 0 12px 0; }
  .marking-step { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px dashed rgba(34, 197, 94, 0.25); }
  .marking-step:last-child { border-bottom: none; }
  .step-text { flex: 1; color: #1f2937; padding-right: 15px; }

  .pill-badge { display: inline-block; padding: 2px 10px; border-radius: 9999px; font-size: 0.8rem; font-weight: 800; text-align: center; }
  .pill-p { background: var(--p-bg); color: var(--p-text); border: 1px solid #fde68a; }
  .pill-k { background: var(--k-bg); color: var(--k-text); border: 1px solid #bfdbfe; }
  .pill-n { background: var(--n-bg); color: var(--n-text); border: 1px solid #bbf7d0; }

  .marker-tip {
    margin-top: 12px; padding: 8px 12px; border-left: 3px solid var(--tip-border);
    background-color: var(--tip-bg); border-radius: 0 6px 6px 0; font-size: 0.9rem; color: #78350f;
  }
  .sec-tag { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; margin-bottom: 6px; background: #e0e7ff; color: #3730a3; }
</style>
</head>
<body>
<div class="container">
  <div class="header-bar">
    <div>
      <h1>SIJIL PELAJARAN MALAYSIA • MATEMATIK (1449)</h1>
      <p style="color:var(--text-muted); font-size:0.92rem;">Interactive Classroom Discussion & Examination Rubrics Portal</p>
    </div>
    <div style="background:#e2e8f0; color:#1e293b; padding:6px 14px; border-radius:9999px; font-weight:700; font-size:0.88rem;">Forecast 2026</div>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchTab('p1', this)">📄 Paper 1 (1449/1)</button>
    <button class="tab-btn" onclick="switchTab('p2', this)">📝 Paper 2 (1449/2)</button>
    <button class="tab-btn" onclick="switchTab('formula', this)">📐 Formula Sheet</button>
  </div>

  <div class="toolbar">
    <div>
      <button class="btn-tool" onclick="toggleAllSchemes(true)">👁️ Show All Marking Schemes</button>
      <button class="btn-tool" onclick="toggleAllSchemes(false)">🙈 Hide All Marking Schemes</button>
    </div>
    <div>
      <button class="btn-tool" onclick="toggleProjector()">📽️ Toggle Projector / Big Screen Mode</button>
    </div>
  </div>

  <!-- TAB 1: PAPER 1 -->
  <div id="tab-p1" class="tab-content">
    ${P1_DATA.map(q => `
      <div class="q-card" id="card-p1-${q.id}">
        <div class="q-header">
          <div class="q-num">Q${q.id}</div>
          <div class="q-body">
            <div class="q-bm">${q.qBM}</div>
            <span class="q-en">${q.qEN}</span>
            ${q.svg ? SVGS[q.svg] : ''}
            ${renderMCQGridHTML(q, `card-p1-${q.id}`)}
          </div>
          <div class="q-total-badge">[1 markah / 1 mark]</div>
        </div>
        <button class="btn-toggle-scheme" onclick="toggleScheme('box-p1-${q.id}', this)">Show Marking Scheme</button>
        <div id="box-p1-${q.id}" class="marking-box">
          <div class="marking-title">Marking Criteria</div>
          <ul class="marking-steps">
            ${q.steps.map(s => `
              <li class="marking-step">
                <span class="step-text">${s.text}</span>
                <span class="pill-badge pill-${s.type.charAt(0).toLowerCase()}">${s.type}</span>
              </li>
            `).join('')}
          </ul>
          <div class="marker-tip"><strong>Marker's Tip:</strong> ${q.tip}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <!-- TAB 2: PAPER 2 -->
  <div id="tab-p2" class="tab-content" style="display:none;">
    ${P2_DATA.map(q => `
      <div class="q-card" id="card-p2-${q.id}">
        <div class="sec-tag">${q.section}</div>
        <div class="q-header">
          <div class="q-num">Q${q.id}</div>
          <div class="q-body">
            ${renderP2QuestionHTML(q)}
          </div>
          <div class="q-total-badge">${q.totalMarks}</div>
        </div>
        <button class="btn-toggle-scheme" onclick="toggleScheme('box-p2-${q.id}', this)">Show Marking Scheme</button>
        <div id="box-p2-${q.id}" class="marking-box">
          <div class="marking-title">Marking Criteria</div>
          <ul class="marking-steps">
            ${q.steps.map(s => `
              <li class="marking-step">
                <span class="step-text">${s.text}</span>
                <span class="pill-badge pill-${s.type.charAt(0).toLowerCase()}">${s.type}</span>
              </li>
            `).join('')}
          </ul>
          <div class="marker-tip">${q.tip}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <!-- TAB 3: FORMULAE -->
  <div id="tab-formula" class="tab-content" style="display:none;">
    <div class="q-card">
      <h2 style="color:var(--primary); margin-bottom:15px;">RUMUS MATEMATIK / MATHEMATICAL FORMULAE</h2>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div>
          <h3 style="border-bottom:2px solid var(--primary); padding-bottom:6px; margin-bottom:10px;">Nombor & Perkaitan / Relations</h3>
          <ul style="list-style:none; line-height:2;">
            <li>$a^m \\times a^n = a^{m+n}$</li>
            <li>$a^m \\div a^n = a^{m-n}$</li>
            <li>$(a^m)^n = a^{mn}$</li>
            <li>$I = Prt$</li>
            <li>$MV = P\\left(1 + \\frac{r}{n}\\right)^{nt}$</li>
            <li>Kecerunan / Gradient, $m = \\frac{y_2 - y_1}{x_2 - x_1}$</li>
            <li>$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$</li>
          </ul>
        </div>
        <div>
          <h3 style="border-bottom:2px solid var(--primary); padding-bottom:6px; margin-bottom:10px;">Bentuk & Ruang / Sukatan Serakan</h3>
          <ul style="list-style:none; line-height:2;">
            <li>Luas bulatan / Area of circle $= \\pi j^2$</li>
            <li>Lilitan bulatan / Circumference $= 2\\pi j$</li>
            <li>Luas sektor / Area of sector $= \\frac{\\theta}{360^\\circ} \\pi j^2$</li>
            <li>Panjang lengkok / Arc length $= \\frac{\\theta}{360^\\circ} (2\\pi j)$</li>
            <li>Luas imej / Area of image $= k^2 \\times \\text{Luas objek}$</li>
            <li>Min / Mean, $\\bar{x} = \\frac{\\sum x}{N}$</li>
            <li>Varians / Variance, $\\sigma^2 = \\frac{\\sum x^2}{N} - \\bar{x}^2$</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tabId).style.display = 'block';
  btn.classList.add('active');
}
function checkMCQ(cardId, selectedIdx, correctIdx) {
  const card = document.getElementById(cardId);
  const options = card.querySelectorAll('.mcq-opt');
  options.forEach((opt, idx) => {
    opt.classList.remove('correct', 'incorrect');
    if (idx === correctIdx) opt.classList.add('correct');
    else if (idx === selectedIdx) opt.classList.add('incorrect');
  });
}
function toggleScheme(boxId, btn) {
  const box = document.getElementById(boxId);
  if (box.classList.contains('show')) {
    box.classList.remove('show');
    btn.textContent = 'Show Marking Scheme';
    btn.classList.remove('active');
  } else {
    box.classList.add('show');
    btn.textContent = 'Hide Marking Scheme';
    btn.classList.add('active');
  }
}
function toggleAllSchemes(show) {
  document.querySelectorAll('.marking-box').forEach(box => {
    if (show) box.classList.add('show');
    else box.classList.remove('show');
  });
  document.querySelectorAll('.btn-toggle-scheme').forEach(btn => {
    if (show) { btn.textContent = 'Hide Marking Scheme'; btn.classList.add('active'); }
    else { btn.textContent = 'Show Marking Scheme'; btn.classList.remove('active'); }
  });
}
function toggleProjector() {
  document.body.classList.toggle('projector-mode');
}
</script>
${KATEX_FOOT}
</body>
</html>`;
}

fs.writeFileSync(path.join(__dirname, 'SPM_Matematik_Interactive_Discussion.html'), buildInteractivePortal());
console.log("SPM_Matematik_Interactive_Discussion.html generated.");

// Generate Dedicated Paper 1 Interactive
function buildP1Interactive() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SPM Mathematics Paper 1 (1449/1) — Interactive Discussion</title>
${KATEX_HEAD}
<style>
  :root {
    --primary: #2563eb; --primary-dark: #1d4ed8; --primary-light: #eff6ff;
    --success: #16a34a; --success-light: #f0fdf4; --success-border: #86efac;
    --tip-border: #f59e0b; --tip-text: #b45309; --tip-bg: #fffbeb;
    --bg-page: #f8fafc; --card-bg: #ffffff; --text-main: #1e293b;
    --text-muted: #64748b; --border-color: #e2e8f0;
    --p-bg: #fef3c7; --p-text: #92400e;
    --k-bg: #dbeafe; --k-text: #1e40af;
    --n-bg: #dcfce7; --n-text: #166534;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: var(--bg-page); color: var(--text-main); line-height: 1.6; padding: 20px; }
  .container { max-width: 960px; margin: 0 auto; }
  .header-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid var(--border-color); }
  .header-bar h1 { font-size: 1.4rem; font-weight: 800; color: #0f172a; }
  .q-card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 10px; padding: 24px; margin-bottom: 24px; }
  .q-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; }
  .q-num { font-size: 1.25rem; font-weight: 800; color: var(--primary); min-width: 42px; }
  .q-body { flex: 1; }
  .q-bm { color: #0f172a; font-size: 1.02rem; margin-bottom: 4px; }
  .q-en { color: #64748b; font-style: italic; font-size: 0.96rem; margin-bottom: 8px; display: block; }
  .q-total-badge { background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; font-size: 0.85rem; font-weight: 700; padding: 4px 12px; border-radius: 9999px; white-space: nowrap; }
  
  .mcq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 14px 0 14px 0; }
  @media (max-width: 640px) { .mcq-grid { grid-template-columns: 1fr; } }
  .mcq-opt { background: #f8fafc; border: 1px solid var(--border-color); border-radius: 6px; padding: 12px 14px; cursor: pointer; font-size: 0.95rem; }
  .mcq-opt:hover { border-color: var(--primary); background: var(--primary-light); }
  .mcq-opt.correct { background: #dcfce7 !important; border-color: #22c55e !important; color: #166534 !important; font-weight: bold; }
  .mcq-opt.incorrect { background: #fee2e2 !important; border-color: #ef4444 !important; color: #991b1b !important; }
  
  .btn-toggle-scheme { background: var(--primary); color: white; border: none; border-radius: 6px; padding: 8px 16px; font-weight: 600; font-size: 0.88rem; cursor: pointer; margin-top: 12px; }
  .btn-toggle-scheme.active { background: #475569; }
  .marking-box { display: none; margin-top: 16px; background: var(--success-light); border: 1px solid var(--success-border); border-left: 4px solid var(--success); border-radius: 8px; padding: 18px; }
  .marking-box.show { display: block; }
  .marking-title { font-size: 1.05rem; font-weight: 700; color: #15803d; margin-bottom: 12px; }
  .marking-steps { list-style: none; padding: 0; margin: 0 0 12px 0; }
  .marking-step { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px dashed rgba(34, 197, 94, 0.25); }
  .step-text { flex: 1; color: #1f2937; padding-right: 15px; }
  .pill-badge { display: inline-block; padding: 2px 10px; border-radius: 9999px; font-size: 0.8rem; font-weight: 800; }
  .pill-p { background: var(--p-bg); color: var(--p-text); border: 1px solid #fde68a; }
  .pill-k { background: var(--k-bg); color: var(--k-text); border: 1px solid #bfdbfe; }
  .pill-n { background: var(--n-bg); color: var(--n-text); border: 1px solid #bbf7d0; }
  .marker-tip { margin-top: 12px; padding: 8px 12px; border-left: 3px solid var(--tip-border); background: var(--tip-bg); border-radius: 0 6px 6px 0; font-size: 0.9rem; color: #78350f; }
  .controls { display: flex; gap: 10px; margin-bottom: 20px; }
  .btn-ctrl { padding: 8px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; cursor: pointer; font-weight: 600; font-size: 0.88rem; }
</style>
</head>
<body>
<div class="container">
  <div class="header-bar">
    <div>
      <h1>SPM Mathematics Paper 1 (1449/1)</h1>
      <p style="color:var(--text-muted); font-size:0.9rem;">Interactive Classroom Drill & Marking Schemes</p>
    </div>
    <div style="background:#e2e8f0; color:#334155; padding:6px 14px; border-radius:9999px; font-weight:700;">40 Soalan / 40 Questions</div>
  </div>
  <div class="controls">
    <button class="btn-ctrl" onclick="toggleAll(true)">👁️ Show All Marking Schemes</button>
    <button class="btn-ctrl" onclick="toggleAll(false)">🙈 Hide All Marking Schemes</button>
  </div>
  ${P1_DATA.map(q => `
    <div class="q-card" id="card-p1-${q.id}">
      <div class="q-header">
        <div class="q-num">Q${q.id}</div>
        <div class="q-body">
          <div class="q-bm">${q.qBM}</div>
          <span class="q-en">${q.qEN}</span>
          ${q.svg ? SVGS[q.svg] : ''}
          ${renderMCQGridHTML(q, `card-p1-${q.id}`)}
        </div>
        <div class="q-total-badge">[1 markah / 1 mark]</div>
      </div>
      <button class="btn-toggle-scheme" onclick="toggleScheme('box-p1-${q.id}', this)">Show Marking Scheme</button>
      <div id="box-p1-${q.id}" class="marking-box">
        <div class="marking-title">Marking Criteria</div>
        <ul class="marking-steps">
          ${q.steps.map(s => `
            <li class="marking-step">
              <span class="step-text">${s.text}</span>
              <span class="pill-badge pill-${s.type.charAt(0).toLowerCase()}">${s.type}</span>
            </li>
          `).join('')}
        </ul>
        <div class="marker-tip"><strong>Marker's Tip:</strong> ${q.tip}</div>
      </div>
    </div>
  `).join('')}
</div>
<script>
function checkMCQ(cardId, selectedIdx, correctIdx) {
  const card = document.getElementById(cardId);
  const options = card.querySelectorAll('.mcq-opt');
  options.forEach((opt, idx) => {
    opt.classList.remove('correct', 'incorrect');
    if (idx === correctIdx) opt.classList.add('correct');
    else if (idx === selectedIdx) opt.classList.add('incorrect');
  });
}
function toggleScheme(boxId, btn) {
  const box = document.getElementById(boxId);
  if (box.classList.contains('show')) {
    box.classList.remove('show');
    btn.textContent = 'Show Marking Scheme';
    btn.classList.remove('active');
  } else {
    box.classList.add('show');
    btn.textContent = 'Hide Marking Scheme';
    btn.classList.add('active');
  }
}
function toggleAll(show) {
  document.querySelectorAll('.marking-box').forEach(box => {
    if (show) box.classList.add('show');
    else box.classList.remove('show');
  });
  document.querySelectorAll('.btn-toggle-scheme').forEach(btn => {
    if (show) { btn.textContent = 'Hide Marking Scheme'; btn.classList.add('active'); }
    else { btn.textContent = 'Show Marking Scheme'; btn.classList.remove('active'); }
  });
}
</script>
${KATEX_FOOT}
</body>
</html>`;
}

fs.writeFileSync(path.join(__dirname, 'SPM_Matematik_Kertas_1_Interactive.html'), buildP1Interactive());
console.log("SPM_Matematik_Kertas_1_Interactive.html generated.");

// Generate Dedicated Paper 2 Interactive
function buildP2Interactive() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SPM Mathematics Paper 2 (1449/2) — Interactive Discussion</title>
${KATEX_HEAD}
<style>
  :root {
    --primary: #2563eb; --primary-dark: #1d4ed8; --primary-light: #eff6ff;
    --success: #16a34a; --success-light: #f0fdf4; --success-border: #86efac;
    --tip-border: #f59e0b; --tip-text: #b45309; --tip-bg: #fffbeb;
    --bg-page: #f8fafc; --card-bg: #ffffff; --text-main: #1e293b;
    --text-muted: #64748b; --border-color: #e2e8f0;
    --p-bg: #fef3c7; --p-text: #92400e;
    --k-bg: #dbeafe; --k-text: #1e40af;
    --n-bg: #dcfce7; --n-text: #166534;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: var(--bg-page); color: var(--text-main); line-height: 1.6; padding: 20px; }
  .container { max-width: 960px; margin: 0 auto; }
  .header-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid var(--border-color); }
  .header-bar h1 { font-size: 1.4rem; font-weight: 800; color: #0f172a; }
  .q-card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 10px; padding: 24px; margin-bottom: 24px; }
  .q-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; }
  .q-num { font-size: 1.25rem; font-weight: 800; color: var(--primary); min-width: 42px; }
  .q-body { flex: 1; }
  .q-bm { color: #0f172a; font-size: 1.02rem; margin-bottom: 4px; }
  .q-en { color: #64748b; font-style: italic; font-size: 0.96rem; margin-bottom: 8px; display: block; }
  
  .q-total-badge {
    background: #ede9fe;
    color: #4338ca;
    border: 1px solid #c7d2fe;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 9999px;
    white-space: nowrap;
  }
  
  .sub-q-container { width: 100%; }
  .sub-q-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px dashed #f1f5f9;
  }
  .sub-q-row:last-child { border-bottom: none; }
  .sub-q-label { font-weight: 800; color: #0f172a; min-width: 32px; }
  .sub-q-main { flex: 1; }
  .sub-q-marks {
    text-align: right;
    font-weight: 700;
    font-size: 0.88rem;
    color: #059669;
    white-space: nowrap;
    min-width: 120px;
    padding-left: 10px;
  }

  .btn-toggle-scheme { background: var(--primary); color: white; border: none; border-radius: 6px; padding: 8px 16px; font-weight: 600; font-size: 0.88rem; cursor: pointer; margin-top: 12px; }
  .btn-toggle-scheme.active { background: #475569; }
  .marking-box { display: none; margin-top: 16px; background: var(--success-light); border: 1px solid var(--success-border); border-left: 4px solid var(--success); border-radius: 8px; padding: 18px; }
  .marking-box.show { display: block; }
  .marking-title { font-size: 1.05rem; font-weight: 700; color: #15803d; margin-bottom: 12px; }
  .marking-steps { list-style: none; padding: 0; margin: 0 0 12px 0; }
  .marking-step { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px dashed rgba(34, 197, 94, 0.25); }
  .step-text { flex: 1; color: #1f2937; padding-right: 15px; }
  .pill-badge { display: inline-block; padding: 2px 10px; border-radius: 9999px; font-size: 0.8rem; font-weight: 800; }
  .pill-p { background: var(--p-bg); color: var(--p-text); border: 1px solid #fde68a; }
  .pill-k { background: var(--k-bg); color: var(--k-text); border: 1px solid #bfdbfe; }
  .pill-n { background: var(--n-bg); color: var(--n-text); border: 1px solid #bbf7d0; }
  .marker-tip { margin-top: 12px; padding: 8px 12px; border-left: 3px solid var(--tip-border); background: var(--tip-bg); border-radius: 0 6px 6px 0; font-size: 0.9rem; color: #78350f; }
  .sec-tag { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; margin-bottom: 6px; background: #e0e7ff; color: #3730a3; }
  .controls { display: flex; gap: 10px; margin-bottom: 20px; }
  .btn-ctrl { padding: 8px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; cursor: pointer; font-weight: 600; font-size: 0.88rem; }
</style>
</head>
<body>
<div class="container">
  <div class="header-bar">
    <div>
      <h1>SPM Mathematics Paper 2 (1449/2)</h1>
      <p style="color:var(--text-muted); font-size:0.9rem;">Bahagian A, Bahagian B, Bahagian C • Interactive Marking Rubrics</p>
    </div>
    <div style="background:#e2e8f0; color:#334155; padding:6px 14px; border-radius:9999px; font-weight:700;">100 Markah / 100 Marks</div>
  </div>
  <div class="controls">
    <button class="btn-ctrl" onclick="toggleAll(true)">👁️ Show All Marking Schemes</button>
    <button class="btn-ctrl" onclick="toggleAll(false)">🙈 Hide All Marking Schemes</button>
  </div>
  ${P2_DATA.map(q => `
    <div class="q-card" id="card-p2-${q.id}">
      <div class="sec-tag">${q.section}</div>
      <div class="q-header">
        <div class="q-num">Q${q.id}</div>
        <div class="q-body">
          ${renderP2QuestionHTML(q)}
        </div>
        <div class="q-total-badge">${q.totalMarks}</div>
      </div>
      <button class="btn-toggle-scheme" onclick="toggleScheme('box-p2-${q.id}', this)">Show Marking Scheme</button>
      <div id="box-p2-${q.id}" class="marking-box">
        <div class="marking-title">Marking Criteria</div>
        <ul class="marking-steps">
          ${q.steps.map(s => `
            <li class="marking-step">
              <span class="step-text">${s.text}</span>
              <span class="pill-badge pill-${s.type.charAt(0).toLowerCase()}">${s.type}</span>
            </li>
          `).join('')}
        </ul>
        <div class="marker-tip">${q.tip}</div>
      </div>
    </div>
  `).join('')}
</div>
<script>
function toggleScheme(boxId, btn) {
  const box = document.getElementById(boxId);
  if (box.classList.contains('show')) {
    box.classList.remove('show');
    btn.textContent = 'Show Marking Scheme';
    btn.classList.remove('active');
  } else {
    box.classList.add('show');
    btn.textContent = 'Hide Marking Scheme';
    btn.classList.add('active');
  }
}
function toggleAll(show) {
  document.querySelectorAll('.marking-box').forEach(box => {
    if (show) box.classList.add('show');
    else box.classList.remove('show');
  });
  document.querySelectorAll('.btn-toggle-scheme').forEach(btn => {
    if (show) { btn.textContent = 'Hide Marking Scheme'; btn.classList.add('active'); }
    else { btn.textContent = 'Show Marking Scheme'; btn.classList.remove('active'); }
  });
}
</script>
${KATEX_FOOT}
</body>
</html>`;
}

fs.writeFileSync(path.join(__dirname, 'SPM_Matematik_Kertas_2_Interactive.html'), buildP2Interactive());
console.log("SPM_Matematik_Kertas_2_Interactive.html generated.");

// Generate PDF Paper 1 HTML Print Layout
function buildPrintPaper1() {
  return `<!DOCTYPE html>
<html lang="ms">
<head>
<meta charset="UTF-8">
<title>SPM Matematik Kertas 1 (1449/1)</title>
${KATEX_HEAD}
<style>
  @page { size: A4 portrait; margin: 16mm 14mm; }
  body { font-family: "Times New Roman", Times, serif; color: #000; line-height: 1.35; font-size: 10.5pt; background: #fff; }
  .page-break { page-break-after: always; }
  .exam-header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 16px; }
  .exam-header h1 { font-size: 13.5pt; font-weight: bold; margin: 0; text-transform: uppercase; }
  .exam-header h2 { font-size: 11.5pt; font-weight: bold; margin: 3px 0; }
  .exam-header p { font-size: 9.5pt; margin: 0; font-style: italic; }
  .cand-box { border: 1px solid #000; padding: 10px; margin: 15px 0; font-size: 10pt; }
  .cand-row { display: flex; justify-content: space-between; margin-bottom: 6px; }
  .cand-field { border-bottom: 1px dotted #000; min-width: 180px; display: inline-block; }
  .inst-box { border: 1px solid #000; padding: 10px; margin: 15px 0; font-size: 9.5pt; }
  .inst-box ol { margin-left: 18px; }
  .q-item { margin-bottom: 16px; page-break-inside: avoid; }
  .q-title { font-weight: bold; margin-bottom: 3px; }
  .q-bm { font-weight: normal; }
  .q-en { font-style: italic; color: #333; font-size: 9.5pt; display: block; margin-top: 1px; }
  
  .opts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 6px 0 6px 20px; }
  .opt { font-size: 10pt; }
</style>
</head>
<body>
  <!-- FRONT COVER -->
  <div class="exam-header">
    <h1>SIJIL PELAJARAN MALAYSIA</h1>
    <h2>PEPERIKSAAN RAMALAN / PERCUBAAN TAHUN 2026</h2>
    <h1 style="margin-top:6px;">MATEMATIK (1449/1)</h1>
    <p>KERTAS 1 / PAPER 1</p>
    <p style="font-weight:bold; margin-top:3px;">1 jam 30 minit / 1 hour 30 minutes</p>
  </div>

  <div class="cand-box">
    <div class="cand-row">
      <div>NAMA: <span class="cand-field" style="min-width:300px;"></span></div>
      <div>ANGKA GILIRAN: <span class="cand-field"></span></div>
    </div>
    <div class="cand-row" style="margin-bottom:0;">
      <div>TINGKATAN: <span class="cand-field" style="min-width:160px;"></span></div>
      <div>NO. KAD PENGENALAN: <span class="cand-field"></span></div>
    </div>
  </div>

  <div class="inst-box">
    <b>MAKLUMAT UNTUK CALON / INFORMATION FOR CANDIDATES</b>
    <ol>
      <li>Kertas peperiksaan ini mengandungi <b>40 soalan</b>. Jawab <b>semua</b> soalan.</li>
      <li>Tiap-tiap soalan diikuti oleh empat pilihan jawapan, iaitu <b>A</b>, <b>B</b>, <b>C</b> dan <b>D</b>. Bagi setiap soalan, pilih <b>satu</b> jawapan sahaja.</li>
      <li>Rajah yang mengiringi soalan tidak dilukis mengikut skala kecuali dinyatakan.</li>
      <li>Anda dibenarkan menggunakan kalkulator saintifik.</li>
    </ol>
  </div>

  <div style="text-align:center; font-weight:bold; margin-top:20px; border-top:1px solid #000; padding-top:10px;">
    RUMUS MATEMATIK / MATHEMATICAL FORMULAE
  </div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:9pt; margin-top:8px;">
    <div>
      <b>Perkaitan / Relations:</b><br>
      1. $a^m \\times a^n = a^{m+n}$<br>
      2. $a^m \\div a^n = a^{m-n}$<br>
      3. $(a^m)^n = a^{mn}$<br>
      4. $I = Prt$<br>
      5. $MV = P(1 + \\frac{r}{n})^{nt}$<br>
      6. Kecerunan / Gradient, $m = \\frac{y_2 - y_1}{x_2 - x_1}$
    </div>
    <div>
      <b>Bentuk & Ruang / Shapes & Space:</b><br>
      1. Luas bulatan / Area of circle $= \\pi j^2$<br>
      2. Lilitan bulatan / Circumference $= 2\\pi j$<br>
      3. Luas sektor / Area of sector $= \\frac{\\theta}{360^\\circ} \\pi j^2$<br>
      4. Panjang lengkok / Arc length $= \\frac{\\theta}{360^\\circ} (2\\pi j)$<br>
      5. Luas imej / Area of image $= k^2 \\times \\text{Luas objek}$<br>
      6. Min / Mean, $\\bar{x} = \\frac{\\sum x}{N}$
    </div>
  </div>

  <div class="page-break"></div>

  <!-- QUESTIONS 1 TO 40 -->
  <div style="font-weight:bold; text-align:center; margin-bottom:12px;">Jawab semua soalan / Answer all questions</div>

  ${P1_DATA.map(q => {
    const letters = ['A', 'B', 'C', 'D'];
    return `
    <div class="q-item">
      <div class="q-title">${q.id}. <span class="q-bm">${q.qBM}</span></div>
      <span class="q-en">${q.qEN}</span>
      ${q.svg ? SVGS[q.svg] : ''}
      <div class="opts-grid">
        ${q.options.map((opt, i) => `
          <div class="opt">
            <b>${letters[i]}.</b> ${opt.bm}
            ${opt.en ? `<div style="font-style:italic; color:#444; font-size:9pt; margin-left:14px;">${opt.en}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
    `;
  }).join('')}

  <div style="text-align:center; font-weight:bold; margin-top:20px; border-top:1px solid #000; padding-top:10px;">
    KERTAS PEPERIKSAAN TAMAT / END OF QUESTION PAPER
  </div>
  ${KATEX_FOOT}
</body>
</html>`;
}

fs.writeFileSync(path.join(__dirname, 'generate_pdf_paper1.html'), buildPrintPaper1());
console.log("generate_pdf_paper1.html generated.");

// Generate PDF Paper 2 HTML Print Layout with Right-Aligned Marks
function buildPrintPaper2() {
  return `<!DOCTYPE html>
<html lang="ms">
<head>
<meta charset="UTF-8">
<title>SPM Matematik Kertas 2 (1449/2)</title>
${KATEX_HEAD}
<style>
  @page { size: A4 portrait; margin: 16mm 14mm; }
  body { font-family: "Times New Roman", Times, serif; color: #000; line-height: 1.35; font-size: 10.5pt; background: #fff; }
  .page-break { page-break-after: always; }
  .exam-header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 16px; }
  .exam-header h1 { font-size: 13.5pt; font-weight: bold; margin: 0; text-transform: uppercase; }
  .exam-header h2 { font-size: 11.5pt; font-weight: bold; margin: 3px 0; }
  .exam-header p { font-size: 9.5pt; margin: 0; font-style: italic; }
  .cand-box { border: 1px solid #000; padding: 10px; margin: 15px 0; font-size: 10pt; }
  .cand-row { display: flex; justify-content: space-between; margin-bottom: 6px; }
  .cand-field { border-bottom: 1px dotted #000; min-width: 180px; display: inline-block; }
  .score-table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 9pt; text-align: center; }
  .score-table th, .score-table td { border: 1px solid #000; padding: 3px 5px; }
  .sec-heading { font-weight: bold; font-size: 11.5pt; text-align: center; margin: 20px 0 12px 0; text-transform: uppercase; border-top: 1px solid #000; border-bottom: 1px solid #000; padding: 4px 0; }
  .q-item { margin-bottom: 20px; page-break-inside: avoid; }
  .q-header { display: flex; justify-content: space-between; align-items: center; font-weight: bold; margin-bottom: 6px; font-size: 11pt; }
  .total-badge-pdf {
    font-size: 9pt;
    font-weight: bold;
    color: #1e3a8a;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    padding: 2px 8px;
    border-radius: 4px;
  }
  .q-bm { font-weight: normal; color: #000; }
  .q-en { font-style: italic; color: #333; font-size: 9.5pt; display: block; margin-top: 1px; }
  .answer-space { border: 1px dashed #999; border-radius: 4px; padding: 10px; margin: 8px 0 12px 15px; min-height: 65px; font-size: 8.5pt; color: #666; font-style: italic; }
</style>
</head>
<body>
  <!-- FRONT COVER -->
  <div class="exam-header">
    <h1>SIJIL PELAJARAN MALAYSIA</h1>
    <h2>PEPERIKSAAN RAMALAN / PERCUBAAN TAHUN 2026</h2>
    <h1 style="margin-top:6px;">MATEMATIK (1449/2)</h1>
    <p>KERTAS 2 / PAPER 2</p>
    <p style="font-weight:bold; margin-top:3px;">2 jam 30 minit / 2 hours 30 minutes</p>
  </div>

  <div class="cand-box">
    <div class="cand-row">
      <div>NAMA: <span class="cand-field" style="min-width:300px;"></span></div>
      <div>ANGKA GILIRAN: <span class="cand-field"></span></div>
    </div>
    <div class="cand-row" style="margin-bottom:0;">
      <div>TINGKATAN: <span class="cand-field" style="min-width:160px;"></span></div>
      <div>NO. KAD PENGENALAN: <span class="cand-field"></span></div>
    </div>
  </div>

  <table class="score-table">
    <tr>
      <th colspan="3">Bahagian A (40 Markah)</th>
      <th colspan="3">Bahagian B (45 Markah)</th>
      <th colspan="3">Bahagian C (15 Markah)</th>
    </tr>
    <tr>
      <th>Soalan</th><th>Penuh</th><th>Diperoleh</th>
      <th>Soalan</th><th>Penuh</th><th>Diperoleh</th>
      <th>Soalan</th><th>Penuh</th><th>Diperoleh</th>
    </tr>
    <tr><td>1</td><td>3</td><td></td><td>11</td><td>9</td><td></td><td>16</td><td>15</td><td></td></tr>
    <tr><td>2</td><td>3</td><td></td><td>12</td><td>9</td><td></td><td>17</td><td>15</td><td></td></tr>
    <tr><td>3</td><td>3</td><td></td><td>13</td><td>9</td><td></td><td colspan="3" rowspan="4" style="background:#f1f5f9; vertical-align:middle;"><b>JUMLAH KESELURUHAN / TOTAL:</b><br><span style="font-size:13pt; font-weight:bold;">/ 100</span></td></tr>
    <tr><td>4</td><td>4</td><td></td><td>14</td><td>9</td><td></td></tr>
    <tr><td>5</td><td>4</td><td></td><td>15</td><td>9</td><td></td></tr>
    <tr><td>6</td><td>4</td><td></td><td colspan="3" rowspan="4" style="background:#fafafa;"></td></tr>
    <tr><td>7</td><td>4</td><td></td></tr>
    <tr><td>8</td><td>5</td><td></td></tr>
    <tr><td>9</td><td>5</td><td></td></tr>
    <tr><td>10</td><td>5</td><td></td><td colspan="6" style="text-align:right; font-weight:bold; padding-right:10px;">GRED:</td></tr>
  </table>

  <div class="page-break"></div>

  <!-- BAHAGIAN A -->
  <div class="sec-heading">BAHAGIAN A / SECTION A [40 Markah / 40 Marks]<br><span style="font-size:9.5pt; font-weight:normal; text-transform:none;">Jawab semua soalan dalam bahagian ini / Answer all questions in this section.</span></div>

  ${P2_DATA.filter(q => q.section === "Bahagian A").map(q => `
    <div class="q-item">
      <div class="q-header">
        <span>Soalan ${q.id}</span>
        <span class="total-badge-pdf">${q.totalMarks}</span>
      </div>
      ${renderP2QuestionPDF(q)}
    </div>
  `).join('')}

  <div class="page-break"></div>

  <!-- BAHAGIAN B -->
  <div class="sec-heading">BAHAGIAN B / SECTION B [45 Markah / 45 Marks]<br><span style="font-size:9.5pt; font-weight:normal; text-transform:none;">Jawab semua soalan dalam bahagian ini / Answer all questions in this section.</span></div>

  ${P2_DATA.filter(q => q.section === "Bahagian B").map(q => `
    <div class="q-item">
      <div class="q-header">
        <span>Soalan ${q.id}</span>
        <span class="total-badge-pdf">${q.totalMarks}</span>
      </div>
      ${renderP2QuestionPDF(q)}
    </div>
  `).join('')}

  <div class="page-break"></div>

  <!-- BAHAGIAN C -->
  <div class="sec-heading">BAHAGIAN C / SECTION C [15 Markah / 15 Marks]<br><span style="font-size:9.5pt; font-weight:normal; text-transform:none;">Jawab mana-mana satu soalan daripada bahagian ini / Answer any one question from this section.</span></div>

  ${P2_DATA.filter(q => q.section === "Bahagian C").map(q => `
    <div class="q-item">
      <div class="q-header">
        <span>Soalan ${q.id}</span>
        <span class="total-badge-pdf">${q.totalMarks}</span>
      </div>
      ${renderP2QuestionPDF(q)}
    </div>
  `).join('')}

  <div style="text-align:center; font-weight:bold; margin-top:20px; border-top:1px solid #000; padding-top:10px;">
    KERTAS PEPERIKSAAN TAMAT / END OF QUESTION PAPER
  </div>
  ${KATEX_FOOT}
</body>
</html>`;
}

fs.writeFileSync(path.join(__dirname, 'generate_pdf_paper2.html'), buildPrintPaper2());
console.log("generate_pdf_paper2.html generated.");

// Generate PDF Marking Scheme HTML
function buildPrintSkema() {
  return `<!DOCTYPE html>
<html lang="ms">
<head>
<meta charset="UTF-8">
<title>SPM Matematik Skema Pemarkahan Lengkap</title>
${KATEX_HEAD}
<style>
  @page { size: A4 portrait; margin: 16mm 14mm; }
  body { font-family: "Times New Roman", Times, serif; color: #000; line-height: 1.35; font-size: 10pt; background: #fff; }
  .page-break { page-break-after: always; }
  .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 16px; }
  .header h1 { font-size: 13.5pt; margin: 0; text-transform: uppercase; }
  .header h2 { font-size: 11.5pt; margin: 3px 0; }
  .ans-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 9.5pt; }
  .ans-table th, .ans-table td { border: 1px solid #000; padding: 4px 6px; text-align: center; }
  .q-scheme { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; margin-bottom: 14px; background: #f8fafc; page-break-inside: avoid; }
  .q-title { font-weight: bold; font-size: 10.5pt; color: #1e40af; margin-bottom: 5px; display: flex; justify-content: space-between; }
  .rubric-list { list-style: none; padding: 0; margin: 0 0 6px 0; }
  .rubric-step { display: flex; justify-content: space-between; padding: 3px 0; border-bottom: 1px dashed #cbd5e1; font-size: 9.5pt; }
  .badge { display: inline-block; padding: 1px 8px; border-radius: 4px; font-size: 8pt; font-weight: bold; }
  .p-mark { background: #fef3c7; color: #92400e; }
  .k-mark { background: #dbeafe; color: #1e40af; }
  .n-mark { background: #dcfce7; color: #166534; }
  .tip { font-size: 8.8pt; color: #b45309; background: #fffbeb; padding: 5px 8px; border-left: 3px solid #f59e0b; margin-top: 5px; }
</style>
</head>
<body>
  <div class="header">
    <h1>SIJIL PELAJARAN MALAYSIA • MATEMATIK (1449)</h1>
    <h2>SKEMA PEMARKAHAN LENGKAP / COMPLETE MARKING SCHEME</h2>
    <p>Peperiksaan Ramalan / Percubaan SPM 2026</p>
  </div>

  <h3 style="border-bottom:1px solid #000; padding-bottom:4px;">KERTAS 1 (1449/1) — SKEMA JAWAPAN</h3>
  <table class="ans-table">
    <tr>
      <th>No</th><th>Jaw</th><th>No</th><th>Jaw</th><th>No</th><th>Jaw</th><th>No</th><th>Jaw</th>
    </tr>
    ${Array.from({length: 10}, (_, i) => `
      <tr>
        <td><b>${i+1}</b></td><td><b>${["A","B","C","D"][P1_DATA[i].correct]}</b></td>
        <td><b>${i+11}</b></td><td><b>${["A","B","C","D"][P1_DATA[i+10].correct]}</b></td>
        <td><b>${i+21}</b></td><td><b>${["A","B","C","D"][P1_DATA[i+20].correct]}</b></td>
        <td><b>${i+31}</b></td><td><b>${["A","B","C","D"][P1_DATA[i+30].correct]}</b></td>
      </tr>
    `).join('')}
  </table>

  <div class="page-break"></div>

  <h3 style="border-bottom:1px solid #000; padding-bottom:4px;">KERTAS 2 (1449/2) — RUBRIK PEMARKAHAN TERPERINCI</h3>

  ${P2_DATA.map(q => `
    <div class="q-scheme">
      <div class="q-title">
        <span>Soalan ${q.id} (${q.section})</span>
        <span>${q.totalMarks}</span>
      </div>
      <ul class="rubric-list">
        ${q.steps.map(s => `
          <li class="rubric-step">
            <span>${s.text}</span>
            <span class="badge ${s.type.startsWith('P') ? 'p-mark' : s.type.startsWith('K') ? 'k-mark' : 'n-mark'}">${s.type}</span>
          </li>
        `).join('')}
      </ul>
      <div class="tip">${q.tip}</div>
    </div>
  `).join('')}

  <div style="text-align:center; font-weight:bold; margin-top:20px; border-top:1px solid #000; padding-top:10px;">
    SKEMA PEMARKAHAN TAMAT / END OF MARKING SCHEME
  </div>
  ${KATEX_FOOT}
</body>
</html>`;
}

fs.writeFileSync(path.join(__dirname, 'generate_pdf_skema.html'), buildPrintSkema());
console.log("generate_pdf_skema.html generated.");

console.log("All HTML files written successfully.");
