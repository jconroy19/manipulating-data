import { companiesData } from "./companies-data";

const extraRecord = {
  title: "JS in FM Training",
  type: "Binge Mode",
  cohort: "2",
  startDate: "2022-04-12",
};

const before = document.getElementById("before");
const after = document.getElementById("after");

//TODO: Extract an element from the array.
//TODO: Add elements to beginning and end of array.
//TODO: Remove Elements from end of array.
//TODO: Create a new array from old data.
//TODO: Filter for a certain state.
//TODO: Find the first element with a certain name.
//TODO: Create a new array with just elements of a certain state.
//TODO: Create buttons for each record.
//functions are here

//const manipulatedData = [];
//const manipulatedData = companiesData.pop();
//const manipulatedData = companiesData.unshift(extraRecord);
// const manipulatedData = companiesData.push(extraRecord);

// const manipulatedData = companiesData.map(function(company) {
//   // return company.fieldData.CompanyName;
//   // return company.fieldData.City;
//   // return company.fieldData.Id;
//   return {
//     company: company.fieldData.CompanyName, 
//     state: company.fieldData.State,
//  };
// });

// const manipulatedData = companiesData.map(mapOverData);

const mapOverData = function (e, i){
// const mapOverData = function (e){
  return{
    company: e.fieldData.CompanyName,
    state: e.fieldData.State,
  };
};

const sortBy = (a, b) =>  //Alternate way to write function with arrow
a.fieldData.CompanyName > b.fieldData.CompanyName;  


const filterforState = function(company) {
  return company.fieldData.State === "TX";
};
// const manipulatedData = companiesData.find(filterforState);
// const manipulatedData = companiesData.every(filterforState);
// const manipulatedData = companiesData.filter(filterforState);
// const manipulatedData = companiesData.filter(filterforState).map(mapOverData);

const doForEach = function(company, i){
// const doForEach = function(company){
  // console.log(company);
  // company.index = i;
  // company.test = "Test";
  const button = document.createElement("button");
  button.innerHTML = company.fieldData.CompanyName;
  button.className = "btn btn-sm btn-outline-danger m-1 col-5"; //adding style (bootstrap uses 12 sections)
  button.id = company.fieldData.Id;
  button.addEventListener("click", function () {
    // alert("Hi");
    // console.log(this.innerHTML);
    console.log(this.id);
  })
  after.appendChild(button);

};
// const manipulatedData = companiesData.forEach(doForEach));



companiesData.sort(sortBy).forEach(doForEach);
// companiesData.sort((a, b) => (a.fieldData.CompanyName > b.fieldData.CompanyName) ? 1 : -1).forEach(doForEach);
// companiesData.forEach(doForEach);
// companiesData.filter(filterforState).forEach(doForEach);

// after.innerHTML = JSON.stringify(manipulatedData, null, 2);
// before.innerHTML = JSON.stringify(companiesData, null, 2);
