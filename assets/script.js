const form = document.querySelector(".form")
const hadeeths = document.querySelector(".hadeeths")

async function fetchHadeeths(){
    const response = await fetch("https://realdaly.pythonanywhere.com/api/hadeeths/")
    if(!response.ok){
        const message = `حدث خطأ : ${response.status}`
        throw new Error(message)
    }
    const json = await response.json()
    hadeeths.innerHTML = ""
    json.map(item => {
        hadeeths.innerHTML += `<p class="hadeeth">(${item.id}) ${item.content}</p>`
    })
}
fetchHadeeths()

fetchHadeeths().catch(error => {
    console.log(error.message)
})

function searchFunc(){
    const input = document.getElementById("search")
    const filter = input.value.toLowerCase()
    const resutls = document.getElementsByClassName("hadeeth")
  
    for (i = 0; i < resutls.length; i++) {
      if (resutls[i].innerText.toLowerCase().includes(filter)) {
        resutls[i].style.display = "block"
      } else {
        resutls[i].style.display = "none"
      }
    }
}