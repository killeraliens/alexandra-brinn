function returnAboutSectionString() {
    return `
         <section id="aboutSection" class="container">
          <div class="">
              <h1>Hi, I'm Alexandra - AKA Ali, and I love designing and scripting digital experiences for people.</h1>
              <p>
                This includes user-flow illustration, HTML/CSS wireframing, and REST api development using React, Node.js and SQL.
                Most of all, I enjoy learning and experimenting with new libraries and languages which allow me to express, implement, and test creative concepts.
              </p>
              <p>
                And when I'm not traveling, coming up with new designs, or blasting my favorite LPs,
                you can find me honing my skills in React and Node.js with my personal project
                <a href="https://goatsguide.com" target="_blank">goatsguide.com</a>,
                a site dedicated to the collection of heavy metal event artwork and related data.
              </p>
              <p><b>I am currently looking to join a team of experienced developers
                where I can contribute by combining my coding skills with UX design. Contact me regarding potential projects.</b>
              </p>
          </div>
        </section>
    `;
}

function injectAboutSectionString() {
    $('#introSection').after(returnAboutSectionString());
}

function renderAboutSection() {
    injectAboutSectionString();
}
