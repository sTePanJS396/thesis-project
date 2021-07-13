// Отправка данных
export function sendingData() {
    function form() {
        const errorMessage = 'Что-то пошло не так...';
        const loadMessage = 'Загрузка...';
        const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.getElementById('form');

        const statusMessage = document.createElement('div');
        statusMessage.setAttribute('style', 'font-size: 2rem; color: #000000;')

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body).then(() => {statusMessage.textContent = successMessage}, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
					
        });

        function postData(body) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                    function modalWins() {
                        setTimeout(() => {
                            document.querySelector('.modal-callback').style.display = 'none';
                            document.querySelector('.modal-overlay').style.display = 'none';
                        }, 3000);
                    };


                    if (request.readyState !== 4) {
                        return;
                    }
                    if (request.status === 200) {
                        resolve();
                        document.querySelectorAll('input').forEach(item => { 
                            if(item.type === 'text' || item.type === 'tel') {
                                item.value = '';
                            }
                        })
                        // document.querySelector('.feedback').disabled = true;
                        modalWins();
                        return;
                    } else {
                        reject(request.status);
                        document.querySelectorAll('input').forEach(item => { 
                            if(item.type === 'text' || item.type === 'tel') {
                                item.value = '';
                            }
                        })
                        // document.querySelector('.feedback').disabled = true;
                        modalWins();
                        return;
                    }
                });
                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');
                request.send(JSON.stringify(body));
            });
        }
    }
    form();
}
// sendingData();