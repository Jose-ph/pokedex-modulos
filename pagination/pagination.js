export function createPagination(
  numberOfPages,
  callBackUpdate,
  callBackHandler,
  callBackSelectedPage
) {
  let paginationContainer = document.querySelector(".pagination");
  let offset = 0;

  let previousButton = document.createElement("li");
  previousButton.innerHTML = `  <li class="page-item handler-previous" id="previous" ><a class="page-link" href="#">Previous</a></li>`;

  let nextButton = document.createElement("li");
  nextButton.innerHTML = `<li class="page-item handler-next" id="next" ><a class="page-link" href="#">Next</a></li>`;
  paginationContainer.appendChild(previousButton);

  previousButton.onclick = function (e) {
    callBackHandler(e, callBackUpdate);
  };
  nextButton.onclick = function (e) {
    callBackHandler(e, callBackUpdate);
  };

  for (let i = 0; i < numberOfPages; i++) {
    let newPage = document.createElement("li");

    newPage.setAttribute("data-offset", `${offset}`);
    newPage.setAttribute("class", "page-item order");

    let newPageLink = document.createElement("a");
    newPageLink.setAttribute("class", "page-link");
    newPageLink.setAttribute("href", "#");
    newPageLink.textContent = `${i}`;

    newPage.appendChild(newPageLink);
    paginationContainer.appendChild(newPage);

    offset = offset + 20;

    newPage.onclick = function (e) {
      let offset = this.dataset.offset;

      callBackUpdate(offset, e);
      callBackSelectedPage(e);
    };
  }
  paginationContainer.appendChild(nextButton);
  let pages = document.querySelectorAll(".order");
  pages[0].classList.add("active");
}

export function handlePagination(event, callBackUpdate) {
  let element = event.target;

  let pages = document.querySelectorAll(".order");
  let selectedPage;
  let offset;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains("active")) {
      selectedPage = pages[i];
    }
  }

  offset = Number(selectedPage.dataset.offset);

  if (element.textContent === "Previous") {
    if (offset - 20 >= 0) {
      callBackUpdate(offset - 20);

      const newSelectedPage = Array.from(pages).filter(
        (page) => page.dataset.offset == offset - 20
      );

      newSelectedPage[0].classList.add("active");

      selectedPage.classList.remove("active");
    } else {
      alert("no previous page");
    }
  }

  if (element.textContent === "Next") {
    if (offset + 20 < Number(pages.length) * 20) {
      callBackUpdate(offset + 20);
      const newSelectedPage = Array.from(pages).filter(
        (page) => page.dataset.offset == offset + 20
      );

      newSelectedPage[0].classList.add("active");

      selectedPage.classList.remove("active");
    } else {
      alert("no more pages!");
    }
  }
}
export function handleSelectedPage(e) {
  let pages = document.querySelectorAll(".order");

  let selectedPages = [];

  let selectedPage = e.target.parentNode;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains("active")) {
      selectedPages.push(pages[i]);
      pages[i].classList.remove("active");
    }
  }
  selectedPage.classList.add("active");
}
