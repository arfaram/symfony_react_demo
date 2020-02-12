import React, { Component } from 'react';
import axios from 'axios';

class ProductsApp extends Component {
  constructor(props){
    super(props);

    this.state = {
	items: [],
	host:'http://api.myjson.com',
  dataRoute: '/bins/1ago94',
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
		_this.setState({items: result.data.contentList.contents});
	});


/*
    fetch(this.state.dataRoute, {
	//mode: 'no-cors',
	//method: 'GET',
    	headers: {'Accept': 'application/json', 'Content-Type':'application/json'}
	})
      .then(res => res.text())
      .then(items => this.setState((prevState, props) =>
		{
		console.log('parsed json:', items);
		return { items: items.map(this.mapProduct)};
		}
	)
      );
*/

}


  render() {

    return (
      <div className="App row">
       {this.state.items.map(item =>

        <div class="item col-md-6 col-sm-6 portfolio-item" style={{width: "40%", "padding-bottom": "10px"}} key={`item-${item.contentId}}`}>  
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div class="portfolio-hover">
                      <div class="portfolio-hover-content">
                          <i class="fas fa-plus fa-3x"></i>
                      </div>
                  </div>
                  <img class="img-fluid" src={ item.image }  />
              </a>
              <h3>{ item.title }</h3><br/>
              <div class="portfolio-caption text-center">
                <p>{ item.description }</p>
                <button class="btn btn-primary"  data-item-url= { `${this.state.host}${item.uri}`}>
                { item.identifier === 'product' ? '+' : 'buy' }
                </button>
              </div>

        </div>
        )}

      </div>
    );

  }


}

export default ProductsApp;
