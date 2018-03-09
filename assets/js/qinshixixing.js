window.onload = function () {
    if (!sessionStorage.getItem('showDetail')) {
        sessionStorage.setItem('showDetail', 'hidden');
    }
    var articleListButton = document.getElementById("article-list-button");
    var articleListDetail = document.getElementById("article-list-detail");
    var articleListToggle = document.getElementById("article-list-toggle");
    switch (sessionStorage.getItem('showDetail')) {
        case 'show':
            articleListDetail.classList.remove("qsxx-hidden");
            articleListToggle.innerHTML = "expand_more";
            break;
        case 'hidden':
            articleListDetail.classList.add("qsxx-hidden");
            articleListToggle.innerHTML = "chevron_right";
    }
    articleListButton.addEventListener("click", function (event) {
        articleListDetail.classList.toggle("qsxx-hidden");
        if (articleListToggle.innerHTML === "chevron_right") {
            articleListToggle.innerHTML = "expand_more";
            sessionStorage.setItem('showDetail', 'show');
        }
        else {
            articleListToggle.innerHTML = "chevron_right";
            sessionStorage.setItem('showDetail', 'hidden');
        }
    });
};