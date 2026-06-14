// ═══════════════════════════════════════════════════════════════════
//  ch1.js – Chương 1: Tính chất vật lý của đất
//  Phần B2: Cấu tạo đất | Phần B3: Các chỉ tiêu vật lý
// ═══════════════════════════════════════════════════════════════════

// ── SVG sơ đồ 3 pha đất ──────────────────────────────────────────
const SVG_3_PHA = `
<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:8px auto;border-radius:8px;box-shadow:0 1px 6px rgba(0,0,0,.1)">
  <defs>
    <linearGradient id="p-khi" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e3f2fd"/><stop offset="100%" stop-color="#bbdefb"/></linearGradient>
    <linearGradient id="p-nuoc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#81d4fa"/><stop offset="100%" stop-color="#0288d1"/></linearGradient>
    <linearGradient id="p-hat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d7ccc8"/><stop offset="100%" stop-color="#8d6e63"/></linearGradient>
    <pattern id="p-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#bcaaa4" stroke-width="1"/></pattern>
  </defs>
  <rect width="520" height="200" fill="#fafbff" rx="8"/>

  <!-- ① ĐẤT TỰ NHIÊN (3 pha) -->
  <rect x="10" y="8" width="155" height="184" rx="6" fill="#f5f5f5" stroke="#bdbdbd" stroke-width="1.5"/>
  <text x="88" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#333">Đất tự nhiên (3 pha)</text>
  <!-- Khí -->
  <rect x="20" y="28" width="135" height="40" fill="url(#p-khi)" stroke="#90caf9" stroke-width="1" rx="3"/>
  <text x="88" y="44" text-anchor="middle" font-size="10" fill="#1565c0" font-weight="600">Khí (Air)</text>
  <text x="88" y="58" text-anchor="middle" font-size="10" fill="#1565c0">V&#x2096; (thể tích khí)</text>
  <!-- Nước -->
  <rect x="20" y="70" width="135" height="50" fill="url(#p-nuoc)" stroke="#0288d1" stroke-width="1" rx="3"/>
  <text x="88" y="90" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">Nước (Water)</text>
  <text x="88" y="105" text-anchor="middle" font-size="10" fill="#fff">V&#x1d464; (thể tích nước)</text>
  <!-- Hạt -->
  <rect x="20" y="122" width="135" height="58" fill="url(#p-hat)" stroke="#5d4037" stroke-width="1" rx="3"/>
  <rect x="20" y="122" width="135" height="58" fill="url(#p-hatch)" opacity="0.3" rx="3"/>
  <text x="88" y="148" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">Hạt đất (Solid)</text>
  <text x="88" y="163" text-anchor="middle" font-size="10" fill="#fff">V&#x2095; (thể tích hạt)</text>

  <!-- ② ĐẤT BÃO HÒA (2 pha: nước + hạt) -->
  <rect x="182" y="8" width="155" height="184" rx="6" fill="#e8f5e9" stroke="#81c784" stroke-width="1.5"/>
  <text x="260" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#1b5e20">Đất bão hòa (2 pha)</text>
  <rect x="192" y="28" width="135" height="93" fill="url(#p-nuoc)" stroke="#0288d1" stroke-width="1" rx="3"/>
  <text x="260" y="70" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">Nước (Water)</text>
  <text x="260" y="85" text-anchor="middle" font-size="10" fill="#fff">V&#x1d464; = V&#x2c7; (S = 1)</text>
  <rect x="192" y="122" width="135" height="58" fill="url(#p-hat)" stroke="#5d4037" stroke-width="1" rx="3"/>
  <rect x="192" y="122" width="135" height="58" fill="url(#p-hatch)" opacity="0.3" rx="3"/>
  <text x="260" y="154" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">Hạt đất (Solid)</text>

  <!-- ③ ĐẤT KHÔ (2 pha: khí + hạt) -->
  <rect x="354" y="8" width="155" height="184" rx="6" fill="#fff8e1" stroke="#ffb74d" stroke-width="1.5"/>
  <text x="432" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#e65100">Đất khô (2 pha)</text>
  <rect x="364" y="28" width="135" height="93" fill="url(#p-khi)" stroke="#90caf9" stroke-width="1" rx="3"/>
  <text x="432" y="70" text-anchor="middle" font-size="10" fill="#1565c0" font-weight="600">Khí (Air)</text>
  <text x="432" y="85" text-anchor="middle" font-size="10" fill="#1565c0">V&#x2096; = V&#x2c7; (w = 0)</text>
  <rect x="364" y="122" width="135" height="58" fill="url(#p-hat)" stroke="#5d4037" stroke-width="1" rx="3"/>
  <rect x="364" y="122" width="135" height="58" fill="url(#p-hatch)" opacity="0.3" rx="3"/>
  <text x="432" y="154" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">Hạt đất (Solid)</text>

  <!-- Nhãn A B C -->
  <text x="88"  y="197" text-anchor="middle" font-size="13" font-weight="700" fill="#555">A</text>
  <text x="260" y="197" text-anchor="middle" font-size="13" font-weight="700" fill="#555">B</text>
  <text x="432" y="197" text-anchor="middle" font-size="13" font-weight="700" fill="#555">C</text>
</svg>`;

// ── SVG sơ đồ quan hệ thể tích - khối lượng ─────────────────────
const SVG_CONG_THUC = `
<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:8px auto;border-radius:8px;box-shadow:0 1px 6px rgba(0,0,0,.1)">
  <defs>
    <linearGradient id="ct-khi"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e3f2fd"/><stop offset="100%" stop-color="#bbdefb"/></linearGradient>
    <linearGradient id="ct-nuoc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#81d4fa"/><stop offset="100%" stop-color="#0288d1"/></linearGradient>
    <linearGradient id="ct-hat"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d7ccc8"/><stop offset="100%" stop-color="#8d6e63"/></linearGradient>
  </defs>
  <rect width="500" height="230" fill="#fafbff" rx="8"/>

  <!-- Cột trái: Thể tích -->
  <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1565c0">Thể tích (V)</text>

  <!-- V_k -->
  <rect x="20" y="28" width="140" height="40" fill="url(#ct-khi)" stroke="#90caf9" stroke-width="1.5" rx="2"/>
  <text x="90" y="46" text-anchor="middle" font-size="10" fill="#1565c0" font-weight="600">V&#x2096; (khí)</text>
  <text x="90" y="60" text-anchor="middle" font-size="9" fill="#1565c0">thể tích khí</text>

  <!-- Gộp V_r -->
  <line x1="165" y1="28" x2="165" y2="82" stroke="#7b1fa2" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="170" y="58" font-size="9" fill="#7b1fa2" font-weight="600">V&#x2c7;</text>

  <!-- V_w -->
  <rect x="20" y="70" width="140" height="50" fill="url(#ct-nuoc)" stroke="#0288d1" stroke-width="1.5" rx="2"/>
  <text x="90" y="91" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">V&#x1d464; (nước)</text>
  <text x="90" y="106" text-anchor="middle" font-size="9" fill="#e3f2fd">thể tích nước</text>

  <!-- V_h -->
  <rect x="20" y="122" width="140" height="72" fill="url(#ct-hat)" stroke="#5d4037" stroke-width="1.5" rx="2"/>
  <text x="90" y="153" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">V&#x2095; (hạt đất)</text>
  <text x="90" y="168" text-anchor="middle" font-size="9" fill="#e0e0e0">thể tích hạt</text>

  <!-- V tổng -->
  <line x1="8" y1="28"  x2="8" y2="194" stroke="#e53935" stroke-width="2"/>
  <line x1="4" y1="28"  x2="12" y2="28"  stroke="#e53935" stroke-width="1.5"/>
  <line x1="4" y1="194" x2="12" y2="194" stroke="#e53935" stroke-width="1.5"/>
  <text x="2" y="120" font-size="11" fill="#e53935" font-weight="700" transform="rotate(-90,2,120)">V</text>

  <!-- Cột phải: Công thức -->
  <text x="345" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1b5e20">Công thức chính</text>
  <rect x="195" y="28" width="295" height="196" fill="white" stroke="#e0e0e0" stroke-width="1" rx="5"/>

  <!-- Nhóm 1: tỷ lệ thể tích -->
  <text x="205" y="46"  font-size="9.5" fill="#1565c0" font-weight="600">Tỷ lệ thể tích:</text>
  <text x="205" y="61"  font-size="9.5" fill="#333">n = V&#x2c7;/V × 100%      (độ rỗng)</text>
  <text x="205" y="76"  font-size="9.5" fill="#333">e = V&#x2c7;/V&#x2095;              (hệ số rỗng)</text>
  <text x="205" y="91"  font-size="9.5" fill="#333">m = V&#x2095;/V               (độ đặc; n+m=1)</text>
  <text x="205" y="106" font-size="9.5" fill="#333">S = V&#x1d464;/V&#x2c7;              (độ bão hòa)</text>

  <line x1="200" y1="112" x2="485" y2="112" stroke="#e0e0e0" stroke-width="1"/>

  <!-- Nhóm 2: trọng lượng riêng -->
  <text x="205" y="127" font-size="9.5" fill="#1565c0" font-weight="600">Trọng lượng riêng (kN/m³):</text>
  <text x="205" y="142" font-size="9.5" fill="#333">&#x3b3;&#x209c;&#x2099; = Q/V × 10        (tự nhiên)</text>
  <text x="205" y="157" font-size="9.5" fill="#333">&#x3b3;&#x2096; = Q&#x2095;/V × 10      (khô)</text>
  <text x="205" y="172" font-size="9.5" fill="#333">&#x3b3;&#x1d47;&#x2095; = (&#x394;&#x2212;1)&#x3b3;&#x1d464;/(1+e)+&#x3b3;&#x1d464;  (bão hòa)</text>
  <text x="205" y="187" font-size="9.5" fill="#333">&#x3b3;&#x2090;&#x2099; = &#x3b3;&#x1d47;&#x2095; &#x2212; &#x3b3;&#x1d464;          (đẩy nổi)</text>

  <line x1="200" y1="193" x2="485" y2="193" stroke="#e0e0e0" stroke-width="1"/>
  <text x="205" y="208" font-size="9.5" fill="#e65100">&#x3b3;&#x2095; = Q&#x2095;/V&#x2095; × 10 = &#x394;·&#x3b3;&#x1d464;  (trọng lượng riêng hạt)</text>
  <text x="205" y="220" font-size="9" fill="#555">w = Q&#x1d464;/Q&#x2095; × 100%       (độ ẩm)</text>
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
      <tr style="background:#e8f5e9;"><td style="padding:5px 8px;font-weight:700;">Đất bão hòa</td><td style="padding:5px 8px;">Hạt + Nước</td><td style="padding:5px 8px;">2 pha – lỗ rỗng đầy nước, S = 1</td></tr>
      <tr><td style="padding:5px 8px;font-weight:700;">Đất khô</td><td style="padding:5px 8px;">Hạt + Khí</td><td style="padding:5px 8px;">2 pha – không có nước, $w = 0$</td></tr>
    </tbody>
  </table>
</div>`;

