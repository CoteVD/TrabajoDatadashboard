	let users = [];
	let progress = [];
	let courses = []; 

 //function obtener datos users
	//llamando al JSON con fetch
	const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
	fetch(usersJSON) 
	.then(response => response.json())
	.then(data => {   
		usersFull(data);
	})	
	const usersFull = data => {
	data.forEach(elem => {
		users = data;
		//console.log(users[1].id);
	 	}) 
	}
 //function obtener datos progress
	//llamando al JSON con fetch
	const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
	fetch(progressJSON) 
	.then(response => response.json())
	.then(data => {   
		progress = Object.entries(data);
        //console.log(progress[0][1].intro.units);
        computeUsersStats(users, progress, courses);
	})	

//funcion  que debe contener toda la info
computeUsersStats = (users, progress, courses) => {
	//objeto constructor para crear usuarios
	class User {
	  constructor(id, name, cohort){
		this.id = id;
		this.name = name;
		this.cohort = cohort;
		}
	
	}
	//objeto constructor de stats
	class Stats { 
		constructor(percent, courses, excercises, quizzes, reads){
		this.percent = percent; //porcentaje global de cada usuario
		this.courses = courses; //cursos de la alumna
		this.excercises= excercises; //ejercicios
		this.quizzes = quizzes; //quizz
		this.reads = reads;//lectura
		}
	}

	//desglosando informacion de JSON progress de la unidad 1
	let allUnits = progress[0][1].intro.units; // unidades
	let arrAllUnits = Object.entries(allUnits); // array de unidades
	let partsUnits = arrAllUnits[0][1].parts; // partes //desde aca se puede replicar para otras unidades
	let arrPartsUnits = Object.entries(partsUnits); // array de partes

	/////////////////////////////////////////////////////////////////////////////////////////////////////unidad 1
	let uni1Part1Type = arrPartsUnits[0][1].type // tipo de la parte 1, de la unidad 1
	let uni1Reads = []; //variable para mostrar solo los tipo reads. 
	let uni1ReadTotal = ""; // variable para guardar el numero total 
	let uni1Quiz = []; //variable para mostrar solo los tipo quizz. 
	let uni1QuizzTotal = "";
	let uni1Exc = []; //variable para mostrar solo los tipo excercises. 
	let uni1ExcTotal = ""; 
	//ciclo para sacar solo los tipo read
	arrPartsUnits.forEach((element)=> {
		if (element[1].type === "read") uni1Reads.push(element), uni1ReadTotal++});

	//ciclo for para sacar solo los tipo quizz
	arrPartsUnits.forEach((element)=> {
		if (element[1].type === "quiz") uni1Quiz.push(element), uni1QuizzTotal++});

	//ciclo for para sacar solo los tipo excersises
	arrPartsUnits.forEach((element)=> {
		if (element[1].type === "practice") {uni1Exc.push(element), uni1ExcTotal++} else { uni1Exc.push("0")}});
	//////////////////////////////////////////////////////////////////////////////////////////////unidad2
	let partesUnidad2 = arrAllUnits[2][1].parts; // partes u2
	let arrPartesUnidad2 = Object.entries(partesUnidad2); // array de partes de la unidad 2
	let u2Type = arrPartesUnidad2[0][1].type // tipo de la parte 1, de la unidad 2
	let readsU2 = []; //variable para mostrar solo los tipo reads.
	let readsU2Total = "";
	let quizU2 = []; //variable para mostrar solo los tipo quizz.
	let quizU2Total = ""; 
	let excU2 = []; //variable para mostrar solo los tipo excercises.
	let excU2Total = "";

	
	//ciclo para sacar solo los tipo read
		arrPartesUnidad2.forEach((parte)=> {
			if (parte[1].type === "read"){ readsU2.push(parte), readsU2Total++}});

	//ciclo for para sacar solo los tipo quizz
		arrPartesUnidad2.forEach((parte)=> {
			if (parte[1].type === "quiz"){ quizU2.push(parte), quizU2Total++}});


	//ciclo for para sacar solo los tipo excersises
	arrPartesUnidad2.forEach((parte)=> {
		if (parte[1].type === "practice"){ excU2.push(parte), excU2Total++}  else { excU2.push("0")}});
	///////////////////////////////////////////////////////////////////////unidad 3 
	let partesUnidad3 = arrAllUnits[1][1].parts; // partes u3
	let arrPartesUnidad3 = Object.entries(partesUnidad3); // array de partes de la unidad 3
	let u3Type = arrPartesUnidad3[0][1].type // tipo de la parte 1, de la unidad 3
	let readsU3 = []; //variable para mostrar solo los tipo reads.
	let readsU3Total = "";
	let quizU3 = []; //variable para mostrar solo los tipo quizz.
	let quizU3Total = "";
	let excU3 = []; //variable para mostrar solo los tipo excercises.
	let excU3Total = ""; 	

	//ciclo para sacar solo los tipo read
	arrPartesUnidad3.forEach((parte)=> {
		if (parte[1].type === "read"){ readsU3.push(parte), readsU3Total++}});

	//ciclo for para sacar solo los tipo quizz
	arrPartesUnidad3.forEach((parte)=> {
		if (parte[1].type === "quiz"){ quizU3.push(parte), quizU3Total++}});


	//ciclo for para sacar solo los tipo excersises
	arrPartesUnidad3.forEach((parte)=> {
		if (parte[1].type === "practice"){ excU3.push(parte), excU3Total++}});	

	///////////////////////////////////////////////////////////////////////obteniendo resultados	

	/////////////////////////////////////////////obteniendo total de quiz completados 
		//variables con quiz de cada unidad
		let completedQuizU1 = "";
		let completedQuizU2 = "";
		let completedQuizU3 = "";
		//validando si estan completos
		if (uni1Quiz[0][1].completed === 1 ){
			completedQuizU1++;
		}		
		if (quizU2[0][1].completed === 1 ){
			completedQuizU2++;
		}		
		if (quizU3[0][1].completed === 1 ){
			completedQuizU3++;
		}
		// variable que suma todos los completados 
		let allCompletedQuiz = completedQuizU1 + completedQuizU2 + completedQuizU3;
		//variable que suma el total de todos los quizz
		let allQuizz = uni1QuizzTotal + quizU2Total + quizU3Total; 
		// variable que calcula el porcentaje 
		let quizzPercent = (allCompletedQuiz * 100)/allQuizz;
		//obteniendo el promedio de puntuacion 
		let scoreU1 =  uni1Quiz[0][1].score; 
		let scoreU2 = quizU2[0][1].score; 
		let totalScore = (scoreU1 + scoreU2)/2; 


	///////////////////////////////////////////////obteniendo total de lecturas completadas
		//variables con quiz de cada unidad
		let completedreadU1 = "";
		let completedreadU2 = "";
		let completedreadU3 = "";
		//validando si estan completos
		uni1Reads.forEach((parte) => {
			if (parte[1].completed === 1 ){
				completedreadU1++;
			}	
		});
		readsU2.forEach((parte) => {
			if (parte[1].completed === 1 ){
				completedreadU2++;
			}	
		});
		readsU3.forEach((parte) => {
			if (parte[1].completed === 1 ){
				completedreadU3++;
			}	
		});
		// variable que suma todos los completados 
		let allCompletedReads = completedreadU1 + completedreadU2 + completedreadU3;
		//variable que suma todos los totales 
		let allReads = uni1ReadTotal + readsU2Total + readsU3Total;
		//variable que calcula porcentaje 
		let readPercent = (allCompletedReads * 100)/ allReads; 

	/////////////////////////////////////////////obteniendo total de ejercicios completados
		//variables con ejercicios de cada unidad
		let completedexcU1 = "";
		let completedexcU2 = "";
		let completedexcU3 = "";
		//validando si estan completos
		if (uni1Exc === 1 ){
			completedexcU1++;
		}	;	
		if (excU2 === 1 ){
			completedexcU2++;
		}	;	
		if (excU3 === 1 ){
			completedexcU3++;
		} ;
		// variable que suma todos los completados 
		let allCompletedExc = completedexcU1 + completedexcU2 + completedexcU3;
		// variable que suma todos los totales
		let allExc = uni1ExcTotal + excU2Total + excU3Total;
		//variable que calcula el porcentaje 
		let excPercent = (allCompletedExc * 100)/ allExc; 


	/////////////////////////////////////////////////////creando propiedades adicionales 
		//creando propiedad excercises
		class excercises {
			constructor(total, completed, percent){
				this.total = total;
				this.completed = completed;
				this.percent = percent;  
			}
		}
		//creando propiedad quizzes
		class quizzes {
			constructor(total, completed, percent, scoreAvg){
				this.total = total;
				this.completed = completed;
				this.percent = percent; 
				this.scoreAvg = scoreAvg;	
			}
		}
		//creando propiedad reads
		class reads {
			constructor(total, completed, percent){
				this.total = total;
				this.completed = completed;
				this.percent = percent; 
			}
		}


	//////////////////////////////////////////////////////////////creando alumna de prueba 

	let alumna1 = new User(users[0].id, users[0].name, users[0].signupCohort);
	//asignando propiedad stats
	alumna1.stats = new Stats (progress[0][1].intro.percent, progress.find(element => element[0] === users[0].id));
	//asignando cursos a la alumna
	alumna1.stats.courses = progress.find(element => element[0] === users[0].id);
	//obteniendo progreso general de la alumna
	alumna1.stats.percent = progress[0][1].intro.percent;
	//asignando propiedad excercises
	alumna1.stats.excercises = new excercises(allExc, allCompletedExc, excPercent);
	//asignando propiedad quizzes
	alumna1.stats.quizzes = new quizzes(allQuizz, allCompletedQuiz, quizzPercent, totalScore);
	//asignando propiedad reads
    alumna1.stats.reads = new reads(allReads, allCompletedReads, readPercent); 
    
    let alumna2 = new User(users[1].id, users[1].name, users[1].signupCohort);
    //asignando propiedad stats
	alumna2.stats = new Stats (progress[1][1].intro.percent, progress.find(element => element[0] === users[1].id));    
    //console.log(alumna2);  

    users.forEach(elem => {
        let complete = progress.find(element => element[0] === elem.id);
        let completedProgress = Object.values(complete); 
        completedProgress.forEach(elem => {
            let intro = elem.intro; 

            if(intro === undefined || intro == null) {
               console.log("error")
            } else {
                let testeando = intro.percent; 
                //let percent = elem.intro.percent; 
                console.log(testeando);
                //console.log(percent); 
            }
           
        })
        const alumna = {
            id : elem.id, 
            nombre: elem.name,
            cohort:  elem.signupCohort,
            progress : progress.find(element => element[0] === elem.id)
        }

     })  






}



   


