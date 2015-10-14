var cards = $('.flipable-card');

//$("#card").flip();
//$("#card-1").flip();


for (i = 0; i<cards.length; i++) {

	card = cards[i];

	$(card).flip();




}

var products_name=[];
var product_images=[];
var product_description=[];

$('.bxSlider').bxSlider({
  auto: true
});

bxControls = $('.bx-controls');
$(bxControls[0]).hide();

products = $(".products");
modalLabel = $("#modal-label");
modalImage = $("#modal-image");
modalDescription = $("#modal-text");

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