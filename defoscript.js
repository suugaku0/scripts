
export function request(com){
    let query = window.location.search
    let urlParams = new URLSearchParams(query)
    document.title=urlParams.get("pagecom")
    const GAS_URL_COM="https://script.google.com/macros/s/AKfycby64xJHlP_6lqwIfLac21bOukz5EUpGvlHqTc1mPXx_PsI0EBrA8fT6-BOUzgdkBo_vJg/exec"
    let monthly_goal = ""
    fetch(`${GAS_URL_COM}?com=${com}`)
        .then(response=>response.json())
        .then(data=>{
            month=Object.keys(data[4]).find(key=>data[4][key]===true)
            console.log(month)
            console.log(data)
            monthly_goal+=data[0][String(month)]
            const maincontent = document.getElementById("thisMonthMain")
            const monthly_goal_HTML_first=document.getElementById("goal_first")
            const monthly_goal_HTML_second=document.getElementById("goal_second")
            monthly_goal_HTML_first.textContent=monthly_goal.split(",")[0]
            monthly_goal_HTML_second.textContent=monthly_goal.split(",")[1]
            document.getElementById("first").innerText=monthly_goal.split(",")[0]
            document.getElementById("second").innerText=monthly_goal.split(",")[1]
            const reason_HTML = document.getElementById("reason")
            const reason_text = data[1][String(month)]
            reason_HTML.textContent = reason_text
            const way_list_HTML= document.getElementById("way_list")
            const way_HTMLs=document.getElementsByName("way")
            const way_texts=data[2][String(month)].split(",")
            for (const way_text of way_texts){
                let way_HTML=way_HTMLs[0].cloneNode(true);
                way_HTML.childNodes[0].textContent=way_text
                way_HTML.classList.toggle("hide")
                way_list_HTML.appendChild(way_HTML)
            }    
        })
}
