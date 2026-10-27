// รายการคำอวยพร พร้อมชื่อและรุ่นพี่ (รุ่น 67, 68, 69)
const wishes = [
    {
        text: "ยินดีต้อนรับสู่ COSCI นะน้องๆ ขอให้สนุกกับงาน Open House วันนี้จ้า!",
        author: "พี่ฝ้าย รุ่น 68"
    },
    {
        text: "ตั้งใจทำตามอฝันนะ! COSCI อบอุ่นและสนุกกว่าที่คิดแน่นอน สู้ๆ น้า",
        author: "พี่มินต์ รุ่น 67"
    },
    {
        text: "ยินดีต้อนรับ COSCI#70 ทุกคนเลยน้า ขอให้ได้เก็บความประทับใจกลับไปเยอะๆ!",
        author: "พี่บอส รุ่น 69"
    },
    {
        text: "ขอให้สอบติดและได้มาเป็นครอบครัวเดียวกันนะ รอเจออยู่นะครับ!",
        author: "พี่เจมส์ รุ่น 68"
    },
    {
        text: "อย่าลืมเดินเที่ยวให้ทั่วทุกบูธน้า COSCI มีอะไรสนุกๆ รออยู่อีกเยอะเลย!",
        author: "พี่มายด์ รุ่น 69"
    }
];

// ดึง Element จาก HTML
const drawBtn = document.getElementById('drawBtn');
const jarContainer = document.getElementById('jarContainer');
const wishModal = document.getElementById('wishModal');
const closeBtn = document.getElementById('closeBtn');
const wishText = document.querySelector('.wish-text');
const modalAgainBtn = document.querySelector('.modal-again-btn');

// ฟังก์ชันสุ่มคำอวยพร
function drawWish() {
    // สุ่ม index
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const selectedWish = wishes[randomIndex];

    // ใส่ข้อความคำอวยพร
    wishText.textContent = selectedWish.text;

    // เปลี่ยนข้อความบนปุ่มสุ่มอีกครั้ง ให้แสดงชื่อรุ่นพี่
    modalAgainBtn.textContent = `— ${selectedWish.author}`;

    // เล่น Animation เขย่าโหล
    jarContainer.classList.add('shake');

    setTimeout(() => {
        jarContainer.classList.remove('shake');
        wishModal.classList.add('active');
    }, 500);
}

// Event Listeners
drawBtn.addEventListener('click', drawWish);
jarContainer.addEventListener('click', drawWish);

closeBtn.addEventListener('click', () => {
    wishModal.classList.remove('active');
});

modalAgainBtn.addEventListener('click', () => {
    drawWish();
});

// กดพื้นที่ข้างนอก Modal เพื่อปิด
wishModal.addEventListener('click', (e) => {
    if (e.target === wishModal) {
        wishModal.classList.remove('active');
    }
});