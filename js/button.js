


const button = document.querySelector('#download');  

button.addEventListener('click', function(e) {  
    const wave = document.createElement('div');  
    const rect = button.getBoundingClientRect();  
    const size = Math.max(rect.width, rect.height);  
    const x = e.clientX - rect.left - size / 2;  
    const y = e.clientY - rect.top - size / 2;  

    wave.style.width = wave.style.height = `${size}px`;  
    wave.style.left = `${x}px`;  
    wave.style.top = `${y}px`;  
    wave.classList.add('wave');  

    button.appendChild(wave);  

    setTimeout(() => {  
        wave.remove();  
    }, 500);  
}); 

button.addEventListener('click', () => {  
    button.remove();
    window.print();  
});  