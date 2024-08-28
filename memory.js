const addMemoryButton = document.getElementById('btn1');
const popupForm = document.getElementById('popupForm');
const closePopup = document.querySelector('.close');
const memoryForm = document.getElementById('memoryForm');
const gallery = document.querySelector('.gallery div');

// Show the pop-up form when the "Add Memory" button is clicked
addMemoryButton.addEventListener('click', () => {
    popupForm.style.display = 'block';
});

// Close the pop-up form when the close button is clicked
closePopup.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

// Close the pop-up form if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});

// Handle form submission
memoryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const imageInput = document.getElementById('image');
    const captionInput = document.getElementById('caption');

    const reader = new FileReader();

    reader.onload = function(event) {
        const imgSrc = event.target.result;
        const captionText = captionInput.value;

        // Create figure element
        const figure = document.createElement('figure');

        // Create image element
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = captionText;

        // Create caption element
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = captionText;

        // Append img and figcaption to figure
        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Append figure to gallery
        gallery.appendChild(figure);

        // Close the popup
        popupForm.style.display = 'none';

        // Reset form
        memoryForm.reset();
    };

    reader.readAsDataURL(imageInput.files[0]);
});
