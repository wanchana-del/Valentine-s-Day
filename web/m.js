const audio = document.getElementById("myMusic");
audio.volume = 0;

let unlocked = false;

// ปลดล็อกเสียงด้วยคลิกครั้งแรก
document.addEventListener("click", () => {
  if (!unlocked) {
    audio.play();
    audio.pause(); // แค่ปลดล็อก
    unlocked = true;
  }
}, { once: true });

// scroll = fade in
window.addEventListener("scroll", () => {
  if (!unlocked) return;

  const scrollTop = window.scrollY;
  const maxScroll = 300; // เลื่อนกี่ px ถึงดังสุด (ปรับได้)

  let volume = scrollTop / maxScroll;
  volume = Math.min(Math.max(volume, 1), 1);

  audio.volume = volume;

  if (volume > 0 && audio.paused) {
    audio.play();
  }
});
