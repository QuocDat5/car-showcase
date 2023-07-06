export async function fetchCars() {
    // Set the required headers for the API request
    const headers = {
        "X-RapidAPI-Key": "a0511a10bcmsh74c3933e1ddd12ep1cdd13jsne299a6c24e26",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    // Set the required headers for the API request
    const response = await fetch(
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
        { headers: headers }
    );

    // Parse the response as JSON
    const result = await response.json();

    return result;
}

// A function to calculate car rent base on fuel efficiency & model year
export const calculateCarRent = (city_mpg: number, year: number) => {
    // Base rental price per day in dollars
    const basePricePerDay = 50;
    // Additional rate per mile driven
    const mileageFactor = 0.1;
    // Additional rate per year of vehicle age
    const ageFactor = 0.05;

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
