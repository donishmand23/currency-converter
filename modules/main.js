async function currency () {
	let api = await fetch("https://openexchangerates.org/api/latest.json?app_id=a65643e999ff4632ac88a191cc58fe17")
	let raw = await api.json()
	let data = raw.rates
	
	let getApi = {	
		UZS: data.UZS,
		USD: data.USD,
		RUB: data.RUB,
		EUR: data.EUR,
		KRW: data.KRW,
		JPY: data.JPY,
		AED: data.AED
	}
	
	let mas = [
		{text: "UZS - USD", value: 0},
		{text: "UZS - RUB", value: 1},
		{text: "UZS - KRW", value: 2},
		{text: "UZS - JPY", value: 3},
		{text: "UZS - AED", value: 4},
		{text: "UZS - EUR", value: 5}
	]

	let select = document.querySelector('select')
	for ( let c of mas ) {
		let option = document.createElement('option')
		option.innerHTML = c.text
		option.setAttribute("value", c.value)
		select.appendChild(option)
	}

	select.onchange = () => {
		firstInput.value = null
		thirdInput.value = null
		secondInput.value = null
		fourthInput.value = null

		let index = select.selectedIndex
		let option = select.options
		let firstPart = option[index].text.split("-")[0]
		let secondPart = option[index].text.split("- ")[1]
		st.textContent = firstPart
		th.textContent = firstPart
		nd.textContent = secondPart
		rd.textContent = secondPart
		
		let firstCurrency = document.getElementsByClassName('firstCurrency')
		let secondCurrency = document.getElementsByClassName('secondCurrency')
		if ( secondPart == 'RUB' ) {
			secondCurrency[0].innerHTML = "Rubl"
			secondCurrency[1].innerHTML = "Rubl"
		}
		if ( secondPart == 'KRW' ) {
			secondCurrency[0].innerHTML = "Vo'n"
			secondCurrency[1].innerHTML = "Vo'n"
		}
		if ( secondPart == 'JPY' ) {
			secondCurrency[0].innerHTML = "Yen"
			secondCurrency[1].innerHTML = "Yen"
		}
		if ( secondPart == 'AED' ) {
			secondCurrency[0].innerHTML = "Dirham"
			secondCurrency[1].innerHTML = "Dirham"
		}
		if ( secondPart == 'USD' ) {
			secondCurrency[0].innerHTML = "Dollar"
			secondCurrency[1].innerHTML = "Dollar"
		}
		if ( secondPart == 'EUR' ) {
			secondCurrency[0].innerHTML = "Yevro"
			secondCurrency[1].innerHTML = "Yevro"
		}
	}

	firstInput.addEventListener("keydown", (event) => {
		if ( event.keyCode == 13 ) {
			if ( select.value == "0") {
				secondInput.value = (firstInput.value / getApi.UZS).toFixed(2)
			}
			if( select.value == 1 ) {
				secondInput.value = (getApi.RUB * (firstInput.value / getApi.UZS)).toFixed(2)
			}
			if( select.value == 2 ) {
				secondInput.value = (getApi.KRW * (firstInput.value / getApi.UZS)).toFixed(2)
			}
			if( select.value == 3 ) {
				secondInput.value = (getApi.JPY * (firstInput.value / getApi.UZS)).toFixed(2)
			}
			if( select.value == 4 ) {
				secondInput.value = (getApi.AED * (firstInput.value / getApi.UZS)).toFixed(2)
			}
			if( select.value == 5 ) {
				secondInput.value = (getApi.EUR * (firstInput.value / getApi.UZS)).toFixed(2)
			}
		}
	})

	thirdInput.addEventListener("keydown", (event) => {
		if ( event.keyCode == 13 ) {
			if( select.value == 0 ) {
				fourthInput.value = (thirdInput.value * getApi.UZS).toFixed(2)
			}
			if( select.value == 1 ) {
				fourthInput.value = (getApi.UZS / (getApi.RUB / thirdInput.value)).toFixed(2)
			}
			if( select.value == 2 ) {
				fourthInput.value = (getApi.UZS / (getApi.KRW / thirdInput.value)).toFixed(2)
			}
			if( select.value == 3 ) {
				fourthInput.value = (getApi.UZS / (getApi.JPY / thirdInput.value)).toFixed(2)
			}
			if( select.value == 4 ) {
				fourthInput.value = (getApi.UZS / (getApi.AED / thirdInput.value)).toFixed(2)
			}
			if( select.value == 5 ) {
				fourthInput.value = (getApi.UZS / (getApi.EUR / thirdInput.value)).toFixed(2)
			}
		}
	})
	console.log(getApi.USD)
}

currency()