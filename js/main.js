



document.addEventListener('DOMContentLoaded', () => {  
    const textElements = document.querySelectorAll('.text'); 



    textElements.forEach(el => {  
        
        const key = el.getAttribute('data-key');  
        const savedData = localStorage.getItem(key);  
        if (savedData) {  
            el.textContent = savedData;  
        }  

        //change text  
        el.addEventListener('dblclick', () => {  
            const currentText = el.textContent;  
            const input = document.createElement('input');  
            input.type = 'text';  
            input.value = currentText;  
            input.style.width = '100%';  

            //text ro input
            el.innerHTML = '';  
            el.appendChild(input);  
            input.focus();  

            //unfocus or enter to save  
            input.addEventListener('blur', save);  
            input.addEventListener('keypress', (e) => {  
                if (e.key === 'Enter') {  
                    save();  
                }  
            });  

            function save() {  
                const newData = input.value.trim();  
                el.textContent = newData;  

                //save to local storage
                localStorage.setItem(key, newData);  
            }  
        });  
    });  
});  

