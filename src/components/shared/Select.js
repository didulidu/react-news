import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ currentValue, onChange, list, itemKey, itemValue }) => (
  <select value={currentValue} onChange={onChange}>
    {list.map((item) => (
      <option key={item[itemKey]}>{item[itemValue]}</option>
    ))}
  </select>
);

Select.propTypes = {
  currentValue: PropTypes.string,
  handleChange: PropTypes.func,
  list: PropTypes.array,
  itemKey: PropTypes.string,
  itemValue: PropTypes.string,
};

Select.defaultProps = {
  currentValue: '',
  handleChange: () => {},
  list: [],
  itemKey: 'code',
  itemValue: 'name',
};

export default Select;
