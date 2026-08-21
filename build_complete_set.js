const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("=== SPM Mathematics Complete Forecast Builder ===");

// 1. ALL SVGS
const SVGS = {
  p1_q2: `<svg viewBox="0 0 280 130" width="280" height="130" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="30" y1="100" x2="110" y2="100" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="110" y1="100" x2="185" y2="45" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="185" y1="45" x2="255" y2="45" stroke="#0f172a" stroke-width="2.5" stroke-dasharray="4,4"/>
    <line x1="110" y1="100" x2="190" y2="100" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
    <path d="M 90,100 A 25 25 0 0 1 125,89" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="75" y="80" font-family="Arial" font-size="12" font-weight="bold" fill="#2563eb">144°</text>
    <path d="M 135,100 A 25 25 0 0 0 125,89" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <text x="142" y="92" font-family="Arial" font-size="11" fill="#dc2626">θ</text>
    <text x="25" y="115" font-family="Arial" font-size="11" fill="#475569">Sisi poligon / Polygon side</text>
  </svg>`,

  p1_q6: `<svg viewBox="0 0 260 170" width="260" height="170" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <path d="M 50,130 L 190,130 A 140 140 0 0 0 50,-10 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="50" cy="130" r="3.5" fill="#0f172a"/>
    <text x="35" y="145" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a">O</text>
    <text x="195" y="135" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a">P</text>
    <text x="45" y="18" font-family="Arial" font-size="13" font-weight="bold" fill="#0f172a">Q</text>
    <text x="100" y="148" font-family="Arial" font-size="11" fill="#1e40af">j = 14 cm</text>
    <path d="M 75,130 A 25 25 0 0 0 50,105" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="65" y="115" font-family="Arial" font-size="12" font-weight="bold" fill="#dc2626">θ</text>
    <text x="80" y="75" font-family="Arial" font-size="11" font-weight="bold" fill="#1e3a8a">Luas / Area = 154 cm²</text>
  </svg>`,

  p1_q19: `<svg viewBox="0 0 320 180" width="320" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="45" y1="150" x2="300" y2="150" stroke="#0f172a" stroke-width="1.8"/>
    <line x1="45" y1="150" x2="45" y2="20" stroke="#0f172a" stroke-width="1.8"/>
    <polygon points="300,150 294,146 294,154" fill="#0f172a"/>
    <polygon points="45,20 41,26 49,26" fill="#0f172a"/>
    <text x="10" y="18" font-family="Arial" font-size="10" font-weight="bold" fill="#0f172a">Jarak / Dist (km)</text>
    <text x="215" y="172" font-family="Arial" font-size="10" font-weight="bold" fill="#0f172a">Masa / Time (min)</text>
    <text x="35" y="162" font-family="Arial" font-size="10" fill="#0f172a">0</text>
    <line x1="45" y1="80" x2="160" y2="80" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="45" y1="35" x2="280" y2="35" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="160" y1="150" x2="160" y2="80" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="200" y1="150" x2="200" y2="80" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="280" y1="150" x2="280" y2="35" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <text x="20" y="84" font-family="Arial" font-size="10" fill="#0f172a">60</text>
    <text x="15" y="39" font-family="Arial" font-size="10" fill="#0f172a">100</text>
    <text x="150" y="165" font-family="Arial" font-size="10" fill="#0f172a">45</text>
    <text x="192" y="165" font-family="Arial" font-size="10" fill="#0f172a">60</text>
    <text x="272" y="165" font-family="Arial" font-size="10" fill="#0f172a">90</text>
    <line x1="45" y1="150" x2="160" y2="80" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="160" y1="80" x2="200" y2="80" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="200" y1="80" x2="280" y2="35" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="160" cy="80" r="3" fill="#2563eb"/>
    <circle cx="200" cy="80" r="3" fill="#2563eb"/>
    <circle cx="280" cy="35" r="3" fill="#2563eb"/>
  </svg>`,

  p1_q20: `<svg viewBox="0 0 320 180" width="320" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <polygon points="45,150 130,50 280,50 280,150" fill="#eff6ff" stroke="none"/>
    <line x1="45" y1="150" x2="300" y2="150" stroke="#0f172a" stroke-width="1.8"/>
    <line x1="45" y1="150" x2="45" y2="20" stroke="#0f172a" stroke-width="1.8"/>
    <polygon points="300,150 294,146 294,154" fill="#0f172a"/>
    <polygon points="45,20 41,26 49,26" fill="#0f172a"/>
    <text x="10" y="18" font-family="Arial" font-size="10" font-weight="bold" fill="#0f172a">Laju / Speed (m/s)</text>
    <text x="220" y="172" font-family="Arial" font-size="10" font-weight="bold" fill="#0f172a">Masa / Time (s)</text>
    <text x="35" y="162" font-family="Arial" font-size="10" fill="#0f172a">0</text>
    <line x1="45" y1="50" x2="130" y2="50" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="130" y1="150" x2="130" y2="50" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="280" y1="150" x2="280" y2="50" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <text x="30" y="54" font-family="Arial" font-size="11" font-weight="bold" fill="#0f172a">v</text>
    <text x="122" y="165" font-family="Arial" font-size="10" fill="#0f172a">10</text>
    <text x="272" y="165" font-family="Arial" font-size="10" fill="#0f172a">30</text>
    <line x1="45" y1="150" x2="130" y2="50" stroke="#16a34a" stroke-width="2.5"/>
    <line x1="130" y1="50" x2="280" y2="50" stroke="#16a34a" stroke-width="2.5"/>
    <circle cx="130" cy="50" r="3" fill="#16a34a"/>
    <circle cx="280" cy="50" r="3" fill="#16a34a"/>
    <text x="140" y="105" font-family="Arial" font-size="10.5" font-weight="bold" fill="#1e40af">Luas / Area = 500 m</text>
  </svg>`,

  p1_q34: `<svg viewBox="0 0 300 170" width="300" height="170" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <circle cx="30" cy="140" r="3.5" fill="#dc2626"/>
    <text x="15" y="155" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">P(2, 3)</text>
    <line x1="30" y1="140" x2="280" y2="30" stroke="#94a3b8" stroke-dasharray="2,2"/>
    <line x1="30" y1="140" x2="280" y2="140" stroke="#94a3b8" stroke-dasharray="2,2"/>
    <polygon points="80,140 130,140 130,95" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/>
    <text x="75" y="155" font-family="Arial" font-size="10" font-weight="bold">A</text>
    <text x="130" y="155" font-family="Arial" font-size="10" font-weight="bold">B</text>
    <text x="135" y="95" font-family="Arial" font-size="10" font-weight="bold">C</text>
    <text x="95" y="135" font-family="Arial" font-size="9" fill="#c2410c">6 cm</text>
    <polygon points="155,140 280,140 280,30" fill="none" stroke="#2563eb" stroke-width="2.2"/>
    <text x="150" y="155" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">A'</text>
    <text x="280" y="155" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">B'</text>
    <text x="285" y="30" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">C'</text>
    <text x="205" y="135" font-family="Arial" font-size="10" font-weight="bold" fill="#1e40af">15 cm</text>
  </svg>`,

  p1_q35: `<svg viewBox="0 0 280 130" width="280" height="130" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <polygon points="20,100 50,100 65,70 35,50 10,70" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8"/>
    <text x="28" y="80" font-family="Arial" font-size="11" font-weight="bold" fill="#854d0e">P</text>
    <text x="10" y="118" font-family="Arial" font-size="9.5" fill="#713f12">Luas = 24 cm²</text>
    <text x="85" y="80" font-family="Arial" font-size="13" font-weight="bold" fill="#64748b">──[ k = 3 ]──></text>
    <polygon points="170,110 240,110 275,45 205,10 150,45" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
    <text x="205" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#166534">Q</text>
    <text x="180" y="125" font-family="Arial" font-size="10" font-weight="bold" fill="#15803d">Luas / Area = ?</text>
  </svg>`,

  p1_q37: `<svg viewBox="0 0 340 170" width="340" height="170" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="35" y1="140" x2="320" y2="140" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="35" y1="140" x2="35" y2="15" stroke="#0f172a" stroke-width="1.5"/>
    <text x="20" y="144" font-family="Arial" font-size="10">0</text>
    <text x="20" y="118" font-family="Arial" font-size="10">1</text>
    <line x1="32" y1="115" x2="38" y2="115" stroke="#0f172a"/>
    <text x="20" y="78" font-family="Arial" font-size="10">3</text>
    <line x1="32" y1="75" x2="38" y2="75" stroke="#0f172a"/>
    <text x="20" y="38" font-family="Arial" font-size="10">5</text>
    <line x1="32" y1="35" x2="38" y2="35" stroke="#0f172a"/>
    <text x="15" y="15" font-family="Arial" font-size="11" font-weight="bold">y</text>
    <text x="100" y="155" font-family="Arial" font-size="10">90°</text>
    <text x="165" y="155" font-family="Arial" font-size="10">180°</text>
    <text x="235" y="155" font-family="Arial" font-size="10">270°</text>
    <text x="295" y="155" font-family="Arial" font-size="10">360°</text>
    <text x="325" y="144" font-family="Arial" font-size="11" font-weight="bold">x</text>
    <line x1="35" y1="35" x2="305" y2="35" stroke="#cbd5e1" stroke-dasharray="2,2"/>
    <line x1="35" y1="115" x2="175" y2="115" stroke="#cbd5e1" stroke-dasharray="2,2"/>
    <path d="M 35,35 Q 105,35 105,75 T 175,115 T 245,75 T 305,35" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
    <circle cx="35" cy="35" r="3" fill="#7c3aed"/>
    <circle cx="175" cy="115" r="3" fill="#7c3aed"/>
    <circle cx="305" cy="35" r="3" fill="#7c3aed"/>
  </svg>`,

  p1_q39: `<svg viewBox="0 0 340 190" width="340" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="45" y1="160" x2="320" y2="160" stroke="#0f172a" stroke-width="1.6"/>
    <line x1="45" y1="160" x2="45" y2="20" stroke="#0f172a" stroke-width="1.6"/>
    <text x="5" y="18" font-family="Arial" font-size="9.5" font-weight="bold">Kekerapan Longgokan / Cum. Freq</text>
    <text x="210" y="182" font-family="Arial" font-size="10" font-weight="bold">Masa / Time (min)</text>
    <text x="25" y="164" font-family="Arial" font-size="9">0</text>
    <text x="22" y="128" font-family="Arial" font-size="9">20 (Q₁)</text>
    <text x="22" y="95" font-family="Arial" font-size="9">40</text>
    <text x="22" y="60" font-family="Arial" font-size="9">60 (Q₃)</text>
    <text x="25" y="28" font-family="Arial" font-size="9">80</text>
    <text x="40" y="172" font-family="Arial" font-size="9">20</text>
    <text x="110" y="172" font-family="Arial" font-size="9" font-weight="bold" fill="#2563eb">42</text>
    <text x="225" y="172" font-family="Arial" font-size="9" font-weight="bold" fill="#2563eb">68</text>
    <text x="285" y="172" font-family="Arial" font-size="9">80</text>
    <path d="M 45,160 C 90,160 100,135 120,125 C 150,110 180,75 235,58 C 265,48 275,25 295,25" fill="none" stroke="#2563eb" stroke-width="2.2"/>
    <line x1="45" y1="125" x2="120" y2="125" stroke="#ef4444" stroke-dasharray="2,2"/>
    <line x1="120" y1="125" x2="120" y2="160" stroke="#ef4444" stroke-dasharray="2,2"/>
    <line x1="45" y1="58" x2="235" y2="58" stroke="#ef4444" stroke-dasharray="2,2"/>
    <line x1="235" y1="58" x2="235" y2="160" stroke="#ef4444" stroke-dasharray="2,2"/>
  </svg>`,

  p2_q3: `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <rect x="10" y="10" width="300" height="180" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
    <text x="20" y="28" font-family="Arial" font-size="13" font-weight="bold">ξ</text>
    <circle cx="105" cy="85" r="55" fill="rgba(59, 130, 246, 0.12)" stroke="#2563eb" stroke-width="2"/>
    <circle cx="215" cy="85" r="55" fill="rgba(16, 185, 129, 0.12)" stroke="#059669" stroke-width="2"/>
    <circle cx="160" cy="135" r="45" fill="rgba(245, 158, 11, 0.12)" stroke="#d97706" stroke-width="2"/>
    <text x="65" y="55" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb">A</text>
    <text x="245" y="55" font-family="Arial" font-size="13" font-weight="bold" fill="#059669">B</text>
    <text x="155" y="175" font-family="Arial" font-size="13" font-weight="bold" fill="#d97706">C</text>
    <text x="75" y="90" font-family="Arial" font-size="13" font-weight="bold" fill="#1e293b">3</text>
    <text x="235" y="90" font-family="Arial" font-size="13" font-weight="bold" fill="#1e293b">5</text>
    <text x="155" y="145" font-family="Arial" font-size="13" font-weight="bold" fill="#1e293b">6</text>
    <text x="110" y="125" font-family="Arial" font-size="12" font-weight="bold" fill="#1e293b">2</text>
    <text x="195" y="125" font-family="Arial" font-size="12" font-weight="bold" fill="#1e293b">4</text>
  </svg>`,

  p2_q5: `<svg viewBox="0 0 300 170" width="300" height="170" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="30" y1="130" x2="280" y2="130" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="70" y1="155" x2="70" y2="15" stroke="#0f172a" stroke-width="1.5"/>
    <text x="285" y="134" font-family="Arial" font-size="11" font-weight="bold">x</text>
    <text x="65" y="12" font-family="Arial" font-size="11" font-weight="bold">y</text>
    <text x="55" y="144" font-family="Arial" font-size="11">O</text>
    <line x1="40" y1="140" x2="130" y2="20" stroke="#2563eb" stroke-width="2"/>
    <text x="30" y="150" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">P</text>
    <text x="135" y="25" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">Q (2y - 4x = 7)</text>
    <line x1="100" y1="150" x2="190" y2="30" stroke="#059669" stroke-width="2"/>
    <text x="90" y="160" font-family="Arial" font-size="11" font-weight="bold" fill="#059669">S</text>
    <text x="195" y="35" font-family="Arial" font-size="11" font-weight="bold" fill="#059669">R(3, 2)</text>
    <circle cx="160" cy="70" r="3.5" fill="#059669"/>
    <path d="M 82,85 L 86,80 L 82,75" fill="none" stroke="#2563eb" stroke-width="1.8"/>
    <path d="M 142,95 L 146,90 L 142,85" fill="none" stroke="#059669" stroke-width="1.8"/>
  </svg>`,

  p2_q6: `<svg viewBox="0 0 340 180" width="340" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="45" y1="150" x2="310" y2="150" stroke="#0f172a" stroke-width="1.6"/>
    <line x1="45" y1="150" x2="45" y2="20" stroke="#0f172a" stroke-width="1.6"/>
    <text x="10" y="18" font-family="Arial" font-size="10" font-weight="bold">Laju / Speed (m/s)</text>
    <text x="225" y="172" font-family="Arial" font-size="10" font-weight="bold">Masa / Time (s)</text>
    <text x="35" y="162" font-family="Arial" font-size="10">0</text>
    <text x="20" y="104" font-family="Arial" font-size="10">12</text>
    <text x="20" y="44" font-family="Arial" font-size="10">30</text>
    <line x1="45" y1="40" x2="125" y2="40" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="45" y1="100" x2="190" y2="100" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="125" y1="150" x2="125" y2="40" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="190" y1="150" x2="190" y2="100" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="290" y1="150" x2="290" y2="100" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <text x="117" y="165" font-family="Arial" font-size="10">10</text>
    <text x="182" y="165" font-family="Arial" font-size="10">16</text>
    <text x="282" y="165" font-family="Arial" font-size="10">25</text>
    <line x1="45" y1="40" x2="125" y2="40" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="125" y1="40" x2="190" y2="100" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="190" y1="100" x2="290" y2="100" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="125" cy="40" r="3" fill="#2563eb"/>
    <circle cx="190" cy="100" r="3" fill="#2563eb"/>
    <circle cx="290" cy="100" r="3" fill="#2563eb"/>
  </svg>`,

  p2_q11: `<svg viewBox="0 0 340 180" width="340" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="20" y1="150" x2="320" y2="150" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="40" y1="170" x2="40" y2="15" stroke="#0f172a" stroke-width="1.5"/>
    <text x="325" y="154" font-family="Arial" font-size="10">x</text>
    <text x="35" y="12" font-family="Arial" font-size="10">y</text>
    <circle cx="60" cy="130" r="3.5" fill="#dc2626"/>
    <text x="45" y="125" font-family="Arial" font-size="9.5" font-weight="bold" fill="#dc2626">P(1, 1)</text>
    <polygon points="90,130 140,130 130,95 90,95" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/>
    <text x="85" y="142" font-family="Arial" font-size="9" font-weight="bold">A</text>
    <text x="140" y="142" font-family="Arial" font-size="9" font-weight="bold">B (3 cm)</text>
    <text x="132" y="90" font-family="Arial" font-size="9" font-weight="bold">C</text>
    <text x="82" y="90" font-family="Arial" font-size="9" font-weight="bold">D</text>
    <polygon points="150,130 300,130 270,25 150,25" fill="rgba(37, 99, 235, 0.08)" stroke="#2563eb" stroke-width="2.2"/>
    <text x="145" y="144" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">E</text>
    <text x="295" y="144" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">F (9 cm)</text>
    <text x="272" y="20" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">G</text>
    <text x="142" y="20" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">H</text>
    <text x="100" y="115" font-family="Arial" font-size="9" font-weight="bold" fill="#c2410c">14 cm²</text>
  </svg>`,

  p2_q12: `<svg viewBox="0 0 360 210" width="360" height="210" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <polygon points="50,170 180,170 180,115 140,115 100,65 50,65" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
    <polygon points="50,65 100,65 160,25 110,25" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/>
    <polygon points="100,65 140,115 200,75 160,25" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.8"/>
    <polygon points="140,115 180,115 240,75 200,75" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/>
    <polygon points="180,170 240,130 240,75 180,115" fill="#94a3b8" stroke="#0f172a" stroke-width="1.8"/>
    <line x1="50" y1="170" x2="110" y2="130" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="110" y1="130" x2="240" y2="130" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="110" y1="130" x2="110" y2="25" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <text x="35" y="180" font-family="Arial" font-size="11" font-weight="bold">A</text>
    <text x="180" y="185" font-family="Arial" font-size="11" font-weight="bold">B</text>
    <text x="245" y="135" font-family="Arial" font-size="11" font-weight="bold">C</text>
    <text x="35" y="65" font-family="Arial" font-size="11" font-weight="bold">F</text>
    <text x="100" y="60" font-family="Arial" font-size="11" font-weight="bold">G</text>
    <text x="135" y="128" font-family="Arial" font-size="11" font-weight="bold">K</text>
    <text x="185" y="125" font-family="Arial" font-size="11" font-weight="bold">L</text>
    <text x="105" y="184" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">AB = 6 cm</text>
    <text x="215" y="160" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">BC = 8 cm</text>
    <text x="10" y="120" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">5 cm</text>
    <text x="190" y="150" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">3 cm</text>
    <path d="M 115,205 L 115,185" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="115,178 111,186 119,186" fill="#dc2626"/>
    <text x="122" y="202" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">X (Depan / Front)</text>
    <path d="M 270,165 L 245,150" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="239,146 244,154 249,147" fill="#dc2626"/>
    <text x="260" y="180" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">Y (Sisi / Side)</text>
  </svg>`,

  p2_q15: `<svg viewBox="0 0 340 180" width="340" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="50" y1="45" x2="290" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="50" y1="45" x2="130" y2="95" stroke="#94a3b8" stroke-width="2"/>
    <line x1="50" y1="45" x2="50" y2="145" stroke="#94a3b8" stroke-width="2"/>
    <line x1="290" y1="45" x2="210" y2="95" stroke="#94a3b8" stroke-width="2"/>
    <line x1="290" y1="45" x2="290" y2="145" stroke="#94a3b8" stroke-width="2"/>
    <line x1="130" y1="95" x2="210" y2="95" stroke="#94a3b8" stroke-width="2"/>
    <line x1="130" y1="95" x2="50" y2="145" stroke="#94a3b8" stroke-width="2"/>
    <line x1="210" y1="95" x2="290" y2="145" stroke="#94a3b8" stroke-width="2"/>
    <line x1="50" y1="145" x2="290" y2="145" stroke="#94a3b8" stroke-width="2"/>
    <text x="165" y="38" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">7</text>
    <text x="80" y="65" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">8</text>
    <text x="35" y="100" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">9</text>
    <text x="255" y="65" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">6</text>
    <text x="295" y="100" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">5</text>
    <text x="168" y="90" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">4</text>
    <text x="75" y="125" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">10</text>
    <text x="255" y="125" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">7</text>
    <text x="165" y="160" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">11</text>
    <circle cx="50" cy="45" r="14" fill="#2563eb"/><text x="45" y="49" font-family="Arial" font-size="12" font-weight="bold" fill="#fff">P</text>
    <circle cx="290" cy="45" r="14" fill="#2563eb"/><text x="284" y="49" font-family="Arial" font-size="12" font-weight="bold" fill="#fff">Q</text>
    <circle cx="130" cy="95" r="14" fill="#2563eb"/><text x="125" y="99" font-family="Arial" font-size="12" font-weight="bold" fill="#fff">R</text>
    <circle cx="210" cy="95" r="14" fill="#2563eb"/><text x="205" y="99" font-family="Arial" font-size="12" font-weight="bold" fill="#fff">S</text>
    <circle cx="50" cy="145" r="14" fill="#2563eb"/><text x="46" y="149" font-family="Arial" font-size="12" font-weight="bold" fill="#fff">T</text>
    <circle cx="290" cy="145" r="14" fill="#2563eb"/><text x="285" y="149" font-family="Arial" font-size="12" font-weight="bold" fill="#fff">U</text>
  </svg>`,

  p2_q16: `<svg viewBox="0 0 340 170" width="340" height="170" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <line x1="45" y1="85" x2="130" y2="40" stroke="#94a3b8" stroke-width="2"/>
    <line x1="45" y1="85" x2="130" y2="130" stroke="#94a3b8" stroke-width="2"/>
    <line x1="130" y1="40" x2="130" y2="130" stroke="#94a3b8" stroke-width="2"/>
    <line x1="130" y1="40" x2="230" y2="40" stroke="#94a3b8" stroke-width="2"/>
    <line x1="130" y1="130" x2="230" y2="130" stroke="#94a3b8" stroke-width="2"/>
    <line x1="230" y1="40" x2="230" y2="130" stroke="#94a3b8" stroke-width="2"/>
    <text x="75" y="55" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">6 km</text>
    <text x="70" y="120" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">10 km</text>
    <text x="135" y="90" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">5 km</text>
    <text x="175" y="32" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">8 km</text>
    <text x="175" y="145" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">7 km</text>
    <text x="235" y="90" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">4 km</text>
    <circle cx="45" cy="85" r="16" fill="#16a34a"/><text x="40" y="89" font-family="Arial" font-size="13" font-weight="bold" fill="#fff">S</text>
    <circle cx="130" cy="40" r="14" fill="#0f172a"/><text x="120" y="44" font-family="Arial" font-size="10" font-weight="bold" fill="#fff">M₁</text>
    <circle cx="130" cy="130" r="14" fill="#0f172a"/><text x="120" y="134" font-family="Arial" font-size="10" font-weight="bold" fill="#fff">M₂</text>
    <circle cx="230" cy="40" r="14" fill="#0f172a"/><text x="220" y="44" font-family="Arial" font-size="10" font-weight="bold" fill="#fff">M₃</text>
    <circle cx="230" cy="130" r="14" fill="#0f172a"/><text x="220" y="134" font-family="Arial" font-size="10" font-weight="bold" fill="#fff">M₄</text>
  </svg>`,

  p2_q17: `<svg viewBox="0 0 360 200" width="360" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; display:block; margin:10px 0;">
    <polygon points="50,165 240,165 310,135 120,135" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="35" y="170" font-family="Arial" font-size="11" font-weight="bold">D</text>
    <text x="245" y="170" font-family="Arial" font-size="11" font-weight="bold">C</text>
    <line x1="50" y1="165" x2="50" y2="85" stroke="#0f172a" stroke-width="3"/>
    <line x1="240" y1="165" x2="240" y2="85" stroke="#0f172a" stroke-width="3"/>
    <text x="35" y="85" font-family="Arial" font-size="11" font-weight="bold">A</text>
    <text x="245" y="85" font-family="Arial" font-size="11" font-weight="bold">B</text>
    <text x="15" y="130" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">4 m</text>
    <polygon points="50,85 240,85 310,35 120,35" fill="rgba(59, 130, 246, 0.2)" stroke="#2563eb" stroke-width="2.5"/>
    <text x="110" y="32" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">E</text>
    <text x="315" y="35" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">F</text>
    <line x1="120" y1="135" x2="120" y2="35" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="3,3"/>
    <line x1="310" y1="135" x2="310" y2="35" stroke="#0f172a" stroke-width="1.8"/>
    <text x="135" y="100" font-family="Arial" font-size="10.5" font-weight="bold" fill="#0f172a">AB = 10 m</text>
    <text x="60" y="55" font-family="Arial" font-size="10.5" font-weight="bold" fill="#2563eb">AE = 5 m</text>
    <line x1="50" y1="85" x2="120" y2="85" stroke="#64748b" stroke-dasharray="2,2"/>
    <path d="M 75,85 A 25 25 0 0 0 68,68" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="82" y="78" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">30°</text>
  </svg>`
};

// Export SVGS for injection
fs.writeFileSync(path.join(__dirname, 'svg_data.json'), JSON.stringify(SVGS, null, 2));
console.log("SVG Data written to svg_data.json successfully.");
