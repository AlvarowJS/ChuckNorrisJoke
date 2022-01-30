$.get("http://api.icndb.com/jokes/random", (response) => {
var textoChiste = response.value.joke;
 $('h1').text(textoChiste);
})
$.icndb.getRandomJoke((response) => { var textoChiste = response.joke; });
$.icndb.getRandomJokes({ 
    number: 1, 
      success: (response) => {
     response.forEach(element => { $("ul").append('<li>' + element.joke + '</li>'); });
    }});