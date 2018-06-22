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
	//creando alumna de prueba 
	let alumna1 = new User(users[0].id, users[0].name, users[0].signupCohort);
	//asignando propiedad stats
	alumna1.stats = "student";
	//asignando cursos a la alumna
	alumna1.stats.courses = progress.find(element => element[0] === users[0].id);
	//obteniendo progreso general de la alumna
	alumna1.stats.percent = progress[0][1].intro.percent;

	//desglosando informacion de JSON progress de la unidad 1
	let a = progress[0][1].intro.units; // unidades
	let b = Object.entries(a); // array de unidades
	let c = b[0][1].parts; // partes //desde aca se puede replicar para otras unidades
	let d = Object.entries(c); // array de partes
	let e = d[0][1].type // tipo de la parte 1, de la unidad 1
	let f = []; //variable para mostrar solo los tipo reads. 
	let q = []; //variable para mostrar solo los tipo quizz. 
	let j = []; //variable para mostrar solo los tipo excercises. 
	
	//ciclo para sacar solo los tipo read
	d.forEach((element)=> {
		if (element[1].type === "read") f.push(element)});

	//ciclo for para sacar solo los tipo quizz
	d.forEach((element)=> {
		if (element[1].type === "quizz") q.push(element)});

	//ciclo for para sacar solo los tipo excersises
	d.forEach((element)=> {
		if (element[1].type === "excercises") j.push(element)});

	/*
	//obteniendo estadistica de ejercicios
	alumna1.stats.exercises = progress.find(element === "practice")
	//obteniendo estadistica de quizzes
	alumna1.stats.quizzes = 
	//obteniendo estadistica de reads
	alumna1.stats.reads =  */
}
	

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};


//intentos de codigos fallidos :'c


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
