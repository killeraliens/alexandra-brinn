function returnAboutSectionString() {
    return `
         <section id="aboutSection" class="container vertical-center-container">
          <div class="vertical-center-content">
              <h1>Hi, I'm Alexandra - AKA Ali, and I love designing and scripting digital experiences for people.</h1>
              <p>
                I enjoy all aspects of web development from beginning-to-end. This includes user-flow illustration, HTML/CSS wireframing, database planning,
                and implementation of server-side languages like JavaScript, Ruby & SQL. Most of all, I enjoy learning
                and experimenting with new software and languages which allow me to express, implement, and test creative concepts.
              </p>
              <p>
                And when I'm not traveling, prototyping personal projects, or blasting my favorite LPs,
                you can find me pursuing more in-depth knowledge on JavaScript,
                React, and Node within Thinkful's full-stack program.
              </p>
              <p><b>I am currently looking for a fun and organized team with experienced developers
                where I can contribute by combining my new coding skills with UX design. Contact me regarding potential projects.</b>
              </p>
          </div>
        </section>
    `;
}

function injectAboutSectionString() {
    $('#js-main-display').html(returnAboutSectionString());
}

function renderAboutSection() {
    injectAboutSectionString();
}
