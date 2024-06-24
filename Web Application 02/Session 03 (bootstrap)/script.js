// $(".nav li").on("click", function () {
//     $(".nav li").removeClass("active");
//     $(this).addClass("active");
// });

var lists = document.querySelectorAll(".nav li");

lists.forEach((li) => {
    li.addEventListener("click", (e) => {
        console.log(e.currentTarget);
        lists.forEach((l) => {
            l.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});
