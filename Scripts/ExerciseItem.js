export class ExerciseItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Read values from attributes
    const exerciseName = this.getAttribute('exercise-name') || "Unnamed";
    const reps = this.getAttribute('reps') || "_________";
    const time = this.getAttribute('time') || "_________";
    const weight = this.getAttribute('weight') || "_________";

  this.innerHTML = `
  <div class="ExerciseItem">
    <div class="exercise-field">
      <div class="label">Exercise</div>
      <span class="exercise-name">${exerciseName}</span>
    </div>
    <div class="exercise-field">
      <div class="label">Reps</div>
      <span class="exercise-reps">${reps}</span>
    </div>
    <div class="exercise-field">
      <div class="label">Time</div>
      <span class="exercise-time">${time}</span>
    </div>
    <div class="exercise-field">
      <div class="label">Weight</div>
      <span class="exercise-weight">${weight}</span>
    </div>
  </div>
`;

  }
}

customElements.define('exercise-item', ExerciseItem);
