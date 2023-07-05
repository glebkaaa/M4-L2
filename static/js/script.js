const theme = document.querySelector('.list__item-click')

const switchTheme = () => {
	if (theme.src.match('../static/img/sun-icon.svg')) {
		theme.src = '../static/img/moon-icon.svg'
		document.body.removeAttribute('dark')
		localStorage.setItem('theme', 'light')
	} else {
		theme.src = '../static/img/sun-icon.svg'
		document.body.setAttribute('dark', '')
		localStorage.setItem('theme', 'dark')
	}
}

theme.addEventListener('click', switchTheme)

document.addEventListener('DOMContentLoaded', function () {
	localStorage.getItem('theme') === 'dark' && switchTheme()
})
