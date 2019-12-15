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

  

  

  render() {
    return (
      
      <div>
        <h3>
          評価数:{this.state.count}
        </h3>
        <button href="#" class="btn-square-pop" onClick={() => {this.handleClick()}}>いいね！</button>

        

       





      </div>
    );
  }
}

export default Botun;
