class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineone: '',
      linetwo: '',
      city: '',
      state: '',
      zipcode: ''
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
    this.props.shippingSubmit(this.state);
    this.props.startPayment();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "shipping"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "shippingTitle"
    }, "Please Enter Your Preferred Shipping Address"), /*#__PURE__*/React.createElement("input", {
      className: "addressline1",
      placeholder: "Address Line 1",
      name: "lineone",
      value: this.state.lineone,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "addressline2",
      placeholder: "Address Line 2",
      name: "linetwo",
      value: this.state.linetwo,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "city",
      placeholder: "City",
      name: "city",
      value: this.state.city,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "state",
      placeholder: "State",
      name: "state",
      value: this.state.state,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      className: "zipcode",
      placeholder: "Zipcode",
      name: "zipcode",
      value: this.state.zipcode,
      onChange: this.handleInput
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleSubmit,
      className: "continuePayment"
    }, "Continue To Payment Method"));
  }

}

export default Shipping;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NoaXBwaW5nLmpzeCJdLCJuYW1lcyI6WyJTaGlwcGluZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibGluZW9uZSIsImxpbmV0d28iLCJjaXR5IiwiemlwY29kZSIsImhhbmRsZUlucHV0IiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNoaXBwaW5nU3VibWl0Iiwic3RhcnRQYXltZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFOLFNBQXVCQyxLQUFLLENBQUNDLFNBQTdCLENBQXVDO0FBQ3JDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLE9BQU8sRUFBRSxFQURFO0FBRVhDLE1BQUFBLE9BQU8sRUFBRSxFQUZFO0FBR1hDLE1BQUFBLElBQUksRUFBRSxFQUhLO0FBSVhILE1BQUFBLEtBQUssRUFBRSxFQUpJO0FBS1hJLE1BQUFBLE9BQU8sRUFBRTtBQUxFLEtBQWI7QUFRQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQUVERCxFQUFBQSxXQUFXLENBQUNHLEtBQUQsRUFBUTtBQUNqQkEsSUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQ1osT0FBQ0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLElBQWQsR0FBcUJKLEtBQUssQ0FBQ0csTUFBTixDQUFhRTtBQUR0QixLQUFkO0FBR0Q7O0FBRUROLEVBQUFBLFlBQVksQ0FBQ0MsS0FBRCxFQUFRO0FBQ2xCQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxTQUFLVixLQUFMLENBQVdlLGNBQVgsQ0FBMEIsS0FBS2QsS0FBL0I7QUFDQSxTQUFLRCxLQUFMLENBQVdnQixZQUFYO0FBRUQ7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDQTtBQUFJLE1BQUEsU0FBUyxFQUFDO0FBQWQsc0RBREEsZUFHQTtBQUNBLE1BQUEsU0FBUyxFQUFDLGNBRFY7QUFFQSxNQUFBLFdBQVcsRUFBQyxnQkFGWjtBQUdBLE1BQUEsSUFBSSxFQUFDLFNBSEw7QUFJQSxNQUFBLEtBQUssRUFBRSxLQUFLaEIsS0FBTCxDQUFXQyxPQUpsQjtBQUtBLE1BQUEsUUFBUSxFQUFFLEtBQUtJO0FBTGYsTUFIQSxlQVdBLCtCQVhBLGVBWUEsK0JBWkEsZUFjQTtBQUNBLE1BQUEsU0FBUyxFQUFDLGNBRFY7QUFFQSxNQUFBLFdBQVcsRUFBQyxnQkFGWjtBQUdBLE1BQUEsSUFBSSxFQUFDLFNBSEw7QUFJQSxNQUFBLEtBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdFLE9BSmxCO0FBS0EsTUFBQSxRQUFRLEVBQUUsS0FBS0c7QUFMZixNQWRBLGVBc0JBLCtCQXRCQSxlQXVCQSwrQkF2QkEsZUF5QkE7QUFDQSxNQUFBLFNBQVMsRUFBQyxNQURWO0FBRUEsTUFBQSxXQUFXLEVBQUMsTUFGWjtBQUdBLE1BQUEsSUFBSSxFQUFDLE1BSEw7QUFJQSxNQUFBLEtBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdHLElBSmxCO0FBS0EsTUFBQSxRQUFRLEVBQUUsS0FBS0U7QUFMZixNQXpCQSxlQWlDQSwrQkFqQ0EsZUFrQ0EsK0JBbENBLGVBb0NBO0FBQ0EsTUFBQSxTQUFTLEVBQUMsT0FEVjtBQUVBLE1BQUEsV0FBVyxFQUFDLE9BRlo7QUFHQSxNQUFBLElBQUksRUFBQyxPQUhMO0FBSUEsTUFBQSxLQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXQSxLQUpsQjtBQUtBLE1BQUEsUUFBUSxFQUFFLEtBQUtLO0FBTGYsTUFwQ0EsZUE0Q0EsK0JBNUNBLGVBNkNBLCtCQTdDQSxlQStDQTtBQUNBLE1BQUEsU0FBUyxFQUFDLFNBRFY7QUFFQSxNQUFBLFdBQVcsRUFBQyxTQUZaO0FBR0EsTUFBQSxJQUFJLEVBQUMsU0FITDtBQUlBLE1BQUEsS0FBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0ksT0FKbEI7QUFLQSxNQUFBLFFBQVEsRUFBRSxLQUFLQztBQUxmLE1BL0NBLGVBdURBLCtCQXZEQSxlQXdEQSwrQkF4REEsZUEwREE7QUFBUSxNQUFBLE9BQU8sRUFBRSxLQUFLRSxZQUF0QjtBQUFvQyxNQUFBLFNBQVMsRUFBQztBQUE5QyxvQ0ExREEsQ0FERjtBQThERDs7QUE1Rm9DOztBQStGdkMsZUFBZVosUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbmVvbmU6ICcnLFxuICAgICAgbGluZXR3bzogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcGNvZGU6ICcnXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVJbnB1dChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnNoaXBwaW5nU3VibWl0KHRoaXMuc3RhdGUpO1xuICAgIHRoaXMucHJvcHMuc3RhcnRQYXltZW50KCk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NoaXBwaW5nJz5cbiAgICAgIDxoMiBjbGFzc05hbWU9J3NoaXBwaW5nVGl0bGUnPlBsZWFzZSBFbnRlciBZb3VyIFByZWZlcnJlZCBTaGlwcGluZyBBZGRyZXNzPC9oMj5cblxuICAgICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9J2FkZHJlc3NsaW5lMSdcbiAgICAgIHBsYWNlaG9sZGVyPSdBZGRyZXNzIExpbmUgMSdcbiAgICAgIG5hbWU9J2xpbmVvbmUnXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saW5lb25lfVxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICA+PC9pbnB1dD5cblxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9J2FkZHJlc3NsaW5lMidcbiAgICAgIHBsYWNlaG9sZGVyPSdBZGRyZXNzIExpbmUgMidcbiAgICAgIG5hbWU9J2xpbmV0d28nXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saW5ldHdvfVxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICA+PC9pbnB1dD5cblxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9J2NpdHknXG4gICAgICBwbGFjZWhvbGRlcj0nQ2l0eSdcbiAgICAgIG5hbWU9J2NpdHknXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fVxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICA+PC9pbnB1dD5cblxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9J3N0YXRlJ1xuICAgICAgcGxhY2Vob2xkZXI9J1N0YXRlJ1xuICAgICAgbmFtZT0nc3RhdGUnXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdGF0ZX1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgPjwvaW5wdXQ+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPSd6aXBjb2RlJ1xuICAgICAgcGxhY2Vob2xkZXI9J1ppcGNvZGUnXG4gICAgICBuYW1lPSd6aXBjb2RlJ1xuICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwY29kZX1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgPjwvaW5wdXQ+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nY29udGludWVQYXltZW50Jz5Db250aW51ZSBUbyBQYXltZW50IE1ldGhvZDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwcGluZzsiXX0=