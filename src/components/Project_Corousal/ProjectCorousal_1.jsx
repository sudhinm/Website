import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousal1.scss'
import Image1 from '../../Images/Projects/Notes_App/Login.webp'
import Image2 from '../../Images/Projects/Notes_App/Dashboard.webp'
import Image3 from '../../Images/Projects/Notes_App/AddNotes.webp'
import Image4 from '../../Images/Projects/Notes_App/Miscellaneous.webp'

function ProjectCorousal1() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="projectcorousal1">
            <Carousel swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={5000}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all 0.7"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-10-px">
                <div>
                    <img alt="Log in page of mobile application to take notes" src={Image1}/>
                    <p>Login Page</p>
                </div>
                <div>
                    <img alt="Dashboard of notes application displaying notes added by the user" src={Image2} />
                    <p>Dashboard</p>
                </div>
                <div>
                    <img alt="Add notes page of the notes application" src={Image3} />
                    <p>Add Notes</p>
                </div>
                <div>
                    <img alt="Add notes page with options to select color, add images and URL" src={Image4} />
                    <p>Miscellaneous</p>
                </div>
            </Carousel>
        </div>
    )
}

export default ProjectCorousal1
