// Play and loop music

// Get the audio element
var byakkoya = document.querySelector('audio');

// create function to play and loop audio
function song(a){
    //start playing at 0
    a.currentTime = 0;
    a.play();

    //when we hit 64 seconds... 
    setTimeout(function(){
        // skip back to 24.5 seconds and keep playing...
        a.currentTime = 24.55;

        // then loop back when we hit 64 again, or every 59.5 seconds.
        setInterval(function(){
            a.currentTime = 24.55;
        },39450);
    },64000);
}

// Wait till the music loads (or get a nasty error!)
byakkoya.addEventListener("canplaythrough", function () {
  setTimeout(function(){ 
    // add a class to the body tag so we know we're playable...
    $("body").addClass("playable");
    $("#play-me").html("Play me.").click(function(){
      song(byakkoya);
      $("body").addClass("playing");
    });
  },3000); //a wee bit of a delay to make sure peeps see the PSA
}, false);
