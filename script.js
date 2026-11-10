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

/* ---------- ลูกแก้วในโหล ---------- */
const palettes = [
    ['rgba(190,245,230,.85)', 'rgba(110,210,190,.75)'], // มิ้นต์
    ['rgba(255,209,232,.85)', 'rgba(245,150,200,.75)'], // ชมพู
    ['rgba(217,204,255,.85)', 'rgba(165,139,240,.75)'], // ม่วง
    ['rgba(196,220,255,.85)', 'rgba(130,170,245,.75)']  // ฟ้า
];

function buildOrbs() {
    const old = jarContainer.querySelector('.orb-layer');
    if (old) old.remove();

    const layer = document.createElement('div');
    layer.className = 'orb-layer';
    jarContainer.appendChild(layer);

    const W = layer.clientWidth;
    const H = layer.clientHeight;
    let y = H;
    let row = 0;

    while (y > H * 0.2) {
        let x = row % 2 ? 26 : 0;
        while (x < W - 30) {
            const size = 48 + Math.random() * 16;
            const [c1, c2] = palettes[Math.floor(Math.random() * palettes.length)];
            const orb = document.createElement('div');
            orb.className = 'orb';
            orb.style.cssText = `
                width:${size}px; height:${size}px;
                left:${x + (Math.random() * 6 - 3)}px;
                top:${y - size + (Math.random() * 6 - 3)}px;
                --c1:${c1}; --c2:${c2};
                --r:${Math.random() * 70 - 35}deg;
                --d:${(Math.random() * 3).toFixed(2)}s;`;
            layer.appendChild(orb);
            x += size * 0.88;
        }
        y -= 46;
        row++;
    }
}

buildOrbs();