const LY_THUYET_CHI_TIEU = `
<div class="theory-block">
  <div class="theory-label">📖 CÁC CHỈ TIÊU VẬT LÝ – Sơ đồ & Công thức</div>
  ${SVG_CONG_THUC}
  <div style="background:#e3f0fd;border-radius:7px;padding:8px 14px;margin-top:6px;font-size:.83rem;line-height:1.9;">
    <b>Quan hệ quan trọng:</b>
    $e = \\dfrac{n}{1-n}$ &nbsp;|&nbsp; $n = \\dfrac{e}{1+e}$ &nbsp;|&nbsp;
    $\\gamma_k = \\dfrac{\\gamma_{tn}}{1+0.01w}$ &nbsp;|&nbsp;
    $S = \\dfrac{0.01\,w\,\\Delta}{e}$
  </div>
</div>`;

// ═══════════════════════════════════════════════════════════════════
//  PHẦN B2 – CẤU TẠO ĐẤT
// ═══════════════════════════════════════════════════════════════════

// ── Helper: tạo bảng rây HTML ────────────────────────────────────
function _bangRay(ms) {
  const ds = ['10.0','5.0','2.0','1.0','0.50','0.25','0.10'];
  const total = ms.reduce((s,v)=>s+v,0);
  let rows = ms.map((m,i)=>`
    <tr style="${i%2===1?'background:#F5F5F5;':''}">
      <td style="padding:4px 10px;text-align:center;font-weight:600;">Rây ${i+1}</td>
      <td style="padding:4px 10px;text-align:center;">${ds[i]}</td>
      <td style="padding:4px 10px;text-align:center;font-weight:700;color:#1565C0;">${m}</td>
    </tr>`).join('');
  return `<table style="border-collapse:collapse;font-size:.85rem;margin:10px 0;width:100%;max-width:420px;">
    <thead><tr style="background:#1565C0;color:#fff;">
      <th style="padding:5px 10px;">Số rây</th>
      <th style="padding:5px 10px;">Đường kính (mm)</th>
      <th style="padding:5px 10px;">Khối lượng (g)</th>
    </tr></thead>
    <tbody>${rows}
    <tr style="background:#E8F5E9;font-weight:700;">
      <td colspan="2" style="padding:5px 10px;text-align:right;">Tổng mẫu</td>
      <td style="padding:5px 10px;text-align:center;color:#1B5E20;">${total}</td>
    </tr></tbody>
  </table>`;
}


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
      Đất lọt qua rây = kích thước &lt; đường kính rây đó.<br>
      Đất <b>trên rây</b> = kích thước &gt; đường kính rây đó.<br>
      Hạt nằm giữa 2 rây liên tiếp = kích thước trong khoảng đó.
    </div>
    <div style="background:#e3f0fd;border-radius:7px;padding:8px 14px;margin-top:8px;font-size:.84rem;">
      <b>Bảng rây mẫu:</b><br>
      Rây 1: 10mm | Rây 2: 5mm | Rây 3: 2mm | Rây 4: 1mm<br>
      Rây 5: 0.5mm | Rây 6: 0.25mm | Rây 7: 0.1mm
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Đất <b>trên</b> Rây số 3 (d = 2mm) nghĩa là hạt có kích thước &gt; 2mm. Rây số 2 phía trên có d = 5mm, nên hạt trên rây 3 có: <b>2mm &lt; d &lt; 5mm</b>.</div>`,
  genData(rng){ return {}; },
  statement(d){ return 'TN rây sàng: Rây số 3 có đường kính 2mm. Đất giữ lại trên rây số 3 có nghĩa là:'; },
  questions: [
    { id:'q1', type:'mcq', label:'Kích thước các hạt trên Rây số 3:',
      choices: ()=>[
        'Kích thước hạt lớn hơn 5.0 mm',
        'Kích thước hạt lớn hơn 2.0 mm',
        'Kích thước hạt lớn hơn 2.0 mm và nhỏ hơn 5.0 mm',
        'Kích thước hạt nhỏ hơn 2.0 mm',
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
      Hạt có kích thước từ $d_1$ đến $d_2$ ($d_1 {<} d_2$) nằm trên rây có đường kính $d_1$<br>
      (vì lọt qua rây $d_2$ nhưng không lọt qua rây $d_1$).<br><br>
      <b>Ví dụ:</b> Hạt kích thước 0.5–1.0 mm → nằm trên Rây số 5 (d = 0.5mm)
    </div>
    <div style="background:#fff3e0;border-radius:6px;padding:6px 12px;margin-top:6px;font-size:.82rem;">
      <b>⚠ Ghi nhớ:</b> Rây số 3 (d=2mm) − Rây số 2 là rây ngay trên có d=5mm<br>
      → Hạt trên Rây 3 có kích thước: <b>2mm &lt; d &lt; 5mm</b>
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Đất <b>trên</b> Rây số 4 (d = 1mm) có kích thước nằm giữa rây 4 và rây 3: <b>1mm &lt; d &lt; 2mm</b>. Hạt 0.5–1.0mm → nằm <b>trên Rây số 4</b> (d = 1mm).</div>`,
  genData(rng){
    const a  = Math.floor(1 + rng()*199);
    const ms = [45+a, 25+a, 100+a, 60+a, 5+5*a, 20+3*a, 15+2*a];
    return {a, ms};
  },
  statement(d){
    return `Kết quả TN rây sàng:<br>${_bangRay(d.ms)}<br>
    Khối lượng các hạt có kích thước <b>từ 0.5mm đến 1.0mm</b> là bao nhiêu?
    <br><i style="font-size:.84rem;color:#555;">Gợi ý: hạt 0.5–1.0mm lọt qua rây 1mm nhưng không lọt qua rây 0.5mm → nằm trên Rây số 4.</i>`;
  },
  questions: [
    { id:'q1', type:'mcq', label:'Nhóm hạt 0.5–1.0mm nằm trên rây nào?',
      choices: d=>[
        `Rây số 3 (d = 2mm) – Khối lượng: ${d.ms[2]} g`,
        `Rây số 4 (d = 1mm) – Khối lượng: ${d.ms[3]} g`,
        `Rây số 5 (d = 0.5mm) – Khối lượng: ${d.ms[4]} g`,
        `Rây số 7 (d = 0.1mm) – Khối lượng: ${d.ms[6]} g`,
      ],
      correctIndex: ()=>1 }
  ]
};

EXERCISES['ch1_b2_05'] = {
  chapterId: 'ch1',
  title: '1.5 – TN rây sàng: khối lượng hạt kích thước &lt; ngưỡng',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 KHỐI LƯỢNG HẠT CÓ KÍCH THƯỚC &lt; NGƯỠNG</div>
    <div style="font-size:.85rem;line-height:1.8;">
      Khối lượng hạt có kích thước $d' {<} d$ = tổng khối lượng trên tất cả các rây <b>phía dưới</b> rây $d$.<br>
      Hoặc = tổng khối lượng hạt lọt qua rây $d$ (đáy hộp + các rây nhỏ hơn $d$).
    </div>
    <div style="background:#e3f0fd;border-radius:6px;padding:6px 12px;margin-top:8px;font-size:.83rem;">
      <b>Ví dụ:</b> Hạt $d {<} 0.25\,\\text{mm}$ = khối lượng trên Rây 7 ($d=0.10$mm) + phần đáy (nếu có)<br>
      (vì hạt $d {<} 0.25$ mm lọt qua Rây 6 và chỉ còn lại trên Rây 7 hoặc đáy)
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Hạt $d {<} 0.25\,\\text{mm}$ = lọt qua Rây 6 (d = 0.25mm) → nằm trên Rây 7 (d = 0.10mm). Khối lượng = $m_7$ (bài này đơn giản hóa, bỏ qua đáy).</div>`,
  genData(rng){
    const a = Math.floor(1 + rng()*199);
    const m7 = 15 + 2*a;
    const m6 = 20 + 3*a;
    const m5 = 5  + 5*a;
    const m4 = 60 +   a;
    const mtotal = (45+a)+(25+a)+(100+a)+(60+a)+(5+5*a)+(20+3*a)+(15+2*a);
    const lt025 = m7;
    const lt05  = m6 + m7;
    const lt10  = m5 + m6 + m7;
    const lt50  = m4 + m5 + m6 + m7;
    return {a, m4,m5,m6,m7, lt025, lt05, lt10, lt50, mtotal};
  },
  statement(d){
    const ms = [45+d.a,25+d.a,100+d.a,60+d.a,5+5*d.a,20+3*d.a,15+2*d.a];
    return `Kết quả TN rây sàng:<br>${_bangRay(ms)}<br>
    Tính khối lượng hạt có kích thước <b>$d {<} 0.25\,\\text{mm}$</b> ($d {<} 0.25$ mm):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'m(d < 0.25 mm) (g)', unit:'g', answer: d=>d.lt025, tol:1 }
  ]
};

EXERCISES['ch1_b2_06'] = {
  chapterId: 'ch1',
  title: '1.6 – TN rây sàng: khối lượng hạt d &lt; 0.5mm và d &lt; 1.0mm',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TỔNG HỢP KHỐI LƯỢNG TÍCH LŨY</div>
    <div style="font-size:.85rem;line-height:1.8;margin-top:6px;">
      Khối lượng hạt $d {<} d_i$ = tổng khối lượng trên các rây có đường kính &lt; $d_i$:<br>
      $$m(d {<} d_i) = \\sum_{d_{\\text{rây}} {<} d_i} m_{\\text{rây}}$$
    </div>
    <div style="background:#e3f0fd;border-radius:6px;padding:6px 12px;margin-top:6px;font-size:.83rem;">
      <b>Ví dụ:</b><br>
      Hạt $d {<} 0.50\,\\text{mm}$ = $m_{\\text{Rây 6}} + m_{\\text{Rây 7}}$ &nbsp;(d = 0.25mm và d = 0.10mm)<br>
      Hạt $d {<} 1.0\,\\text{mm}$ = $m_{\\text{Rây 5}} + m_{\\text{Rây 6}} + m_{\\text{Rây 7}}$
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Hạt $d {<} 0.50\,\\text{mm}$ = $m_6 + m_7$. Hạt $d {<} 1.0\,\\text{mm}$ = $m_5 + m_6 + m_7$.</div>`,
  genData(rng){
    const a = Math.floor(1 + rng()*199);
    const m7=15+2*a, m6=20+3*a, m5=5+5*a;
    const ms = [45+a,25+a,100+a,60+a,m5,m6,m7];
    return {a, m7, m6, m5, ms, lt05: m6+m7, lt10: m5+m6+m7};
  },
  statement(d){
    return `Kết quả TN rây sàng:<br>${_bangRay(d.ms)}<br>
    Tính khối lượng hạt <b>$d {<} 0.5\,\\text{mm}$</b> và <b>$d {<} 1.0\,\\text{mm}$</b>:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'m(d < 0.5 mm) (g)',  unit:'g', answer: d=>d.lt05,  tol:1 },
    { id:'q2', type:'fill', label:'m(d < 1.0 mm) (g)', unit:'g', answer: d=>d.lt10,  tol:1 },
  ]
};

