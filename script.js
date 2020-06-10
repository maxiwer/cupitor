const uniqueWordsArr = document.querySelectorAll("th");

function readFile(file) {
  return new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.onload = (x) => resolve(fr.result);
    fr.readAsText(file);
  });
}

async function read(input) {
  const txtFile = await readFile(input.files[0]);
  let arrBySpaceSplit = [];

  let arrByEnterSplit = txtFile.split("\n");

  if (arrByEnterSplit.length > 1) {
    arrBySpaceSplit = arrByEnterSplit
      .filter((el) => el.length > 1)
      .map((element) => {
        return element.split(" ");
      });
      alert(arrBySpaceSplit);
  } else {
    arrBySpaceSplit = txtFile.trim().split(" ");
  }
}

function onSubmit() {
  console.log("heu");
}
