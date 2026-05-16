const query = window.location.search

const urlParams = new URLSearchParams(query)

const id = urlParams.get("id")
const com = urlParams.get("com")
console.log(id)
console.log(com)

if (com=="なし"){
    document.getElementById("my_com").classList.add("hide")
}

document.getElementById("my_com").addEventListener("click",()=>{
        window.location.href=`https://output.jsbin.com/hituyey?id=${id}&com=${com}&pagecom=自分の委員`
    })
document.getElementById("gakkyu").addEventListener("click",()=>{
    window.location.href=`https://output.jsbin.com/nijeyas?id=${id}&com=${com}&pagecom=学級委員`
})
document.getElementById("seikatu").addEventListener("click",()=>{
    window.location.href=`https://output.jsbin.com/nijeyas?id=${id}&com=${com}&pagecom=生活委員`
})
document.getElementById("tosho").addEventListener("click",()=>{
    window.location.href=`https://output.jsbin.com/nijeyas?id=${id}&com=${com}&pagecom=図書委員`
})
document.getElementById("bunka").addEventListener("click",()=>{
    window.location.href=`https://output.jsbin.com/nijeyas?id=${id}&com=${com}&pagecom=文化委員`
})
document.getElementById("kyuushoku").addEventListener("click",()=>{
    window.location.href=`https://output.jsbin.com/nijeyas?id=${id}&com=${com}&pagecom=給食委員`
})
document.getElementById("hobi").addEventListener("click",()=>{
    window.location.href=`https://output.jsbin.com/nijeyas?id=${id}&com=${com}&pagecom=保健美化委員`
})
const modal=document.getElementById("ask-modal")
document.getElementById("ask").addEventListener("click",()=>{
    modal.showModal()
})
