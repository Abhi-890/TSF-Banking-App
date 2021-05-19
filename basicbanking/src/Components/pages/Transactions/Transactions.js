import React, { useContext, useEffect } from "react";
import globalContext from "../../context/globalContext";
import "./customer.css";

const Transactions = () => {
  const { transactions, getTransactions, loading } = useContext(globalContext);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div className="transactionContainer">
      {loading && <h2 className="loading">loading ...</h2>}
      {!loading && (
        <table>
          <thead>
            <tr className="transaction">
              <th className="TFrom">FROM</th>
              <th className="TTO">TO</th>
              <th className="TAmount">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((item) => (
              <tr key={item._id} className="transaction">
                <td className="TFrom">{item.from.name}</td>
                <td className="TTO">{item.to.name}</td>
                <td className="TAmount">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Transactions;
