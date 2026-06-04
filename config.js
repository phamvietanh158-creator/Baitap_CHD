// ═══════════════════════════════════════════════════════════════════
//  config.js  –  Cấu hình chương trình học
//  GV sửa file này → commit → push GitHub → sinh viên thấy ngay
//  KHÔNG CẦN Admin Panel, KHÔNG CẦN localStorage
// ═══════════════════════════════════════════════════════════════════
// ── Danh sách chương (tên, icon, mô tả) ──────────────────────────
const CHAPTERS_DEF = [
  { id:'ch3', icon:'💧', name:'Chương 3', desc:'Tính thấm' },
  { id:'ch4', icon:'🔩', name:'Chương 4', desc:'Thí nghiệm hiện trường' },
  { id:'ch5', icon:'📉', name:'Chương 5', desc:'Biến dạng & Lún' },
  { id:'ch6', icon:'🏗️', name:'Chương 6', desc:'SCT & Ổn định mái dốc' },
  { id:'ch7', icon:'🧱', name:'Chương 7', desc:'Áp lực đất lên tường chắn' },
];

// ── Mở/đóng chương: sửa active rồi push GitHub ───────────────────
window.CHAPTER_SCHEDULE = {
  ch3: { active: true  },
  ch4: { active: true  },
  ch5: { active: false },
  ch6: { active: false },
  ch7: { active: false },
};
// ── Danh sách chương: active:true = sinh viên vào được ────────────
window.CHAPTER_SCHEDULE = {
//  ch3: { active: true  },   // ← Chương 3: đang mở
//  ch4: { active: true  },   // ← Chương 4: đang mở
//  ch5: { active: false },   // ← Chương 5: chưa mở
//  ch6: { active: false },   // ← Chương 6: chưa mở
//  ch7: { active: false },   // ← Chương 7: chưa mở
//};

// ── Hướng dẫn ──────────────────────────────────────────────────────
// Muốn mở chương 5:  đổi  ch5: { active: false }  →  ch5: { active: true }
// Muốn đóng chương:  đổi  active: true  →  active: false
// Sau khi sửa: git add config.js → git commit → git push
// Sinh viên refresh trang là thấy ngay (không cần làm gì thêm)

// ── Tuỳ chọn: đặt thời gian mở/đóng cụ thể ────────────────────────
// ch5: { active: true, open: '2026-06-10T07:00', close: '2026-06-17T23:59' }
// Để trống open/close thì mở vĩnh viễn khi active:true
