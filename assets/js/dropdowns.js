var dropdownOpen = false;

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.classList.toggle("show");
    dropdown.parentElement.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                openDropdown.parentElement.classList.remove("show");
            }
        }
        dropdownOpen = false;
    } else {
        var curId = event.target.nextElementSibling.id;
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.id == curId) {
                continue;
            }
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                openDropdown.parentElement.classList.remove("show");
            }
        }
        dropdownOpen = true;
    }
}