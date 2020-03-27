import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = event => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={event => setText(event.target.value)}
            placeholder="Enter text ..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />{" "}
          </label>
          <input
            type="number"
            value={amount}
            onChange={event => setAmount(event.target.value)}
            placeholder="Enter amount ..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
