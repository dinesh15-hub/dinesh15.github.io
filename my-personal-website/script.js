// Function to scroll to the projects section when the button is clicked
function scrollToProjects() {
  const projectsSection = document.getElementById('projects');
  window.scrollTo({
    top: projectsSection.offsetTop,
    behavior: 'smooth'
  });
}
