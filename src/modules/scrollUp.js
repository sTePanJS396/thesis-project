// Прокрутка страницы
export function scrollUp() {
    document.querySelector('html').style.cssText = 'scroll-behavior: smooth;';
    document.querySelector('.top-slider').setAttribute('id', 'top')
    const upButton = document.querySelector('.up');
    upButton.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (pageYOffset < 480) {
            upButton.style.display = 'none';
        }
        if (pageYOffset > 480) {
            upButton.style.display = 'block';
        }
    });
}
// scrollUp();