// function returnFooterString() {
//   return `
//     <footer>
//         <ul aria-label="external links menu">
//           <li><a href="mailto:alexandrabrinncampbell@gmail.com" target="_blank" aria-label="link to email popup">Email me</a></li>
//           <li><a href="https://github.com/killeraliens" target="_blank" aria-label="link to my github profile"><i class="fab fa-github"></i>killeraliens</a></li>
//           <li><a href="https://www.linkedin.com/in/alexandra-brinn-campbell/" target="_blank" aria-label="link to my linkedin profile"><i class="fab fa-linkedin"></i>Alexandra Campbell</a></li>
//         </ul>
//     </footer>
//   `;
// }

function renderFooter() {
  $('footer').css('display', 'block');
}

function hideFooter() {
  $('footer').css('display', 'none');
}
