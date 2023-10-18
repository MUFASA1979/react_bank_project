import React from "react";

const Transactions = () => {
  return (
    <div className="display flex justify-items-center">
      <h1>
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          DEPOSIT
        </button>
      </h1>
      <h1>
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          WITHDRAW
        </button>
      </h1>
      <h1>
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          TRANSFER
        </button>
      </h1>
    </div>
  );
};

export default Transactions;
