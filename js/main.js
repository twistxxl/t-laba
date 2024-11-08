

document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.text');


    textElements.forEach(el => {
        const key = el.getAttribute('data-key');
        const savedData = localStorage.getItem(key);

        if (savedData) {
            el.textContent = savedData;
        } else {

            localStorage.setItem(key, el.textContent);
        }


        el.addEventListener('dblclick', () => {
            const currentText = el.textContent;
            const container = document.createElement('div');
            container.id = 'containerForInput';

            //create input 
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.style.width = '100%';
            container.appendChild(input);
            //clear 
            el.innerHTML = '';
            el.appendChild(container);
            input.focus();

            //saved 
            input.addEventListener('blur', save);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    save();
                }
            });

            function save() {
                const newData = input.value.trim();
                if (newData) {
                    el.textContent = newData;
                    localStorage.setItem(key, newData);
                } else {
                    el.textContent = currentText;
                }
            }
        });
    });
});