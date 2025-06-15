import React, { useContext, useEffect, useState } from 'react'
import BlogView from './BlogView'
import { useParams } from 'react-router-dom'
import { mainContext } from '../Context/Maincontext'
import AllBlogs from '../../public/data/blog.json'
import Loader from '../Components/Loader'
  const Blogs = () => {
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
    const {id} = useParams()
    const {blogs} = useContext(mainContext)
    const blog = blogs.find(b => b.id === id)
    console.log(blog);
    const blogData = AllBlogs.find( b => b.id == id)

  return (
    <BlogView blogData={blogData} img={blog.img} des={"LNCT Group of Colleges: Igniting Brilliance, Engineering the Future | Empowering Minds, Engineering Excellence"} head={blog.title}/>
  )
}

export default Blogs