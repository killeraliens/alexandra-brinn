// function AlexandraBrinnState()

function Project(title, siteUrl, imgUrlArr, paragraphArr, ghUrl) {
    this.title = title;
    this.siteUrl = siteUrl;
    this.imgUrlArr = imgUrlArr;
    this.paragraphArr = paragraphArr;
    this.ghUrl = ghUrl;

}

function generateProjectArr() {
    const projectArr = [];

    const cryptidsQuiz = new Project(
        "Cryptids Quiz",
        "https://killeraliens.github.io/quiz",
        ["Take my quiz on folklore creatures! A JQuery, HTML, CSS interactive app, with a focus on responsive design."],
        ["./assets/cryptids-quiz/mobile-1.png", "./assets/cryptids-quiz/mobile-2.png", "./assets/cryptids-quiz/desktop-1.png", "./assets/cryptids-quiz/mobile-3.png"],
        "https://killeraliens.github.io/quiz"
    );
    projectArr.push(cryptidsQuiz);
    return projectArr;
}

function Email(name, email, message) {
    this.senderName = name;
    this.senderEmail = email;
    this.message = message;
    this.subject = `${this.senderName} sent you a message from your site`;
    this.recipient = `alexandrabrinncampbell@gmail.com`;
    this.recipientName = `Alexandra Campbell`;
}

Email.prototype.send = function() {
//     $.ajax({
//         type: “POST”,
//     url: “https://mandrillapp.com/api/1.0/messages/send.json”,
//         data: {
//         ‘key’: ‘YOUR API KEY HERE’,
//         ‘message’: {
//             ‘from_email’: `${this.senderEmail}`,
//             ‘to’: [
//                     {
//             ‘email’: `${this.recipient}`,
//             ‘name’: `${this.recipientName}`,
//             ‘type’: ‘to’
//             },
//                 {
//                 ‘email’: ‘RECIPIENT_NO_2@EMAIL.HERE’,
//                 ‘name’: ‘ANOTHER RECIPIENT NAME (OPTIONAL)’,
//                 ‘type’: ‘to’
//                 }
//             ],
//             ‘autotext’: ‘true’,
//             ‘subject’: `${this.subject}`,
//             ‘html’: `${this.message}`
//             }
//         }
// }).done(function(response) {
//         console.log(response); // if you're into that sorta thing
//     });
}

function handleEmailFormSubmit() {
    $("#js-contact-form").on('submit', function(e) {
        e.preventDefault();
        const senderName = $(e.currentTarget).find("#name").val();
        const senderEmail = $(e.currentTarget).find("#email").val();
        const senderMessage = $(e.currentTarget).find("#message").val();
        console.log(senderName + senderEmail + senderMessage);
        newEmail = new Email(senderName, senderEmail, senderMessage);
        newEmail.send();
    })
}

function handleThemeSwitch() {
    $("#js-color-theme-switch").on('click', function(e) {
        $("body").toggleClass('night');
        const switchInput = $(e.currentTarget);
        switchInput.attr("checked", !switchInput.attr("checked"));
        switchInput.prop("aria-checked", !switchInput.prop("aria-checked"));
    });
}


function handleInputs() {
    handleThemeSwitch();
    handleEmailFormSubmit();
}

handleInputs();