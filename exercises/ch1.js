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
  <text x="88" y="50" text-anchor="middle" font-size="11" fill="#1565c0" font-weight="600">Khí (Air)   V_k</text>
  <!-- Nước -->
  <rect x="20" y="70" width="135" height="50" fill="url(#p-nuoc)" stroke="#0288d1" stroke-width="1" rx="3"/>
  <text x="88" y="98" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Nước (Water)  V_w</text>
  <!-- Hạt -->
  <rect x="20" y="122" width="135" height="58" fill="url(#p-hat)" stroke="#5d4037" stroke-width="1" rx="3"/>
  <rect x="20" y="122" width="135" height="58" fill="url(#p-hatch)" opacity="0.3" rx="3"/>
  <text x="88" y="154" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Hạt đất (Solid)  V_h</text>

  <!-- ② ĐẤT BÃO HÒA (2 pha: nước + hạt) -->
  <rect x="182" y="8" width="155" height="184" rx="6" fill="#e8f5e9" stroke="#81c784" stroke-width="1.5"/>
  <text x="260" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#1b5e20">Đất bão hòa (2 pha)</text>
  <rect x="192" y="28" width="135" height="93" fill="url(#p-nuoc)" stroke="#0288d1" stroke-width="1" rx="3"/>
  <text x="260" y="77" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Nước (Water)</text>
  <rect x="192" y="122" width="135" height="58" fill="url(#p-hat)" stroke="#5d4037" stroke-width="1" rx="3"/>
  <rect x="192" y="122" width="135" height="58" fill="url(#p-hatch)" opacity="0.3" rx="3"/>
  <text x="260" y="154" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Hạt đất (Solid)</text>

  <!-- ③ ĐẤT KHÔ (2 pha: khí + hạt) -->
  <rect x="354" y="8" width="155" height="184" rx="6" fill="#fff8e1" stroke="#ffb74d" stroke-width="1.5"/>
  <text x="432" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#e65100">Đất khô (2 pha)</text>
  <rect x="364" y="28" width="135" height="93" fill="url(#p-khi)" stroke="#90caf9" stroke-width="1" rx="3"/>
  <text x="432" y="77" text-anchor="middle" font-size="11" fill="#1565c0" font-weight="600">Khí (Air)</text>
  <rect x="364" y="122" width="135" height="58" fill="url(#p-hat)" stroke="#5d4037" stroke-width="1" rx="3"/>
  <rect x="364" y="122" width="135" height="58" fill="url(#p-hatch)" opacity="0.3" rx="3"/>
  <text x="432" y="154" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Hạt đất (Solid)</text>

  <!-- Nhãn A B C -->
  <text x="88"  y="195" text-anchor="middle" font-size="13" font-weight="700" fill="#555">A</text>
  <text x="260" y="195" text-anchor="middle" font-size="13" font-weight="700" fill="#555">B</text>
  <text x="432" y="195" text-anchor="middle" font-size="13" font-weight="700" fill="#555">C</text>
