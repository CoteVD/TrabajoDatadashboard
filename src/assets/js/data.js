let users = {};
let progress = {};
let cohorts = {};
let usersStats = {};

fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
  .then(response => response.json())
  .then(usersJSON => {
    users = usersJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener usuarios");
    console.error("ERROR > " + error.stack);
  });

fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
  .then(response => response.json())
  .then(progressJSON => {
    progress = progressJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener el progreso");
    console.error("ERROR > " + error.stack);
  });

fetch("../data/cohorts.json")
  .then(response => response.json())
  .then(cohortsJSON => {
    cohorts = cohortsJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener el listado de cohorts");
    console.error("ERROR > " + error.stack);
  });

areWeFinishedYet = () => {
  if (users && progress && cohorts) {
    const cohort = cohorts.find(item => item.id === "lim-2018-03-pre-core-pw");
    const courses = Object.keys(cohort.coursesIndex);
    usersStats = window.computeUsersStats(users, progress, courses);
  }
};

goResults = () => {
  if (preadPeru.value === 'cohort1') {
    search.style.display = 'none';
    generalResults.style.display = 'block';

    const sortedUsers = window.sortUsers(usersStats, "name");

  studentsName.innerHTML = "";

  for (let student of sortedUsers) {
    studentsName.innerHTML += `
  <div class="col-12">
    <tr>
    <td>${student.name}</td>
    <td>${student.stats.exercises.percent} % </td>
    <td>${student.stats.reads.percent} %</td>
    <td>${student.stats.quizzes.percent} %</td>
    <td>${student.stats.percent} %</td>
    </tr> 
  </div>
    `;
  }
  } else {
    alert('Selecciona un cohort.');
  }
};

onToggleSort = () => {
  const direction = toggleSort.innerText;
  if (direction == "Ordenar alumnas") {
    toggleSort.innerText = "Orden ascendente";
  } else {
    toggleSort.innerText = "Orden descendente";
  }
  // Función para ordenar los usuarios
  const sortedUsers = window.sortUsers(usersStats, "percent", direction);

  studentsName.innerHTML = "";

  for (let student of sortedUsers) {
    studentsName.innerHTML += `
  <div class="col-12">
    <tr>
    <td>${student.name}</td>
    <td>${student.stats.exercises.percent} % </td>
    <td>${student.stats.reads.percent} %</td>
    <td${student.stats.quizzes.percent} %</td>
    <td>${student.stats.percent} %</td>
    </tr>
  </div> 
    `;
  }
};

onSearchBoxChange = () => {
  const search = studentSearch.value;
  const filteredUsers = window.filterUsers(usersStats, search);
  studentsName.innerHTML = "";
  filteredUsers.forEach(student => {
    studentsName.innerHTML += `
  <div class="col-12">
    <tr>
    <td>${student.name}</td>
    <td>${student.stats.exercises.percent} % </td>
    <td>${student.stats.reads.percent} %</td>
    <td>${student.stats.quizzes.percent} %</td>
    <td>${student.stats.percent} %</td>
    </tr>
  </div> 
    `;
  });
};
