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
          <ul class="contact-list">
             <li><i class="fas fa-envelope"></i><br><a href="https://www.linkedin.com/in/alexandra-brinn-campbell/" target="_blank">AlexandraBrinnCampbell@gmail.com</a></li>
             <li><i class="fab fa-github"></i>github user <br><a href="https://github.com/killeraliens" target="_blank">killeraliens</a></li>
             <li><i class="fab fa-linkedin"></i>LinkedIn profile <br><a href="https://www.linkedin.com/in/alexandra-brinn-campbell/" target="_blank">Alexandra Campbell</a></li>
          </ul>
          <form id="js-contact-form" class="contact-form" action="https://formspree.io/alexandrabrinncampbell@gmail.com" method="POST" >
            <h1>Send me a message</h1>
            <fieldset name="contact-info">
                <div class="flex-fields">
                    <div class="form-flex-child">
                      <label for="name" required>Name</label>
                      <input id="name" aria-label="name" name="name" type="text" placeholder="Your Name" required>
                    </div>
                    <div class="form-flex-child">
                      <label for="email" required>Email</label>
                      <input id="email" aria-label="email" name="_replyto" type="email" placeholder="Your Email" required>
                    </div>
                </div>
            </fieldset>
            <fieldset name="message-content">
              <label for="subject" >Subject</label>
              <select aria-label="subject" name="_subject">
                <option aria-label="Request more info" value="Request more info">Request more info</option>
                <option aria-label="Schedule an interview" value="Schedule an interview">Schedule an interview</option>
                <option aria-label="I have a project" value="I have a project">I have a project</option>
                <option aria-label="Feedback" value="Feedback">Feedback</option>
              </select>
              <label for="message" required>Message</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </fieldset>
            <input type="hidden" name="_subject"/>
            <input type="hidden" name="_format" value="plain">
            <input type="hidden" name="_next" value="https://killeraliens.github.io/alexandra-brinn/index.html" />
            <button id="js-submit-email-button" type="submit" >Send</button>
          </form>
    </section>
  `;
}

function injectContactSectionHtml() {
    $("#skillsSection").after(returnContactSectionHtml());
}

function renderContactSection() {
    injectContactSectionHtml();

}
