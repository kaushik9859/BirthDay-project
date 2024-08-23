// Get the elements by their IDs
const nameInput = document.getElementById("102");
const messageInput = document.getElementById("101");
const submitButton = document.getElementById("submit");
const wishContainer = document.querySelector(".wish");

// Add an event listener to the submit button
submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the values from the input fields
    const name = nameInput.value;
    const message = messageInput.value;

    // Create a new div element for the wish
    const wishDiv = document.createElement("div");

    // Set the inner HTML of the new div with the input values
    wishDiv.innerHTML = `
        <img src="wish1.jpg">
        <h5>${name}!<br><p>${message}</p></h5>
    `;

    // Apply the CSS styles to match other divs in the wish class
    wishDiv.style.display = "flex";
    wishDiv.style.alignItems = "center";
    wishDiv.style.marginBottom = "15px";
    wishDiv.style.marginLeft = "100px";

    // Apply styles to the image within the new div
    const img = wishDiv.querySelector("img");
    img.style.height = "60px";
    img.style.width = "60px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "20px";

    // Apply styles to the h5 element within the new div
    const h5 = wishDiv.querySelector("h5");
    h5.style.marginLeft = "10px";
    h5.style.color = "#f8b400"; // Festive color for wishes

    // Append the new wish div to the wish container
    wishContainer.appendChild(wishDiv);

    // Clear the input fields after submission
    nameInput.value = "";
    messageInput.value = "";
});
