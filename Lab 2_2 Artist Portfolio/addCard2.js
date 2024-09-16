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
  let list2 = document.getElementById("myList");
  artist.forEach((item2) => {
    let li = document.createElement("li");
    li.innerText = item2;

    list2.appendChild(li);
  });
}

addCard(artist[0]);

function addImage() {
  let image2 = document.getElementById("image");
  artist.forEach((URL) => {
    let imag = document.createElement("image");
    imag.innerHTML = URL;
    image2.appendChild(imag);
  });
}

addImage(artist[1][1])