import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import JSON from './db.json';
import NewsList from './components/NewsList';

class App extends Component {
    constructor(props){
      super(props)

      this.state = {
          news: JSON,
          filteredNews: JSON
      }
    }

    filterNews(data){
       let result = this.state.news.filter((news) => {
           return news.title.toLowerCase().indexOf(data.toLowerCase()) > -1
       })

       this.setState({
        filteredNews: result
       })
    }

      render(){
          return(
            <div>  
                <Header searchKeyword={(data) => { this.filterNews(data)}}/>
                <NewsList news={this.state.filteredNews}/>
            </div>
          )
      }

}
ReactDOM.render(<App/>, document.getElementById('root'));