var img = document.querySelectorAll("img");

img.forEach((a) => {
  a.addEventListener("mouseover", (a) => {
    a.target.src = `images/${a.target.id}_2.jpg`;
  });

  a.addEventListener("mouseout", (a) => {
    a.target.src = `images/${a.target.id}.jpg`;
  });
});
