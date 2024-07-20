/**
 * WEB222 – Assignment 06
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

function newSongInput() {
  const newInput = document.createElement("input");
  newInput.type = "url";
  newInput.name = "songUrls";
  newInput.required = true;
  return newInput;
}

document.addEventListener("DOMContentLoaded", function () {
  const songUrlsContainer = document.getElementById("songUrlContainer");
  const addMoreButton = document.getElementById("add-song");
  const cancelButton = document.getElementById("cancel-btn");

  addMoreButton.addEventListener("click", () => {
    const input = newSongInput();
    songUrlsContainer.appendChild(input);
  });

  cancelButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
