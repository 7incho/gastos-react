import { VictoryPie } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentaje = Math.round(
    (totalExpense / totalIncomes) * 100
  );
  const totalIncomesPercentaje = 100 - totalExpensesPercentaje;

  return (
    <div>
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        animate={{ duration: 200 }}
        data={[
          { x: "Gastos", y: totalExpensesPercentaje },
          { x: "Ingresos", y: totalIncomesPercentaje },
        ]}
        labels={({ datum }) => `${datum.y}%`}
      />
    </div>
  );
}

export default ExpenseChart;
