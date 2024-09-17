// Array to hold news items
let newsArray = [
    [
      "id: 1",
      "title: Election Results",
      "content: Newly elected minister...",
    ],
    ["id: 2", "title: Sporting Success", "content: World Cup winners..."],
    [
      "id: 3",
      "title: Tornado Warning",
      "content: Residents should prepare...",
    ],
  ];

  // Function to update the news array with the new item from the input field
  function addNews() {
    const newsInput = document.getElementById("news-input").value;
    if (newsInput.trim() !== "") {
      // Add the news to the array
      newsArray.push(newsInput);
      // Clear the input field after adding
      document.getElementById("news-input").value = "";
    }
  }

  // Function to update the Bootstrap cards dynamically based on a starting index
  function updateCards() {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = ""; // Clear the current cards

    // Get the starting index from the input field
    const startIndex =
      parseInt(document.getElementById("start-index-input").value) || 0;

    // Ensure the index is within the bounds of the array
    const adjustedStartIndex = Math.max(
      0,
      Math.min(startIndex, newsArray.length - 1)
    );

    // Get the news items from the starting index
    const selectedNews = newsArray.slice(
      adjustedStartIndex,
      adjustedStartIndex + 3
    );

    selectedNews.forEach((newsItem, index) => {
        const cardHTML = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">News ${adjustedStartIndex + index + 1}</h5>
                        <p class="card-text">${newsItem}</p>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHTML;
    });
}

  // Set an interval to automatically update the cards every 5 seconds
  setInterval(updateCards, 5000);

  // Initial card update when the page loads
  updateCards();