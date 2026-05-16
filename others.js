const query = window.location.search
const urlParams=new URLSearchParams(query)
const id=urlParams.get("id")
const com=urlParams.get("pagecom")
const title = document.getElementById("titleText")
title.textContent=`${com}会`
import {request} from "./defoscript.js"
request(com)
