//för att få eventlistenern att gälla hela array:et som querySelectorAll ger får man göra en loop
//query selector all ger ju tillbaka en array här definierar vi numberOfDrumButtons som längden på den arrayen dvs det toala antalet element med klassen.drum

//Musklick
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//i alla fall mellan att  är lika med noll fram tills dess att värdet arrayen som genereras av .drum nåt sitt slut (totala andelen bilder) kommer en eventlistener
//lyssna efter ett klick. Dvs bild 1-7
for (var i = 0; i < numberOfDrumButtons; i++) {

  //vi  queryar klassen.drum och targetar arrayen som queryselectorAll genererar med [i] och addar en eventlistener som lyssnar
  //efter metoden click. Om den metoden händer så sätts en anonym function igång.
  //Man hade även kunnat bbeskriva en namngiven funktion
  //efter och sedan skriit namnet på den funktionen efter exvis
  // document.querySelectorAll(".drum").addEventListener("click", handleClick() {
  //function handleClick() {
  //  alert("I got clicked");}
  //
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    //this tar fram identiteten på den knapp som triggade eventlistenern. Det är ett keyword egentligen
    //men blir inte rött av någon anledning
    //this= targetar. drum inner html eftersom this:et är innanför den här eventlistenern
    var buttonInnerHTML = this.innerHTML
    //passar makeSound in i den här funktionen så att knapptryckets switch statement funkar för
    //musklick. Makesound är samma som var buttonInnerHTML
    //funktioner som "passas" in i eventListenerfunktionen
    makeSound(buttonInnerHTML)
    buttonAnimation (buttonInnerHTML)
  })
}

//tangentryck
document.addEventListener("keydown", function(event) {
//funktioner som "passas" in i eventListenerfunktionen
  makeSound(event.key)
buttonAnimation(event.key)

})
//audio är en constructor funktion som vi inte kan se källkoden till men som finns i browsern (?). Se snippet javascriptconstructiorfunktion som du har gjort för hur man gör en själv
//men när vi skriver new Audio så tappar vi in i den constructor funktionen och och gör ett nytt audio object. Vi callar sedan metoden play som är funktion i constructor functionen Audio. När vi gör en ny audioobject (var tom4 = new Audio("sounds/tom-4.mp3") knyter vi play till den   (tom4.play();) varför
//play är en method (methods är funktioner knutna til objekt)
function makeSound(key) {
  switch (key) {
    //första bokstavens innerHTML är "w"
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      //method som spelar ljudet var-namn.play
      tom1.play();

      //break gör så att koden går ur switch statementet
      break;

      //mellan första kolon efter case och break är samma sak som {}. Där skriver man vad som ska hända
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play()
      break

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play()

      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play()


      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;

      //detta är som ett else-statement cvad händer annars. Även om man inte tror att det någonsin kommer triggas är det good practice att ändå skriva
    default:
      console.log(buttonInnerHTML)

  }
}
//funktionen passas två gånger ovan och currentKey blir antingen buttonInnerHTML eller event.key
function buttonAnimation(currentKey) {
var buttonSelect = document.querySelector("." + currentKey)

//här ska man ej skriva punkt av någona nledning
//adderar iaf pressed-klassen till buttonselect som i sin tur finns eventlistenerna ovan och båda targetar
//.drum  (den ena genom att passera en funktion genom den andra)

//först adderar den klassen pressed, dvs gör kanpparna transparenta
buttonSelect.classList.add("pressed")

//efter 100 milisec tas klassen bort igen
setTimeout (function() {
buttonSelect.classList.remove("pressed")
}, 100)

}
