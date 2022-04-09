var drops = [document.getElementById("history-drop"), document.getElementById("arch-drop"), document.getElementById("signi-drop"), document.getElementById("lang-drop"), document.getElementById("access-drop")];


var filterStatus = 0;

function DropChange(status) {
    if (status == 0) {
        for (let i = 0; i < drops.length; i++) {
            drops[i].style.display = "none";
        }

    } else {

        for (let i = 0; i < drops.length; i++) {
            drops[i].style.display = "none";
        }
        drops[status - 1].style.display = "block";
    }
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function FilterChange() {
    if (filterStatus == 0) {
        var elements = document.getElementsByTagName('div');

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "grayscale(100%)";
        }

        filterStatus = 1;

    } else {
        var elements = document.getElementsByTagName('div');

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "grayscale(0)";
        }

        filterStatus = 0;
    }


}