// codepen: https://codepen.io/studiojvla/pen/qVbQqW

const slider = document.getElementById("slider")
const imgCount = 18;

// shorthand lol
function createElement(element) {
  return document.createElement(element)
}

let slideTrack = createElement("div")
slideTrack.className = "slide-track"
slider.appendChild(slideTrack)

for (i = 0; i < imgCount * 2; i++) {
	let div = createElement("div")
	div.className="slide"

	let img = createElement("img")
	img.setAttribute('src', `images/img${i % imgCount}.webp`)

	div.appendChild(img)
	slideTrack.appendChild(div)
}