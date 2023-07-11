import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    // Set the required headers for the API request
    const headers = {
        "X-RapidAPI-Key": "a0511a10bcmsh74c3933e1ddd12ep1cdd13jsne299a6c24e26",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    // Set the required headers for the API request
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        { headers: headers }
    );

    // Parse the response as JSON
    const result = await response.json();

    return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append(
        "customer",
        process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
    );
    // url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append("angle", `${angle}`);

    return `${url}`;
};

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

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${
        window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname;
};
