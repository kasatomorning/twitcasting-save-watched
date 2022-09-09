const archivesclass = $(".tw-movie-thumbnail");
archivesclass.each((i, elem) => {
    let URL = $(elem).attr("href");
    let nowstatus = localStorage.getItem(URL);
    let title = $(elem).find(".tw-movie-thumbnail-stats");
    if (nowstatus === null) {
        nowstatus = "未視聴";
    }
    title.append(`<span>${nowstatus}</span>`);
});
