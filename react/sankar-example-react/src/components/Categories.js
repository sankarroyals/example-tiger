import React from 'react'
import '../components/Categories.css'

const Categories = () => {
  return (
    <div>
        
        <div className="total">
          <div className='total2'>
               <div className='image'>
                  
                  <img src='https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651719583bestprogramminglanguage-scaled.jpg'
                    width={270}
                    height={200}/>
              </div>
              <div className='content'>
                 <h1 style={{fontSize:"15px" , fontWeight:"bold"}}>
                 Which Programming Language Should I Learn First in 2022?
                 </h1>
                 <h6>
                 Programming
                 </h6>
                 <h5>
                 Joel Falconer, <span  style={{color:"gray"}} >May 04</span>
                 </h5>
                 <p>
                 It's hard to decide on a programming language to learn first. Here's a look at the most popular languages in 2022, and why they're worthwhile.
                 </p>
              </div>
          </div>
          <div className='total2'>
               <div className='image'>
                  
                  <img src='https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651637815cpds-scaled.jpg'
                    width={270}
                    height={200}/>
              </div>
              <div className='content'>
                 <h1 style={{fontSize:"15px" , fontWeight:"bold"}}>
                 How to Create a Color Palette for Your Design System
                 </h1>
                 <h6 className='second'>
                 Design & UX
                 </h6>
                 <h5>
                 SitePoint Team, <span  style={{color:"gray"}} >May 04</span>
                 </h5>
                 <p>
                 A color palette is one of the most important aspects of a design system. Designers can use them to create a visual hierarchy, a unified look and feel, and evoke emotions
                 </p>
              </div>
          </div>
          <div className='total2'>
               <div className='image'>
                  
                  <img src='https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651545056webflow.jpg'
                    width={270}
                    height={200}/>
              </div>
              <div className='content'>
                 <h1 style={{fontSize:"15px" , fontWeight:"bold"}}>
                 Webflow Review: Is It a Serious Option for Tech-Savvy Users?
                 </h1>
                 <h6 className='third'>
                 Computing
                 </h6>
                 <h5>
                 SitePoint Team, <span  style={{color:"gray"}} >May 04</span>
                 </h5>
                 <p>
                 Find out if Webflow is a viable option for tech-savvy users who want to build custom websites. This review covers the pros and cons of using this online builder service.
                 </p>
              </div>
          </div>
         </div>
    </div>
  )
}

export default Categories