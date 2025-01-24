document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Close other open dropdowns
            document.querySelectorAll(".dropdown-content").forEach(drop => {
                if (drop !== content) {
                    drop.classList.remove("show");
                }
            });

            // Toggle the clicked dropdown
            content.classList.toggle("show");
        });
    });
});
