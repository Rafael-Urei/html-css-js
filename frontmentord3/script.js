let anterior = null;

function selected() {
    if (!anterior) {
        alert("You need to select a button!")
        return
    }
    let picture =  document.querySelector("#pic_div")
    let image = document.querySelector("#img")
    let h1 = document.getElementById("title")
    var p = document.getElementById("parag")
    var button = document.querySelector(".submit")
    var navigation = document.getElementById("navigation")
    var header_div = document.getElementById("header")
    var message = document.getElementById("message")
    image.src = "media/images/illustration-thank-you.svg"
    image.style.borderRadius = "0%"
    image.style.background = "none"
    picture.style.margin = "auto"
    p.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    p.style.textAlign = "center"
    h1.innerHTML = "Thank you!"
    button.style.display = "none"
    navigation.style.display = "none"
    header_div.style.alignItems = "center"
    message.style.display = "block"
    message.innerHTML = `You selected ${aux} out of 5`
}

let aux = null;
const select = (value, id) => {
    if (anterior) {
        anterior.style.backgroundColor = "hsla(219, 13%, 25%, 0.603)"
        const button = document.getElementById(id);
        button.style.backgroundColor = "orange";
        button.style.color = "white"
        anterior = button
        console.log("anterior", anterior)
    } else {
        const button = document.getElementById(id);
        button.style.backgroundColor = "orange";
        button.style.color = "white"
        anterior = button
        console.log("else", anterior)
    }
    let valor = value;
    aux = valor
    console.log(`You've selected ${valor} from 5.`);
}

function change() {
    var div = document.getElementById("message");
    if (aux != null) {
        div.innerHTML = `<strong>You've selected ${aux} from 5. THANK YOU!!!!!!</strong>`
    } else {
        div.innerHTML = "Erro! Por favor selecione uma nota."
    }
}