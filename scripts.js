// Function to open the modal and show the image
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");

    // Show modal and set image source
    modal.classList.add('show');  // Show modal with fade-in effect
    modalImage.src = imageSrc;   // Set the image source to the clicked image
}

// Function to close the modal when the close button (X) is clicked
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove('show');  // Remove the 'show' class to fade it out
}

// Optional: close the modal if the user clicks anywhere outside the image
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}
