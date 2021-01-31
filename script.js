window.onload=()=>{
    let day = document.getElementById("days");
    let hour = document.getElementById("hours");
    let minute = document.getElementById("minutes");
    let second = document.getElementById("seconds");

    const CountDownDate = new Date(2021,6,25,12,0,0).getTime();

    let x = setInterval(()=>{
        let now = new Date().getTime();

        let distance = CountDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(days < 10){
            days = "0"+days.toString;
        }
        if(minutes < 10){
            minutes= "0"+minutes.toString();
        }
        if(hours < 10){
            hours = "0"+hours.toString();
        }
        if(seconds < 10){
            seconds = "0"+seconds.toString();
        }

        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
    })
}