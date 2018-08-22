import React, { Component } from 'react';
import _ from 'lodash';
import Filter from '../shared/filter.jsx';
import MobileCourseCard from './courseCard.jsx';
import HubspotForm from 'react-hubspot-form';
import RenderForm from '../shared/renderForm';
import {PortalId, FormId} from '../shared/hbsform';

export default class MobileCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplines: ['all areas'],
      digitalMedia: ['2D/3D Animation', '3D Design', 'AR/VR', 'Computer Graphics', 'Digital Design', 'Digital Media', 'Games Design', 'Motion Graphics', 'Visual Effects (VFX)', 'Web Design'],
      visualComm: ['Advertising Design', 'Design', 'Graphic Design', 'Illustration', 'Packaging & Branding', 'Photography', 'Typography', 'Visual Arts', 'Visual Communication', 'Web Design',],
      fineArts: ['2D/3D Art', 'Ceramics', 'Drawing', 'Fine Arts', 'Glass Design', 'Jewellery Design', 'Metalsmithing', 'Painting', 'Sculpture', 'Wood Design'],
      filmAudio: ['Cinematography', 'Directing', 'Editing', 'Film/TV', 'Music for Screen', 'Producing', 'Production Design', 'Radio', 'Screenwriting', 'Sound Design'],
      performArts: ['Acting', 'Choreography', 'Costume Design', 'Dance', 'Drama', 'Live Production', 'Music', 'Performing Arts', 'Playwriting', 'Singing'],
      design: ['Colour Design', 'Design', 'Digital Design', 'Fashion Design', 'Games Design', 'Graphic Design', 'Industrial Design', 'Interior Design', 'Textile Design', 'UX/UI'],
      photography: ['Art Photography', 'Commercial Photography', 'Digital Imaging', 'Documentary Photography', 'Fashion Photography', 'Photography', 'Photography Design', 'Photojournalism', 'Photomedia', 'Visual Communication'],
      builtEnvironment: ['Architecture', 'Building Design', 'Built Environment', 'Digital Architecture', 'Interior Decoration', 'Interior Design', 'Spatial Design', 'Staging', 'Styling', 'Urban Design'],
      businessCreative: ['Arts Management', 'Creative Leadership', 'Event Management', 'Fashion Business', 'Finance for Creative Industries', 'Live Production', 'Marketing for Entertainment Business', 'Music Business', 'Screen Business','Stage Management'],
      activeCourses: props.courses,
      limit: 4,
      formClicked: false
    };

  }

  updateDiscipline(val) {
    this.setState({limit: 4}); 
    let { disciplines } = this.state;
    if (val === 'all areas') {
      this.setState({ disciplines: ['all areas'] });
      return;
    }
    _.remove(disciplines, (v) => { return v.indexOf('all areas') != -1 });
    if (disciplines.includes(val))
      _.remove(disciplines, (v) => { return v.indexOf(val) != -1 });
    else
      disciplines.push(val);
    if (disciplines.length == 0)
      disciplines.push('all areas');
    this.setState({ disciplines: [...disciplines] });

    // refine results
    const { courses } = this.props;
    if (disciplines.includes('all areas')) {
      this.setState({ activeCourses: [...courses] });
      return;
    }
    const activeCourses = _.filter(courses, (course) => {
      return _.intersection(disciplines, course.disciplines).length > 0;
    })
    this.setState({ activeCourses });
  }

  enableTile(area, disciplinesList){
    const { school } = this.props;
    const { disciplines } = this.state;
    var slug = area.replace(" ", "-").toLowerCase();
    if(school.study_areas.includes(area)){
      return(
        <div className="disciplines">
          <p>
            {
              // "/study-area/" + slug
            }
            <span className="area-heading">
            <Filter
              filterItems={ [area] }
              activeItems={ disciplines }
              onClick={ (val) => this.updateDiscipline(val) }
              isHome={true}
            />
            </span>
            <Filter
              filterItems={ disciplinesList }
              activeItems={ disciplines }
              onClick={ (val) => this.updateDiscipline(val) }
              isHome={true}
            />
          </p>
        </div>

        )
    }else{
      return(
      <div className="disciplines-disable">
      </div>
      )
    }
  }

  renderLimit(){
    const { limit } = this.state;
    this.setState({limit: limit + 4}); 
  }

  renderButton(){
    const { limit, activeCourses } = this.state;
      if(limit < activeCourses.length ){
        return(
        <button onClick={()=>this.renderLimit()} className="m-more-courses"><span>+</span></button>
        )
      }
  }

  renderNoResult(){
    const { activeCourses, limit } = this.state;

     if (activeCourses.length <= 0){
         return(
            <h1 className="course-filter">No result found.</h1>
          )
    }
  }

  render() {
    const { courses, school } = this.props;
    const { disciplines, activeCourses, limit } = this.state;
    let disciplineList = ['all areas'];
    disciplineList.push(this.props.schoolDisciplines);
    // Combine the 'all areas' array with the disciplineList array and flatten it to remove nesting
    disciplineList = _.flatten(disciplineList);

    return (
      <div>
        <div className="mobile-study-areas">
          <div className="m-study-areas-box">
            <h1>study areas</h1>
          </div>
          <div className="choose-your-study-areas">
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" href="#choose-sa">Choose Your Study Areas</a>
                  </h4>
                </div>
                <div id="choose-sa" className="panel-collapse collapse">
                  <ul className="list-group study-area-group">
                    <li className="list-group-item study-area-list">Digital Media</li>
                    <li className="list-group-item study-area-list">Visual Communication</li>
                    <li className="list-group-item study-area-list">Fine Arts</li>
                    <li className="list-group-item study-area-list">Film/TV/Audio</li>
                    <li className="list-group-item study-area-list">Performing Arts</li>
                    <li className="list-group-item study-area-list">Design</li>
                    <li className="list-group-item study-area-list">Photography</li>
                    <li className="list-group-item study-area-list">Built Environment</li>
                    <li className="list-group-item study-area-list">Business for Creatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="courses-mobile">
          <div className='m-course-bg'>
          <div className='m-course-card-container'>
            {this.renderNoResult()}
              {         
                  _.map(activeCourses, (course, i) => {
                    console.log(course);
                    console.log(i);
                    if(i >= limit){
                      return false;
                    }else{
                    return (
                      <MobileCourseCard course={ course } school={ school } key={ i } coursekey={ i } />
                     )
                    }

                  }) 

            }

            {this.renderButton()}

          </div>
        </div>
      </div>
    </div>
    );
  }
}

          