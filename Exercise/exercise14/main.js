
// var overlay = jQuery('<div id="overlay"> </div>');
// overlay.appendTo(document.body)

 $(document).ready(function() {

    $("#slider > div:gt(0)").hide();

    setInterval(function() {
      $('#slider > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slider');
    }, 3000);

    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });


});



// /* user defined variables */
// var timeOnSlide = 3,    
//     // the time each image will remain static on the screen, measured in seconds
// timeBetweenSlides = 1,  
//     // the time taken to transition between images, measured in seconds

// // test if the browser supports animation, and if it needs a vendor prefix to do so
//     animationstring = 'animation',
//     animation = false,
//     keyframeprefix = '',
//     domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
//     // array of possible vendor prefixes
//     pfx  = '',
//     slidy = document.getElementById("slidy"); 
// if (slidy.style.animationName !== undefined) { animation = true; } 
// // browser supports keyframe animation w/o prefixes

// if( animation === false ) {
//   for( var i = 0; i < domPrefixes.length; i++ ) {
//     if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
//       pfx = domPrefixes[ i ];
//       animationstring = pfx + 'Animation';
//       keyframeprefix = '-' + pfx.toLowerCase() + '-';
//       animation = true;
//       break;
//     }
//   }
// }

