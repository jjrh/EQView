
function display_bmp(data,files){
    b64=String.fromCharCode.apply(null, data);
    var src = 'data:image/bmp;base64,' + btoa(b64);
    $("#viewer").append("<img src='"+src+"' />")
}

fileHandler('bmp', function(data, files) {
    display_bmp(data,files);
});
