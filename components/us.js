function Question(question, option1Arr, option2Arr, option3Arr){
   this.question = question;
   this.options = {};
   this.options.a = option1Arr[0];
    this.options.a.point = option1Arr[1];
    this.options.a.img = option1Arr[2];
   this.options.b = option2Arr[0];
    this.options.b.point = option2Arr[1];
    this.options.b.img = option2Arr[2];
   this.options.c = option3Arr[0];
    this.options.c.point = option3Arr[1];
    this.options.c.img = option3Arr[2];
}

function generateQuestionsArr() {
    const q1 = new Question(
        `If I was a font...`,
        [`I'd be Arial`, `true`, `#`],
        [`I'd be Times`, `false`, `#`],
        [`I'd be Courier`, `false`, `#`]
    );

    const q2 = new Question(
        `On marijuana`,
        [`Colorado has it right`, `true`, `#`],
        [`Open to working with the industry`, `true`, `#`],
        [`Strictly opposed`, `false`, `#`]
    );

    const q3 = new Question(
        `Best description of your diet`,
        [`Convenient`, `false`, `#`],
        [`Homemade`, `true`, `#`],
        [`No carbs`, `false`, `#`]
    );

    const q4 = new Question(
        `Which role best describes you?`,
        [`Architect`, `false`, `#`],
        [`Builder`, `false`, `#`],
        [`Organizer`, `true`, `#`]
    );

    const q5 = new Question(
        `Describe your sense of humor`,
        [`Surreal, fun`, `false`, `#`],
        [`Dark, deadpan`, `true`, `#`],
        [`Wordplay, wit`, `false`, `#`]
    );

    const q6 = new Question(
        `Straw usage`,
        [`No thanks`, `true`, `#`],
        [`Yes please`, `false`, `#`],
        [`Don't care`, `false`, `#`]
    );

    const q7 = new Question(
        `Describe your daily commute car commitment`,
        [`I love my car`, `false`, `#`],
        [`I have to drive`, `false`, `#`],
        [`I have other options`, `true`, `#`]
    );

    const q8 = new Question(
        `The majority of your workplace's attire`,
        [`Casual, not sloppy`, `true`, `#`],
        [`Designer aesthetic`, `false`, `#`],
        [`Business professional`, `false`, `#`]
    );


    return [q1, q2, q3, q4, q5, q6, q7, q8];
}

function returnUsSectionString() {
    return `
         <section id="usSection" class="container">
          <div class="">
              <p><b>Fill out this form to test our compatibility. The results are only visible to you.</b></p>
              <form id="js-us-form" class="us-form">
                <h1>You</h1>
                    ${returnFieldsetStrings()}
              </form>
          </div>
        </section>
    `;
}

function returnFieldsetStrings() {
    const questions = generateQuestionsArr();
    return questions.map(q => {
        return `
<!--            <hr>-->
            <fieldset>
              <legend class="question">${q.question}</legend>
              <label>
                <div class="us-option-img" style="background-image:url('${q.options.a.img}');" alt="${q.options.a}"></div>
                <input type="radio" id="radio1" name="${q.question}" value="${q.options.a}">
                <span>${q.options.a}</span>
              </label>
               <label>
                <div class="us-option-img" style="background-image:url('${q.options.b.img}');" alt="${q.options.b}"></div>
                <input type="radio" id="radio2" name="${q.question}" value="${q.options.b}">
                <span>${q.options.b}</span>
              </label>
              <label>
                <div class="us-option-img" style="background-image:url('${q.options.c.img}');" alt="${q.options.c}"></div>
                <input type="radio" id="radio2" name="${q.question}" value="${q.options.c}">
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