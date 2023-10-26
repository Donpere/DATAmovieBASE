
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
	let movieName = movieNameRef.value;
	let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
// TRAITER TOUS LES CAS POSSIBLES :
// Si le champ reste vide
	if(movieName.length <= 0)
	{
		result.innerHTML = `<h3 class="msg">Merci d'entrer un nom de film</h3>`;
	}
	else 
	{
		// "resp" et "data" etant utilise dans then, cela revient a declarer deux nouvelle variable resp
		// on pourrait les nommer comme on veut
		// puisqu'elle sont "crees"dans la fonction get-movie, 
		// elles sont utilisables uniquement dans get-movie et disparaissent apres le dernier }
		fetch(url).then((resp) => resp.json()).then((data) =>
		{
			// Console.log pour verifier le contenu brut du retour de l'api
			console.log(data);
			let starRating = data.imdbRating;
			console.log(starRating);
			//Si le film existe
			if(data.Response == "True")
			{
				result.innerHTML = `
					<div class="info">
						<div>
							<p class="title-result">${data.Title}</p>
							<div class="rating">
								<img src="assets/star-icon.svg" alt="star">
								<h4>${data.imdbRating}</h4>
							</div>
							<div class="details">
								<span>${data.Rated}</span>
								<span>${data.Year}</span>
								<span>${data.Runtime}</span>
							</div>
							<div class="genre">
								<div>${data.Genre.split(",").join("<div></div>")}</div>
							</div>
							<div class="content">
								<h3>Plot:</h3>
								<p class="plot-just">${data.Plot}</p>
								<h3>Cast:</h3>
								<p>${data.Actors}</p>
							</div>
						</div>
						<img src=${data.Poster} class="poster">
					</div>
				`
			}
			//Si pas de film
			else
			{
				result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
			}
		}).catch(() => 
		{
			result.innerHTML = `<h3 class="msg">Il y a eu une erreur</h3>`			
		})
	}
}

// Cette ligne ajoute un écouteur d'événements au bouton avec l'ID "search-btn". 
// Lorsque ce bouton est cliqué, la fonction getMovie sera appelée.
searchBtn.addEventListener("click", getMovie);

// permet de lancer la recherche en appuyant sur la touche entree
movieNameRef.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
	  // Appuyé sur la touche "Entrée", lancer la fonction getMovie
	  getMovie();
	}
  });
  

// Cette ligne ajoute un écouteur d'événements à la fenêtre (la page web). 
// Lorsque la page est complètement chargée (événement "load"), la fonction getMovie sera appelée.
window.addEventListener("load", getMovie);