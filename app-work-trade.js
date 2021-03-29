//Get The Results via Submit click
function getResults () {

    //Prevent Default action (No data will be sent to any server)
    document.getElementById("submit").addEventListener('click', function(event) {
        event.preventDefault();
    })

    //Select Input Data values
    let itemPrice = document.getElementById("itemprice").value;
    let salary = document.getElementById("salary").value;
    let workHours = document.getElementById("workhours").value;
    let workDays = document.getElementById("workdays").value;
    let subscription = document.getElementById("subscription").value;

    //Calculate your hourly rate
    let hourlyRate = Math.abs(salary / (workDays * workHours * 4));
    console.log("Hourly Rate = " + hourlyRate);

    //Calculate Required Days to get your Item (Rendered in UI)
    let requiredDays = Math.abs(parseInt(itemPrice / (hourlyRate * workHours)) + 1);
    console.log("Required Days = " + requiredDays);

    //Render required days to get your item
    let day = requiredDays != 1 ? "days!" : "day!";
    document.getElementById("resultscript1").innerHTML = "You need to work for " + requiredDays + " " + day;

    //Subscriptions Condition
    let disableSubs = Math.abs(parseInt(requiredDays / 30) + 1);
    let month = disableSubs != 1 ? "months!" : "month!";
    document.getElementById("resultscript2").innerHTML = "You need to disable your subscriptions for " + disableSubs + " " + month;

    //Set visibility to Results and remove the Form
    document.getElementById("showresult").style.display="block";
    document.getElementById("forms").style.display="none";
}

//Reset by Refresh the app
function Reset() {
    location.reload();
}

//Prevent Refreshing the page on submit
function noRefresh () {
    return false;
}