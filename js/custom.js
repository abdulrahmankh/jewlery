var cards = $('.card');



for (i = 0; i<cards.length; i++) {

	card = cards[i];

	cardInfo = card.children[0];
	cardInfo.hidden = true;

	card.addEventListener("click", function() {

		if (this.show == false) {

			this.show = true;
			
		}
		else{

			this.show = false;
		}

		var info = this.children[0];
		info.hidden = this.show;
	});



}