EXERCISES['ch1_b2_07'] = {
  chapterId: 'ch1',
  title: '1.7 – TN rây sàng: hàm lượng tích lũy P(&lt;d) (%)',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 HÀM LƯỢNG TÍCH LŨY P(&lt;d) (%)</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:9px 14px;margin:8px 0;font-size:.88rem;">
      <div style="font-size:.92rem;padding:4px 0;">
        $P(d_0) = \\dfrac{\\text{Tổng KL hạt có } d {<} d_0}{m_{\\text{tổng}}} \\times 100\\%$
      </div>
    </div>
    <div style="font-size:.84rem;line-height:1.7;">
      Trong đó:<br>
      $\\sum m({<}d)$ = tổng khối lượng các hạt có kích thước nhỏ hơn $d$<br>
      $m_{\\text{tổng}}$ = tổng khối lượng toàn bộ mẫu (tổng tất cả các rây)
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 $P({<}d) = $ (khối lượng hạt nhỏ hơn $d$ / tổng khối lượng toàn mẫu) $\\times$ 100</div>`,
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
    const ms = [d.m1,d.m2,d.m3,d.m4,d.m5,d.m6,d.m7];
    return `Kết quả TN rây sàng:<br>${_bangRay(ms)}<br>
    Tính $P({<}d)$ (hàm lượng tích lũy):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'P(d<0.5 mm) (%)',      unit:'%',  answer: d=>d.p05,   tol:0.5 },
    { id:'q3', type:'fill', label:'P(d<1.0 mm) (%)', unit:'%',  answer: d=>d.p10,   tol:0.5 },
    { id:'q4', type:'fill', label:'P(d<5.0 mm) (%)', unit:'%',  answer: d=>d.p50,   tol:0.5 },
  ]
};

EXERCISES['ch1_b2_08'] = {
  chapterId: 'ch1',
  title: '1.8 – Đường cong cấp phối: đọc bảng % tích lũy',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 ĐƯỜNG CONG CẤP PHỐI HẠT</div>
    <div style="font-size:.85rem;line-height:1.8;margin-top:6px;">
      Bảng cấp phối cho biết <b>hàm lượng tích lũy</b> $P({<}d)$ (%) – phần trăm hạt có kích thước ≤ $d$.<br>
      <b>Hàm lượng từng nhóm</b> = hiệu của 2 giá trị tích lũy liên tiếp:
    </div>
    <div style="background:#E3F2FD;border-radius:7px;padding:8px 14px;margin:8px 0;font-size:.86rem;">
      $$P(d_1 \\rightarrow d_2) = P({<}d_2) - P({<}d_1)$$
      <b>Ví dụ:</b> $P(0.05\,\\text{–}\,0.25\,\\text{mm}) = P({<}0.25) - P({<}0.05) = 44.3 - 25.0 = 19.3\%$
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Hàm lượng nhóm 0.05–0.25mm $= P({<}0.25) - P({<}0.05) = 44.3 - 25.0 = 19.3\%$</div>`,
  genData(rng){ return {}; },
  statement(d){ return `Bảng cấp phối hạt:
    <table style="border-collapse:collapse;font-size:.83rem;margin:8px 0;width:100%;">
    <thead><tr style="background:#1565C0;color:#fff;text-align:center;">
      <th style="padding:5px 8px;">Nhóm hạt (mm)</th>
      <th style="padding:5px 8px;">&gt;2</th><th style="padding:5px 8px;">2–1</th>
      <th style="padding:5px 8px;">1–0.25</th><th style="padding:5px 8px;">0.25–0.05</th>
      <th style="padding:5px 8px;">0.05–0.005</th><th style="padding:5px 8px;">&lt;0.005</th>
    </tr></thead>
    <tbody>
      <tr style="text-align:center;">
        <td style="padding:4px 8px;font-weight:700;">Hàm lượng (%)</td>
        <td style="padding:4px 8px;">3.2</td><td style="padding:4px 8px;">9.1</td>
        <td style="padding:4px 8px;">43.4</td><td style="padding:4px 8px;">19.3</td>
        <td style="padding:4px 8px;">13.3</td><td style="padding:4px 8px;">11.7</td>
      </tr>
      <tr style="text-align:center;background:#E3F2FD;font-weight:700;">
        <td style="padding:4px 8px;">$P({<}d)$ Tích lũy (%)</td>
        <td style="padding:4px 8px;">100</td><td style="padding:4px 8px;">96.8</td>
        <td style="padding:4px 8px;">87.7</td><td style="padding:4px 8px;">44.3</td>
        <td style="padding:4px 8px;">25.0</td><td style="padding:4px 8px;">11.7</td>
      </tr>
    </tbody></table>
    Xác định hàm lượng các nhóm hạt:`;},

  questions: [
    { id:'q1', type:'fill', label:'Hàm lượng nhóm 0.05–0.25mm (%)', unit:'%', answer: ()=>19.3, tol:0.5 },
    { id:'q2', type:'fill', label:'Hàm lượng nhóm 0.25–1.00mm (%)', unit:'%', answer: ()=>43.4, tol:0.5 },
    { id:'q3', type:'fill', label:'P(d<0.05 mm) (%)',       unit:'%', answer: ()=>25.0, tol:0.5 },
    { id:'q4', type:'fill', label:'P(d<2.0 mm) (%)',        unit:'%', answer: ()=>96.8, tol:0.5 },
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

function _genB3_type1(rng) {
  const Vh  = r2(28 + rng()*28);
  const Vr  = r2(14 + rng()*32);
  const V   = r2(Vh + Vr);
  const g_h = r2(2.62 + rng()*0.3);
  const Qk  = r2(Vh * g_h);
  const w   = r2(9   + rng()*27);
  const Qw  = r2(Qk  * w / 100);
  const Q   = r2(Qk  + Qw);
  const Vw  = r2(Qw);

  const n    = r3(Vr / V);
  const m    = r3(Vh / V);
  const e    = r3(Vr / Vh);
  const S    = r3(Math.min(Vw / Vr, 1.0));
  const g_tn = r3(Q  / V * 10);
  const g_k  = r3(Qk / V * 10);
  const g_bh = r3((Qk + Vr) / V * 10);
  const g_dn = r3(g_bh - 10);
  const g_hat= r3(Qk / Vh * 10);

  return {Q, Qk, V, Vh, Qw, Vr, Vw, n, m, e, S, w, g_tn, g_k, g_bh, g_dn, g_h: g_hat};
}

function _genB3_type2(rng) {
  const a    = Math.floor(1 + rng()*199);
  const w    = r2(16 + a/5);
  const g_tn = r2(17 + a/20);
  const D    = r3(2.655 + 0.005*a);
  const gw   = 10;
  const g_k  = r3(g_tn / (1 + 0.01*w));
  const n    = r3(1 - g_k/(D*gw));
  const e    = r3(n/(1-n));
  const S    = r3(0.01*w*D/e);
  const g_bh = r3((D-1)*gw/(1+e) + gw);
  const g_dn = r3(g_bh - gw);
  return {a, w, g_tn, D, g_k, n, e, S, g_bh, g_dn};
}

// ── B3 Bộ 1: từ Q, Qk, V, Vh ──────────────────────────────────

EXERCISES['ch1_b3_01'] = {
  chapterId: 'ch1',
  title: '1.10 – Chỉ tiêu vật lý từ TN (độ rỗng n, độ đặc m)',
  type: 'guided',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 $n = V_r/V$ (%), $m = V_h/V$; với $V_r = V - V_h$. Kiểm tra: $n + m = 1$.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất TN cho: $Q = ${d.Q}$ g, $Q_k = ${d.Qk}$ g, $V = ${d.V}$ cm³, $V_h = ${d.Vh}$ cm³.<br>Xác định <b>thể tích lỗ rỗng $V_r$</b>, <b>độ rỗng $n$</b> và <b>độ đặc $m$</b>:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'V<sub>r</sub> = V - V<sub>h</sub> (cm³)',       unit:'cm³', answer: d=>d.Vr, tol:0.1 },
    { id:'q2', type:'fill', label:'n = V<sub>r</sub>/V',                  unit:'',    answer: d=>d.n,  tol:0.005 },
    { id:'q3', type:'fill', label:'m = V<sub>h</sub>/V (n+m=1)', unit:'',    answer: d=>d.m,  tol:0.005 },
  ]
};

EXERCISES['ch1_b3_02'] = {
  chapterId: 'ch1',
  title: '1.11 – Chỉ tiêu vật lý: hệ số rỗng e, độ bão hòa S',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 $e = V_r/V_h$. $S = V_w/V_r$ (với $V_w \\approx Q_w$ vì $\\gamma_w = 1\,\\text{g/cm}^3$).</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: $Q = ${d.Q}$ g, $Q_k = ${d.Qk}$ g, $V = ${d.V}$ cm³, $V_h = ${d.Vh}$ cm³.<br>Biết $V_r = ${d.Vr}$ cm³. Xác định <b>hệ số rỗng $e$</b> và <b>độ bão hòa $S$</b>:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'Q<sub>w</sub> = Q - Q<sub>k</sub> (g)',         unit:'g',   answer: d=>d.Qw, tol:0.1 },
    { id:'q2', type:'fill', label:'V<sub>w</sub> \≈ Q<sub>w</sub> (cm³)',    unit:'cm³', answer: d=>d.Vw, tol:0.1 },
    { id:'q3', type:'fill', label:'e = V<sub>r</sub>/V<sub>h</sub>',               unit:'',    answer: d=>d.e,  tol:0.005 },
    { id:'q4', type:'fill', label:'S = V<sub>w</sub>/V<sub>r</sub>',               unit:'',    answer: d=>d.S,  tol:0.005 },
  ]
};

EXERCISES['ch1_b3_03'] = {
  chapterId: 'ch1',
  title: '1.12 – Chỉ tiêu vật lý: độ ẩm w, trọng lượng riêng tự nhiên γ_tn',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 $w = Q_w/Q_k \\times 100\%$. $\\gamma_{tn} = Q/V \\times 10$ (kN/m³).</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: $Q = ${d.Q}$ g, $Q_k = ${d.Qk}$ g, $V = ${d.V}$ cm³.<br>Xác định <b>độ ẩm $w$ (%)</b> và <b>trọng lượng riêng tự nhiên $\\gamma_{tn}$ (kN/m³)</b>:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'w = Q<sub>w</sub>/Q<sub>k</sub> \× 100 (%)',             unit:'%',     answer: d=>d.w,    tol:0.2 },
    { id:'q2', type:'fill', label:'\γ<sub>tn</sub> = Q/V \× 10 (kN/m³)',   unit:'kN/m³', answer: d=>d.g_tn, tol:0.05 },
  ]
};

EXERCISES['ch1_b3_04'] = {
  chapterId: 'ch1',
  title: '1.13 – Chỉ tiêu vật lý: γ_k, γ_bh, γ_dn, γ_h',
  type: 'guided',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 $\\gamma_k = Q_k/V \\times 10$. $\\gamma_{bh} = (Q_k + V_r)/V \\times 10$. $\\gamma_{dn} = \\gamma_{bh} - 10$. $\\gamma_h = Q_k/V_h \\times 10$.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: $Q_k = ${d.Qk}$ g, $V = ${d.V}$ cm³, $V_h = ${d.Vh}$ cm³, $V_r = ${d.Vr}$ cm³.<br>Xác định $\\gamma_k$, $\\gamma_{bh}$, $\\gamma_{dn}$ và $\\gamma_h$ (kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'\γ<sub>k</sub> = Q<sub>k</sub>/V \× 10 (kN/m³)',              unit:'kN/m³', answer: d=>d.g_k,  tol:0.05 },
    { id:'q2', type:'fill', label:'\γ<sub>bh</sub> = (Q<sub>k</sub> + V<sub>r</sub>)/V \× 10 (kN/m³)',   unit:'kN/m³', answer: d=>d.g_bh, tol:0.05 },
    { id:'q3', type:'fill', label:'\γ<sub>dn</sub> = \γ<sub>bh</sub> - 10 (kN/m³)',           unit:'kN/m³', answer: d=>d.g_dn, tol:0.05 },
    { id:'q4', type:'fill', label:'\γ<sub>h</sub> = Q<sub>k</sub>/V<sub>h</sub> \× 10 (kN/m³)',             unit:'kN/m³', answer: d=>d.g_h,  tol:0.05 },
  ]
};

// ── B3 Bộ 2: từ w, γ_tn, Δ ─────────────────────────────────────

EXERCISES['ch1_b3_05'] = {
  chapterId: 'ch1',
  title: '1.14 – Chỉ tiêu từ w, γ_tn, Δ: tính γ_k, n, e',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TÍNH CHỈ TIÊU TỪ w, γ_tn, Δ</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:10px 14px;margin:8px 0;font-size:.87rem;line-height:2.2;">
      $$\\gamma_k = \\frac{\\gamma_{tn}}{1 + 0.01\,w}$$
      $$n = 1 - \\frac{\\gamma_k}{\\Delta \\cdot \\gamma_w} \\qquad (\\gamma_w = 10\,\\text{kN/m}^3)$$
      $$e = \\frac{n}{1 - n}$$
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Tính $\\gamma_k$ trước → $n = 1 - \\gamma_k/(\\Delta \\times 10)$ → $e = n/(1-n)$.</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Mẫu đất có: $w = ${d.w}\%$, $\\gamma_{tn} = ${d.g_tn}$ kN/m³, $\\Delta$ (tỷ trọng hạt) $= ${d.D}$.<br>Xác định $\\gamma_k$, $n$ và $e$:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'\γ<sub>k</sub> = \γ<sub>tn</sub>/(1 + 0.01w) (kN/m³)',  unit:'kN/m³', answer: d=>d.g_k, tol:0.05 },
    { id:'q2', type:'fill', label:'n = 1 - \γ<sub>k</sub>/(\Δ \· \γ<sub>w</sub>)',   unit:'',      answer: d=>d.n,   tol:0.005 },
    { id:'q3', type:'fill', label:'e = n/(1-n)',                                   unit:'',      answer: d=>d.e,   tol:0.005 },
  ]
};

EXERCISES['ch1_b3_06'] = {
  chapterId: 'ch1',
  title: '1.15 – Chỉ tiêu từ w, γ_tn, Δ: tính S, γ_bh, γ_dn',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TÍNH γ_bh, γ_dn, S</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:10px 14px;margin:8px 0;font-size:.87rem;line-height:2.2;">
      $$S = \\frac{0.01\,w\,\\Delta}{e}$$
      $$\\gamma_{bh} = \\frac{(\\Delta - 1)\,\\gamma_w}{1 + e} + \\gamma_w$$
      $$\\gamma_{dn} = \\gamma_{bh} - \\gamma_w \\qquad (\\gamma_w = 10\,\\text{kN/m}^3)$$
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Dùng $e$ đã tính. $S = 0.01\,w\,\\Delta/e$. $\\gamma_{bh} = (\\Delta-1) \\times 10/(1+e) + 10$.</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Mẫu đất: $w = ${d.w}\%$, $\\Delta = ${d.D}$, $e = ${d.e}$ (đã tính).<br>Xác định $S$, $\\gamma_{bh}$ và $\\gamma_{dn}$:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'S = 0.01\ w\ \Δ/e',                              unit:'',      answer: d=>d.S,    tol:0.005 },
    { id:'q2', type:'fill', label:'\γ<sub>bh</sub> = (\Δ-1) \· 10/(1+e)+10 (kN/m³)', unit:'kN/m³', answer: d=>d.g_bh, tol:0.05  },
    { id:'q3', type:'fill', label:'\γ<sub>dn</sub> = \γ<sub>bh</sub> - 10 (kN/m³)',               unit:'kN/m³', answer: d=>d.g_dn, tol:0.05  },
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
        <tr><td style="padding:4px 8px;font-weight:700;">Hệ số rỗng $e$</td><td style="padding:4px 8px;">Tỉ số $V_r / V_h$</td><td style="padding:4px 8px;">$e = V_r/V_h$</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Độ rỗng $n$</td><td style="padding:4px 8px;">Tỉ số $V_r / V$ (×100%)</td><td style="padding:4px 8px;">$n = V_r/V$</td></tr>
        <tr><td style="padding:4px 8px;font-weight:700;">Độ bão hòa $S$</td><td style="padding:4px 8px;">Tỉ số $V_w / V_r$</td><td style="padding:4px 8px;">$S = V_w/V_r$</td></tr>
      </tbody>
    </table>
  </div>`,
  hint: `<div class="hint-title">💡 $e = V_r/V_h$ (chia cho hạt, không phải chia cho đất). $n = V_r/V$ (chia cho thể tích đất).</div>`,
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

// ── B3 Bài số tính γ_ướt ─────────────────────────────────────────

EXERCISES['ch1_b3_08'] = {
  chapterId: 'ch1',
  title: '1.17 – Tính trọng lượng riêng ướt γ_tn',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TRỌNG LƯỢNG RIÊNG ƯỚT (TỰ NHIÊN)</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:9px 14px;margin:8px 0;font-size:.87rem;line-height:2.1;">
      $$\\gamma_{tn} = \\frac{Q}{V} \\times 10 \\quad (\\text{kN/m}^3)$$
      Đổi đơn vị: $[\\text{g/cm}^3] \\times 10 = [\\text{kN/m}^3]$
    </div>
    <div style="font-size:.83rem;color:#555;">$Q$: khối lượng mẫu ướt (g) | $V$: thể tích mẫu (cm³)</div>
  </div>`,
  hint: `<div class="hint-title">💡 $\\gamma_{tn}\,[\\text{kN/m}^3] = Q\,[\\text{g}] \,/\, V\,[\\text{cm}^3] \\times 10$.</div>`,
  genData(rng){
    const V    = Math.round(80 + rng()*60);
    const g_tn = r2(16.5 + rng()*2.5);
    const Q_uot= r2(g_tn * V / 10);
    const w    = r2(10 + rng()*25);
    const Q_kho= r2(Q_uot / (1 + 0.01*w));
    const D    = r3(2.55 + rng()*0.15);
    const g_uot= r3(Q_uot / V * 10);
    return {V, Q_uot, Q_kho, D, w, g_uot};
  },
  statement(d){
    return `Mẫu đất có thể tích $V = ${d.V}$ cm³, khối lượng ướt $Q = ${d.Q_uot}$ g, khối lượng khô $Q_k = ${d.Q_kho}$ g, tỷ trọng hạt $\\Delta = ${d.D}$.<br>Tính <b>trọng lượng riêng tự nhiên $\\gamma_{tn}$</b> (kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'\γ<sub>tn</sub> = Q/V \× 10 (kN/m³)', unit:'kN/m³', answer: d=>d.g_uot, tol:0.05 },
  ]
};

