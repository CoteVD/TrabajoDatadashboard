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
		let cohortsID = [];
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
			document.getElementById('listCohort').style.display = 'block';
			//recorre el arreglo de cohorts 	
			let newNameCohort = '';
			for (let i = 0; i < cohortsID.length; i++) {
			//	newNameCohort += tableSede;
				newNameCohort += `<tr><a data-cohort="lima" href="#" class='cohort'> 
				${cohortsID[i]}</a></tr>`

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

	
	function mostrarAlumnas (cohortsID[i]) {
		//llamar con fetch a los nombres de las alumnas
		let usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
		fetch(usersJSON)
			.then(response => response.json())
			.then(data => {
				usersFull(data);
			})
		let usersName = [];
		let currentUserID = [];
		const usersFull = data => {
			data.forEach(elem => {
				//mostrar nombre de almunas
				usersName.push(elem.name);
			});
			//transforme a texto los nombre
		let userNameText = JSON.stringify(usersName);
		console.log(userNameText);
		
	
		//mostrar nombres y listarlos con innerHTML  
	
		const showAlumnas = document.getElementById('btnAlumnas');
		const tableNames = document.getElementById('tableAlumnas');
		//const btnPrePeru = document.getElementsByClassName('cohort');
		showAlumnas.addEventListener('click', () => {
		//btnPrePeru.addEventListener('click', () => {
			document.getElementById('listCohort').style.display = 'none';
			document.getElementById('showNames').style.display = 'block';
			console.log('hola');

	}	




		//print los nombres de las alumnas en una lista
		let newListName = '';
		for (let j = 0; j < usersName.length; j++) {
			newListName += `<tr><a href="#" data-alumna="${usersName[j]}" class='name'>${usersName[j]}</a></tr>`

			tableNames.innerHTML = newListName;	
		}
	});



	//btn alumna prueba
	const prueba = document.getElementById('btnPrueba');
	prueba.addEventListener('click', () => {
		document.getElementById('perfilAlumnas').style.display = 'block';
		console.log(window.computeUsersStats(users, progress, courses));
		
		
		document.getElementById('showUsers').innerHTML = `<p>${users[1].name}</p><p>${users[0].signupCohort}</p><p>${progress[0][1].intro.percent}</p>`
		//progreso general
		let percentBarra = progress[0][1].intro.percent
		document.getElementById('showProgress').innerHTML = `<p>Progreso General</p><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${percentBarra}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${progress[0][1].intro.percent}%</div></div>`

		document.getElementById('showCourses').innerHTML = `<p>Courses ${progress[1][1]}</p><div class="progress">
		<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
	</div> `

		

		/*
		//ejercicio
		let courses = progress.find(element => element[0] === users[0].id);
		document.getElementById('showCourses').innerHTML = `<p>Progreso Ejercicios ${new excercises}</p><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${percentBarra}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${progress[0][1].intro.percent}%</div></div>`
		*/


	


		


	})

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
}
	

	

}