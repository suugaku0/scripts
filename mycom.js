const modal=document.getElementById("ask-modal")
const askBtn=document.getElementById("ask")
askBtn.addEventListener("click",()=>{
    modal.showModal();
    console.log("clicked")
})
const query = window.location.search
const urlParams=new URLSearchParams(query)
const id=urlParams.get("id")
const com = urlParams.get("com")
const title = document.getElementById("titleText")
title.textContent=`${com}会`
const GAS_URL_COM="https://script.google.com/macros/s/AKfycby64xJHlP_6lqwIfLac21bOukz5EUpGvlHqTc1mPXx_PsI0EBrA8fT6-BOUzgdkBo_vJg/exec"
let monthly_goal = ""
document.getElementById("todo").addEventListener("click",()=>{
    window.location.href=`iinwork.html?id=${id}&com=${com}`
})
import {request} from "./defoscript.js"
request(com)