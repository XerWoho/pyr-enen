const BG = document.querySelector(".bg")

for(let i = 0; i < 30; i++) {
	const img = document.createElement("img")
	img.src = `assets/tree_${Math.floor(Math.random() * 3)}.svg`

	let margin_top = Math.floor(Math.random() * document.body.clientHeight / 1.3)
	if(margin_top > 3000) {
		margin_top = 3000
	}
	img.style.marginTop = `${margin_top}px`
	img.style.marginLeft = `${Math.floor(Math.random() * document.body.clientWidth / 1)}px`

	let min = 3
	img.style.width = `${min + Math.floor(Math.random() * 4)}rem`
	img.style.height = `${min + Math.floor(Math.random() * 4)}rem`


	BG.append(img)
}
