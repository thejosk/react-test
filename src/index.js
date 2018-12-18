import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import JSON from './db.json';
import NewsList from './components/NewsList';

class App extends Component {
    constructor(props){
      super(props)

      this.state = {
          news: JSON
      }
    }

      render(){
          return(
            <div>  
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
          )
      }

}
ReactDOM.render(<App/>, document.getElementById('root'));