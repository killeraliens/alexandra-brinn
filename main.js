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

function handleProjectsButton() {
    const projects = generateProjectArr();
    $('#js-projects-button').on('click', function(e) {
        renderProjectsSection();
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
    handleProjectsButton();
}

handleInputs();