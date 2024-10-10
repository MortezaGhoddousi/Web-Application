window.onload = () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    document.querySelector("form button").addEventListener("click", (e) => {
        e.preventDefault();
        var inputs = document.querySelectorAll(
            'form input[type="email"], form input[type="password"]'
        );
        inputs.forEach((el) => {
            var parent = el.parentNode;
            if (el.value == "") {
                parent.parentNode.classList.add("has-error");
            } else {
                parent.parentNode.classList.remove("has-error");
            }
        });
    });
};
