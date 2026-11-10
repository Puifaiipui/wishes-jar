const wishes = [
    { text: "ตั้งใจทำตามฝันนะ! COSCI อบอุ่นและสนุกกว่าที่คิดแน่นอน สู้ๆ น้า", author: "— พี่ฝ้าย รุ่น 68 -" },
    { text: "ยินดีต้อนรับ COSCI#70 ทุกคนเลยน้า ขอให้ได้เก็บความประทับใจกลับไปเยอะๆ!", author: "— พี่ฝ้าย รุ่น 68 -" },
    { text: "enjoy ชีวิตใจกลางกรุงเทพฯ นะ", author: "— พี่ผกาแก้ว รุ่น 68 - " },
    { text: "สู้กับการทำพอร์ต และหามหาวิทยาลัยนะครับ ทำให้เต็มทีครั้งหนึ่งในชีวิต เลือกคณะที่ชอบ สายงานที่ใช่กันน้า", author: "— พี่มะนอย รุ่น 68 - " },
    { text: "นอน8แก้วดื่มน้ำ8ชม. เครียดได้แต่สุขภาพต้องดีด้วย สู้ๆจ้า", author: "— พี่น้อง รุ่น 67 - " },
    { text: "ฝันให้ไกล (ก็เลยไปนอน)", author: "— พี่น้อง รุ่น 67 - " },
    { text: "รับผิดชอบต่อความฝันตัวเองมากๆ<3", author: "— พี่น้อง รุ่น 67 - " },
    { text: " อย่าลืมหายใจบ่อยๆ สู้ๆนร้ะจ้ะะ😘", author: "— พี่น้อง รุ่น 67 - " },
    { text: "โปรดก้าวเท้าขวาก่อนออกจากบ้านและเข้าห้องสอบทุกครั้ง หากแยกซ้าย-ขวาไม่ออกกรุณากระโดดขาคู่", author: "— พี่น้อง รุ่น 67 - " },
    { text: "ขอให้ทุกอย่างเป็นไปตามที่คิดไว้", author: "— พี่อิ่มเอม รุ่น 67 - " },
    { text: " ", author: "— พี่น้อง รุ่น 68 - " },
    { text: " ", author: "— พี่น้อง รุ่น 68 - " },
    { text: " ", author: "— พี่น้อง รุ่น 68 - " },
    { text: " ", author: "— พี่เจมส์ รุ่น 68" }
];

const drawBtn = document.getElementById('drawBtn');
const jarContainer = document.getElementById('jarContainer');
const wishModal = document.getElementById('wishModal');
const closeBtn = document.getElementById('closeBtn');
const wishText = document.querySelector('.wish-text');
const authorBadge = document.querySelector('.author-badge');

function drawWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const selectedWish = wishes[randomIndex];

    wishText.textContent = selectedWish.text;
    authorBadge.textContent = selectedWish.author;

    jarContainer.classList.add('shake');
    setTimeout(() => {
        jarContainer.classList.remove('shake');
        wishModal.classList.add('active');
    }, 500);
}

drawBtn.addEventListener('click', drawWish);
jarContainer.addEventListener('click', drawWish);

closeBtn.addEventListener('click', () => {
    wishModal.classList.remove('active');
});

wishModal.addEventListener('click', (e) => {
    if (e.target === wishModal) {
        wishModal.classList.remove('active');
    }
});

/* ---------- ลูกแก้วในโหล (กำหนดเอง) ---------- */
const palettes = {
    mint: ['rgba(190,245,230,.85)', 'rgba(110,210,190,.75)'],
    pink: ['rgba(255,209,232,.85)', 'rgba(245,150,200,.75)'],
    purple: ['rgba(217,204,255,.85)', 'rgba(165,139,240,.75)'],
    blue: ['rgba(196,220,255,.85)', 'rgba(130,170,245,.75)']
};

/*
  แต่ละลูก:
  x     = ตำแหน่งแนวนอน (px จากซ้ายของโหล, พื้นที่กว้างประมาณ 280)
  y     = ระยะจากก้นโหลขึ้นไป (px) 0 = วางติดพื้น
  size  = ขนาด (px)
  color = mint / pink / purple / blue
  rot   = มุมกระดาษข้างใน (องศา)
  delay = จังหวะการขยับ (วินาที) ให้ต่างกันจะดูธรรมชาติ
*/
const ORBS = [
    // ชั้นล่างสุด (เว้นขอบซ้ายขวานิดหน่อย เพราะก้นโหลโค้ง)
    { x: 13, y: 0, size: 55, color: 'pink', rot: -15, delay: 0.0 },
    { x: 77, y: 0, size: 80, color: 'blue', rot: 20, delay: 0.8 },
    { x: 157, y: 0, size: 55, color: 'purple', rot: -30, delay: 1.5 },
    { x: 212, y: 0, size: 70, color: 'mint', rot: 10, delay: 0.4 },

    // ชั้นสอง (วางในร่องระหว่างลูกชั้นล่าง)
    { x: 30, y: 61, size: 70, color: 'mint', rot: 30, delay: 1.2 },
    { x: 113, y: 75, size: 55, color: 'pink', rot: -10, delay: 0.3 },
    { x: 182, y: 55, size: 80, color: 'blue', rot: 15, delay: 1.9 },

    // ชั้นสาม
    { x: 0, y: 130, size: 70, color: 'purple', rot: -20, delay: 0.5 },
    { x: 50, y: 123, size: 55, color: 'mint', rot: 12, delay: 1.6 },
    { x: 156, y: 108, size: 70, color: 'purple', rot: -25, delay: 2.3 },
    { x: 200, y: 120, size: 80, color: 'pink', rot: 28, delay: 0.9 },

    // ชั้นบนสุด
    { x: 65, y: 182, size: 80, color: 'blue', rot: -18, delay: 2.0 },
    { x: 151, y: 183, size: 55, color: 'pink', rot: 22, delay: 0.6 },
    { x: 215, y: 180, size: 70, color: 'mint', rot: -8, delay: 1.4 }
];

function buildOrbs() {
    const jarBody = document.querySelector('.jar-body');
    const old = jarBody.querySelector('.orb-layer');
    if (old) old.remove();

    const layer = document.createElement('div');
    layer.className = 'orb-layer';
    jarBody.appendChild(layer);

    const H = layer.clientHeight;

    ORBS.forEach(o => {
        const [c1, c2] = palettes[o.color];
        const orb = document.createElement('div');
        orb.className = 'orb';
        orb.style.cssText = `
            width:${o.size}px; height:${o.size}px;
            left:${o.x}px;
            top:${H - o.y - o.size}px;
            --c1:${c1}; --c2:${c2};
            --r:${o.rot}deg;
            --d:${o.delay}s;`;
        layer.appendChild(orb);
    });
}

buildOrbs();