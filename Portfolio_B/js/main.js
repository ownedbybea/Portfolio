// Select all the skill bars' spans
const spans = document.querySelectorAll('.skillbar span');

// Loop through each span and set its width and display percentage
spans.forEach((span) => {
    // Set the width of the span to the value of the 'data-width' attribute
    const width = span.dataset.width;
    span.style.width = width;

    // Optionally, you can add the percentage text inside the span
    span.textContent = width; // Use textContent to add the percentage text
});

let slideIndex = 1;
showSlides(slideIndex);

// Auto slide every 5 seconds
setInterval(function() {
  plusSlides(1); // Move to the next slide every 5 seconds
}, 5000);

// Function to go to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display the slide
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Loop through slides to ensure it stays within bounds
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  

  // Remove the 'active' class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";  

  // Activate the current dot
  dots[slideIndex - 1].className += " active";
}

function openModal(educationId) {
  let modalId = '';
  switch (educationId) {
    case 1:
      modalId = '#educationModal1';
      break;
    case 2:
      modalId = '#educationModal2';
      break;
    case 3:
      modalId = '#educationModal3';
      break;
  }

  // Show the modal with the corresponding ID
  const modal = new bootstrap.Modal(document.querySelector(modalId));
  modal.show();
}




// JS Portfolio//
document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons that trigger the modal
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // Loop over each button and add an event listener
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalTitle = this.getAttribute('data-title');
            const modalDescription = this.getAttribute('data-description');
            const modalImageSrc = this.getAttribute('data-image');
            const modalTitleElement = document.querySelector('#projectModal .modal-title');
            const modalDescriptionElement = document.querySelector('#projectModal #project-description');
            const modalImageElement = document.querySelector('#projectModal #project-image')
            // Set the modal title dynamically
            modalTitleElement.textContent = modalTitle;

            // Set the modal description using innerHTML so <br> tags are processed
            modalDescriptionElement.innerHTML = modalDescription;

            // Set the image dynamically
            modalImageElement.src = modalImageSrc;
            $('#projectModal').modal('show');  // Explicitly show the modal after content update
        });
    });

    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Loop over each filter button and add an event listener
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            const portfolioItems = document.querySelectorAll('.portfolio-item');

            // Loop through all portfolio items
            portfolioItems.forEach(item => {
                // Get the data-category attribute of each portfolio item
                const itemCategory = item.getAttribute('data-category');

                // Check if the item matches the selected category
                if (category === 'all' || itemCategory === category) {
                    item.style.display = '';  // Show item
                } else {
                    item.style.display = 'none';  // Hide item
                }
            });
        });
    });
});


// Script to handle form submission and success message //

document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault(); // Prevent form from submitting normally

// Display success message
document.getElementById('successMessage').style.display = 'block';

// Optionally, you can reset the form after submission
setTimeout(function() {
  document.getElementById('contactForm').reset();
  document.getElementById('successMessage').style.display = 'none';
}, 3000); // Success message disappears after 3 seconds
});