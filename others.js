const query = window.location.search
const urlParams=new URLSearchParams(query)
const id=urlParams.get("id")
const com=urlParams.get("pagecom")
import {request} from "./defoscript.js"
request(com)