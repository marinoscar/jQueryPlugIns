/* jQuery Plugins */

$.fn.onlyNumbers = function () {
    this.keydown(function (event) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(event.keyCode, [110, 44, 46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            ((event.keyCode == 65 || event.keyCode == 69 || event.keyCode == 67 || event.keyCode == 86) && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
};

/* Sample usage 
	<input type="text" class="form-control input-lg" custom-numeric="true" id="myNumericText1">
	<input type="text" class="form-control input-lg" custom-numeric="true" id="myNumericText2">
	
	$(function(){
		$('input[custom-numeric="true"]').onlyNumbers(); //apply to all inputs with custom attribute custom-numeric="true"
	});
	
*/
