// src/Dropdown.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dropdown = ({ url, label, onChange, options = [], valueKey = 'id', labelKey = 'name', selectedValue }) => {
  const [localOptions, setLocalOptions] = useState(options);

  useEffect(() => {
    if (url) {
      axios.get(url)
        .then(response => {
          setLocalOptions(response.data);
        })
        .catch(error => {
          console.error('Erro ao carregar as opções:', error);
        });
    } else {
      setLocalOptions(options);
    }
  }, [url, options]);

  return (
    <div>
      <label>{label}</label>
      <select value={selectedValue} onChange={onChange}>
        <option value="">Selecione uma opção</option>
        {localOptions.map(option => (
          <option key={option[valueKey]} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
