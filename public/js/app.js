function searchTitle() {
  const searchBar = document.getElementById("search");
  const titleList = document.querySelectorAll(".main__card");

  searchBar.addEventListener("keyup", (e) => {
    const filter = e.target.value.toLowerCase();

    titleList.forEach((title) => {
      if (title.textContent.includes(filter)) {
        title.style.display = "block";
      } else {
        title.style.display = "none";
      }
    });
  });
}

function filterTitle() {
  const buttons = document.querySelectorAll(".header__form-btn");
  const titleList = document.querySelectorAll(".main__card");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventdefault();
      const filter = e.target.dataset.filter;

      titleList.forEach((title) => {
        if (filter === "all") {
          title.style.display = "block";
        } else {
          if (title.classList.contains(filter)) {
            title.style.display = "block";
          } else {
            title.style.display = "none";
          }
        }
      });
    });
  });
}

searchTitle();
filterTitle();
