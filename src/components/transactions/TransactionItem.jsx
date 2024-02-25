import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div className="flex">
        <span>${transaction.amount}</span>
        <div className="bg-red-500 rounded full h-full w-5 flex justify-center items-center">
          <button
            className="font-bold text-white"
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            x
          </button>
        </div>
      </div>
    </li>
  );
}
