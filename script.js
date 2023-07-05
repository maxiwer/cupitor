const uniqueWordsArr = document.querySelectorAll("th");
let uniqueWordsSet = new Set();
let txtFile = "";

function readFile(file) {
  return new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.onload = (x) => resolve(fr.result);
    fr.readAsText(file);
  });
}

async function read(input) {
  txtFile = await readFile(input.files[0]);
  clearUniqueWordsSet();
  const arr = txtFile.match(/\w+/gi);

  displayFileText(txtFile);
  removeDuplicates(arr);
}

function removeDuplicates(arr) {
  arr.map((w) => {
    if (!uniqueWordsSet.has(w)) uniqueWordsSet.add(w);
  });

  displayUniqueWords();
}

function displayUniqueWords() {
  /* starting from the 2nd row of the table */
  let rowIndex = 1;
  uniqueWordsSet.forEach((el) => {
    /* delete placehlder row */
    document
      .getElementsByTagName("tbody")[0]
      .insertRow(rowIndex)
      .insertCell().outerHTML = `<th>${el}</th> <input>`;
    rowIndex++;
  });

  document.getElementsByTagName("tbody")[0].deleteRow(0);
}

function onSubmit() {
  if (isTheTextEmpty()) return;

  for (let i = 1; i <= uniqueWordsSet.size; i++) {
    console.log(document.getElementsByTagName("tr")[i].children[1].value);
  }
  replaceWords();
  toggleModal();
}

function displayFileText(fileText) {
  document.getElementsByClassName("container__txt")[0].innerHTML = fileText;
}

function replaceWords() {
  let i = 0;

  uniqueWordsSet.forEach((w) => {
    if (document.getElementsByTagName("tr")[i].children[1].value) {
      txtFile = txtFile.replace(w);
    }
    i++;
  });
  displayFileText(txtFile);
}

function toggleModal() {
  const modalClasses = document.getElementsByClassName("modal")[0].classList;
  modalClasses.contains("hide")
    ? modalClasses.remove("hide")
    : modalClasses.add("hide");
}

function isTheTextEmpty() {
  if (txtFile.length < 1) {
    alert("There's no file selected or the file's empty");
    return true;
  }
}

function clearUniqueWordsSet() {
  uniqueWordsSet.clear();
}
