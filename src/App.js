import React, {Component} from 'react';
import Fetch from './components/Fetch';
import ShowFiles from './components/ShowFiles';


class App extends Component {
  constructor() {
    super();
    this.state={
      awsFiles: []
    }

    this.updateList = this.updateList.bind(this)
  }

  updateList(files) {
    this.setState({awsFiles: files})
  }

  render() {
    return (
      <div className="App">
        <Fetch updateList={this.updateList}/>
        <ShowFiles awsFiles={this.state.awsFiles} />
      </div>
    );
  }
}

export default App;
