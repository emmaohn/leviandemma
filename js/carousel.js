const slider = document.getElementById("slider")

// shorthand lol
function createElement(element) {
  return document.createElement(element)
}

let slideTrack = createElement("div")
slideTrack.className = "slide-track"
slider.appendChild(slideTrack)

for (i = 1; i < 11; i++) {
	let div = createElement("div")
	div.className="slide"

	let img = createElement("img")
	img.setAttribute('src', `images/img${i}.jpeg`)

	div.appendChild(img)
	slideTrack.appendChild(div)
	console.log(img)
}