const darkMode = document.querySelector(".dkMode");

darkMode.addEventListener("click", ()=>{
    if (!document.body.classList.contains("dark-mode") || document.body.classList.contains("dark-mode")){
        document.body.classList.toggle("dark-mode")
    }
    
})