const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');
const element = document.getElementById('element');


const original = element.style.background;

dislikeButton.addEventListener('click', () => {
    element.style.display = 'none';
    const newEl = document.createElement('div');
    newEl.textContent = 'Ты просто не шаришь';
    element.parentNode.appendChild(newEl);
});

likeButton.addEventListener('click', () => {
    element.style.background = 'black';
    setTimeout(() => {
        element.style.background = original;
    }, 3000);
});
