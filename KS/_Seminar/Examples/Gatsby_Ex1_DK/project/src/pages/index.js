import React from "react";
import "../../layout/styles.css"
import home from  "../images/home-image.jpg"
import sale from "../images/sale.jpg"

class Home extends React.Component {
  render() {
    return (
      <>
        <div class="content">
        <h3> Welcome to the Protein Shop </h3>
        <img src={home} alt="home nutrition image"  className="responsive" />
        <h3>It's Christmas time! Everything is on sale. </h3>
        <a href="/sale" ><img src={sale} alt="discount image" className="responsive-sale"  /></a> 
        </div>
      </>
    )
  }
}
export default Home

