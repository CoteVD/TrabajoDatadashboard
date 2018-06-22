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
	})	

//funcion  que debe contener toda la info
window.computeUsersStats = (users, progress, courses) => {
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
	//creando alumna de prueba 
	let alumna1 = new User(users[0].id, users[0].name, users[0].signupCohort);
	//asignando propiedad stats
	alumna1.stats = new Stats (progress[0][1].intro.percent, progress.find(element => element[0] === users[0].id), "ejercicios", "quizz", "lecturas" );
	//asignando cursos a la alumna
	//alumna1.stats.courses = progress.find(element => element[0] === users[0].id);
	//obteniendo progreso general de la alumna
	//alumna1.stats.percent = progress[0][1].intro.percent;

	//desglosando informacion de JSON progress de la unidad 1
	let allUnits = progress[0][1].intro.units; // unidades
	let arrAllUnits = Object.entries(allUnits); // array de unidades
	let partsUnits = arrAllUnits[0][1].parts; // partes //desde aca se puede replicar para otras unidades
	let arrPartsUnits = Object.entries(partsUnits); // array de partes

	/////////////////////////////////////////////////////////////////////////////////////////////////////unidad 1
	let uni1Part1Type = arrPartsUnits[0][1].type // tipo de la parte 1, de la unidad 1
	let uni1Reads = []; //variable para mostrar solo los tipo reads. 
	let uni1Quiz = []; //variable para mostrar solo los tipo quizz. 
	let uni1Exc = []; //variable para mostrar solo los tipo excercises. 
	
	//ciclo para sacar solo los tipo read
	arrPartsUnits.forEach((element)=> {
		if (element[1].type === "read") uni1Reads.push(element)});

	//ciclo for para sacar solo los tipo quizz
	arrPartsUnits.forEach((element)=> {
		if (element[1].type === "quiz") uni1Quiz.push(element)});

	//ciclo for para sacar solo los tipo excersises
	arrPartsUnits.forEach((element)=> {
		if (element[1].type === "practice") {uni1Exc.push(element)} else { uni1Exc.push("0")}});
	/////////////////////////////////////////////////////////////////////unidad2
	let partesUnidad2 = arrAllUnits[1][1].parts; // partes u2
	let arrPartesUnidad2 = Object.entries(partesUnidad2); // array de partes de la unidad 2
	let u2Type = arrPartesUnidad2[0][1].type // tipo de la parte 1, de la unidad 2
	let readsU2 = []; //variable para mostrar solo los tipo reads.
	let quizU2 = []; //variable para mostrar solo los tipo quizz.
	let excU2 = []; //variable para mostrar solo los tipo excercises.

	
	//ciclo para sacar solo los tipo read
		arrPartesUnidad2.forEach((parte)=> {
			if (parte[1].type === "read"){ readsU2.push(parte)}});

	//ciclo for para sacar solo los tipo quizz
		arrPartesUnidad2.forEach((parte)=> {
			if (parte[1].type === "quiz"){ quizU2.push(parte)}});


	//ciclo for para sacar solo los tipo excersises
	arrPartesUnidad2.forEach((parte)=> {
		if (parte[1].type === "practice"){ excU2.push(parte)}  else { excU2.push("0")}});
	///////////////////////////////////////////////////////////////////////unidad 3 
	let partesUnidad3 = arrAllUnits[1][1].parts; // partes u3
	let arrPartesUnidad3 = Object.entries(partesUnidad3); // array de partes de la unidad 3
	let u3Type = arrPartesUnidad3[0][1].type // tipo de la parte 1, de la unidad 3
	let readsU3 = []; //variable para mostrar solo los tipo reads.
	let quizU3 = []; //variable para mostrar solo los tipo quizz.
	let excU3 = []; //variable para mostrar solo los tipo excercises.


	//ciclo para sacar solo los tipo read
	arrPartesUnidad3.forEach((parte)=> {
		if (parte[1].type === "read"){ readsU3.push(parte)}});

	//ciclo for para sacar solo los tipo quizz
	arrPartesUnidad3.forEach((parte)=> {
		if (parte[1].type === "quiz"){ quizU3.push(parte)}});


	//ciclo for para sacar solo los tipo excersises
	arrPartesUnidad3.forEach((parte)=> {
		if (parte[1].type === "practice"){ excU3.push(parte)}});	

	//obteniendo total de quiz completados 
		//variables con quiz de cada unidad
		let completedQuizU1 = "";
		let completedQuizU2 = "";
		let completedQuizU3 = "";
		//validando si estan completos
		if (uni1Quiz[0][1].completed === 1 ){
			completedQuizU2 += 1;
		}		
		if (quizU2[0][1].completed === 1 ){
			completedQuizU2 += 1;
		}		
		if (quizU3[0][1].completed === 1 ){
			completedQuizU3 += 1;
		}
		// variable que suma todos los completados 
		let allCompletedQuiz = completedQuizU1 + completedQuizU2 + completedQuizU3;

	//obteniendo total de lecturas completadas
		//variables con quiz de cada unidad
		let completedreadU1 = "";
		let completedreadU2 = "";
		let completedreadU3 = "";
		//validando si estan completos
		if (uni1Reads[0][1].completed === 1 ){
			completedreadU1 += 1;
		}		
		if (readsU2[0][1].completed === 1 ){
			completedreadU2 += 1;
		}		
		if (readsU3[0][1].completed === 1 ){
			completedreadU3 += 1;
		}
		// variable que suma todos los completados 
		let allCompletedReads = completedreadU1 + completedreadU2 + completedreadU3;

	//obteniendo total de ejercicios completados
		//variables con ejercicios de cada unidad
		let completedexcU1 = "";
		let completedexcU2 = "";
		let completedexcU3 = "";
		//validando si estan completos
		if (uni1Exc === 1 ){
			completedexcU1 += 1;
		}	;	
		if (excU2 === 1 ){
			completedexcU2 += 1;
		}	;	
		if (excU3[0][1].completed === 1 ){
			completedexcU3 += 1;
		} ;
		// variable que suma todos los completados 
		let allCompletedExc = completedexcU1 + completedexcU2 + completedexcU3;

}
	

window.sortUsers = (users, orderBy, orderDirection) => {

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
