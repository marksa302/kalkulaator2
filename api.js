    

function addNew() {
    var newDate = document.createElement("p");
    var newDesc = document.createElement("p");
    var newTime = document.createElement("p");

    if (document.getElementById("dateTime").value === ""
        && (document.getElementById("descr").value === ""
            && (document.getElementById("time").value === ""))) {
        alert("palun täida kõik väljad");
        return false;
    }

     else if (document.getElementById("descr").value === "") {
         alert("palun täida kirjelduse väli");
         return false;
     }
 
     else if (document.getElementById("time").value ==="") {
         alert("palun sisesta tundide arv");
         return false;
     }
 
     else if (document.getElementById("dateTime").value === "") {
         alert("palun sisestage kuupäev");
         return false;
     }

    else {
        newDate.classList.add("dateField_1")
        newDate.innerHTML = document.getElementById("dateTime").value
        document.getElementById("ddOutput").appendChild(newDate)

        newDesc.classList.add("descr_1")
        newDesc.innerHTML = document.getElementById("descr").value
        document.getElementById("dscrOutput").appendChild(newDesc)

        newTime.classList.add("time_1")
        newTime.innerHTML = document.getElementById("time").value + "t"
        document.getElementById("timeOutput").appendChild(newTime)
    }


    /*var newDesc = document.createElement("p");
    newDesc.classList.add("_1")
    newDesc.innerHTML = document.getElementById("descr").value
    document.getElementById("dscrOutput").appendChild(newDesc)*/
}

function deleteLast()
{
    var itemsDate = document.getElementsByClassName("dateField_1");
    var lastDate = itemsDate[itemsDate.length -1];
    lastDate.parentNode.removeChild(lastDate);

    var itemsDesc = document.getElementsByClassName("descr_1");
    var lastDesc = itemsDesc[itemsDesc.length -1];
    lastDesc.parentNode.removeChild(lastDesc);

    var itemsTime = document.getElementsByClassName("time_1");
    var lastTime = itemsTime[itemsTime.length -1];
    lastTime.parentNode.removeChild(lastTime);
}
