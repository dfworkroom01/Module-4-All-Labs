const artist = [
  [`name: Van Gogh`],
  [
    "portfolio"[
      (`title: portrait`,
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image")
    ][
      (`title: sky`,
      "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg")
    ],
  ],
];

function addCard() {
  let list = document.getElementById("myList");
  artist.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;

    list.appendChild(li);
  });
}

addCard(artist[0]);

function addImage() {
  let image = document.getElementById("image");
  artist.forEach((URL) => {
    let imag = document.createElement("image");
    imag.innerHTML = URL;
    image.appendChild(imag);
  });
}

addImage(artist[1][0])