import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const NewsList = (props) => {
    const newsResults = props.news.map((data, index) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    }  )
    
    return(
       <div>
           {newsResults}
       </div>    
    )

}
export default NewsList;

