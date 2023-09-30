// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
  //   let theFirstTwoDrivers = [];
  //   theFirstTwoDrivers.push(arrayOfDrivers[0], arrayOfDrivers[1]);
  //   return theFirstTwoDrivers;
};
const returnLastTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(-2);
  //   let theLastTwoDrivers = [];
  //   let lastDriverIndex1 = arrayOfDrivers.length - 1;
  //   let lastDriverIndex2 = arrayOfDrivers.length - 2;
  //   theLastTwoDrivers.push(
  //     arrayOfDrivers[lastDriverIndex2],
  //     arrayOfDrivers[lastDriverIndex1]
  //   );
  //   return theLastTwoDrivers;
};
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (integer) => {
  return function fareQuintupler(fare) {
    return integer * fare;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (arrayOfDrivers, selectFunction) {
  return selectFunction(arrayOfDrivers);
};
