// ═══════════════════════════════════════════════════════
//  exercises/ch4.js – Chương 4: TN Hiện Trường
// ═══════════════════════════════════════════════════════


// ────────────────────────────────────────────────────────
// BÀI 4.1 – Thí nghiệm Xuyên Tiêu Chuẩn (SPT)
// ────────────────────────────────────────────────────────
EXERCISES['ch4_b1'] = {
  chapterId: 'ch4',
  title: 'Bài 4.1 – Thí nghiệm Xuyên Tiêu Chuẩn (SPT)',
  type: 'guided',

  // ══════════════════════════════════════════════════════
  //  LÝ THUYẾT: SVG + bảng tra
  // ══════════════════════════════════════════════════════
  theoryHTML: `
  <div class="theory-block">
    <div class="theory-label">📖 Thí nghiệm Xuyên Tiêu Chuẩn – SPT</div>

    <div style="display:grid;grid-template-columns:1fr 160px;gap:20px;align-items:start;margin-bottom:16px;">

      <!-- Định nghĩa -->
      <div>
        <p style="font-size:.9rem;line-height:1.85;margin-bottom:10px;">
          SPT dùng búa trọng lượng <strong>Q = 63,5 kg</strong> rơi tự do
          từ độ cao <strong>H = 76 cm</strong> đóng ống lấy mẫu vào đất.
        </p>
        <div style="background:#fff;border:2px solid #1565c0;border-radius:8px;
                    padding:9px 15px;margin-bottom:11px;display:inline-block;">
          <span style="font-size:.95rem;font-weight:700;color:#1565c0;font-family:'JetBrains Mono',monospace;">
            N-SPT
          </span>
          <span style="font-size:.88rem;"> = số nhát búa để đóng ống sâu thêm
            <strong>30 cm</strong></span>
          <div style="font-size:.76rem;color:#888;margin-top:2px;">
            (sau khi đóng định vị 15 cm đầu)
          </div>
        </div>
        <div style="background:#fff3e0;border-left:4px solid #f57c00;border-radius:6px;
                    padding:9px 13px;font-size:.85rem;color:#5a3000;line-height:1.7;">
          <strong>Ứng dụng N-SPT:</strong><br>
          • Phân biệt ranh giới các lớp đất<br>
          • Trạng thái đất (rời/chặt – mềm/cứng)<br>
          • Xác định φ (cát) và c<sub>u</sub> (sét)<br>
          • Mô đun biến dạng E₀<br>
          <span style="color:#c62828;font-weight:700;">→ N càng lớn, đất càng tốt</span>
        </div>
      </div>

      <!-- SVG sơ đồ SPT -->
      <svg viewBox="0 0 150 250" xmlns="http://www.w3.org/2000/svg"
           style="width:100%;max-width:160px;display:block;margin:0 auto;">
        <defs>
          <marker id="spt-up" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
            <path d="M3,0 L6,6 L0,6 z" fill="#2e7d32"/>
          </marker>
          <marker id="spt-dn" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
            <path d="M0,0 L6,0 L3,6 z" fill="#2e7d32"/>
          </marker>
        </defs>

        <!-- Tripod legs -->
        <line x1="75" y1="22" x2="18" y2="108" stroke="#546e7a" stroke-width="2.5"/>
        <line x1="75" y1="22" x2="132" y2="108" stroke="#546e7a" stroke-width="2.5"/>
        <line x1="22"  y1="105" x2="128" y2="105" stroke="#546e7a" stroke-width="2"/>

        <!-- Pulley -->
        <circle cx="75" cy="22" r="5" fill="#90a4ae" stroke="#546e7a" stroke-width="1.5"/>

        <!-- Rope (dashed) -->
        <line x1="75" y1="27" x2="75" y2="48" stroke="#90a4ae" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Hammer -->
        <rect x="59" y="47" width="32" height="22" rx="3" fill="#ef9a9a" stroke="#c62828" stroke-width="1.5"/>
        <text x="75" y="57" font-size="8.5" fill="#b71c1c" font-weight="700" text-anchor="middle">63.5 kg</text>
        <text x="75" y="66" font-size="7.5" fill="#b71c1c" text-anchor="middle">Q = búa</text>

        <!-- Drop height arrow -->
        <line x1="104" y1="48" x2="104" y2="90"
              stroke="#2e7d32" stroke-width="1.4"
              marker-start="url(#spt-up)" marker-end="url(#spt-dn)"/>
        <text x="109" y="66" font-size="8" fill="#2e7d32" font-weight="700">H=</text>
        <text x="109" y="76" font-size="8" fill="#2e7d32" font-weight="700">76cm</text>

        <!-- Drill rod -->
        <rect x="72" y="69" width="6" height="52" fill="#b0bec5" stroke="#78909c" stroke-width="1"/>

        <!-- Ground surface -->
        <line x1="8" y1="121" x2="142" y2="121" stroke="#5d4037" stroke-width="2.5"/>
        <text x="10" y="131" font-size="7.5" fill="#5d4037" font-weight="600">Mặt đất</text>

        <!-- Borehole wall -->
        <rect x="68" y="121" width="14" height="95"
              fill="#fffde7" stroke="#8d6e63" stroke-width="1" stroke-dasharray="4,3" fill-opacity=".8"/>

        <!-- Sampler -->
        <rect x="66" y="208" width="18" height="14" rx="2"
              fill="#607d8b" stroke="#37474f" stroke-width="1.5"/>
        <text x="75" y="235" font-size="7.5" fill="#37474f" text-anchor="middle" font-weight="600">Ống lấy mẫu</text>

        <!-- 30cm arrow in borehole -->
        <line x1="58" y1="178" x2="58" y2="208"
              stroke="#1565c0" stroke-width="1.2"
              marker-start="url(#spt-up)" marker-end="url(#spt-dn)"/>
        <text x="36" y="188" font-size="7.5" fill="#1565c0" font-weight="700">30cm</text>
        <text x="34" y="198" font-size="7.5" fill="#1565c0">= N nhát</text>
      </svg>

    </div>

    <!-- Bảng tra -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">

      <!-- Bảng đất rời -->
      <div>
        <div style="font-size:.75rem;font-weight:700;color:#1565c0;text-transform:uppercase;
                    letter-spacing:.6px;margin-bottom:6px;">🏖️ Đất rời (Cát)</div>
        <table style="width:100%;border-collapse:collapse;font-size:.8rem;border:1px solid #dce3ed;border-radius:6px;overflow:hidden;">
          <thead><tr style="background:#1565c0;color:#fff;">
            <th style="padding:5px 8px;text-align:center;">N-SPT</th>
            <th style="padding:5px 8px;">Trạng thái</th>
            <th style="padding:5px 8px;text-align:center;">φ (°)</th>
          </tr></thead>
          <tbody>
            <tr style="background:#f7faff;"><td style="padding:4px 8px;text-align:center;font-family:monospace;">0÷4</td><td style="padding:4px 8px;">Rất rời</td><td style="padding:4px 8px;text-align:center;">30</td></tr>
            <tr><td style="padding:4px 8px;text-align:center;font-family:monospace;">4÷10</td><td style="padding:4px 8px;">Rời</td><td style="padding:4px 8px;text-align:center;">30÷35</td></tr>
            <tr style="background:#f7faff;"><td style="padding:4px 8px;text-align:center;font-family:monospace;">10÷30</td><td style="padding:4px 8px;">Chặt vừa</td><td style="padding:4px 8px;text-align:center;">35÷40</td></tr>
            <tr><td style="padding:4px 8px;text-align:center;font-family:monospace;">30÷50</td><td style="padding:4px 8px;">Chặt</td><td style="padding:4px 8px;text-align:center;">40÷45</td></tr>
            <tr style="background:#f7faff;"><td style="padding:4px 8px;text-align:center;font-family:monospace;">&gt;50</td><td style="padding:4px 8px;">Rất chặt</td><td style="padding:4px 8px;text-align:center;">&gt;45</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Bảng đất dính -->
      <div>
        <div style="font-size:.75rem;font-weight:700;color:#1565c0;text-transform:uppercase;
                    letter-spacing:.6px;margin-bottom:6px;">🧱 Đất dính (Sét)</div>
        <table style="width:100%;border-collapse:collapse;font-size:.8rem;border:1px solid #dce3ed;border-radius:6px;overflow:hidden;">
          <thead><tr style="background:#1565c0;color:#fff;">
            <th style="padding:5px 8px;text-align:center;">N-SPT</th>
            <th style="padding:5px 8px;">Trạng thái</th>
            <th style="padding:5px 8px;text-align:center;">c<sub>u</sub></th>
          </tr></thead>
          <tbody>
            <tr style="background:#f7faff;"><td style="padding:4px 8px;text-align:center;font-family:monospace;">&lt;2</td><td style="padding:4px 8px;">Rất mềm</td><td style="padding:4px 8px;text-align:center;font-size:.75rem;">&lt;25 kPa</td></tr>
            <tr><td style="padding:4px 8px;text-align:center;font-family:monospace;">2÷4</td><td style="padding:4px 8px;">Mềm</td><td style="padding:4px 8px;text-align:center;font-size:.75rem;">25÷50</td></tr>
            <tr style="background:#f7faff;"><td style="padding:4px 8px;text-align:center;font-family:monospace;">4÷8</td><td style="padding:4px 8px;">Dẻo</td><td style="padding:4px 8px;text-align:center;font-size:.75rem;">50÷100</td></tr>
            <tr><td style="padding:4px 8px;text-align:center;font-family:monospace;">8÷15</td><td style="padding:4px 8px;">Dẻo cứng</td><td style="padding:4px 8px;text-align:center;font-size:.75rem;">100÷200</td></tr>
            <tr style="background:#f7faff;"><td style="padding:4px 8px;text-align:center;font-family:monospace;">15÷30</td><td style="padding:4px 8px;">Cứng</td><td style="padding:4px 8px;text-align:center;font-size:.75rem;">200÷400</td></tr>
            <tr><td style="padding:4px 8px;text-align:center;font-family:monospace;">&gt;30</td><td style="padding:4px 8px;">Rất cứng</td><td style="padding:4px 8px;text-align:center;font-size:.75rem;">&gt;400</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
  `,

  // ══════════════════════════════════════════════════════
  //  GỢI Ý CÔNG THỨC
  // ══════════════════════════════════════════════════════
  hint: `
    <div class="hint-title">💡 Công thức tính toán</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:.84rem;">
      <div>
        <strong>Độ bền cắt không thoát nước (đất sét):</strong>
        <div class="hint-formula">c<sub>u</sub> = k · N &nbsp; (k = 4,4 kN/m²)</div>
      </div>
      <div>
        <strong>SPT hiệu chỉnh:</strong>
        <div class="hint-formula">N<sub>60</sub> = N · C<sub>E</sub> · C<sub>N</sub></div>
        <div style="margin-top:4px;font-size:.78rem;">
          C<sub>E</sub> = 0,75÷1,00 &nbsp;|&nbsp;
          C<sub>N</sub> = √(95,76 / σ'<sub>v</sub>) ≤ 2,0
        </div>
      </div>
      <div>
        <strong>E₀ đất cát:</strong>
        <div class="hint-formula">E₀ = k · N<sub>60</sub></div>
        <div style="margin-top:3px;font-size:.78rem;">
          k=500 (cát lẫn bụi) | k=1000 (cát sạch) | k=1500 (quá cố kết)
        </div>
      </div>
      <div>
        <strong>E₀ đất sét:</strong>
        <div class="hint-formula">E₀ = k · N<sub>60</sub></div>
        <div style="margin-top:3px;font-size:.78rem;">
          k=410 (A ≥ 30%) | k = 860 − 15A (A &lt; 30%)
        </div>
      </div>
    </div>
  `,

  // ══════════════════════════════════════════════════════
  //  SINH SỐ LIỆU
  // ══════════════════════════════════════════════════════
  genData(rng) {
    // Depths: 12 điểm đo, cách nhau 1.5m
    const DEPTHS = [1.5, 3, 4.5, 6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18];

    // Số điểm mỗi lớp
    const n1 = 2 + Math.floor(rng() * 2); // lớp 1: 2-3 điểm
    const n2 = 3 + Math.floor(rng() * 2); // lớp 2: 3-4 điểm
    const n3 = DEPTHS.length - n1 - n2;   // lớp 3: phần còn lại

    // Sinh giá trị N
    const Nvals = [];
    for (let i = 0; i < n1; i++) Nvals.push(1 + Math.floor(rng() * 4));   // L1: N = 1÷4
    for (let i = 0; i < n2; i++) Nvals.push(5 + Math.floor(rng() * 10));  // L2: N = 5÷14
    for (let i = 0; i < n3; i++) Nvals.push(18 + Math.floor(rng() * 25)); // L3: N = 18÷42

    // Ranh giới giữa các lớp (trung điểm giữa 2 vị trí đo thay đổi)
    const b12 = r2((DEPTHS[n1-1] + DEPTHS[n1]) / 2);
    const b23 = r2((DEPTHS[n1+n2-1] + DEPTHS[n1+n2]) / 2);

    // N trung bình mỗi lớp
    const N1arr = Nvals.slice(0, n1);
    const N2arr = Nvals.slice(n1, n1+n2);
    const N3arr = Nvals.slice(n1+n2);
    const N1avg = r2(N1arr.reduce((a,b)=>a+b,0) / n1);
    const N2avg = r2(N2arr.reduce((a,b)=>a+b,0) / n2);
    const N3avg = r2(N3arr.reduce((a,b)=>a+b,0) / n3);

    // Thông số đất
    const gamma1 = 17.0; // bùn sét
    const gamma2 = 18.2; // sét pha
    const gamma3 = 18.6; // cát
    const A2 = 14;       // chỉ số dẻo sét pha

    // Chiều dày các lớp
    const h1 = DEPTHS[n1-1];
    const h2 = DEPTHS[n1+n2-1] - h1;

    // Ứng suất bản thân
    const sv1 = r2(gamma1 * h1);
    const sv2 = r2(sv1 + gamma2 * h2);

    // Trạng thái lớp 1 – đất dính (bùn sét)
    const stateIdx1 = N1avg < 2 ? 0 : N1avg < 4 ? 1 : N1avg < 8 ? 2 : 3;
    const states1   = ['Rất mềm (N < 2)', 'Mềm (N = 2÷4)', 'Dẻo (N = 4÷8)', 'Dẻo cứng (N = 8÷15)'];

    // Trạng thái lớp 2 – đất dính (sét pha)
    const stateIdx2 = N2avg < 4 ? 0 : N2avg < 8 ? 1 : N2avg < 15 ? 2 : 3;
    const states2   = ['Mềm (N = 2÷4)', 'Dẻo (N = 4÷8)', 'Dẻo cứng (N = 8÷15)', 'Cứng (N = 15÷30)'];

    // Trạng thái lớp 3 – đất rời (cát)
    const stateIdx3 = N3avg < 10 ? 0 : N3avg < 30 ? 1 : N3avg < 50 ? 2 : 3;
    const states3   = ['Rời (N = 4÷10)', 'Chặt vừa (N = 10÷30)', 'Chặt (N = 30÷50)', 'Rất chặt (N > 50)'];

    // φ lớp 3
    const phiIdx3 = N3avg < 4 ? 0 : N3avg < 10 ? 1 : N3avg < 30 ? 2 : 3;
    const phiOpts = ['φ = 30° (N < 4)', 'φ = 30÷35° (N = 4÷10)', 'φ = 35÷40° (N = 10÷30)', 'φ = 40÷45° (N = 30÷50)'];

    // cu (k = 4.4 kN/m² – Stroud 1974)
    const cu1 = r2(4.4 * N1avg);
    const cu2 = r2(4.4 * N2avg);

    // N60 tại điểm đầu lớp 3
    const repIdx3   = n1 + n2;
    const repDepth3 = DEPTHS[repIdx3];
    const sv_rep3   = r2(sv2 + gamma3 * (repDepth3 - DEPTHS[n1+n2-1]));
    const CN3_raw   = Math.sqrt(95.76 / Math.max(sv_rep3, 1));
    const CN3       = r2(Math.min(CN3_raw, 2.0));
    const CE        = 0.85;
    const N_rep3    = Nvals[repIdx3];
    const N60_3     = r2(N_rep3 * CE * CN3);

    // E0 lớp 3 (cát sạch, k=1000)
    const E0_3 = Math.round(1000 * N60_3);

    // E0 lớp 2 (sét pha, A=14 < 30 → k = 860 - 15*14 = 650)
    const k2  = 860 - 15 * A2; // = 650
    // N60 đại diện lớp 2 (dùng điểm giữa lớp 2)
    const midIdx2   = n1 + Math.floor(n2/2);
    const midDepth2 = DEPTHS[midIdx2];
    const sv_mid2   = r2(sv1 + gamma2 * (midDepth2 - h1));
    const CN2_raw   = Math.sqrt(95.76 / Math.max(sv_mid2, 1));
    const CN2       = r2(Math.min(CN2_raw, 2.0));
    const N_mid2    = Nvals[midIdx2];
    const N60_2     = r2(N_mid2 * CE * CN2);
    const E0_2      = Math.round(k2 * N60_2);

    return {
      depths: DEPTHS, Nvals,
      n1, n2, n3,
      N1avg, N2avg, N3avg,
      b12, b23,
      h1, h2, gamma1, gamma2, gamma3,
      sv1, sv2,
      stateIdx1, states1,
      stateIdx2, states2,
      stateIdx3, states3,
      phiIdx3, phiOpts,
      cu1, cu2,
      repDepth3, sv_rep3, CN3, CE, N_rep3, N60_3, E0_3,
      midDepth2, sv_mid2, CN2, N_mid2, N60_2, E0_2, k2, A2
    };
  },

  // ══════════════════════════════════════════════════════
  //  ĐỀ BÀI: bảng N + biểu đồ SPT log
  // ══════════════════════════════════════════════════════
  statement(d) {
    // Bảng số liệu
    const tableRows = d.depths.map((depth, i) =>
      `<tr style="${i%2===0?'background:#f7faff;':''}">
        <td style="padding:5px 14px;text-align:center;font-family:monospace;font-weight:600;">${depth}</td>
        <td style="padding:5px 14px;text-align:center;font-family:monospace;font-size:.97rem;
                   font-weight:700;color:#1565c0;">${d.Nvals[i]}</td>
      </tr>`
    ).join('');

    // SVG biểu đồ N vs Độ sâu (borehole log)
    const PX_PER_M  = 13.5;
    const PX_PER_N  = 3.5;
    const OX = 52, OY = 18; // origin
    const maxN = 50;
    const chartH = d.depths[d.depths.length-1] * PX_PER_M;
    const chartW = maxN * PX_PER_N;
    const svgH = OY + chartH + 20;
    const svgW = OX + chartW + 30;

    const yPx = m => OY + m * PX_PER_M;
    const xPx = n => OX + Math.min(n, maxN) * PX_PER_N;

    // Tạo polyline N vs depth
    let polyPoints = '';
    d.depths.forEach((dep, i) => {
      polyPoints += `${xPx(d.Nvals[i])},${yPx(dep)} `;
    });

    // Màu theo lớp
    const colors = ['#81c784','#64b5f6','#ffb74d'];
    let bars = '';
    d.depths.forEach((dep, i) => {
      const layerIdx = i < d.n1 ? 0 : i < d.n1+d.n2 ? 1 : 2;
      const col = colors[layerIdx];
      const barLen = Math.min(d.Nvals[i], maxN) * PX_PER_N;
      bars += `<rect x="${OX}" y="${yPx(dep)-4}" width="${barLen}" height="8" 
                     fill="${col}" opacity=".55" rx="2"/>`;
      bars += `<text x="${xPx(d.Nvals[i])+3}" y="${yPx(dep)+4}" 
                     font-size="8" fill="#333" font-family="monospace">${d.Nvals[i]}</text>`;
    });

    // Ranh giới lớp
    const b12line = `<line x1="${OX-10}" y1="${yPx(d.b12)}" x2="${OX+chartW+5}" y2="${yPx(d.b12)}"
                       stroke="#c62828" stroke-width="1.5" stroke-dasharray="5,3"/>
                    <text x="${OX-10}" y="${yPx(d.b12)-2}" font-size="7.5" fill="#c62828">L1/L2</text>`;
    const b23line = `<line x1="${OX-10}" y1="${yPx(d.b23)}" x2="${OX+chartW+5}" y2="${yPx(d.b23)}"
                       stroke="#c62828" stroke-width="1.5" stroke-dasharray="5,3"/>
                    <text x="${OX-10}" y="${yPx(d.b23)-2}" font-size="7.5" fill="#c62828">L2/L3</text>`;

    // Trục
    let depthTicks = '';
    d.depths.forEach(dep => {
      depthTicks += `<line x1="${OX-4}" y1="${yPx(dep)}" x2="${OX}" y2="${yPx(dep)}" stroke="#555" stroke-width="1"/>
                     <text x="${OX-6}" y="${yPx(dep)+3}" font-size="8" fill="#444" text-anchor="end">${dep}</text>`;
    });

    let nTicks = '';
    [0,10,20,30,40,50].forEach(n => {
      nTicks += `<line x1="${xPx(n)}" y1="${OY}" x2="${xPx(n)}" y2="${OY+chartH}" 
                       stroke="#e0e0e0" stroke-width="${n===0?1:.7}"/>
                 <text x="${xPx(n)}" y="${OY-4}" font-size="8" fill="#666" text-anchor="middle">${n}</text>`;
    });

    const svgChart = `
      <svg viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg"
           style="width:100%;max-width:${svgW}px;display:block;margin:0 auto;">
        <!-- Grid & ticks -->
        ${nTicks}
        ${depthTicks}

        <!-- Axes -->
        <line x1="${OX}" y1="${OY}" x2="${OX}" y2="${OY+chartH}" stroke="#333" stroke-width="1.5"/>
        <line x1="${OX}" y1="${OY}" x2="${OX+chartW+10}" y2="${OY}" stroke="#333" stroke-width="1.2"/>

        <!-- Layer bars -->
        ${bars}

        <!-- N polyline -->
        <polyline points="${polyPoints}" fill="none" stroke="#1565c0" stroke-width="1.5" stroke-linejoin="round"/>

        <!-- Layer boundaries -->
        ${b12line}
        ${b23line}

        <!-- Legend -->
        <rect x="${OX+chartW-60}" y="${OY+5}" width="10" height="8" fill="${colors[0]}" opacity=".6" rx="1"/>
        <text x="${OX+chartW-47}" y="${OY+12}" font-size="7.5" fill="#444">Lớp 1</text>
        <rect x="${OX+chartW-60}" y="${OY+17}" width="10" height="8" fill="${colors[1]}" opacity=".6" rx="1"/>
        <text x="${OX+chartW-47}" y="${OY+24}" font-size="7.5" fill="#444">Lớp 2</text>
        <rect x="${OX+chartW-60}" y="${OY+29}" width="10" height="8" fill="${colors[2]}" opacity=".6" rx="1"/>
        <text x="${OX+chartW-47}" y="${OY+36}" font-size="7.5" fill="#444">Lớp 3</text>

        <!-- Labels -->
        <text x="${OX + chartW/2}" y="${OY - 10}" font-size="9" fill="#333"
              text-anchor="middle" font-weight="600">N-SPT</text>
        <text x="10" y="${OY + chartH/2}" font-size="9" fill="#333"
              text-anchor="middle" font-weight="600"
              transform="rotate(-90, 10, ${OY + chartH/2})">Độ sâu (m)</text>
      </svg>`;

    return `
      Cho kết quả thí nghiệm SPT tại một hố khoan như bảng và biểu đồ dưới đây.
      Biết các lớp đất lần lượt là:
      <strong>bùn sét</strong> (A = 18%, γ = 17,0 kN/m³),
      <strong>sét pha</strong> (A = 14%, γ = 18,2 kN/m³) và
      <strong>cát</strong> (γ = 18,6 kN/m³). Hệ số C<sub>E</sub> = 0,85.

      <div style="display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:start;margin:14px 0;">
        <table style="border-collapse:collapse;border:1.5px solid #dce3ed;border-radius:8px;overflow:hidden;min-width:160px;">
          <thead>
            <tr style="background:#1565c0;color:#fff;">
              <th style="padding:7px 18px;font-size:.8rem;">Độ sâu (m)</th>
              <th style="padding:7px 18px;font-size:.8rem;">N-SPT</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
        <div>${svgChart}</div>
      </div>

      Hãy diễn dịch kết quả SPT trên:
    `;
  },

  // ══════════════════════════════════════════════════════
  //  CÂU HỎI (15 câu)
  // ══════════════════════════════════════════════════════
  questions: [
    // (1) Số lớp
    { id:'q1', type:'mcq',
      label:'1. Số lớp đất trong hố khoan là:',
      choices: d => ['2 lớp','3 lớp','4 lớp','5 lớp'],
      correctIndex: d => 1
    },
    // (2) Ranh giới 1-2
    { id:'q2', type:'fill',
      label:'2. Ranh giới lớp 1 / lớp 2 ở độ sâu =',
      unit:'m',
      answer: d => d.b12, tol: 0.76
    },
    // (3) Ranh giới 2-3
    { id:'q3', type:'fill',
      label:'3. Ranh giới lớp 2 / lớp 3 ở độ sâu =',
      unit:'m',
      answer: d => d.b23, tol: 0.76
    },
    // (4) N avg L1
    { id:'q4', type:'fill',
      label:'4. N-SPT trung bình lớp 1 =',
      unit:'–',
      answer: d => d.N1avg, tol: 0.6
    },
    // (5) N avg L2
    { id:'q5', type:'fill',
      label:'5. N-SPT trung bình lớp 2 =',
      unit:'–',
      answer: d => d.N2avg, tol: 0.6
    },
    // (6) N avg L3
    { id:'q6', type:'fill',
      label:'6. N-SPT trung bình lớp 3 =',
      unit:'–',
      answer: d => d.N3avg, tol: 1.0
    },
    // (7) Trạng thái L1
    { id:'q7', type:'mcq',
      label:'7. Trạng thái lớp 1 (bùn sét) là:',
      choices: d => d.states1,
      correctIndex: d => d.stateIdx1
    },
    // (8) Trạng thái L2
    { id:'q8', type:'mcq',
      label:'8. Trạng thái lớp 2 (sét pha) là:',
      choices: d => d.states2,
      correctIndex: d => d.stateIdx2
    },
    // (9) Trạng thái L3
    { id:'q9', type:'mcq',
      label:'9. Trạng thái lớp 3 (cát) là:',
      choices: d => d.states3,
      correctIndex: d => d.stateIdx3
    },
    // (10) cu L1
    { id:'q10', type:'fill',
      label:'10. Độ bền cắt không thoát nước c<sub>u</sub> lớp 1 =',
      unit:'kPa',
      answer: d => d.cu1, tol: 5
    },
    // (11) phi L3
    { id:'q11', type:'mcq',
      label:'11. Góc ma sát trong φ lớp 3 (cát) theo N-SPT:',
      choices: d => d.phiOpts,
      correctIndex: d => d.phiIdx3
    },
    // (12) σ'v đáy L2
    { id:'q12', type:'fill',
      label:'12. Ứng suất hữu hiệu σ\'<sub>v</sub> tại đáy lớp 2 =',
      unit:'kPa',
      answer: d => d.sv2, tol: 6
    },
    // (13) σ'v đầu L3
    { id:'q13', type:'fill',
      label:'13. Ứng suất hữu hiệu σ\'<sub>v</sub> tại điểm đầu lớp 3 =',
      unit:'kPa',
      answer: d => d.sv_rep3, tol: 6
    },
    // (14) N60 đầu L3
    { id:'q14', type:'fill',
      label:'14. N<sub>60</sub> tại điểm đầu lớp 3 (dùng C<sub>E</sub>=0,85 và C<sub>N</sub> vừa tính) =',
      unit:'–',
      answer: d => d.N60_3, tol: 0.6
    },
    // (15) E0 L3
    { id:'q15', type:'fill',
      label:'15. Mô đun biến dạng E₀ lớp 3 (cát sạch, k = 1000) =',
      unit:'kN/m²',
      answer: d => d.E0_3, tol: 600
    },
  ]
};


// ────────────────────────────────────────────────────────
// BÀI 4.2 – CPT (Xuyên tĩnh): THÊM VÀO ĐÂY
// EXERCISES['ch4_b2'] = { chapterId:'ch4', ... };
// ────────────────────────────────────────────────────────
