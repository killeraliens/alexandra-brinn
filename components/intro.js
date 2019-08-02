function returnIntroSectionString() {
    return `
      <section id="introSection" role="banner" class="color-bg container vertical-center-container">
      <div class="window-container">
        <div id="window" class="window-frame">
          <div class="window-gleam">
            <div class="gleam-1"></div>
            <div class="gleam-2"></div>
          </div>
          <div class="window-vert-line"></div>
          <div class="window-hori-line"></div>
          <img class="window-profile" src="./assets/window-illus/window-profile.svg" alt="killeraliens figure in window">
          <div id="js-spider-line" class="spider-vert-line"></div>
          <img id="js-spider-before" class="spider" src="./assets/window-illus/spider-before.svg" alt="spider dropping down a line in window">
          <img id="js-spider-after" class="spider" src="./assets/window-illus/spider-after.svg" alt="spider has landed in window">
        </div>
      </div>
    </section>
    `;
}

function injectIntroSectionString() {
    $('#js-main-display').html(returnIntroSectionString());
}

function renderIntroSection() {
    injectIntroSectionString();
}
