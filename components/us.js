function Question(question, option1Arr, option2Arr, option3Arr){
   this.question = question;
   this.options = {};
   this.options.a = option1Arr[0];
    this.options.a.correct = option1Arr[1];
    this.options.a.img = option1Arr[2];
   this.options.b = option2Arr[0];
    this.options.b.correct = option2Arr[1];
    this.options.b.img = option2Arr[2];
   this.options.c = option3Arr[0];
    this.options.c.correct = option3Arr[1];
    this.options.c.img = option3Arr[2];
}

function generateQuestionsArr() {
    const q1 = new Question(
        `If you were a font...`,
        [`Arial`, `#`, `true`],
        [`Futura`, `#`, `false`],
        [`Garamond`, `#`, `false`]
    );
    return [q1];
}

function returnUsSectionString() {
    return `
         <section id="usSection" class="container">
          <div class="">
              <p><b>Fill out this form to test our compatibility. The results are only visible to you.</b></p>
              <form id="js-us-form" class="us-form">
                <h1>You</h1>
                    ${returnFieldsetStrings()}
<!--                <hr>-->
<!--                <fieldset>-->
<!--                  <legend class="question">How might your dieting practices best be described?</legend>-->
<!--                  <label>-->
<!--                    <div class="us-option-img" style="background-image:url('./assets/cryptids-quiz/mobile-1.png');" alt="qOptionImg1"></div>-->
<!--                    <input type="radio" id="radio1" name="option" value="qOption1">-->
<!--                    <span>qOption1 longer option even longer</span>-->
<!--                  </label>-->
<!--                   <label>-->
<!--                    <div class="us-option-img" style="background-image:url('./assets/cryptids-quiz/mobile-2.png');" alt="qOptionImg2"></div>-->
<!--                    <input type="radio" id="radio2" name="option" value="qOption2">-->
<!--                    <span>qOption2 longer option</span>-->
<!--                  </label>-->
<!--                  <label>-->
<!--                    <div class="us-option-img" style="background-image:url('./assets/cryptids-quiz/mobile-2.png');" alt="qOptionImg2"></div>-->
<!--                    <input type="radio" id="radio2" name="option" value="qOption2">-->
<!--                    <span>qOption2 longer option</span>-->
<!--                  </label>-->
<!--                </fieldset>-->
              </form>
          </div>
        </section>
    `;
}

function returnFieldsetStrings() {
    const questions = generateQuestionsArr();
    return questions.map(q => {
        return `<hr>
                <fieldset>
                  <legend class="question">${q.question}</legend>
                  <label>
                    <div class="us-option-img" style="background-image:url('${q.options.a.img}');" alt="${q.options.a}"></div>
                    <input type="radio" id="radio1" name="option" value="${q.options.a}">
                    <span>${q.options.a}</span>
                  </label>
                   <label>
                    <div class="us-option-img" style="background-image:url('${q.options.b.img}');" alt="${q.options.b}"></div>
                    <input type="radio" id="radio2" name="option" value="${q.options.b}">
                    <span>${q.options.b}</span>
                  </label>
                  <label>
                    <div class="us-option-img" style="background-image:url('${q.options.c.img}');" alt="${q.options.c}"></div>
                    <input type="radio" id="radio2" name="option" value="${q.options.c}">
                    <span>${q.options.c}</span>
                  </label>
                </fieldset>
        `;
    }).join(`\n`);

}

function injectUsSectionString() {
    $('#js-main-display').html(returnUsSectionString());
}

function renderUsSection() {
    injectUsSectionString();
}