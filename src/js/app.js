import {calculateWallpaper} from "./lib.js";

const longEl = document.getElementById('long');
const widthEl = document.getElementById('width');
const heightEl = document.getElementById('height');
const wallpaperWidthEl = document.getElementById('wallpaperWidth');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const long = longEl.value;
    const width = widthEl.value;
    const height = heightEl.value;
    const wallpaperWidth = wallpaperWidthEl.value;
    if (longEl.value == '' || widthEl.value == '' || heightEl.value == 0 || wallpaperWidthEl.value == 0) {
        resultEl.textContent = 'Вы не ввели значение';
    }
    else if (isNaN(longEl.value) || isNaN(widthEl.value) || isNaN(heightEl.value) || isNaN(wallpaperWidthEl.value)) {
        resultEl.textContent = 'Вы ввели недопустимое значение';
    }
    else {
        resultEl.textContent = calculateWallpaper(long, width, height, wallpaperWidth);
    }
}

calculateEl.addEventListener('click', reactToClick);