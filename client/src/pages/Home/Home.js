import React, {Component} from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {

  }

  //onclick function for when button clicked to go to results page
  render() {
    return(
        <div>
            <h1>NYT SCRAPER</h1>
            <Link to="/api/scrape">Scrape</Link>
            {/* <button onClick={() => this.deleteBook(book._id)}>Scrape Articles!</button> */}
        </div>
    )
  }

}
export default Home;