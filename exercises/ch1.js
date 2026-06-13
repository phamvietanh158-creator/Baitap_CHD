// ═══════════════════════════════════════════════════════════════════
//  ch1.js – Chương 1: Tính chất vật lý của đất
//  Phần B2: Cấu tạo đất | Phần B3: Các chỉ tiêu vật lý
// ═══════════════════════════════════════════════════════════════════

// ── KaTeX helpers (delimiter \(...\) inline, \[...\] display) ─────
const KI = t => `\\(${t}\\)`;
const KD = t => `\\[${t}\\]`;
const KBox = t => `<div class="formula-box" style="background:#e3f0fd;border-radius:7px;padding:10px 14px;margin:8px 0;text-align:center;line-height:2;">${KD(t)}</div>`;
const KLines = (...lines) => `<div class="formula-box" style="background:#e3f0fd;border-radius:7px;padding:10px 14px;margin:8px 0;font-size:.9rem;line-height:2.1;">${lines.map(KI).join('<br>')}</div>`;

// Bảng rây chuẩn (dùng chung các bài rây sàng)
const BANG_RAY = `
<table style="border-collapse:collapse;font-size:.82rem;width:100%;margin-top:8px;text-align:center;">
  <thead><tr style="background:#1565c0;color:#fff;">
    <th style="padding:5px 8px;">Rây</th><th style="padding:5px 8px;">Đường kính (mm)</th><th style="padding:5px 8px;">Cỡ hạt trên rây</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:4px 8px;">1</td><td style="padding:4px 8px;">10</td><td style="padding:4px 8px;">${KI('d > 10')}</td></tr>
    <tr style="background:#f5f5f5;"><td style="padding:4px 8px;">2</td><td style="padding:4px 8px;">5</td><td style="padding:4px 8px;">${KI('5 < d \\le 10')}</td></tr>
    <tr><td style="padding:4px 8px;">3</td><td style="padding:4px 8px;">2</td><td style="padding:4px 8px;">${KI('2 < d \\le 5')}</td></tr>
    <tr style="background:#f5f5f5;"><td style="padding:4px 8px;">4</td><td style="padding:4px 8px;">1</td><td style="padding:4px 8px;">${KI('1 < d \\le 2')}</td></tr>
    <tr><td style="padding:4px 8px;">5</td><td style="padding:4px 8px;">0,5</td><td style="padding:4px 8px;">${KI('0{,}5 < d \\le 1')}</td></tr>
    <tr style="background:#f5f5f5;"><td style="padding:4px 8px;">6</td><td style="padding:4px 8px;">0,25</td><td style="padding:4px 8px;">${KI('0{,}25 < d \\le 0{,}5')}</td></tr>
    <tr><td style="padding:4px 8px;">7</td><td style="padding:4px 8px;">0,1</td><td style="padding:4px 8px;">${KI('0{,}1 < d \\le 0{,}25')}</td></tr>
    <tr style="background:#e8f5e9;"><td style="padding:4px 8px;">Đáy</td><td style="padding:4px 8px;">—</td><td style="padding:4px 8px;">${KI('d \\le 0{,}1')}</td></tr>
  </tbody>
</table>`;

// ── SVG sơ đồ 3 pha đất ──────────────────────────────────────────
const _D1 = `<defs>
  <linearGradient id="d1-khi"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E3F2FD"/><stop offset="100%" stop-color="#90CAF9"/></linearGradient>
  <linearGradient id="d1-nuoc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4FC3F7"/><stop offset="100%" stop-color="#0277BD" stop-opacity="0.8"/></linearGradient>
  <linearGradient id="d1-hat"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D7CCC8"/><stop offset="100%" stop-color="#795548"/></linearGradient>
  <pattern id="d1-h" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="10" stroke="#795548" stroke-width="1.2" opacity="0.3"/>
  </pattern>
  <filter id="d1-s"><feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#00000018"/></filter>
</defs>`;

const SVG_3_PHA = `
<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px;display:block;margin:10px auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,.10)">
  ${_D1}
  <rect width="560" height="195" fill="#FAFBFF" rx="10"/>

  <!-- ① ĐẤT TỰ NHIÊN -->
  <rect x="8"  y="8" width="172" height="180" rx="8" fill="#FFFDE7" stroke="#F9A825" stroke-width="1.5"/>
  <text x="94" y="24" text-anchor="middle" font-size="10.5" font-weight="700" fill="#E65100">① Đất tự nhiên (3 pha)</text>
  <!-- Khí -->
  <rect x="18" y="30" width="152" height="42" rx="5" fill="url(#d1-khi)" stroke="#64B5F6" stroke-width="1.2"/>
  <text x="94" y="55" text-anchor="middle" font-size="11" fill="#1565C0" font-weight="600">Khí  V_k</text>
  <!-- Nước -->
  <rect x="18" y="74" width="152" height="52" rx="5" fill="url(#d1-nuoc)" stroke="#0277BD" stroke-width="1.2"/>
  <text x="94" y="103" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Nước  V_w</text>
  <!-- Hạt -->
  <rect x="18" y="128" width="152" height="52" rx="5" fill="url(#d1-hat)" stroke="#5D4037" stroke-width="1.2"/>
  <rect x="18" y="128" width="152" height="52" rx="5" fill="url(#d1-h)" opacity="0.4"/>
  <text x="94" y="157" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Hạt đất  V_h</text>
  <text x="94" y="185" text-anchor="middle" font-size="10" fill="#E65100" font-weight="700">A</text>

  <!-- ② ĐẤT BÃO HÒA -->
  <rect x="196" y="8" width="172" height="180" rx="8" fill="#E8F5E9" stroke="#66BB6A" stroke-width="1.5"/>
  <text x="282" y="24" text-anchor="middle" font-size="10.5" font-weight="700" fill="#2E7D32">② Đất bão hòa (2 pha)</text>
  <!-- Nước đầy -->
  <rect x="206" y="30" width="152" height="95" rx="5" fill="url(#d1-nuoc)" stroke="#0277BD" stroke-width="1.2"/>
  <text x="282" y="82" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Nước  V_r = V_w</text>
  <!-- Hạt -->
  <rect x="206" y="127" width="152" height="53" rx="5" fill="url(#d1-hat)" stroke="#5D4037" stroke-width="1.2"/>
  <rect x="206" y="127" width="152" height="53" rx="5" fill="url(#d1-h)" opacity="0.4"/>
  <text x="282" y="157" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Hạt đất</text>
  <text x="282" y="185" text-anchor="middle" font-size="10" fill="#2E7D32" font-weight="700">B</text>

  <!-- ③ ĐẤT KHÔ -->
  <rect x="384" y="8" width="172" height="180" rx="8" fill="#FFF8E1" stroke="#FFB300" stroke-width="1.5"/>
  <text x="470" y="24" text-anchor="middle" font-size="10.5" font-weight="700" fill="#E65100">③ Đất khô (2 pha)</text>
  <!-- Khí đầy -->
  <rect x="394" y="30" width="152" height="95" rx="5" fill="url(#d1-khi)" stroke="#64B5F6" stroke-width="1.2"/>
  <text x="470" y="82" text-anchor="middle" font-size="11" fill="#1565C0" font-weight="600">Khí  V_r = V_k</text>
  <!-- Hạt -->
  <rect x="394" y="127" width="152" height="53" rx="5" fill="url(#d1-hat)" stroke="#5D4037" stroke-width="1.2"/>
  <rect x="394" y="127" width="152" height="53" rx="5" fill="url(#d1-h)" opacity="0.4"/>
  <text x="470" y="157" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Hạt đất</text>
  <text x="470" y="185" text-anchor="middle" font-size="10" fill="#E65100" font-weight="700">C</text>
</svg>`;

// ── SVG sơ đồ quan hệ thể tích - khối lượng ─────────────────────
const SVG_CONG_THUC = `
<svg viewBox="0 0 500 215" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:10px auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,.10)">
  ${_D1}
  <rect width="500" height="215" fill="#FAFBFF" rx="10"/>
  <!-- Cột trái: sơ đồ thể tích -->
  <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1565C0">Thể tích (V)</text>
  <!-- V_k -->
  <rect x="20" y="28" width="140" height="40" rx="5" fill="url(#d1-khi)" stroke="#64B5F6" stroke-width="1.5"/>
  <text x="90" y="52" text-anchor="middle" font-size="10.5" fill="#1565C0" font-weight="600">V_k (khí)</text>
  <!-- V_r ngoặc -->
  <line x1="165" y1="28" x2="165" y2="85" stroke="#7B1FA2" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="168" y="60" font-size="9" fill="#7B1FA2">V_r</text>
  <!-- V_w -->
  <rect x="20" y="70" width="140" height="48" rx="5" fill="url(#d1-nuoc)" stroke="#0277BD" stroke-width="1.5"/>
  <text x="90" y="98" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="600">V_w (nước)</text>
  <!-- V_h -->
  <rect x="20" y="120" width="140" height="68" rx="5" fill="url(#d1-hat)" stroke="#5D4037" stroke-width="1.5"/>
  <rect x="20" y="120" width="140" height="68" rx="5" fill="url(#d1-h)" opacity="0.4"/>
  <text x="90" y="158" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="600">V_h (hạt đất)</text>
  <!-- V tổng -->
  <line x1="8" y1="28"  x2="8"  y2="188" stroke="#C62828" stroke-width="2"/>
  <line x1="4" y1="28"  x2="12" y2="28"  stroke="#C62828" stroke-width="1.5"/>
  <line x1="4" y1="188" x2="12" y2="188" stroke="#C62828" stroke-width="1.5"/>
  <text x="1" y="110" font-size="11" fill="#C62828" font-weight="700" transform="rotate(-90,1,110)">V (tổng)</text>
  <!-- Cột phải: công thức -->
  <text x="345" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1B5E20">Công thức chính</text>
  <rect x="185" y="28" width="300" height="180" rx="8" fill="white" stroke="#E0E0E0" stroke-width="1" filter="url(#d1-s)"/>
  <text x="195" y="48"  font-size="10"   fill="#1565C0">n = V_r / V × 100%     (độ rỗng)</text>
  <text x="195" y="64"  font-size="10"   fill="#1565C0">m = V_h / V            (độ đặc)</text>
  <text x="195" y="80"  font-size="10"   fill="#1565C0">e = V_r / V_h          (hệ số rỗng)</text>
  <text x="195" y="96"  font-size="10"   fill="#1565C0">S = V_w / V_r          (độ bão hòa)</text>
  <text x="195" y="112" font-size="10"   fill="#1565C0">w = Q_w / Q_h × 100%   (độ ẩm)</text>
  <line x1="190" y1="118" x2="480" y2="118" stroke="#E0E0E0" stroke-width="1"/>
  <text x="195" y="133" font-size="10"   fill="#C62828">γ_tn = Q/V × 10         (kN/m³)</text>
  <text x="195" y="149" font-size="10"   fill="#C62828">γ_k  = Q_h/V × 10</text>
  <text x="195" y="165" font-size="10"   fill="#C62828">γ_bh = (Δ−1)γ_w/(1+e) + γ_w</text>
  <text x="195" y="181" font-size="10"   fill="#C62828">γ_dn = γ_bh − γ_w</text>
  <text x="195" y="197" font-size="10"   fill="#555">n + m = 1  |  e = n/(1−n)</text>
</svg>`;

// ── LÝ THUYẾT HTML ────────────────────────────────────────────────
const LY_THUYET_CAU_TAO = `
<div class="theory-block">
  <div class="theory-label">📖 CẤU TẠO ĐẤT – 3 THÀNH PHẦN</div>
  ${SVG_3_PHA}
  <table style="border-collapse:collapse;font-size:.82rem;width:100%;margin-top:8px;">
    <thead><tr style="background:#1565c0;color:#fff;text-align:center;">
      <th style="padding:5px 8px;">Trạng thái</th>
      <th style="padding:5px 8px;">Thành phần</th>
      <th style="padding:5px 8px;">Đặc điểm</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:5px 8px;font-weight:700;">Đất tự nhiên</td><td style="padding:5px 8px;">Hạt + Nước + Khí</td><td style="padding:5px 8px;">3 pha – trạng thái thông thường</td></tr>
      <tr style="background:#e8f5e9;"><td style="padding:5px 8px;font-weight:700;">Đất bão hòa</td><td style="padding:5px 8px;">Hạt + Nước</td><td style="padding:5px 8px;">2 pha – lỗ rỗng đầy nước, S=1</td></tr>
      <tr><td style="padding:5px 8px;font-weight:700;">Đất khô</td><td style="padding:5px 8px;">Hạt + Khí</td><td style="padding:5px 8px;">2 pha – không có nước, w=0</td></tr>
    </tbody>
  </table>
</div>`;

