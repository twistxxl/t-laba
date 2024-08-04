

const text  = document.getElementById('email');

const textStyle = {  
    color: '#28D979',  
    transition: '0.5s ease',  
    marginLeft: '10px',  
    transform: 'scale(1.1)',  
};  

text.addEventListener('click', (e) => {
    
    if(e.ctrlKey) {
        navigator.clipboard.writeText(text.textContent);
        
        text.textContent = 'Copied!';
        
        Object.assign(text.style, textStyle);
        
        setTimeout(() => {
            text.textContent = localStorage.getItem('mainEmail');
            text.style.color = 'white';
            text.style.transform = 'scale(1)';
            text.style.marginLeft = '0';
        }, 1000);
    }
    
});
