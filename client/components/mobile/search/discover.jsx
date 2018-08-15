import React, { Component } from 'react';
import Slider from 'rc-slider';
import _ from 'lodash';

export default class MobileDiscover extends Component {
	render() {
		return (
			<div className="mobile-discover-container">
				<div className="header-discover-container">
					<div className="container-fluid header-title">
						DISCOVER
					</div>
				</div> 
				<div className="searched-container">
					<div className="container-fluid searched-section">
						SEARCH...
					</div>
			    </div>
				<div className="container-fluid study-area-section">
					<div className="row">
						<div className="col">
				        	<div className="col-content">STUDY AREA</div>
				        </div> 
				        <div className="col">
				        	<div className="col-content">STUDY AREA</div>
				    	</div>
				    	<div className="col">
				      		<div className="col-content">STUDY AREA</div>
				    	</div>
					</div>
				  	<div className="row">
				    	<div className="col">
				      		<div className="col-content">STUDY AREA</div>
				    	</div> 
				    	<div className="col">
				      		<div className="col-content">STUDY AREA</div>
				    	</div>
				    	<div className="col">
				      		<div className="col-content">STUDY AREA</div>
				    	</div>
					</div>			 	
					<div className="row">
				    	<div className="col">
				      		<div className="col-content">STUDY AREA</div>
				    	</div> 
				    	<div className="col">
				      		<div className="col-content">STUDY AREA</div>
				    	</div>
				    	<div className="col">
				      		<div className="col-content">STUDY AREA</div>
				    	</div>
				   </div>
				</div>
				<div className="countries-container">
					<div className="container-fluid country-section">
						<div className="row">
							<div className="col">
								<div className="col-country">AUSTRALIA</div>
							</div>	
							<div className="col">
								<div className="col-country">CANADA</div>
							</div>
							<div className="col">
								<div className="col-country">NEW ZEALAND</div>
							</div>
							<div className="col">
								<div className="col-country">EUROPE</div>
							</div>
							<div className="col">
								<div className="col-country">USA</div>
							</div>
						</div>
					</div>
				</div> 
				<div className="disciplines-container">
					<div className="container-fluid grid-container">
				   		<div className="row">
				   	 		<div className="col">
				        		<div className="col-content">STUDY AREA</div>
				        	</div> 
				        	<div className="col">
				          		<div className="col-content">STUDY AREA</div>
				        	</div>
				        </div>	
				   		<div className="row">
				   	 		<div className="col">
				          		<div className="col-content">STUDY AREA</div>
				        	</div> 
				        	<div className="col">
				          		<div className="col-content">STUDY AREA</div>
				        	</div>
				   	 	</div>
				   	 	<div className="row">
				   			<div className="col">
				          		<div className="col-content">STUDY AREA</div>
				        	</div> 
				       		<div className="col">
				        		<div className="col-content">STUDY AREA</div>
				 			</div> 
				 		</div>	  
				   	 	<div className="row">
				   			<div className="col">
				        		<div className="col-content">STUDY AREA</div>
				        	</div>
				        	<div className="col">
				          		<div className="col-content">STUDY AREA</div>
				        	</div>				        	
				 		</div>	
				   	 	<div className="row">
				   			<div className="col">
				          		<div className="col-content">STUDY AREA</div>
				        	</div> 
				        	<div className="col">
				          		<div className="col-content">STUDY AREA</div>
				 			</div>
				 		</div>	
				 	 	<div className="plus-button"></div>
				 	</div>
			 	 	<div className="clear-all-container">CLEAR FILTER</div>
				</div>
				<div className="sch-container">
					<div className="container-fluid schs-container">
				   		<div className="row">
				   	 		<div className="col">
				        		<div className="col-school">SCHOOL IMAGE</div>
				        		<div className="sch-name">SCHOOL NAME</div>
				        	</div> 
				        	<div className="col">
				          		<div className="col-school">SCHOOL IMAGE</div>
				          		<div className="sch-name">SCHOOL NAME</div>
				        	</div>
				        	<div className="col">
				        		<div className="col-school">SCHOOL IMAGE</div>
				        		<div className="sch-name">SCHOOL NAME</div>
				        	</div>
				        </div>	
				   		<div className="row">
				   	 		<div className="col">
				          		<div className="col-school">SCHOOL IMAGE</div>
				          		<div className="sch-name">SCHOOL NAME</div>
				        	</div> 
				        	<div className="col">
				          		<div className="col-school">SCHOOL IMAGE</div>
				          		<div className="sch-name">SCHOOL NAME</div>
				        	</div>
				        	<div className="col">
				          		<div className="col-school">SCHOOL IMAGE</div>
				          		<div className="sch-name">SCHOOL NAME</div>
				        	</div>
				   	 	</div>
				   	 	<div className="plus-button"></div>
					</div> 					
				</div>
				<div className="adv-search-container">
					<div className="container-fluid adv-search-title">
						ADVANCED SEARCH
					</div>
				</div> 
				<div className="quali-container">
					<div className="container-fluid quali-section">
						<div className="panel-group" id="accordion">
  							<div className="panel panel-default">
    							<div className="panel-heading">
      								QUALIFICATIONS<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"></a>
 								</div>
 								<div id="collapseTwo" className="panel-collapse collapse">
 								    <div className="panel-body">
   			   						
      								</div>
    							</div> 
 							</div>
 						</div>
 					</div>			
				</div>
				<div className="prange-container">
					<div className="container-fluid prange-section">
						PRICE RANGE	
							<div className="ui-rangeslider-sliders">
								<div className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all">					   
							    <div data-role="rangeslider">
							    	<input type="range" name="price-min" id="price-min" value="200" min="0" max="1000"></input>
							        <input type="range" name="price-max" id="price-max" value="800" min="0" max="1000"></input>
							     </div>
							    </div> 	
							</div>		
					</div>
				</div>	
				<div className="location-container">
					<div className="container-fluid location-section">
					 	<div className="panel-group" id="accordion">
  							<div className="panel panel-default">
    							<div className="panel-heading">
      								LOCATION<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"></a>
 								</div>
 								<div id="collapseTwo" className="panel-collapse collapse">
 								    <div className="panel-body">
   			   						
      								</div>
    							</div> 
 							</div>
 						</div>
					</div>
				</div>
				<div className="site-container">
					<div className="container-fluid site-section">
					 	<div className="row">	
					 		<div className="col">
					 			<p>ON CAMPUS</p>
					 		</div>
					 		<div className="col">
					 			<p>ONLINE</p>
					 		</div>		
						</div>					 
					</div>
				</div>
				<div className="submit-container">
					<div className="container-fluid submit-section">
					 	SUBMIT
					</div>
				</div>
			</div>  
		);
 	}
} 			  
		