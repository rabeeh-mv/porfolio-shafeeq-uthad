
  let btn = document.getElementById('add-btn');
  let btn2 = document.getElementById('add-btn2');
  let btn3 = document.getElementById('add-btn3');
  let pera = document.getElementById('display-content');
  let images = document.getElementById('img');

  // reset
  btn.classList.add('text-active');
  images.src = './image/slide-1.jpg';
  images.style.display = 'block';
  pera.innerText = "In the canvas of creativity, a graphic designer's thoughts brush strokes of innovation, where ideas bloom into visually captivating masterpieces.";

  function slideimage(n) {
    // Reset opacity for the buttons
    btn.style.opacity = 1;
    btn2.style.opacity = 1;
    btn3.style.opacity = 1;

    if (n == 1) {
      // one
      btn3.classList.remove('text-active');
      btn2.classList.remove('text-active');
      animateOne();
      images.src = './image/slide-1.jpg';
      images.style.display = 'block';
      btn.classList.add('text-active');
      btn.style.transition = ' all 1s'
    } else if (n == 2) {
      // two
      btn.classList.remove('text-active');
      btn3.classList.remove('text-active');
      animateTwo();
      images.src = './image/slide2.jpeg';
      images.style.display = 'block';
      btn2.classList.add('text-active');
      btn2.style.transition = ' all 1s'
    } else if (n == 3) {
      // three
      btn2.classList.remove('text-active');
      btn.classList.remove('text-active');
      animateThree();
      images.src = './image/slide3.jpg';
      images.style.display = 'block';
      btn3.classList.add('text-active');
      btn3.style.transition = ' all 1s'
    }

    // Apply opacity animation to the images
    opacityAnimation(images);
  }

  function animateOne() {
    animateText("In the canvas of creativity, a graphic designer's thoughts brush strokes of innovation, where ideas bloom into visually captivating masterpieces.");
  }

  function animateTwo() {
    animateText("Simplify the visual chaos; a graphic designer's art lies in elegance born from simplicity.");
  }

  function animateThree() {
    animateText("Crafting visual poetry, a graphic designer transforms imagination into pixelated masterpieces, weaving creativity into every design stroke.");
  }

  function animateText(content) {
    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
    let pera = document.querySelector('.pera');

    $(pera).stop(true, true); // Stop any ongoing animation
    pera.innerHTML = ''; // Clear previous content

    $(ele).hide().appendTo(pera).each(function (i) {
      $(this)
        .delay(100 * i)
        .css({
          display: 'inline',
          opacity: 0,
        })
        .animate(
          {
            opacity: 1,
          },
          100
        );
    });
  }

  // Opacity animation for images
  function opacityAnimation(element) {
    $(element).animate(
      {
        opacity: 0.5,
      },
      500,
      function () {
        $(element).animate(
          {
            opacity: 1,
          },
          500
        );
      }
    );
  }

  // Button click handlers
  btn.onclick = function () {
    slideimage(1);
  };

  btn2.onclick = function () {
    slideimage(2);
  };

  btn3.onclick = function () {
    slideimage(3);
  };

  // Call animateOne() automatically when the page loads
  $(document).ready(function () {
    animateOne();
  });
