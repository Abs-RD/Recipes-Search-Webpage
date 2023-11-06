import React, { useState } from 'react';
import { DataDisplayer } from './DataDisplayer';

export function SearchBar() {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form
        className='form-container'
        onSubmit={handleSubmit}
        style={{ display: 'inline-block' }}
      >
        <label className='label displayer-title'>
          What ingredient would you use today?
        </label>
        <br />
        <input
          className='input'
          type='text'
          aria-label='ingredient chosen'
          placeholder='Search for your ingredient'
          value={term}
          onChange={handleChange}
        />
      </form>
      <DataDisplayer ingredient={term} />
    </div>
  );
}
