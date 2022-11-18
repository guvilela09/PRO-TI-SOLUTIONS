

$( document ).ready(function() {
    
    $( "#sendmail" ).submit(function( event ) {
        
        console.log("teste123");
        $.ajax({
            type: "GET",
            url: url,
            data: {email: $("#mail").val(), nome: $("#nome").val(), telefone: $("#telefone").val(), company: $("#company").val(), msg: $("#msg").val()}
           })
        .then(function successCallback(response) {
        console.log(response);
            return 0;
        });  
    });
});
