# Spotify Playlist URL Extractor

This is a Node.js script that extracts the URLs of songs from a Spotify playlist and saves them to a text file. It utilizes the Spotify Web API and the `spotify-web-api-node` package to authenticate and interact with the Spotify platform.

## Prerequisites

Before running the script, make sure you have the following:

- Node.js installed on your machine
- A Spotify developer account
- Spotify Web API credentials (client ID and client secret)

## Installation

1. Clone this repository or download the script file.

2. Open a terminal and navigate to the project directory.

3. Install the required dependencies by running the following command:

   ```bash
   npm install spotify-web-api-node
   ```

## Usage

1. Set your Spotify client credentials by replacing the placeholders in the script:

   ```javascript
   const clientId = 'YOUR_CLIENT_ID';
   const clientSecret = 'YOUR_CLIENT_SECRET';
   ```

2. Set the playlist ID of the playlist you want to extract URLs from:

   ```javascript
   const playlistId = 'YOUR_PLAYLIST_ID';
   ```

3. Run the script using the following command:

   ```bash
   node script.js
   ```

   The script will authenticate with Spotify, retrieve the playlist tracks, extract the song URLs, and save them to a text file named `canciones.txt` in the specified directory (`D:` in this case).

4. After the script finishes executing, you will see a success message with the total number of URLs extracted.

## Notes

- The Spotify API has a default limit of 100 items per page for playlists. If your playlist has more than 100 songs, the script uses pagination to retrieve all the songs.
- Make sure you have write permissions for the specified directory to save the text file successfully.

Feel free to modify the script according to your needs. For more information, refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/).
