function returnUsSectionString() {
    return `
         <section id="usSection" class="container">
          <div class="">
              <p><b>Fill out this form to test our compatibility. The results are only visible to you.</b></p>
              <form id="js-us-form">
                <fieldset>
                  <legend class="question">How might your dieting practices best be described?</legend>
                  <label>
                    <img class="us-option-img" src="../assets/cryptids-quiz/mobile-1.png" alt="qOptionImg">
                    <input type="radio" id="radio1" name="option" value="qOptionA">
                    <span>qOptionA</span>
                  </label>
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