// function AlexandraBrinnState()

function Project(title, siteUrl, imgUrlArr, paragraphArr, ghUrl) {
    this.title = title;
    this.siteUrl = siteUrl;
    this.imgUrlArr = imgUrlArr;
    this.paragraphArr = paragraphArr;
    this.ghUrl = ghUrl;

}

function generateProjectArr() {
    const projectArr = [];

    const cryptidsQuiz = new Project(
        "Cryptids Quiz",
        "https://killeraliens.github.io/quiz",
        ["Take my quiz on folklore creatures! A JQuery, HTML, CSS interactive app, with a focus on responsive design."],
        ["./assets/cryptids-quiz/mobile-1.png", "./assets/cryptids-quiz/mobile-2.png", "./assets/cryptids-quiz/desktop-1.png", "./assets/cryptids-quiz/mobile-3.png"],
        "https://killeraliens.github.io/quiz"
    );
    projectArr.push(cryptidsQuiz);
    return projectArr;
}


function handleThemeSwitch() {
    $("#js-color-theme-switch").on('click', function(e) {
        $("body").toggleClass('night');
        const switchInput = $(e.currentTarget);
        switchInput.attr("checked", !switchInput.attr("checked"));
        switchInput.prop("aria-checked", !switchInput.prop("aria-checked"));
    });
}

function handleAboutButton() {
    $("#js-about-button").on('click', function(e) {
        renderAboutSection();
        handleClickedNavButton($(e.currentTarget));
    });
}

function handleContactButton() {
    $("#js-contact-button").on('click', function(e) {
        renderContactSection();
        handleClickedNavButton($(e.currentTarget));
    });
}


function handleClickedNavButton(currentTarget) {
    const thisButton = currentTarget;
    const otherButtons = $("#js-main-nav").find("button").not(thisButton);
    thisButton.addClass("active");
    thisButton.blur();
    otherButtons.removeClass("active");
}


function handleInputs() {
    handleThemeSwitch();
    handleContactButton();
    handleAboutButton();
}

handleInputs();