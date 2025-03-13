document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.blog-title').forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
        });
    });
});