// ── TỔNG HỢP CÔNG THỨC ──────────────────────────────────────────

EXERCISES['ch1_tomtat'] = {
  chapterId: 'ch1',
  title: '📋 Tổng hợp công thức – Chương 1',
  type: 'guided',
  theoryHTML: `
<style>
.s1-sec{margin-bottom:16px}
.s1-sec h4{background:var(--primary);color:#fff;padding:6px 14px;border-radius:7px 7px 0 0;margin:0;font-size:.9rem}
.s1-body{border:1px solid var(--primary);border-top:none;border-radius:0 0 7px 7px;padding:10px 16px}
.s1-row{display:flex;gap:8px;align-items:flex-start;margin-bottom:7px;font-size:.84rem}
.s1-f{background:#e3f0fd;border-radius:5px;padding:3px 10px;font-family:monospace;min-width:220px;flex-shrink:0}
.s1-n{color:#555;font-size:.82rem;padding-top:3px}
</style>

<div class="s1-sec">
  <h4>A. Các thành phần thể tích</h4>
  <div class="s1-body">
    <div class="s1-row"><div class="s1-f">$V = V_h + V_r = V_h + V_w + V_k$</div><div class="s1-n">$V_r = V_k + V_w$ (lỗ rỗng)</div></div>
    <div class="s1-row"><div class="s1-f">$n = V_r/V \\times 100\%$</div><div class="s1-n">Độ rỗng</div></div>
    <div class="s1-row"><div class="s1-f">$m = V_h/V$ &nbsp; ($n + m = 1$)</div><div class="s1-n">Độ đặc</div></div>
    <div class="s1-row"><div class="s1-f">$e = V_r/V_h$ &nbsp; ($e = n/(1-n)$)</div><div class="s1-n">Hệ số rỗng</div></div>
    <div class="s1-row"><div class="s1-f">$S = V_w/V_r$</div><div class="s1-n">Độ bão hòa ($0 \\leq S \\leq 1$)</div></div>
    <div class="s1-row"><div class="s1-f">$w = Q_w/Q_h \\times 100\%$</div><div class="s1-n">Độ ẩm</div></div>
  </div>
</div>

<div class="s1-sec">
  <h4>B. Các chỉ tiêu khối lượng (kN/m³)</h4>
  <div class="s1-body">
    <div class="s1-row"><div class="s1-f">$\\gamma_{tn} = Q/V \\times 10$</div><div class="s1-n">TL riêng tự nhiên</div></div>
    <div class="s1-row"><div class="s1-f">$\\gamma_k = Q_h/V \\times 10$</div><div class="s1-n">TL riêng khô</div></div>
    <div class="s1-row"><div class="s1-f">$\\gamma_k = \\gamma_{tn}/(1 + 0.01w)$</div><div class="s1-n">Tính $\\gamma_k$ từ $\\gamma_{tn}$ và $w$</div></div>
    <div class="s1-row"><div class="s1-f">$\\gamma_{bh} = (\\Delta-1)\\gamma_w/(1+e)+\\gamma_w$</div><div class="s1-n">TL riêng bão hòa</div></div>
    <div class="s1-row"><div class="s1-f">$\\gamma_{dn} = \\gamma_{bh} - \\gamma_w$</div><div class="s1-n">TL riêng đẩy nổi ($\\gamma_w = 10$)</div></div>
    <div class="s1-row"><div class="s1-f">$\\gamma_h = Q_h/V_h \\times 10 = \\Delta \\cdot \\gamma_w$</div><div class="s1-n">TL riêng hạt đất</div></div>
  </div>
</div>

<div class="s1-sec">
  <h4>C. Tính từ w, γ_tn, Δ</h4>
  <div class="s1-body">
    <div class="s1-row"><div class="s1-f">$\\gamma_k = \\gamma_{tn}/(1 + 0.01w)$</div></div>
    <div class="s1-row"><div class="s1-f">$n = 1 - \\gamma_k/(\\Delta \\cdot \\gamma_w)$</div></div>
    <div class="s1-row"><div class="s1-f">$e = n/(1-n)$</div></div>
    <div class="s1-row"><div class="s1-f">$S = 0.01\,w\,\\Delta/e$</div></div>
  </div>
</div>

<div class="s1-sec">
  <h4>D. Rây sàng & Cấp phối hạt</h4>
  <div class="s1-body">
    <div class="s1-row"><div class="s1-f">Đất trên rây $d$ → hạt có kích thước $> d$</div><div class="s1-n">Lọt qua rây → hạt $d' {<} d$</div></div>
    <div class="s1-row"><div class="s1-f">$P({<}d) = \\sum m(<d)\,/\,m_{\\text{tổng}} \\times 100\%$</div><div class="s1-n">Hàm lượng tích lũy</div></div>
    <div class="s1-row"><div class="s1-f">$P(d_1\\text{–}d_2) = P(<d_2) - P(<d_1)$</div><div class="s1-n">Hiệu 2 giá trị tích lũy</div></div>
  </div>
</div>`,
  hint: `<div class="hint-title">📌 Tóm tắt toàn bộ công thức chương 1 – không có câu hỏi tính toán.</div>`,
  genData(rng){ return {}; },
  statement(d){ return ''; },
  questions: []
};

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
      So sánh khối lượng trên từng rây.<br><br>
      <b>Lưu ý:</b> Đất trên mỗi rây = hạt có kích thước nằm trong khoảng 2 rây liền kề.
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 So sánh trực tiếp các khối lượng trên từng rây và tìm giá trị lớn nhất.</div>`,
  genData(rng){
    const a  = Math.floor(1 + rng()*199);
    const ms = [45+a, 25+a, 100+a, 60+a, 5+5*a, 20+3*a, 15+2*a];
    const ds = ['10–5mm', '5–2mm', '2–1mm', '1–0.5mm', '0.5–0.25mm', '0.25–0.1mm', '<0.1mm'];
    const maxIdx = ms.indexOf(Math.max(...ms));
    return {a, ms, ds, maxIdx, maxVal: ms[maxIdx], maxName: ds[maxIdx]};
  },
  statement(d){
    return `Kết quả TN rây sàng:<br>${_bangRay(d.ms)}<br><b>Cỡ hạt nào chiếm tỷ trọng nhiều nhất?</b>`;
  },
  questions: [
    { id:'q1', type:'fill', label:'Khối lượng lớn nhất (g)',    unit:'g',  answer: d=>d.maxVal, tol:1 },
    { id:'q2', type:'mcq',  label:'Nhóm hạt chiếm ưu thế:',
      choices: d=>[
        `A. Nhóm ${d.ds[0]} (${d.ms[0]} g)`,
        `B. Nhóm ${d.ds[1]} (${d.ms[1]} g)`,
        `C. Nhóm ${d.ds[2]} (${d.ms[2]} g)`,
        `D. Nhóm ${d.ds[3]} (${d.ms[3]} g)`,
      ],
      correctIndex: d => d.maxIdx <= 3 ? d.maxIdx : 3
    },
  ]
};

EXERCISES['ch1_b2_11'] = {
  chapterId: 'ch1',
  title: '1.19 – TN rây sàng: tính đầy đủ hàm lượng tích lũy và cấp phối',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 BẢNG CẤP PHỐI HẠT ĐẦY ĐỦ</div>
    <div style="font-size:.84rem;line-height:1.8;">
      <b>Hàm lượng từng nhóm (%)</b> $= m_{\\text{rây}} / m_{\\text{tổng}} \\times 100$<br>
      <b>Hàm lượng tích lũy $P({<}d)$ (%)</b> = cộng dồn từ nhóm hạt nhỏ nhất lên<br>
      Tổng tất cả hàm lượng từng nhóm = 100%
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Tổng tất cả hàm lượng từng nhóm = 100%. $P(d {<} 5\,\\text{mm}) = 100 - \\%\\text{nhóm} > 5\,\\text{mm}$.</div>`,
  genData(rng){
    const a   = Math.floor(1 + rng()*199);
    const ms  = [45+a, 25+a, 100+a, 60+a, 5+5*a, 20+3*a, 15+2*a];
    const total = ms.reduce((s,v)=>s+v, 0);
    const pct = ms.map(m => r2(m/total*100));
    const lt01 = r2(pct[6]);
    const lt025= r2(pct[6]+pct[5]);
    const lt05 = r2(pct[6]+pct[5]+pct[4]);
    const lt10 = r2(pct[6]+pct[5]+pct[4]+pct[3]);
    const lt20 = r2(pct[6]+pct[5]+pct[4]+pct[3]+pct[2]);
    const lt50 = r2(pct[6]+pct[5]+pct[4]+pct[3]+pct[2]+pct[1]);
    return {a, ms, total, pct, lt01, lt025, lt05, lt10, lt20, lt50};
  },
  statement(d){
    return `Kết quả TN rây sàng:<br>${_bangRay(d.ms)}<br>Tính $P({<}d)$ (hàm lượng tích lũy):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'P(d<0.1 mm) (%)',   unit:'%', answer: d=>d.lt01,  tol:0.5 },
    { id:'q2', type:'fill', label:'P(d<0.25 mm) (%)',  unit:'%', answer: d=>d.lt025, tol:0.5 },
    { id:'q3', type:'fill', label:'P(d<0.5 mm) (%)',   unit:'%', answer: d=>d.lt05,  tol:0.5 },
    { id:'q4', type:'fill', label:'P(d<1.0 mm) (%)',   unit:'%', answer: d=>d.lt10,  tol:0.5 },
    { id:'q5', type:'fill', label:'P(d<2.0 mm) (%)',   unit:'%', answer: d=>d.lt20,  tol:0.5 },
    { id:'q6', type:'fill', label:'P(d<5.0 mm) (%)',   unit:'%', answer: d=>d.lt50,  tol:0.5 },
  ]
};

// ── B3 bổ sung ──────────────────────────────────────────────────

EXERCISES['ch1_b3_09'] = {
  chapterId: 'ch1',
  title: '1.20 – Tổng hợp: 10 chỉ tiêu vật lý từ bộ Q, V, Vh',
  type: 'guided',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 Trình tự: $V_r \\to Q_w \\to n,\,m,\,e,\,S,\,w,\,\\gamma_{tn},\,\\gamma_k,\,\\gamma_{bh},\,\\gamma_{dn}$.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất nguyên thổ cho kết quả TN:
    <table style="border-collapse:collapse;font-size:.88rem;margin:8px 0;">
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Khối lượng đất tự nhiên</td><td style="padding:4px 12px;font-weight:700;">$Q = ${d.Q}$ g</td></tr>
    <tr><td style="padding:4px 12px;">Khối lượng đất sau sấy khô</td><td style="padding:4px 12px;font-weight:700;">$Q_k = ${d.Qk}$ g</td></tr>
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Thể tích đất</td><td style="padding:4px 12px;font-weight:700;">$V = ${d.V}$ cm³</td></tr>
    <tr><td style="padding:4px 12px;">Thể tích hạt đất</td><td style="padding:4px 12px;font-weight:700;">$V_h = ${d.Vh}$ cm³</td></tr>
    </table>
    Tính <b>đầy đủ 10 chỉ tiêu vật lý</b> của đất:`;
  },
  questions: [
    { id:'q1',  type:'fill', label:'V<sub>r</sub> = V - V<sub>h</sub> (cm³)',                          unit:'cm³',   answer: d=>d.Vr,   tol:0.1  },
    { id:'q2',  type:'fill', label:'n = V<sub>r</sub>/V (độ rỗng)',                          unit:'',      answer: d=>d.n,    tol:0.005},
    { id:'q3',  type:'fill', label:'m = V<sub>h</sub>/V (độ đặc, n+m=1)',                 unit:'',      answer: d=>d.m,    tol:0.005},
    { id:'q4',  type:'fill', label:'e = V<sub>r</sub>/V<sub>h</sub> (hệ số rỗng)',                    unit:'',      answer: d=>d.e,    tol:0.005},
    { id:'q5',  type:'fill', label:'S = V<sub>w</sub>/V<sub>r</sub> (độ bão hòa)',                    unit:'',      answer: d=>d.S,    tol:0.005},
    { id:'q6',  type:'fill', label:'w = Q<sub>w</sub>/Q<sub>k</sub> \× 100 (%)',                 unit:'%',     answer: d=>d.w,    tol:0.2  },
    { id:'q7',  type:'fill', label:'\γ<sub>tn</sub> = Q/V \× 10 (kN/m³)',       unit:'kN/m³', answer: d=>d.g_tn, tol:0.05 },
    { id:'q8',  type:'fill', label:'\γ<sub>k</sub> = Q<sub>k</sub>/V \× 10 (kN/m³)',        unit:'kN/m³', answer: d=>d.g_k,  tol:0.05 },
    { id:'q9',  type:'fill', label:'\γ<sub>bh</sub> = (Q<sub>k</sub>+V<sub>r</sub>)/V \× 10 (kN/m³)', unit:'kN/m³', answer: d=>d.g_bh, tol:0.05 },
    { id:'q10', type:'fill', label:'\γ<sub>dn</sub> = \γ<sub>bh</sub> - 10 (kN/m³)',    unit:'kN/m³', answer: d=>d.g_dn, tol:0.05 },
  ]
};

