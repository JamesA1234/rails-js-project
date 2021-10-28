const BASE_URL = "http://locahost:3000";


const init = () => {
  getWorkouts();
  bindNavWorkoutListeners();
  bindWorkoutFormEventListener();
};

const getWorkouts = () => {
  mainListEl.innerHTML = "<h1>Loading...</h1>";
  fetch("http://localhost:3000/Workouts")
    .then((res) => res.json())
    .then((data) => {
      mainListEl.innerHTML = "";
      mainListTitleEl.innerText = "Workouts";
      data.forEach((WorkoutObject) => {
        const newWorkout = new Workout(WorkoutObject);
        mainListEl.innerHTML += newWorkout.renderIndexWorkout();
      });

      document
        .querySelectorAll(".Workout-link")
        .forEach((link) => link.addEventListener("click", showWorkoutDetails));
      document
        .querySelectorAll(".delete-btn")
        .forEach((btn) => btn.addEventListener("click", deleteWorkout));
    });
};

function bindWorkoutFormEventListener() {
  WorkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

  });
}

function bindNavWorkoutListeners() {

}

// // Make a fetch request to get the data from our server
