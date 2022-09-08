const archivesclass = $(".tw-movie-thumbnail");
archivesclass.each((i, elem) => {
    let URL = $(elem).attr("href");
    let status = localStorage.getItem(URL);
    let title = $(elem).find(".tw-movie-thumbnail-stats");
    if (status === null) {
        status = "未視聴";
    }
    title.append(`<span>${status}</span>`);
});
