document.addEventListener("DOMContentLoaded", function() {
    // Get all the icons and contents
    const icons = document.querySelectorAll('.timeline-icon');
    const contents = document.querySelectorAll('.timeline-content');

    // Function to toggle the display of content
    function toggleContent(index) {
        contents[index].classList.toggle('active');
    }

    // Add click event listener to icons
    icons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            toggleContent(index);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get all the icons and contents
  const icons = document.querySelectorAll('.experience-icon');
  const contents = document.querySelectorAll('#experience-content');

  // Function to toggle the display of content
  function toggleContent(index) {
      contents[index].classList.toggle('active');
  }

  // Add click event listener to icons
  icons.forEach((icon, index) => {
      icon.addEventListener('click', function() {
          toggleContent(index);
      });
  });
});
  
