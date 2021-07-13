// Главный слайдер
export function slider() {
    let indexSlider = 1;
    const sliderItem = document.querySelectorAll('.item');
    const table = document.querySelectorAll('.table');

  table.forEach(item => {
        item.classList.add('table')
    })

  function showSlides(n) {
    if (n > sliderItem.length) {
      indexSlider = 1;
    }

    if (n < 1) {
      indexSlider = sliderItem.length;
    }

    sliderItem.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    sliderItem[indexSlider - 1].style.display = 'block';
    table.forEach(item => {
      item.classList.remove('active');
    });
  };


  showSlides(indexSlider);

  function nextSlides(n) {
    showSlides(indexSlider += n);
  }

  setInterval(() => {
    nextSlides(1);
    sliderItem[indexSlider - 1].classList.remove('fadeIn');
    sliderItem[indexSlider - 1].classList.add('fadeIn');
    setTimeout(() => {
      return table[indexSlider - 1].classList.add('active');
    }, 30);
    setTimeout(() => {
      return table[indexSlider - 1].classList.remove('active');
    }, 2550);
  }, 4000);
}

// slider()