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
  let finalArr = [];

  console.log(
    "%c" + txtFile,
    `background-color: darkBlue; color: white; font-size: 14px;`
  );

  let arrByEnterSplit = txtFile.split("\n");

  if (arrByEnterSplit.length > 1) {
    arrBySpaceSplit = arrByEnterSplit.map((element) => {
      if (element.length > 0) {
        return element.split(" ");
      }
    });
    console.log("hey", arrBySpaceSplit);
  } else {
    arrBySpaceSplit = txtFile.trim().split(" ");
  }
}

function onSubmit() {
  console.log("heu");
}
