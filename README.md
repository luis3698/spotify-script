# Spotify Playlist URL Extractor 🎵📃

This is a Node.js script that extracts the URLs of songs from a Spotify playlist and saves them to a text file. It utilizes the Spotify Web API and the `spotify-web-api-node` package to authenticate and interact with the Spotify platform.

## Prerequisites 📋

Before running the script, make sure you have the following:

- Node.js installed on your machine 🖥️
- A Spotify developer account 🎵
- Spotify Web API credentials (client ID and client secret) 🔑

## Installation 🔧

1. Clone this repository or download the script file. 📂

2. Open a terminal and navigate to the project directory.

3. Install the required dependencies by running the following command: ⌨️

   ```bash
   npm install spotify-web-api-node
   ```

## Usage 🚀

1. Obtain your Spotify client credentials by following these steps:

   - Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and log in with your Spotify account.
   - Create a new application by clicking on the "Create an App" button.
   - Fill in the necessary information and submit the form to create your application.
   - Once your application is created, you will see your client ID and client secret on the application's dashboard. Replace the placeholders in the script with your actual credentials: 🔑

     ```javascript
     const clientId = 'YOUR_CLIENT_ID';
     const clientSecret = 'YOUR_CLIENT_SECRET';
     ```

2. Determine the playlist ID of the playlist you want to extract URLs from:

   - Open Spotify and navigate to the desired playlist.
   - Click on the three dots (...) next to the playlist name and select "Share" from the context menu.
   - Choose the "Copy Spotify URI" option.
   - Paste the URI into a text editor, and extract the playlist ID from the URI. It should look something like this: `spotify:playlist:YOUR_PLAYLIST_ID`. Replace the placeholder in the script with your actual playlist ID: 🎵

     ```javascript
     const playlistId = 'YOUR_PLAYLIST_ID';
     ```

3. Run the script using the following command: ⚙️

   ```bash
   node script.js
   ```

   The script will authenticate with Spotify, retrieve the playlist tracks, extract the song URLs, and save them to a text file named `canciones.txt` in the specified directory (`D:` in this case).

4. After the script finishes executing, you will see a success message with the total number of URLs extracted. ✅

## Notes 📝

- The Spotify API has a default limit of 100 items per page for playlists. If your playlist has more than 100 songs, the script uses pagination to retrieve all the songs.
- Make sure you have write permissions for the specified directory to save the text file successfully.

Feel free to modify the script according to your needs. For more information, refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/). 🎧🎶
