export class Measurement {
    location: string
    city: string
    country: string
    parameter: string
    value: number
    unit: string
    date: {
        utc: string,
        local: string
    }
    coordinates: {
        latitude: string,
        longitude: string,
    }
}