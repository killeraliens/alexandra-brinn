function returnIntroSectionString() {
    return `
      <section id="introSection" role="banner" class="color-bg container vertical-center-container">
        <div id="window"></div>
      </section>
    `;
}

function injectIntroSectionString() {
    $('#js-main-display').html(returnIntroSectionString());
}

function renderIntroSection() {
    injectIntroSectionString();
}
