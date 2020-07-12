/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
function checkScroll() {
    if ($(window).scrollTop() >= 400) {
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
}

/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
// (document).ready will ensure this jqeury takes effect before any html or css loads
$(document).ready(function () {
    // first, get the scroll position of the window right when everything loads
    checkScroll();
    // this will check if the window is being scrolled at all times and apply the solid black background if >= 300px
    $(window).scroll(checkScroll);
    //this will change to a solid black background whenever the user clicks the hamburger toggle icon
    $('.navbar-toggler').click(function () {
        // <=300 b/c >=300 is already covered in the checkScroll() function
        // we give this a unique class name of 'solid-toggle' so as to not interfere with our other 'solid' class we created
        if ($(window).scrollTop() <= 400) {
            $('nav.navbar').toggleClass('solid-toggle');
        }
    })
})

/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function () {
    $(window).scroll(function (){
        $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250)
    })
})


/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK ==========*/
// below we are targeting links with a '#' in it
// function (event) is needed since we want a specific click event that only fires on links with '#'
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    // the button with the class 'navbar-toggler' gains the class 'collapsed' when it is collapsed
    // we can manually give it that class when a user clicks a nav link to collapse all the nav links
    $('.navbar-toggler').addClass('collapsed');

    // the div with the id of #navbarResponsive contains all of our nav links
    // it gains a class called 'show' when we click on the button toggler
    // this is not apparent, but can be seen using the inspect tool in Chrome
    // so, we also need to remove the 'show' class to properly collapse our nav links
    $('#navbarResponsive').removeClass('show');

    // we need to remove the solid-toggle class when users click a link. If we don't, it will display a solid navbar at the top of the page when a user clicks the 'HOME' link
    // that takes them back to the top of the page.
    // It doesn't cause any issues elsewhere, b/c even if we remove the 'solid-toggle' class, the 'solid' class will still be present if the user's position on the page is
    // >= 300px. setTimeout is used to slightly delay the fade animation when the scroll position goes back to the top of the page. Again, this only affects the navbar at
    // the top of the page, b/c at >=300px the 'solid' class will be applied.
    setTimeout(function() {
        $('nav.navbar').removeClass('solid-toggle');
    }, 300);
    
    // here we animate all scrolling that results from clicking a link
    // scrollTop is a method for animating, there are other methods we could have used.
    // offset().top is the destination where we will scroll to. Remember, in our HTML the 'href' for these links contain #id's corresponding to the different sections
    // of the page, which are div's that contain those same #id's
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000) // 1000 is the animation speed for our scrolling
})

/*========== LIGHTBOX IMAGE GALLERY ==========*/
// Settings for Lightbox
// https://lokeshdhakar.com/projects/lightbox2/#options
$(document).ready(function (){
    lightbox.option({
        'resizeDuration' : 500,
        'wrapAround': true,
        'imageFadeDuration': 400
    })
})

/*========== Locations CAROUSEL ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
    $('#locations-carousel').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 3500, //time between automated transitions
        smartSpeed: 1200, //transition speed
        // navSpeed: 200, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //788px medium width and up display 2 items
            },
            992 : {
                items: 3 //992px large width and up display 3 items
            }
        }
    });
});

/*========== REVIEWS CAROUSEL ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
    $('#reviews-carousel').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 5000, //time between automated transitions
        autoplaySpeed: 1600, // transition speed for automated transitions
        smartSpeed: 800, //transition speed for clicking on the dots
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //788px medium width and up display 2 items
            }
        }
    });
});


/*========== OUR NUMBERS COUNTER ==========*/
// $(document).ready(function () {
//     $('.counter').counterUp({
//         time: 5000,
//         delay: 10,
//         beginAt: 0,
//     })
// })
$(document).ready(function () {
    if($(window).width() < 768) {
        $('.counter').counterUp({
            time: 1000, //The total duration of the count up animation
            delay: 10, //The delay in milliseconds per number count up
            beginAt: 0,
        })
    } else {
        $('.counter').counterUp({
            time: 5000,
            delay: 10,
            beginAt: 0,
        })
    }
})


/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        // this will make the scroll top icon appear once we scroll 500px down
        if ($(this).scrollTop() > 500){
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    })
})

/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () {
    // if the window is less than 768 px, change the data animation attribute on all divs that have it to 'fadeInUp'
    if($(window).width() < 768) {
        $('div').attr('data-animation', 'fadeInUp');
        // $('div').attr('data-delay', '0s');

    }
});

/*========== CONTACT FORM INPUT VALIDATION ==========*/
//Original Resource: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form
$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator
  
    $('#contact-form').validator();
  
  
    // when the form is submitted
    $('#contact-form').on('submit', function (e) {
    //   console.log('Contact form submit clicked.');
        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact/gmail-contact.php";
  
            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    // data = JSON object that contact.php returns
  
                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
  
                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
  
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
  });

/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function () { // a self calling function
    function onScrollInit(items, trigger) { // a custom made function
        items.each(function () { //for every element in items run function
            var osElement = $(this), //set osElement to the current
                osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
                osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time
  
            osElement.css({ //change css of element
                '-webkit-animation-delay': osAnimationDelay, //for safari browsers
                '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
                'animation-delay': osAnimationDelay //normal
            });
  
            var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger
  
            osTrigger.waypoint(function () { //scroll upwards and downwards
                osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
            }, {
                    triggerOnce: true, //only once this animation should happen
                    offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
                });
        });
    }
  
    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
  });


