

document.addEventListener('DOMContentLoaded', () => {  
    const editableElements = document.querySelectorAll('.editable');  
    const imageUploader = document.getElementById('imageUploader');  
    const profileImage = document.getElementById('profileImage');  

    // Загрузить данные из localStorage  
    editableElements.forEach(el => {  
        const key = el.getAttribute('data-key');  
        const savedData = localStorage.getItem(key);  
        if (savedData) {  
            el.textContent = savedData;  
        }  

        // Установка обработчика для редактирования текста  
        el.addEventListener('click', () => {  
            const currentText = el.textContent;  
            const input = document.createElement('input');  
            input.type = 'text';  
            input.value = currentText;  
            input.style.width = '100%';  

            // Замена текста на input  
            el.innerHTML = '';  
            el.appendChild(input);  
            input.focus();  

            // Сохранить изменения  
            input.addEventListener('blur', save);  
            input.addEventListener('keypress', (e) => {  
                if (e.key === 'Enter') {  
                    save();  
                }  
            });  

            function save() {  
                const newData = input.value.trim();  
                el.textContent = newData;  
                localStorage.setItem(key, newData);  
            }  
        });  
    });  

    // Загрузка изображения из localStorage  
    const savedImage = localStorage.getItem('profileImage');  
    if (savedImage) {  
        profileImage.src = savedImage;  
    }  

    // Обработчик загрузки изображения  
    imageUploader.addEventListener('change', (event) => {  
        const file = event.target.files[0];  
        if (file) {  
            const reader = new FileReader();  
            reader.onload = function(e) {  
                const imageData = e.target.result;  
                profileImage.src = imageData;  
                localStorage.setItem('profileImage', imageData);  
            };  
            reader.readAsDataURL(file);  
        }  
    });  
});