
function Email(name, email, message) {
    this.senderName = name;
    this.senderEmail = email;
    this.message = message;
    this.subject = `Someone sent you a message killeraliens!!!`;
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