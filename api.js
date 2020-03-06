
var tSum = 0
var pay = 0
function addNew() {
    let newDate = document.createElement("p");
    let newDesc = document.createElement("p");
    let newTime = document.createElement("p");
    let e = document.getElementById("typeChoice")
    let timeCalc = document.getElementById("time").value
    let jobIndex = e.options[e.selectedIndex].value;
    let url = 'http://andmebaas.stat.ee/sdmx-json/data/PA627/' + jobIndex + '.1.1+2/all?startTime=2010&endTime=2014&dimensionAtObservation=allDimensions'
    

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

    else if (document.getElementById("time").value === "") {
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

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            var payPerH = data.dataSets[0].observations['0:0:0:1'][0]

            pay = payPerH * timeCalc
            var payOut = document.createElement("p")
            payOut.classList.add("payOut_1")
            payOut.innerHTML = pay.toFixed(2) + "€"
            document.getElementById("payPerHour").appendChild(payOut)
            tSum = tSum + pay
            document.getElementById("tSum").innerHTML = tSum.toFixed(2) + "€"

        })
}


function deleteLast() {
    var itemsDate = document.getElementsByClassName("dateField_1");
    var lastDate = itemsDate[itemsDate.length - 1];
    lastDate.parentNode.removeChild(lastDate);

    var itemsDesc = document.getElementsByClassName("descr_1");
    var lastDesc = itemsDesc[itemsDesc.length - 1];
    lastDesc.parentNode.removeChild(lastDesc);

    var itemsTime = document.getElementsByClassName("time_1");
    var lastTime = itemsTime[itemsTime.length - 1];
    lastTime.parentNode.removeChild(lastTime);

    var itemsPay = document.getElementsByClassName("payOut_1");
    var lastPay = itemsPay[itemsPay.length - 1];
    lastPay.parentNode.removeChild(lastPay);
    tSum = tSum - pay
    document.getElementById("tSum").innerHTML = tSum.toFixed(2) + "€"
    


}