</svg>`;

// ── SVG sơ đồ quan hệ thể tích - khối lượng ─────────────────────
const SVG_CONG_THUC = `
<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:8px auto;border-radius:8px;box-shadow:0 1px 6px rgba(0,0,0,.1)">
  <defs>
    <linearGradient id="ct-khi"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e3f2fd"/><stop offset="100%" stop-color="#bbdefb"/></linearGradient>
    <linearGradient id="ct-nuoc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#81d4fa"/><stop offset="100%" stop-color="#0288d1"/></linearGradient>
    <linearGradient id="ct-hat"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d7ccc8"/><stop offset="100%" stop-color="#8d6e63"/></linearGradient>
  </defs>
  <rect width="480" height="220" fill="#fafbff" rx="8"/>
  <!-- Cột trái: Thể tích -->
  <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1565c0">Thể tích (V)</text>
  <!-- V_k -->
  <rect x="20" y="28" width="140" height="40" fill="url(#ct-khi)" stroke="#90caf9" stroke-width="1.5" rx="2"/>
  <text x="90" y="52" text-anchor="middle" font-size="10" fill="#1565c0">V_k (khí)</text>
  <!-- V_r = V_k + V_w -->
  <line x1="165" y1="28" x2="165" y2="82" stroke="#888" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="168" y="60" font-size="9" fill="#888">V_r</text>
  <!-- V_w -->
  <rect x="20" y="70" width="140" height="50" fill="url(#ct-nuoc)" stroke="#0288d1" stroke-width="1.5" rx="2"/>
  <text x="90" y="98" text-anchor="middle" font-size="10" fill="#fff">V_w (nước)</text>
  <!-- V_h -->
  <rect x="20" y="122" width="140" height="70" fill="url(#ct-hat)" stroke="#5d4037" stroke-width="1.5" rx="2"/>
  <text x="90" y="160" text-anchor="middle" font-size="10" fill="#fff">V_h (hạt đất)</text>
  <!-- V tổng -->
  <line x1="8" y1="28"  x2="8" y2="192" stroke="#e53935" stroke-width="2"/>
  <line x1="4" y1="28"  x2="12" y2="28"  stroke="#e53935" stroke-width="1.5"/>
  <line x1="4" y1="192" x2="12" y2="192" stroke="#e53935" stroke-width="1.5"/>
  <text x="1" y="115" font-size="11" fill="#e53935" font-weight="700" transform="rotate(-90,1,115)">V</text>

  <!-- Cột phải: Công thức -->
  <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1b5e20">Công thức chính</text>
  <rect x="195" y="28" width="270" height="184" fill="white" stroke="#e0e0e0" stroke-width="1" rx="5"/>
  <!-- Các công thức -->
  <text x="205" y="48"  font-size="9.5" fill="#333">n  = V_r/V       (độ rỗng, %)</text>
  <text x="205" y="64"  font-size="9.5" fill="#333">e  = V_r/V_h     (hệ số rỗng)</text>
  <text x="205" y="80"  font-size="9.5" fill="#333">m  = V_h/V       (độ đặc)</text>
  <text x="205" y="96"  font-size="9.5" fill="#333">S  = V_w/V_r     (độ bão hòa)</text>
  <text x="205" y="112" font-size="9.5" fill="#333">w  = Q_w/Q_h     (độ ẩm, %)</text>
  <line x1="200" y1="118" x2="460" y2="118" stroke="#e0e0e0" stroke-width="1"/>
  <text x="205" y="132" font-size="9.5" fill="#1565c0">γ_tn = Q/V       (TL riêng tự nhiên)</text>
  <text x="205" y="148" font-size="9.5" fill="#1565c0">γ_k  = Q_h/V     (TL riêng khô)</text>
  <text x="205" y="164" font-size="9.5" fill="#1565c0">γ_bh = (Q_h+V_r·γ_w)/V  (bão hòa)</text>
  <text x="205" y="180" font-size="9.5" fill="#1565c0">γ_dn = γ_bh − γ_w       (đẩy nổi)</text>
  <text x="205" y="196" font-size="9.5" fill="#e65100">γ_h  = Q_h/V_h   (TL riêng hạt)</text>
  <text x="205" y="208" font-size="9.5" fill="#555">n + m = 1  |  e = n/(1-n)</text>
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
      Đất lọt qua rây = kích thước &lt; đường kính rây đó.<br>
      Đất <b>trên rây</b> = kích thước &gt; đường kính rây đó.<br>
      Hạt nằm giữa 2 rây liên tiếp = kích thước trong khoảng đó.
    </div>
    <div style="background:#e3f0fd;border-radius:7px;padding:8px 14px;margin-top:8px;font-size:.84rem;">
      <b>Bảng rây mẫu (a = STT):</b><br>
      Rây 1: 10mm | Rây 2: 5mm | Rây 3: 2mm | Rây 4: 1mm<br>
      Rây 5: 0.5mm | Rây 6: 0.25mm | Rây 7: 0.1mm
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Đất <b>trên</b> Rây số 3 (d=2mm) nghĩa là hạt có kích thước > 2mm. Rây số 2 phía trên có d=5mm, nên hạt trên rây 3 có d: 2mm &lt; d &lt; 5mm.</div>`,
  genData(rng){ return {}; },
  statement(d){ return 'TN rây sàng: Rây số 3 có đường kính 2mm, đất trên rây là (100+a)g. Điều đó có nghĩa là:'; },
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
      Hạt có kích thước từ d₁ đến d₂ (d₁ &lt; d₂) nằm trên rây có đường kính d₁<br>
      (vì lọt qua rây d₂ nhưng không lọt qua rây d₁).<br><br>
      <b>Ví dụ:</b> Hạt kích thước 0.5–1.0 mm → nằm trên Rây số 5 (d=0.5mm)
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Hạt d = 0.5–1.0mm: lọt qua rây 1mm nhưng không lọt qua rây 0.5mm → nằm trên Rây số 5 (d=0.5mm), khối lượng = 5+5a.</div>`,
  genData(rng){ return {}; },
  statement(d){ return `Bảng rây sàng (a=STT): Rây 1:10mm(45+a)g, Rây 2:5mm(25+a)g, Rây 3:2mm(100+a)g, Rây 4:1mm(60+a)g, Rây 5:0.5mm(5+5a)g, Rây 6:0.25mm(20+3a)g, Rây 7:0.1mm(15+2a)g.<br>Khối lượng các hạt có kích thước <b>từ 0.5mm đến 1.0mm</b> là:`; },
  questions: [
    { id:'q1', type:'mcq', label:'Khối lượng hạt kích thước 0.5–1.0 mm:',
      choices: ()=>[
        'Rây số 3, khối lượng là 100 + a',
        'Rây số 4, khối lượng là 60 + a',
        'Rây số 5, khối lượng là 5 + 5a',
        'Rây số 7, khối lượng là 15 + 2a',
      ],
      correctIndex: ()=>1 }
  ]
};

