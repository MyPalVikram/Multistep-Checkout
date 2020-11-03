class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditcard: '',
      expiration: '',
      cvv: '',
      billingzip: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.paymentSubmit(this.state);
    this.props.startConfirm();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "payment"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "paymentTitle"
    }, "Please Enter Your Payment Information"), /*#__PURE__*/React.createElement("input", {
      className: "creditCard",
      placeholder: "Credit Card Number",
      name: "creditcard",
      value: this.state.creditcard,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "expiration",
      placeholder: "Expiration (e.g 10/22)",
      name: "expiration",
      value: this.state.expiration,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "CVV",
      placeholder: "CVV",
      name: "cvv",
      value: this.state.cvv,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "billingzip",
      placeholder: "Billing Zipcode",
      name: "billingzip",
      value: this.state.billingzip,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSubmit,
      className: "submitPayment"
    }, "Confirm Order"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h5", {
      className: "warning"
    }, "Once \"Confirm Order\" Has Been Clicked Payment Will Be Processed"));
  }

}

export default Payment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1BheW1lbnQuanN4Il0sIm5hbWVzIjpbIlBheW1lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNyZWRpdGNhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ3ppcCIsImhhbmRsZUlucHV0IiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInBheW1lbnRTdWJtaXQiLCJzdGFydENvbmZpcm0iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU4sU0FBc0JDLEtBQUssQ0FBQ0MsU0FBNUIsQ0FBc0M7QUFDcENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsVUFBVSxFQUFFLEVBREQ7QUFFWEMsTUFBQUEsVUFBVSxFQUFFLEVBRkQ7QUFHWEMsTUFBQUEsR0FBRyxFQUFFLEVBSE07QUFJWEMsTUFBQUEsVUFBVSxFQUFFO0FBSkQsS0FBYjtBQU9BLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0Q7O0FBRURELEVBQUFBLFdBQVcsQ0FBQ0csS0FBRCxFQUFRO0FBQ2pCQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFDWixPQUFDRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsSUFBZCxHQUFxQkosS0FBSyxDQUFDRyxNQUFOLENBQWFFO0FBRHRCLEtBQWQ7QUFHRDs7QUFFRE4sRUFBQUEsWUFBWSxDQUFDQyxLQUFELEVBQVE7QUFDbEJBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLFNBQUtWLEtBQUwsQ0FBV2UsYUFBWCxDQUF5QixLQUFLZCxLQUE5QjtBQUNBLFNBQUtELEtBQUwsQ0FBV2dCLFlBQVg7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNBO0FBQUksTUFBQSxTQUFTLEVBQUM7QUFBZCwrQ0FEQSxlQUdBO0FBQ0EsTUFBQSxTQUFTLEVBQUMsWUFEVjtBQUVBLE1BQUEsV0FBVyxFQUFDLG9CQUZaO0FBR0EsTUFBQSxJQUFJLEVBQUMsWUFITDtBQUlBLE1BQUEsS0FBSyxFQUFFLEtBQUtoQixLQUFMLENBQVdDLFVBSmxCO0FBS0EsTUFBQSxRQUFRLEVBQUUsS0FBS0k7QUFMZixNQUhBLGVBV0EsK0JBWEEsZUFZQSwrQkFaQSxlQWNBO0FBQ0EsTUFBQSxTQUFTLEVBQUMsWUFEVjtBQUVBLE1BQUEsV0FBVyxFQUFDLHdCQUZaO0FBR0EsTUFBQSxJQUFJLEVBQUMsWUFITDtBQUlBLE1BQUEsS0FBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0UsVUFKbEI7QUFLQSxNQUFBLFFBQVEsRUFBRSxLQUFLRztBQUxmLE1BZEEsZUFzQkEsK0JBdEJBLGVBdUJBLCtCQXZCQSxlQXlCQTtBQUNBLE1BQUEsU0FBUyxFQUFDLEtBRFY7QUFFQSxNQUFBLFdBQVcsRUFBQyxLQUZaO0FBR0EsTUFBQSxJQUFJLEVBQUMsS0FITDtBQUlBLE1BQUEsS0FBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0csR0FKbEI7QUFLQSxNQUFBLFFBQVEsRUFBRSxLQUFLRTtBQUxmLE1BekJBLGVBaUNBLCtCQWpDQSxlQWtDQSwrQkFsQ0EsZUFvQ0E7QUFDQSxNQUFBLFNBQVMsRUFBQyxZQURWO0FBRUEsTUFBQSxXQUFXLEVBQUMsaUJBRlo7QUFHQSxNQUFBLElBQUksRUFBQyxZQUhMO0FBSUEsTUFBQSxLQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXSSxVQUpsQjtBQUtBLE1BQUEsUUFBUSxFQUFFLEtBQUtDO0FBTGYsTUFwQ0EsZUE0Q0EsK0JBNUNBLGVBNkNBLCtCQTdDQSxlQStDQTtBQUFRLE1BQUEsT0FBTyxFQUFFLEtBQUtFLFlBQXRCO0FBQW9DLE1BQUEsU0FBUyxFQUFDO0FBQTlDLHVCQS9DQSxlQWdEQSwrQkFoREEsZUFpREE7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLDJFQWpEQSxDQURGO0FBcUREOztBQWxGbUM7O0FBcUZ0QyxlQUFlWixPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGF5bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNyZWRpdGNhcmQ6ICcnLFxuICAgICAgZXhwaXJhdGlvbjogJycsXG4gICAgICBjdnY6ICcnLFxuICAgICAgYmlsbGluZ3ppcDogJydcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucGF5bWVudFN1Ym1pdCh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnByb3BzLnN0YXJ0Q29uZmlybSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudCc+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdwYXltZW50VGl0bGUnPlBsZWFzZSBFbnRlciBZb3VyIFBheW1lbnQgSW5mb3JtYXRpb248L2gyPlxuXG4gICAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT0nY3JlZGl0Q2FyZCdcbiAgICAgIHBsYWNlaG9sZGVyPSdDcmVkaXQgQ2FyZCBOdW1iZXInXG4gICAgICBuYW1lPSdjcmVkaXRjYXJkJ1xuICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3JlZGl0Y2FyZH1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgPjwvaW5wdXQ+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPSdleHBpcmF0aW9uJ1xuICAgICAgcGxhY2Vob2xkZXI9J0V4cGlyYXRpb24gKGUuZyAxMC8yMiknXG4gICAgICBuYW1lPSdleHBpcmF0aW9uJ1xuICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXhwaXJhdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgPjwvaW5wdXQ+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPSdDVlYnXG4gICAgICBwbGFjZWhvbGRlcj0nQ1ZWJ1xuICAgICAgbmFtZT0nY3Z2J1xuICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3Z2fVxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICA+PC9pbnB1dD5cblxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9J2JpbGxpbmd6aXAnXG4gICAgICBwbGFjZWhvbGRlcj0nQmlsbGluZyBaaXBjb2RlJ1xuICAgICAgbmFtZT0nYmlsbGluZ3ppcCdcbiAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJpbGxpbmd6aXB9XG4gICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cbiAgICAgID48L2lucHV0PlxuXG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9J3N1Ym1pdFBheW1lbnQnPkNvbmZpcm0gT3JkZXI8L2J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAgPGg1ICBjbGFzc05hbWU9J3dhcm5pbmcnPk9uY2UgXCJDb25maXJtIE9yZGVyXCIgSGFzIEJlZW4gQ2xpY2tlZCBQYXltZW50IFdpbGwgQmUgUHJvY2Vzc2VkPC9oNT5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudDsiXX0=