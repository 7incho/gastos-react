import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between">
      <h3>Tu Balance:</h3>
      <h2 className="font-bold text-xl">${total}</h2>
    </div>
  );
}

export default Balance;
