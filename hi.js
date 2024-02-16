<script type="text/javascript">
    function displayTime() {
      document.getElementById('digit-clock').innerHTML = "Current time:" + new Date();
    }
    setInterval(displayTime,500);
    // code for the analog clock
    var canvas = document.getElementById("analog-clock");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90
    setInterval(drawClock, 1000);

    function drawClock() {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
    }
    function getEcho() {
        var input = document.getElementById("data").value;
        if (input.length == 0) {
            return;
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && 
                this.status == 200){
                console.log("Received data="+xhttp.responseText);
                document.getElementById("response").innerText= 
                    "Response from server:" + xhttp.responseText;  
                    //code to show the data
            }
        }
        xhttp.open("GET", "echo.php?data="+input, true); 
        //code to create an Ajax request
        xhttp.send(); //code to send the request
        document.getElementById("data").value="";
    }

    function jQueryAjax() {
        var input = $("#data").val();
        if (input.length == 0) {
            return;
        }
        $.get("echo.php?data="+input,
               function(result) {
                 $("#response" ).html( "Response from server:" + result );
               }
        );
        $("#data").val("");
    }
    function jQueryAjaxPost() {
        var input = $("#data").val();
        if (input.length == 0) {
            return;
        }
        $.post("echo.php",
               {data: input},
               function( result ) {
                 $("#response" ).html( "Response from server:" + result );
               }
        );
        $("#data").val("");
    }
    $.get("https://v2.jokeapi.dev/joke/Programming?type=single",
        function (result) {
            console.log("From jokeAPI: " + JSON.stringify(result));
            $("#response" ).html( "A programming joke of the day: " + result.joke);
        }
    ); //this will be executed automatically
    //https://api.agify.io/?name=phung
    async function guessAge(name){
        const response = await fetch("https://api.agify.io/?name="+name);
        const result = await response.json();
        $("#response" ).html("Hi " + name + ", your age should be " + result.age);
    }
    /*
    (async function jokeAPIfetch(){
        const jokeAPI_res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
        const result = await jokeAPI_res.json();
        $("#response" ).html( "A programming joke of the day: " + result.joke);
    })()*/ 
    //jokeAPIfetch();
    /*fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
        .then((response) => {
            return response.json();
    }).then(result =>{
        $("#response" ).html( "A programming joke of the day: " + result.joke);

    })*/
</script>
