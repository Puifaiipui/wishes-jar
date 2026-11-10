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
    { text: "อ่านหนังสือหนักอย่าลืมพักผ่อนน้า", author: " - ชิงชิง รุ่น 68 - " },
    { text: "ไม่เป็นไรเลยไม่อยากให้เด็กๆทุกคนกดดันตัวเองนะะะ ถ้าเหนื่อยก็แค่พักแล้วค่อยกลับมาเริ่มใหม่้าไม่อยากทำแล้วก็แค่หยุด ออกไปทำนุ่นทำนี่สูดอากาศ หาอะไรโล่งๆทำ กินอะไรอร่อยๆๆ เราก็แค่เด็กอายุสิบเจ้ดสิบแปด จาหลงทางบ้างพลาดบ้างก็ไม่แปลก แค่เรียนรู้แล้วเริ่มต้นใหม่ ไม่มีคำว่าสายเกินไปสำหรับคนที่พยายามหรอกกกนะะะ เชื่อมั่นในตัวเองว่าเราทำได้อย่าไปฟังคำใคร เชื่อตัวเองเท่านั้น โฟกัสแค่ตัวเราเองสิ่งที่เราต้องการ ✌🏻✌🏻✌🏻✌🏻✌🏻✌🏻", author: "— anton รุ่น 69 - " },
    { text: "สู้ๆน้า ทำได้แน่นอน!!", author: "— ส้ม รุ่น 69 - " },
    { text: "ขอให้ทำตามความฝันตัวเองสำเร็จนะคะ ติดมหาลัยและคณะที่น้องๆใฝ่ฝัน พี่เชื่อว่าน้องๆทุกคนทำได้อย่ายอมแพ้กับความฝันของตัวเองนะ😊😽🎀", author: "— อิงฟ้า รุ่น 69 - " },
    { text: "เป็นไปได๊ เป็นไปได้ ตอกย้ำ เชื่อมั่น ไว้ใจ เชื่อมั่น เชื่อใจ ลงมือทำ ตอกย้ำ เชื่อมั่น เชื่อใจ ลงมือทำ เป็นไปได้ มั่นใจ มั่นใจ เกินร้อยล้านร้อยล้านร้อย", author: "— น้ำมนต์ รุ่น 69 - " },
    { text: "เป็นกำลังใจเล็กๆให้น้า สู้ๆกับการเข้ามหาลัยแล้วก็คณะที่หวังไว้ อย่าเครียดจนเกินไปนะ หาของกินอร่อยๆ นอนหลับพักผ่อน แล้วค่อยตื่นมาสู้กันต่อนะ♥️", author: "— มีตังค์ รุ่น 69 - " },
    { text: "สู้ๆน้าเด็กๆ ขอให้ได้ขอให้โดนจ้า เด็ก70เก่งทู้กกคนนเลย", author: "— ภูพิงค์ รุ่น 69 - " },
    { text: "ไม่ว่าจะที่นี่หรือที่ไหนก็ล้วนจะมีประสบการณ์แตกต่างกันออกไปแต่อยากให้คิดไตร่ตรองและยึดมั่นในสิ่งที่อยากทำอย่ากลัวที่จะเริ่มต้นใหม่นะ ที่นี่เราอาจจะไม่ได้เพอร์เฟกต์ซะทีเดียวแต่ก็อยากให้ลองเปิดใจเข้ามาเป็นส่วนหนึ่งนะ เมี๊ยว:3", author: "— anonymous คุง รุ่น 67 - " },
    { text: "สำหรับน้อง ๆ ที่กำลังค้นหาเส้นทางของตัวเอง ไม่ว่าน้องจะเลือกเส้นทางไหน ขอแค่ตั้งใจกับสิ่งที่ทำ ยังไงเส้นทางนั้นก็จะเป็นไปได้ด้วยดี พี่ขอเป็นกำลังใจให้กับน้อง ๆ นะครับผม", author: "— เลโก้ รุ่น 69 - " },
    { text: "ขอให้ติดมหาลัยที่หวัง คณะที่ชอบ และมีความสุขมากๆในช่วงสุดท้ายของวัยมัธยม :)", author: "— พี่น้อง รุ่น 68 - " },
    { text: "ขอให้น้องได้ติดมหาลัยที่หวังนะคะ #dek70ดิวะ สู้ ๆ น้า พี่เชื่อว่าน้องทำได้แน่นอน <3", author: "— พี่ไหม รุ่น 68 - " },
    { text: "ขอให้น้องๆได้เข้ามามีชีวิตที่เอนจอยในคณะและเอกที่ชอบตามความตั้งใจน้า 🧘🏻‍♀️🪷", author: "— ปังปอนด์ รุ่น 68 - " },
    { text: "เด็ก 70 นายแน่มาก ไปให้ไกลถึง Cosci swu ka", author: "— ปังปอนด์ รุ่น 68 - " },
    { text: "ขอให้พบเส้นทางที่ฝันไว้น้าาา~~", author: "— เฟรนด์ รุ่น 68 - " },
    { text: "นอน 8 แก้ว เล่นเกม 3 มื้อแล้วไปกันต่ออ สู้ ๆ จ้าบ 👾🌀", author: "— งุ๊บ รุ่น 68 - " },
    { text: "ขอให้ได้มหาวิทยาลัยที่ชอบ คณะที่ใช่ ตามที่หวังไว้นะ 🩷🩷🩷", author: "— ใหม่ รุ่น 68 - " },
    { text: "สู้ๆครับเด็กๆน้องๆหนูๆไม่มีอะไรที่เราทำได้ ไม่ดี", author: "— กรู๊ฟ รุ่น 68 - " },
    { text: "สู้ๆนะคับน้องๆ มาเป็นเด็กคอมสื่อกันเยอะๆนะฮ้าฟฟู่ว", author: "— โอเว่น รุ่น 68 - " },
    { text: " ", author: "— พี่น้อง รุ่น 68 - " },
    { text: " ", author: "— พี่น้อง รุ่น 68 - " }
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
    { x: 67, y: 0, size: 80, color: 'blue', rot: 20, delay: 0.8 },
    { x: 147, y: 0, size: 55, color: 'purple', rot: -30, delay: 1.5 },
    { x: 202, y: 0, size: 70, color: 'mint', rot: 10, delay: 0.4 },

    // ชั้นสอง (วางในร่องระหว่างลูกชั้นล่าง)
    { x: 25, y: 61, size: 70, color: 'mint', rot: 30, delay: 1.2 },
    { x: 113, y: 75, size: 55, color: 'pink', rot: -10, delay: 0.3 },
    { x: 172, y: 55, size: 80, color: 'blue', rot: 15, delay: 1.9 },

    // ชั้นสาม
    { x: 0, y: 130, size: 70, color: 'purple', rot: -20, delay: 0.5 },
    { x: 70, y: 123, size: 55, color: 'mint', rot: 12, delay: 1.6 },
    { x: 130, y: 130, size: 70, color: 'purple', rot: -25, delay: 2.3 },
    { x: 200, y: 134, size: 80, color: 'pink', rot: 28, delay: 0.9 },

    // ชั้นบนสุด
    { x: 40, y: 182, size: 80, color: 'blue', rot: -18, delay: 2.0 },
    { x: 120, y: 200, size: 55, color: 'pink', rot: 22, delay: 0.6 },
    { x: 170, y: 210, size: 70, color: 'mint', rot: -8, delay: 1.4 }
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