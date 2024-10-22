import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImages } from "./js/pixabay-api";
import { showImages } from "./js/render-functions";

const formElem = document.querySelector("form");

formElem.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear the gallery
    document.querySelector(".images-list").innerHTML = "";

    const form = event.target;
    const searchQuery = form.elements.query.value;
    // Show loading message
    const loader = document.querySelector(".loader");
    loader.classList.remove("hidden");
    searchImages(searchQuery)
        .then((images) => {
            loader.classList.add("hidden");
            if (!images.hits.length) {
                iziToast.error({
                    class: "error-alert",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    messageColor: "white",
                    position: "topRight",
                    maxWidth: 432
                });
            }
            else {
                showImages(images);
            }
        })
        .catch((error) => console.log(error));
});