  let soundEnabled = false;

    document.getElementById("enable").addEventListener("click", () => {
      soundEnabled = true;
      alert("Sound enabled. Use your keyboard.");
    });

    // Create dynamic background elements
    function createBloodDrip() {
        const drip = document.createElement('div');
        drip.className = 'blood-drip';
        drip.style.left = Math.random() * window.innerWidth + 'px';
        drip.style.animationDelay = Math.random() * 3 + 's';
        drip.style.animationDuration = (3 + Math.random() * 2) + 's';
        document.body.appendChild(drip);
        
        setTimeout(() => {
            drip.remove();
        }, 5000);
    }

    function createFloatingSpirit() {
        const spirit = document.createElement('div');
        spirit.className = 'floating-spirit';
        spirit.style.left = Math.random() * window.innerWidth + 'px';
        spirit.style.top = Math.random() * window.innerHeight + 'px';
        spirit.style.animationDelay = Math.random() * 15 + 's';
        spirit.style.animationDuration = (15 + Math.random() * 10) + 's';
        document.body.appendChild(spirit);
        
        setTimeout(() => {
            spirit.remove();
        }, 25000);
    }

    function createCreepingShadow() {
        const shadow = document.createElement('div');
        shadow.className = 'creeping-shadow';
        shadow.style.animationDelay = Math.random() * 20 + 's';
        shadow.style.animationDuration = (20 + Math.random() * 10) + 's';
        document.body.appendChild(shadow);
        
        setTimeout(() => {
            shadow.remove();
        }, 30000);
    }

    // Initialize background animations
    function startBackgroundAnimations() {
        // Create initial elements
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createBloodDrip(), i * 1000);
        }
        for (let i = 0; i < 2; i++) {
            setTimeout(() => createFloatingSpirit(), i * 2000);
        }
        createCreepingShadow();

        // Continue creating elements periodically
        setInterval(createBloodDrip, 2000);
        setInterval(createFloatingSpirit, 8000);
        setInterval(createCreepingShadow, 15000);
    }

    // Start animations when page loads
    window.addEventListener('load', startBackgroundAnimations);

    document.addEventListener("keydown", (e) => {
      if (!soundEnabled) return;

      const audio = document.querySelector(`audio[data-key="${e.key}"]`);
      const keyDiv = document.querySelector(`.key[data-key="${e.key}"]`);

      if (!audio) return;

      audio.currentTime = 0;
      audio.play();

      keyDiv.classList.add("active");
    });

    document.addEventListener("keyup", (e) => {
      const keyDiv = document.querySelector(`.key[data-key="${e.key}"]`);
      if (!keyDiv) return;

      keyDiv.classList.remove("active");
    });