const LY_THUYET_CHI_TIEU = `
<div class="theory-block">
  <div class="theory-label">📖 CÁC CHỈ TIÊU VẬT LÝ – Sơ đồ & Công thức</div>
  ${SVG_CONG_THUC}
  ${KLines(
    'n = \\frac{V_r}{V} \\times 100\\% \\quad (\\text{độ rỗng})',
    'm = \\frac{V_h}{V} \\quad (\\text{độ đặc})',
    'e = \\frac{V_r}{V_h} \\quad (\\text{hệ số rỗng})',
    'S = \\frac{V_w}{V_r} \\quad (\\text{độ bão hòa})',
    'w = \\frac{Q_w}{Q_h} \\times 100\\% \\quad (\\text{độ ẩm})',
    '\\gamma_{tn} = \\frac{Q}{V} \\times 10 \\quad (\\mathrm{kN/m^3})',
    '\\gamma_k = \\frac{Q_h}{V} \\times 10',
    '\\gamma_{bh} = \\frac{(\\Delta-1)\\gamma_w}{1+e} + \\gamma_w',
    '\\gamma_{dn} = \\gamma_{bh} - \\gamma_w',
    'n + m = 1 \\;|\\; e = \\frac{n}{1-n}'
  )}
</div>`;

// ═══════════════════════════════════════════════════════════════════
//  PHẦN B2 – CẤU TẠO ĐẤT
// ═══════════════════════════════════════════════════════════════════

EXERCISES['ch1_b2_01'] = {
  chapterId: 'ch1',
  title: '1.1 – Nhận biết 3 pha đất (tự nhiên, bão hòa, khô)',
  type: 'guided',
  theoryHTML: LY_THUYET_CAU_TAO,
  hint: `<div class="hint-title">💡 Nhớ: A có cả 3 pha (khí+nước+hạt) → Tự nhiên. B chỉ có nước+hạt → Bão hòa. C chỉ có khí+hạt → Khô.</div>`,
  genData(rng){ return {}; },
  statement(d){ return 'Đất cấu tạo gồm 3 thành phần: hạt đất, nước và khí. Nhìn vào hình minh họa 3 pha (A-B-C) ở phần lý thuyết, hãy xác định đúng tên từng loại đất.'; },
  questions: [
    { id:'q1', type:'mcq', label:'Hình A – B – C lần lượt là:',
      choices: ()=>[
        'A: Đất tự nhiên – B: Đất bão hòa – C: Đất khô',
        'A: Đất bão hòa – B: Đất tự nhiên – C: Đất khô',
        'A: Đất khô – B: Đất bão hòa – C: Đất tự nhiên',
        'A: Đất tự nhiên – B: Đất khô – C: Đất bão hòa',
      ],
      correctIndex: ()=>0 }
  ]
};

EXERCISES['ch1_b2_02'] = {
  chapterId: 'ch1',
  title: '1.2 – Tính chất nhóm hạt theo kích thước',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 PHÂN CHIA NHÓM HẠT THEO KÍCH THƯỚC</div>
    <table style="border-collapse:collapse;font-size:.81rem;width:100%;margin-top:6px;">
      <thead><tr style="background:#1565c0;color:#fff;">
        <th style="padding:5px 8px;">Nhóm hạt</th><th style="padding:5px 8px;">Kích thước (mm)</th><th style="padding:5px 8px;">Tính chất</th>
      </tr></thead>
      <tbody>
        <tr><td style="padding:4px 8px;">Đá lăn, dăm cuội, sỏi sạn</td><td style="padding:4px 8px;text-align:center;">800 – 2</td><td style="padding:4px 8px;">Thấm nước lớn, không dính, mao dẫn nhỏ</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:4px 8px;">Hạt cát (to, vừa, nhỏ)</td><td style="padding:4px 8px;text-align:center;">2 – 0.05</td><td style="padding:4px 8px;">Dễ thấm nước, không dính, không dẻo</td></tr>
        <tr><td style="padding:4px 8px;">Hạt bụi (to, nhỏ)</td><td style="padding:4px 8px;text-align:center;">0.05 – 0.005</td><td style="padding:4px 8px;">Thấm nước nhỏ, lúc ướt hơi dính, gặp nước <b>nở ra</b></td></tr>
        <tr style="background:#e8f5e9;"><td style="padding:4px 8px;">Hạt sét, hạt keo</td><td style="padding:4px 8px;text-align:center;">&lt; 0.005</td><td style="padding:4px 8px;">Hầu như <b>không thấm</b>, khi ẩm có tính dẻo, dính lớn</td></tr>
      </tbody>
    </table>
  </div>`,
  hint: `<div class="hint-title">💡 Hạt đất rời (cát, sỏi): thấm nước lớn, KHÔNG có tính dính. Hạt sét: gần như không thấm, có tính dính lớn.</div>`,
  genData(rng){ return {}; },
  statement(d){ return 'Dựa vào bảng phân chia nhóm hạt theo kích thước, chọn nhận xét đúng:'; },
  questions: [
    { id:'q1', type:'mcq', label:'Nhận xét đúng về tính chất nhóm hạt:',
      choices: ()=>[
        'Kích thước hạt càng to, tính thấm nước càng nhỏ, tính dính lớn',
        'Các hạt sét có tính thấm nước lớn, có tính dính lớn',
        'Các hạt đất rời có tính thấm nước lớn, không có tính dính',
        'Các hạt bụi gặp nước co vào, tính thấm nước lớn',
      ],
      correctIndex: ()=>2 }
  ]
};

EXERCISES['ch1_b2_03'] = {
  chapterId: 'ch1',
  title: '1.3 – TN rây sàng: đọc bảng rây',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 THÍ NGHIỆM RÂY SÀNG</div>
    <div style="font-size:.85rem;line-height:1.8;margin-top:6px;">
      <b>Nguyên tắc:</b> Rây xếp từ trên xuống, đường kính to → nhỏ.<br>
      Đất lọt qua rây = kích thước ${KI('d')} nhỏ hơn đường kính rây đó.<br>
      Đất <b>trên rây</b> = kích thước ${KI('d')} lớn hơn đường kính rây đó.<br>
      Hạt nằm giữa 2 rây liên tiếp = kích thước trong khoảng đó.
    </div>
    <div style="background:#e3f0fd;border-radius:7px;padding:8px 14px;margin-top:8px;font-size:.84rem;">
      <b>Bảng rây mẫu:</b>
      ${BANG_RAY}
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Đất <b>trên</b> Rây số 3 (${KI('d=2\\,\\mathrm{mm}'})}) nghĩa là hạt có ${KI('d > 2\\,\\mathrm{mm}')}. Rây số 2 phía trên có ${KI('d=5\\,\\mathrm{mm}'})}, nên hạt trên rây 3 có ${KI('2\\,\\mathrm{mm} < d \\le 5\\,\\mathrm{mm}')}.</div>`,
  genData(rng){
    const a = Math.floor(1 + rng()*199);
    return {a, m3: 100 + a};
  },
  statement(d){ return `TN rây sàng: Rây số 3 có đường kính 2 mm, khối lượng đất trên rây là <b>${d.m3} g</b>. Điều đó có nghĩa là:`; },
  questions: [
    { id:'q1', type:'mcq', label:'Kích thước các hạt trên Rây số 3:',
      choices: ()=>[
        'Kích thước hạt lớn hơn 5,0 mm',
        'Kích thước hạt lớn hơn 2,0 mm',
        'Kích thước hạt lớn hơn 2,0 mm và nhỏ hơn hoặc bằng 5,0 mm',
        'Kích thước hạt nhỏ hơn 2,0 mm',
      ],
      correctIndex: ()=>2 }
  ]
};

EXERCISES['ch1_b2_04'] = {
  chapterId: 'ch1',
  title: '1.4 – TN rây sàng: xác định khối lượng hạt theo khoảng kích thước',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 ĐỌC KẾT QUẢ RÂY SÀNG</div>
    <div style="font-size:.85rem;line-height:1.8;margin-top:6px;">
      Hạt có kích thước từ ${KI('d_1')} đến ${KI('d_2')} (${KI('d_1 < d_2')}) nằm trên rây có đường kính ${KI('d_1')}<br>
      (vì lọt qua rây ${KI('d_2')} nhưng không lọt qua rây ${KI('d_1')}).<br><br>
      <b>Ví dụ:</b> Hạt ${KI('0{,}5 < d \\le 1\\,\\mathrm{mm}')} → nằm trên Rây số 5 (${KI('d=0{,}5\\,\\mathrm{mm}')})
    </div>
    ${BANG_RAY}
  </div>`,
  hint: `<div class="hint-title">💡 Hạt ${KI('0{,}5 < d \\le 1\\,\\mathrm{mm}')}: lọt qua rây 1 mm nhưng không lọt qua rây 0,5 mm → nằm trên Rây số 5 (${KI('d=0{,}5\\,\\mathrm{mm}')}), khối lượng đọc tại cột Rây 5.</div>`,
  genData(rng){
    const a = Math.floor(1 + rng()*199);
    const m4 = 60 + a;
    return {a, m4};
  },
  statement(d){ return `Bảng rây sàng: Rây 1:10 mm (${45+d.a} g), Rây 2:5 mm (${25+d.a} g), Rây 3:2 mm (${100+d.a} g), Rây 4:1 mm (<b>${d.m4} g</b>), Rây 5:0,5 mm (${5+5*d.a} g), Rây 6:0,25 mm (${20+3*d.a} g), Rây 7:0,1 mm (${15+2*d.a} g).<br>Khối lượng các hạt có kích thước <b>${KI('0{,}5 < d \\le 1\\,\\mathrm{mm}')}</b> là:`; },
  questions: [
    { id:'q1', type:'mcq', label:`Khối lượng hạt ${KI('0{,}5 < d \\le 1\\,\\mathrm{mm}')}:`,
      choices: d=>[
        `Rây số 3, khối lượng ${100+d.a} g`,
        `Rây số 4, khối lượng ${d.m4} g`,
        `Rây số 5, khối lượng ${5+5*d.a} g`,
        `Rây số 7, khối lượng ${15+2*d.a} g`,
      ],
      correctIndex: ()=>2 }
  ]
};

EXERCISES['ch1_b2_05'] = {
  chapterId: 'ch1',
  title: '1.5 – TN rây sàng: khối lượng hạt kích thước < ngưỡng',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 KHỐI LƯỢNG HẠT CÓ KÍCH THƯỚC NHỎ HƠN NGƯỠNG</div>
    <div style="font-size:.85rem;line-height:1.8;">
      Khối lượng hạt có ${KI('d < d_0')} = tổng khối lượng trên tất cả các rây phía dưới rây ${KI('d_0')}.<br>
      Hoặc = tổng khối lượng hạt lọt qua rây ${KI('d_0')} (đáy hộp + các rây nhỏ hơn).
    </div>
    ${BANG_RAY}
  </div>`,
  hint: `<div class="hint-title">💡 Hạt ${KI('d < 0{,}25\\,\\mathrm{mm}')} = lọt qua rây 0,25 mm = khối lượng trên Rây 7 + đáy hộp. Ở bài này ≈ khối lượng Rây 7.</div>`,
  genData(rng){
    const a = Math.floor(1 + rng()*199);
    const m7 = 15 + 2*a;
    const m6 = 20 + 3*a;
    const m5 = 5  + 5*a;
    const m4 = 60 +   a;
    const mtotal = (45+a)+(25+a)+(100+a)+(60+a)+(5+5*a)+(20+3*a)+(15+2*a);
    // hạt < 0.25mm = m7 + phần đáy (giả sử đáy = 0 để đơn giản, thực tế = lọt qua rây 7)
    // Bài hỏi < 0.25mm = trên rây 7 (0.1mm) = m7 (đơn giản hoá)
    // hạt < 0.5mm = m6 + m7
    const lt025 = m7;
    const lt05  = m6 + m7;
    const lt10  = m5 + m6 + m7;
    const lt50  = m4 + m5 + m6 + m7;
    return {a, m4,m5,m6,m7, lt025, lt05, lt10, lt50, mtotal};
  },
  statement(d){ return `Bảng rây (a=${d.a}): Rây 4:1 mm (${60+d.a} g), Rây 5:0,5 mm (${5+5*d.a} g), Rây 6:0,25 mm (${20+3*d.a} g), Rây 7:0,1 mm (${15+2*d.a} g).<br>Xác định khối lượng các hạt có kích thước <b>${KI('d < 0{,}25\\,\\mathrm{mm}')}</b>:`; },
  questions: [
    { id:'q1', type:'fill', label:`Khối lượng hạt ${KI('d < 0{,}25\\,\\mathrm{mm}')} (g)`, unit:'g', answer: d=>d.lt025, tol:1 }
  ]
};

