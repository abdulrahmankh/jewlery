// Copyright (c) 2015, 2016 All Right Reserved
//
// <author>Abdul Raham Alkhatib</author>
// <email>mrabdo16th@hotmail.com</email>
// <date>2015-10-15</date>
// <summary>This JS file controls the website "Miss Jewlery Passion" 
// adding flip functionality and calling a modal on each product</summary>


// giving all card a flip property using (flip.js)
var cards = $('.flipable-card');

for (i = 0; i<cards.length; i++) {
	card = cards[i];
	$(card).flip();
}

//------------------------------------//

// createing the slid
$('.bxSlider').bxSlider({
  auto: true
});
	// fixing a small bug where the number of teh image does not look good
bxControls = $('.bx-controls');
$(bxControls[0]).hide();

//--------------------------------//


// taking care of the modal data when a product is clicked form more info
products = $(".products");
modalLabel = $("#modal-label");
modalImage = $("#modal-image");
modalDescription = $("#modal-description");

for (i = 0; i<products.length; i++) {

	product = $(products[i]);
	
	product.click(function() {

		label = $(this).data("label");
		description = $(this).data("description");
		image = $(this).data("image");

		modalLabel.html(label);
		modalDescription.html(description);
		modalImage.attr("src", image);

	});
}

//----------------------//