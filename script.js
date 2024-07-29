document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const videoContainers = document.querySelectorAll('.video-container');
  const noResultsMessage = document.createElement('p');

  // Create a no results message element
  noResultsMessage.id = 'no-results';
  noResultsMessage.style.display = 'none';
  noResultsMessage.style.color = 'red'; // Optional: style the message
  noResultsMessage.textContent = 'No videos found';
  document.querySelector('.videos').appendChild(noResultsMessage);

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase().trim();
    let found = false;

    videoContainers.forEach(container => {
      const title = container.querySelector('.video-title').textContent.toLowerCase();
      const channelName = container.querySelector('.video-channel-name').textContent.toLowerCase();

      // Check if either title or channel name matches the query
      if (title.includes(query) || channelName.includes(query)) {
        container.style.display = 'block'; // Show video container
        found = true;
      } else {
        container.style.display = 'none'; // Hide video container
      }
    });

    // Show or hide the no results message
    noResultsMessage.style.display = found ? 'none' : 'block';
  });
});
