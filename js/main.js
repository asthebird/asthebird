var inputfield = document.getElementById('numberid');
var output = document.getElementById('display');

async function get_text(file) {
  let x = await fetch(file);
  let y = await x.text();
  return y;
}

try {
  output.innerHTML = get_text('/list.txt').split('\n')[Number(inputfield.value)];
} catch (e) {
  output.innerHTML = 'Invalid number';
}
