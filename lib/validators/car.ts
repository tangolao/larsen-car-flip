export type CarFormValues = {
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  description: string | null;
  imageUrl: string | null;
};

export function validateCarForm(values: CarFormValues) {
  const errors: string[] = [];

  if (!values.title.trim()) {
    errors.push("Tittel er påkrevd.");
  }

  if (!Number.isFinite(values.price) || values.price <= 0) {
    errors.push("Pris må være større enn 0.");
  }
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 15;
  if (
    !Number.isFinite(values.year) ||
    values.year < 1950 ||
    values.year > maxYear
  ) {
    errors.push(`Årsmodell må være mellom 1950 og ${maxYear}.`);
  }

  if (!Number.isFinite(values.mileage) || values.mileage < 0) {
    errors.push("Kilometer kan ikke være negativ.");
  }

  if (!values.fuel.trim()) {
    errors.push("Drivstoff er påkrevd.");
  }

  if (!values.transmission.trim()) {
    errors.push("Girkasse er påkrevd.");
  }

  return errors;
}
