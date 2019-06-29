function Project(title, siteUrl, paragraphArr, imgUrlArr, ghUrl) {
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
        [["./assets/cryptids-quiz/mobile-1.png", "m1"], ["./assets/cryptids-quiz/mobile-2.png", "m2"], ["./assets/cryptids-quiz/desktop-1.png", "d2"], ["./assets/cryptids-quiz/mobile-3.png", "m3"]],
        "https://killeraliens.github.io/quiz"
    );

    const fleshMe = new Project(
        "Flesh Me",
        "https://killeraliens.github.io/flesh-me",
        ["This weekend project showcases my love of bad Photoshop art while learning the basics of semantic, accessible HTML, as\n" +
        "          well as vanilla JS and JQuery transitions. Select and layer the flesh items from the lefthand pallette. I can also do clean Photoshop work."],
        [["./assets/flesh-me/mobile-1.png", "m1"], ["./assets/flesh-me/mobile-2.png", "m3"], ["./assets/flesh-me/desktop-1.png", "d1"]],
        "https://github.com/killeraliens/flesh-me"
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

    projectArr.push(cryptidsQuiz, fleshMe, excuseEngine);
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
        <h1>${project.title}</h1>
        <a href="${project.siteUrl}" target="_blank" aria-label="link to the ${project.title} site">${regexedSiteUrl(project.siteUrl)}</a>
        ${returnParagraphsString(project)}  
        <a href="${project.ghUrl}" target="_blank" aria-label="link to the github repo"><i class="fab fa-github"></i>See the code</a>
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
          ${returnArticlesListingString()}
        </section>
    `;
}

function injectSectionString() {
    $("#js-main-display").html(returnSectionString());
}

function renderProjectsSection() {
    injectSectionString();
}