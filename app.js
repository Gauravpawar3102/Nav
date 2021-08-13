// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navtoggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navtoggle.addEventListener('click', function () {
  //1st method

  //   if (links.classList.contains('show-links')) {
  //     links.classList.remove('show-links');
  //   } else {
  //     links.classList.add('show-links');
  //   }

  // 2nd method

  links.classList.toggle('show-links');
});
