import React, {Component} from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";

class Home extends Component {
  state = {

  }

  // onClick handle scrape --make API call to scrape articles
  
  handleOnClick = event => {
  
    API.scrapeArticles()
      .then(res => {
        console.log(res.data)
      .catch(err => console.log(err));
        
      })
  }
  

  render() {
    return(
        <div className="text-center" style={{marginTop:"50px"}}>
            <h1>NYT SCRAPER</h1>
            
            {/* <Link to="/api/scrape">Scrape</Link> */}
            <button onClick={this.handleOnClick}>Scrape Articles!</button>
        </div>
    )
  }

}
export default Home;