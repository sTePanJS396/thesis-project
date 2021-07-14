// Модальное окно и подложка
export const modalWindow = () => {
    const callback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalBtn = document.querySelectorAll('a')[5];
    const modalClose = document.querySelector('.modal-close>img');

    modalBtn.addEventListener('click', () => {
        callback.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

    modalClose.addEventListener('click', () => {
        callback.style.display = 'none';
        modalOverlay.style.display = 'none';

        document.querySelectorAll('input').forEach(item => {
            if (item.type === 'text' || item.type === 'tel') {
                item.value = '';
            }
        })
    });

    modalOverlay.addEventListener('click', () => {
        callback.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
}
// modalWindow();