EXERCISES['ch1_b2_06'] = {
  chapterId: 'ch1',
  title: '1.6 – TN rây sàng: khối lượng hạt < 0.5mm và < 1.0mm',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TỔNG HỢP KHỐI LƯỢNG TÍCH LŨY</div>
    ${KBox('m(d < d_i) = \\sum m_{\\text{rây}\\,\\le d_i}')}
    <div style="font-size:.84rem;margin-top:6px;">Khối lượng hạt ${KI('d < d_i')} = tổng tất cả rây từ ${KI('d_i')} trở xuống (kể cả đáy).</div>
    ${BANG_RAY}
  </div>`,
  hint: `<div class="hint-title">💡 Hạt ${KI('d < 0{,}5\\,\\mathrm{mm}')} = m(Rây 6) + m(Rây 7). Hạt ${KI('d < 1{,}0\\,\\mathrm{mm}')} = m(Rây 5) + m(Rây 6) + m(Rây 7).</div>`,
  genData(rng){
    const a = Math.floor(1 + rng()*199);
    const m7=15+2*a, m6=20+3*a, m5=5+5*a;
    return {a, m7, m6, m5, lt05: m6+m7, lt10: m5+m6+m7};
  },
  statement(d){ return `Bảng rây (a=${d.a}): Rây 5:0,5 mm (${d.m5} g), Rây 6:0,25 mm (${d.m6} g), Rây 7:0,1 mm (${d.m7} g).<br>Xác định khối lượng hạt ${KI('d < 0{,}5\\,\\mathrm{mm}')} và ${KI('d < 1{,}0\\,\\mathrm{mm}')}:`; },
  questions: [
    { id:'q1', type:'fill', label:`Khối lượng hạt ${KI('d < 0{,}5\\,\\mathrm{mm}')} (g)`,  unit:'g', answer: d=>d.lt05,  tol:1 },
    { id:'q2', type:'fill', label:`Khối lượng hạt ${KI('d < 1{,}0\\,\\mathrm{mm}')} (g)`, unit:'g', answer: d=>d.lt10,  tol:1 },
  ]
};

EXERCISES['ch1_b2_07'] = {
  chapterId: 'ch1',
  title: '1.7 – TN rây sàng: hàm lượng tích lũy (%)',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 HÀM LƯỢNG TÍCH LŨY (%)</div>
    ${KBox('P(d < d_0) = \\frac{\\sum m_{d < d_0}}{m_{\\text{tổng}}} \\times 100\\%')}
    <div style="font-size:.84rem;">Tổng khối lượng mẫu = tổng tất cả rây (bao gồm đáy).</div>
    ${BANG_RAY}
  </div>`,
  hint: `<div class="hint-title">💡 ${KI('P(d < d_0) = \\frac{\\text{KL hạt nhỏ hơn } d_0}{\\text{KL mẫu}} \\times 100')}</div>`,
  genData(rng){
    const a = Math.floor(1 + rng()*199);
    const m1=45+a, m2=25+a, m3=100+a, m4=60+a, m5=5+5*a, m6=20+3*a, m7=15+2*a;
    const total = m1+m2+m3+m4+m5+m6+m7;
    const lt05  = m6+m7;
    const lt10  = m5+m6+m7;
    const lt50  = m4+m5+m6+m7;
    const p05 = r2(lt05/total*100);
    const p10 = r2(lt10/total*100);
    const p50 = r2(lt50/total*100);
    return {a,m1,m2,m3,m4,m5,m6,m7,total,lt05,lt10,lt50,p05,p10,p50};
  },
  statement(d){
    return `Bảng rây (a=${d.a}): Rây1:10mm(${d.m1}g), Rây2:5mm(${d.m2}g), Rây3:2mm(${d.m3}g), Rây4:1mm(${d.m4}g), Rây5:0.5mm(${d.m5}g), Rây6:0.25mm(${d.m6}g), Rây7:0.1mm(${d.m7}g).<br>
    Tổng khối lượng mẫu = <b>${d.total}g</b>. Tính hàm lượng tích lũy hạt ${KI('d < 0{,}5\\,\\mathrm{mm}')}, ${KI('d < 1{,}0\\,\\mathrm{mm}')} và ${KI('d < 5{,}0\\,\\mathrm{mm}')}:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'Tổng KL mẫu (g)',     unit:'g',  answer: d=>d.total, tol:1 },
    { id:'q2', type:'fill', label:`${KI('P(d < 0{,}5\\,\\mathrm{mm})')} (%)`,      unit:'%',  answer: d=>d.p05,   tol:0.5 },
    { id:'q3', type:'fill', label:`${KI('P(d < 1{,}0\\,\\mathrm{mm})')} (%)`,      unit:'%',  answer: d=>d.p10,   tol:0.5 },
    { id:'q4', type:'fill', label:`${KI('P(d < 5{,}0\\,\\mathrm{mm})')} (%)`,      unit:'%',  answer: d=>d.p50,   tol:0.5 },
  ]
};

EXERCISES['ch1_b2_08'] = {
  chapterId: 'ch1',
  title: '1.8 – Đường cong cấp phối: đọc bảng % tích lũy',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 ĐƯỜNG CONG CẤP PHỐI HẠT</div>
    <div style="font-size:.85rem;line-height:1.8;margin-top:6px;">
      Bảng cấp phối cho biết <b>hàm lượng tích lũy</b> (%) các hạt có kích thước ≤ d nào đó.<br>
      <b>Hàm lượng từng nhóm</b> = ${KI('P_2 - P_1')} (hiệu 2 giá trị tích lũy liên tiếp).
    </div>
    <div style="background:#e3f0fd;border-radius:7px;padding:8px 14px;margin-top:8px;font-size:.84rem;">
      <b>Bảng cấp phối mẫu:</b>
      <table style="border-collapse:collapse;width:100%;margin-top:6px;text-align:center;font-size:.82rem;">
        <thead><tr style="background:#1565c0;color:#fff;">
          <th style="padding:4px 8px;">${KI('d\\,(\\mathrm{mm})')}</th>
          <th style="padding:4px 8px;">${KI('>2')}</th><th style="padding:4px 8px;">${KI('2\\text{–}1')}</th>
          <th style="padding:4px 8px;">${KI('1\\text{–}0{,}25')}</th><th style="padding:4px 8px;">${KI('0{,}25\\text{–}0{,}05')}</th>
          <th style="padding:4px 8px;">${KI('0{,}05\\text{–}0{,}005')}</th><th style="padding:4px 8px;">${KI('<0{,}005')}</th>
        </tr></thead>
        <tbody>
          <tr><td style="padding:4px 8px;font-weight:700;">HL (%)</td><td>3,2</td><td>9,1</td><td>43,4</td><td>19,3</td><td>13,3</td><td>11,7</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Tích lũy (%)</td><td>100</td><td>96,8</td><td>87,7</td><td>44,3</td><td>25,0</td><td>11,7</td></tr>
        </tbody>
      </table>
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Hàm lượng nhóm ${KI('0{,}05\\text{–}0{,}25\\,\\mathrm{mm}')} = ${KI('P(d<0{,}25) - P(d<0{,}05) = 44{,}3 - 25{,}0 = 19{,}3\\%')}</div>`,
  genData(rng){ return {}; },
  statement(d){ return `Bảng cấp phối: ${KI('d>2')} (3,2%), ${KI('2\\text{–}1')} (9,1%), ${KI('1\\text{–}0{,}25')} (43,4%), ${KI('0{,}25\\text{–}0{,}05')} (19,3%), ${KI('0{,}05\\text{–}0{,}005')} (13,3%), ${KI('<0{,}005')} (11,7%). Tích lũy (%): 100, 96,8, 87,7, 44,3, 25,0, 11,7.<br>Xác định hàm lượng các nhóm hạt:`;},
  questions: [
    { id:'q1', type:'fill', label:`HL nhóm ${KI('0{,}05\\text{–}0{,}25\\,\\mathrm{mm}')} (%)`, unit:'%', answer: ()=>19.3, tol:0.5 },
    { id:'q2', type:'fill', label:`HL nhóm ${KI('0{,}25\\text{–}1{,}00\\,\\mathrm{mm}')} (%)`, unit:'%', answer: ()=>43.4, tol:0.5 },
    { id:'q3', type:'fill', label:`${KI('P(d < 0{,}05\\,\\mathrm{mm})')} (%)`,       unit:'%', answer: ()=>25.0, tol:0.5 },
    { id:'q4', type:'fill', label:`${KI('P(d < 2{,}0\\,\\mathrm{mm})')} (%)`,        unit:'%', answer: ()=>96.8, tol:0.5 },
  ]
};

EXERCISES['ch1_b2_09'] = {
  chapterId: 'ch1',
  title: '1.9 – MCQ: Nước trong đất – nước liên kết',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 NƯỚC TRONG ĐẤT</div>
    <table style="border-collapse:collapse;font-size:.82rem;width:100%;margin-top:6px;">
      <thead><tr style="background:#1565c0;color:#fff;"><th style="padding:5px 8px;">Loại nước</th><th style="padding:5px 8px;">Đặc điểm</th></tr></thead>
      <tbody>
        <tr><td style="padding:4px 8px;font-weight:700;">Nước liên kết</td><td style="padding:4px 8px;">Bám chặt quanh hạt sét do lực điện phân tử. Tạo <b>tính dính</b>. Không chịu tác dụng trọng lực. <b>Chỉ có trong hạt sét</b>.</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Nước tự do</td><td style="padding:4px 8px;">Di chuyển được dưới tác dụng trọng lực và gradient thủy lực. Có trong mọi loại đất.</td></tr>
        <tr><td style="padding:4px 8px;font-weight:700;">Nước mao dẫn</td><td style="padding:4px 8px;">Dâng lên do sức căng bề mặt. Quan trọng ở đất hạt mịn.</td></tr>
      </tbody>
    </table>
  </div>`,
  hint: `<div class="hint-title">💡 Nước liên kết tạo nên tính Dính của đất sét. Hạt cát KHÔNG có nước liên kết vì không có điện tích bề mặt.</div>`,
  genData(rng){ return {}; },
  statement(d){ return 'Nước trong đất đóng vai trò quan trọng. Chọn nhận xét đúng về nước liên kết:'; },
  questions: [
    { id:'q1', type:'mcq', label:'Nhận xét đúng về nước liên kết:',
      choices: ()=>[
        'Nước liên kết có trong hạt sét và hạt cát',
        'Nước liên kết tạo nên tính Dính của đất',
        'Nước liên kết làm chậm quá trình biến dạng',
        'Trong đất rời có cả nước liên kết và nước tự do',
      ],
      correctIndex: ()=>1 }
  ]
};

// ═══════════════════════════════════════════════════════════════════
//  PHẦN B3 – CÁC CHỈ TIÊU VẬT LÝ
// ═══════════════════════════════════════════════════════════════════

// Helper: tạo bộ số liệu B3 loại 1 (cho Q, Qk, V, Vh)
// ── FIX: thay thế _genB3_type1 cũ (công thức a/2 gây Q < Qk) ──
// Dán đoạn này VÀO ĐẦU ch1.js, TRƯỚC dòng khai báo cũ
// (hoặc tìm function _genB3_type1 cũ và thay toàn bộ thân hàm)

function _genB3_type1(rng) {
  // Sinh từ các đại lượng vật lý trực tiếp → đảm bảo luôn hợp lệ
  const Vh  = r2(28 + rng()*28);          // cm³ thể tích hạt: 28–56
  const Vr  = r2(14 + rng()*32);          // cm³ thể tích lỗ rỗng: 14–46
  const V   = r2(Vh + Vr);                // V tổng (luôn > Vh)
  const g_h = r2(2.62 + rng()*0.3);       // g/cm³, tỷ trọng hạt: 2.62–2.92
  const Qk  = r2(Vh * g_h);               // g – KL đất khô
  const w   = r2(9   + rng()*27);         // % độ ẩm: 9–36%
  const Qw  = r2(Qk  * w / 100);          // g – KL nước
  const Q   = r2(Qk  + Qw);               // g – KL đất tự nhiên (luôn > Qk)
  const Vw  = r2(Qw);                     // cm³ (γ_w = 1 g/cm³)

  // Các chỉ tiêu
  const n    = r3(Vr / V);
  const m    = r3(Vh / V);
  const e    = r3(Vr / Vh);
  const S    = r3(Math.min(Vw / Vr, 1.0));
  const g_tn = r3(Q  / V * 10);           // kN/m³
  const g_k  = r3(Qk / V * 10);
  const g_bh = r3((Qk + Vr) / V * 10);   // lỗ rỗng đầy nước
  const g_dn = r3(g_bh - 10);
  const g_hat= r3(Qk / Vh * 10);

  return {Q, Qk, V, Vh, Qw, Vr, Vw, n, m, e, S, w, g_tn, g_k, g_bh, g_dn, g_h: g_hat};
}


// Helper: tạo bộ số liệu B3 loại 2 (cho w, γ_tn, Δ)
function _genB3_type2(rng) {
  const a    = Math.floor(1 + rng()*199);
  const w    = r2(16 + a/5);       // %
  const g_tn = r2(17 + a/20);      // kN/m³
  const D    = r3(2.655 + 0.005*a);// tỷ trọng hạt Δ
  const gw   = 10;
  const g_k  = r3(g_tn / (1 + 0.01*w));
  const n    = r3(1 - g_k/(D*gw));
  const e    = r3(n/(1-n));
  const S    = r3(0.01*w*D/e);
  const g_bh = r3((D-1)*gw/(1+e) + gw);
  const g_dn = r3(g_bh - gw);
  return {a, w, g_tn, D, g_k, n, e, S, g_bh, g_dn};
}

// ── B3 Bộ 1: 10 chỉ tiêu từ Q, Qk, V, Vh ──────────────────────

EXERCISES['ch1_b3_01'] = {
  chapterId: 'ch1',
  title: '1.10 – Chỉ tiêu vật lý từ TN (độ rỗng n, độ đặc m)',
  type: 'guided',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 ${KI('n = V_r/V')} (%), ${KI('m = V_h/V')}. Với ${KI('V_r = V - V_h')}.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất TN cho: ${KI('Q')} = <b>${d.Q} g</b>, ${KI('Q_k')} = <b>${d.Qk} g</b>, ${KI('V')} = <b>${d.V} cm³</b>, ${KI('V_h')} = <b>${d.Vh} cm³</b>.<br>Xác định ${KI('V_r')}, ${KI('n')} (độ rỗng) và ${KI('m')} (độ đặc):`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('V_r = V - V_h')} (cm³)`,   unit:'cm³', answer: d=>d.Vr, tol:0.1 },
    { id:'q2', type:'fill', label:`${KI('n = V_r/V')}`,              unit:'',    answer: d=>d.n,  tol:0.005 },
    { id:'q3', type:'fill', label:`${KI('m = V_h/V')}`,              unit:'',    answer: d=>d.m,  tol:0.005 },
  ]
};

EXERCISES['ch1_b3_02'] = {
  chapterId: 'ch1',
  title: '1.11 – Chỉ tiêu vật lý: hệ số rỗng e, độ bão hòa S',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 ${KI('e = V_r/V_h')}. ${KI('S = V_w/V_r')} (${KI('V_w \\approx Q_w')} vì ${KI('\\gamma_w = 1\\,\\mathrm{g/cm^3}')}).</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: ${KI('Q')} = <b>${d.Q} g</b>, ${KI('Q_k')} = <b>${d.Qk} g</b>, ${KI('V')} = <b>${d.V} cm³</b>, ${KI('V_h')} = <b>${d.Vh} cm³</b>.<br>${KI('V_r')} = ${d.Vr} cm³. Xác định ${KI('e')} và ${KI('S')}:`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('Q_w = Q - Q_k')} (g)`,      unit:'g',   answer: d=>d.Qw, tol:0.1 },
    { id:'q2', type:'fill', label:`${KI('V_w \\approx Q_w')} (cm³)`,         unit:'cm³', answer: d=>d.Vw, tol:0.1 },
    { id:'q3', type:'fill', label:`${KI('e = V_r/V_h')}`,             unit:'',    answer: d=>d.e,  tol:0.005 },
    { id:'q4', type:'fill', label:`${KI('S = V_w/V_r')}`,             unit:'',    answer: d=>d.S,  tol:0.005 },
  ]
};

EXERCISES['ch1_b3_03'] = {
  chapterId: 'ch1',
  title: '1.12 – Chỉ tiêu vật lý: độ ẩm w, trọng lượng riêng tự nhiên γ_tn',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 ${KI('w = Q_w/Q_k \\times 100')} (%). ${KI('\\gamma_{tn} = Q/V \\times 10')} (đổi g/cm³ → kN/m³).</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: ${KI('Q')} = <b>${d.Q} g</b>, ${KI('Q_k')} = <b>${d.Qk} g</b>, ${KI('V')} = <b>${d.V} cm³</b>.<br>Xác định ${KI('w')} (%) và ${KI('\\gamma_{tn}')} (kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('w = Q_w/Q_k \\times 100')} (%)`,    unit:'%',     answer: d=>d.w,    tol:0.2 },
    { id:'q2', type:'fill', label:`${KI('\\gamma_{tn} = Q/V \\times 10')} (kN/m³)`, unit:'kN/m³', answer: d=>d.g_tn, tol:0.05 },
  ]
};

