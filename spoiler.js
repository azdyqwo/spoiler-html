const toggleButtons = document.querySelectorAll('.toggleButton');
const contents = document.querySelectorAll('.content');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const content = contents[index];
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});