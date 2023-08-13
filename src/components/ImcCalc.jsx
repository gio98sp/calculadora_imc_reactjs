import { useState } from 'react';
import { Button } from './Button';
import './ImcCalc.css';

export const ImcCalc = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, '')
  }

  const handleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value)
    setHeight(updateValue)
  }

  const handleWeightChange = (e) => {
    const updateValue = validDigits(e.target.value)
    setWeight(updateValue)
  }

  const clearForm = (e) => {
    e.preventDefault();
    setHeight('');
    setWeight('');
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Exemplo 70,5"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="calcular" />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};