EXERCISES['ch1_b3_04'] = {
  chapterId: 'ch1',
  title: '1.13 – Chỉ tiêu vật lý: γ_khô, γ_bão hòa, γ_đẩy nổi, γ_hạt',
  type: 'guided',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 ${KI('\\gamma_k = Q_k/V \\times 10')}. ${KI('\\gamma_{bh} = (Q_k+V_r)/V \\times 10')}. ${KI('\\gamma_{dn} = \\gamma_{bh} - 10')}. ${KI('\\gamma_h = Q_k/V_h \\times 10')}.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: ${KI('Q_k')} = <b>${d.Qk} g</b>, ${KI('V')} = <b>${d.V} cm³</b>, ${KI('V_h')} = <b>${d.Vh} cm³</b>, ${KI('V_r')} = <b>${d.Vr} cm³</b>.<br>Xác định ${KI('\\gamma_k')}, ${KI('\\gamma_{bh}')}, ${KI('\\gamma_{dn}')} và ${KI('\\gamma_h')} (kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('\\gamma_k = Q_k/V \\times 10')} (kN/m³)`,       unit:'kN/m³', answer: d=>d.g_k,  tol:0.05 },
    { id:'q2', type:'fill', label:`${KI('\\gamma_{bh} = (Q_k+V_r)/V \\times 10')} (kN/m³)`,unit:'kN/m³', answer: d=>d.g_bh, tol:0.05 },
    { id:'q3', type:'fill', label:`${KI('\\gamma_{dn} = \\gamma_{bh} - 10')} (kN/m³)`,        unit:'kN/m³', answer: d=>d.g_dn, tol:0.05 },
    { id:'q4', type:'fill', label:`${KI('\\gamma_h = Q_k/V_h \\times 10')} (kN/m³)`,      unit:'kN/m³', answer: d=>d.g_h,  tol:0.05 },
  ]
};

// ── B3 Bộ 2: từ w, γ_tn, Δ ─────────────────────────────────────

EXERCISES['ch1_b3_05'] = {
  chapterId: 'ch1',
  title: '1.14 – Chỉ tiêu từ w, γ_tn, Δ: tính γ_k, n, e',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TÍNH CHỈ TIÊU TỪ w, γ_tn, Δ</div>
    ${KLines(
      '\\gamma_k = \\frac{\\gamma_{tn}}{1 + 0{,}01w}',
      'n = 1 - \\frac{\\gamma_k}{\\Delta \\cdot \\gamma_w} \\quad [\\gamma_w = 10\\,\\mathrm{kN/m^3}]',
      'e = \\frac{n}{1-n}'
    )}
  </div>`,
  hint: `<div class="hint-title">💡 Tính ${KI('\\gamma_k')} trước, rồi ${KI('n = 1 - \\gamma_k/(\\Delta \\cdot 10)')}, cuối cùng ${KI('e = n/(1-n)')}.</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Mẫu đất có: ${KI('w')} = <b>${d.w}%</b>, ${KI('\\gamma_{tn}')} = <b>${d.g_tn} kN/m³</b>, ${KI('\\Delta')} = <b>${d.D}</b>.<br>Xác định ${KI('\\gamma_k')}, ${KI('n')} và ${KI('e')}:`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('\\gamma_k = \\gamma_{tn}/(1+0{,}01w)')} (kN/m³)`, unit:'kN/m³', answer: d=>d.g_k, tol:0.05 },
    { id:'q2', type:'fill', label:`${KI('n = 1 - \\gamma_k/(\\Delta \\cdot \\gamma_w)')}`,           unit:'',      answer: d=>d.n,   tol:0.005 },
    { id:'q3', type:'fill', label:`${KI('e = n/(1-n)')}`,                    unit:'',      answer: d=>d.e,   tol:0.005 },
  ]
};

EXERCISES['ch1_b3_06'] = {
  chapterId: 'ch1',
  title: '1.15 – Chỉ tiêu từ w, γ_tn, Δ: tính S, γ_bh, γ_dn',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TÍNH γ_bh, γ_dn, S</div>
    ${KLines(
      'S = \\frac{0{,}01 \\cdot w \\cdot \\Delta}{e}',
      '\\gamma_{bh} = \\frac{(\\Delta-1)\\gamma_w}{1+e} + \\gamma_w',
      '\\gamma_{dn} = \\gamma_{bh} - \\gamma_w \\quad [\\gamma_w = 10\\,\\mathrm{kN/m^3}]'
    )}
  </div>`,
  hint: `<div class="hint-title">💡 Dùng ${KI('e')} đã tính. ${KI('S = 0{,}01w\\Delta/e')}. ${KI('\\gamma_{bh} = (\\Delta-1)\\times 10/(1+e)+10')}.</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Mẫu đất: ${KI('w')} = <b>${d.w}%</b>, ${KI('\\Delta')} = <b>${d.D}</b>, ${KI('e')} = <b>${d.e}</b> (đã tính).<br>Xác định ${KI('S')}, ${KI('\\gamma_{bh}')} và ${KI('\\gamma_{dn}')}:`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('S = 0{,}01 \\cdot w \\cdot \\Delta/e')}`,                   unit:'',      answer: d=>d.S,    tol:0.005 },
    { id:'q2', type:'fill', label:`${KI('\\gamma_{bh} = (\\Delta-1)\\cdot 10/(1+e)+10')} (kN/m³)`, unit:'kN/m³', answer: d=>d.g_bh, tol:0.05  },
    { id:'q3', type:'fill', label:`${KI('\\gamma_{dn} = \\gamma_{bh} - 10')} (kN/m³)`,          unit:'kN/m³', answer: d=>d.g_dn, tol:0.05  },
  ]
};

// ── B3 MCQ lý thuyết ────────────────────────────────────────────

EXERCISES['ch1_b3_07'] = {
  chapterId: 'ch1',
  title: '1.16 – MCQ: Định nghĩa hệ số rỗng e, độ rỗng n, độ bão hòa S',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 ĐỊNH NGHĨA CHỈ TIÊU</div>
    <table style="border-collapse:collapse;font-size:.82rem;width:100%;margin-top:6px;">
      <thead><tr style="background:#1565c0;color:#fff;"><th style="padding:5px 8px;">Chỉ tiêu</th><th style="padding:5px 8px;">Định nghĩa</th><th style="padding:5px 8px;">Công thức</th></tr></thead>
      <tbody>
        <tr><td style="padding:4px 8px;font-weight:700;">Hệ số rỗng e</td><td style="padding:4px 8px;">Tỉ số thể tích lỗ rỗng / thể tích hạt</td><td style="padding:4px 8px;">${KI('e = V_r/V_h')}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Độ rỗng n</td><td style="padding:4px 8px;">Tỉ số thể tích lỗ rỗng / thể tích đất (×100%)</td><td style="padding:4px 8px;">${KI('n = V_r/V')}</td></tr>
        <tr><td style="padding:4px 8px;font-weight:700;">Độ bão hòa S</td><td style="padding:4px 8px;">Tỉ số thể tích nước / thể tích lỗ rỗng</td><td style="padding:4px 8px;">${KI('S = V_w/V_r')}</td></tr>
      </tbody>
    </table>
  </div>`,
  hint: `<div class="hint-title">💡 e = V_r/V_h (chia cho hạt, không phải chia cho đất). n = V_r/V (chia cho thể tích đất).</div>`,
  genData(rng){ return {}; },
  statement(d){ return 'Trả lời các câu hỏi định nghĩa chỉ tiêu vật lý:'; },
  questions: [
    { id:'q1', type:'mcq', label:'Hệ số rỗng e của đất là:',
      choices: ()=>[
        'Tỷ số giữa thể tích lỗ rỗng và thể tích phần hạt đất',
        'Tỷ số giữa thể tích hạt và thể tích đất',
        'Tỷ số giữa thể tích lỗ rỗng và thể tích đất',
        'Cả 3 đáp án trên đều sai',
      ],
      correctIndex: ()=>0 },
    { id:'q2', type:'mcq', label:'Độ bão hòa S của đất là:',
      choices: ()=>[
        'Tỷ số giữa thể tích lỗ rỗng và thể tích đất',
        'Tỷ lệ giữa thể tích lỗ rỗng và thể tích hạt đất',
        'Tỷ số giữa thể tích đất và thể tích rỗng',
        'Tỷ số giữa thể tích nước và thể tích lỗ rỗng',
      ],
      correctIndex: ()=>3 },
  ]
};

