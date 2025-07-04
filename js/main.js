(function() {
  let navOpen = false;

  // shorthand lol
  function createElement(element) {
    return document.createElement(element)
  }

  // nav start
  const nav = document.getElementById('navigation')
  const tabs = [
    {link: 'index.html', displayText: 'Home'},
    {link: 'rsvp.html', displayText: 'RSVP'},
    {link: 'questions.html', displayText: 'Questions'},
    {link: 'registry.html', displayText: 'Registry'},
  ]

  const ul = createElement('ul')
  const burger = createElement('button');

  ul.classList.add('hideOnMobile');
  tabs.forEach((tab) => {
    const li = createElement('li')
    const a = createElement('a')

    a.setAttribute('href', tab.link)
    a.textContent = tab.displayText

    // Set active styling on the currently selected tab
    const currentPath = window.location.pathname
    if ((tab.link === '/' && (currentPath === '/' || currentPath === '/index.html')) ||
        (tab.link !== '/' && currentPath.endsWith(tab.link))) {
      a.classList.add('active');
    }

    // append ul < li < a
    li.appendChild(a)
    ul.appendChild(li)
  })

  // Create hamburger menu button
  burger.textContent = '☰';
  burger.onclick = e => {
    e.preventDefault();
    toggleNav();
  }

  const toggleNav = () => {
    if (navOpen) {
      burger.textContent = '☰';
    } else {
      burger.textContent = '✕';
    }
    nav.classList.toggle('showOnMobile');
    navOpen = !navOpen;
  }

  nav.appendChild(burger);
  nav.appendChild(ul)

  // footer
  const footer = document.querySelector('footer')
  
  const h6 = createElement('h6')
  h6.textContent = "Thank you for celebrating with us!"

  const p = createElement('p')
  p.textContent = "Love, Levi and Emma"
  p.classList.add("small-text")

  footer.classList.add("center")
  footer.appendChild(h6)
  footer.appendChild(p)
})();