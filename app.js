const optionMenu = document.querySelector("#selectmenu"),
      selectButton = document.querySelector("#selectbtn"),
      options = document.querySelectorAll("#options"),
      sbtntext = document.querySelector("#sbtn-text"),
      list = document.getElementById("option"),
      arrowicon = document.getElementById("arrowicon")

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".btn-text").innerText;
        sbtntext.innerText = selectedOption;
    list.classList.toggle("hide");
    arrowicon.classList.toggle("rotate");

    // console.log(selectedOption);

    })
})
function dropdown(){
    list.classList.toggle("hide");
    arrowicon.classList.toggle("rotate");

}