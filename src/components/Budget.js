import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const changeBudget = (value) => {
    if (value > 20000) {
      alert("The value cannot be more then " + currency + 20000);
      return;
    }
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    if (value < totalExpenses) {
      alert("The value cannot be lower then spending");
      return;
    }
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
  };
  return (
    <div className="alert alert-secondary">
      <div>
        Budget: {currency}
        <input
          required="required"
          type="number"
          id="cost"
          value={budget}
          style={{ size: 10 }}
          onChange={(event) => changeBudget(event.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default Budget;
