let card = document.querySelectorAll('.card');
let icon = document.querySelectorAll('.back');
let replayIcon = document.querySelector('.reset');
let count = document.querySelector('.count');
let zegar = document.querySelector('.zegar');
let poziom = document.querySelector('#level')
let box = document.querySelector('.container')
let divCard = document.createElement("div");
let flipped = false; // Czy zostala obrocona karta
let firstCard;  // Pierwsza karta
let secondCard = false; // Druga karta
let fC; //Zapisz pierwsza obrocona karte
let sC; // Zapisz druga obrocona karte



window.onload = assign;


let images = ["assets/husky.png","assets/husky.png","assets/bobr.png","assets/bobr.png","assets/delfin.png","assets/delfin.png","assets/kogut.png","assets/kogut.png",
"assets/kura.png","assets/kura.png","assets/swinia.png","assets/swinia.png","assets/zabka.png","assets/zabka.png","assets/pies.png","assets/pies.png"];
let imagesH = ["https://i.pinimg.com/originals/0a/1f/82/0a1f820e29719c7b67e9d5aa44241155.png","https://i.pinimg.com/originals/0a/1f/82/0a1f820e29719c7b67e9d5aa44241155.png","https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png","https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWTDWfECNbVwhDxx3ptm2T9CekU2UCYElbw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWTDWfECNbVwhDxx3ptm2T9CekU2UCYElbw&usqp=CAU","https://lh3.googleusercontent.com/proxy/E_FAtZc8RUZnyc1a7rRVuVIefE4qA03URjv_Fp_onbpSApjp_Jc5S13Wq8gvZ5qImpgM5bRqDfcmPEATJi9Z5TnUpTnLBb1PrfPuMkxL44h5XRejVX_A2Gn3y-keVWNVpvYb_xBPLX5_GmBw0g","https://lh3.googleusercontent.com/proxy/E_FAtZc8RUZnyc1a7rRVuVIefE4qA03URjv_Fp_onbpSApjp_Jc5S13Wq8gvZ5qImpgM5bRqDfcmPEATJi9Z5TnUpTnLBb1PrfPuMkxL44h5XRejVX_A2Gn3y-keVWNVpvYb_xBPLX5_GmBw0g"]
let hard = images.concat(imagesH);

poziom.addEventListener('change', assign);

replayIcon.addEventListener('click', replay);


for(let i = 0; i < card.length; i++){
	card[i].addEventListener('click', flip)
};




function assign () {

for(let i = 0; i < card.length; i ++) {
	if(card[i].classList.contains('flipCard')){
		card[i].classList.remove('flipCard')
	}}
if(poziom.value === "hard") {
	setTimeout(hardT,1300);
}else if (poziom.value === "normal") {
	setTimeout(easyE,1300);
	}

	for(let i = 0; i < card.length; i++){
	card[i].addEventListener('click', flip)
}
}
	


function flip () {
	this.classList.toggle('flipCard');
	count.innerHTML++;
	

	if(!flipped) {
		flipped = true;
		firstCard = true;
		fC = this
		return fC
	} else if (flipped && firstCard && !secondCard) {
		secondCard = true;
		sC = this;
		return sC
	} else if (secondCard && firstCard) {
		firstCard = true;
		secondCard = false;
		flipped = true;
		if(fC.firstChild.parentNode.lastElementChild.src === sC.firstChild.parentNode.lastElementChild.src) 
			// ^ sprawdz czy src pierwszej i drugiej karty jest takie same, jesli tak 
			//to trzecia kliknieta karta zostaje zapisana i zwrocona a para zostaje odkryta
			{	
				fC.removeEventListener('click', flip);
				sC.removeEventListener('click', flip);

				fC = this
				return fC 
			} else{
				fC.classList.toggle('flipCard');
				sC.classList.toggle('flipCard');
				fC = this
				return fC
			}
		} 
	}



function losuj (array) {
		for(let i= array.length-1; i >0; i--){
			const number = Math.floor(Math.random() * i);  
			[array[i], array[number]] = [array[number], array[i]];
			
		}
		return array
	}


function replay () {
		flipped = false;
		firstCard = false;
		secondCard = false;
		fC = undefined;
		sC = undefined;
		count.innerHTML = 0;


		for(let i = 0; i < card.length; i ++) {
			if(card[i].classList.contains('flipCard')) {
				card[i].classList.remove('flipCard')
			}
			else {
				console.log(card[i])
			}
		}
		for(let i = 0; i < card.length; i++){
			card[i].addEventListener('click', flip)
		}
		setTimeout(assign);
	}




function hardT () {

		flipped = false;
		firstCard = false;
		secondCard = false;
		fC = undefined;
		sC = undefined;
		count.innerHTML = 0;
		box.style.gridTemplateColumns = "repeat(6,1fr)"
		let arr = losuj(hard);

		for(let i = 16; i < card.length; i++){
			card[i].style.display = "block"
		}
		for(let i = 0; i < arr.length; i++) {
		icon[i].src = arr[i]
		}

}

function easyE() {
	flipped = false;
		firstCard = false;
		secondCard = false;
		fC = undefined;
		sC = undefined;
		count.innerHTML = 0;
//test
		 		
		box.style.gridTemplateColumns = "repeat(4,1fr)"
		for(let i = 16; i < card.length; i++){
			card[i].style.display = "none"
		}
		let arr = losuj(images);
		for(let i = 0; i < arr.length; i++) {
		icon[i].src = arr[i]
		}
}
// function poziomT() {
// 	if(poziom.value === "hard") {
// 		box.style.gridTemplateColumns = "repeat(6,1fr)"
// 		let arr = losuj(hard);

// 		for(let i = 16; i < card.length; i++){
// 			card[i].style.display = "block"
// 		}

// 		for(let i = 0; i < arr.length; i++) {
// 		icon[i].src = arr[i]
// 		}
// 		}
// 		 else if (poziom.value === "normal") {
// 		box.style.gridTemplateColumns = "repeat(4,1fr)"
// 		for(let i = 16; i < card.length; i++){
// 			card[i].style.display = "none"
// 		}
// 	}
// }