const frase = document.getElementById("frases")
const botonLeer = document.getElementById("botonLeer")

const capturarFrase = async ()=>{
    try {
        const datos = await fetch("https://api.chucknorris.io/jokes/random")
        const respuesta = await datos.json()
        console.log(respuesta.value)
        return respuesta.value
    } catch (error) {
        alert("Nose se pudo obtener la informacion")
    }
}

botonLeer.addEventListener("click", async ()=>{
    const nuevaFrase = await capturarFrase()
    frase.innerHTML = nuevaFrase
})


capturarFrase()