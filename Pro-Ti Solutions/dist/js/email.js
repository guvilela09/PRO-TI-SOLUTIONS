

$( document ).ready(function() {
    
    $( "#sendmail" ).submit(function( event ) {
        
        var form  = $("#sendmail").serializeArray();
        event.preventDefault()
        
        console.log("teste123");
        $.ajax({
            type: "GET",
            url: "https://send-email-php-hkaw.vercel.app/index.php",
            data: {email: $("#mail").val(), nome: $("#nome").val(), telefone: $("#telefone").val(), company: $("#company").val(), msg: $("#msg").val()}
           })
        .then(function successCallback(response) {
        console.log(response);
            return 0;
        });  
    });
});
