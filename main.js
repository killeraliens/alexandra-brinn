function animateSpider() {
    $('#introSection').ready(function(e) {
      console.log('line loaded');
      $('.spider-vert-line').css('height', '100px');
      $('#js-spider-before').css('top', '80px');
      setTimeout(function() {
        $('#js-spider-before').css("display", "none");
        $('#js-spider-after').css("visibility", "visible");
        $('#js-spider-after').css("transform", "scale(1)");
      }, 600);
    });

}

function handleSideNav() {
  function openNav() {
    $('#js-menu-button').on('click', function(e) {
      $("#js-nav-list").css("width", "250px");
      $("#js-nav-list").css("border", "4px solid black");
    });
    closeNav();
  }

  openNav();

  function closeNav() {
    $('#js-close-menu-button').on('click', function(e) {
      $("#js-nav-list").css("width", "0px");
    });
    $('#js-nav-list').find('a').on('click', function(e) {
      $("#js-nav-list").css("width", "0px");
      setTimeout(function() {$("#js-nav-list").css("border", "none")}, 400);
    });
  }
}

function handleThemeSwitch() {
    $("#js-color-theme-switch").on('click', function(e) {
        $("body").toggleClass('night');
        $("#introSection, #introSection *").toggleClass('night');
        const switchInput = $(e.currentTarget);
        switchInput.attr("checked", !switchInput.attr("checked"));
        switchInput.prop("aria-checked", !switchInput.prop("aria-checked"));
    });
}

function handleIntroLink() {
    $("#js-intro-link").on('click', function(e) {
        renderIntroSection();
        handleClickedNavLink($(e.currentTarget));
        animateSpider();
    });

}

function handleAboutLink() {
    $("#js-about-link").on('click', function(e) {
        renderAboutSection();
        handleClickedNavLink($(e.currentTarget));
    });
}

function handleProjectsLink() {
    $('#js-projects-link').on('click', function(e) {
        renderProjectsSection();
        handleClickedNavLink($(e.currentTarget));
    });
}

function handleContactLink() {
    $("#js-contact-link").on('click', function(e) {
        renderContactSection();
        handleClickedNavLink($(e.currentTarget));
    });
}

function handleSkillsLink() {
    $('#js-skills-link').on('click', function(e) {
        renderSkillsSection();
        handleClickedNavLink($(e.currentTarget));
    })
}

function handleUsLink() {
    $('#js-us-link').on('click', function(e) {
        renderUsSection();
        handleClickedNavLink($(e.currentTarget));
    })
}


function handleClickedNavLink(currentTarget) {
    const thisLink = currentTarget;
    const otherLinks = $("#js-nav-list").find("li").not(thisLink);
    thisLink.addClass("active");
    thisLink.blur();
    otherLinks.removeClass("active");
}


function handleInputs() {
    animateSpider();
    handleSideNav();
    handleThemeSwitch();
    handleContactLink();
    handleIntroLink();
    handleAboutLink();
    handleProjectsLink();
    handleSkillsLink();
    handleUsLink();
}

handleInputs();
