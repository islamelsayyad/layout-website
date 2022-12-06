// Generate Panels
const panels = [];

const panelSources = [
  "https://dr.savee-cdn.com/things/6/3/8a6e255d8005068392e62c.webp",
  "https://dr.savee-cdn.com/things/6/3/862676e5053b9bb40e20b8.webp",
  "https://dr.savee-cdn.com/things/6/3/76bd888e74084fe0e8abf8.webp",
  "https://dr.savee-cdn.com/things/6/3/786c78f0f6f10b38b85976.webp",
  "https://dr.savee-cdn.com/things/6/3/8559f41ac8663e0f3d4fbd.webp",
  "https://dr.savee-cdn.com/things/5/b/7dcdee093beb32c7727ada.webp",
  "https://dr.savee-cdn.com/things/6/3/844a0ec5ce6b877bf023de.webp",
  "https://dr.savee-cdn.com/things/6/3/844a11c5ce6b877bf02402.webp",
  "https://dr.savee-cdn.com/things/6/3/838abd363c29093b13b5fd.webp",
  "https://dr.savee-cdn.com/things/6/3/754621267164ee424ae5c4.webp",
  "https://dr.savee-cdn.com/things/6/3/6e9e4cfa141214f426d536.webp",
  "https://dr.savee-cdn.com/things/6/3/288c79e2b9225fe4fceb8e.webp",
  "https://dr.savee-cdn.com/things/6/3/6aed6c4c80fe31eb12abe1.webp",
  "https://dr.savee-cdn.com/things/6/3/4b085d14157c6cf12573c4.webp",
  "https://dr.savee-cdn.com/things/6/3/630b7a3ecca4cbad5d79d9.webp",
  "https://dr.savee-cdn.com/things/6/3/6007dea27e33e38cca5dc4.webp",
  "https://dr.savee-cdn.com/things/6/3/63c5d7ddbce066f2fc7906.webp",
  "https://dr.savee-cdn.com/things/6/3/5ebd8b2d468f4abf066f54.webp",
  "https://dr.savee-cdn.com/things/6/3/64ec242afd831a172a6781.gif",
];

const panelNum = 100;
let panelSrcIndex = 0;

for (let i = 0; i <= panelNum; i++) {
  let panelItem = {
    id: i,
    reference: "https://www.savee.it",
    src: panelSources[panelSrcIndex],
  };

  if (panelSrcIndex === panelSources.length) panelSrcIndex = 0;
  else {
    panels.push(panelItem);
    panelSrcIndex++;
  }
}

// Append Panels

const panelsColumnsWrapper = document.querySelector(".panels_cols-wrapper");

const createPanels = function (columnsNum, gap, columns) {
  for (let i = 1; i <= columnsNum; i++) {
    const panelColItem = document.createElement("div");
    panelColItem.classList.add("panel__col-item");
    panelColItem.dataset.key = i;
    panelsColumnsWrapper.appendChild(panelColItem);

    panelColItem.style.gap = `${gap * 5}px`;

    const column = columns[`col${[i]}`];
    column.forEach((panel) => {
      const panelItem = document.createElement("div");
      panelItem.classList.add("panel-item");
      panelColItem.appendChild(panelItem);

      const panelImg = document.createElement("img");
      panelImg.src = panel.src;
      panelItem.append(panelImg);
    });
  }

  panelsColumnsWrapper.style.gap = `${gap * 5}px`;
};

const displayPanels = function (columnsNum = 3, gap = 5) {
  const columns = {};

  panelsColumnsWrapper.innerHTML = "";

  for (let i = 1; i <= columnsNum; i++) {
    columns[`col${[i]}`] = [];
  }

  let colNum = 1;

  for (let i = 0; i < panels.length; i++) {
    const colItem = columns[`col${[colNum]}`];
    colItem.push(panels[i]);

    if (colNum >= columnsNum) colNum = 1;
    else colNum++;
  }

  createPanels(columnsNum, gap, columns);
};

// Resizing Layout
const rangeSliderBtn = document.querySelector(".range-slider_btn");
const panelsWrapper = document.querySelector(".panels-wrapper");
const rangeSliderLayout = document.querySelector(".range-slider_layout");
const rangeColumns = document.querySelector(".range-slider_cols");
const rangeGap = document.querySelector(".range-slider_gap");

displayPanels(rangeColumns.defaultValue, rangeGap.defaultValue);

rangeSliderBtn.addEventListener("click", () => {
  rangeSliderLayout.classList.toggle("range-slider__visible");
});

panelsWrapper.addEventListener("mousemove", () => {
  rangeSliderLayout.classList.remove("range-slider__visible");
});

rangeSliderLayout.addEventListener("input", (e) => {
  const target = e.target;

  if (target.type === "range")
    displayPanels(rangeColumns.value, rangeGap.value);
});
