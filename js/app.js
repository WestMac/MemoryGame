let card = document.querySelectorAll('.card');
let icon = document.querySelectorAll('.back');
let replayIcon = document.querySelector('.reset');
let count = document.querySelector('.count');
let zegar = document.querySelector('.zegar');
let flipped = false; // Czy zostala obrocona karta
let firstCard;  // Pierwsza karta
let secondCard = false; // Druga karta
let fC; //Zapisz pierwsza obrocona karte
let sC; // Zapisz druga obrocona karte
window.onload = assign;

let images = ["husky.png","husky.png","bobr.png","bobr.png","delfin.png","delfin.png","kogut.png","kogut.png",
"kura.png","kura.png","swinia.png","swinia.png","zabka.png","zabka.png","pies.png","pies.png"];
let chujnia = ['a'];

replayIcon.addEventListener('click', replay);

replayIcon.addEventListener('click', function() {console.log("eldo")});

for(let i = 0; i < card.length; i++){
	card[i].addEventListener('click', flip)
};




function assign () {
	let arr = losuj(images);
	for(let i = 0; i < arr.length; i++) {
		icon[i].src = arr[i]
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
		setTimeout(assign,1200);
	}

