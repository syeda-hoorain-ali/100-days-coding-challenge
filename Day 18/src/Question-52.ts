// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

type Phone = {
    brand: string;
    model: string;
    features: {
        storage: string;
        screenSize: string;
        batteryLife: string;
    }
}

const smartphone:Phone = {
    brand: "Vivo",
    model: "CPH2375",
    features: {
        storage: "128GB",
        screenSize: "6.56 inches",
        batteryLife: "15 hours"
    }
}

console.log(smartphone);

