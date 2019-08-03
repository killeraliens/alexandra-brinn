function animateSpider() {
    $('#introSection').ready(function(e) {
      $('.spider-vert-line').css('height', '100px');
      $('#js-spider-before').css('top', '80px');
      setTimeout(function() {
        $('#js-spider-before').css("display", "none");
        $('#js-spider-after').css("visibility", "visible");
        $('#js-spider-after').css("transform", "scale(1)");
      }, 600);
    });

    // $('#introSection').on('classChange', function(e) {
    //   $('.spider-vert-line').css('height', '100px');
    //   $('#js-spider-before').css('top', '80px');
    //   setTimeout(function() {
    //     $('#js-spider-before').css("display", "none");
    //     $('#js-spider-after').css("visibility", "visible");
    //     $('#js-spider-after').css("transform", "scale(1)");
    //   }, 600);
    // });
}

function resetSpider() {
  $('.spider-vert-line').css('height', '15px');
  $('#js-spider-before').css('top', '0px');
  $('#js-spider-before').css("display", "block");
  $('#js-spider-after').css("visibility", "hidden");
  $('#js-spider-after').css("transform", "scale(1.1)");
  // animateSpider();
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
        // $("#introSection, #introSection *").toggleClass('night');
        if (!$('body').hasClass('night')) {
          resetSpider();
          animateSpider();
        }
        const switchInput = $(e.currentTarget);
        switchInput.attr("checked", !switchInput.attr("checked"));
        switchInput.prop("aria-checked", !switchInput.prop("aria-checked"));
    });
}

function handleIntroLink() {
    $("#js-intro-link").on('click', function(e) {
        // renderIntroSection();
        document.querySelector('#introSection').scrollIntoView(true);
        // hideFooter();
        handleClickedNavLink($(e.currentTarget));
        resetSpider();
        setTimeout(function() { animateSpider() }, 500);

    });

}

// function handleAboutLink() {
//     $("#js-about-link").on('click', function(e) {
//         renderAboutSection();
//         handleClickedNavLink($(e.currentTarget));
//         renderFooter();
//     });
// }
function handleAboutLink() {
    $("#js-about-link").on('click', function(e) {
        document.querySelector('#aboutSection').scrollIntoView(true);
        // function scrollToTargetAdjusted(){
        //   var element = document.getElementById('aboutSection');
        //   var headerOffset = 100;
        //   var elementPosition = element.getBoundingClientRect().top;
        //   var offsetPosition = elementPosition - headerOffset;

        //   window.scrollTo({
        //        top: offsetPosition,
        //        behavior: "smooth"
        //   });
        // }
      scrollToTargetAdjusted();
      handleClickedNavLink($(e.currentTarget));

    });
}

function handleProjectsLink() {
    $('#js-projects-link').on('click', function(e) {
        renderProjectsSection();
        handleClickedNavLink($(e.currentTarget));
        renderFooter();
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
        renderFooter();
    })
}

function handleUsLink() {
    $('#js-us-link').on('click', function(e) {
        renderUsSection();
        handleClickedNavLink($(e.currentTarget));
        renderFooter();
    })
}


function handleClickedNavLink(currentTarget) {
    const thisLink = currentTarget;
    const otherLinks = $("#js-nav-list").find("a").not(thisLink);
    thisLink.addClass("active");
    thisLink.blur();
    otherLinks.removeClass("active");
}


function handleLoad() {
    animateSpider();
    handleSideNav();
    handleThemeSwitch();
    handleIntroLink();
    renderAboutSection();
    handleAboutLink();
    renderProjectsSection();
    handleProjectsLink();
    renderSkillsSection();
    handleSkillsLink();
    renderContactSection();
    handleContactLink();
    // handleUsLink();
}

handleLoad();
