const uniqueWordsArr = document.querySelectorAll("th");
let uniqueWordsMap = new Set();
let txtFile = '';

function readFile(file) {
  return new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.onload = (x) => resolve(fr.result);
    fr.readAsText(file);
  });
}

async function read(input) {
  txtFile = await readFile(input.files[0]);
  const arr = txtFile.match(/\w+/gi);

  displayFileText(txtFile);
  removeDuplicates(arr);
}

function removeDuplicates(arr) {
  let i = 0;
  do {
    uniqueWordsMap.add(arr[i]);
    i++;
  } while (i < arr.length - 1 && !uniqueWordsMap.has(arr[i]) );

  console.info( `~uniqueWordsMap: `, uniqueWordsMap );

  displayUniqueWords();
}

function displayUniqueWords() {
  /* starting from the 2nd row of the table */
  let rowIndex = 1;
  uniqueWordsMap.forEach( el => {
    /* delete placehlder row */
    document.getElementsByTagName('tbody')[0].insertRow(rowIndex).insertCell().outerHTML = `<th>${el}</th> <input>` ;
    rowIndex++;
  } );

  document.getElementsByTagName('tbody')[0].deleteRow(0);
}

function onSubmit() {
  for (let i = 1; i <= uniqueWordsMap.size; i++) {
    console.log( document.getElementsByTagName('tr')[i].children[1].value );
  }
  replaceWords();
}

function displayFileText(fileText) {
  document.getElementsByClassName('container__txt')[0].innerHTML = fileText;
}

function replaceWords() {
  // uniqueWordsMap.forEach( w => console.log(w) );
}