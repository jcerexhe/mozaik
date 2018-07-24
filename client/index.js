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
import PerformingArtsApp from './components/performingArts/index.jsx';
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
reactHelper.register({ PerformingArtsApp });
reactHelper.register({ FooterApp });
reactHelper.register({ SelectAreaApp });

// MOBILE //
// Components
import MobileHomeHero from './components/mobile/home/hero.jsx';

// Register to allow usage in node
reactHelper.register({ MobileHomeHero });