window.sortUsers = (users, orderBy, orderDirection) => {
	// variable que guarda solo los nombres de las alumnas
	let usersName =[];
	users.forEach((user) =>{
			usersName.push(user.name)
		})
	// ordenando por alfabetico	
	let alphabetical = usersName.sort();
	// al revez 
	let reverse = alphabetical.reverse();
	//variable que guarda solo los progresos totales 
	
	let usersValues = []; 
	for (let i = 0; i<progress.length; i++){
		usersValues.push(progress[i][1].intro) 
	}
	
		
	
};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};


//intentos de codigos fallidos :'c
	/*

	let completedQuiz = [];

for (let element in uni1Quiz[1]){
 if(element.completed === 1) {
completeQuiz = +1 }  
}

let completedQuizU1 = "";

for (let element in uni1Quiz[0][1]){
 if(element.completed === 1) {
completeQuiz += 1 }  
}
	//obteniendo estadistica de ejercicios
	alumna1.stats.exercises = progress.find(element === "practice")
	//obteniendo estadistica de quizzes
	alumna1.stats.quizzes = 
	//obteniendo estadistica de reads
	alumna1.stats.reads =  */

/*
//function obtener datos courses	
//function findCourses(element) {
//return element = "00hJv4mzvqM3D9kBy3dfxoJyFV82";}

//console.log(users.findIndex(findCourses));
	//for (let i= 0; i <progress.length; i++){
		 
	
	
	
		//console.log(progressObject);
//console.log(progressText);
let a = progressText.map((element) => {
	courses.push(element[0]);
});
console.log(a);

	//objeto constructor para crear usuarios
	function usersConstructor(id){
		this.id = id;
		
	}
//crear multiples usuarios
createMultipleUsers = () => {
const alumna1 = new usersConstructor ("849689670459");
console.log(alumna1);
}


//objeto constructor de stats
function stats(percent, exercises, quizzes, reads, alumna1){
	this.percent = percent; //porcentaje global de cada usuario
	this.exercises= exercises; //ejercicios
	this.quizzes = quizzes; //quizz
	this.reads = reads;//lectura
}
//ejemplo de stats
const userOneStats = new stats ("50%", "20", "30", "10");
console.log(userOneStats);
console.log(userOneStats.percent);

	/*
		let progressIdmatch = progressObject.find(element[0] === id)[1];
		courses.push(progressIdmatch);
		*/
/*
//llamando al  JSON progress
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
fetch(progressJSON) 
.then(response => response.json())
.then(data => { 
	progressFull(data);
})
//mostrar progreso por alumna
const progressFull = data => {
	let progress = [];	
	// recorre el arreglo id y buscar el id que coincide con cada objeto de progress
	for (let i = 0; i <id.length; i++){
		if(id[i] === elem.id){
			progress.push(elem.id);
			console.log(progress) 
		}
	}
		
} 

//llamando al JSON con fetch
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
fetch(usersJSON) 
.then(response => response.json())
.then(data => { 
	usersFull(data);
})
const usersFull = data => {
let users = [];
data.forEach(elem => {
//mostrar nombre de almunas
users.push(elem.name);
	 
});
//obtene id de alumna
let id = [];
data.forEach(elem => {
	id.push(elem.id)
	
})
//transforme a texto los nombres
let userNameText = JSON.stringify(users);

//mostrar nombres y listarlos con innerHTML  
document.getElementById("showNames").innerHTML = userNameText;
}
*/
