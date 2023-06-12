const fs = require('fs');
const path = require('path');
const SpotifyWebApi = require('spotify-web-api-node');

// Establece tus credenciales de cliente
const clientId = '8ed2a31d992242d9b439e242e2fe3dea';
const clientSecret = '134e538c204c473bb89b127c9954328b';

// Crea una instancia de la API de Spotify
const spotifyApi = new SpotifyWebApi({ clientId, clientSecret });

// Obtén el token de acceso
spotifyApi.clientCredentialsGrant()
  .then(data => {
    spotifyApi.setAccessToken(data.body['access_token']);

    // ID de la playlist que deseas obtener
    const playlistId = '3qU3DSZTblI4ZxAWC5tOZU';

    // Obtén la información de la playlist
    return getAllPlaylistTracks(playlistId);
  })
  .then(songUrls => {
    const textContent = songUrls.join('\n');

    // Ruta del archivo de texto
    const filePath = path.join('D:', 'canciones.txt');

    // Escribe el contenido en un archivo de texto
    fs.writeFile(filePath, textContent, err => {
      if (err) {
        console.error('Error al escribir el archivo:', err);
      } else {
        const urlCount = songUrls.length;
        const message = `Archivo de texto generado exitosamente. Se agregaron ${urlCount} URLs al documento.`;
        console.log(message);
      }
    });
  })
  .catch(err => {
    console.error('Error:', err);
  });

// Función auxiliar para obtener todas las canciones de una lista de reproducción
function getAllPlaylistTracks(playlistId) {
  const songUrls = [];
  let offset = 0;

  // Función recursiva para obtener los conjuntos de canciones paginados
  function getPlaylistTracksRecursive() {
    return spotifyApi.getPlaylistTracks(playlistId, { offset })
      .then(data => {
        const tracks = data.body.items;

        tracks.forEach(track => {
          const songUrl = track.track.external_urls.spotify;
          songUrls.push(songUrl);
        });

        if (data.body.next) {
          offset += 100;
          return getPlaylistTracksRecursive();
        } else {
          return songUrls;
        }
      });
  }

  return getPlaylistTracksRecursive();
}
