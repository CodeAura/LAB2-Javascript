const array = [];

function ShowArray() {
    document.getElementById("namen").innerHTML = "<h1>Namen: " + Array + "</h1>";
}

function AddtoArray(Name) {
    array.push(Name)
}


while (true) {
    Name = prompt("Welke namen wilt u toevoegen?")
    AddtoArray(Name)

    if (array.length === 3) {
        ShowArray()
        break
    } else {
        continue
    }
}
