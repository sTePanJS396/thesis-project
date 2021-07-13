// Аккордион
export function accordeon() {
    const elements = document.querySelectorAll('.accordeon .element');
    const element = document.querySelector('.accordeon');

    element.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.closest('.element');

        if (target.classList.contains('active')) {
            target.classList.remove('active');
        } else {
            elements.forEach(elem => {
                elem.classList.remove('active');
            });
            target.classList.add('active');
        }
    });
};
// accordeon();