// ── B3 Bài số tính γ_ướt từ V, Q_ướt, Q_khô, Δ ─────────────────

EXERCISES['ch1_b3_08'] = {
  chapterId: 'ch1',
  title: '1.17 – Tính trọng lượng riêng ướt γ_ướt',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TRỌNG LƯỢNG RIÊNG ƯỚT</div>
    ${KBox('\\gamma_{\\text{ướt}} = \\frac{Q_{\\text{ướt}}}{V} \\times 10 \\quad (\\mathrm{kN/m^3})')}
    <div style="font-size:.83rem;color:#555;">${KI('Q_{\\text{ướt}}')}: khối lượng mẫu ướt (g) | ${KI('V')}: thể tích mẫu (cm³)</div>
  </div>`,
  hint: `<div class="hint-title">💡 ${KI('\\gamma_{\\text{ướt}}')} (kN/m³) = ${KI('Q_{\\text{ướt}}(g)/V(cm^3) \\times 10')}. Ví dụ: ${KI('158{,}4/90 \\times 10 = 17{,}6\\,\\mathrm{kN/m^3}')}.</div>`,
  genData(rng){
    const V    = Math.round(80 + rng()*60);     // cm³
    const g_tn = r2(16.5 + rng()*2.5);          // kN/m³
    const Q_uot= r2(g_tn * V / 10);             // g
    const w    = r2(10 + rng()*25);             // %
    const Q_kho= r2(Q_uot / (1 + 0.01*w));     // g
    const D    = r3(2.55 + rng()*0.15);
    const g_uot= r3(Q_uot / V * 10);
    return {V, Q_uot, Q_kho, D, w, g_uot};
  },
  statement(d){
    return `Mẫu đất có thể tích ${KI('V')} = <b>${d.V} cm³</b>, khối lượng ướt ${KI('Q_{\\text{ướt}}')} = <b>${d.Q_uot} g</b>, khối lượng khô ${KI('Q_k')} = <b>${d.Q_kho} g</b>, tỷ trọng hạt ${KI('\\Delta')} = <b>${d.D}</b>.<br>Tính ${KI('\\gamma_{\\text{ướt}}')} (kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('\\gamma_{\\text{ướt}} = Q_{\\text{ướt}}/V \\times 10')} (kN/m³)`, unit:'kN/m³', answer: d=>d.g_uot, tol:0.05 },
  ]
};

// ── TỔNG HỢP CÔNG THỨC ──────────────────────────────────────────
// (Bài tổng hợp được định nghĩa ở cuối file – ch1_tomtat)

// ═══════════════════════════════════════════════════════════════════
//  BỔ SUNG – CÁC BÀI CÒN THIẾU
// ═══════════════════════════════════════════════════════════════════

// ── B2 bổ sung ──────────────────────────────────────────────────

EXERCISES['ch1_b2_10'] = {
  chapterId: 'ch1',
  title: '1.18 – TN rây sàng: cỡ hạt chiếm tỷ trọng nhiều nhất',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 XÁC ĐỊNH CỠ HẠT CHIẾM ƯU THẾ</div>
    <div style="font-size:.85rem;line-height:1.8;margin-top:6px;">
      Cỡ hạt chiếm <b>tỷ trọng nhiều nhất</b> = nhóm hạt có <b>khối lượng lớn nhất</b> trong bảng rây.<br>
      So sánh khối lượng trên từng rây (đã trừ phần tích lũy).<br><br>
      <b>Lưu ý:</b> Đất trên mỗi rây = hạt có kích thước nằm trong khoảng 2 rây liền kề.
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 So sánh trực tiếp các khối lượng: Rây 3 = 100+a, Rây 4 = 60+a, Rây 5 = 5+5a... Cái nào lớn nhất phụ thuộc a.</div>`,
  genData(rng){
    const a  = Math.floor(1 + rng()*199);
    const ms = [45+a, 25+a, 100+a, 60+a, 5+5*a, 20+3*a, 15+2*a];
    const ds = ['10–5mm', '5–2mm', '2–1mm', '1–0.5mm', '0.5–0.25mm', '0.25–0.1mm', '<0.1mm'];
    const maxIdx = ms.indexOf(Math.max(...ms));
    return {a, ms, ds, maxIdx, maxVal: ms[maxIdx], maxName: ds[maxIdx]};
  },
  statement(d){
    return `Bảng rây (a=${d.a}g): Rây1:10mm(${d.ms[0]}g), Rây2:5mm(${d.ms[1]}g), Rây3:2mm(${d.ms[2]}g), Rây4:1mm(${d.ms[3]}g), Rây5:0.5mm(${d.ms[4]}g), Rây6:0.25mm(${d.ms[5]}g), Rây7:0.1mm(${d.ms[6]}g).<br>
    <b>Cỡ hạt nào chiếm tỷ trọng nhiều nhất?</b>`;
  },
  questions: [
    { id:'q1', type:'fill', label:'Khối lượng lớn nhất (g)',    unit:'g',  answer: d=>d.maxVal, tol:1 },
    { id:'q2', type:'mcq',  label:'Nhóm hạt chiếm ưu thế:',
      choices: d=>[
        `A. Nhóm ${d.ds[0]} (${d.ms[0]}g)`,
        `B. Nhóm ${d.ds[1]} (${d.ms[1]}g)`,
        `C. Nhóm ${d.ds[2]} (${d.ms[2]}g)`,
        `D. Nhóm ${d.ds[3]} (${d.ms[3]}g)`,
      ],
      correctIndex: d => d.maxIdx <= 3 ? d.maxIdx : 3
    },
  ]
};

EXERCISES['ch1_b2_11'] = {
  chapterId: 'ch1',
  title: '1.19 – TN rây sàng: Tính đầy đủ hàm lượng tích lũy và cấp phối',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 BẢNG CẤP PHỐI HẠT ĐẦY ĐỦ</div>
    ${KLines(
      '\\text{HL nhóm (\\%)} = \\frac{m_{\\text{rây}}}{m_{\\text{tổng}}} \\times 100',
      'P(d < d_0) = \\frac{\\sum m_{d<d_0}}{m_{\\text{tổng}}} \\times 100\\%',
      '\\text{HL nhóm} = P_2 - P_1'
    )}
    ${BANG_RAY}
  </div>`,
  hint: `<div class="hint-title">💡 Tổng HL từng nhóm = 100%. ${KI('P(d < 5\\,\\mathrm{mm})')} = 100% − % nhóm ${KI('d > 5\\,\\mathrm{mm}')}.</div>`,
  genData(rng){
    const a   = Math.floor(1 + rng()*199);
    const ms  = [45+a, 25+a, 100+a, 60+a, 5+5*a, 20+3*a, 15+2*a];
    const total = ms.reduce((s,v)=>s+v, 0);
    const pct = ms.map(m => r2(m/total*100));
    // P tích lũy từ nhỏ lên
    const p_tl = [];
    let acc = 0;
    for(let i=ms.length-1; i>=0; i--) acc += pct[i];
    // P(<d) = tổng các nhóm nhỏ hơn d
    const lt01 = r2(pct[6]);
    const lt025= r2(pct[6]+pct[5]);
    const lt05 = r2(pct[6]+pct[5]+pct[4]);
    const lt10 = r2(pct[6]+pct[5]+pct[4]+pct[3]);
    const lt20 = r2(pct[6]+pct[5]+pct[4]+pct[3]+pct[2]);
    const lt50 = r2(pct[6]+pct[5]+pct[4]+pct[3]+pct[2]+pct[1]);
    return {a, ms, total, pct, lt01, lt025, lt05, lt10, lt20, lt50};
  },
  statement(d){
    return `Bảng rây (a=${d.a}): Rây1:10mm(${d.ms[0]}g), Rây2:5mm(${d.ms[1]}g), Rây3:2mm(${d.ms[2]}g), Rây4:1mm(${d.ms[3]}g), Rây5:0.5mm(${d.ms[4]}g), Rây6:0.25mm(${d.ms[5]}g), Rây7:0.1mm(${d.ms[6]}g).<br>
    Tổng = <b>${d.total}g</b>. Tính hàm lượng tích lũy:`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('P(d < 0{,}1\\,\\mathrm{mm})')} (%)`,   unit:'%', answer: d=>d.lt01,  tol:0.5 },
    { id:'q2', type:'fill', label:`${KI('P(d < 0{,}25\\,\\mathrm{mm})')} (%)`,  unit:'%', answer: d=>d.lt025, tol:0.5 },
    { id:'q3', type:'fill', label:`${KI('P(d < 0{,}5\\,\\mathrm{mm})')} (%)`,   unit:'%', answer: d=>d.lt05,  tol:0.5 },
    { id:'q4', type:'fill', label:`${KI('P(d < 1{,}0\\,\\mathrm{mm})')} (%)`,   unit:'%', answer: d=>d.lt10,  tol:0.5 },
    { id:'q5', type:'fill', label:`${KI('P(d < 2{,}0\\,\\mathrm{mm})')} (%)`,   unit:'%', answer: d=>d.lt20,  tol:0.5 },
    { id:'q6', type:'fill', label:`${KI('P(d < 5{,}0\\,\\mathrm{mm})')} (%)`,   unit:'%', answer: d=>d.lt50,  tol:0.5 },
  ]
};

// ── B3 bổ sung ──────────────────────────────────────────────────

