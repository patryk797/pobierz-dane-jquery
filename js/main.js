$(document).ready(function () {
    $('#get-data').click(function () {

        // PIERWSZY WARIANT


        //         $.get('https://akademia108.pl/api/ajax/get-post.php')
        //             .done(function(data) {


        //                 let pID = $('<p></p>').text(`Post ID: ${data.id}`);
        //                 let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
        //                 let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //                 let pBody = $('<p></p>').text(`Body: ${data.body}`);
        //                 let hr = $(`<hr />`);

        //                 let jqBody = $(`body`).append(pID)

        //                 jqBody.append(pID);
        //                 jqBody.append(pUserId);
        //                 jqBody.append(pTitle);
        //                 jqBody.append(pBody);
        //                 jqBody.append(hr);

        //                 console.log(data);
        //             })
        //             .fail(function(error) {
        //                 console.error(error);
        //             });
        //     });
        // });





        // DRUGI WARIANT

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {


                let pID = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $(`<hr />`);

                let jqBody = $(`body`).append(pID)

                jqBody.append(pID);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);

                console.log(data);
            })
            .fail(function (error) {
                console.error(error);
            });
    });
});
