function addNew() 
{
    //output for Date

    var newDate = document.createElement("p");
    newDate.classList.add("dateField_1")
    newDate.innerHTML = document.getElementById("dateTime").value
    document.getElementById("ddOutput").appendChild(newDate)

    // Output for description
    
    var newDesc = document.createElement("p");
    newDesc.classList.add("descr_1")
    newDesc.innerHTML = document.getElementById("descr").value
    document.getElementById("dscrOutput").appendChild(newDesc)

    // Output for time
    
    var newTime = document.createElement("p");
    newTime.classList.add("time_1")
    newTime.innerHTML = document.getElementById("time").value
    document.getElementById("timeOutput").appendChild(newTime)

    /*var newDesc = document.createElement("p");
    newDesc.classList.add("_1")
    newDesc.innerHTML = document.getElementById("descr").value
    document.getElementById("dscrOutput").appendChild(newDesc)*/

}