EXERCISES['ch1_b3_09'] = {
  chapterId: 'ch1',
  title: '1.20 – Tổng hợp: 10 chỉ tiêu vật lý từ bộ Q, V, Vh',
  type: 'guided',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 Trình tự: ${KI('V_r')} → ${KI('Q_w')} → ${KI('n, m, e, S, w, \\gamma_{tn}, \\gamma_k, \\gamma_{bh}, \\gamma_{dn}')}.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất nguyên thổ cho kết quả TN:<br>
    <table style="border-collapse:collapse;font-size:.88rem;margin:8px 0;">
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Khối lượng đất tự nhiên</td><td style="padding:4px 12px;font-weight:700;">${KI('Q')} = ${d.Q} g</td></tr>
    <tr><td style="padding:4px 12px;">Khối lượng đất sau sấy khô</td><td style="padding:4px 12px;font-weight:700;">${KI('Q_k')} = ${d.Qk} g</td></tr>
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Thể tích đất</td><td style="padding:4px 12px;font-weight:700;">${KI('V')} = ${d.V} cm³</td></tr>
    <tr><td style="padding:4px 12px;">Thể tích hạt đất</td><td style="padding:4px 12px;font-weight:700;">${KI('V_h')} = ${d.Vh} cm³</td></tr>
    </table>
    Tính <b>đầy đủ 10 chỉ tiêu vật lý</b> của đất:`;
  },
  questions: [
    { id:'q1',  type:'fill', label:`${KI('V_r = V - V_h')} (cm³)`,            unit:'cm³',   answer: d=>d.Vr,   tol:0.1  },
    { id:'q2',  type:'fill', label:`${KI('n = V_r/V')} (độ rỗng)`,            unit:'',      answer: d=>d.n,    tol:0.005},
    { id:'q3',  type:'fill', label:`${KI('m = V_h/V')} (độ đặc)`,             unit:'',      answer: d=>d.m,    tol:0.005},
    { id:'q4',  type:'fill', label:`${KI('e = V_r/V_h')} (hệ số rỗng)`,       unit:'',      answer: d=>d.e,    tol:0.005},
    { id:'q5',  type:'fill', label:`${KI('S = V_w/V_r')} (độ bão hòa)`,       unit:'',      answer: d=>d.S,    tol:0.005},
    { id:'q6',  type:'fill', label:`${KI('w = Q_w/Q_k \\times 100')} (%)`,          unit:'%',     answer: d=>d.w,    tol:0.2  },
    { id:'q7',  type:'fill', label:`${KI('\\gamma_{tn} = Q/V \\times 10')} (kN/m³)`,        unit:'kN/m³', answer: d=>d.g_tn, tol:0.05 },
    { id:'q8',  type:'fill', label:`${KI('\\gamma_k = Q_k/V \\times 10')} (kN/m³)`,       unit:'kN/m³', answer: d=>d.g_k,  tol:0.05 },
    { id:'q9',  type:'fill', label:`${KI('\\gamma_{bh}')} (kN/m³)`,                   unit:'kN/m³', answer: d=>d.g_bh, tol:0.05 },
    { id:'q10', type:'fill', label:`${KI('\\gamma_{dn} = \\gamma_{bh} - 10')} (kN/m³)`,       unit:'kN/m³', answer: d=>d.g_dn, tol:0.05 },
  ]
};

EXERCISES['ch1_b3_10'] = {
  chapterId: 'ch1',
  title: '1.21 – Tổng hợp: 10 chỉ tiêu từ w, γ_tn, Δ',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 Trình tự: ${KI('\\gamma_k \\to n \\to e \\to S \\to \\gamma_{bh} \\to \\gamma_{dn}')}.</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Thí nghiệm mẫu đất cho 3 chỉ tiêu cơ bản:<br>
    <table style="border-collapse:collapse;font-size:.88rem;margin:8px 0;">
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Độ ẩm tự nhiên</td><td style="padding:4px 12px;font-weight:700;">${KI('w')} = ${d.w}%</td></tr>
    <tr><td style="padding:4px 12px;">Trọng lượng riêng tự nhiên</td><td style="padding:4px 12px;font-weight:700;">${KI('\\gamma_{tn}')} = ${d.g_tn} kN/m³</td></tr>
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Tỷ trọng hạt</td><td style="padding:4px 12px;font-weight:700;">${KI('\\Delta')} = ${d.D}</td></tr>
    </table>
    Xác định các chỉ tiêu còn lại (${KI('\\gamma_w = 10\\,\\mathrm{kN/m^3}')}):`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('\\gamma_k = \\gamma_{tn}/(1+0{,}01w)')} (kN/m³)`,      unit:'kN/m³', answer: d=>d.g_k,  tol:0.05  },
    { id:'q2', type:'fill', label:`${KI('n = 1 - \\gamma_k/(\\Delta \\cdot \\gamma_w)')}`,               unit:'',      answer: d=>d.n,    tol:0.005 },
    { id:'q3', type:'fill', label:`${KI('e = n/(1-n)')}`,                        unit:'',      answer: d=>d.e,    tol:0.005 },
    { id:'q4', type:'fill', label:`${KI('S = 0{,}01 \\cdot w \\cdot \\Delta/e')}`,                    unit:'',      answer: d=>d.S,    tol:0.005 },
    { id:'q5', type:'fill', label:`${KI('\\gamma_{bh} = (\\Delta-1)\\cdot 10/(1+e)+10')} (kN/m³)`, unit:'kN/m³', answer: d=>d.g_bh, tol:0.05  },
    { id:'q6', type:'fill', label:`${KI('\\gamma_{dn} = \\gamma_{bh} - 10')} (kN/m³)`,          unit:'kN/m³', answer: d=>d.g_dn, tol:0.05  },
  ]
};

EXERCISES['ch1_b3_11'] = {
  chapterId: 'ch1',
  title: '1.22 – Tính γ_ướt, γ_k, w, e từ mẫu đất (bài số)',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TỔNG HỢP TÍNH TỪ V, Q_ướt, Q_k, Δ</div>
    ${KLines(
      '\\gamma_{tn} = \\frac{Q_{\\text{ướt}}}{V} \\times 10 \\quad (\\mathrm{kN/m^3})',
      'w = \\frac{Q_{\\text{ướt}} - Q_k}{Q_k} \\times 100 \\quad (\\%)',
      '\\gamma_k = \\frac{\\gamma_{tn}}{1 + 0{,}01w} \\quad (\\mathrm{kN/m^3})',
      'V_h = \\frac{Q_k}{\\Delta} \\quad (\\mathrm{cm^3})',
      'e = \\frac{V - V_h}{V_h}'
    )}
  </div>`,
  hint: `<div class="hint-title">💡 ${KI('V_h = Q_k/\\Delta')} (cm³). Sau đó ${KI('e = (V-V_h)/V_h')}.</div>`,
  genData(rng){
    const V    = Math.round(85 + rng()*50);
    const g_tn = r2(16.5 + rng()*2.5);
    const Q_uot= r2(g_tn * V / 10);
    const w    = r2(12 + rng()*22);
    const Q_k  = r2(Q_uot / (1 + 0.01*w));
    const D    = r3(2.55 + rng()*0.15);
    const g_tn_ans = r3(Q_uot/V*10);
    const w_ans    = r3((Q_uot-Q_k)/Q_k*100);
    const g_k_ans  = r3(g_tn_ans/(1+0.01*w_ans));
    const Vh_ans   = r3(Q_k/D);          // cm³
    const e_ans    = r3((V-Vh_ans)/Vh_ans);
    return {V, Q_uot, Q_k, D, g_tn_ans, w_ans, g_k_ans, Vh_ans, e_ans};
  },
  statement(d){
    return `Mẫu đất có ${KI('V')} = <b>${d.V} cm³</b>, ${KI('Q_{\\text{ướt}}')} = <b>${d.Q_uot} g</b>, ${KI('Q_k')} = <b>${d.Q_k} g</b>, ${KI('\\Delta')} = <b>${d.D}</b>.<br>Tính các chỉ tiêu:`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('\\gamma_{tn} = Q_{\\text{ướt}}/V \\times 10')} (kN/m³)`, unit:'kN/m³', answer: d=>d.g_tn_ans, tol:0.05 },
    { id:'q2', type:'fill', label:`${KI('w = (Q_{\\text{ướt}}-Q_k)/Q_k \\times 100')} (%)`,unit:'%',    answer: d=>d.w_ans,   tol:0.3  },
    { id:'q3', type:'fill', label:`${KI('\\gamma_k')} (kN/m³)`,                 unit:'kN/m³', answer: d=>d.g_k_ans, tol:0.05 },
    { id:'q4', type:'fill', label:`${KI('V_h = Q_k/\\Delta')} (cm³)`,           unit:'cm³',  answer: d=>d.Vh_ans,  tol:0.2  },
    { id:'q5', type:'fill', label:`${KI('e = (V-V_h)/V_h')}`,             unit:'',     answer: d=>d.e_ans,   tol:0.01 },
  ]
};
// ═══════════════════════════════════════════════════════════════════
//  BỔ SUNG: TRẠNG THÁI ĐẤT + TÊN ĐẤT + TỔNG HỢP CÔNG THỨC
// ═══════════════════════════════════════════════════════════════════

// ── SVG sơ đồ giới hạn Atterberg ─────────────────────────────────
const SVG_ATTERBERG = `
<svg viewBox="0 0 540 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:540px;display:block;margin:10px auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,.10)">
  ${_D1}
  <rect width="540" height="165" fill="#FAFBFF" rx="10"/>
  <!-- Trục w -->
  <line x1="30" y1="118" x2="515" y2="118" stroke="#546E7A" stroke-width="1.5"/>
  <text x="520" y="122" font-size="11" fill="#546E7A" font-weight="700">w →</text>
  <!-- Vùng RẮN -->
  <rect x="35"  y="48" width="110" height="62" rx="6" fill="#FFCCBC" stroke="#E64A19" stroke-width="1.5"/>
  <text x="90"  y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#BF360C">RẮN</text>
  <text x="90"  y="93" text-anchor="middle" font-size="9"  fill="#BF360C">I_L &lt; 0</text>
  <!-- Vùng DẺO -->
  <rect x="170" y="48" width="180" height="62" rx="6" fill="#C8E6C9" stroke="#388E3C" stroke-width="1.5"/>
  <text x="260" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#1B5E20">DẺO</text>
  <text x="260" y="93" text-anchor="middle" font-size="9"  fill="#1B5E20">0 ≤ I_L ≤ 1</text>
  <!-- Vùng CHẢY -->
  <rect x="375" y="48" width="130" height="62" rx="6" fill="#B3E5FC" stroke="#0288D1" stroke-width="1.5"/>
  <text x="440" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#01579B">CHẢY</text>
  <text x="440" y="93" text-anchor="middle" font-size="9"  fill="#01579B">I_L &gt; 1</text>
  <!-- Đường W_p -->
  <line x1="170" y1="42" x2="170" y2="122" stroke="#C62828" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="170" y="135" text-anchor="middle" font-size="11" fill="#C62828" font-weight="700">W_p</text>
  <text x="170" y="148" text-anchor="middle" font-size="9"  fill="#C62828">Giới hạn dẻo</text>
  <!-- Đường W_L -->
  <line x1="375" y1="42" x2="375" y2="122" stroke="#1565C0" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="375" y="135" text-anchor="middle" font-size="11" fill="#1565C0" font-weight="700">W_L</text>
  <text x="375" y="148" text-anchor="middle" font-size="9"  fill="#1565C0">Giới hạn chảy</text>
  <!-- I_p mũi tên -->
  <line x1="172" y1="30" x2="373" y2="30" stroke="#7B1FA2" stroke-width="1.8"/>
  <line x1="172" y1="25" x2="172" y2="35" stroke="#7B1FA2" stroke-width="1.5"/>
  <line x1="373" y1="25" x2="373" y2="35" stroke="#7B1FA2" stroke-width="1.5"/>
  <text x="273" y="24" text-anchor="middle" font-size="10.5" fill="#7B1FA2" font-weight="700">I_p = W_L − W_p</text>
  <!-- I_L công thức -->
  <rect x="32" y="10" width="215" height="16" rx="4" fill="#E3F2FD" stroke="#90CAF9" stroke-width="1"/>
  <text x="140" y="21" text-anchor="middle" font-size="10" fill="#1565C0" font-weight="700">I_L = (w − W_p) / I_p</text>
</svg>`;

// ── LÝ THUYẾT TRẠNG THÁI ĐẤT DÍNH ──────────────────────────────
const LY_THUYET_TRANG_THAI = `
<div class="theory-block">
  <div class="theory-label">📖 TRẠNG THÁI ĐẤT DÍNH – GIỚI HẠN ATTERBERG</div>
  ${SVG_ATTERBERG}
  ${KLines('I_p = W_L - W_p', 'I_L = \\frac{w - W_p}{I_p}')}
  <div style="margin-top:8px;">
  <table style="border-collapse:collapse;font-size:.82rem;width:100%;">
    <thead><tr style="background:#1565c0;color:#fff;text-align:center;">
      <th style="padding:5px 8px;">Trạng thái</th>
      <th style="padding:5px 8px;">Điều kiện I_L</th>
      <th style="padding:5px 8px;">Mô tả</th>
    </tr></thead>
    <tbody>
      <tr style="background:#ffccbc;"><td style="padding:4px 8px;font-weight:700;">Cứng (rắn)</td><td style="padding:4px 8px;text-align:center;">I_L &lt; 0</td><td style="padding:4px 8px;">Cứng, giòn, khó biến dạng</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Nửa cứng</td><td style="padding:4px 8px;text-align:center;">0 ≤ I_L &lt; 0.25</td><td style="padding:4px 8px;">Tương đối cứng</td></tr>
      <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Dẻo cứng</td><td style="padding:4px 8px;text-align:center;">0.25 ≤ I_L &lt; 0.50</td><td style="padding:4px 8px;">Dẻo, khó biến dạng</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Dẻo mềm</td><td style="padding:4px 8px;text-align:center;">0.50 ≤ I_L &lt; 0.75</td><td style="padding:4px 8px;">Dẻo, dễ biến dạng hơn</td></tr>
      <tr style="background:#c8e6c9;"><td style="padding:4px 8px;font-weight:700;">Dẻo chảy</td><td style="padding:4px 8px;text-align:center;">0.75 ≤ I_L ≤ 1.0</td><td style="padding:4px 8px;">Gần chảy</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Chảy</td><td style="padding:4px 8px;text-align:center;">I_L &gt; 1.0</td><td style="padding:4px 8px;">Chảy lỏng</td></tr>
    </tbody>
  </table>
  </div>
