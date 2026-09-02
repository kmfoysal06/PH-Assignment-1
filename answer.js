// question 1
function describeValue(g) {
    return `${typeof(g)} | ${g ? "truthy" : "falsy"}`;
}

// question 2
function getDayType(day) {
    day = day.toLowerCase();
    switch(day) {
        case "friday":
            return "Weekend";
            break;
        case "saturday":
            return "Weekend";
            break;
        case "sunday":
            return "Working Day";
            break;
        case "monday":
            return "Working Day";
            break;
        case "tuesday":
            return "Working Day";
            break;
        case "wednesday":
            return "Working Day";
            break;
        case "thursday":
            return "Working Day";
            break;
        default: 
            return "Invalid Day"
    }
}


// question 3
function validateUsername(username) {
    if(username.length < 4) {
        return "Too Short";
    }
    if(username.includes(" ")) {
        return "No Space Allowed";
    }
    if(username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}


// question 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let cost = 50;
    if(distance <= 2) {
        return cost;
    }
    const extra = distance - 2;
    cost = cost + (extra * 15);

    cost = cost + (waitingMinutes * 2);

    if(isNight) {
        cost = cost + (cost * (20 / 100));
    }
    return cost;

}

// question 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    if(target <= scored) {
        return "Won";
    }
    if(ballsLeft <= 0) {
        return "Lost";
    }
    const requiredRate = ((target - scored) / ballsLeft) * 6;

    if(requiredRate <= 6) {
        return `Need ${(target - scored)} runs in ${ballsLeft} balls | Comfortable`;
    }
    if(requiredRate <= 12) {
        return `Need ${(target - scored)} runs in ${ballsLeft} balls | Tough`;
    }

    return `Need ${(target - scored)} runs in ${ballsLeft} balls | Almost Impossible`;

}
