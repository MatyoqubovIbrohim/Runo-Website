window.addEventListener('DOMContentLoaded', () => {
	// added class sticky to header
	window.addEventListener('scroll', function () {
		const header = document.querySelector('header')
		header.classList.toggle('sticky', window.scrollY > 0)
	})

	// DOM Elements
	const scrollBtn = document.querySelector('.scrollTop-btn'),
		menuBtn = document.querySelector('.menu-btn'),
		navigation = document.querySelector('header .navigation'),
		tabs = document.querySelectorAll('header nav ul li a'),
		sectionTabs = document.querySelectorAll('.filter a[data-type]')

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		navigation.classList.toggle('active')
	})

	tabs.forEach(navItem => {
		navItem.addEventListener('click', () => {
			menuBtn.classList.remove('active')
			navigation.classList.remove('active')
			// document.body.style.overflow = 'hidden'
		})
	})

	function changeTab(index = 0, items = tabs) {
		items[index].classList.add('active')
		for (let i = 0; i < items.length; i++) {
			if (index !== i) {
				items[i].classList.remove('active')
			}
		}
	}

	tabs.forEach((tab, idx) => {
		tab.addEventListener('click', () => {
			changeTab(idx, tabs)
		})
	})

	sectionTabs.forEach((tab, idx) => {
		tab.addEventListener('click', () => {
			changeTab(idx, sectionTabs)
		})
	})

	const contentCards = document.querySelectorAll('.about-content .card')
	const cardTitles = document.querySelectorAll(
		'.about-content .card span.span-title'
	)

	sectionTabs.forEach(item => {
		item.addEventListener('click', () => {
			const selectedCategory = item.textContent.toUpperCase()
			contentCards.forEach((card, idx) => {
				const cardCategory = cardTitles[idx].textContent.toUpperCase()
				if (selectedCategory === 'ALL' || selectedCategory === cardCategory) {
					card.style.display = 'block'
				} else {
					card.style.display = 'none'
				}
			})
		})
	})

	// const dropdownButton = document.querySelector('.dropdown-button')
	// const dropdownContent = document.querySelector('.dropdown-content')

	// dropdownButton.addEventListener('click', () => {
	// 	dropdownContent.classList.toggle('show')
	// })

	// window.addEventListener('click', event => {
	// 	if (!event.target.matches('.dropdown-button')) {
	// 		dropdownContent.classList.remove('show')
	// 	}
	// })

	// const responsiveTabs = document.querySelectorAll('.responsive-filter a')

	// responsiveTabs.forEach(select => {
	// 	select.addEventListener('click', event => {
	// 		event.preventDefault()
	// 		const selectedCategory = select.innerHTML.toUpperCase()
	// 		contentCards.forEach((card, idx) => {
	// 			const cardCategory = cardTitles[idx].innerHTML.toUpperCase()
	// 			if (selectedCategory === 'ALL' || selectedCategory === cardCategory) {
	// 				card.style.display = 'block'
	// 				responsiveTabs.textContent = selectedCategory
	// 				dropdownButton.querySelector('span').textContent = selectedCategory
	// 			} else {
	// 				card.style.display = 'none'
	// 			}
	// 		})
	// 	})
	// })

	const responsiveTabs = document.querySelectorAll('.responsive-filter select')

	responsiveTabs.forEach(select => {
		select.addEventListener('change', () => {
			const selectedCategory = select.value.toUpperCase()
			contentCards.forEach((card, idx) => {
				const cardCategory = cardTitles[idx].textContent.toUpperCase()
				if (selectedCategory === 'ALL' || selectedCategory === cardCategory) {
					card.style.display = 'block'
				} else {
					card.style.display = 'none'
				}
			})
		})
	})

	window.addEventListener('scroll', () => {
		scrollBtn.classList.toggle('active', window.scrollY > 500)
	})
	scrollBtn.addEventListener('click', () => {
		document.documentElement.scrollTop = 0
		changeTab()
	})

	changeTab()
})
