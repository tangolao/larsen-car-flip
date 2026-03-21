type Props = {
  params: {
    id: string;
  };
};

export default function CarDetailPage({ params }: Props) {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Car ID: {params.id}</h1>
    </main>
  );
}
