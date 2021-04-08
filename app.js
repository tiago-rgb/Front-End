function started() {
    console.log(' Started Download ')
}

function update() {
    var texto = '';
    for (var i = 0; i <= 100; i++) {
        texto += i + '% of Download '
    }
    console.log(texto);
}

function complete() {
    console.log('Download Complete')
}

function performDownload() {
    started();
    update();
    complete();
}
performDownload(started, update, complete);