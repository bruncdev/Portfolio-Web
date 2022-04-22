/*============ FILTERS TABS ============*/
const buttonProjects = document.getElementById('button__projects');
const buttonSkills = document.getElementById('button__skills');

const divProjects = document.getElementById('div-projects');
const divSkills = document.getElementById('div-skills');

// Set background color in button projects
buttonProjects.addEventListener('click', () => {
  buttonProjects.classList.add("button__active", "text__active")
  buttonSkills.classList.remove("button__active", "text__active")
  divSkills.classList.remove("filters__active")
  divProjects.classList.add("filters__active")
});

// Set background color in button skills

buttonSkills.addEventListener('click', () => {
  buttonProjects.classList.remove("button__active", "text__active")
  buttonSkills.classList.add("button__active", "text__active")
  divProjects.classList.remove("filters__active")
  divSkills.classList.add("filters__active")
});

/*============ DARK LIGHT THEME ============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*============ SCROLL REVEAL ANIMATION ============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})



// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'ri-sun-line'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('seletec-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// // We validate if the user previously chose a topic 
// if (selectedTheme) {
//   // If the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//   // Add or remove the dark / icon theme
//   document.body.classList.toggle(darkTheme)
//   themeButton.classList.toggle(iconTheme)
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem('selected-theme', getCurrentTheme())
//   localStorage.setItem('selected-icon', getCurrentIcon())
// })







// const tabs = document.querySelectorAll('[data-target]'),
//   tabContents = document.querySelectorAll('[data-content]');
//   console.log(tabs)

// tabs.forEach( tab => {
//   console.log(tab)
//   tab.addEventListener('click', () => {
//     console.log(clicou)
//     const target = document.querySelector(tab.dataset.target);

//     tabContents.forEach( tc => {
//       /*tc = tabcontent*/
//       tc.classList.remove('filters__active');
//     });
//     target.classList.add('filters__active');
//   });
// });
