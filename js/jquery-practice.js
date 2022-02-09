$(document).ready(function() {
    // Write your jQuery code here
    // This ensures that your JS runs after the entire page is loaded, in order to avoid any problems

    console.log($); // $ stands for jQuery

    // Format of a jQuery statement: $("selector").action()
    // Selectors can be of the types: tagname, .class or #id

    $("p").click(); // This means that we are clicking all <p> tags

    $("p").click(function() {
        // When p is clicked, do this.
        console.log("You clicked on p.");
        // $("p").hide() - this hides all the p's in the HTML document
        $(this).hide(); // Hides the p that has been clicked on
    });
    // Another way of handling the above click event would be with:
    // $("p").on("click", function() {
    //     console.log("Thanks for clicking ", this);
    // });

    $("second-para").click(); // Clicks the element with id as 'second-para'

    $("odd").click(); // Clicks the elements with the class as 'odd'

    // Other selectors:
    // $("*").click(); // Clicks on all the elements
    
    /* Events in jQuery */
    // Mouse events - click, dblclick, mouseenter, mouseleave, etc.
    // Keyboard events - keypress, keydown, MediaKeyStatusMap, etc.
    // Form events - submit, change, focus, blur, etc.
    // Document / Window events - load, resize, scroll, unload, etc.

    /* Demo of on method */
    // on method allows us to handle multiple events at the same time
    $(".content").on({
        click: function() {
            console.log("Content is clicked");
        },

        mouseleave: function() {
            console.log("Mouse has left content");
        }
    });

    // $(".content").hide(1000, function() {
    //     console.log("Hidden");
    // }); // Hides the content in an animation sort of a way in 1000 milliseconds and then displays the message "Hidden"
    // Its opposite is show and does the same animation in the opposite way

    // Eg.
    $("#toggle-button").click(function() {
        $(".content").toggle(2000, function() {
            console.log("Toggled display of the content");
        });
    }); 

    /* Animation examples */
    // They take in parameters same as hide() and show(), i.e., (speed, callback) and are optional
    // fadeIn(), fadeOut(), fadeToggle(), fadeTo()
    // slideUp(), slideDown(), slideToggle() - display content from top to bottom, hide content from bottom to top

    /* Using the animate function */
    $(".content").animate({opacity: 0.3}, 2000);

    $(".content2").animate({
        opacity: 0.6,
        height: "150px",
        width: "300px"
    }, 3000);

    $(".block").animate({
        opacity: 0.5,
        height: "40px",
        width: "40px"
    }, 4000);

    /* DOM Manipulation */
    $(".content2").text(); // Returns the text within that tag
    $(".content2").text("This is some other text"); // Edits the text within that tag
    $(".content2").html(); // Returns the html within that tag
    $(".content2").html("<p>This is some other paragraph</p>"); // Edits the html within that tag

});