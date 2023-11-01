document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    let isDropdownOpen = false;

        $(".dropdown").bind('touchstart', function(event) {
        event.stopPropagation();
        if (isDropdownOpen) {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
        isDropdownOpen = !isDropdownOpen;
    });

    $(".dropdown").bind('touchstart', function() {
        dropdownContent.style.display = 'none';
        isDropdownOpen = false;
    });
});
