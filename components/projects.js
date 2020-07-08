function Project(title, siteUrl, paragraphArr, imgUrlArr, ghUrl) {
    this.title = title;
    this.siteUrl = siteUrl;
    this.imgUrlArr = imgUrlArr;
    this.paragraphArr = paragraphArr;
    this.ghUrl = ghUrl;
}

function generateProjectArr() {
    const projectArr = [];

  const cclApp = new Project(
    "UX design and fullstack developer for Cartel Coffee Lab",
    "https://cartelcoffeelab.com",
    [`This is an ongoing role on a proprietary line of products.
    Technologies I am working with include Postgres relational database structure (with JSON aggregate fns), NodeJS API service layer,
    Stripe payment integration, JWT authorization, end-to-end service architecture, AWS server configuration and deployment,
    as well as UX strategy on various React client interfaces for customers, employees, and administration.
      Feel free to check out Cartel as a company, and
      <a class='p-link' href='https://ccl-blk.now.sh/' target="_blank" >this early pdf click mock.</a>`],
    [["./assets/ccl-app/desktop-1.png", "d2"], ["./assets/ccl-app/desktop-2.png", "d0"]],
    ""
  );

    const goatsGuideV2 = new Project(
      "Unholygrail (Goats Guide pivot design)",
      "https://unholygrail.org",
      ["If you know about an upcoming concert, fest, or tour, share the flier on UNHOLYGRAIL - a CMS and bulletin board for poster artwork and event information. \n" +
      "This is a redesign on a passion project utilizing React (hooks), Node.js and feedback from version1. Attention is placed on making content upload features more prominent and easy-to-use to encourage user-sourced event data. \n" +
      "Loading time is reduced with this React SPA, and a service layer was created with Express and Node. \n" +
      "Additional features are currently being integrated. Custom authorizaton and protected endpoints make both the frontend and API private to the community. \n" +
      "Server-side tests written in Mocha, Chai, Supertest. React testing in progress with Jest and Enzyme. Demo account login details can be found <a class='p-link' href='https://github.com/killeraliens/goats-client'>here</a>."],
      [["./assets/goats-guide-v2/mobile-1.png", "m1"], ["./assets/goats-guide-v2/mobile-2.png", "m2"], ["./assets/goats-guide-v2/desktop-1.png", "d1"], ["./assets/goats-guide-v2/mobile-3.png", "m3"]],
      "https://github.com/killeraliens/goats-client"
    );

    const doctorsNearMe = new Project(
        "Doctors Near Me",
        "https://killeraliens.github.io/doctors-near-me",
        ["Find your next medical practitioner with Doctors Near Me, an app that locates and displays medical professionals based on your location, insurance plan, or specialty search. Built with HTML, CSS, jQuery, JavaScript, Better Doctor API, Google Maps JavaScript API, Google Geocoding and Reverse Geocoding APIs"],
        [["./assets/doctors-near-me/mobile-1.png", "m1"], ["./assets/doctors-near-me/mobile-2.png", "m2"], ["./assets/doctors-near-me/desktop-1.png", "d1"], ["./assets/doctors-near-me/mobile-3.png", "m3"]],
        "https://github.com/killeraliens/doctors-near-me"
    );

    const cryptidsQuiz = new Project(
        "Cryptids Quiz",
        "https://killeraliens.github.io/quiz",
        ["Take my quiz on folklore creatures! A JQuery, HTML, CSS interactive app, with a focus on responsive design."],
        [["./assets/cryptids-quiz/mobile-1.png", "m1"], ["./assets/cryptids-quiz/mobile-2.png", "m2"], ["./assets/cryptids-quiz/desktop-1.png", "d2"], ["./assets/cryptids-quiz/mobile-3.png", "m3"]],
        "https://github.com/killeraliens/quiz"
    );

    const fleshMe = new Project(
        "Flesh Me",
        "https://killeraliens.github.io/flesh-me",
        ["This weekend project showcases my love of bad Photoshop art while learning the basics of semantic, accessible HTML, as\n" +
        "          well as vanilla JS and JQuery transitions. Select and layer the flesh items from the lefthand pallette. I can also do clean Photoshop work."],
        [["./assets/flesh-me/mobile-1.png", "m1"], ["./assets/flesh-me/mobile-2.png", "m3"], ["./assets/flesh-me/desktop-1.png", "d1"]],
        "https://github.com/killeraliens/flesh-me"
    );

    const goatsGuide = new Project(
        "Goats Guide MVP",
        `https://goats-guide.herokuapp.com/`,
        ["A web tool and database concept developed from the needs of fans and practicing artists of extreme metal music genres. \n" +
        "Goat’s Guide is focused on helping bands and fans form local & international connections for live events, as well as event & venue discovery. \n" +
        "This is a project I am currently reworking using React and Node. This version was built using Ruby on Rails\n" +
        "and utilizes HTML-scraping gems such as Watir and Nokogiri coupled with custom scripts to aggregate data. Deployed with Heroku. \n" +
        "Check out the early Invision prototype <a class='p-link' href='https://projects.invisionapp.com/share/YRQX2W587PM'>here.</a>"],
        [["./assets/goats-guide/mobile-1.png", "m1"], ["./assets/goats-guide/mobile-2.png", "m3"],  ["./assets/goats-guide/desktop-2.png", "d0"], ["./assets/goats-guide/desktop-1.png", "d2"]], //["./assets/goats-guide/mobile-3.png", "m2"],
        "https://github.com/killeraliens/goats-guide"
    );

    const excuseEngine = new Project(
        "Excuse Engine",
        `http://www.excuse-engine.com/`,
        ["An app that generates excuses for you based on your location.\n" +
        "          Built with Ruby on Rails, JavaScript, traffic & London transport APIs, HTML, and CSS - teamwork - Janie, Maddie,\n" +
        "          Mark -\n" +
        "          Github/Heroku."],
        [["./assets/excuse-engine/mobile-1.png", "m1"], ["./assets/excuse-engine/mobile-2.png", "m2"], ["./assets/excuse-engine/mobile-3.png", "m3"], ["./assets/excuse-engine/desktop-1.png", "d2"]],
        "https://github.com/maddielewis/excuse-engine"
    );


    projectArr.push(cclApp, goatsGuideV2, doctorsNearMe, cryptidsQuiz, fleshMe, goatsGuide, excuseEngine);
    return projectArr;
}



