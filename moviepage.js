const titleclass = $(".tw-player-page__title-editor-value");
titleclass
    .append('<input type="button" id="WatchedButton" value="視聴済みにする">')
    .append('<input type="button" id="notWatchedButton" value="未視聴にする">');

$("#WatchedButton").on("click", function () {
    const URL = $(location).attr("pathname");
    localStorage.setItem(URL, "視聴済み");
});

$("#notWatchedButton").on("click", function () {
    const URL = $(location).attr("pathname");
    localStorage.setItem(URL, "未視聴");
});
