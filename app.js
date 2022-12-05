const sectionColumnsWrapper = document.querySelector(".section-cols-wrapper");

const sectionColumns = {};

const generatePanels = function (col) {
  sectionColumnsWrapper.innerHTML = "";

  for (i = 0; i < col; i++) {
    sectionColumns[`col${[i]}`] = [];
  }

  for (let i = 0; i < panels.length; i++) {
    const colNum = i % col;

    sectionColumns[`col${colNum}`].push(panels[i]);
  }

  for (let i = 0; i < col; i++) {
    const colItemWrapper = document.createElement("div");
    colItemWrapper.classList.add("col-item-wrapper");
    sectionColumnsWrapper.appendChild(colItemWrapper);
    colItemWrapper.dataset.col = i;

    const colItem = sectionColumns[`col${i}`];
    colItem.forEach((item) => {
      const panelItem = document.createElement("div");
      panelItem.classList.add("panel-item");
      colItemWrapper.appendChild(panelItem);

      const img = document.createElement("img");
      img.src = item.src;
      panelItem.append(img);

      console.log(item);
    });
  }
};

generatePanels(3);

console.log(sectionColumns);
