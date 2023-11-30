import React from 'react';
import '../css/Results.css';

const Results = ({ mortgageData }) => {
  if (!mortgageData) {
    return (
      <div className="results-container">
        <h2 className="results-heading">Results</h2>
        <p>No results to display. Enter loan details and click Calculate.</p>
      </div>
    );
  }
  
  const { monthlyPayment, interest, principal } = mortgageData || {};

  return (
    <div className="results-container">
      <h2 className="results-heading">Results</h2>
      <div className="result-item">
        <span>Monthly Payment:</span>
        <span>${monthlyPayment ? monthlyPayment.toFixed(2) : 'N/A'}</span>
      </div>
      <div className="result-item">
        <span>Interest:</span>
        <span>${interest ? interest.toFixed(2) : 'N/A'}</span>
      </div>
      <div className="result-item">
        <span>Principal:</span>
        <span>${principal ? principal.toFixed(2) : 'N/A'}</span>
      </div>
    </div>
  );
};

export default Results;
