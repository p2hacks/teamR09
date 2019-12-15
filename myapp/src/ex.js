import React from 'react';
//import ContactForm from './ContactForm';


class Botun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};

  }


  handleClick() {
   this.setState({count: this.state.count + 1});
  }

  handleClick2(){
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <h3>
          おすすめ度:{this.state.count}
        </h3>
        <button onClick={() => {this.handleClick()}}>+</button>
        <button onClick={() => {this.handleClick2()}}>-</button>





      </div>
    );
  }
}

export default Botun;