EXERCISES['ch1_b2_05'] = {
  chapterId: 'ch1',
  title: '1.5 – TN rây sàng: khối lượng hạt kích thước < ngưỡng',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 KHỐI LƯỢNG HẠT CÓ KÍCH THƯỚC &lt; NGƯỠNG</div>
    <div style="font-size:.85rem;line-height:1.8;">
      Khối lượng hạt có kích thước &lt; d = tổng khối lượng trên tất cả các rây phía dưới rây d.<br>
      Hoặc = tổng khối lượng hạt lọt qua rây d (đáy hộp + các rây nhỏ hơn d).
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Hạt &lt; 0.25mm = lọt qua rây 0.25mm = hạt trên Rây 7(0.1mm) + hạt qua rây 7 = 15+2a + phần còn lại. Ở đây = Rây 7 + đáy.</div>`,
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
  statement(d){ return `Bảng rây (a=${d.a}): Rây 4:1mm(${60+d.a}g), Rây 5:0.5mm(${5+5*d.a}g), Rây 6:0.25mm(${20+3*d.a}g), Rây 7:0.1mm(${15+2*d.a}g).<br>Xác định khối lượng các hạt kích thước <b>&lt; 0.25 mm</b>:`; },
  questions: [
    { id:'q1', type:'fill', label:'Khối lượng hạt < 0.25mm (g)', unit:'g', answer: d=>d.lt025, tol:1 }
  ]
};

EXERCISES['ch1_b2_06'] = {
  chapterId: 'ch1',
  title: '1.6 – TN rây sàng: khối lượng hạt < 0.5mm và < 1.0mm',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TỔNG HỢP KHỐI LƯỢNG TÍCH LŨY</div>
    <div style="font-size:.85rem;line-height:1.8;">
      Khối lượng hạt &lt; d_i = tổng tất cả rây từ d_i trở xuống (kể cả đáy).
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Hạt &lt; 0.5mm = m(rây 6) + m(rây 7). Hạt &lt; 1.0mm = m(rây 5) + m(rây 6) + m(rây 7).</div>`,
  genData(rng){
    const a = Math.floor(1 + rng()*199);
    const m7=15+2*a, m6=20+3*a, m5=5+5*a;
    return {a, m7, m6, m5, lt05: m6+m7, lt10: m5+m6+m7};
  },
  statement(d){ return `Bảng rây (a=${d.a}): Rây 5:0.5mm(${d.m5}g), Rây 6:0.25mm(${d.m6}g), Rây 7:0.1mm(${d.m7}g).<br>Xác định khối lượng hạt &lt; 0.5mm và &lt; 1.0mm:`; },
  questions: [
    { id:'q1', type:'fill', label:'Khối lượng hạt < 0.5mm (g)',  unit:'g', answer: d=>d.lt05,  tol:1 },
    { id:'q2', type:'fill', label:'Khối lượng hạt < 1.0mm (g)', unit:'g', answer: d=>d.lt10,  tol:1 },
  ]
};

