function ajaxFormSubmit(url, form, callback) {
    var formData = new FormData($('#' + form)[0]);
    $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        datatype: 'json',
        beforeSend: function() {
            loading(true);
            // do some loading options
        },
        success: function(data) {
            callback(data);
        },

        complete: function() {
            loading(false);
            // success alerts
        },

        error: function(xhr, status, error) {
            if (xhr.responseText == 'Login Required') {
                loginredirect();
            }
        },
        cache: false,
        contentType: false,
        processData: false

    });

}
