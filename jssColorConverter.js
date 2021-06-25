r.addEventListener("input", changeRange);
g.addEventListener("input", changeRange);
b.addEventListener("input", changeRange);

    //konvert RGB into array
function changeRange() {
    const r = parseInt(document.getElementById("r").value);
    const g = parseInt(document.getElementById("g").value);
    const b = parseInt(document.getElementById("b").value);
    
    var color = "#" + hex(r) + hex(g) +hex(b);
    document.getElementById("container").style.backgroundColor = color;
    //document.getElementById("hex-label").innerText = color;
    document.getElementById("hex-label").value = color;
    document.getElementById("r-label").innerText = r;
    document.getElementById("g-label").innerText = g;
    document.getElementById("b-label").innerText = b;

    if (r < 100 && g < 100 && b < 100) {
        document.body.style.color = "white";
    } else {
        document.body.style.color = "black";
    }
}

function copy() {
    const copyText = document.getElementById("hex-label");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function changeToRGB() {
    const hexValue = document.getElementById("hex-label").value;

    var rbgColor = rgb(hexValue);

    document.getElementById("r-label").innerText = rbgColor[0];
    document.getElementById("g-label").innerText = rbgColor[1];
    document.getElementById("b-label").innerText = rbgColor[2];

    document.getElementById("r").value = rbgColor[0];
    document.getElementById("g").value = rbgColor[1];
    document.getElementById("b").value = rbgColor[2];
    
    var color = "rgb(" + rbgColor[0].toString() +"," + rbgColor[1].toString() + "," +rbgColor[2].toString() + ")";
    document.getElementById("container").style.backgroundColor = color;

    if (rbgColor[0] < 100 && rbgColor[1] < 100 && rbgColor[2] < 100) {
        document.body.style.color = "white";
    } else {
        document.body.style.color = "black";
    }
}

//vedľajšie fukncie na premenu
function hex(number) {
    let hex = number.toString(16);
    if (number < 16) {
        hex = "0" + hex;
    }
    return hex;
}

function rgb(string) { 
    let r = parseInt(string.slice(1,3), 16);
    let g = parseInt(string.slice(3,5), 16);
    let b = parseInt(string.slice(5), 16);
    return [r,g,b];
}

