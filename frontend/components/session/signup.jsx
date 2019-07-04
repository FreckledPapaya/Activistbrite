import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleSumbit(e) {
    e.preventDefault();
    this.state
  }


  render() {
    return (
      <div>
        <h3>Welcome</h3>
        <p>Create an account.</p>

        <form onSumbit={this.handleSumbit}>


        </form>
      </div>)
  }
}
export default Signup;