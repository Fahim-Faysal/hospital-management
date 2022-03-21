import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HandelProject from '../HandelProject/HandelProject';
import HomeBanner from '../HomeBanner/HomeBanner';
import ProjectDiscover from '../ProjectDiscover/ProjectDiscover';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
      return (
            <div>
                  <Navigation></Navigation>
                  <HomeBanner></HomeBanner>
                  <ProjectDiscover></ProjectDiscover>
                  <Service></Service>
                  <Testimonials />
                  <HandelProject />
                  <Footer></Footer>
            </div>
      );
};

export default Home;