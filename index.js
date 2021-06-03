

const $app = document.getElementById('grid-container');

const $pixelContainer = document.createElement('DIV');
$pixelContainer.className = 'pixel-container';
$app.appendChild($pixelContainer);

const $paletteContainer = document.createElement('DIV');
$paletteContainer.className = 'palette-container';
$app.appendChild($paletteContainer);


//const paintPixel = function (pixel) {
//    pixel.classList.remove(pixel.classList.item(1));
//    pixel.classList.add(brushClass);
//}


function handlePixelDown(event) {
    const $clickedPixel = event.target;
    $clickedPixel.style.backgroundColor = selectedColor;
    console.log(`&{mousedown} in down event`);
}

function handlePixelEnter(event) {
    console.log(`&{mouseDown} in enter event`);
    const $clickedPixel = event.target;
    $clickedPixel.style.backgroundColor = selectedColor;
}

function handlePixelUp(event) {
    const $clickedPixel = event.target;
    $clickedPixel.style.backgroundColor = selectedColor;
}

for (let i = 0; i < 400; i++) {
    const $pixel = document.createElement('DIV');
    $pixel.className = "grid-item";
    $pixel.addEventListener('mousedown', handlePixelDown);
    console.log(`&{mousedown} after down event`);
    $pixel.addEventListener('mouseenter', handlePixelEnter );
    $pixel.addEventListener('mouseup', handlePixelUp);
 
//    $pixel.addEventListener('click', handlePixelClick);
//    $app.appendChild($pixel);
    $pixelContainer.appendChild($pixel);
}

const colors = [
    'red',
    'blue',
    'yellow',
    'green',
    'white',
    'purple'
]

let selectedColor = null;

function handleColorSelect(event) {
    const $clickedColor = event.target;
    selectedColor = $clickedColor.style.backgroundColor;
    // update selectedColor with that new color value
    console.log(selectedColor);
}

for (let j = 0; j < colors.length; j++) {
    const $paletteItem = document.createElement('DIV');
    $paletteItem.className = 'palette-item';
    $paletteItem.style.backgroundColor = colors[j];
    $paletteItem.addEventListener('click', handleColorSelect);
    $paletteContainer.appendChild($paletteItem);
    
}





