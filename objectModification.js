myCity = {
  name: "Belgrade",
};

myCity.popular = true;

myCity["location"] = "Serbia";

const yearProperty = "year";
myCity[yearProperty] = 2021;

let info = {
  popular: myCity.popular,
  year: myCity.year,
  location: myCity.location,
};
console.log(myCity);

delete myCity.popular;
delete myCity.year;
delete myCity.location;

myCity.info = info;
myCity.name = "BEG";
console.log(myCity);

delete myCity.info.location;
