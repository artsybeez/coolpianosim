  let soundEnabled = false;

    document.getElementById("enable").addEventListener("click", () => {
      soundEnabled = true;
      alert("Sound enabled. Use your keyboard.");
    });

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