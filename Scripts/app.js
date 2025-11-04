import { ExerciseItem } from './ExerciseItem.js';

const stackContainer = document.querySelector('.exerciseStack');
const addExerciseBtn = document.querySelector('.addExerciseBtn');
const exerciseForm = document.querySelector('.exerciseForm');

function main() {
  addExerciseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = exerciseForm.exerciseName.value;
    const reps = exerciseForm.reps.value;
    const time = exerciseForm.time.value;
    const weight = exerciseForm.weight.value;


    // Check required fields
    if (!name) {
      alert("Please enter an exercise name.");
      return;
    }
    if (!reps) {
      alert("Please enter the number of reps.");
      return;
    }


    // Create and configure custom element
    const exerciseItem = document.createElement('exercise-item');
    exerciseItem.setAttribute('exercise-name', name);
    exerciseItem.setAttribute('reps', reps);
    exerciseItem.setAttribute('time', time);
    exerciseItem.setAttribute('weight', weight);

    // Add to stack
    stackContainer.append(exerciseItem);

    // Reset form
    exerciseForm.reset();
  });
}

main();
