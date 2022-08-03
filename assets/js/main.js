
let ausgabeVorne = document.getElementById('ausgabeVorne')
let ausgabeHinten = document.getElementById('ausgabeHinten')


function schneiden() {
    let text = document.getElementById('inputTxt').value
    let zeichen = document.getElementById('zeichenInput').value
    let trennen = document.forms[0].radio.value
    console.log(trennen)
    const index = text.indexOf(zeichen)
    console.log(index)
    if (index == -1) {
        ausgabeHinten.innerHTML = text
        ausgabeVorne.innerHTML = 'Wort nicht gefunden'
        console.log(index)
    } else
        switch (trennen) {
            case "davor":
                ausgabeVorne.innerHTML = text.slice(0, index)
                ausgabeHinten.innerHTML = text.slice(index)
                break;
            case "danach":
                ausgabeVorne.innerHTML = text.slice(0, zeichen.length + index)
                ausgabeHinten.innerHTML = text.slice(index + zeichen.length)
                /* console.log('danach') */
                break;
            default: console.log('das wars alter')


        }
}

schneiden()