import React, { Component } from 'react';
import axios from 'axios';

class CologneApp extends Component {
  constructor(props){
    super(props);

    this.state = {
	products: [],
	host:'http://api.myjson.com',
	//dataRoute: '/bins/1b7chp',  // Trips
  dataRoute: '/bins/97w3h', // Products
    }
  }


componentDidMount(){
	var _this = this;
    	const config = {
    		url: _this.state.host + _this.state.dataRoute,
	}

	axios.request(config)
	.then(function(result) {
		console.log('parsed json', result);
		_this.setState({products: result.data.contentList.contents});
	});


/*
    fetch(this.state.dataRoute, {
	//mode: 'no-cors',
	//method: 'GET',
    	headers: {'Accept': 'application/json', 'Content-Type':'application/json'}
	})
      .then(res => res.text())
      .then(products => this.setState((prevState, props) =>
		{
		console.log('parsed json:', products);
		return { products: products.map(this.mapProduct)};
		}
	)
      );
*/

}


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Loading External Data in React using the eZPlatform REST API</h2>
        </div>

        <div className="products">

          {this.state.products.map(product =>


            <div className="product" key={`product-${product.contentId}}`}>

		<p>{ product.title }</p>

		<img style={{"max-width": "50%"}} src={ product.main_image }  />

              <button className="snipcart-add-item"
                data-item-url= { `${this.state.host}${product.uri}`}
                >
                Buy
              </button>

            </div>
          )}

        </div>
      </div>
    );

  }


}

export default CologneApp;
