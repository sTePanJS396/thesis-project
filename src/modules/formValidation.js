// Валидация данных
export const formValidation = () => {
    document.querySelectorAll('.form-control').forEach(item => item.setAttribute('required', 'required'))
    const userForm = document.querySelector('#form');
    userForm.addEventListener('input', (event) => {
        if (event.target.type === 'text') {
            event.target.value = event.target.value.replace(/[^а-яА-Я]/ig, '');
        }
    });

    userForm.addEventListener('input', (event) => {
        event.target.setAttribute('required', 'required')
        if (event.target.type === 'tel') {
            event.target.value = event.target.value.replace(/[^[0-9+]/ig, '');
            event.target.value = event.target.value.replace(/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im, '');
            if (!event.target.value) {
                alert('Ошибка ввода данных!')
            }
        }
    });

    document.getElementById('formName').addEventListener('blur', (event) => {
        event.target.value = event.target.value.trim();
        if (event.target.type === 'text') {
            let newStr;

            const firstLiterals = (str) => {
                if (!str) return str;

                return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
            }
            newStr = firstLiterals(event.target.value);
            event.target.value = newStr;
        }
    });
}
// formValidation();