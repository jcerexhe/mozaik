import React, { Component } from 'react';
import _ from 'lodash';
import likeCourse from '../shared/likeCourse';
import RenderForm from '../shared/renderForm';
import {PortalId, FormId} from '../shared/hbsform';
import HubspotForm from 'react-hubspot-form';
import Collapsible from 'react-collapsible';


export default class MobileCourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      formId:'',      
    };
  }


  tryFunc(formId){
    this.setState({isClicked: true, formId: formId});

  }

  renderForm(portalId, formId){
    return(
 <div>
          <HubspotForm
              css=''
              portalId={portalId}
              formId={formId}
          />
        </div>
      );
  }

  renderCourses(){
    const { course, school, coursekey, hbsform } = this.props;
    // course liking func
    let storageExists = localStorage.getItem('likedCourses')
    let likedCourses;
    if (storageExists !== null) {
      likedCourses = JSON.parse(localStorage.getItem('likedCourses'));
    } else {
      likedCourses = []
    }
    let bgcourse;
    let aligndesign;
    let alignclass;
    let portalId;
    let formId;
    let isClicked=false;
    var disciplines;

    if((coursekey + 1)%2 == 0){
      bgcourse={'background-color': '#fff'};
      alignclass='course-info-bit-right';
      disciplines = ( course.disciplines.length > 0 ? (
      <p className={alignclass}>
        <span className='bold caps'>qualifications:</span>
        <span className='info-bit-content'>{ course.qualifications.join(', ') }</span>
      </p>
    ) : <div />);
    }else{
      bgcourse={'background-color': '#181818'};
      alignclass='course-info-bit-right';
          disciplines = ( course.disciplines.length > 0 ? (
      <p className={alignclass}>
        <span className='bold caps'>qualifications:</span>
        <span className='info-bit-content'>{ course.qualifications.join(', ') }</span>
      </p>
    ) : <div />);
    }

    if((coursekey + 1)%2 == 0){ 
      return(
        <div className='m-course-card' id={ course.slug } style={bgcourse}>
        {
         (this.state.isClicked == true)?
               <div id={'form'+course.slug} className='course-form'>
                <div className="course-forms-modal" onClick={()=>{this.setState({isClicked: false})}}></div>
                <button onClick={()=>{this.setState({isClicked: false})}}>x</button>
        {this.renderForm('2708822', this.state.formId)}
      </div>
      :
      <div></div>
        }
        <div className="course-mobile-content-white">
          <div className='m-course-card-left'>
            <h3>{ course.name }</h3>
            <div className='course-info'>
              <p>{ course.description }</p>
              <div className='info-bits-container'>
                <div className='info-bits-section'>
                  <p className='course-info-bit-left'>
                    <span className='bold caps'>duration:</span>
                    <span className='info-bit-content'>{ course.duration }</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Collapsible trigger="V">
            <div className='m-course-card-right'>
              <div className='course-info'>
                <div className='info-bits-container'>
                  <div className='info-bits-section'>
                    <p className={alignclass}>
                      <span className='bold caps'>price</span>
                      <span className='info-bit-content'>
                        { _.map(course.prices, (price, i) => {
                          return <span key={ i }>{ price.type }: { price.currency } { price.fees.toLocaleString() }</span>;
                        }) }
                      </span>
                    </p>
                    { disciplines }
                    <p className={alignclass}>
                      <span className='bold caps'>next intake</span>
                      <span className='info-bit-content'>{ course.intakes }</span>
                    </p>
                  </div>
                </div>
                <div className='course-buttons'>
                  <a className='btn' href={'#form'+ course.slug } onClick={()=>this.tryFunc(course.formidce)}>enquire</a>
                  <a className='btn' href={'#form'+ course.slug } onClick={()=>this.tryFunc(course.formidca)}>apply</a>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>
          {/*<div className="likesection">
            <h3><a href={ '/school/'+school.slug+'/details' }><i onClick={() => likeCourse(course.name)} className={'fa ' + (likedCourses.includes(course.name) ? 'fa-heart ' : 'fa-heart-o ') + 'card-icon'} aria-hidden="true" style={{float: 'left'}}></i></a></h3>
          </div>*/}
        </div> );
    }else{
      return(
        <div className='m-course-card' id={ course.slug } style={bgcourse}>
        {
         (this.state.isClicked == true)?
               <div id={'form'+course.slug} className='course-form course-form-2'>
                <div className="course-forms-modal-2" onClick={()=>{this.setState({isClicked: false})}}></div>
                <button onClick={()=>{this.setState({isClicked: false})}}>x</button>
        {this.renderForm('2708822', this.state.formId)}
      </div>
      :
      <div></div>
        }
        <div className="course-mobile-content-black">
          <div className='m-course-card-left'>
            <h3>{ course.name }</h3>
            <div className='course-info'>
              <p>{ course.description }</p>
              <div className='info-bits-container'>
                <div className='info-bits-section'>
                  <p className='course-info-bit-left'>
                    <span className='bold caps'>duration:</span>
                    <span className='info-bit-content'>{ course.duration }</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Collapsible trigger="V">
            <div className='m-course-card-right'>
              <div className='course-info'>
                <div className='info-bits-container'>
                  <div className='info-bits-section'>
                    <p className={alignclass}>
                      <span className='bold caps'>price</span>
                      <span className='info-bit-content'>
                        { _.map(course.prices, (price, i) => {
                          return <span key={ i }>{ price.type }: { price.currency } { price.fees.toLocaleString() }</span>;
                        }) }
                      </span>
                    </p>
                    { disciplines }
                    <p className={alignclass}>
                      <span className='bold caps'>next intake</span>
                      <span className='info-bit-content'>{ course.intakes }</span>
                    </p>
                  </div>
                </div>
                <div className='course-buttons'>
                  <a className='btn' href={'#form'+ course.slug } onClick={()=>this.tryFunc(course.formidce)}>enquire</a>
                  <a className='btn' href={'#form'+ course.slug } onClick={()=>this.tryFunc(course.formidca)}>apply</a>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>
        {/*<div className="likesection">
          <h3><a href={ '/school/'+school.slug+'/details' }><i onClick={() => likeCourse(course.name)} className={'fa ' + (likedCourses.includes(course.name) ? 'fa-heart ' : 'fa-heart-o ') + 'card-icon'} aria-hidden="true"></i></a></h3>
        </div>*/}
      </div> );
    }
  }

  render(){
     const { course } = this.props;

    return(
      <div>
      {this.renderCourses()}
      </div>
    );
  }
}


