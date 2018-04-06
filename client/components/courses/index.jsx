import React, { Component } from 'react';
import _ from 'lodash';
import Filter from '../shared/filter.jsx';
import CourseCard from './courseCard.jsx';

export default class CoursesApp extends Component {
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
      limit: 4
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
    if(school.study_areas.includes(area)){
      return(
        <div className="disciplines">
          <p>
            <Filter
              filterItems={ disciplinesList }
              activeItems={ disciplines }
              onClick={ (val) => this.updateDiscipline(val) }
              isHome={true}
            />
          </p>
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
        <button onClick={()=>this.renderLimit()} className="more-courses">v</button>
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
        <div className="study-areas-box">
          <h1>study areas</h1>
          <div className="study-areas">
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287677/study-areas/pexels-photo-669615.jpg")'}}>
              <h3 className="padding">digital media</h3>
              {this.enableTile("Digital Media", this.state.digitalMedia)}
            </div>
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287645/study-areas/pexels-photo-433617.jpg")'}}>
              <h3 >visual communication</h3>
              {this.enableTile("Visual Communication", this.state.visualComm)}
            </div>
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287447/study-areas/pexels-photo-262034.jpg")'}}>
              <h3 className="padding">fine arts</h3>
              {this.enableTile("Fine Arts", this.state.fineArts)}             
            </div>
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287352/study-areas/chris-murray-563843-unsplash.jpg")'}}>
              <h3 className="padding">film/tv/audio</h3>
              {this.enableTile("Film/TV/Audio", this.state.filmAudio)}     
            </div>
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287493/study-areas/pexels-photo-415307.jpg")'}}>
              <h3 className="padding">performing arts</h3>
              {this.enableTile("Performing Arts", this.state.performArts)}  
            </div>
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287247/study-areas/abstract-art-artistic-226589.jpg")'}}>
              <h3 className="padding">design</h3>
              {this.enableTile("Design", this.state.design)} 
            </div>
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287581/study-areas/pexels-photo-298298.jpg")'}}>
              <h3 className="padding">photography</h3>
              {this.enableTile("Photography", this.state.photography)} 
            </div>
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287362/study-areas/steve-driscoll-106346-unsplash.jpg")'}}>
              <h3 className="padding">built environment</h3>
              {this.enableTile("Built Environment", this.state.builtEnvironment)} 
            </div>
            <div className="area-box" style={{backgroundImage: 'url("https://res.cloudinary.com/mozaik/image/upload/v1522287677/study-areas/pexels-photo-669615.jpg")'}}>
              <h3>business for creatives</h3>
              {this.enableTile("Business for Creatives", this.state.businessCreative)}
            </div>
          </div>
        </div>
        <div className='course-bg'>
          <div className='course-card-container'>
              {this.renderNoResult()}
            {
          
                _.map(activeCourses, (course, i) => {
                  console.log(course);
                  console.log(i);
                  if(i >= limit){
                    return false;
                  }else{
                  return (
                    <CourseCard course={ course } school={ school } key={ i } coursekey={ i } />
                   )
                  }

                }) 

          }

          {this.renderButton()}

          </div>
        </div>
      </div>
    );
  }
}
