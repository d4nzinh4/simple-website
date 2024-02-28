'use strict'

const themeSwitcher = document.querySelector('.btn')
let currentTheme = 0
const themes = ['pink-theme', 'dark-theme', 'light-theme', 'matrix-theme']

themeSwitcher.addEventListener('click', function () {
    document.body.classList.remove(themes[currentTheme])
    currentTheme = (currentTheme + 1)%
        themes.length

    document.body.classList.add(themes[currentTheme])
    console.log("Current Theme selected", currentTheme)
    if (currentTheme === 0) {
        this.textContent = "Dark Theme"
    } else if (currentTheme === 1) {
        this.textContent = "Light Theme"
    } else if (currentTheme === 2){
        this.textContent = 'Matrix Theme'
    }else {
        this.textContent = 'Mean Girls Theme'
    }
})