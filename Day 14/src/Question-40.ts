// Question 40: Album: Create objects for music albums.


//* Define a TypeScript interface for an album
type Album = {
    artist: string;
    title: string;
    tracks?: number; 
}

//* Function to create an album object
function make_album(artist: string, title: string, tracks?: number) {
    const album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

//* Creating objects representing different albums
console.log(make_album("Artist1", "Album1", 43));
console.log(make_album("Artist2", "Album2"));
console.log(make_album("Artist3", "Album3", 12));

