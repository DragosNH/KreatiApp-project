const oneHour = document.querySelector(".oneHour");
const thirtyMin = document.querySelector(".thirtyMin");
const tenMin = document.querySelector(".tenMin");

if(oneHour){
    oneHour.addEventListener("click", function(){
        tenMinCountdown( ".one-countdown", 60, 0 )
    })
}

thirtyMin.addEventListener("click", function(){
    tenMinCountdown( ".thirty-countdown", 30, 0 )
})

tenMin.addEventListener("click", function(){
    tenMinCountdown( ".ten-countdown", 10, 0 )
})

function oneHourCountdown( e, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 100000 ) {
            element.innerHTML = "Time's up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.querySelector( e );
    endTime = (+new Date) + 100000 * (60*minutes + seconds) + 500;
    updateTimer();
}

function thirtyMinCountdown( e, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 3000 ) {
            element.innerHTML = "Time's up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.querySelector( e );
    endTime = (+new Date) + 3000 * (60*minutes + seconds) + 500;
    updateTimer();
}

function tenMinCountdown( e, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time's up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.querySelector( e );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}
