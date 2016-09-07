var form = form || {};
var confirmMessage = '';

form = {
    onSubmitHandler:function()
    {
    	$('#confirm-message').html(confirmMessage);

    	$('.container-form').animate({ 
			left: "300px",
		}, 200 );

		$('.container-confirm').animate({ 
			left: "0px",
		}, 200 );
    },
    
    initForm:function()
    {
		$('#submit-form').submit(function() {

    		var name = $('#tf-name').val();
            var email = $('#tf-email').val();
            var disclaimer = ($('#cb-termsAndConditions').is(':checked')) ? true : false;

			$.ajax({
				type: "POST",
				url: "jquerySubmitForm.php",
				data: { Name: name, Email: email, Disclaimer: disclaimer },
				success: function (response, status, xhr) {
					if(response == ""){
						confirmMessage = '<p><strong>SUCCESS</strong></p><p>Your registration has been recieved.</p><p>Thank you very much.</p>';
					}else{
						confirmMessage = '<p><strong>ERROR</strong></p><p>' + response + '</p>';
					}

					form.onSubmitHandler();
				},
				error: function (xhr, ajaxOptions, thrownError) {
					confirmMessage = '<p><strong>ERROR</strong></p><p>' + xhr.status + ' ' + xhr.statusText + '</p>';

					form.onSubmitHandler();
				}
            });

			return false;
        });
    	
    }
};