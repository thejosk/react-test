import React , {Component} from 'react';
import ReactDom from 'react-dom';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '***Logo***',
            keywords: 'Search Keyword'
        }
    }

    inputChanges = (event) => {
       console.log(event.target.value)
       this.setState({keywords: event.target.value})
    }
    
    render(){
        return (
            <div>
                <header
                  onClick={() => { console.log('clicked')}}>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input type="text"
                            onChange= { this.inputChanges.bind(this) } />

                        <p>{this.state.keywords}</p>    
                    </center>
                </header>
            </div>
        )
    }
}


export default Header