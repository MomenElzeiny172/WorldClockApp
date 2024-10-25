export interface City {
  city: string;
  offset: number;
}

const cities: City[] = [
  { city: 'Vancouver', offset: -7 },
  { city: 'New York', offset: -4 },
  { city: 'London', offset: 0 },
  { city: 'Casablanca', offset: 1 },
  { city: 'Amsterdam', offset: 2 },
  { city: 'Riyadh', offset: 3 },
  { city: 'Moscow', offset: 3 },
  { city: 'Tehran', offset: 3.5 },
  { city: 'Dubai', offset: 4 },
  { city: 'Islamabad', offset: 5 },
  { city: 'New Delhi', offset: 5.5 },
  { city: 'Singapore', offset: 8 },
  { city: 'Beijing', offset: 8 },
  { city: 'Canberra', offset: 10 },
];

export default cities;
