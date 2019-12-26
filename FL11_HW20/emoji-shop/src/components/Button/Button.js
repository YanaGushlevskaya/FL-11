import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {

  render() {
    const { isActive, price, type, onPurchaseItem } = this.props;

    const className = isActive ? 'btn-secondary' : 'btn-primary';

    return (
      <div className={`btn ${className}`} onClick={onPurchaseItem}>
        <span>{type} ({price}$)</span>
      </div>
    );
  }
}
// const Button = ({isActive, price, type, onPurchaseItem}) => {
//     const className = isActive === 'true' ? 'btn-primary' : 'btn-secondary';
//     const state = isActive !== 'true'  ? 'disabled' : '';

// }

// export default Button;
