function returnAboutSectionString() {
    return `
         <section id="aboutSection" class="container">
          <div class="">
              <h1>Hi, I'm Alexandra - AKA Ali, and I create interactive digital experiences.</h1>
              <p>
                This includes user-flow illustration, HTML/CSS/JavaScript wireframing, React SPAs, and REST API development using NodeJS, Express, and PostgreSQL.
              </p>
              <p>
                I earned my BA in industrial design from Emily Carr University Vancouver, BC in 2007,
                and have since made my way towards creativity through code.
                In early 2019 taking a nine week course with Le Wagon (London) led me to Ruby on Rails and collaborative app development.
                I then continued on with Thinkful’s software engineering course, learning the PERN stack through early 2020,
                where I was able to conquer my fear of JavaScript and build my first TDD API using NodeJS and Express.
              </p>
              <p>
                Recently, I’ve been sharpening my skills in React and NodeJS with my personal project
                <a href="https://goatsguide.com" target="_blank">goatsguide.com</a>,
                a site dedicated to the collection of concert flier artwork and event-related data.
              </p>
              <p><b>
                I am currently looking to join a team of experienced developers
                where I can contribute my fresh perspective and a combination of coding skills and UX design.
                Contact me regarding potential projects or job opportunities where my work ethic, dedication,
                and collaborative attitude can be put to use.
               </b></p>
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
