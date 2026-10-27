// รายการคำอวยพร (เพิ่มหรือแก้ข้อความในเครื่องหมายคำพูดได้เลย)
const wishes = [
    "ขอให้ทุกวันของคุณเต็มไปด้วยรอยยิ้ม และความสุขเล็กๆ ที่ชวนยิ้มตาม 😊",
    "ขอให้ค้นพบความสุขในสิ่งธรรมดารอบตัวเสมอ ✨",
    "เก่งมากแล้วนะในวันนี้ พักผ่อนเยอะๆ และใจดีกับตัวเองด้วยล่ะ 🌿",
    "ขอให้ทุกเรื่องที่หวังไว้ ค่อยๆ เติบโตอย่างงดงามนะ 🌱",
    "ขอให้เป็นวันที่ใจฟูและไม่มีเรื่องปวดหัวเข้ามากล้ำกราย 🤍",
    "ทานของอร่อยๆ แล้วเติมพลังไปลุยกับวันพรุ่งนี้นะ 🍰",
    "ขอให้มีแต่คนน่ารักๆ และมิตรภาพดีๆ แวดล้อมตัวคุณเสมอ 🌸",
    "ไม่ว่าจะทำอะไรอยู่ ขอให้เชื่อมั่นในตัวเองนะ คุณทำได้แน่นอน! 💪"
];

const jarContainer = document.getElementById('jarContainer');
const drawBtn = document.getElementById('drawBtn');
const wishModal = document.getElementById('wishModal');
const wishText = document.getElementById('wishText');
const closeBtn = document.getElementById('closeBtn');
const againBtn = document.getElementById('againBtn');

function openWish() {
    jarContainer.classList.add('shake');
    setTimeout(() => {
        jarContainer.classList.remove('shake');
        const randomIndex = Math.floor(Math.random() * wishes.length);
        wishText.textContent = wishes[randomIndex];
        wishModal.classList.add('active');
    }, 500);
}

function closeModal() {
    wishModal.classList.remove('active');
}

drawBtn.addEventListener('click', openWish);
jarContainer.addEventListener('click', openWish);
closeBtn.addEventListener('click', closeModal);
againBtn.addEventListener('click', openWish);

wishModal.addEventListener('click', (e) => {
    if (e.target === wishModal) closeModal();
});