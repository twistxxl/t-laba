



document.addEventListener('DOMContentLoaded', () => {  
    const textElements = document.querySelectorAll('.text'); 


    // Загрузить данные из localStorage  
    textElements.forEach(el => {  
        console.log(el);
        
        const key = el.getAttribute('data-key');  
        const savedData = localStorage.getItem(key);  
        if (savedData) {  
            el.textContent = savedData;  
        }  

        // Добавить обработчик нажатия для редактирования текста  
        el.addEventListener('dblclick', () => {  
            const currentText = el.textContent;  
            const input = document.createElement('input');  
            input.type = 'text';  
            input.value = currentText;  
            input.style.width = '100%';  

            // Замена текста на input  
            el.innerHTML = '';  
            el.appendChild(input);  
            input.focus();  

            // При потере фокуса или нажатии Enter сохранить изменения  
            input.addEventListener('blur', save);  
            input.addEventListener('keypress', (e) => {  
                if (e.key === 'Enter') {  
                    save();  
                }  
            });  

            function save() {  
                const newData = input.value.trim();  
                el.textContent = newData;  

                // Сохранить данные в localStorage  
                localStorage.setItem(key, newData);  
            }  
        });  
    });  
});  