EXERCISES['ch1_b3_10'] = {
  chapterId: 'ch1',
  title: '1.21 – Tổng hợp: các chỉ tiêu từ w, γ_tn, Δ',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 Trình tự: $\\gamma_k \\to n \\to e \\to S \\to \\gamma_{bh} \\to \\gamma_{dn}$.</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Thí nghiệm mẫu đất cho 3 chỉ tiêu cơ bản:
    <table style="border-collapse:collapse;font-size:.88rem;margin:8px 0;">
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Độ ẩm tự nhiên $w$ (%)</td><td style="padding:4px 12px;font-weight:700;">${d.w}%</td></tr>
    <tr><td style="padding:4px 12px;">Trọng lượng riêng tự nhiên $\\gamma_{tn}$ (kN/m³)</td><td style="padding:4px 12px;font-weight:700;">${d.g_tn}</td></tr>
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Tỷ trọng của hạt $\\Delta$</td><td style="padding:4px 12px;font-weight:700;">${d.D}</td></tr>
    </table>
    Xác định các chỉ tiêu vật lý còn lại ($\\gamma_w = 10$ kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'\γ<sub>k</sub> = \γ<sub>tn</sub>/(1+0.01w) (kN/m³)',           unit:'kN/m³', answer: d=>d.g_k,  tol:0.05  },
    { id:'q2', type:'fill', label:'n = 1 - \γ<sub>k</sub>/(\Δ \· \γ<sub>w</sub>)',           unit:'',      answer: d=>d.n,    tol:0.005 },
    { id:'q3', type:'fill', label:'e = n/(1-n)',                                          unit:'',      answer: d=>d.e,    tol:0.005 },
    { id:'q4', type:'fill', label:'S = 0.01\ w\ \Δ/e',                                unit:'',      answer: d=>d.S,    tol:0.005 },
    { id:'q5', type:'fill', label:'\γ<sub>bh</sub> = (\Δ-1) \· 10/(1+e)+10 (kN/m³)',  unit:'kN/m³', answer: d=>d.g_bh, tol:0.05  },
    { id:'q6', type:'fill', label:'\γ<sub>dn</sub> = \γ<sub>bh</sub> - 10 (kN/m³)',               unit:'kN/m³', answer: d=>d.g_dn, tol:0.05  },
  ]
};

