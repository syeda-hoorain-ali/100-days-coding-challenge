// Question 40: Album: Create objects for music albums.
//* Function to create an album object
function make_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
//* Creating objects representing different albums
console.log(make_album("Artist1", "Album1", 43));
console.log(make_album("Artist2", "Album2"));
console.log(make_album("Artist3", "Album3", 12));
export {};
