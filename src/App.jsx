import React, { useState } from 'react';
import Form from './components/Form'
import Results from './components/Results';
import './App.css';

const App = () => {
  const [mortgageData, setMortgageData] = useState(null);

  const calculateMortgage = (formData) => {
    const { loanAmount, interestRate, loanTerm, propertyTax, paymentFrequency } = formData;

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

    const monthlyPayment = (loanAmount * (numerator / denominator)) + (propertyTax / 12);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
    const totalPrincipal = loanAmount;

    setMortgageData({
      loanAmount,
      interestRate,
      loanTerm,
      propertyTax,
      paymentFrequency,
      monthlyPayment,
      totalPayment,
      totalInterest,
      totalPrincipal,
    });
  };

  return (
    <div className="app-container">
      <header>
        <h1>Mortgage Calculator App</h1>
      </header>
      <div className="content-container">
        <section className="calculator-section">
          {/* <h2>Loan Configuration</h2> */}
          <Form onCalculate={calculateMortgage} />
        </section>
        <section className="results-section">
          <h2>Results</h2>
          <Results mortgageData={mortgageData} />
        </section>
      </div>
    </div>
  );
};

export default App;
