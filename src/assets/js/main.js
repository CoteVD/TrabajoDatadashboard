window.computeUsersStats = (users, progress, courses) => {
  for (let i = 0; i < users.length; i++) {
    let userId = users[i].id;
    let userProgress = progress[userId];

    if (JSON.stringify(userProgress) === "{}") {
      users[i].stats = {
        percent: 0,
        exercises: { percent: 0 },
        reads: { percent: 0 },
        quizzes: {
          percent: 0,
          scoreAvg: 0
        }
      };
    } else {
      let percentGral = 0;
      let lectures = 0;
      let lecturesCompleted = 0;
      let lecturesPercent = 0;
      let quizzes = 0;
      let quizzesCompleted = 0;
      let quizzesPercent = 0;
      let exercises = 0;
      let exercisesCompleted = 0;
      let exercisesPercent = 0;
      let scoreSum = 0;
      let scoreAvg = 0;

      for (let i in userProgress) {
        let element = userProgress[i];

        if (courses.indexOf(i) < 0) {
          continue;
        }

        percentGral += element.percent / Object.keys(userProgress).length;

        for (let unit of Object.values(element.units)) {
          for (let part of Object.values(unit.parts)) {
            if (part.length === 0) {
              quizzes = 0;
              exercises = 0;
              lectures = 0;
              quizzesPercent = 0;
              exercisesPercent = 0;
              lecturesPercent = 0;
            }

            if (part.type === "read") {
              lectures++;
            }

            if (part.type === "read" && part.completed === 1) {
              lecturesCompleted++;
            }

            lecturesPercent = Math.round((lecturesCompleted * 100) / lectures);

            if (part.type === "quiz") {
              quizzes++;
            }

            if (part.type === "quiz" && part.completed === 1) {
              quizzesCompleted++;
              scoreSum += part.score;
            }

            quizzesPercent =
              Math.round((quizzesCompleted * 100 * 10) / quizzes) / 10;

            if (part.type === "practice") {
              exercises++;
            }

            if (part.type === "practice" && part.completed === 1) {
              exercisesCompleted++;
            }

            exercisesPercent =
              Math.round((exercisesCompleted * 100 * 10) / (exercises || 1)) /
              10;
          }
        }
      }

      // Saca promedio
      scoreAvg = scoreSum / quizzes;

      users[i].stats = {
        percent: percentGral,
        reads: {
          percent: lecturesPercent,
          total: lectures,
          completed: lecturesCompleted
        },

        exercises: {
          percent: exercisesPercent,
          total: exercises,
          completed: exercisesCompleted
        },

        quizzes: {
          percent: quizzesPercent,
          total: quizzes,
          completed: quizzesCompleted,
          scoreAvg: scoreAvg,
          scoreSum: scoreSum
        }
      };
    }
  }
  return users;
};

window.sortUsers = (users, orderBy, orderDirection) => {
  if (orderBy === "name") {
    return users.sort(function (a, b) {
      if (orderDirection == "Ordenar ascendente") {
        return a.name.localeCompare(b.name);
      } else {
        return a.name.localeCompare(b.name) ;
      }
    });
  }

  if (orderBy === "percent") {
    return users.sort((a, b) => {
      if (orderDirection == "Orden ascendente") {
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
      return users.filter(
        user =>
          user && user.name && user.name.toLowerCase().indexOf(search) >= 0
      );
    }
  }
  return users;
};
