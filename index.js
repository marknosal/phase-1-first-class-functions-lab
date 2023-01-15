// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length-2, drivers.length);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => (fare) => multiplier * fare;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selectedDrivers) {
    if (selectedDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (selectedDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    } else {
        return 'Wrong input';
    }
}