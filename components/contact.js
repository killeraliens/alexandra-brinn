// FOR USE WITH MANDRILL $$$
// function Email(name, email, message) {
//     this.senderName = name;
//     this.senderEmail = email;
//     this.message = message;
//     this.subject = `${this.senderName} sent you a message from your site`;
//     this.recipient = `alexandrabrinncampbell@gmail.com`;
//     this.recipientName = `Alexandra Campbell`;
// }

// Email.prototype.send = function() {
//     console.log('email sent');
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
//             }
//             ],
//             ‘autotext’: ‘true’,
//             ‘subject’: `${this.subject}`,
//             ‘html’: `${this.message}`
//             }
//         }
// }).done(function(response) {
//         console.log(response); // if you're into that sorta thing
//     });
// }

// function handleEmailFormSubmit() {
//     $("#js-contact-form").on('submit', function(e) {
//         e.preventDefault();
//         const senderName = $(e.currentTarget).find("#name").val();
//         const senderEmail = $(e.currentTarget).find("#email").val();
//         const message = $(e.currentTarget).find("#message").val();
//         newEmail = new Email(senderName, senderEmail, message);
//         console.log(newEmail.senderName + newEmail.senderEmail + newEmail.message);
//         newEmail.send();
//     })
// }



function returnContactSectionHtml() {
  return `
    <section id="contactSection" class="container">
<!--    <section id="contactSection" class="container vertical-center-container">-->
<!--      <div class="vertical-center-content form-wrap">-->
          <p><b>I am currently looking for a fun and organized team with experienced developers
            where I can contribute by combining my new coding skills with UX design.
            Contact me regarding potential projects, or drop me a line.</b>
          </p>
          <form id="js-contact-form" class="contact-form" action="https://formspree.io/alexandrabrinncampbell@gmail.com" method="POST" >
            <h1>Send me a message.</h1>
            <fieldset name="contact-info">
              <label for="name" required>Name</label>
              <input id="name" name="name" type="text" placeholder="Your Name" required>
              <label for="email" required>Email</label>
              <input id="email" name="_replyto" type="email" placeholder="Your Email" required>
            </fieldset>
            <fieldset name="message-content">
              <label for="subject" >Subject</label>
              <select name="_subject">
                <option value="more-info" selected>Request more info</option>
                <option value="schedule">Schedule an interview</option>
                <option value="project">I have a project</option>
                <option value="feedback">Feedback</option>
              </select>
              <label for="message" required>Message</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </fieldset>
            <input type="hidden" name="_format" value="plain">
            <input type="hidden" name="_next" value="https://killeraliens.github.io/alexandra-brinn/index.html" />
            <button id="js-submit-email-button" type="submit" >Send</button>
          </form>
<!--      </div>-->
    </section>
  `;
}

function injectContactSectionHtml() {
    $("#js-main-display").html(returnContactSectionHtml());
}

function renderContactSection() {
    injectContactSectionHtml();
    // handleEmailFormSubmit();
}