</div>`;

// ── LÝ THUYẾT TRẠNG THÁI ĐẤT RỜI ────────────────────────────────
const LY_THUYET_TRANG_THAI_ROI = `
<div class="theory-block">
  <div class="theory-label">📖 TRẠNG THÁI ĐẤT RỜI – ĐỘ CHẶT TƯƠNG ĐỐI D_r</div>
  ${KBox('D_r = \\frac{e_{\\max} - e}{e_{\\max} - e_{\\min}} \\times 100\\%')}
  ${KLines(
    'e: \\text{ hệ số rỗng tự nhiên}',
    'e_{\\max}: \\text{ hệ số rỗng trạng thái rời nhất}',
    'e_{\\min}: \\text{ hệ số rỗng trạng thái chặt nhất}'
  )}
  <table style="border-collapse:collapse;font-size:.82rem;width:100%;margin-top:6px;">
    <thead><tr style="background:#1565c0;color:#fff;text-align:center;">
      <th style="padding:5px 8px;">Trạng thái</th>
      <th style="padding:5px 8px;">D_r (%)</th>
      <th style="padding:5px 8px;">Hệ số rỗng e (cát)</th>
    </tr></thead>
    <tbody>
      <tr style="background:#ffccbc;"><td style="padding:4px 8px;font-weight:700;">Rời</td><td style="padding:4px 8px;text-align:center;">D_r &lt; 33</td><td style="padding:4px 8px;text-align:center;">e &gt; 0.8</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Chặt vừa</td><td style="padding:4px 8px;text-align:center;">33 ≤ D_r &lt; 67</td><td style="padding:4px 8px;text-align:center;">0.6 &lt; e ≤ 0.8</td></tr>
      <tr style="background:#c8e6c9;"><td style="padding:4px 8px;font-weight:700;">Chặt</td><td style="padding:4px 8px;text-align:center;">D_r ≥ 67</td><td style="padding:4px 8px;text-align:center;">e ≤ 0.6</td></tr>
    </tbody>
  </table>
</div>`;

// ─────────────────────────────────────────────────────────────────
//  BÀI 1.23 – Trạng thái đất DÍNH (tính Ip, IL, kết luận)
// ─────────────────────────────────────────────────────────────────
EXERCISES['ch1_tt01'] = {
  chapterId: 'ch1',
  title: '1.23 – Trạng thái đất dính: tính I_p và I_L',
  type: 'guided',
  theoryHTML: LY_THUYET_TRANG_THAI,
  hint: `<div class="hint-title">💡 ${KI('I_p = W_L - W_p')}. ${KI('I_L = (w - W_p)/I_p')}. Rồi tra bảng để kết luận trạng thái.</div>`,
  genData(rng) {
    const Wp = r2(18 + rng()*12);          // giới hạn dẻo
    const Ip = r2(8  + rng()*22);          // chỉ số dẻo
    const WL = r2(Wp + Ip);                // giới hạn chảy
    // w ngẫu nhiên trong khoảng -0.2Ip đến 1.3Ip quanh Wp
    const w  = r2(Wp + (-0.15 + rng()*1.4)*Ip);
    const IL = r3((w - Wp)/Ip);
    let trangThai;
    if      (IL < 0)    trangThai = 'Cứng (rắn)';
    else if (IL < 0.25) trangThai = 'Nửa cứng';
    else if (IL < 0.50) trangThai = 'Dẻo cứng';
    else if (IL < 0.75) trangThai = 'Dẻo mềm';
    else if (IL <= 1.0) trangThai = 'Dẻo chảy';
    else                trangThai = 'Chảy';
    const ttIdx = ['Cứng (rắn)','Nửa cứng','Dẻo cứng','Dẻo mềm','Dẻo chảy','Chảy'].indexOf(trangThai);
    return {Wp, Ip, WL, w, IL, trangThai, ttIdx};
  },
  statement(d) {
    return `Đất sét có ${KI('W_L')} = <b>${d.WL}%</b>, ${KI('W_p')} = <b>${d.Wp}%</b>.<br>
    Độ ẩm tự nhiên ${KI('w')} = <b>${d.w}%</b>.<br>
    Xác định ${KI('I_p')}, ${KI('I_L')} và <b>trạng thái</b> của đất.`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('I_p = W_L - W_p')} (%)`,      unit:'%', answer: d=>d.Ip, tol:0.1 },
    { id:'q2', type:'fill', label:`${KI('I_L = (w - W_p)/I_p')}`,      unit:'',  answer: d=>d.IL, tol:0.01 },
    { id:'q3', type:'mcq',  label:'Trạng thái của đất là:',
      choices: ()=>[
        `${KI('I_L < 0')}: Cứng (rắn)`,
        `${KI('0 \\le I_L < 0{,}25')}: Nửa cứng`,
        `${KI('0{,}25 \\le I_L < 0{,}50')}: Dẻo cứng`,
        `${KI('0{,}50 \\le I_L < 0{,}75')}: Dẻo mềm`,
        `${KI('0{,}75 \\le I_L \\le 1{,}0')}: Dẻo chảy`,
        `${KI('I_L > 1')}: Chảy`,
      ],
      correctIndex: d=>d.ttIdx },
  ]
};

// ─────────────────────────────────────────────────────────────────
//  BÀI 1.24 – Trạng thái đất RỜI (tính Dr, kết luận)
// ─────────────────────────────────────────────────────────────────
EXERCISES['ch1_tt02'] = {
  chapterId: 'ch1',
  title: '1.24 – Trạng thái đất rời: độ chặt tương đối D_r',
  type: 'guided',
  theoryHTML: LY_THUYET_TRANG_THAI_ROI,
  hint: `<div class="hint-title">💡 ${KI('D_r = (e_{\\max}-e)/(e_{\\max}-e_{\\min}) \\times 100\\%')}. ${KI('e')} tự nhiên cần ${KI('e < e_{\\max}')} mới hợp lệ.</div>`,
  genData(rng) {
    const e_min = r3(0.40 + rng()*0.15);
    const e_max = r3(e_min + 0.35 + rng()*0.25);
    // Chọn Dr ngẫu nhiên → tính e
    const Dr_pct = r2(10 + rng()*85);
    const e = r3(e_max - Dr_pct/100*(e_max - e_min));
    let trangThai;
    if      (Dr_pct < 33) trangThai = 'Rời';
    else if (Dr_pct < 67) trangThai = 'Chặt vừa';
    else                  trangThai = 'Chặt';
    const ttIdx = ['Rời','Chặt vừa','Chặt'].indexOf(trangThai);
    return {e_min, e_max, e, Dr_pct, trangThai, ttIdx};
  },
  statement(d) {
    return `Đất cát có ${KI('e')} = <b>${d.e}</b>.<br>
    Từ TN: ${KI('e_{\\max}')} = <b>${d.e_max}</b> (rời nhất), ${KI('e_{\\min}')} = <b>${d.e_min}</b> (chặt nhất).<br>
    Tính ${KI('D_r')} và xác định <b>trạng thái</b> đất.`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('D_r = (e_{\\max}-e)/(e_{\\max}-e_{\\min}) \\times 100')} (%)`, unit:'%', answer: d=>d.Dr_pct, tol:0.5 },
    { id:'q2', type:'mcq',  label:'Trạng thái đất rời:',
      choices: ()=>[
        `${KI('D_r < 33\\%')}: Rời`,
        `${KI('33\\% \\le D_r < 67\\%')}: Chặt vừa`,
        `${KI('D_r \\ge 67\\%')}: Chặt`,
      ],
      correctIndex: d=>d.ttIdx },
  ]
};

// ─────────────────────────────────────────────────────────────────
//  BÀI 1.25 – Xác định tên đất theo TCVN (dựa vào A và cấp phối)
// ─────────────────────────────────────────────────────────────────
const LY_THUYET_TEN_DAT = `
<div class="theory-block">
  <div class="theory-label">📖 XÁC ĐỊNH TÊN ĐẤT THEO TCVN 9362:2012</div>
  <p style="font-size:.84rem;margin-bottom:6px;"><b>Bước 1:</b> Dựa vào cấp phối hạt xác định đất rời hay dính.</p>
  <table style="border-collapse:collapse;font-size:.81rem;width:100%;margin-bottom:8px;">
    <thead><tr style="background:#1565c0;color:#fff;">
      <th style="padding:5px 8px;">Tên đất rời</th>
      <th style="padding:5px 8px;">Điều kiện cấp phối hạt</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:4px 8px;font-weight:700;">Cuội sỏi</td><td style="padding:4px 8px;">${KI('\\%\\, d > 2\\,\\mathrm{mm} \\ge 50\\%')}</td></tr>
      <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Cát thô</td><td style="padding:4px 8px;">${KI('\\%\\, d > 0{,}5\\,\\mathrm{mm} \\ge 50\\%')}</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Cát vừa</td><td style="padding:4px 8px;">${KI('\\%\\, d > 0{,}25\\,\\mathrm{mm} \\ge 50\\%')}</td></tr>
      <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Cát mịn</td><td style="padding:4px 8px;">${KI('\\%\\, d > 0{,}1\\,\\mathrm{mm} \\ge 75\\%')}</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Đất dính</td><td style="padding:4px 8px;">${KI('\\%\\, d < 0{,}005\\,\\mathrm{mm}')} chiếm đáng kể → xét ${KI('I_p')}</td></tr>
    </tbody>
  </table>
  <p style="font-size:.84rem;margin-bottom:6px;"><b>Bước 2 (đất dính):</b> Xác định tên theo ${KI('I_p')}:</p>
  <table style="border-collapse:collapse;font-size:.81rem;width:100%;">
    <thead><tr style="background:#2e7d32;color:#fff;">
      <th style="padding:5px 8px;">Tên đất dính</th>
      <th style="padding:5px 8px;">Chỉ số dẻo ${KI('I_p')} (%)</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:4px 8px;font-weight:700;">Cát pha (Á cát)</td><td style="padding:4px 8px;">${KI('1 \\le I_p < 7')}</td></tr>
      <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Sét pha (Á sét)</td><td style="padding:4px 8px;">${KI('7 \\le I_p < 17')}</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Sét</td><td style="padding:4px 8px;">${KI('I_p \\ge 17')}</td></tr>
    </tbody>
  </table>
</div>`;

EXERCISES['ch1_ten01'] = {
  chapterId: 'ch1',
  title: '1.25 – Xác định tên đất dính theo I_p (TCVN)',
  type: 'guided',
  theoryHTML: LY_THUYET_TEN_DAT,
  hint: `<div class="hint-title">💡 ${KI('I_p = W_L - W_p')}. Á cát: ${KI('1 \\le I_p < 7')}. Á sét: ${KI('7 \\le I_p < 17')}. Sét: ${KI('I_p \\ge 17')}.</div>`,
  genData(rng) {
    const Wp = r2(16 + rng()*14);
    // Chọn loại đất random
    const loaiIdx = Math.floor(rng()*3); // 0=á cát, 1=á sét, 2=sét
    let Ip, tenDat, ttIdx;
    if (loaiIdx === 0) { Ip = r2(1 + rng()*5.9);  tenDat = 'Cát pha (Á cát)'; ttIdx=0; }
    else if (loaiIdx===1){ Ip = r2(7 + rng()*9.9); tenDat = 'Sét pha (Á sét)'; ttIdx=1; }
    else                 { Ip = r2(17+ rng()*18);  tenDat = 'Sét';              ttIdx=2; }
    const WL = r2(Wp + Ip);
    const w  = r2(Wp + rng()*Ip); // w trong vùng dẻo để hợp lý
    const IL = r3((w-Wp)/Ip);
    return {Wp, WL, Ip, w, IL, tenDat, ttIdx};
  },
  statement(d) {
    return `Đất dính có ${KI('W_L')} = <b>${d.WL}%</b>, ${KI('W_p')} = <b>${d.Wp}%</b>, ${KI('w')} = <b>${d.w}%</b>.<br>
    Xác định ${KI('I_p')} và <b>tên đất</b> theo TCVN.`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('I_p = W_L - W_p')} (%)`,  unit:'%', answer: d=>d.Ip, tol:0.1 },
    { id:'q2', type:'mcq',  label:'Tên đất theo TCVN:',
      choices: ()=>[
        `Cát pha (Á cát) – ${KI('1 \\le I_p < 7')}`,
        `Sét pha (Á sét) – ${KI('7 \\le I_p < 17')}`,
        `Sét – ${KI('I_p \\ge 17')}`,
      ],
      correctIndex: d=>d.ttIdx },
  ]
};

