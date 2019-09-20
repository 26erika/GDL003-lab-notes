import React, { Component } from 'react';


class Home extends Component {



  render() {

    return (
      <div className='backgroundHome'>
        <h1 className='homeTitle'>You can write notes to never forget them</h1>
        <div className='imageHome'>
          <img src={('https://media.giphy.com/media/3oz8xTUmZABI3PGwDe/giphy.gif')} alt='pig notes' />
        </div>
      </div>
    );
  }
}

export default Home;
