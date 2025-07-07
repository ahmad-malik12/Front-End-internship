////////////         QUESTION 1.            /////////////////

function fetchAlbums(){
  return fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums =>{
      console.log(albums);
      const filterAlbums = albums.filter(album =>album.title);
      console.log(filterAlbums);
      const simplifiedAlbums = filterAlbums.map(album => ({
        id: album.id,
        title: album.title
      }));
      console.log(simplifiedAlbums);
      return simplifiedAlbums;
    })
    .catch(error => {
      console.error('Error fetching albums:', error);
      return []; 
    });
  }
fetchAlbums().then(result => {
  console.log('Simplified Albums:', result);
});
