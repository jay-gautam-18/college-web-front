import Nav from '../Components/Nav'
import LatestNews from '../Components/LatestBlogs'
import LnctFooter from '../Components/LnctFooter'
import StackHome from '../Components/HomeComponets/StackHome'
import NewsMedia from '../Components/NewsMedia'
import Gallery from '../Components/Gallery'
import Loader from '../Components/Loader'
import { useState, useEffect } from 'react'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
    {/* <Loader/> lund peer rkhu mere loader ko */}
    
    <Nav/>
    <StackHome/>
    <Gallery/>
    <NewsMedia/>
    <LatestNews/>
    <LnctFooter/>
    {/* <Gallery /> */}
    </>
  )
}

export default Home