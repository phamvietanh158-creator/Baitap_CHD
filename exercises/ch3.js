// ═══════════════════════════════════════════════════════
//  exercises/ch3.js – Bài tập Chương 3: Tính thấm
//  Thêm bài: copy object mẫu, đổi id + nội dung
//  KHÔNG sửa file khác
// ═══════════════════════════════════════════════════════

// ────────────────────────────────────────────────────
// BÀI 1: Gradient thủy lực
// ────────────────────────────────────────────────────
EXERCISES['ch3_b1'] = {
  chapterId: 'ch3',
  title:     'Gradient thủy lực',
  type:      'guided',

  theory: {
    url:     'https://drive.google.com/uc?export=view&id=PASTE_FILE_ID_HERE',
    caption: 'Gradient thủy lực I = ΔH / L (Chương 3 – Bài 1)'
  },

  hint: `
    <div class="hint-title">💡 Công thức</div>
    <div class="hint-formula">I = ΔH / L</div>
    <div style="margin-top:7px;">
      <b>ΔH</b> = chênh lệch cột nước tổng giữa 2 điểm (m)<br>
      <b>L</b>  = chiều dài dòng thấm giữa 2 điểm (m)
    </div>
  `,

  genData(rng) {
    const La  = r2(0.5 + rng() * 1.5);
    const dHa = r2(0.2 + rng() * 0.9);
    const Ia  = r3(dHa / La);

    const hA  = r2(2.5 + rng() * 3.0);
    const hB  = r2(hA - 0.5 - rng() * 1.8);
    const Lb  = r2(1.0 + rng() * 3.0);
    const Ib  = r3((hA - hB) / Lb);

    const AC  = r2(0.4 + rng() * 1.2);
    const BD  = r2(0.8 + rng() * 2.0);
    const Ic  = r3(AC / BD);

    return { La, dHa, Ia, hA, hB, Lb, Ib, AC, BD, Ic };
  },

  statement(d) {
    return `Xác định Gradient thủy lực trong các tình huống sau:<br><br>
      <strong>(a)</strong> Nước thấm đứng qua lớp đất dày <strong>L = ${d.La} m</strong>.
      Tổn thất cột nước <strong>ΔH = ${d.dHa} m</strong>.<br><br>
      <strong>(b)</strong> Nước thấm ngang giữa điểm A và B cách nhau
      <strong>L = ${d.Lb} m</strong>. Cột nước tại A = <strong>${d.hA} m</strong>,
      tại B = <strong>${d.hB} m</strong>.<br><br>
      <strong>(c)</strong> Theo sơ đồ hình vẽ: đoạn <strong>AC = ${d.AC} m</strong>,
      <strong>BD = ${d.BD} m</strong>. Tính I<sub>BD</sub>.`;
  },

  questions: [
    { id:'qa', type:'fill', label:'(a) Gradient thủy lực I =', unit:'–',
      answer: d => d.Ia, tol: 0.015 },
    { id:'qb', type:'fill', label:'(b) Gradient thủy lực I =', unit:'–',
      answer: d => d.Ib, tol: 0.015 },
    { id:'qc', type:'fill', label:'(c) I<sub>BD</sub> =',      unit:'–',
      answer: d => d.Ic, tol: 0.015 },
  ]
};


// ────────────────────────────────────────────────────
// BÀI 2: THÊM BÀI TIẾP THEO Ở ĐÂY
// Copy object trên, đổi 'ch3_b1' → 'ch3_b2'
// ────────────────────────────────────────────────────
