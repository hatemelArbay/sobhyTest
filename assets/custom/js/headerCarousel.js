
  // Array of background image URLs
  const backgroundImageUrls = [
    'url(assets/custom/images/mall.jpg)',
    'url(assets/custom/images/IMG_8573-1078.jpg)', // Add more image URLs as needed
  ];

  // Get a reference to the background-changing div
  const backgroundChanger = document.getElementById('background-changer');

  // Index to keep track of the current background image
  let currentIndex = 0;

  // Function to change the background image
  function changeBackground() {
    currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
    const newBackground = backgroundImageUrls[currentIndex];
    backgroundChanger.style.backgroundImage = newBackground;
  }

  // Interval in milliseconds (e.g., 5000 milliseconds = 5 seconds)
  const interval = 10000; // Change the interval as needed

  // Set an interval to change the background image
  setInterval(changeBackground, interval);

