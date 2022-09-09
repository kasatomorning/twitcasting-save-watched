const titleclass = $(".tw-player-page__title-editor-value");
const URL = $(location).attr("pathname");
let nowstatus = localStorage.getItem(URL);
if (nowstatus === null) {
    nowstatus = "未視聴";
}
titleclass
    .append('<input type="button" id="WatchedButton" value="視聴済みにする">')
    .append('<input type="button" id="notWatchedButton" value="未視聴にする">')
    .append(`<div id=nowstatus>${nowstatus}</div>`);

$("#WatchedButton").on("click", function () {
    localStorage.setItem(URL, "視聴済み");
    $("#nowstatus").text("視聴済み");
});

$("#notWatchedButton").on("click", function () {
    localStorage.setItem(URL, "未視聴");
    $("#nowstatus").text("未視聴");
});
