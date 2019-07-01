function returnUsSectionString() {
    return `
         <section id="usSection" class="container">
          <div class="">
              <p><b>Fill out this form to test our compatibility. The results are only visible to you.</b></p>
              <form id="js-us-form">
                <fieldset>
                  <legend></legend>
                </fieldset>
              </form>
          </div>
        </section>
    `;
}

function injectUsSectionString() {
    $('#js-main-display').html(returnUsSectionString());
}

function renderUsSection() {
    injectUsSectionString();
}