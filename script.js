// your code here
document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements
  const urlElement = document.getElementById("url");
  const nameInput = document.getElementById("name");
  const yearInput = document.getElementById("year");
  const submitButton = document.getElementById("button");

  // Add click event listener to submit button
  submitButton.addEventListener("click", function () {
    // Get input values
    const name = nameInput.value.trim();
    const year = yearInput.value.trim();

    // Construct URL with query string
    const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
    const updatedUrl = urlElement.textContent.trim() + queryString;

    // Update h3 text with updated URL
    urlElement.textContent = updatedUrl;
  });
});
