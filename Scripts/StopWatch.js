export class StopWatch {
  constructor(maxSeconds = 60) {
    this.timerInterval = null;
    this.elapsedSeconds = 0;
    this.maxSeconds = maxSeconds; // time for full ring
  }

  startTimer() {
    clearInterval(this.timerInterval);

    const hrEl = document.getElementById("hr");
    const minEl = document.getElementById("min");
    const secEl = document.getElementById("sec");
    const displayEl = document.querySelector(".timerDisplay");

    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;

      const hr = Math.floor((this.elapsedSeconds % (60 * 60 * 24)) / (60 * 60));
      const min = Math.floor((this.elapsedSeconds % (60 * 60)) / 60);
      const sec = this.elapsedSeconds % 60;

      hrEl.textContent = hr.toString().padStart(2, "0");
      minEl.textContent = min.toString().padStart(2, "0");
      secEl.textContent = sec.toString().padStart(2, "0");

      // Progress in degrees
      const progressDeg = (this.elapsedSeconds % this.maxSeconds) / this.maxSeconds * 360;

      // Animate the border fill
      displayEl.style.background = `conic-gradient(#0892D0 ${progressDeg}deg, #222 ${progressDeg}deg)`;

    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.elapsedSeconds = 0;

    document.getElementById("sec").textContent = "00";
    document.getElementById("min").textContent = "00";
    document.getElementById("hr").textContent = "00";

    document.querySelector(".timerDisplay").style.background =
      "conic-gradient(#0892D0 0deg, #222 0deg)";
  }
}