// Helpers for HTML

function regexedSiteUrl(fullSiteUrl) {
    const regex = fullSiteUrl.replace(/(http:\/\/)|(https:\/\/)|(\/\z)/, "");
    return regex.substring(0, regex.length - +(regex.lastIndexOf('/')==regex.length-1));
}

function mobileOrDesktop(imgUrl) {
    if (imgUrl.match(/mobile/)) {
        return `mobile`;
    } else {
        return `desktop`;
    }
}

// HTML

function returnArticleString(project) {
        return`<article class="js-project-container project-container">
        <div role="img" aria-label="project screenshots" class="project-image-wrap">
            ${returnImagesString(project)}
        </div>
        <h2>${project.title}</h2>
        <a href="${project.siteUrl}" target="_blank" aria-label="link to the ${project.title} site">${regexedSiteUrl(project.siteUrl)}</a>
        ${returnParagraphsString(project)}
        ${!!project.ghUrl
          ? `<a href=${project.ghUrl} target="_blank" aria-label="link to the github repo"><i class="fab fa-github"></i>See the code</a>`
          : `<a href="https://github.com/killeraliens" target="_blank" aria-label="link to killeraliens github"><i class="fab fa-github"></i>Repo Code Unavailable</a>`}
      </article>`;
}

function returnParagraphsString(project) {
    const pArray = project.paragraphArr.map(p => {return `<p>${p}</p>`});
    return pArray.join('\n');
}

function returnImagesString(project) {
    const projectsImgs = project.imgUrlArr.map(imgArr => {
        const screenType = mobileOrDesktop(imgArr[0]);
        const imgUrl = imgArr[0];
        const posClass = imgArr[1];
        return `<img class="${screenType} ${posClass}" src="${imgUrl}" alt="${project.title} ${screenType} screenshot">`;
    });
    return projectsImgs.join('\n');
}


function returnArticlesListingString() {
    const projects = generateProjectArr();
    const projectListings = projects.map(project => {
        return returnArticleString(project);
    });
    return projectListings.join("\n");
}

function returnSectionString() {
    return `
        <section id="projectsSection" class="container">
          <header class="section-header"><h1 class="section-title">Projects</h1></header>
          ${returnArticlesListingString()}
        </section>
    `;
}

function injectSectionString() {
    $("#aboutSection").after(returnSectionString());
}

function renderProjectsSection() {
    injectSectionString();
}
