function app() {
	const manu = document.querySelector('.manu')
	const buttons = manu.getElementsByTagName('button')
	const book = document.querySelector('.books')
	const cards = book.getElementsByClassName('book__item')

	function filter(category, items) {
		let count = 0
		for (let i = 0; i < items.length; i++) {
			const isItemFilter = !items[i].classList.contains(category)
			const isItemAll = category.toLowerCase() === 'all'
			if (isItemFilter && !isItemAll) {
				items[i].classList.add('anime')
			} else {
				count += 1
				items[i].classList.remove('hide')
				items[i].classList.remove('anime')
				const isElemNotFound = book.querySelector('.not__found')
				if (isElemNotFound) {
					book.removeChild(isElemNotFound)
				}
			}
			items[i].ontransitionend = function () {
				if (items[i].classList.contains('anime')) {
					items[i].classList.add('hide')
				}
			}
		}
		if (count == 0) {
			const newElem = document.createElement('h1')
			book.prepend(newElem)
			newElem.setAttribute('class', 'not__found')
			newElem.innerHTML = 'Книг по выбранной категории нет!'
		}
	}

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', () => {
			buttons[i].classList.add('btn__anime')
			filter(buttons[i].dataset.filter, cards)
			for (let k = 0; k < buttons.length; k++)  {
				if (k==i) {
					continue
				}
				buttons[k].classList.remove('btn__anime')
			}
		})
	}
}

app()