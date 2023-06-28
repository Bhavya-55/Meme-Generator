const memeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
const memeImg = document.querySelector(".meme-generator img");

const updateDetails = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `meme by: ${author}`;
};
const generateMeme = () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      const memes = data.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const meme = memes[randomIndex];
      updateDetails(meme.url, meme.name, meme.box_count);
    })
    .catch((error) => {
      console.error(error);
    });
};
memeBtn.addEventListener("click", generateMeme);
