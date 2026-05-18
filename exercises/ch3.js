// ═══════════════════════════════════════════════════════
//  exercises/ch3.js – Chương 3: Tính thấm của đất
// ═══════════════════════════════════════════════════════

EXERCISES['ch3_b1'] = {
  chapterId: 'ch3',
  title:     'Gradient thủy lực',
  type:      'guided',

  // SVG diagram thay ảnh
  theoryHTML: `
    <div class="theory-block">
      <div class="theory-label">📖 Nhắc lại lý thuyết – Gradient thủy lực I</div>
      <div style="display:grid;grid-template-columns:1fr 220px;gap:20px;align-items:start;">

        <div>
          <p style="font-size:.9rem;line-height:1.8;margin-bottom:12px;">
            <strong>Gradient thủy lực</strong> (độ dốc thủy lực) là
            <em>cường độ thay đổi</em> cột nước tổng trên một đơn vị chiều dài
            dòng chảy, kí hiệu <strong>I</strong>:
          </p>
          <div style="background:#fff;border:2px solid #1565c0;border-radius:8px;
                      padding:10px 18px;display:inline-block;margin-bottom:14px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:1.05rem;
                         font-weight:700;color:#1565c0;">
              I<sub>AB</sub> = ΔH<sub>AB</sub> / L<sub>AB</sub>
            </span>
          </div>
          <p style="font-size:.85rem;color:#607080;margin-bottom:6px;">
            <strong>L<sub>AB</sub></strong> là chiều dài dòng thấm giữa hai điểm A và B.
          </p>
          <div style="background:#fff3e0;border-left:4px solid #f57c00;border-radius:6px;
                      padding:10px 14px;font-size:.86rem;color:#5a3000;margin-top:10px;">
            <div style="font-weight:700;margin-bottom:5px;">💡 Nhận xét</div>
            <div>• I = 0 : không có dòng thấm</div>
            <div>• I lớn : dòng thấm mạnh và ngược lại</div>
          </div>
        </div>

        <div>
          <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"
               style="width:100%;max-width:220px;display:block;margin:0 auto;">
            <defs>
              <marker id="arr-z" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#333"/>
              </marker>
              <marker id="arr-dn" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,0 L3,6 z" fill="#c62828"/>
              </marker>
            </defs>

            <!-- Trục z -->
            <line x1="20" y1="250" x2="20" y2="20" stroke="#333" stroke-width="1.5" marker-end="url(#arr-z)"/>
            <text x="14" y="16" font-size="11" font-weight="bold" fill="#333">z</text>

            <!-- Nước trên bề mặt -->
            <rect x="35" y="130" width="130" height="20" rx="2" fill="#90caf9" opacity=".6"/>
            <text x="100" y="144" font-size="9" fill="#0d47a1" text-anchor="middle" font-weight="bold">Nước</text>

            <!-- Lớp đất -->
            <rect x="35" y="150" width="130" height="75" rx="3" fill="#d7c89b" stroke="#8d6e63" stroke-width="1.2"/>
            <text x="42" y="170" font-size="8" fill="#795548">▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪</text>
            <text x="42" y="185" font-size="8" fill="#795548">▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪</text>
            <text x="42" y="200" font-size="8" fill="#795548">▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪</text>
            <text x="100" y="175" font-size="10" font-weight="bold" fill="#5d4037" text-anchor="middle">Đất</text>

            <!-- Ống piezometer trái (B) -->
            <rect x="40" y="40" width="16" height="112" rx="2" fill="#e3f0fd" stroke="#1565c0" stroke-width="1.2"/>
            <rect x="41" y="70" width="14" height="80" fill="#64b5f6" opacity=".7"/>

            <!-- Điểm A – mặt nước trái -->
            <circle cx="48" cy="70" r="3" fill="#1565c0"/>
            <text x="60" y="74" font-size="10" font-weight="bold" fill="#1565c0">A</text>
            <line x1="48" y1="70" x2="58" y2="70" stroke="#1565c0" stroke-width="1" stroke-dasharray="3,2"/>

            <!-- Điểm B – đỉnh lớp đất trái -->
            <circle cx="48" cy="150" r="3" fill="#1565c0"/>
            <text x="60" y="154" font-size="10" font-weight="bold" fill="#1565c0">B</text>

            <!-- Ống piezometer phải (D) -->
            <rect x="144" y="80" width="16" height="142" rx="2" fill="#e3f0fd" stroke="#1565c0" stroke-width="1.2"/>
            <rect x="145" y="115" width="14" height="105" fill="#64b5f6" opacity=".7"/>

            <!-- Điểm C – mặt nước phải -->
            <circle cx="152" cy="115" r="3" fill="#1565c0"/>
            <text x="130" y="119" font-size="10" font-weight="bold" fill="#1565c0">C</text>
            <line x1="144" y1="115" x2="152" y2="115" stroke="#1565c0" stroke-width="1" stroke-dasharray="3,2"/>

            <!-- Điểm D – đáy lớp đất phải -->
            <circle cx="152" cy="225" r="3" fill="#c62828"/>
            <text x="130" y="229" font-size="10" font-weight="bold" fill="#c62828">D</text>

            <!-- Mức so sánh -->
            <line x1="20" y1="225" x2="175" y2="225" stroke="#aaa" stroke-width="1" stroke-dasharray="5,3"/>
            <text x="110" y="222" font-size="8" fill="#888">Mức so sánh</text>

            <!-- ΔH = AC (mũi tên 2 đầu dọc) -->
            <line x1="32" y1="70"  x2="32" y2="115" stroke="#2e7d32" stroke-width="1.5"/>
            <line x1="28" y1="70"  x2="36" y2="70"  stroke="#2e7d32" stroke-width="1.5"/>
            <line x1="28" y1="115" x2="36" y2="115" stroke="#2e7d32" stroke-width="1.5"/>
            <text x="14" y="96"  font-size="8" fill="#2e7d32" font-weight="bold">ΔH</text>
            <text x="11" y="106" font-size="8" fill="#2e7d32">=AC</text>

            <!-- L = BD (mũi tên ngang) -->
            <line x1="48" y1="242" x2="152" y2="242" stroke="#333" stroke-width="1.2"/>
            <line x1="48"  y1="238" x2="48"  y2="246" stroke="#333" stroke-width="1.2"/>
            <line x1="152" y1="238" x2="152" y2="246" stroke="#333" stroke-width="1.2"/>
            <text x="100" y="257" font-size="9" fill="#333" text-anchor="middle">L = BD</text>

            <!-- Mũi tên dòng thấm -->
            <line x1="100" y1="165" x2="100" y2="205" stroke="#c62828" stroke-width="2" marker-end="url(#arr-dn)"/>

          </svg>
          <p style="font-size:.76rem;color:#607080;text-align:center;margin-top:4px;font-style:italic;">
            Sơ đồ: I<sub>BD</sub> = AC / BD
          </p>
        </div>

      </div>
    </div>
  `,

  hint: `
    <div class="hint-title">💡 Công thức áp dụng</div>
    <div class="hint-formula">I = ΔH / L</div>
    <div style="margin-top:8px;font-size:.85rem;">
      <b>ΔH</b> = chênh lệch cột nước tổng giữa 2 điểm (m)<br>
      <b>L</b> = chiều dài dòng thấm giữa 2 điểm (m)
    </div>
  `,

  genData(rng) {
    const La  = r2(0.5 + rng() * 1.5);
    const dHa = r2(0.2 + rng() * 0.8);
    const Ia  = r3(dHa / La);

    const hA  = r2(2.5 + rng() * 2.5);
    const hB  = r2(hA - 0.4 - rng() * 1.5);
    const Lb  = r2(1.0 + rng() * 3.0);
    const Ib  = r3((hA - hB) / Lb);

    const AC  = r2(0.3 + rng() * 1.2);
    const BD  = r2(0.6 + rng() * 2.0);
    const Ic  = r3(AC / BD);

    return { La, dHa, Ia, hA, hB, Lb, Ib, AC, BD, Ic };
  },

  statement(d) {
    return `
      <strong>Tính Gradient thủy lực trong các trường hợp sau:</strong><br><br>
      <strong>(a)</strong> Nước thấm <em>thẳng đứng</em> qua lớp đất dày
      <strong>L = ${d.La} m</strong>. Tổn thất cột nước <strong>ΔH = ${d.dHa} m</strong>.<br><br>
      <strong>(b)</strong> Nước thấm <em>nằm ngang</em> giữa hai điểm A và B cách nhau
      <strong>L = ${d.Lb} m</strong>. Cột nước tại A = <strong>${d.hA} m</strong>,
      tại B = <strong>${d.hB} m</strong>.<br><br>
      <strong>(c)</strong> Theo sơ đồ hình vẽ trên: <strong>AC = ${d.AC} m</strong>,
      <strong>BD = ${d.BD} m</strong>. Tính I<sub>BD</sub>.
    `;
  },

  questions: [
    { id:'qa', type:'fill', label:'(a) Gradient thủy lực I =', unit:'–',
      answer: d => d.Ia, tol: 0.015 },
    { id:'qb', type:'fill', label:'(b) Gradient thủy lực I =', unit:'–',
      answer: d => d.Ib, tol: 0.015 },
    { id:'qc', type:'fill', label:'(c) I<sub>BD</sub> =', unit:'–',
      answer: d => d.Ic, tol: 0.015 },
  ]
};
