

listenForLikes();

const listenForLikes = () => {
  const likes = document.querySelectorAll(".like");
  likes.forEach(like => {
   like.addEventListener("click", (event) => {
     event.target.classList.toggle("like-no");
     event.target.classList.toggle("like-yes");
     if (event.target.classList.contains("like-yes")) {
       console.log("✅💾 Saving Favorite...");
       getFaveData(event.target);
     } else {
       console.log("❌ Removing Favorite...");
       getFaveData(party.id);
     }
   })
  })
}

const getFaveData = (elem) => {
  const parent = elem.parentElement;
  const img = parent.querySelector("img").src;
  const name = parent.querySelector("h2").textContent;
  const email = parent.querySelector("p").textContent;
  const [firstName, lastName] = name.split(" ");
  const faveObj = { img, firstName, lastName, email };
  console.log(faveObj);
}


document.getElementById('btn fav btn').addEventListener('click', listenForLikes);
