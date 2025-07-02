import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";

interface ChartContainerProps {
  children: React.ReactElement;
  config?: any;
}

export function ChartContainer({ children }: ChartContainerProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      {children}
    </ResponsiveContainer>
  );
}

export function ChartTooltip({ active, payload }: any) {
  if (active && payload?.length) {
    return <ChartTooltipContent value={payload[0].value} />;
  }
  return null;
}

interface ChartTooltipContentProps {
  value?: number;
  indicator?: string;
}

export function ChartTooltipContent({ value, indicator }: ChartTooltipContentProps) {
  return (
    <div className="bg-white p-2 shadow rounded text-sm text-gray-800">
      {indicator && <div>Indicador: {indicator}</div>}
      {value !== undefined && <div>Valor: {value}</div>}
    </div>
  );
}
