export class Event {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  date: Date;
  country: string;
  city: string;
  description: string;

  static create(id: number, name: string, address: string, latitude: number, longitude: number, date: Date, country: string, city: string, description: string){
    const event = new Event();
    event.id = id;
    event.name = name;
    event.address = address;
    event.latitude = latitude;
    event.longitude = longitude;
    event.date = date;
    event.country = country;
    event.city = city;
    event.description = description;
    return event;
  }
}