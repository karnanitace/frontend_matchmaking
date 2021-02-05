const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-loc");
const searchBox = document.querySelector(".search-bar");
const optionIcon = document.querySelectorAll(".option-icon");
const openFilterBtn = document.querySelectorAll(".open-cat .fa-plus");
const openFilterCatBtn = document.querySelectorAll(".select-cat .fa-times");



if(optionIcon) {
  optionIcon.forEach(optionBtn => {
    optionBtn.onclick = () => {
      const showReportBlock = optionBtn.parentElement.querySelector(".report");
      showReportBlock.classList.toggle("show-report-block");
    }
  })
}
 
if(searchBtn !== (undefined || null)) {
  searchBtn.onclick = () => {
    searchBar.classList.toggle("show-search");
    searchBox.classList.toggle("show-bar");
}
} 

// carousel


const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

if(carouselList) {
  carouselList.addEventListener("click", function (event) {
    var newActive = event.target;
    var isItem = newActive.closest(".carousel__item");
  
    if (!isItem || newActive.classList.contains("carousel__item_active")) {
      return;
    }
  
    update(newActive);
  });

} 

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);

  current.classList.remove("carousel__item_active");

  [current, prev, next, first, last].forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};






// suneditor

if(document.getElementById('sample') ) {
  const editor = SUNEDITOR.create((document.getElementById('sample') || 'sample'),{
    // All of the plugins are loaded in the "window.SUNEDITOR" object in dist/suneditor.min.js file
    buttonList : [
        ['bold', 'underline', 'italic',  'font', 'list','redo', 'undo', 'image'], 
    ],
  
    // Insert options
    // Language global object (default: en)
    lang: SUNEDITOR_LANG['en']
  });
}


if(document.getElementById('sample2') ) {
  const editor2 =document.getElementById('sample2') !== (null || undefined) && SUNEDITOR.create((document.getElementById('sample2') || 'sample2'),{
    // All of the plugins are loaded in the "window.SUNEDITOR" object in dist/suneditor.min.js file
    buttonList : [
        ['bold', 'underline', 'italic',  'font', 'list','redo', 'undo', 'image'], 
    ],
  
    // Insert options
    // Language global object (default: en)
    lang: SUNEDITOR_LANG['en']
  });
}


if(openFilterBtn){
  openFilterBtn.forEach(filterBtn => {
    filterBtn.onclick = () => {
      const openCat = filterBtn.parentElement;
      const selectCat = openCat.parentElement.querySelector(".select-cat");
      selectCat.classList.toggle("show-select-cat");
      openCat.classList.toggle("d-none");
    }
  })
}


if(openFilterCatBtn){
  openFilterCatBtn.forEach(filterBtn => {
    filterBtn.onclick = () => {
      const selectCat = filterBtn.parentElement;
      const openCat = selectCat.parentElement.querySelector(".open-cat");
      selectCat.classList.toggle("show-select-cat");
      openCat.classList.toggle("d-none");
    }
  })
}


var range = document.querySelector(".range-value");
var range1 = document.querySelector("#range1");
var range2 = document.querySelector("#range2")

if( range1 ) {
  range.innerHTML = `${range1.value} - ${range2.value}`

range1.onchange = () => {
  range.innerHTML = `${range1.value} - ${range2.value}`
}

range2.onchange = () => {
  range.innerHTML = `${range1.value} - ${range2.value}`
}
}







// Datepicker

var datepicker = document.querySelector(".datepicker");

if(datepicker) {
  $('.datepicker').datepicker({
    format: 'M/d',
    autoclose: true,
    
  });
}