EXERCISES['ch1_b3_11'] = {
  chapterId: 'ch1',
  title: '1.22 – Tính γ_tn, γ_k, w, e từ mẫu đất (bài số)',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TỔNG HỢP TÍNH TỪ V, Q_ướt, Q_k, Δ</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:9px 14px;margin:8px 0;font-size:.87rem;line-height:2.2;">
      $$\\gamma_{tn} = \\frac{Q}{V} \\times 10 \\quad (\\text{kN/m}^3)$$
      $$w = \\frac{Q - Q_k}{Q_k} \\times 100 \\quad (\%)$$
      $$\\gamma_k = \\frac{\\gamma_{tn}}{1 + 0.01\,w} \\quad (\\text{kN/m}^3)$$
      $$V_h = \\frac{Q_k}{\\Delta} \\quad (\\text{cm}^3) \\quad \\Rightarrow \\quad e = \\frac{V - V_h}{V_h}$$
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 $V_h = Q_k/\\Delta$ cm³ (khi $\\gamma_w = 1\,\\text{g/cm}^3$). Sau đó $e = (V - V_h)/V_h$.</div>`,
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
    const Vh_ans   = r3(Q_k/D);
    const e_ans    = r3((V-Vh_ans)/Vh_ans);
    return {V, Q_uot, Q_k, D, g_tn_ans, w_ans, g_k_ans, Vh_ans, e_ans};
  },
  statement(d){
    return `Mẫu đất có thể tích $V = ${d.V}$ cm³, khối lượng ướt $Q = ${d.Q_uot}$ g, khối lượng khô $Q_k = ${d.Q_k}$ g, tỷ trọng hạt $\\Delta = ${d.D}$.<br>Tính các chỉ tiêu:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'\γ<sub>tn</sub> = Q/V \× 10 (kN/m³)',           unit:'kN/m³', answer: d=>d.g_tn_ans, tol:0.05 },
    { id:'q2', type:'fill', label:'w = (Q - Q<sub>k</sub>)/Q<sub>k</sub> \× 100 (%)',               unit:'%',     answer: d=>d.w_ans,    tol:0.3  },
    { id:'q3', type:'fill', label:'\γ<sub>k</sub> = \γ<sub>tn</sub>/(1+0.01w) (kN/m³)',      unit:'kN/m³', answer: d=>d.g_k_ans,  tol:0.05 },
    { id:'q4', type:'fill', label:'V<sub>h</sub> = Q<sub>k</sub>/\Δ (cm³)',                          unit:'cm³',   answer: d=>d.Vh_ans,   tol:0.2  },
    { id:'q5', type:'fill', label:'e = (V - V<sub>h</sub>)/V<sub>h</sub>',                               unit:'',      answer: d=>d.e_ans,    tol:0.01 },
  ]
};

// ═══════════════════════════════════════════════════════════════════
//  BỔ SUNG: TRẠNG THÁI ĐẤT + TÊN ĐẤT + TỔNG HỢP CÔNG THỨC
// ═══════════════════════════════════════════════════════════════════

// ── SVG sơ đồ giới hạn Atterberg ─────────────────────────────────
const SVG_ATTERBERG = `
<svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:8px auto;border-radius:8px;box-shadow:0 1px 6px rgba(0,0,0,.1)">
  <defs>
    <linearGradient id="at-ran" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#fff9c4"/><stop offset="100%" stop-color="#ffe082"/></linearGradient>
    <linearGradient id="at-deo" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#c8e6c9"/><stop offset="100%" stop-color="#81c784"/></linearGradient>
    <linearGradient id="at-cung" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ffccbc"/><stop offset="100%" stop-color="#ff8a65"/></linearGradient>
  </defs>
  <rect width="520" height="160" fill="#fafbff" rx="8"/>

  <!-- Trục w -->
  <line x1="30" y1="120" x2="500" y2="120" stroke="#555" stroke-width="1.5"/>
  <text x="508" y="124" font-size="11" fill="#555" font-weight="700">w →</text>

  <!-- Vùng RẮN (w &lt; Wp) -->
  <rect x="40" y="50" width="100" height="60" fill="url(#at-cung)" rx="4" opacity="0.85"/>
  <text x="90" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#bf360c">RẮN / NỬA RẮN</text>
  <text x="90" y="95" text-anchor="middle" font-size="9" fill="#bf360c">(IL &lt; 0)</text>

  <!-- Vùng DẺO (Wp ≤ w ≤ WL) -->
  <rect x="160" y="50" width="180" height="60" fill="url(#at-deo)" rx="4" opacity="0.85"/>
  <text x="250" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#1b5e20">DẺO</text>
  <text x="250" y="93" text-anchor="middle" font-size="9" fill="#1b5e20">(0 ≤ IL ≤ 1)</text>

  <!-- Vùng CHẢY (w > WL) -->
  <rect x="360" y="50" width="130" height="60" fill="url(#at-ran)" rx="4" opacity="0.85"/>
  <text x="425" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#e65100">CHẢY</text>
  <text x="425" y="93" text-anchor="middle" font-size="9" fill="#e65100">(IL &gt; 1)</text>

  <!-- Đường ranh giới Wp -->
  <line x1="160" y1="45" x2="160" y2="125" stroke="#e53935" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="160" y="138" text-anchor="middle" font-size="11" fill="#e53935" font-weight="700">WP</text>
  <text x="160" y="150" text-anchor="middle" font-size="9" fill="#e53935">Giới hạn dẻo</text>

  <!-- Đường ranh giới WL -->
  <line x1="360" y1="45" x2="360" y2="125" stroke="#1565c0" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="360" y="138" text-anchor="middle" font-size="11" fill="#1565c0" font-weight="700">WL</text>
  <text x="360" y="150" text-anchor="middle" font-size="9" fill="#1565c0">Giới hạn chảy</text>

  <!-- Chỉ số Ip -->
  <line x1="162" y1="32" x2="358" y2="32" stroke="#7b1fa2" stroke-width="1.5"/>
  <line x1="162" y1="28" x2="162" y2="36" stroke="#7b1fa2" stroke-width="1.5"/>
  <line x1="358" y1="28" x2="358" y2="36" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="260" y="26" text-anchor="middle" font-size="10" fill="#7b1fa2" font-weight="700">IP = WL − WP</text>

  <!-- Độ sệt IL -->
  <rect x="40" y="8" width="200" height="16" fill="#e3f0fd" rx="3"/>
  <text x="140" y="20" text-anchor="middle" font-size="9.5" fill="#1565c0" font-weight="600">IL = (w − WP) / IP</text>
</svg>`;

// ── LÝ THUYẾT TRẠNG THÁI ĐẤT DÍNH ──────────────────────────────
const LY_THUYET_TRANG_THAI = `
<div class="theory-block">
  <div class="theory-label">📖 TRẠNG THÁI ĐẤT DÍNH – GIỚI HẠN ATTERBERG</div>
  ${SVG_ATTERBERG}
  <div style="margin-top:8px;">
  <table style="border-collapse:collapse;font-size:.82rem;width:100%;">
    <thead><tr style="background:#1565c0;color:#fff;text-align:center;">
      <th style="padding:5px 8px;">Trạng thái</th>
      <th style="padding:5px 8px;">Điều kiện $I_L$</th>
      <th style="padding:5px 8px;">Mô tả</th>
    </tr></thead>
    <tbody>
      <tr style="background:#ffccbc;"><td style="padding:4px 8px;font-weight:700;">Cứng (rắn)</td><td style="padding:4px 8px;text-align:center;">$I_L {<} 0$</td><td style="padding:4px 8px;">Cứng, giòn, khó biến dạng</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Nửa cứng</td><td style="padding:4px 8px;text-align:center;">$0 \\leq I_L < 0.25$</td><td style="padding:4px 8px;">Tương đối cứng</td></tr>
      <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Dẻo cứng</td><td style="padding:4px 8px;text-align:center;">$0.25 \\leq I_L < 0.50$</td><td style="padding:4px 8px;">Dẻo, khó biến dạng</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Dẻo mềm</td><td style="padding:4px 8px;text-align:center;">$0.50 \\leq I_L < 0.75$</td><td style="padding:4px 8px;">Dẻo, dễ biến dạng hơn</td></tr>
      <tr style="background:#c8e6c9;"><td style="padding:4px 8px;font-weight:700;">Dẻo chảy</td><td style="padding:4px 8px;text-align:center;">$0.75 \\leq I_L \\leq 1.0$</td><td style="padding:4px 8px;">Gần chảy</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Chảy</td><td style="padding:4px 8px;text-align:center;">$I_L > 1.0$</td><td style="padding:4px 8px;">Chảy lỏng</td></tr>
    </tbody>
  </table>
  </div>
</div>`;

