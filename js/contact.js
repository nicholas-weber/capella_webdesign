$(function() {
    $("form[name='contact']").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            reason: "required",
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please enter a message before submitting"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});