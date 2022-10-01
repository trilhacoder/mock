let repositorios = [
	{
		name: "repositório 1"
	},
    {
		name: "repositório 2"
	},
	{
		name: "repositório 3"
	}
]

let tagUl = document.querySelector("ul")
repositorios.forEach(function(repositorio) {	
	let tagLi = document.createElement("li")
	tagLi.textContent = repositorio.name
	tagUl.appendChild(tagLi)
})