EXERCISES['ch1_ten02'] = {
  chapterId: 'ch1',
  title: '1.26 – Xác định tên đất rời theo cấp phối hạt (TCVN)',
  type: 'apply',
  theoryHTML: LY_THUYET_TEN_DAT,
  hint: `<div class="hint-title">💡 Cuội sỏi: ${KI('\\%\\, d>2\\,\\mathrm{mm} \\ge 50\\%')}. Cát thô: ${KI('\\%\\, d>0{,}5\\,\\mathrm{mm} \\ge 50\\%')}. Cát vừa: ${KI('\\%\\, d>0{,}25\\,\\mathrm{mm} \\ge 50\\%')}. Cát mịn: ${KI('\\%\\, d>0{,}1\\,\\mathrm{mm} \\ge 75\\%')}.</div>`,
  genData(rng) {
    // Random chọn loại đất rời
    const loaiIdx = Math.floor(rng()*4);
    let pcts, tenDat, ttIdx;
    // [>2mm, 2-0.5mm, 0.5-0.25mm, 0.25-0.1mm, 0.1-0.05mm, <0.05mm]
    if (loaiIdx===0) {
      // Cuội sỏi: >2mm ≥ 50%
      const p1 = r2(50 + rng()*45);
      const rem= 100-p1;
      const p2 = r2(rem*rng()*0.6); const p3=r2(rem*rng()*0.3);
      const p4 = r2(rem*rng()*0.2); const p5=r2(Math.max(0,rem-p2-p3-p4)*0.5);
      const p6 = r2(Math.max(0,rem-p2-p3-p4-p5));
      pcts=[p1,p2,p3,p4,p5,p6]; tenDat='Cuội sỏi'; ttIdx=0;
    } else if (loaiIdx===1) {
      // Cát thô: %hạt>0.5mm ≥ 50% (gồm cột 0+1)
      const p1=r2(5+rng()*15); const p2=r2(45+rng()*35);
      const rem=100-p1-p2; const p3=r2(rem*rng()*0.4);
      const p4=r2(rem*rng()*0.4); const p5=r2(rem*rng()*0.3);
      const p6=r2(Math.max(0,rem-p3-p4-p5));
      pcts=[p1,p2,p3,p4,p5,p6]; tenDat='Cát thô'; ttIdx=1;
    } else if (loaiIdx===2) {
      // Cát vừa: %hạt>0.25mm ≥ 50%
      const p1=r2(rng()*8); const p2=r2(10+rng()*20);
      const p3=r2(25+rng()*25); const rem=100-p1-p2-p3;
      const p4=r2(rem*rng()*0.4); const p5=r2(rem*rng()*0.3);
      const p6=r2(Math.max(0,rem-p4-p5));
      pcts=[p1,p2,p3,p4,p5,p6]; tenDat='Cát vừa'; ttIdx=2;
    } else {
      // Cát mịn: %hạt>0.1mm ≥ 75%
      const p1=r2(rng()*5); const p2=r2(rng()*10);
      const p3=r2(rng()*15); const p4=r2(45+rng()*30);
      const rem=100-p1-p2-p3-p4; const p5=r2(rem*rng()*0.5);
      const p6=r2(Math.max(0,rem-p5));
      pcts=[p1,p2,p3,p4,p5,p6]; tenDat='Cát mịn'; ttIdx=3;
    }
    // Tính % tích lũy từng nhóm
    const pgt2 = pcts[0];
    const p2to05= pcts[1];
    const p05to025=pcts[2];
    const p025to01=pcts[3];
    const gt05 = r2(pcts[0]+pcts[1]);    // > 0.5mm
    const gt025= r2(pcts[0]+pcts[1]+pcts[2]); // > 0.25mm
    const gt01 = r2(pcts[0]+pcts[1]+pcts[2]+pcts[3]); // > 0.1mm
    return {pcts, tenDat, ttIdx, pgt2, p2to05, gt05, gt025, gt01};
  },
  statement(d) {
    return `Kết quả phân tích hạt (%):<br>
    <table style="border-collapse:collapse;font-size:.85rem;margin:8px 0;">
    <tr style="background:#e3f0fd;">
      <th style="padding:4px 10px;">${KI('d > 2\\,\\mathrm{mm}')}</th>
      <th style="padding:4px 10px;">${KI('2\\text{–}0{,}5\\,\\mathrm{mm}')}</th>
      <th style="padding:4px 10px;">${KI('0{,}5\\text{–}0{,}25\\,\\mathrm{mm}')}</th>
      <th style="padding:4px 10px;">${KI('0{,}25\\text{–}0{,}1\\,\\mathrm{mm}')}</th>
      <th style="padding:4px 10px;">${KI('0{,}1\\text{–}0{,}05\\,\\mathrm{mm}')}</th>
      <th style="padding:4px 10px;">${KI('d < 0{,}05\\,\\mathrm{mm}')}</th>
    </tr>
    <tr style="text-align:center;">
      <td style="padding:4px 10px;">${d.pcts[0]}%</td>
      <td style="padding:4px 10px;">${d.pcts[1]}%</td>
      <td style="padding:4px 10px;">${d.pcts[2]}%</td>
      <td style="padding:4px 10px;">${d.pcts[3]}%</td>
      <td style="padding:4px 10px;">${d.pcts[4]}%</td>
      <td style="padding:4px 10px;">${d.pcts[5]}%</td>
    </tr>
    </table>
    Xác định <b>tên đất rời</b> theo TCVN:`;
  },
  questions: [
    { id:'q1', type:'fill', label:`${KI('\\%\\, d > 2\\,\\mathrm{mm}')} (%)`,       unit:'%', answer: d=>d.pcts[0],  tol:0.5 },
    { id:'q2', type:'fill', label:`${KI('\\%\\, d > 0{,}5\\,\\mathrm{mm}')} (gộp)`, unit:'%', answer: d=>d.gt05,     tol:0.5 },
    { id:'q3', type:'fill', label:`${KI('\\%\\, d > 0{,}25\\,\\mathrm{mm}')} (gộp)`,unit:'%', answer: d=>d.gt025,    tol:0.5 },
    { id:'q4', type:'mcq',  label:'Tên đất theo TCVN:',
      choices: ()=>[
        `Cuội sỏi – ${KI('\\%\\, d>2\\,\\mathrm{mm} \\ge 50\\%')}`,
        `Cát thô – ${KI('\\%\\, d>0{,}5\\,\\mathrm{mm} \\ge 50\\%')}`,
        `Cát vừa – ${KI('\\%\\, d>0{,}25\\,\\mathrm{mm} \\ge 50\\%')}`,
        `Cát mịn – ${KI('\\%\\, d>0{,}1\\,\\mathrm{mm} \\ge 75\\%')}`,
      ],
      correctIndex: d=>d.ttIdx },
  ]
};

// ─────────────────────────────────────────────────────────────────
//  TỔNG HỢP CÔNG THỨC CHƯƠNG 1
// ─────────────────────────────────────────────────────────────────

// Xoá bài tomtat cũ (đã có trong file gốc) và thêm lại đầy đủ
delete EXERCISES['ch1_tomtat'];

EXERCISES['ch1_tomtat'] = {
  chapterId: 'ch1',
  title: '📋 Tổng hợp công thức – Chương 1',
  type: 'guided',
  theoryHTML: `
<style>
.s1b-sec{margin-bottom:16px}
.s1b-sec h4{background:var(--primary);color:#fff;padding:6px 14px;border-radius:7px 7px 0 0;margin:0;font-size:.9rem}
.s1b-body{border:1px solid var(--primary);border-top:none;border-radius:0 0 7px 7px;padding:10px 16px}
.s1b-row{display:flex;gap:8px;align-items:flex-start;margin-bottom:7px;font-size:.84rem}
.s1b-f{background:#e3f0fd;border-radius:5px;padding:6px 10px;min-width:240px;flex-shrink:0}
.s1b-n{color:#555;font-size:.82rem;padding-top:3px}
</style>

<div class="s1b-sec">
  <h4>A. Thành phần thể tích – Khối lượng</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">${KI('V = V_h + V_r = V_h + V_w + V_k')}</div><div class="s1b-n">Tổng thể tích</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('n = V_r/V \\times 100\\%')}</div><div class="s1b-n">Độ rỗng</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('m = V_h/V;\\; n+m=1')}</div><div class="s1b-n">Độ đặc</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('e = V_r/V_h;\\; e=n/(1-n)')}</div><div class="s1b-n">Hệ số rỗng</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('S = V_w/V_r')}</div><div class="s1b-n">Độ bão hòa (0–1)</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('w = Q_w/Q_h \\times 100\\%')}</div><div class="s1b-n">Độ ẩm</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>B. Trọng lượng riêng (kN/m³)</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">${KI('\\gamma_{tn} = Q/V \\times 10')}</div><div class="s1b-n">Tự nhiên</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\gamma_k = Q_h/V \\times 10 = \\gamma_{tn}/(1+0{,}01w)')}</div><div class="s1b-n">Khô</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\gamma_{bh} = \\frac{(\\Delta-1)\\gamma_w}{1+e}+\\gamma_w')}</div><div class="s1b-n">Bão hòa</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\gamma_{dn} = \\gamma_{bh} - \\gamma_w')}</div><div class="s1b-n">Đẩy nổi (${KI('\\gamma_w=10')})</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\gamma_h = Q_h/V_h \\times 10 = \\Delta \\cdot \\gamma_w')}</div><div class="s1b-n">Hạt đất</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>C. Tính từ w, γ_tn, Δ</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">${KI('\\gamma_k = \\gamma_{tn}/(1+0{,}01w)')}</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('n = 1 - \\gamma_k/(\\Delta \\cdot \\gamma_w)')}</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('e = n/(1-n)')}</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('S = 0{,}01 \\cdot w \\cdot \\Delta/e')}</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>D. Trạng thái đất DÍNH – Giới hạn Atterberg</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">${KI('I_p = W_L - W_p')}</div><div class="s1b-n">Chỉ số dẻo (%)</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('I_L = (w - W_p)/I_p')}</div><div class="s1b-n">Độ sệt</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('I_L<0')}: Cứng | ${KI('0 \\le I_L < 0{,}25')}: Nửa cứng</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('0{,}25 \\le I_L < 0{,}5')}: Dẻo cứng | ${KI('0{,}5 \\le I_L < 0{,}75')}: Dẻo mềm</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('0{,}75 \\le I_L \\le 1')}: Dẻo chảy | ${KI('I_L > 1')}: Chảy</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>E. Trạng thái đất RỜI – Độ chặt tương đối</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">${KI('D_r=(e_{\\max}-e)/(e_{\\max}-e_{\\min})\\times 100\\%')}</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('D_r<33\\%')}: Rời | ${KI('33\\% \\le D_r < 67\\%')}: Chặt vừa | ${KI('D_r \\ge 67\\%')}: Chặt</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>F. Tên đất theo TCVN</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">${KI('1 \\le I_p < 7')}: Cát pha</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('7 \\le I_p < 17')}: Sét pha</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('I_p \\ge 17')}: Sét</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\%\\, d>2\\,\\mathrm{mm} \\ge 50\\%')}: Cuội sỏi</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\%\\, d>0{,}5\\,\\mathrm{mm} \\ge 50\\%')}: Cát thô</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\%\\, d>0{,}25\\,\\mathrm{mm} \\ge 50\\%')}: Cát vừa</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\%\\, d>0{,}1\\,\\mathrm{mm} \\ge 75\\%')}: Cát mịn</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>G. Rây sàng & Cấp phối hạt</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">${KI('P(d<d_0)=\\frac{\\sum m_{\\le d_0}}{m_{\\text{tổng}}}\\times 100\\%')}</div><div class="s1b-n">Hàm lượng tích lũy</div></div>
    <div class="s1b-row"><div class="s1b-f">${KI('\\text{HL nhóm} = P_2 - P_1')}</div><div class="s1b-n">Hiệu 2 tích lũy liên tiếp</div></div>
  </div>
</div>`,
  hint: `<div class="hint-title">📌 Tóm tắt toàn bộ công thức chương 1 – không có câu hỏi tính toán.</div>`,
  genData(rng){ return {}; },
  statement(d){ return ''; },
  questions: []
};

// ── KaTeX auto-render (khi trang đã load thư viện KaTeX) ─────────
(function ch1HookKaTeX() {
  const opts = {
    delimiters: [
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    throwOnError: false,
  };
  function typeset(el) {
    if (typeof renderMathInElement === 'function' && el) {
      renderMathInElement(el, opts);
    }
  }
  function patchRender() {
    if (typeof APP === 'undefined' || APP._ch1KatexPatched) return;
    // Bảo vệ \(...\) khỏi fmtLabel (tránh V_r → V<sub>r</sub> trong công thức)
    if (typeof fmtLabel === 'function' && !window._fmtLabelKatexSafe) {
      const _origFmt = fmtLabel;
      window.fmtLabel = function(s) {
        if (!s || s.indexOf('\\(') < 0) return _origFmt(s);
        const blocks = [];
        const safe = s.replace(/\\\(.*?\\\)/g, m => {
          blocks.push(m);
          return `\x00K${blocks.length - 1}\x00`;
        });
        return _origFmt(safe).replace(/\x00K(\d+)\x00/g, (_, i) => blocks[+i]);
      };
      window._fmtLabelKatexSafe = true;
    }
    const orig = APP.renderExercises;
    if (typeof orig !== 'function') return;
    APP.renderExercises = function(exIds, status) {
      orig.call(this, exIds, status);
      typeset(document.getElementById('problems-container'));
    };
    APP._ch1KatexPatched = true;
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchRender);
  } else {
    patchRender();
  }
})();
