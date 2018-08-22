import reactHelper from 'react-helper';
import MenuApp from './components/menu/index.jsx';
import HeroApp from './components/hero/index.jsx';
import HomeArtworkApp from './components/artwork/home.jsx';
import SearchApp from './components/search/index.jsx';
import ArtworkApp from './components/artwork/index.jsx';
import CampusApp from './components/campus/index.jsx';
import FacilitiesApp from './components/facilities/index.jsx';
import AlumniApp from './components/alumni/index.jsx';
import CoursesApp from './components/courses/index.jsx';
import DiscoverApp from './components/discover/index.jsx';
import AboutApp from './components/about/index.jsx';
import AgencyApp from './components/agency/index.jsx';
import PartnerApp from './components/partner/index.jsx';
import IndividualStudyAreaApp from './components/individualArea/index.jsx';
import FooterApp from './components/footer/index.jsx';
import SelectAreaApp from './components/selectArea/index.jsx';

reactHelper.register({ MenuApp });
reactHelper.register({ HeroApp });
reactHelper.register({ HomeArtworkApp });
reactHelper.register({ SearchApp });
reactHelper.register({ ArtworkApp });
reactHelper.register({ CampusApp });
reactHelper.register({ FacilitiesApp });
reactHelper.register({ AlumniApp });
reactHelper.register({ CoursesApp });
reactHelper.register({ DiscoverApp });
reactHelper.register({ AboutApp });
reactHelper.register({ AgencyApp });
reactHelper.register({ PartnerApp });
reactHelper.register({ IndividualStudyAreaApp });
reactHelper.register({ FooterApp });
reactHelper.register({ SelectAreaApp });

// MOBILE //
// Components
import MobileMenu from './components/mobile/menu/index.jsx';
import MobileHomeHero from './components/mobile/home/hero/index.jsx';
import MobileHomeArtworks from './components/mobile/home/artworks/index.jsx';
import MobileHomeStudyAreas from './components/mobile/home/studyAreas/index.jsx';
import MobileDiscover from './components/mobile/search/discover.jsx';
import MobileIndividualStudyArea from'./components/mobile/individualArea/index.jsx';
import MobileAbout from './components/mobile/about/index.jsx';
import MobileAgency from './components/mobile/agency/index.jsx';
import MobileArtwork from './components/mobile/artwork/index.jsx';
import MobileCourses from './components/mobile/courses/index.jsx';
import MobileCampus from './components/mobile/campus/index.jsx';
import MobileFacilities from './components/mobile/facilities/index.jsx';
import MobileAlumni from './components/mobile/alumni/index.jsx';

// Register to allow usage in node
reactHelper.register({ MobileMenu });
reactHelper.register({ MobileHomeHero });
reactHelper.register({ MobileHomeArtworks });
reactHelper.register({ MobileHomeStudyAreas });
reactHelper.register({ MobileDiscover });
reactHelper.register({ MobileIndividualStudyArea });
reactHelper.register({ MobileAbout });
reactHelper.register({ MobileAgency });
reactHelper.register({ MobileArtwork });
reactHelper.register({ MobileCourses });
reactHelper.register({ MobileCampus });
reactHelper.register({ MobileFacilities });

