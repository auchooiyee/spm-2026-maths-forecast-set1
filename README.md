# SPM 2026 Mathematics Forecast Examination (Set 1)
### Peperiksaan Ramalan SPM 2026 • Matematik (1449)

Comprehensive, high-yield examination forecast package strictly adhering to the latest **KSSM SPM Mathematics (1449)** examination format. Fully bilingual (Bahasa Melayu & English) with interactive web apps, printable PDFs, complete rubrics (P, K, N marks), and full vector diagrams.

---

## 📚 Repository Contents

### 📄 1. Printable PDF Examination Papers (A4 Standard)
- **`SPM_Matematik_Kertas_1_Exam.pdf`** — Paper 1 (1449/1): 40 objective questions (2-column layout, formatted LaTeX formulas).
- **`SPM_Matematik_Kertas_2_Exam.pdf`** — Paper 2 (1449/2): 100 marks subjective paper (Bahagian A, B, C) with candidate answer space and right-aligned mark allocations.
- **`SPM_Matematik_Skema_Pemarkahan.pdf`** — Complete official marking scheme with full step-by-step solutions and rubrics.

### 🌐 2. Interactive Classroom Discussion Web Applications
- **`SPM_Matematik_Interactive_Discussion.html`** — All-in-one classroom discussion portal with live answer evaluation, step-by-step scoring breakdown (P/K/N badges), examiner tips, and Projector Mode.
- **`SPM_Matematik_Kertas_1_Interactive.html`** — Dedicated interactive drill portal for Paper 1.
- **`SPM_Matematik_Kertas_2_Interactive.html`** — Dedicated interactive discussion portal for Paper 2.

### 📝 3. Markdown Sources & Marking Schemes
- **`SPM_Matematik_Kertas_1_Forecast.md`** — Source markdown for Paper 1.
- **`SPM_Matematik_Kertas_2_Forecast.md`** — Source markdown for Paper 2.
- **`SPM_Matematik_Kertas_1_Skema.md`** — Marking scheme source for Paper 1.
- **`SPM_Matematik_Kertas_2_Skema.md`** — Marking scheme source for Paper 2.
- **`SPM_Matematik_Formula_Sheet.md`** — Standard SPM mathematical formula list.

---

## 🎯 Examination Format Structure

### Kertas 1 (1449/1) — Objective
- **Time:** 1 hour 30 minutes
- **Questions:** 40 Multiple Choice Questions (A, B, C, D)
- **Total Marks:** 40 Marks
- **Format:** 2 columns $\times$ 2 rows per question choice

### Kertas 2 (1449/2) — Subjective
- **Time:** 2 hours 30 minutes
- **Total Marks:** 100 Marks
- **Structure:**
  - **Bahagian A (40 Marks):** 10 mandatory questions (3 - 5 marks each).
  - **Bahagian B (45 Marks):** 5 mandatory long-form questions (9 marks each).
  - **Bahagian C (15 Marks):** 2 comprehensive case studies (15 marks each, choose 1).

---

## 💻 Tech Stack & Features
- **Local KaTeX Typography:** Mathematical typesetting using local KaTeX rendering.
- **Vector Graphics:** Responsive inline SVGs with high-DPI scaling.
- **Offline Ready:** Zero external runtime dependencies for PDF generation and local viewing.

---

## 🛠️ Build & PDF Generation

To regenerate the HTML files and PDFs:
```bash
# Generate HTML files
node generate_full_spm.js

# Sync markdown files
node update_md.js

# Compile PDFs using headless browser
node make_pdf.js
```
