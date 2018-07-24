/* Promesa que obtiene los nombres */
fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(usersJSON => {
    users = usersJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener usuarios");
    console.error("Error: " + error.stack);
  });

/* Promesa que obtiene el progreso */
fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(progressJSON => {
    progress = progressJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener el progreso");
    console.error("Error: " + error.stack);
  });

/* Promesa que obtiene los cohortes */
fetch('../data/cohorts.json')
  .then(response => response.json())
  .then(cohortsJSON => {
    cohorts = cohortsJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener el listado de cohorts");
    console.error("Error: " + error.stack);
  });

/* Recibe todas las promesas y las junta en UserStats. Se asegura que se obtengan todas juntas y del cohorte con el ID lim-2018-03-pre-core-pw. */
areWeFinishedYet = () => {
  if (users && progress && cohorts) {
    const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    usersStats = window.computeUsersStats(users, progress, courses);
  }
};

//return container.innerHTML += `<ul><b>NOMBRE:</b> ${student.name.toUpperCase()}<br><b>ID:</b> ${student.id}</ul>`;

/* Función que cambia el nombre en el botón de ordenamiento de usuarias */
onToggleSort = () => {
  const direction = toggleSort.innerText;
  if (direction === "Orden de completitud ascendente") {
    toggleSort.innerText = "Orden de completitud descendente";
  } else {
    toggleSort.innerText = "Orden de completitud ascendente";
  }
  /* Función que ordena e imprime a las usuarias */
  const sortedUsers = window.sortUsers(usersStats, "percent", direction);
  nameList.innerHTML = '';
  for (let student of sortedUsers) {
    nameList.innerHTML += `
      <p>Nombre: ${student.name.toUpperCase()} Porcentaje de completitud general: ${student.stats.percent}%</p>
    `;
  }
};

/* Función para buscar alumna por nombre */
searchStudent = () => {
  const search = studentSearch.value;
  const filteredUsers = window.filterUsers(usersStats, search);
  nameList.innerHTML = '';
  filteredUsers.forEach(student => {
    nameList.innerHTML += `
      <p>${student.name.toUpperCase()}</p>
    `;
  });
};