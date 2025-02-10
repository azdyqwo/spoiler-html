const toggleButtons = document.querySelectorAll('.toggleButton');
const contents = document.querySelectorAll('.content');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const content = contents[index];
        const currentDisplay = window.getComputedStyle(content).display;
        if (currentDisplay === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});