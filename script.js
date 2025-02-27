let thumbnails = document.querySelectorAll(".thumbnail")
let mainImage = document.getElementById("Main-Keyblade")

for(let i = 0; < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function) {
        mainImage.src = this.src
    }
}