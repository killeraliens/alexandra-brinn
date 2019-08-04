function animateSpider() {
    $('#introSection').ready(function(e) {
      $('.spider-vert-line').css('height', '100px');
      $('#js-spider-before').css('top', '80px');
      setTimeout(function() {
        $('#js-spider-before').css("display", "none");
        $('#js-spider-after').css("visibility", "visible");
        $('#js-spider-after').css("transform", "scale(1)");
      }, 800);
    });

}

function resetSpider() {
  $('.spider-vert-line').css('height', '15px');
  $('#js-spider-before').css('top', '0px');
  $('#js-spider-before').css("display", "block");
  $('#js-spider-after').css("visibility", "hidden");
  $('#js-spider-after').css("transform", "scale(1.1)");
}

function handleSideNav() {
  function openNav() {
    $('#js-menu-button').on('click', function(e) {
      $("#js-nav-list").css("width", "250px");
      $("#js-nav-list").css("border", "4px solid black");
      $("#js-close-menu-link").focus();
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
        document.querySelector('#introSection').scrollIntoView(true);
        handleClickedNavLink($(e.currentTarget));
        resetSpider();
        setTimeout(function() { animateSpider() }, 1000);

    });

}


function handleLogoLink() {
  $("#logo-link").on('click', function(e) {
        document.querySelector('#introSection').scrollIntoView(true);
        //handleClickedNavLink($(e.currentTarget));
        resetSpider();
        setTimeout(function() { animateSpider() }, 1000);

    });
}

function handleAboutLink() {
    $("#js-about-link").on('click', function(e) {
      document.querySelector('#aboutSection').scrollIntoView(true);
      handleClickedNavLink($(e.currentTarget));
    });
}

function handleProjectsLink() {
    $('#js-projects-link').on('click', function(e) {
        document.querySelector('#projectsSection').scrollIntoView(true);
        handleClickedNavLink($(e.currentTarget));
    });
}

function handleContactLink() {
    $("#js-contact-link").on('click', function(e) {
        document.querySelector('#contactSection').scrollIntoView(true);
        handleClickedNavLink($(e.currentTarget));
    });
}

function handleSkillsLink() {
    $('#js-skills-link').on('click', function(e) {
        document.querySelector('#skillsSection').scrollIntoView(true);
        handleClickedNavLink($(e.currentTarget));
        renderFooter();
    })
}

// function handleUsLink() {
//     $('#js-us-link').on('click', function(e) {
//         handleClickedNavLink($(e.currentTarget));
//         renderFooter();
//     })
// }


function handleClickedNavLink(currentTarget) {
    const thisLink = currentTarget;
    const otherLinks = $("#js-nav-list").find("a").not(thisLink);
    thisLink.addClass("active");
    thisLink.blur();
    otherLinks.removeClass("active");
}


function handleScroll() {
  let element = document.querySelector('#header-bar');
  let lastScrollTop = 0;
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
     if (st > lastScrollTop){
        // downscroll code
        $('#header-bar').css('top', '-45px');
        $('#nav-bar').css('top', '0px');
        // $('#nav-bar').addClass('blue');
        // $('#nav-bar').css('border-bottom', '3px solid black');
     } else {
        // upscroll code
         $('#header-bar').css('top', '0px');
         $('#nav-bar').css('top', '48px');
         // $('#nav-bar').removeClass('blue');
         // $('#nav-bar').css('border-bottom', 'none');
     }
     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
}


function renderComponents() {
  // renderIntroSection();
  // renderAboutSection();
  renderProjectsSection();
  renderSkillsSection();
  renderContactSection();
}

function handleComponents() {
    animateSpider();
    handleLogoLink();
    handleSideNav();
    handleThemeSwitch();
    handleIntroLink();
    handleAboutLink();
    handleProjectsLink();
    handleSkillsLink();
    handleContactLink();
    handleScroll();
}


renderComponents();
handleComponents();
$(document).ready(function() {
    if (window.location.pathname+window.location.hash == '/index.html#contactSection') {
        console.log('Viewing contact form');
    }
});




