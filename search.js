// Get the search input field
const searchInput = document.querySelector('.search-field input');
// Add an event listener to the search input field
searchInput.addEventListener('keyup', searchPlaylists);
function searchPlaylists() {
    // Get the user's search query
    const query = searchInput.value.toLowerCase();

    // Get all the playlists
    const playlists = document.querySelectorAll('.playlists');

    // Loop through all the playlists
    playlists.forEach(playlist => {
        // Get the playlist title
        const title = playlist.querySelector('h2').textContent.toLowerCase();

        // Get all the songs in the playlist
        const songs = playlist.querySelectorAll('.item h4');

        // Check if any song title includes the search query
        const songMatches = Array.from(songs).some(song => song.textContent.toLowerCase().includes(query));

        // If the playlist title or any song title includes the search query, show the playlist, otherwise hide it
        if (title.includes(query) || songMatches) {
            playlist.style.display = '';
        } else {
            playlist.style.display = 'none';
        }
    });
}
