import { CarCard } from "./CarCard";

type Car = {
  id: number;
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  status: string;
  imageUrl: string | null;
};

type LoadMoreCarsProps = {
  cars: Car[];
};

export function LoadMoreCars({ cars }: LoadMoreCarsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
