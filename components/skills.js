function UxSkills() {
    this.category = `UX & UI`;
    this.list = [`Webflow`, `Invision`, `Adobe Creative Suite`, `Sketch`, `Figma`, ` Whimsical`, ` Mindnode`, ` feature inventories`, ` paper prototypes`, ` user interviews & testing`, `branding & creative content`];
}

function DevSkills() {
    this.category = `Dev`;
    this.list = [`Postgres`, `Express`, `React`, `Node.js`, `Ruby on Rails`, `HTML5`, `CSS/SCSS`, `Bootstrap`, `jQuery`, `SQL`, `MVC architecture`, `REST API`, `OOP`, `git & GitHub`, `Heroku`, `now & Zeit`, `server-side testing in Mocha, Chai, Supertest`, `frontend testing with Jest, Enzyme`];
}

function OtherSkills() {
    this.category = `Other`;
    this.list = [`AutoCad drafting`, `fabrication & installation plan documents`, `architectural scale models`, `PM software`];
}

function generateCategoryArr() {
    const uxSkills = new UxSkills();
    const devSkills =  new DevSkills();
    const otherSkills = new OtherSkills();
    return [devSkills, uxSkills, otherSkills];
}


function returnSkillsSectionString() {
    return `
        <section id="skillsSection" class="container">
          <header class="section-header"><h1 class="section-title">Skills</h1></header>
          <div class="">
            ${returnSkillCategoryStrings()}
          </div>
        </section>
    `;
}

function returnSkillCategoryStrings() {
    const categories = generateCategoryArr();
    const skillGroupStrings = categories.map(category => {
        return `
        <div class="skill-category-group">
            <h2>${category.category}</h2>
            <ul class="skill-list">
              ${returnListString(category.list)}
            </ul>
         </div>`;

    });
    return skillGroupStrings.join(`\n`);
}

function returnListString(categoryListArr) {
    const liItems = categoryListArr.map(skill => {
        return `<li>${skill}</li>`;
    });
    return liItems.join(`\n`);
}



function injectSkillsSectionString() {
    $('#projectsSection').after(returnSkillsSectionString());
}

function renderSkillsSection() {
    injectSkillsSectionString();
}
