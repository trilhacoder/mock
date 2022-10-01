fetch("https://api.github.com/users/trilhafront/repos")
	.then(function(response) {
		return response.json()
	})
	.then(function(repositorios) {
    	console.log(repositorios)
		let tagUl = document.querySelector("ul")
        repositorios.forEach(function(repositorio) {	
            let tagLi = document.createElement("li")
            tagLi.textContent = repositorio.name
            tagUl.appendChild(tagLi)
        })
	})
