import React from 'react'
// export default Jobs
import JobsCard3 from '../Layout/JobsCard3';
import { Collection } from 'mongoose';
import art1 from './art.jpg';
import art2 from './curate.jpg';
import art3 from './HR.jpg';
import art4 from './rec.jpg';
import art5 from './st.jpg';
import art6 from './id.jpg';

const Jobs = () => {

  const jobsData = [{
    img: art1,
    name: "Artist",
    domain: "Art"
  },
  {
    img: art3,
    name: "Human Resources Department",
    domain: "Business"
  },
  {
    img: "https://www.datocms-assets.com/14946/1590690690-front-end.jpg",
    name: "Front Developer",
    domain: "Computer Science"
  },
  {
    img: art3,
    name: "Marketing & PR",
    domain: "Marketing"
  },
  {
    img: art5,
    name: "Event Organizer",
    domain: "Business"
  },
  {
    img: art1,
    name: "Oil Paint Artist",
    domain: "Art"
  },
  {
    img: art2,
    name: "Curator",
    domain: "Art"
  },
  {
    img: art4,
    name: "Receptionist",
    domain: "Business"
  },
  {
    img: art1,
    name: "Designer",
    domain: "Art"
  }];

  return (
    <div >
      <h3 style={{color: "white"}}>Jobs</h3>
      <p style={{color: "white"}}>Below are some of the jobs available! Apply Now!</p>
      <JobsCard3 data={jobsData}/>
    </div>
  )
}

export default Jobs;
