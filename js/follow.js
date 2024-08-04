

const likes = document.querySelectorAll('.likePath');  

likes.forEach(like => {  
    like.addEventListener('click', () => {  
        like.classList.toggle('switched');  
    });  
});