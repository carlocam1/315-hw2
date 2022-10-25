

export function changePageContent (){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
            // console.log("data " + data);
            $("#app").html(data);
        }); 
    }
    else {
        $.get(`pages/home/home.html`, function (data) {
            // console.log("data " + data);
            $("#app").html(data);
        }); 
    }

    $(window).on("hashChange");
    console.log("data inside ----->" + pageID);

};
