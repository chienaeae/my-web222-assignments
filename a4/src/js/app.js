/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Chia-Yu Chien
 *      Student ID: 157049222
 *      Date:       2024/06/14
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

let chosenArtist = artists.length > 1 ? artists[0] : null;

function renderArtistsBar() {
  const menuElement = document.getElementById("menu");

  // clear menu
  menuElement.innerHTML = "";

  // render artists buttons
  artists.forEach((artist, i, self) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = artist.name;
    if (artist.artistId === chosenArtist.artistId) {
      buttonElement.disabled = true;
    } else {
      buttonElement.disabled = false;
      buttonElement.addEventListener("click", () => {
        chosenArtist = self[i];
        if (chosenArtist) {
          renderArtistsBar();
          renderSongTable();
        }
      });
    }

    menuElement.appendChild(buttonElement);
  });
}

function renderSongTable() {
  // render chosen artist
  const chosenArtistElement = document.getElementById("selected-artist");
  const linksHTML = chosenArtist.urls
    .map((url) => `<a href="${url.url}">${url.name}</a>`)
    .join(", ");
  chosenArtistElement.innerHTML = `${chosenArtist.name} (${linksHTML})`;
  const songsElement = document.getElementById("songs");
  // clear song table
  songsElement.innerHTML = "";

  // render song table
  const filteredSongs = songs.filter(
    (song) => song.artistId === chosenArtist.artistId && !song.explicit
  );
  filteredSongs.forEach((song) => {
    const trElement = document.createElement("tr");

    // render song name
    const anchor = document.createElement("a");
    anchor.href = song.url;
    anchor.innerText = song.title;
    const songNameTdElement = document.createElement("td");
    songNameTdElement.appendChild(anchor);
    trElement.appendChild(songNameTdElement);

    // render year recorded
    const yearTdElement = document.createElement("td");
    yearTdElement.textContent = song.year;
    trElement.appendChild(yearTdElement);

    // render duration
    const durationTdElement = document.createElement("td");
    const min = parseInt(song.duration / 60);
    const sec = song.duration % 60;
    durationTdElement.textContent = `${min}:${sec > 9 ? sec : `0${sec}`}`;
    trElement.appendChild(durationTdElement);

    songsElement.appendChild(trElement);
  });
}

if (chosenArtist) {
  renderArtistsBar();
  renderSongTable();
}
