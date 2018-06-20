
window.onload = () => {
	
	//llamando al JSON con fetch
	const cohortsJSON = '../data/cohorts.json';
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
	 	} 
	});
	//transforme a texto los ids 
	let cohortsIdText = JSON.stringify(cohortsID);
	
	//mostrar id de esos cohort y listarlos con innerHTML  
	/*document.getElementById("showCohortList").innerHTML = cohortsIdText; */
	}

	//llamar con fetch a los nombres de las alumnas
	const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
	fetch(usersJSON) 
	.then(response => response.json())
	.then(data => {   
		usersFull(data);
	})	
  const usersFull = data => {
		let usersName = [];
  data.forEach(elem => {
		
  //mostrar nombre de almunas
  usersName.push(elem.name);
	//transforme a texto los nombres
  let userNameText = JSON.stringify(usersName);
  
  //mostrar nombres y listarlos con innerHTML  
  document.getElementById("showNames").innerHTML = userNameText; 
  });
  
	}
}





