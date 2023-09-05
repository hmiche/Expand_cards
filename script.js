const panels = document.querySelectorAll('.panel')
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        remove_Active_Classes()
        panel.classList.add('active')
    })
})

function remove_Active_Classes(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })

}