import React, { Component } from 'react';
import Slider from 'rc-slider';
import _ from 'lodash';

export default class MobileDiscover extends Component {
	render() {
		return (
			<div className="mobile-discover-container">

				<div className="header">
					<svg viewBox="0 0 47 13" preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><polyline points="8,13 0,13 0,0 8,0" x="0" y="0"/><polyline points="39,0 47,0 47,13 39,13"/></svg>
					<h1>DISCOVER</h1>
				</div>
				
				<form>
					<input type="text" placeholder="SEARCH..." />
			    </form>

				<div className="study-areas-grid">
					<div className="container-fluid">
						<div className="row">
							<div className="col">
					        	<button className="default-button">DIGITAL MEDIA</button>
					        </div> 
					        <div className="col">
					        	<button className="default-button">VISUAL COMMS</button>
					    	</div>
					    	<div className="col">
					      		<button className="default-button">FINE ARTS</button>
					    	</div>
						</div>
					  	<div className="row">
					    	<div className="col">
					      		<button className="default-button">FILM/TV/AUDIO</button>
					    	</div> 
					    	<div className="col">
					      		<button className="default-button">PERFORMING ARTS</button>
					    	</div>
					    	<div className="col">
					      		<button className="default-button">DESIGN</button>
					    	</div>
						</div>			 	
						<div className="row">
					    	<div className="col">
					      		<button className="default-button">PHOTOGRAPHY</button>
					    	</div> 
					    	<div className="col">
					      		<button className="default-button">BUILD ENVIRONMENT</button>
					    	</div>
					    	<div className="col">
					      		<button className="default-button">BUSINESS FOR CREATIVES</button>
					    	</div>
					   </div>
					</div>   
				</div>
				<div className="countries-grid">
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<button className="default-button pink-btn country-button">AUSTRALIA</button>
							</div>
							<div className="col">
								<button className="default-button pink-btn country-button">CANADA</button>
							</div>
							<div className="col">
								<button className="default-button pink-btn country-button">NEW ZEALAND</button>
							</div>
							<div className="col">
								<button className="default-button pink-btn country-button">EUROPE</button>
							</div>
							<div className="col">
								<button className="default-button pink-btn country-button">USA</button>
							</div>
						</div>
					</div>
				</div> 
				<div className="disciplines-section">
					<div className="grid">
						<div className="container-fluid">	
					   		<div className="row">
					   	 		<div className="col">
					        		<button className="default-button">2D/3D ANIMATION</button>
					        	</div> 
					        	<div className="col">
					          		<button className="default-button">3D DESIGN</button>
					        	</div>
					        </div>	
					   		<div className="row">
					   	 		<div className="col">
					          		<button className="default-button">AR/VR</button>
					        	</div> 
					        	<div className="col">
					          		<button className="default-button">COMPUTER GRAPHICS</button>
					        	</div>
					   	 	</div>
					   	 	<div className="row">
					   			<div className="col">
					          		<button className="default-button">DIGITAL DESIGN</button>
					        	</div> 
					       		<div className="col">
					        		<button className="default-button">DIGITAL MEDIA</button>
					 			</div> 
					 		</div>	  
					   	 	<div className="row">
					   			<div className="col">
					        		<button className="default-button">GAME DESIGN</button>
					        	</div>
					        	<div className="col">
					          		<button className="default-button">MOTION GRAPHICS</button>
					        	</div>				        	
					 		</div>	
					   	 	<div className="row">
					   			<div className="col">
					          		<button className="default-button">VISUAL EFFECTS (VFX)</button>
					        	</div> 
					        	<div className="col">
					          		<button className="default-button">WEB DESIGN</button>
					 			</div>
					 		</div>
					 	</div>		
				 	 	<button className="default-button pink-btn plus">
								<hr/>
								<hr className="vertical"/>
						</button>
					</div>

						<button className="default-button pink-btn clear-filter">CLEAR FILTER</button>
				</div>
				<div className="schools-section">
					<div className="grid">
						<div className="container-fluid">
							<div className="row">
								<div className="col">
									<div className="school-thumb">
										<button className="default-button school-btn"><p>AIT</p></button>
									</div>
								</div>
								<div className="col">
									<div className="school-thumb">
										<button className="default-button school-btn"><p>NIDA</p></button>
									</div>
								</div>
								<div className="col">
									<div className="school-thumb">
										<button className="default-button school-btn"><p>AFTRS</p></button>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="school-thumb">
										<button className="default-button school-btn"><p>AIT</p></button>
									</div>
								</div>
								<div className="col">
									<div className="school-thumb">
										<button className="default-button school-btn"><p>NIDA</p></button>
									</div>
								</div>
								<div className="col">
									<div className="school-thumb">
										<button className="default-button school-btn"><p>AFTRS</p></button>
									</div>
								</div>
							</div>
						</div>
						<button className="default-button pink-btn plus">
							<hr/>
							<hr className="vertical"/>
						</button>
					</div>
				</div>
								
			</div>  
		);
 	}
} 			  
		