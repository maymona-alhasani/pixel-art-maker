

var sizePicker = document.getElementById('sizePicker'),
    pixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    'use strict'
    
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;

    // remove the content of tabel 
    pixelCanvas.innerHTML = "";

    // creates rows and cells of tabel
    for (var i = 1; i <= height; i++) {
        var tabelRow = document.createElement('tr');
        pixelCanvas.appendChild(tabelRow);
        for (var j = 0; j < width; j++) {
            var tabelCell = document.createElement('td');

// set color to cells in tabel 
            tabelCell.addEventListener('click', function () {
                var color = document.getElementById('colorPicker').value;
                this.style.backgroundColor = color;
            });

            tabelRow.appendChild(tabelCell);
        }
    }
}
// when submit the form 

sizePicker.onsubmit = function (e) {
    e.preventDefault();
    makeGrid();
};