// ── LÝ THUYẾT TRẠNG THÁI ĐẤT RỜI ────────────────────────────────
const LY_THUYET_TRANG_THAI_ROI = `
<div class="theory-block">
  <div class="theory-label">📖 TRẠNG THÁI ĐẤT RỜI – ĐỘ CHẶT TƯƠNG ĐỐI D_r</div>
  <div style="background:#e3f0fd;border-radius:7px;padding:10px 14px;margin:8px 0;font-size:.87rem;line-height:2.1;">
    $$D_r = \\frac{e_{\\max} - e}{e_{\\max} - e_{\\min}} \\times 100\%$$
    $e$: hệ số rỗng tự nhiên; $e_{\\max}$: trạng thái rời nhất; $e_{\\min}$: trạng thái chặt nhất
  </div>
  <table style="border-collapse:collapse;font-size:.82rem;width:100%;margin-top:6px;">
    <thead><tr style="background:#1565c0;color:#fff;text-align:center;">
      <th style="padding:5px 8px;">Trạng thái</th>
      <th style="padding:5px 8px;">$D_r$ (%)</th>
      <th style="padding:5px 8px;">Hệ số rỗng $e$ (cát)</th>
    </tr></thead>
    <tbody>
      <tr style="background:#ffccbc;"><td style="padding:4px 8px;font-weight:700;">Rời</td><td style="padding:4px 8px;text-align:center;">$D_r {<} 33$</td><td style="padding:4px 8px;text-align:center;">$e > 0.8$</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Chặt vừa</td><td style="padding:4px 8px;text-align:center;">$33 \\leq D_r < 67$</td><td style="padding:4px 8px;text-align:center;">$0.6 < e \\leq 0.8$</td></tr>
      <tr style="background:#c8e6c9;"><td style="padding:4px 8px;font-weight:700;">Chặt</td><td style="padding:4px 8px;text-align:center;">$D_r \\geq 67$</td><td style="padding:4px 8px;text-align:center;">$e \\leq 0.6$</td></tr>
    </tbody>
  </table>
</div>`;

// ─────────────────────────────────────────────────────────────────
//  BÀI 1.23 – Trạng thái đất DÍNH (tính Ip, IL, kết luận)
// ─────────────────────────────────────────────────────────────────
EXERCISES['ch1_tt01'] = {
  chapterId: 'ch1',
  title: '1.23 – Trạng thái đất dính: tính $I_P$ và $I_L$',
  type: 'guided',
  theoryHTML: LY_THUYET_TRANG_THAI,
  hint: `<div class="hint-title">💡 $I_P = W_L - W_P$. $I_L = (w - W_P)/I_P$. Tra bảng để kết luận trạng thái.</div>`,
  genData(rng) {
    const Wp = r2(18 + rng()*12);
    const Ip = r2(8  + rng()*22);
    const WL = r2(Wp + Ip);
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
    return `Đất sét có giới hạn chảy $W_L = ${d.WL}\%$, giới hạn dẻo $W_P = ${d.Wp}\%$.<br>
    Độ ẩm tự nhiên $w = ${d.w}\%$.<br>
    Xác định chỉ số dẻo $I_P$, độ sệt $I_L$ và <b>trạng thái</b> của đất.`;
  },
  questions: [
    { id:'q1', type:'fill', label:'I<sub>P</sub> = W<sub>L</sub> - W<sub>P</sub> (%)',    unit:'%', answer: d=>d.Ip, tol:0.1 },
    { id:'q2', type:'fill', label:'I<sub>L</sub> = (w - W<sub>P</sub>)/I<sub>P</sub>',    unit:'',  answer: d=>d.IL, tol:0.01 },
    { id:'q3', type:'mcq',  label:'Trạng thái của đất là:',
      choices: ()=>[
        'Cứng (rắn) – $I_L {<} 0$',
        'Nửa cứng – $0 \\leq I_L < 0.25$',
        'Dẻo cứng – $0.25 \\leq I_L < 0.50$',
        'Dẻo mềm – $0.50 \\leq I_L < 0.75$',
        'Dẻo chảy – $0.75 \\leq I_L \\leq 1.0$',
        'Chảy – $I_L > 1.0$',
      ],
      correctIndex: d=>d.ttIdx },
  ]
};

// ─────────────────────────────────────────────────────────────────
//  BÀI 1.24 – Trạng thái đất RỜI (tính Dr, kết luận)
// ─────────────────────────────────────────────────────────────────
EXERCISES['ch1_tt02'] = {
  chapterId: 'ch1',
  title: '1.24 – Trạng thái đất rời: độ chặt tương đối $D_r$',
  type: 'guided',
  theoryHTML: LY_THUYET_TRANG_THAI_ROI,
  hint: `<div class="hint-title">💡 $D_r = (e_{\\max} - e)/(e_{\\max} - e_{\\min}) \\times 100\%$. Tra bảng phân loại theo $D_r$.</div>`,
  genData(rng) {
    const e_min = r3(0.40 + rng()*0.15);
    const e_max = r3(e_min + 0.35 + rng()*0.25);
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
    return `Đất cát có hệ số rỗng tự nhiên $e = ${d.e}$.<br>
    Từ TN xác định được: $e_{\\max} = ${d.e_max}$ (rời nhất), $e_{\\min} = ${d.e_min}$ (chặt nhất).<br>
    Tính độ chặt tương đối $D_r$ và xác định <b>trạng thái</b> đất.`;
  },
  questions: [
    { id:'q1', type:'fill', label:'D<sub>r</sub> = (e<sub>\max</sub>-e)/(e<sub>\max</sub>-e<sub>\min</sub>) \× 100 (%)', unit:'%', answer: d=>d.Dr_pct, tol:0.5 },
    { id:'q2', type:'mcq',  label:'Trạng thái đất rời:',
      choices: ()=>[
        'Rời – $D_r < 33\\%$',
        'Chặt vừa – $33\\% \\leq D_r < 67\\%$',
        'Chặt – $D_r \\geq 67\\%$',
      ],
      correctIndex: d=>d.ttIdx },
  ]
};

// ─────────────────────────────────────────────────────────────────
//  BÀI 1.25 – Xác định tên đất theo TCVN (dựa vào Ip)
// ─────────────────────────────────────────────────────────────────
const LY_THUYET_TEN_DAT = `
<div class="theory-block">
  <div class="theory-label">📖 XÁC ĐỊNH TÊN ĐẤT THEO TCVN 9362:2012</div>
  <p style="font-size:.84rem;margin-bottom:6px;"><b>Bước 1:</b> Dựa vào thành phần hạt (cấp phối) xác định loại đất rời hay dính.</p>
  <table style="border-collapse:collapse;font-size:.81rem;width:100%;margin-bottom:8px;">
    <thead><tr style="background:#1565c0;color:#fff;">
      <th style="padding:5px 8px;">Tên đất</th>
      <th style="padding:5px 8px;">Điều kiện cấp phối hạt</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:4px 8px;font-weight:700;">Cuội sỏi</td><td style="padding:4px 8px;">% hạt $d > 2\,\\text{mm} \\geq 50\%$</td></tr>
      <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Cát</td><td style="padding:4px 8px;">% hạt $0.05\,\\text{mm} \\leq d \\leq 2\,\\text{mm} \\geq 50\%$</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Đất dính</td><td style="padding:4px 8px;">% hạt $d {<} 0.005\,\\text{mm}$ chiếm đáng kể; dựa vào $I_P$</td></tr>
    </tbody>
  </table>
  <p style="font-size:.84rem;margin-bottom:6px;"><b>Bước 2 (đất dính):</b> Xác định tên theo chỉ số dẻo $I_P$:</p>
  <table style="border-collapse:collapse;font-size:.81rem;width:100%;">
    <thead><tr style="background:#2e7d32;color:#fff;">
      <th style="padding:5px 8px;">Tên đất dính</th>
      <th style="padding:5px 8px;">Chỉ số dẻo $I_P$ (%)</th>
    </tr></thead>
    <tbody>
      <tr><td style="padding:4px 8px;font-weight:700;">Cát pha (Á cát)</td><td style="padding:4px 8px;">$1 \\leq I_P {<} 7$</td></tr>
      <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Sét pha (Á sét)</td><td style="padding:4px 8px;">$7 \\leq I_P {<} 17$</td></tr>
      <tr><td style="padding:4px 8px;font-weight:700;">Sét</td><td style="padding:4px 8px;">$I_P \\geq 17$</td></tr>
    </tbody>
  </table>
</div>`;

EXERCISES['ch1_ten01'] = {
  chapterId: 'ch1',
  title: '1.25 – Xác định tên đất dính theo $I_P$ (TCVN)',
  type: 'guided',
  theoryHTML: LY_THUYET_TEN_DAT,
  hint: `<div class="hint-title">💡 $I_P = W_L - W_P$. Á cát: $1 \\leq I_P {<} 7$. Á sét: $7 \\leq I_P {<} 17$. Sét: $I_P \\geq 17$.</div>`,
  genData(rng) {
    const Wp = r2(16 + rng()*14);
    const loaiIdx = Math.floor(rng()*3);
    let Ip, tenDat, ttIdx;
    if (loaiIdx === 0) { Ip = r2(1 + rng()*5.9);  tenDat = 'Cát pha (Á cát)'; ttIdx=0; }
    else if (loaiIdx===1){ Ip = r2(7 + rng()*9.9); tenDat = 'Sét pha (Á sét)'; ttIdx=1; }
    else                 { Ip = r2(17+ rng()*18);  tenDat = 'Sét';              ttIdx=2; }
    const WL = r2(Wp + Ip);
    const w  = r2(Wp + rng()*Ip);
    const IL = r3((w-Wp)/Ip);
    return {Wp, WL, Ip, w, IL, tenDat, ttIdx};
  },
  statement(d) {
    return `Đất dính có các chỉ tiêu: $W_L = ${d.WL}\%$, $W_P = ${d.Wp}\%$, $w = ${d.w}\%$.<br>
    Xác định <b>chỉ số dẻo $I_P$</b> và <b>tên đất</b> theo TCVN.`;
  },
  questions: [
    { id:'q1', type:'fill', label:'I<sub>P</sub> = W<sub>L</sub> - W<sub>P</sub> (%)',  unit:'%', answer: d=>d.Ip, tol:0.1 },
    { id:'q2', type:'mcq',  label:'Tên đất theo TCVN:',
      choices: ()=>[
        'Cát pha (Á cát) – $1 \\leq I_P {<} 7$',
        'Sét pha (Á sét) – $7 \\leq I_P {<} 17$',
        'Sét – $I_P \\geq 17$',
      ],
      correctIndex: d=>d.ttIdx },
  ]
};

