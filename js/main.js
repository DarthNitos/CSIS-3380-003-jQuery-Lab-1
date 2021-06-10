$(document).ready(() => {
    //  Target buttons
	const $cartButton = $('#cart');
    const $accountButton = $('#account');
    const $helpButton = $('#help');

    //  Target all "ul" elements with "dropdown-menu" class
    const $dropdownMenu = $('.dropdown-menu');

    //  Target
    const $cartMenu = $('#cartMenu');
    const $accountMenu = $('#accountMenu');
    const $helpMenu = $('#helpMenu');

    //  Put onclick event handler on these buttons to make
    //  corresponding drop-down menu appear
	$cartButton.on("click", () => {
		$cartMenu.toggle();
	});

    $accountButton.on("click", () => {
		$accountMenu.toggle();
	});

    $helpButton.on("click", () => {
		$helpMenu.toggle();
	});

    //  Put onmouseleave event handler to make drop-down menu disappear 
    //  when mouse leaves the "ul" element
    $dropdownMenu.on("mouseleave", () => {
    	$dropdownMenu.hide();
    });
})