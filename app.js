const posts = [
  {
    username: "teacher",
    image: "1.jpg",
    caption: "Programmirleme! elbetde biz bilen öwren🤖📘",
  },
  {
    username: "code_",
    image: "3.jpg",
    caption: "Kodlamak bir sungatdyr 🎨💻",
  },
  {
    username: "digiedu_learning",
    image: "2.png",
    caption: "Programmirle wertual dünýä 🕶️🌐",
  },
  {
    username: "mobile_academy",
    image: "4.jpg",
    caption: "Tehnologiýany ulanmagy başar 📱📚",
  }
];

const postFeed = document.getElementById("post-feed");

posts.forEach(post => {
  const postCard = document.createElement("article");
  postCard.className = "post-card";

  postCard.innerHTML = `
    <div class="post-header">${post.username}</div>
    <img src="${post.image}" alt="${post.caption}" class="post-image" />
    <div class="post-caption">${post.caption}</div>
  `;

  postFeed.appendChild(postCard);
});
