

$( document ).ready(function() {

    $( "#sendmail" ).submit(function( event ) {

        $.ajax({
            type: "GET",
            url: url,
            data: {email: $("#mail").val(), nome: $("#nome").val(), telefone: $("#telefone").val(), company: $("#company").val(), msg: $("#msg").val()},
            success: success,
            dataType: "html"
          });
    });

    console.log
});