"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type CarStatusChartProps = {
  availableCount: number;
  reservedCount: number;
  soldCount: number;
};

export function CarStatusChart({
  availableCount,
  reservedCount,
  soldCount,
}: CarStatusChartProps) {
  const data = [
    {
      status: "Til salgs",
      antall: availableCount,
    },
    {
      status: "Reservert",
      antall: reservedCount,
    },
    {
      status: "Solgt",
      antall: soldCount,
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <div>
        <p className="text-sm font-medium text-gray-500">Bilstatus</p>
        <h2 className="mt-1 text-xl font-bold text-gray-900">
          Fordeling etter status
        </h2>
      </div>

      <div className="mt-6 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="status" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="antall" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
