import React from "react";
import "../../layout/styles.css"

class Home extends React.Component {
  render() {

    return (
      <>
        <h2>This is your basket!</h2>
        <div className="content">
          <h3> 1. item: <span>50kn  </span> </h3>
        </div>
        <h3> follow steps to purchase:</h3>
        <div className="purchase"> 
                  <button className="button">Purchase</button>
        </div>
      </>
    )
  }
}
export default Home
