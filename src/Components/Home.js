import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
    
  
}

  render() {

    return (
        <div className='backgroundHome'>
          <div className='imageHome'>
            <img src={('https://media.giphy.com/media/3oz8xTUmZABI3PGwDe/giphy.gif')} alt='pig notes' />
          </div>
          
        </div>
    );
  }
}

export default Home;