EXERCISES['ch1_b2_07'] = {
  chapterId: 'ch1',
  title: '1.7 – TN rây sàng: hàm lượng tích lũy (%)',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 HÀM LƯỢNG TÍCH LŨY (%)</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:9px 14px;margin:8px 0;font-family:monospace;font-size:.88rem;">
      P(&lt;d) = [Tổng KL hạt &lt; d / Tổng KL mẫu] × 100%
    </div>
    <div style="font-size:.84rem;">Tổng khối lượng mẫu = tổng tất cả rây (bao gồm đáy).</div>
  </div>`,
  hint: `<div class="hint-title">💡 P = (khối lượng hạt nhỏ hơn d / tổng khối lượng toàn bộ mẫu) × 100</div>`,
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
    Tổng khối lượng mẫu = <b>${d.total}g</b>. Tính hàm lượng tích lũy hạt &lt; 0.5mm, &lt; 1.0mm và &lt; 5.0mm:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'Tổng KL mẫu (g)',     unit:'g',  answer: d=>d.total, tol:1 },
    { id:'q2', type:'fill', label:'P(< 0.5mm) (%)',      unit:'%',  answer: d=>d.p05,   tol:0.5 },
    { id:'q3', type:'fill', label:'P(< 1.0mm) (%)',      unit:'%',  answer: d=>d.p10,   tol:0.5 },
    { id:'q4', type:'fill', label:'P(< 5.0mm) (%)',      unit:'%',  answer: d=>d.p50,   tol:0.5 },
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
      <b>Hàm lượng từng nhóm</b> = hiệu của 2 giá trị tích lũy liên tiếp.
    </div>
    <div style="background:#e3f0fd;border-radius:7px;padding:8px 14px;margin-top:8px;font-size:.84rem;">
      <b>Bảng cấp phối mẫu:</b><br>
      d(mm): &gt;2 | 2–1 | 1–0.25 | 0.25–0.05 | 0.05–0.005 | &lt;0.005<br>
      Hàm lượng (%): 3.2 | 9.1 | 43.4 | 19.3 | 13.3 | 11.7<br>
      Tích lũy (%): 100 | 96.8 | 87.7 | 44.3 | 25.0 | 11.7
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Hàm lượng nhóm 0.05–0.25mm = P(&lt;0.25) − P(&lt;0.05) = 44.3 − 25.0 = 19.3%</div>`,
  genData(rng){ return {}; },
  statement(d){ return `Bảng cấp phối: d(mm) &gt;2(3.2%), 2-1(9.1%), 1-0.25(43.4%), 0.25-0.05(19.3%), 0.05-0.005(13.3%), &lt;0.005(11.7%). Tích lũy(%): 100, 96.8, 87.7, 44.3, 25.0, 11.7.<br>Xác định hàm lượng các nhóm hạt:`;},
  questions: [
    { id:'q1', type:'fill', label:'Hàm lượng nhóm 0.05–0.25mm (%)', unit:'%', answer: ()=>19.3, tol:0.5 },
    { id:'q2', type:'fill', label:'Hàm lượng nhóm 0.25–1.00mm (%)', unit:'%', answer: ()=>43.4, tol:0.5 },
    { id:'q3', type:'fill', label:'P tích lũy (< 0.05mm) (%)',       unit:'%', answer: ()=>25.0, tol:0.5 },
    { id:'q4', type:'fill', label:'P tích lũy (< 2.0mm) (%)',        unit:'%', answer: ()=>96.8, tol:0.5 },
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
function _genB3_type1(rng) {
  // Q_dat = 150 + a/2 (g); Q_k = 90 + a (g); V = 90 + a (cm³); V_h = 34 + a/2 (cm³)
  // a = STT, nhưng ở đây dùng rng để random hoá
  const a   = Math.floor(1 + rng()*199);
  const Q   = r2(150 + a/2);   // g – KL đất tự nhiên
  const Qk  = r2(90  + a);     // g – KL đất khô
  const V   = r2(90  + a);     // cm³ – thể tích đất
  const Vh  = r2(34  + a/2);   // cm³ – thể tích hạt
  const Qw  = r2(Q - Qk);      // g – KL nước
  const Vr  = r2(V - Vh);      // cm³ – thể tích lỗ rỗng
  const Vw  = r2(Qw / 1);      // cm³ ≈ KL nước (γ_w=1 g/cm³)
  const gw  = 10;               // kN/m³
  const n   = r3(Vr / V);
  const m   = r3(Vh / V);
  const e   = r3(Vr / Vh);
  const S   = r3(Vw / Vr);
  const w   = r3(Qw / Qk * 100);
  const g_tn  = r3(Q  / V * 10);  // kN/m³ (×10 đổi g/cm³→kN/m³)
  const g_k   = r3(Qk / V * 10);
  const g_bh  = r3((Qk + Vr*1) / V * 10);
  const g_dn  = r3(g_bh - 10);
  const g_h   = r3(Qk / Vh * 10);
  return {a, Q, Qk, V, Vh, Qw, Vr, Vw, n, m, e, S, w, g_tn, g_k, g_bh, g_dn, g_h};
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
  hint: `<div class="hint-title">💡 n = V_r/V (%), m = V_h/V. Với V_r = V − V_h.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất TN cho: Q_đất = <b>${d.Q}g</b>, Q_khô = <b>${d.Qk}g</b>, V = <b>${d.V}cm³</b>, V_h = <b>${d.Vh}cm³</b>.<br>Xác định <b>thể tích lỗ rỗng V_r</b>, <b>độ rỗng n</b> và <b>độ đặc m</b>:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'V_r = V − V_h (cm³)',   unit:'cm³', answer: d=>d.Vr, tol:0.1 },
    { id:'q2', type:'fill', label:'n = V_r/V',              unit:'',    answer: d=>d.n,  tol:0.005 },
    { id:'q3', type:'fill', label:'m = V_h/V',              unit:'',    answer: d=>d.m,  tol:0.005 },
  ]
};

EXERCISES['ch1_b3_02'] = {
  chapterId: 'ch1',
  title: '1.11 – Chỉ tiêu vật lý: hệ số rỗng e, độ bão hòa S',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 e = V_r/V_h. S = V_w/V_r (V_w ≈ Q_w vì γ_w=1g/cm³).</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: Q_đất = <b>${d.Q}g</b>, Q_khô = <b>${d.Qk}g</b>, V = <b>${d.V}cm³</b>, V_h = <b>${d.Vh}cm³</b>.<br>V_r = ${d.Vr}cm³. Xác định <b>hệ số rỗng e</b> và <b>độ bão hòa S</b>:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'Q_w = Q − Q_k (g)',      unit:'g',   answer: d=>d.Qw, tol:0.1 },
    { id:'q2', type:'fill', label:'V_w ≈ Q_w (cm³)',         unit:'cm³', answer: d=>d.Vw, tol:0.1 },
    { id:'q3', type:'fill', label:'e = V_r/V_h',             unit:'',    answer: d=>d.e,  tol:0.005 },
    { id:'q4', type:'fill', label:'S = V_w/V_r',             unit:'',    answer: d=>d.S,  tol:0.005 },
  ]
};

EXERCISES['ch1_b3_03'] = {
  chapterId: 'ch1',
  title: '1.12 – Chỉ tiêu vật lý: độ ẩm w, trọng lượng riêng tự nhiên γ_tn',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 w = Q_w/Q_k × 100 (%). γ_tn = Q/V × 10 (đổi g/cm³ → kN/m³).</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: Q_đất = <b>${d.Q}g</b>, Q_khô = <b>${d.Qk}g</b>, V = <b>${d.V}cm³</b>.<br>Xác định <b>độ ẩm w (%)</b> và <b>trọng lượng riêng tự nhiên γ_tn (kN/m³)</b>:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'w = Q_w/Q_k × 100 (%)',    unit:'%',     answer: d=>d.w,    tol:0.2 },
    { id:'q2', type:'fill', label:'γ_tn = Q/V × 10 (kN/m³)', unit:'kN/m³', answer: d=>d.g_tn, tol:0.05 },
  ]
};

EXERCISES['ch1_b3_04'] = {
  chapterId: 'ch1',
  title: '1.13 – Chỉ tiêu vật lý: γ_khô, γ_bão hòa, γ_đẩy nổi, γ_hạt',
  type: 'guided',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 γ_k=Q_k/V×10. γ_bh=(Q_k+V_r·γ_w)/V×10 (γ_w=10kN/m³→1g/cm³). γ_dn=γ_bh−10. γ_h=Q_k/V_h×10.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất: Q_khô = <b>${d.Qk}g</b>, V = <b>${d.V}cm³</b>, V_h = <b>${d.Vh}cm³</b>, V_r = <b>${d.Vr}cm³</b>.<br>Xác định γ_khô, γ_bão hòa, γ_đẩy nổi và γ_hạt (kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'γ_k = Q_k/V × 10 (kN/m³)',       unit:'kN/m³', answer: d=>d.g_k,  tol:0.05 },
    { id:'q2', type:'fill', label:'γ_bh = (Q_k+V_r)/V × 10 (kN/m³)',unit:'kN/m³', answer: d=>d.g_bh, tol:0.05 },
    { id:'q3', type:'fill', label:'γ_dn = γ_bh − 10 (kN/m³)',        unit:'kN/m³', answer: d=>d.g_dn, tol:0.05 },
    { id:'q4', type:'fill', label:'γ_h = Q_k/V_h × 10 (kN/m³)',      unit:'kN/m³', answer: d=>d.g_h,  tol:0.05 },
  ]
};

// ── B3 Bộ 2: từ w, γ_tn, Δ ─────────────────────────────────────

EXERCISES['ch1_b3_05'] = {
  chapterId: 'ch1',
  title: '1.14 – Chỉ tiêu từ w, γ_tn, Δ: tính γ_k, n, e',
  type: 'guided',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TÍNH CHỈ TIÊU TỪ w, γ_tn, Δ</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:10px 14px;margin:8px 0;font-size:.85rem;font-family:monospace;line-height:2;">
      γ_k = γ_tn / (1 + 0.01·w)<br>
      n = 1 − γ_k / (Δ·γ_w)  &nbsp;[γ_w = 10 kN/m³]<br>
      e = n / (1 − n)
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Tính γ_k trước, rồi n = 1 − γ_k/(Δ×10), cuối cùng e = n/(1−n).</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Mẫu đất có: w = <b>${d.w}%</b>, γ_tn = <b>${d.g_tn} kN/m³</b>, Δ (tỷ trọng hạt) = <b>${d.D}</b>.<br>Xác định γ_k, n và e:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'γ_k = γ_tn/(1+0.01w) (kN/m³)', unit:'kN/m³', answer: d=>d.g_k, tol:0.05 },
    { id:'q2', type:'fill', label:'n = 1 − γ_k/(Δ·γ_w)',           unit:'',      answer: d=>d.n,   tol:0.005 },
    { id:'q3', type:'fill', label:'e = n/(1−n)',                    unit:'',      answer: d=>d.e,   tol:0.005 },
  ]
};

EXERCISES['ch1_b3_06'] = {
  chapterId: 'ch1',
  title: '1.15 – Chỉ tiêu từ w, γ_tn, Δ: tính S, γ_bh, γ_dn',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TÍNH γ_bh, γ_dn, S</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:10px 14px;margin:8px 0;font-size:.85rem;font-family:monospace;line-height:2;">
      S = 0.01·w·Δ / e<br>
      γ_bh = (Δ−1)·γ_w / (1+e) + γ_w<br>
      γ_dn = γ_bh − γ_w  &nbsp;[γ_w = 10 kN/m³]
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Dùng e đã tính ở bài trước. S=0.01wΔ/e. γ_bh=(Δ-1)×10/(1+e)+10.</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Mẫu đất: w = <b>${d.w}%</b>, Δ = <b>${d.D}</b>, e = <b>${d.e}</b> (đã tính).<br>Xác định S, γ_bh và γ_dn:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'S = 0.01·w·Δ/e',                   unit:'',      answer: d=>d.S,    tol:0.005 },
    { id:'q2', type:'fill', label:'γ_bh = (Δ−1)·10/(1+e)+10 (kN/m³)', unit:'kN/m³', answer: d=>d.g_bh, tol:0.05  },
    { id:'q3', type:'fill', label:'γ_dn = γ_bh − 10 (kN/m³)',          unit:'kN/m³', answer: d=>d.g_dn, tol:0.05  },
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
        <tr><td style="padding:4px 8px;font-weight:700;">Hệ số rỗng e</td><td style="padding:4px 8px;">Tỉ số V_lỗ rỗng / V_hạt</td><td style="padding:4px 8px;font-family:monospace;">e = V_r/V_h</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:4px 8px;font-weight:700;">Độ rỗng n</td><td style="padding:4px 8px;">Tỉ số V_lỗ rỗng / V_đất (×100%)</td><td style="padding:4px 8px;font-family:monospace;">n = V_r/V</td></tr>
        <tr><td style="padding:4px 8px;font-weight:700;">Độ bão hòa S</td><td style="padding:4px 8px;">Tỉ số V_nước / V_lỗ rỗng</td><td style="padding:4px 8px;font-family:monospace;">S = V_w/V_r</td></tr>
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
    <div style="background:#e3f0fd;border-radius:7px;padding:9px 14px;margin:8px 0;font-size:.87rem;font-family:monospace;line-height:2;">
      γ_ướt = Q_ướt / V × 10  (kN/m³)<br>
      [Đổi: g/cm³ × 10 = kN/m³]
    </div>
    <div style="font-size:.83rem;color:#555;">Q_ướt: khối lượng mẫu ướt (g) | V: thể tích mẫu (cm³)</div>
  </div>`,
  hint: `<div class="hint-title">💡 γ_ướt (kN/m³) = Q_ướt(g) / V(cm³) × 10. Ví dụ: 158.4g / 90cm³ × 10 = 17.6 kN/m³.</div>`,
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
    return `Mẫu đất có thể tích V = <b>${d.V} cm³</b>, khối lượng ướt Q_ướt = <b>${d.Q_uot} g</b>, khối lượng khô Q_khô = <b>${d.Q_kho} g</b>, tỷ trọng hạt Δ = <b>${d.D}</b>.<br>Tính <b>trọng lượng riêng ướt γ_ướt</b> (kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'γ_ướt = Q_ướt/V × 10 (kN/m³)', unit:'kN/m³', answer: d=>d.g_uot, tol:0.05 },
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
.s1-n{color:#555;font-size:.82rem}
</style>

<div class="s1-sec">
  <h4>A. Các thành phần thể tích</h4>
  <div class="s1-body">
    <div class="s1-row"><div class="s1-f">V = V_h + V_r</div><div class="s1-n">V_r = V_k + V_w (lỗ rỗng)</div></div>
    <div class="s1-row"><div class="s1-f">n = V_r/V (×100%)</div><div class="s1-n">Độ rỗng</div></div>
    <div class="s1-row"><div class="s1-f">m = V_h/V</div><div class="s1-n">Độ đặc; n + m = 1</div></div>
    <div class="s1-row"><div class="s1-f">e = V_r/V_h</div><div class="s1-n">Hệ số rỗng; e = n/(1−n)</div></div>
    <div class="s1-row"><div class="s1-f">S = V_w/V_r</div><div class="s1-n">Độ bão hòa (0 ≤ S ≤ 1)</div></div>
  </div>
</div>

<div class="s1-sec">
  <h4>B. Các chỉ tiêu khối lượng</h4>
  <div class="s1-body">
    <div class="s1-row"><div class="s1-f">w = Q_w/Q_h × 100%</div><div class="s1-n">Độ ẩm</div></div>
    <div class="s1-row"><div class="s1-f">γ_tn = Q/V × 10</div><div class="s1-n">TL riêng tự nhiên (kN/m³)</div></div>
    <div class="s1-row"><div class="s1-f">γ_k = Q_h/V × 10</div><div class="s1-n">TL riêng khô</div></div>
    <div class="s1-row"><div class="s1-f">γ_k = γ_tn/(1+0.01w)</div><div class="s1-n">Tính γ_k từ γ_tn và w</div></div>
    <div class="s1-row"><div class="s1-f">γ_bh = (Δ−1)γ_w/(1+e)+γ_w</div><div class="s1-n">TL riêng bão hòa</div></div>
    <div class="s1-row"><div class="s1-f">γ_dn = γ_bh − γ_w</div><div class="s1-n">TL riêng đẩy nổi (γ_w=10)</div></div>
    <div class="s1-row"><div class="s1-f">γ_h = Q_h/V_h × 10</div><div class="s1-n">TL riêng hạt đất</div></div>
  </div>
</div>

<div class="s1-sec">
  <h4>C. Tính từ w, γ_tn, Δ</h4>
  <div class="s1-body">
    <div class="s1-row"><div class="s1-f">γ_k = γ_tn/(1+0.01w)</div></div>
    <div class="s1-row"><div class="s1-f">n = 1 − γ_k/(Δ·γ_w)</div></div>
    <div class="s1-row"><div class="s1-f">e = n/(1−n)</div></div>
    <div class="s1-row"><div class="s1-f">S = 0.01·w·Δ/e</div></div>
  </div>
</div>

<div class="s1-sec">
  <h4>D. Rây sàng & Cấp phối hạt</h4>
  <div class="s1-body">
    <div class="s1-row"><div class="s1-f">Đất trên rây d = hạt > d</div><div class="s1-n">Lọt qua rây = hạt &lt; d</div></div>
    <div class="s1-row"><div class="s1-f">P(&lt;d) = ΣKL(≤d)/KL_tổng × 100%</div><div class="s1-n">Hàm lượng tích lũy</div></div>
    <div class="s1-row"><div class="s1-f">HL nhóm = P₂ − P₁</div><div class="s1-n">Hiệu 2 giá trị tích lũy</div></div>
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
    <div style="font-size:.84rem;line-height:1.8;">
      <b>Hàm lượng từng nhóm (%)</b> = KL_rây / KL_tổng × 100<br>
      <b>Hàm lượng tích lũy (%)</b> = cộng dồn từ nhóm hạt thô nhất<br>
      <b>P(&lt;d)</b> = % hạt có kích thước nhỏ hơn d (cộng từ nhỏ nhất lên)
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 Tổng tất cả hàm lượng từng nhóm = 100%. P(&lt;5mm) = 100 − % nhóm &gt;5mm.</div>`,
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
    { id:'q1', type:'fill', label:'P(< 0.1mm) (%)',   unit:'%', answer: d=>d.lt01,  tol:0.5 },
    { id:'q2', type:'fill', label:'P(< 0.25mm) (%)',  unit:'%', answer: d=>d.lt025, tol:0.5 },
    { id:'q3', type:'fill', label:'P(< 0.5mm) (%)',   unit:'%', answer: d=>d.lt05,  tol:0.5 },
    { id:'q4', type:'fill', label:'P(< 1.0mm) (%)',   unit:'%', answer: d=>d.lt10,  tol:0.5 },
    { id:'q5', type:'fill', label:'P(< 2.0mm) (%)',   unit:'%', answer: d=>d.lt20,  tol:0.5 },
    { id:'q6', type:'fill', label:'P(< 5.0mm) (%)',   unit:'%', answer: d=>d.lt50,  tol:0.5 },
  ]
};

// ── B3 bổ sung ──────────────────────────────────────────────────

EXERCISES['ch1_b3_09'] = {
  chapterId: 'ch1',
  title: '1.20 – Tổng hợp: 10 chỉ tiêu vật lý từ bộ Q, V, Vh',
  type: 'guided',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 Làm theo trình tự: V_r → Q_w → rồi tính lần lượt n, m, e, S, w, γ_tn, γ_k, γ_bh, γ_dn.</div>`,
  genData(rng){ return _genB3_type1(rng); },
  statement(d){
    return `Mẫu đất nguyên thổ cho kết quả TN:<br>
    <table style="border-collapse:collapse;font-size:.88rem;margin:8px 0;">
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Khối lượng đất tự nhiên</td><td style="padding:4px 12px;font-weight:700;">Q = ${d.Q} g</td></tr>
    <tr><td style="padding:4px 12px;">Khối lượng đất sau sấy khô</td><td style="padding:4px 12px;font-weight:700;">Q_k = ${d.Qk} g</td></tr>
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Thể tích đất</td><td style="padding:4px 12px;font-weight:700;">V = ${d.V} cm³</td></tr>
    <tr><td style="padding:4px 12px;">Thể tích hạt đất</td><td style="padding:4px 12px;font-weight:700;">V_h = ${d.Vh} cm³</td></tr>
    </table>
    Tính <b>đầy đủ 10 chỉ tiêu vật lý</b> của đất:`;
  },
  questions: [
    { id:'q1',  type:'fill', label:'V_r = V − V_h (cm³)',            unit:'cm³',   answer: d=>d.Vr,   tol:0.1  },
    { id:'q2',  type:'fill', label:'n = V_r/V (độ rỗng)',            unit:'',      answer: d=>d.n,    tol:0.005},
    { id:'q3',  type:'fill', label:'m = V_h/V (độ đặc)',             unit:'',      answer: d=>d.m,    tol:0.005},
    { id:'q4',  type:'fill', label:'e = V_r/V_h (hệ số rỗng)',       unit:'',      answer: d=>d.e,    tol:0.005},
    { id:'q5',  type:'fill', label:'S = V_w/V_r (độ bão hòa)',       unit:'',      answer: d=>d.S,    tol:0.005},
    { id:'q6',  type:'fill', label:'w = Q_w/Q_k × 100 (%)',          unit:'%',     answer: d=>d.w,    tol:0.2  },
    { id:'q7',  type:'fill', label:'γ_tn = Q/V × 10 (kN/m³)',        unit:'kN/m³', answer: d=>d.g_tn, tol:0.05 },
    { id:'q8',  type:'fill', label:'γ_k = Q_k/V × 10 (kN/m³)',       unit:'kN/m³', answer: d=>d.g_k,  tol:0.05 },
    { id:'q9',  type:'fill', label:'γ_bh (kN/m³)',                   unit:'kN/m³', answer: d=>d.g_bh, tol:0.05 },
    { id:'q10', type:'fill', label:'γ_dn = γ_bh − 10 (kN/m³)',       unit:'kN/m³', answer: d=>d.g_dn, tol:0.05 },
  ]
};

EXERCISES['ch1_b3_10'] = {
  chapterId: 'ch1',
  title: '1.21 – Tổng hợp: 10 chỉ tiêu từ w, γ_tn, Δ',
  type: 'apply',
  theoryHTML: LY_THUYET_CHI_TIEU,
  hint: `<div class="hint-title">💡 Trình tự: γ_k → n → e → S → γ_bh → γ_dn.</div>`,
  genData(rng){ return _genB3_type2(rng); },
  statement(d){
    return `Thí nghiệm mẫu đất cho 3 chỉ tiêu cơ bản:<br>
    <table style="border-collapse:collapse;font-size:.88rem;margin:8px 0;">
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Độ ẩm tự nhiên w (%)</td><td style="padding:4px 12px;font-weight:700;">${d.w}%</td></tr>
    <tr><td style="padding:4px 12px;">Trọng lượng riêng tự nhiên (kN/m³)</td><td style="padding:4px 12px;font-weight:700;">γ_tn = ${d.g_tn}</td></tr>
    <tr style="background:#e3f0fd;"><td style="padding:4px 12px;">Tỷ trọng của hạt</td><td style="padding:4px 12px;font-weight:700;">Δ = ${d.D}</td></tr>
    </table>
    Xác định các chỉ tiêu vật lý còn lại (γ_w = 10 kN/m³):`;
  },
  questions: [
    { id:'q1', type:'fill', label:'γ_k = γ_tn/(1+0.01w) (kN/m³)',      unit:'kN/m³', answer: d=>d.g_k,  tol:0.05  },
    { id:'q2', type:'fill', label:'n = 1 − γ_k/(Δ·γ_w)',               unit:'',      answer: d=>d.n,    tol:0.005 },
    { id:'q3', type:'fill', label:'e = n/(1−n)',                        unit:'',      answer: d=>d.e,    tol:0.005 },
    { id:'q4', type:'fill', label:'S = 0.01·w·Δ/e',                    unit:'',      answer: d=>d.S,    tol:0.005 },
    { id:'q5', type:'fill', label:'γ_bh = (Δ−1)·10/(1+e)+10 (kN/m³)', unit:'kN/m³', answer: d=>d.g_bh, tol:0.05  },
    { id:'q6', type:'fill', label:'γ_dn = γ_bh − 10 (kN/m³)',          unit:'kN/m³', answer: d=>d.g_dn, tol:0.05  },
  ]
};

EXERCISES['ch1_b3_11'] = {
  chapterId: 'ch1',
  title: '1.22 – Tính γ_ướt, γ_k, w, e từ mẫu đất (bài số)',
  type: 'apply',
  theoryHTML: `<div class="theory-block">
    <div class="theory-label">📖 TỔNG HỢP TÍNH TỪ V, Q_ướt, Q_k, Δ</div>
    <div style="background:#e3f0fd;border-radius:7px;padding:9px 14px;margin:8px 0;font-size:.85rem;font-family:monospace;line-height:2.1;">
      γ_tn = Q_ướt/V × 10  (kN/m³)<br>
      w = (Q_ướt − Q_k)/Q_k × 100  (%)<br>
      γ_k = γ_tn/(1+0.01w)  (kN/m³)<br>
      V_h = Q_k/(Δ×10)×10 = Q_k/Δ  (cm³, vì γ_h≈Δ×10→V_h=Q_k/γ_h×10)<br>
      e = (V−V_h)/V_h
    </div>
  </div>`,
  hint: `<div class="hint-title">💡 V_h = Q_k / (Δ × γ_w) = Q_k / (Δ × 10) × 10 = Q_k/Δ cm³ (khi γ_w = 1g/cm³). Sau đó e = (V−V_h)/V_h.</div>`,
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
    return `Mẫu đất có thể tích V = <b>${d.V} cm³</b>, khối lượng ướt = <b>${d.Q_uot} g</b>, khối lượng khô = <b>${d.Q_k} g</b>, tỷ trọng hạt Δ = <b>${d.D}</b>.<br>Tính các chỉ tiêu:`;
  },
  questions: [
    { id:'q1', type:'fill', label:'γ_tn = Q_ướt/V×10 (kN/m³)', unit:'kN/m³', answer: d=>d.g_tn_ans, tol:0.05 },
    { id:'q2', type:'fill', label:'w = (Q_ướt−Q_k)/Q_k×100 (%)',unit:'%',    answer: d=>d.w_ans,   tol:0.3  },
    { id:'q3', type:'fill', label:'γ_k (kN/m³)',                 unit:'kN/m³', answer: d=>d.g_k_ans, tol:0.05 },
    { id:'q4', type:'fill', label:'V_h = Q_k/Δ (cm³)',           unit:'cm³',  answer: d=>d.Vh_ans,  tol:0.2  },
    { id:'q5', type:'fill', label:'e = (V−V_h)/V_h',             unit:'',     answer: d=>d.e_ans,   tol:0.01 },
  ]
};
