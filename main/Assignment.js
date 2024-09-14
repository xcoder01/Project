// Function to change the main image
function imgSlider(imagePath) {
  document.querySelector('.sports').src = imagePath;
}

// Function to change the background color
function changeColor(color) {
  document.querySelector('.home').style.background = color;
}

// Event listeners for thumbnail images
document.querySelectorAll('.thumb img').forEach(function (img) {
  img.addEventListener('click', function () {
    imgSlider(this.src);
    changeColor(this.dataset.color);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select the header and footer elements
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  // Create an intersection observer to watch the footer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When the footer is intersecting, hide the header
      if (entry.isIntersecting) {
        header.style.display = 'none';
      } else {
        header.style.display= ''
      }
    });
  });

  // Observe the footer
  observer.observe(footer);
});

//Calender
function setBackground() {
  const hour = new Date().getHours();
  let backgroundImage;
  let message;

  if (hour >= 6 && hour < 12) {
      backgroundImage = 'img/morning.jpeg';
      message = 'Good Morning!';
  } else if (hour >= 12 && hour < 19) {
      backgroundImage = 'img/afternoon.jpeg';
      message = 'Good Afternoon!';
  } else {
      backgroundImage = 'img/night.jpeg';
      message = 'Good Evening!';
  }

  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.getElementById('message').innerText = message;
}

function updateDateTime() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById('datetime').innerText = formattedDate;
}

setBackground();
updateDateTime();
setInterval(updateDateTime, 1000);