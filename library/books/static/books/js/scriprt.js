function app() {
	const manu = document.querySelector('.manu')
	const buttons = manu.getElementsByTagName('button')
	const book = document.querySelector('.books')
	const cards = book.getElementsByClassName('book__item')



	function filter(category, items) {
		for (let i = 0; i < items.length; i++) {
			const isItemFilter = !items[i].classList.contains(category)
			const isItemAll = category.toLowerCase() === 'all'
			if (isItemFilter && !isItemAll) {
				items[i].classList.add('anime')
			} else {
				items[i].classList.remove('hide')
				items[i].classList.remove('anime')
			}
			items[i].ontransitionend = function () {
				if (items[i].classList.contains('anime')) {
					items[i].classList.add('hide')
					console.log(123)
				}
			}
		}
	}

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', () => {
			filter(buttons[i].dataset.filter, cards)
		})
	}
}

app()