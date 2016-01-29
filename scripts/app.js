window.onload = function() {

    // Code that exicutes when site is first loaded.
    function load() {
        document.getElementById("aboutContent").style.display = "none";
        document.getElementById("propertiesContent").style.display = "none";
        document.getElementById("contactContent").style.display = "none";
    }

    // Shows home information
    function homeButtonClick() {
        document.getElementById("homeContent").style.display = "block";
        document.getElementById("aboutContent").style.display = "none";
        document.getElementById("propertiesContent").style.display = "none";
        document.getElementById("contactContent").style.display = "none";
        window.scrollTo(0, 0);
    }

    // Shows about us information
    function aboutButtonClick() {
        document.getElementById("aboutContent").style.display = "block";
        document.getElementById("homeContent").style.display = "none";
        document.getElementById("propertiesContent").style.display = "none";
        document.getElementById("contactContent").style.display = "none";
        document.getElementById("propertiesButton").scrollIntoView();
    }

    // Shows properties information
    function propertiesButtonClick() {
        document.getElementById("propertiesContent").style.display = "block";
        document.getElementById("aboutContent").style.display = "none";
        document.getElementById("homeContent").style.display = "none";
        document.getElementById("contactContent").style.display = "none";
        document.getElementById("propertiesButton").scrollIntoView();
    }

    // Shows contact us information
    function contactButtonClick() {
        document.getElementById("contactContent").style.display = "block";
        document.getElementById("aboutContent").style.display = "none";
        document.getElementById("propertiesContent").style.display = "none";
        document.getElementById("homeContent").style.display = "none";
        document.getElementById("propertiesButton").scrollIntoView();
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comment").value = "";
        document.getElementById("thankyou").style.display = "none";
    }

    // Displays a message saying the comment was left.
    function submitComment() {
        if(document.getElementById("username").value.length>0 && document.getElementById("email").value.length>0) {
            document.getElementById("thankyou").style.display = "block";
        }
    }

    // Called when name input field is selected.
    function nameFocused() {
        var element = document.getElementById("username");
        element.style.outline = "none";
        element.style.borderColor = "blue";
    }

    // Called when name input field is no longer selected.
    function nameUnfocused() {
        document.getElementById("username").style.borderColor = "silver";
    }

    // Called when email input field is selected.
    function emailFocused() {
        var element = document.getElementById("email");
        element.style.outline = "none";
        element.style.borderColor = "blue";
    }

    // Called when email input field is no longer selected.
    function emailUnfocused() {
        document.getElementById("email").style.borderColor = "silver";
    }

    // Called everytime the user scrolls the page
    function scroll() {
        var scroll = window.scrollY;
        if (scroll > 400) {
            document.getElementById("header").style.top = "-9em";
        }
        else {
            document.getElementById("header").style.top = "0em";
        }
    }

    // Called when mouse leaves the flipBox element
    function mouseout(e) {
        hideFlipBox(e);
    }

    // Displays the listing info and image
    function showFlipBox(e) {
        e.target.childNodes[0].style.display = "none";
        e.target.childNodes[1].style.display = "block";
    }

    // Clears the listing info and image to show just the i
    function hideFlipBox(e) {
        try {
        e.target.childNodes[0].style.display = "block";
        e.target.childNodes[1].style.display = "none";
        }
        catch(e) {
            //Display property was undefined
        }
    }

    // Called at the end of the flipBox transition
    function toggleFlipBox(e) {
        if (window.getComputedStyle(e.target, null).width != "64px") {
            showFlipBox(e);
        }
        else {
            // do nothing
        }
    }

    // Create variables and add event listeners

    var flipBox = document.getElementsByClassName("flipBox");

    var letteri = document.getElementsByClassName("letteri");

    var listingInfo = document.getElementsByClassName("listingInfo");

    if (flipBox != null) {
        for(var i=0;i<flipBox.length;i++){
            flipBox[i].addEventListener("mouseleave", mouseout, false);
            flipBox[i].addEventListener("transitionend", toggleFlipBox, false);
        }
        for(var i=0;i<letteri.length;i++){
            letteri[i].addEventListener("mouseleave", mouseout, false);
        }
        for(var i=0;i<listingInfo.length;i++){
            listingInfo[i].addEventListener("mouseleave", mouseout, false);
        }
    }

    window.addEventListener("scroll", scroll);

    document.getElementById("homeButton").addEventListener("click", homeButtonClick);

    document.getElementById("aboutButton").addEventListener("click", aboutButtonClick);

    document.getElementById("propertiesButton").addEventListener("click", propertiesButtonClick);

    document.getElementById("contactButton").addEventListener("click", contactButtonClick);

    document.getElementById("username").addEventListener("focus", nameFocused);

    document.getElementById("email").addEventListener("focus", emailFocused);

    document.getElementById("username").addEventListener("blur", nameUnfocused);

    document.getElementById("email").addEventListener("blur", emailUnfocused);

    document.getElementById("submitButton").addEventListener("click", submitComment);

    load();
}