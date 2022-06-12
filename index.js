$('document').ready(function(){
    $('.mainpage2').hide();
    $('#but').click(function() {
        $('#out1').empty();
        const name = $("#name").val();
        const secondname = $("#secondname").val();
        const adverb =$("#adverb").val();
        const city = $("#city").val();
        const story = `One day, my friend ${name} was visiting ${city} and ran into ${secondname}. ${name} ran ${adverb} to meet ${secondname}. But ${secondname} turned out to be very angry and ${name} did not enjoy the meeting`;
        console.log(story)
        $('#out1').append(story);
        $('#out1').show();
    })
    $('#tom').click(function() {
        $('.mainpage').hide();
        $('.mainpage2').show();
    })
    $('#mad').click(function() {
        $('.mainpage2').hide();
        $('.mainpage').show();
    })

    $('#cal').click(function() {
        $('#out2').empty();
        const wid = $('#width').val();
        const hei = $('#height').val();
        const color = $('#color').val();

        var size;
        size = wid*hei*color/8/1024/1024;
        if (size > 1.0) {
            $('#out2').append(`File is too large(${size} KB)`);
        } else{
            $(`#out2`).append(`File is ${size} KB, it is OK`);
        }
        console.log(size);
    })
})