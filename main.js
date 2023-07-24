// Demo playlists and songs
const playlists = [
    { 
        title: 'Spotify Playlists',
        songs: [
            { 
                url: './songs/s1.mp3', 
                image: 'https://drive.google.com/uc?export=view&id=1kAy6tywT2DuKqWOPdd1ohAhlluZKAnzC', 
                title: "Today's Top Hits", 
                description: 'Kick back to new and recent top hits'
            }, 
            { 
                url: './songs/s1.mp3', 
                image: 'https://i.scdn.co/image/ab67706c0000da84c06bf2f63b986a90b48bcd7c', 
                title: "Today's Top RapCover ",  
                description: 'Travis Scott is on top of the Hottest 50!'
            }, 
            { 
                url: './songs/s1.mp3', 
                image: 'https://i.scdn.co/image/ab67706f00000002fb216d1ce13d5a4952a6180e',
                title: "Chilled Hits", 
                description: 'Kick back to the best new and recent chill hits.'
            }, 
            { 
                url: './songs/S2.mp3', 
                image: 'https://i.scdn.co/image/ab67616d0000b273765349e4f53262136884cddc',
                title: "Rock Hits", 
                description: 'Rock legends & epic songs that continue to inspire generations'
            }, 
            { 
                url: './songs/s4.mp3', 
                image: 'https://i.scdn.co/image/ab67706c0000da84c58636fc206c772c64a7e56c',
                title: "Sad Hits", 
                description: 'sad mix of 75 favorites from the last few years!.'
            }, 
            { 
                url: './songs/s4.mp3', 
                image: 'https://i.scdn.co/image/ab67616d0000b273943b0d79265ce1ed4f013e1f',
                title: "Dance Hits", 
                description: 'Kick back to the best new and recent dance hits.'
            }, 
            // add more songs as needed
        ]
    },
    {
    title: 'Top Hits',
    songs: [
        { 
            url: './songs/s1.mp3', 
            image: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg', 
            title: " Top Songs Global Hits", 
            description: 'Weekly Music Charts'
        }, 
        { 
            url: './songs/s1.mp3', 
            image: 'https://i.scdn.co/image/ab67706f00000002b55b6074da1d43715fc16d6d',
            title: "Happy Hits", 
            description: 'Kick back to the best new and recent hits.'
        }, 
        { 
            url: './songs/s4.mp3', 
            image: 'https://play-lh.googleusercontent.com/wMOHAN9fSK1m_VxbN1qqsG0RMoaJr28qOjQgekjLWozcjXfWmSX76Odec6Jbe1B6mQ',
            title: "Mega Hits", 
            description: 'A mega mix of 75 favorites from the last few years!.'
        }, 
        { 
            url: './songs/s5.mp3', 
            image: 'https://i.scdn.co/image/ab67706c0000da8475745bb99ff4085a0a54dd20',
            title: "Hipop Hits", 
            description: 'Kick back to the best new and recent hits.'
        }, 
        { 
            url: './songs/s7.mp3', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToMMH05vtYsgDP8W8mjhSA2JfGfvoJy4ljQ&usqp=CAU',
            title: " Hits du Moment", 
            description: 'Kick back to the best new and recent hits.'
        }, 
        { 
            url: './songs/s6.mp3', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-aiOyLZ1a9DfYjgEm9Yb_0alGogx7c2Sl4w&usqp=CAU',
            title: "Hot Hits", 
            description: 'Kick back to the best new and recent hot hits.'
        }, 
        // add more songs as needed
    ]
    },
    {
        title: 'Sound of India',
        songs: [
            { 
                url: './songs/s1.mp3', 
                image: 'https://i.scdn.co/image/ab67706c0000da84ca51e0b1b2526295415ea0f7', 
                title: "Sound of Kolkata", 
                description: 'Weekly Music Charts'
            }, 
            { 
                url: './songs/s1.mp3', 
                image: 'https://i.scdn.co/image/ab67706c0000da84d8f01d1da427744c3c74172d',
                title: "Sound of Karnataka", 
                description: 'Weekly Music Charts'
            }, 
            { 
                url: './songs/s8.mp3', 
                image: 'https://i.scdn.co/image/ab67706c0000da84735ff3d91fd7bcc7e854364d',
                title: "Sound of Chennai", 
                description: 'Weekly Music Charts'
            }, 
            { 
                url: './songs/s7.mp3', 
                image: 'https://i.scdn.co/image/ab67706c0000da84fdad3548d41af616a7e8d64c',
                title: "Sound of Delhi", 
                description: 'Weekly Music Charts'
            }, 
            { 
                url: './songs/s7.mp3', 
                image: 'https://i.scdn.co/image/ab67706c0000da8436ea3a15c04a4b0821958ceb',
                title: "Sound of Mumbai", 
                description: 'Weekly Music Charts'
            }, 
            { 
                url: './songs/s9.mp3', 
                image: 'https://i.scdn.co/image/ab67706c0000da84f3b38c327eb3412669e58d96',
                title: "Sound of Hyderabad", 
                description: 'Weekly Music Charts'
            }, 
            // add more songs as needed
        ]
        },

        {
            title: 'Focus',
            songs: [
                { 
                    url: './songs/s1.mp3', 
                    image: 'https://seeded-session-images.scdn.co/v1/img/artist/1xsOo7CjpdD2cogfGH03b8/de', 
                    title: "Meditation Focus ", 
                    description: 'Keep calm and focus with ambient and post-rock music.'
                }, 
                { 
                    url: './songs/s1.mp3', 
                    image: 'https://lite-images-i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519',
                    title: "Deep focus", 
                    description: 'Kick back to the best new and recent hits.'
                }, 
                { 
                    url: './songs/s7.mp3', 
                    image: 'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc',
                    title: "focus flow ", 
                    description: 'Keep calm and focus with ambient and post-rock music.'
                }, 
                { 
                    url: './songs/s8.mp3', 
                    image: 'https://i.scdn.co/image/ab67706f0000000259a25aac15e7c96bc526f9c8',
                    title: "Rhythm Focus", 
                    description: 'Kick back to the best new and recent chill hits.'
                }, 
                { 
                    url: './songs/s8.mp3', 
                    image: 'https://i.scdn.co/image/ab67706f000000025e28bc85f43839494d19bfc6',
                    title: "Blues Focus", 
                    description: 'Keep calm and focus with ambient and post-rock music.'
                }, 
                { 
                    url: './songs/s9.mp3', 
                    image: 'https://illustrarch.com/wp-content/uploads/2021/10/ab67706f00000003b862e62c866401788ad3ad83.jpg',
                    title: "Electronic Focus", 
                    description: 'Kick back to the best new and recent chill hits.'
                }, 
                { 
                    url: './songs/s10.mp3', 
                    image: 'https://i.scdn.co/image/ab67706f000000025a6fe5537cca0bb20e6abc5f',
                    title: "Creative Focus", 
                    description: 'Keep calm and focus with ambient and post-rock music.'
                }, 
                { 
                    url: './songs/s5.mp3', 
                    image: 'https://i.scdn.co/image/ab67706c0000da84c0e23448a6a98cd2bc678bdb',
                    title: "Lofi Focus", 
                    description: 'Keep calm and focus with ambient and post-rock music.'
                }, 
                // add more songs as needed
            ]
            },                        

                               
                                        // add more songs as needed
                                   
    // add more playlists as needed
];

