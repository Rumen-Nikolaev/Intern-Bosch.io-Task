let infoContainer = document.querySelector(".additional-info");
let infoBox = infoContainer.querySelectorAll(".info");

document.querySelectorAll(".container-products .box-container")
  .forEach((product) => {
    product.onclick = () => {
      infoContainer.style.display = "flex";
      let name = product.getAttribute("data-name");
      infoBox.forEach((info) => {
        let target = info.getAttribute("data-target");
        if (name == target) {
          info.classList.add("active");
        }
      });
    };
  });

infoBox.forEach(close => {
  close.querySelector(".mark-x").onclick = () => {
    close.classList.remove("active");
    infoContainer.style.display = "none";
  };
});

/*let preveiwContainer = document.querySelector(".additional-info");
let previewBox = preveiwContainer.querySelectorAll(".info");

document.querySelectorAll(".container-products .box-container").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".mark-x").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

*/
