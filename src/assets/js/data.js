class User {
  constructor(stats) {
    this.stats = stats;
  }
}
class Stats {
  constructor(percent, practice, reads, quizzes) {
    this.percent = percent;
    this.practice = practice;
    this.reads = reads;
    this.quizzes = quizzes;
  }
}
class Reads {
  constructor(total, completed, percent) {
    this.total = total,
    this.completed = completed,
    this.percent = percent;
  }
}
class Exercizes {
  constructor(total, completed, percent) {
    this.total = total,
    this.completed = completed,
    this.percent = percent;
  }
}
class Quizzes {
  constructor(total, completed, percent, scoreSum, scoreAvg) {
    this.total = total,
    this.completed = completed,
    this.percent = percent,
    this.scoreSum = scoreSum,
    this.scoreAvg = scoreAvg;
  }
}

window.computeUsersStats = (users, progress) => {
  let processed = [];
  let progressArr = Object.entries(progress);
  let user = users;
  for (let i = 0; i < progressArr.length; i++) {
    user = users[i].id;
    if (user === progressArr[i][0]) {
      let userCourses = Object.entries(progressArr[i][1]);
      if (userCourses.length === 0) {
        processed.push('Sin información.');
      } else {
        let intro = userCourses[0][1];
        let units = Object.entries(intro.units);
        let percent = intro.percent;
        let userStats = new Stats(percent, getReadings(units), getExercizes(units), getQuizzes(units));
        let users = new User(userStats);
        processed.push(users);
      }
    }
  }
  return processed;
};
// Calcular lecturas
const getReadings = (units) => {
  let readings = 0;
  let completedReadings = 0;
  let readingsPercent;
  let reads;
  for (let i = 0; i < units.length; i++) {
    let parts = Object.entries(units[i][1].parts);
    for (let j = 0; j < parts.length; j++) {
      let chapter = parts[j][1];
      if (chapter.type === 'read') { 
        readings++;
      }
      if (chapter.type === 'read' && chapter.completed === 1) {
        completedReadings++;
      }
    }
    readingsPercent = (completedReadings / readings) * 100; 
  };
  reads = new Reads(readings, completedReadings, readingsPercent);
  return reads;
};

// Calcular ejercicios
const getExercizes = (units) => {
  let exercize = 0;
  let completedExercize = 0;
  let exercizePercent;
  let exercizes;
  for (let i = 0; i < units.length; i++) {
    let parts = Object.entries(units[i][1].parts);
    for (let j = 0; j < parts.length; j++) { 
      let chapter = parts[j][1];
      if (chapter.type === 'practice') { 
        exercize++;
      }
      if (chapter.type === 'practice' && chapter.completed === 1) { 
        completedExercize++;
      }
    }
    exercizePercent = (completedExercize / exercize) * 100; 
  };
  exercizes = new Exercizes(exercize, completedExercize, exercizePercent);
  return exercizes;
};

// Calcular quizzes
const getQuizzes = (units) => {
  let quiz = 0;
  let completedQuiz = 0;
  let scoreSum = 0;
  let scoreAvg = 0;
  let quizzes;
  let quizPercent;
  for (let i = 0; i < units.length; i++) { 
    let parts = Object.entries(units[i][1].parts);
    for (let j = 0; j < parts.length; j++) { 
      let chapter = parts[j][1];
      if (chapter.type === 'quiz') { 
        quiz++;
      }
      if (chapter.type === 'quiz' && chapter.completed === 1) {
        completedQuiz++;
        scoreSum += chapter.score; 
      }
    }
    quizPercent = (completedQuiz / quiz) * 100; 
    scoreAvg = scoreSum / completedQuiz; 
  };
  quizzes = new Quizzes(quiz, completedQuiz, quizPercent, scoreSum, scoreAvg);
  return quizzes;
};

// Ésta funcion calcula los totales para el cohort
const calculateTotals = (processed) => {
  let totalReads = 0;
  let totalQuizzes = 0;
  let totalExercises = 0;
  let courseTotal = 0;
  for (let i = 0; processed.length; i++) {
    if (processed[i] === 'Usuario no tiene información que mostrar') {
      totalReads += 0;
      totalQuizzes += 0;
      totalExercises += 0;
      courseTotal += 0;
    } else {
      totalReads += processed[i].stats.reads.percent;
      totalQuizzes += processed[i].stats.quizzes.percent;
      totalExercises += processed[i].stats.practice.percent;
      courseTotal += processed[i].stats.percent;
    }
    document.getElementById('totalReads').innerHTML = Math.round(totalReads / processed.length) + '%';
    document.getElementById('totalQuizzes').innerHTML = Math.round(totalQuizzes / processed.length) + '%';
    document.getElementById('totalExercises').innerHTML = Math.round(totalExercises / processed.length) + '%';
    document.getElementById('courseTotal').innerHTML = Math.round(courseTotal / processed.length) + '%';
  };
};

// Ésta función ordena por orden alfabetico a las alumnas.
window.onToggleSort = (users, orderBy, orderDirection) => {
  if (orderBy === "name") {
    return users.sort((a, b) => {
      if (orderDirection == "Orden de completitud ascendente") {
        return a.name.localeCompare(b.name);
      } else {
        return a.name.localeCompare(b.name) * -1;
      }
    });
  }

  if (orderBy === "percent") {
    return users.sort((a, b) => {
      if (orderDirection == "Orden de completitud ascendente") {
        return a.stats.percent - b.stats.percent;
      } else {
        return (a.stats.percent - b.stats.percent) * -1;
      }
    });
  }
};

window.filterUsers = (users, search) => {
  if (search) {
    if (users) {
      search = search.toLowerCase();
      return users.filter(user => user &&
        user.name &&
        user.name.toUpperCase().indexOf(search) >= 0);
    }
  }
  return users;
};

window.processCohortData = (options) => {
  computeUsersStats();
  sortUsers();
  filterUsers();
};