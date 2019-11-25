import React, { Component } from 'react';

import "@smarthtmlelements/smart-elements/src/styles/smart.default.css";
import "@smarthtmlelements/smart-elements/src/modules/smart.grid.js";

class App extends Component {

  	componentDidMount() {  
	   this.refs.grid.props = {  
			columns: [  
				{ label: 'First Name', dataField: 'firstName'},  
				{ label: 'Last Name', dataField: 'lastName' },  
				{ label: 'Product', dataField: 'productName' }  
			],
		
			sorting: {
				enabled: true
			},

			filtering: {  
				enabled: true  
			},

			paging: {  
				enabled: true  
			},

			pager: {  
				visible: true  
			}, 

			selection: {
				enabled: true
			},

			grouping: {
				enabled: true
			},

			editing: {
				enabled: true
			},

			dataSource: new window['Smart'].DataAdapter(  
			{  
				dataSource: [  
					{ "firstName": "Beate", "lastName": "Wilson", "productName": "Caramel Latte"},   
					{ "firstName": "Ian", "lastName": "Nodier", "productName": "Caramel Latte"},   
					{ "firstName": "Petra", "lastName": "Vileid", "productName": "Green Tea"},   
					{ "firstName": "Mayumi", "lastName": "Ohno", "productName": "Caramel Latte"},   
					{ "firstName": "Mayumi", "lastName": "Saylor", "productName": "Espresso con Panna"},   
					{ "firstName": "Regina", "lastName": "Fuller", "productName": "Caffe Americano" },  
					{ "firstName": "Regina", "lastName": "Burke", "productName": "Caramel Latte"},   
					{ "firstName": "Andrew", "lastName": "Petersen", "productName": "Caffe Americano"},  
					{ "firstName": "Martin", "lastName": "Ohno", "productName": "Espresso con Panna"},   
					{ "firstName": "Beate", "lastName": "Devling", "productName": "Green Tea"},   
					{ "firstName": "Sven", "lastName": "Devling", "productName": "Espresso Truffle"},  
					{ "firstName": "Petra", "lastName": "Burke", "productName": "Peppermint Mocha Twist"},  
					{ "firstName": "Marco", "lastName": "Johnes", "productName": "Caffe Mocha"}  
				],  
				dataFields:  
				[  
					'firstName: string',  
					'lastName: string',  
					'productName: string'                           
				]  
			})  
		}  
  	} // --- end of componentDidMount --- 
	
  	render() {  
	   return (
      <div className="card mt-3">
        	<div className="card-body">  
			   <smart-grid ref="grid"></smart-grid>
        	</div>
      </div>  
	   )  
  	}  
} // --- end of class App ---

export default App;