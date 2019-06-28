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

    const fleshMe = new Project(
        "Flesh Me",
        "https://killeraliens.github.io/flesh-me",
        ["This weekend project showcases my love of bad Photoshop art while learning the basics of semantic, accessible HTML, as\n" +
        "          well as vanilla JS and JQuery transitions. Select and layer the flesh items from the lefthand pallette. I can also do clean Photoshop work."],
        ["./assets/flesh-me/mobile-1.png", "./assets/flesh-me/mobile-2.png", "./assets/flesh-me/desktop-1.png"],
        "https://github.com/killeraliens/flesh-me"
    );

    const excuseEngine = new Project(
        "Excuse Engine",
        "http://www.excuse-engine.com/",
        ["An app that generates excuses for you based on your location.\n" +
        "          Built with Ruby on Rails, JavaScript, traffic & London transport APIs, HTML, and CSS - teamwork - Janie, Maddie,\n" +
        "          Mark -\n" +
        "          Github/Heroku."],
        "https://github.com/maddielewis/excuse-engine"
    );

    projectArr.push(cryptidsQuiz, fleshMe, excuseEngine);
    return projectArr;
}


function returnProjectsSectionHtml() {
    console.log('return html container with map function for listing')
    return `<h1>PROJECTS SECTION</h1>`;
}

function injectProjectsSectionHtml() {
    $("#js-main-display").html(returnProjectsSectionHtml());
}

function renderProjectsSection() {
    injectProjectsSectionHtml();
}