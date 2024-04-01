// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehiclesType;
(function (VehiclesType) {
    VehiclesType["Car"] = "car";
    VehiclesType["Truck"] = "truck";
    VehiclesType["Motorcycle"] = "motorcycle";
})(VehiclesType || (VehiclesType = {}));
console.log(VehiclesType.Car);
export {};
