/*

include for validation
http://docs.jquery.com/Plugins/Validation
*/
// code runs when form is submitted
$(document).ready(function () {

    // jquery.validate
    jQuery.extend(jQuery.validator.messages, {
        required: "*",
        remote: "Please fix this field.",
        email: "*",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "*",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "*",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        minlength: jQuery.validator.format("Please enter at least {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });

    var rules = { formFieldId1: "required", formFieldId1: "required" };
    
    // validate and submit
    $("#iphone-campaign-form").validate({
        rules: rules,
        invalidHandler: function (e, validator) {
            var errors = validator.numberOfInvalids();

        },
        submitHandler: function () {
            var source = $('#source').val();
            var shopname = $('#shop').val();
            
            // submit form
            $.ajax({
                type: "POST",
                url: "serice/url/file.php",
                data: { Source: source, ShopName: shopname },
                success: function (data) {
                    alert("Data submitted")
                },
                error: function (errMsg) {
                    alert('Error')
                }
            });
            
            return false;
        }
    });
});
