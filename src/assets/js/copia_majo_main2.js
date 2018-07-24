let cohortsID = [];
let usersName = [];
console.log(testeando);

//llamando al JSON con fetch
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

window.onload = () => {
   
	//varia
	document.getElementsByClassName('cohort');
	const className = document.getElementsByClassName('name')[0];

	//llamando al JSON con fetch
	const cohortsJSON = 'data/cohorts.json';
	fetch(cohortsJSON) 
	.then(response => response.json())
	.then(data => { 
		
		cohortsFull(data);
	})

	const cohortsFull = data => {
		
		data.forEach(elem => {
			//comparar id para sacar solo los de lima con  if 	
			if (elem.sede === "lima"){
				//mostrar id de esos cohort	
				cohortsID.push(elem.id);
					
				cohortsID.reverse(elem.id);

				//console.log(cohortsID.reverse()); 
			} 
		});
		//transforme a texto los ids 
		let cohortsIdText = JSON.stringify(cohortsID);
		//console.log(cohortsIdText);
		
		//mostrar id de esos cohort y listarlos con innerHTML  
		/*document.getElementById("showCohortList").innerHTML = cohortsIdText; */

		//print de los cohorts de lima en tarjetas individuales
		/*
		const lima = document.getElementById('btnLima');lima.addEventListener('click', () => {
			document.getElementById('cohorts').style.display = 'block';

			let newNameCohort = '';
			for (let i = 0; i < cohortsID.length; i++) {
				newNameCohort += `<p>${cohortsID[i]}</p>`
				console.log(newNameCohort);

			const datos = document.getElementById('nameCohort');
			datos.innerHTML = newNameCohort;
			}
		});
		*/
		//boton lima
		const lima = document.getElementById('btnLima');
		const tabla = document.getElementById('tableBody')
		lima.addEventListener('click', () => {
            llamar();
			document.getElementById('listCohort').style.display = 'block';
			//recorre el arreglo de cohorts 	
			let newNameCohort = '';
			for (let i = 0; i < cohortsID.length; i++) {
			//	newNameCohort += tableSede;
				newNameCohort += `<tr><a data-cohort="lima"  class='cohort'> 
                ${cohortsID[i]}</a></tr>
                <button class="btn" onclick="mostrar()"> Ver Alumnas </button>`

				//console.log(newNameCohort);

			
			tabla.innerHTML = newNameCohort;
			}		
		});


		//boton CDMX
		const cdmx = document.getElementById('btnCDMX');cdmx.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';			
		});

		//boton santiago
		const santiago = document.getElementById('btnSantiago');santiago.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';
		});

		//boton sao paulo
		const saoPaulo = document.getElementById('btnSaoPaulo');saoPaulo.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';
		});
	}	

  //"ver alumnas"
	//llamar con fetch a los nombres de las alumnas
	function llamar(){
		const usersJSON ='../data/cohorts/lim-2018-03-pre-core-pw/users.json';
		fetch(usersJSON)
		.then(response => response.json())
		.then(data => {
			usersFull(data);
		})
		const usersFull = data => {
		
		data.forEach(elem => {
			//mostrar nombre de almunas
			usersName.push(elem.name);
		});
		//transforme a texto los nombre
		let userNameText = JSON.stringify(usersName);
	}

}


//area de busqueda
const btnSearchA = document.getElementById('btnSearch');
btnSearchA.addEventListener('click', () => {
	//console.log(search);
	let input = document.getElementById('search').value;
	let filter = input.toUpperCase();
	
	let resultSearch = '';
	for (let k = 0; k < usersName.length; k++) {

		
		if (filter === usersName[k]) {
			document.getElementById('resultSearch').innerHTML = 'hola';

			document.getElementById('resultSearch').innerHTML = resultSearch;
			console.log('si esta');
					
		//if (enlace.innerHTML.toUpperCase().indexOf(filter) > -1) {
			
		} else {
			console.log('no esta');
			
		}
	}

	/*
	let searchStudent = (users, search) => {
		let newSearchStudent = [];
		return users.filter((element) => {
			return element.name.toLowerCase().indexOf
			(search.toLowerCase()) >= 0;
		});
		return newSearchStudent;
	}
	*/
})
} //cierre de window onload

function mostrar(){
	const tableNames = document.getElementById('tableAlumnas');
	document.getElementById('listCohort').style.display = 'none';
	document.getElementById('showNames').style.display = 'block';
	console.log('hola');
					let newListName = '';
					for (let j = 0; j < usersName.length; j++) {
						newListName += `
						<table>
								<tr>
									<td><a href="#" data-alumna="${usersName[j]}" class='name'>${usersName[j]}</a></td>
									<td>Maria Anders</td>
									
								</tr>
								</table> 
					
					
						`
						tableNames.innerHTML = newListName;	
						
					}
				}


//btn alumna prueba
	const prueba = document.getElementById('btnPrueba');
	prueba.addEventListener('click', () => {
		document.getElementById('perfilAlumnas').style.display = 'block';
		console.log(window.computeUsersStats(users, progress, courses));
	
	
		document.getElementById('showUsers').innerHTML = `<p>${users[1].name}</p><p>${users[0].signupCohort}</p><p>${progress[0][1].intro.percent}</p>`
		//progreso general
		let percentBarra = progress[0][1].intro.percent
		document.getElementById('showProgress').innerHTML = `<p>Progreso General</p><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${percentBarra}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${progress[0][1].intro.percent}%</div></div>`
		document.getElementById('showCourses').innerHTML = `<p>Courses ${progres[1][1]}</p><div class="progress">
		<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
		</div> `

	});
	