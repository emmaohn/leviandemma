
// shorthand lol
function createElement(element) {
  return document.createElement(element)
}

// nav start
const nav = document.getElementById('navigation')
const tabs = [
  {link: '/', displayText: 'Home'},
  {link: '/rsvp.html', displayText: 'RSVP'},
  {link: '/questions.html', displayText: 'Questions'},
  {link: '/registry.html', displayText: 'Registry'},
]

const ul = createElement('ul')
tabs.forEach((tab) => {
  // create list item and link
  const li = createElement('li')
  const a = createElement('a')
  // set link's attributes
  a.setAttribute('href', tab.link)
  a.textContent = tab.displayText
  // append ul < li < a
  li.appendChild(a)
  ul.appendChild(li)
})

nav.appendChild(ul)
// nav end

