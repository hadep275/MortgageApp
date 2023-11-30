import React, { useState } from 'react';
import '../css/Form.css';

const Form = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState(100000); // Default loan amount
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [propertyTax, setPropertyTax] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('monthly');

  const handleCalculate = () => {
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
      console.error("Please fill in all required fields with valid values.");
      return;
    }

    onCalculate({
      loanAmount: parseFloat(loanAmount),
      interestRate: parseFloat(interestRate),
      loanTerm: parseInt(loanTerm),
      propertyTax: parseFloat(propertyTax),
      paymentFrequency,
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">CALCULATOR</h2>
      <div className="input-group">
        <label htmlFor="loanAmount">Mortgage Amount</label>
        <input
          type="range"
          id="loanAmount"
          min="10000"
          max="3000000"
          step="10000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <span>${loanAmount}</span>
      </div>
      <div className="input-group">
        <label htmlFor="paymentFrequency">Payment Frequency</label>
        <select
          id="paymentFrequency"
          value={paymentFrequency}
          onChange={(e) => setPaymentFrequency(e.target.value)}
        >
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="annually">Annually</option>
        </select>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default Form;
