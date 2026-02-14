   function acceptLove() {
            // 1. เปลี่ยนข้อความ
            document.getElementById('mainText').innerHTML = "อันนี้ไม่มีอะไรร <br>";
            document.getElementById('subText').innerText = "กดข้างล่างสิอ้วนๆ 👇";
            document.querySelector('.heart-icon').style.fontSize = "80px";
            
            // 2. ซ่อนปุ่มคำถาม (Yes/No)
            document.getElementById('questionButtons').style.display = "none";

            // 3. แสดงปุ่มไปหน้า Memory
            const memoryBtn = document.getElementById('goToMemoryBtn');
            memoryBtn.style.display = "inline-block";

            // 4. โปรยกระดาษ
            createConfetti();
        }

        function moveButton() {
            const noBtn = document.getElementById('noBtn');
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        }

        function createConfetti() {
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                document.body.appendChild(confetti);
            }
        }
       