function returnAboutSectionString() {
    return `
         <section id="aboutSection" class="container">
          <div class="">
              <h1>Hi, I'm Alexandra - AKA Ali, and my passion lies in the design and scripting of interactive digital experiences.</h1>
              <p>
                This includes user-flow illustration, HTML/CSS wireframing, and REST api development using React, Node.js and SQL.
              </p>
              <p>
                I earned my BA in industrial design from Emily Carr University Vancouver, BC in 2007,
                and have since made my way towards creativity through code.
                In early 2019 taking a nine week course with Le Wagon (London) led me to Ruby on Rails and collaborative app development.
                I then continued on with Thinkful’s software engineering course, learning the PERN stack through early 2020,
                where I was able to conquer my fear of JavaScript and build my first TDD API using Node.js and Express.
              </p>
              <p>
                Recently, I’ve been honing my skills in React and Node.js with my personal project
                <a href="https://goatsguide.com" target="_blank">goatsguide.com</a>,
                a site dedicated to the collection of concert flier artwork and event-related data.
              </p>
              <p>
                For me, coding is not just a potential job. It is a medium I want to specialize in to help achieve common goals.
                My free time is spent traveling, learning, and experimenting with new libraries and languages which allow me to express,
                implement, and test creative concepts.
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
