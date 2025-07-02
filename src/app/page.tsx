'use client';

import {
  PiggyBank,
  Plus,
  Banknote,
  Utensils,
  ShoppingCart,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

import './globals.css';

const chartData = [
  { month: 'Janeiro', desktop: 186, mobile: 80 },
  { month: 'Fevereiro', desktop: 305, mobile: 200 },
  { month: 'Março', desktop: 237, mobile: 120 },
  { month: 'Abril', desktop: 73, mobile: 190 },
  { month: 'Maio', desktop: 209, mobile: 130 },
  { month: 'Junho', desktop: 214, mobile: 140 },
];

export default function Home() {
  return (
    <div className="container">
      {/* Top Header */}
      <header className="top-bar">
        <PiggyBank size={32} color="#00C851" />
        <button className="add-button">
          <Plus size={24} color="#333" />
        </button>
      </header>

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <div className="icon">
            <Banknote size={24} color="#fff" />
          </div>
          <h3>Entradas</h3>
          <p className="green">R$ 7.840,56</p>
          <span>Somada todas as entradas do período.</span>
        </div>

        <div className="card">
          <div className="icon">
            <Banknote size={24} color="#fff" />
          </div>
          <h3>Saídas</h3>
          <p className="red">R$ 1.580,45</p>
          <span>Somada todas as saídas do período.</span>
        </div>

        <div className="card">
          <div className="icon">
            <Banknote size={24} color="#fff" />
          </div>
          <h3>Balanço</h3>
          <p className="green">R$ 6.260,11</p>
          <span>Somada todas as entradas e saídas do período.</span>
        </div>
      </div>

      {/* Análise e Categorias */}
      <div className="section">
        <div className="analysis">
          <h2>Análise</h2>

          <Card>
            <CardHeader>
              <CardTitle>Visitas Mensais</CardTitle>
              <CardDescription>Janeiro a Junho de 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer>
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: '3 3' }}
                    content={<ChartTooltip />}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="#00C851"
                    radius={4}
                  />
                  <Bar
                    dataKey="mobile"
                    fill="#00C851"
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Crescendo 5.2% este mês <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Dados dos últimos 6 meses
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="categories">
          <h2>Categorias</h2>
          <div className="category">
            <Utensils size={16} />
            <span>Alimentação</span>
            <span>10</span>
            <span>R$ 1.508,15</span>
          </div>
          <div className="category">
            <ShoppingCart size={16} />
            <span>Mercado</span>
            <span>8</span>
            <span>R$ 508,90</span>
          </div>
          <div className="category">
            <GraduationCap size={16} />
            <span>Educação</span>
            <span>10</span>
            <span>R$ 1.508,15</span>
          </div>
        </div>
      </div>

      {/* Transações */}
      <div className="transactions">
        <h2>Transações</h2>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Banco</th>
              <th>Data</th>
              <th>Parcelas</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <tr key={i}>
                <td>
                  <ShoppingCart size={14} /> Supermercado Big Master
                </td>
                <td>Crédito</td>
                <td className="red">R$ 896,00</td>
                <td>Nubank</td>
                <td>21/03/2024</td>
                <td>1/1</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
