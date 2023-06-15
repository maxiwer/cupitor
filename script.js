const uniqueWordsArr = document.querySelectorAll("th");
let uniqueWordsMap = new Set();

function readFile(file) {
  return new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.onload = (x) => resolve(fr.result);
    fr.readAsText(file);
  });
}

async function read(input) {
  const txtFile = await readFile(input.files[0]);
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
    // document.getElementsByTagName('tr')[rowIndex].firstElementChild.innerHTML = el;
    document.createElement('tr').innerHTML = el;
    rowIndex++;
  } );
}

function onSubmit() {
  let rowIndex = 1;
  console.log(
    document.getElementsByTagName('tr')[1].children[1].children[0].value
  );
}

function displayFileText(fileText) {
  document.getElementsByClassName('container__txt')[0].innerHTML = fileText;
}