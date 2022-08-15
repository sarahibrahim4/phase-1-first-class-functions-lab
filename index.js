// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    const driver=[...drivers];
    return driver.slice(0,2);
}
// returnFirstTwoDrivers();

const returnLastTwoDrivers = function(drivers){
    const driver2=[...drivers];
    return driver2.slice(2,4);
}
// returnLastTwoDrivers();


const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
selectingDrivers[0]();
selectingDrivers[1]();

function createFareMultiplier(number){
return function fareMultiplier(fare){
return fare*number;
}
}

function fareDoubler(fare){
    return fare*2;
}
fareDoubler(10);

function fareTripler(fare){
    return fare*3;
}
fareTripler(12);

function selectDifferentDrivers(drivers,fn){
    const driver3=[...drivers];
    if (fn===returnFirstTwoDrivers){
        return driver3.slice(0,2);
    }
    else if(fn===returnLastTwoDrivers){
        return driver3.slice(2,4);
    }
    return driver3;
}