// Get the playlists container element
const playlistsContainer = document.getElementById('playlistsContainer');

// Function to create a new item
function createItem(song, playlistIndex, songIndex) {
    const item = document.createElement('div');
    item.className = 'item';

    item.innerHTML = `
        <img src="${song.image}">
        <div class="play" onclick="playSongFromThumbnail(${playlistIndex}, ${songIndex})">
            <span class="fa fa-play"></span>
        </div>
        <h4>${song.title}</h4>
        <p>${song.description}</p>
    `;

    return item;
}

// Function to create a new playlist
function createPlaylist(playlist, playlistIndex) {
    const playlistElement = document.createElement('div');
    playlistElement.className = 'playlists';

    const title = document.createElement('h2');
    title.textContent = playlist.title;
    playlistElement.appendChild(title);

    const list = document.createElement('div');
    list.className = 'list';
    playlistElement.appendChild(list);

    playlist.songs.forEach((song, songIndex) => {
        const item = createItem(song, playlistIndex, songIndex);
        list.appendChild(item);
    });

    return playlistElement;
}

// Add playlists to the container
playlists.forEach((playlist, playlistIndex) => {
    const playlistElement = createPlaylist(playlist, playlistIndex);
    playlistsContainer.appendChild(playlistElement);
});

// Create an audio element
const audio = new Audio();

// Function to play a song
function playSong(song) {
    audio.src = song.url;
    audio.play();
}

// Function to play a song from the thumbnail
function playSongFromThumbnail(playlistIndex, songIndex) {
    playSong(playlists[playlistIndex].songs[songIndex]);
}
