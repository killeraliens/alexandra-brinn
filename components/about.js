function returnAboutSectionHtml() {
    return `
         <section id="aboutSection" class="container vertical-center-container">
          <div class="vertical-center-content">
              <h1>Hi, I'm Alexandra - AKA Ali, and I love designing and scripting digital experiences for people.</h1>
              <p>
                As a full-stack developer coming from a background in industrial design, I enjoy all aspects of web development
                from beginning-to-end. This includes user-flow illustration, HTML/CSS wireframing, database planning,
                and implementation of server-side languages like JavaScript, Ruby & SQL. Most of all, I enjoy learning
                and experimenting with new software and languages which allow me to express, implement, and test creative concepts.
              </p>
              <p>
                And when I'm not traveling, prototyping personal projects, or blasting my favorite LPs,
                you can find me drinking liters of black coffee, pursuing more in-depth knowledge on JavaScript,
                React, and Node within Thinkful's full-stack program. Feel free to get in touch.
              </p>
          </div>
        </section>
    `;
}

function injectAboutSectionHtml() {
    $('#js-main-display').html(returnAboutSectionHtml());
}

function renderAboutSection() {
    console.log("hellofromaboutpage");
    injectAboutSectionHtml();
}