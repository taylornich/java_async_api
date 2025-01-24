let countdown;
let timeRemaining;
let notificationInterval;


//Question 2 Task 1
function startTimer() {
    timeRemaining = parseInt(document.getElementById('timerInput').value);
    if (isNaN(timeRemaining) || timeRemaining <= 0){
        alert("Please enter a positive number.");
        return;
    }

    document.getElementById('timerDisplay').textContent = `Time Remaining: ${timeRemaining}s`;

    countdown = setInterval(function() {
        timeRemaining--;
        document.getElementById('timerDisplay').textContent = `Time Remaining: ${timeRemaining}s`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000)
}

//Question 2 Task 2
function showDelayedNotification(delay) {
    setTimeout(function(){
        alert("Delayed notification");
    }, delay);
}

//Question 2 Task 3
function startRepeatingNotifications() {
    notificationInterval = setInterval(function() {
        alert("Repeated Notification");
    }, 3000);
}

function stopRepeatingNotifications() {
    clearInterval(notificationInterval);
    alert("Notifications stopped");
}