// Get all buttons and content sections
const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('.content');
const galleryImages = document.querySelectorAll('.pictures img');
const view = document.getElementById('imageView');
const viewImage = document.getElementById('viewImage');
const closeView = document.getElementById('closeView');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the target section's ID
        const target = button.getAttribute('data-target');

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none'; // Ensure all are hidden
        });

        // Show the target section
        document.getElementById(target).style.display = 'block';

        buttons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
    });
});

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        viewImage.src = image.src;
        view.style.display = 'flex';
    });
});

closeView.addEventListener('click', () => {
    view.style.display = 'none';
});

viewImage.addEventListener('click', () => {
    view.style.display = 'none';
});

view.addEventListener('click', (e) => {
    if (e.target === view) {
        view.style.display = 'none';
    }
});