// ─────────────────────────────────────────────────────────────────
//  BÀI 1.26 – Xác định tên đất rời theo cấp phối hạt (TCVN)
// ─────────────────────────────────────────────────────────────────
EXERCISES['ch1_ten02'] = {
  chapterId: 'ch1',
  title: '1.26 – Xác định tên đất rời theo cấp phối hạt (TCVN)',
  type: 'apply',
  theoryHTML: LY_THUYET_TEN_DAT,
  hint: `<div class="hint-title">💡 Đất rời: nếu % hạt $d > 2\,\\text{mm} \\geq 50\%$ → cuội sỏi. Nếu % hạt $0.05\,\\text{mm} \\leq d \\leq 2\,\\text{mm} \\geq 50\%$ → cát.<br>Trong cát: cát thô (% $d > 0.5\,\\text{mm} \\geq 50\%$), cát vừa (% $d > 0.25\,\\text{mm} \\geq 50\%$), cát mịn (% $d > 0.1\,\\text{mm} \\geq 75\%$).</div>`,
  genData(rng) {
    const loaiIdx = Math.floor(rng()*4);
    let pcts, tenDat, ttIdx;
    if (loaiIdx===0) {
      const p1 = r2(50 + rng()*45);
      const rem= 100-p1;
      const p2 = r2(rem*rng()*0.6); const p3=r2(rem*rng()*0.3);
      const p4 = r2(rem*rng()*0.2); const p5=r2(Math.max(0,rem-p2-p3-p4)*0.5);
      const p6 = r2(Math.max(0,rem-p2-p3-p4-p5));
      pcts=[p1,p2,p3,p4,p5,p6]; tenDat='Cuội sỏi'; ttIdx=0;
    } else if (loaiIdx===1) {
      const p1=r2(5+rng()*15); const p2=r2(45+rng()*35);
      const rem=100-p1-p2; const p3=r2(rem*rng()*0.4);
      const p4=r2(rem*rng()*0.4); const p5=r2(rem*rng()*0.3);
      const p6=r2(Math.max(0,rem-p3-p4-p5));
      pcts=[p1,p2,p3,p4,p5,p6]; tenDat='Cát thô'; ttIdx=1;
    } else if (loaiIdx===2) {
      const p1=r2(rng()*8); const p2=r2(10+rng()*20);
      const p3=r2(25+rng()*25); const rem=100-p1-p2-p3;
      const p4=r2(rem*rng()*0.4); const p5=r2(rem*rng()*0.3);
      const p6=r2(Math.max(0,rem-p4-p5));
      pcts=[p1,p2,p3,p4,p5,p6]; tenDat='Cát vừa'; ttIdx=2;
    } else {
      const p1=r2(rng()*5); const p2=r2(rng()*10);
      const p3=r2(rng()*15); const p4=r2(45+rng()*30);
      const rem=100-p1-p2-p3-p4; const p5=r2(rem*rng()*0.5);
      const p6=r2(Math.max(0,rem-p5));
      pcts=[p1,p2,p3,p4,p5,p6]; tenDat='Cát mịn'; ttIdx=3;
    }
    const gt05  = r2(pcts[0]+pcts[1]);
    const gt025 = r2(pcts[0]+pcts[1]+pcts[2]);
    const gt01  = r2(pcts[0]+pcts[1]+pcts[2]+pcts[3]);
    return {pcts, tenDat, ttIdx, gt05, gt025, gt01};
  },
  statement(d) {
    return `Kết quả phân tích hạt (%):<br>
    <table style="border-collapse:collapse;font-size:.85rem;margin:8px 0;width:100%;">
    <thead><tr style="background:#e3f0fd;text-align:center;">
      <th style="padding:4px 10px;">$d > 2\,\\text{mm}$</th>
      <th style="padding:4px 10px;">2–0.5mm</th>
      <th style="padding:4px 10px;">0.5–0.25mm</th>
      <th style="padding:4px 10px;">0.25–0.1mm</th>
      <th style="padding:4px 10px;">0.1–0.05mm</th>
      <th style="padding:4px 10px;">$d {<} 0.05\,\\text{mm}$</th>
    </tr></thead>
    <tbody><tr style="text-align:center;">
      <td style="padding:4px 10px;">${d.pcts[0]}%</td>
      <td style="padding:4px 10px;">${d.pcts[1]}%</td>
      <td style="padding:4px 10px;">${d.pcts[2]}%</td>
      <td style="padding:4px 10px;">${d.pcts[3]}%</td>
      <td style="padding:4px 10px;">${d.pcts[4]}%</td>
      <td style="padding:4px 10px;">${d.pcts[5]}%</td>
    </tr></tbody></table>
    Xác định <b>tên đất rời</b> theo TCVN:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'% hạt d > 2 mm (%)',        unit:'%', answer: d=>d.pcts[0], tol:0.5 },
    { id:'q2', type:'fill', label:'% hạt d > 0.5 mm (gộp %)',  unit:'%', answer: d=>d.gt05,     tol:0.5 },
    { id:'q3', type:'fill', label:'% hạt d > 0.25 mm (gộp %)', unit:'%', answer: d=>d.gt025,    tol:0.5 },
    { id:'q4', type:'mcq',  label:'Tên đất theo TCVN:',
      choices: ()=>[
        'Cuội sỏi – hạt $d > 2\\,\\text{mm} \\geq 50\\%$',
        'Cát thô – hạt $d > 0.5\\,\\text{mm} \\geq 50\\%$',
        'Cát vừa – hạt $d > 0.25\\,\\text{mm} \\geq 50\\%$',
        'Cát mịn – hạt $d > 0.1\\,\\text{mm} \\geq 75\\%$',
      ],
      correctIndex: d=>d.ttIdx },
  ]
};

// ─────────────────────────────────────────────────────────────────
//  TỔNG HỢP CÔNG THỨC CHƯƠNG 1 (phiên bản đầy đủ)
// ─────────────────────────────────────────────────────────────────

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
.s1b-f{background:#e3f0fd;border-radius:5px;padding:3px 10px;font-family:monospace;min-width:240px;flex-shrink:0}
.s1b-n{color:#555;font-size:.82rem;padding-top:3px}
</style>

<div class="s1b-sec">
  <h4>A. Thành phần thể tích – Khối lượng</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">$V = V_h + V_r = V_h + V_w + V_k$</div><div class="s1b-n">Tổng thể tích</div></div>
    <div class="s1b-row"><div class="s1b-f">$n = V_r/V \\times 100\%$</div><div class="s1b-n">Độ rỗng</div></div>
    <div class="s1b-row"><div class="s1b-f">$m = V_h/V$ &nbsp; ($n + m = 1$)</div><div class="s1b-n">Độ đặc</div></div>
    <div class="s1b-row"><div class="s1b-f">$e = V_r/V_h$ &nbsp; ($e = n/(1-n)$)</div><div class="s1b-n">Hệ số rỗng</div></div>
    <div class="s1b-row"><div class="s1b-f">$S = V_w/V_r$</div><div class="s1b-n">Độ bão hòa (0–1)</div></div>
    <div class="s1b-row"><div class="s1b-f">$w = Q_w/Q_h \\times 100\%$</div><div class="s1b-n">Độ ẩm</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>B. Trọng lượng riêng (kN/m³)</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">$\\gamma_{tn} = Q/V \\times 10$</div><div class="s1b-n">Tự nhiên</div></div>
    <div class="s1b-row"><div class="s1b-f">$\\gamma_k = Q_h/V \\times 10 = \\gamma_{tn}/(1+0.01w)$</div><div class="s1b-n">Khô</div></div>
    <div class="s1b-row"><div class="s1b-f">$\\gamma_{bh} = (\\Delta-1)\\gamma_w/(1+e) + \\gamma_w$</div><div class="s1b-n">Bão hòa</div></div>
    <div class="s1b-row"><div class="s1b-f">$\\gamma_{dn} = \\gamma_{bh} - \\gamma_w$</div><div class="s1b-n">Đẩy nổi ($\\gamma_w = 10$)</div></div>
    <div class="s1b-row"><div class="s1b-f">$\\gamma_h = Q_h/V_h \\times 10 = \\Delta \\cdot \\gamma_w$</div><div class="s1b-n">Hạt đất</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>C. Tính từ w, γ_tn, Δ</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">$\\gamma_k = \\gamma_{tn}/(1 + 0.01w)$</div></div>
    <div class="s1b-row"><div class="s1b-f">$n = 1 - \\gamma_k/(\\Delta \\cdot \\gamma_w)$</div></div>
    <div class="s1b-row"><div class="s1b-f">$e = n/(1-n)$</div></div>
    <div class="s1b-row"><div class="s1b-f">$S = 0.01\,w\,\\Delta/e$</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>D. Trạng thái đất DÍNH – Giới hạn Atterberg</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">$I_P = W_L - W_P$</div><div class="s1b-n">Chỉ số dẻo (%)</div></div>
    <div class="s1b-row"><div class="s1b-f">$I_L = (w - W_P)/I_P$</div><div class="s1b-n">Độ sệt</div></div>
    <div class="s1b-row"><div class="s1b-f">$I_L {<} 0$: Cứng &nbsp;|&nbsp; $0$–$0.25$: Nửa cứng</div></div>
    <div class="s1b-row"><div class="s1b-f">$0.25$–$0.5$: Dẻo cứng &nbsp;|&nbsp; $0.5$–$0.75$: Dẻo mềm</div></div>
    <div class="s1b-row"><div class="s1b-f">$0.75$–$1.0$: Dẻo chảy &nbsp;|&nbsp; $> 1.0$: Chảy</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>E. Trạng thái đất RỜI – Độ chặt tương đối</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">$D_r = (e_{\\max} - e)/(e_{\\max} - e_{\\min}) \\times 100\%$</div></div>
    <div class="s1b-row"><div class="s1b-f">$D_r {<} 33\%$: Rời &nbsp;|&nbsp; $33$–$67\%$: Chặt vừa &nbsp;|&nbsp; $> 67\%$: Chặt</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>F. Tên đất theo TCVN (theo $I_P$)</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">$1 \\leq I_P {<} 7$: Cát pha (Á cát)</div></div>
    <div class="s1b-row"><div class="s1b-f">$7 \\leq I_P {<} 17$: Sét pha (Á sét)</div></div>
    <div class="s1b-row"><div class="s1b-f">$I_P \\geq 17$: Sét</div></div>
    <div class="s1b-row"><div class="s1b-f">% hạt $d > 2\,\\text{mm} \\geq 50\%$: Cuội sỏi</div></div>
    <div class="s1b-row"><div class="s1b-f">% hạt $0.05 \\leq d \\leq 2\,\\text{mm} \\geq 50\%$: Cát (thô/vừa/mịn)</div></div>
  </div>
</div>

<div class="s1b-sec">
  <h4>G. Rây sàng & Cấp phối hạt</h4>
  <div class="s1b-body">
    <div class="s1b-row"><div class="s1b-f">$P({<}d) = \\sum m(<d)\,/\,m_{\\text{tổng}} \\times 100\%$</div><div class="s1b-n">Hàm lượng tích lũy</div></div>
    <div class="s1b-row"><div class="s1b-f">$P(d_1 \\text{–} d_2) = P({<}d_2) - P({<}d_1)$</div><div class="s1b-n">Hiệu 2 tích lũy liên tiếp</div></div>
  </div>
</div>`,
  hint: `<div class="hint-title">📌 Tóm tắt toàn bộ công thức chương 1 – không có câu hỏi tính toán.</div>`,
  genData(rng){ return {}; },
  statement(d){ return ''; },
  questions: []
};
