window.onload = () => {
  data();
};
/* Objetos que guardarán la información */
let users = {};
let cohorts = {};
let progress = {};

/* Funcion para llamar a las promesas */
const data = () => {
  /* Promesa que obtiene los nombres */
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then(response => response.json())
    .then(data => {
      users = data;
    })
    .catch(error => {
      console.error("No pudimos obtener usuarios");
      console.error("Error: " + error.stack);
    });

  /* Promesa que obtiene el progreso */
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
    .then(response => response.json())
    .then(cohortsJSON => {
      cohort = cohortsJSON;
    })
    .catch(error => {
      console.error("No pudimos obtener el progreso");
      console.error("Error: " + error.stack);
    });

  /* Promesa que obtiene los cohortes */
  fetch('../data/cohorts.json')
    .then(response => response.json())
    .then(progressJSON => {
      progress = progressJSON;
    })
    .catch(error => {
      console.error("No pudimos obtener el listado de cohorts");
      console.error("Error: " + error.stack);
    });
};

/* Llama los datos a imprimir en la página */
courseData = () => {
  /* Funcionalidad para que se muestren los datos y se oculten las busquedas */
  search.style.display = 'none';
  generalResults.style.display = 'block';
  renderUsers(users, computeUsersStats(users, progress));
  calculateTotals(computeUsersStats(users, progress));
};

/* Se imprimen los datos en la tabla */
const renderUsers = (user, processed) => {
  let rankingNumber = 0;
  for (let i = 0; i < processed.length; i++) {
    rankingNumber++;
    if (processed[i] === 'Usuario no tiene información que mostrar' && user[i].role === 'student') {
      tableName.innerHTML += '<tr>' +
        '<td>' + rankingNumber + '</td>' +
        '<td>' + user[i].name.toUpperCase() + '</td>' +
        '<td class="numbers">' + '-' + '</td>' +
        '<td class="numbers">' + '-' + '</td>' +
        '<td class="numbers">' + '-' + '</td>' +
        '<td class="numbers">' + '-' + '</td>' +
        '</tr>';
    } else if (user[i].role === 'student') {
      tableName.innerHTML += '<tr>' +
        '<td>' + rankingNumber + '</td>' +
        '<td>' + user[i].name.toUpperCase() + '</td>' +
        '<td class="numbers">' + Math.round(processed[i].stats.reads.percent) + '%' + '</td>' +
        '<td class="numbers">' + Math.round(processed[i].stats.quizzes.percent) + '%' + '</td>' +
        '<td class="numbers">' + Math.round(processed[i].stats.practice.percent) + '%' + '</td>' +
        '<td class="numbers">' + Math.round(processed[i].stats.percent) + '%' + '</td>' +
        '</tr>';
    };
  };
};

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