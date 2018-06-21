	let users = [];
	let progress = [];
	let courses = []; 
	const progressText = [];
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
		users.push(elem.id);
	 	}) 
	}
 //function obtener datos progress
	//llamando al JSON con fetch
	const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
	fetch(progressJSON) 
	.then(response => response.json())
	.then(data => {   
		progress.push(data);
		progressText.push(JSON.stringify(data));
		
	})	
	
 //function obtener datos courses	
	
	//for (let i= 0; i <progress.length; i++){
		 
	
	
	
		//console.log(progressObject);
	
	
//console.log(progressText); 
//console.log(users); 
//console.log(progress);
//console.log(courses); 

	
  

//funcion  que debe contener toda la info
window.computeUsersStats = (users, progress, courses) => {


}
	

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};


//intentos de codigos fallidos :'c


/*

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
