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
    authorBadge.textContent = selectedWish.author; // แสดงชื่อนิ่งๆ

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