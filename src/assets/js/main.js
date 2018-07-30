let users = null;
let progress = null;
let cohorts = null;
let usersStats = null;

fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(usersJSON => {
    users = usersJSON;
    completeJson();
  })
  .catch(error => {
    console.error("No pudimos obtener usuarios");
    console.error("ERROR > " + error.stack);
  });

fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(progressJSON => {
    progress = progressJSON;
    completeJson();
  })
  .catch(error => {
    console.error("No pudimos obtener el progreso");
    console.error("ERROR > " + error.stack);
  });

fetch('../data/cohorts.json')
  .then(response => response.json())
  .then(cohortsJSON => {
    cohorts = cohortsJSON;
    completeJson();
  })
  .catch(error => {
    console.error("No pudimos obtener el listado de cohorts");
    console.error("ERROR > " + error.stack);
  });

function completeJson() {
  if (users && progress && cohorts) {
    const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    usersStats = window.computeUsersStats(users, progress, courses);
  }
}
/*
function onToggleSort() {
  const direction = toggleSort.innerText;
  if (direction == "ASC") {
    toggleSort.innerText = "DESC";
  } else {
    toggleSort.innerText = "ASC";
  }
  //llamamos a la funcion de ordenamiento para que que ordene los usuarios
  const sortedUsers = window.sortUsers(usersStats, "percent", direction);
  //no se hace el getElementById por que en JS todo lo declarado en el html con un id queda como variable global :O
  studentContainer.innerHTML = "";
  for (let student of sortedUsers) {
    studentContainer.innerHTML += `
      <p>${student.name} ${student.stats.percent}</p>
    `;
  }
}

function onSearchBoxChange() {
  const search = searchBox.value;
  const filteredUsers = window.filterUsers(usersStats, search);
  studentContainer.innerHTML = "";
  filteredUsers.forEach(student => {
    studentContainer.innerHTML += `
      <p>${student.name}</p>
    `;
  });
}
*/