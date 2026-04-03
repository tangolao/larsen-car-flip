export type CarFormErrors = {
  title?: string;
  price?: string;
  year?: string;
  mileage?: string;
  fuel?: string;
  transmission?: string;
};
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

export function validateCarForm(values: CarFormValues): CarFormErrors {
  const errors: CarFormErrors = {};

  if (!values.title.trim()) {
    errors.title = "Tittel er påkrevd.";
  }

  if (!Number.isFinite(values.price) || values.price <= 0) {
    errors.price = "Pris må være større enn 0.";
  }

  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 15;

  if (
    !Number.isFinite(values.year) ||
    values.year < 1950 ||
    values.year > maxYear
  ) {
    errors.year = `Årsmodell må være mellom 1950 og ${maxYear}.`;
  }

  if (!Number.isFinite(values.mileage) || values.mileage < 0) {
    errors.mileage = "Kilometer kan ikke være negativ.";
  }

  if (!values.fuel.trim()) {
    errors.fuel = "Drivstoff er påkrevd.";
  }

  if (!values.transmission.trim()) {
    errors.transmission = "Girkasse er påkrevd.";
  }

  return errors;
}
