export class Location {
    location: string;
    city: string
    country: string
    count: number
    sourceName: string
    sourceNames: string[]
    parameters: string[]
    coordinates: {
        latitude: number,
        longitude: number
    }
    firstUpdated: string
    lastUpdated: string
}