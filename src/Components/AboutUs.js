import React from "react";

function AboutUs() {
    return (
        <>
        <div className='main-container' style={{marginTop:'210px'}}>
          <h2>Welcome to NewTradr.</h2>
          <p className='advice'>
            We provide a simple survey tool that allows a new investor to 
            find three companies in which he or she may be interested in investing. Our goal is to introduce investing to people who may not consider themselves
            the "investor type" (especially younger people, as investing is a habit best learned early!)
            <br />
            <br />
            Our survey is based on demonstrated research linking certain areas of behavior, such as driving and socialization, to risk appetite.
            However, we know that it is more fun to buy stock in a company that does something you care about,
            so we make sure to ask for your interests as well :)
            </p>
            <h2 style={{marginTop:'20px'}}>Cal Hackathon</h2>
            <p className='advice'>
            This project was wholly conceived and built between 4 pm EST on Friday, October 22 and 9 am EST on Sunday, October 24 as
            part of the Hackathon at University of California, Berkeley.
            <br />
            <br />
            We were inspired by the challenge this year issued by BlackRock to "come up with a tool that increases wellbeing."
            </p>
            <h2 style={{marginTop:'20px'}}>Techstack</h2>
            <p className='advice'>
            The frontend of this application is all custom-built in React.js without any additional libraries. On the backend, we built
            a database of financial information linking companies to industry sectors and personal interests alongside key risk and buy indicators,
            such as moving averages, standard deviations in price and volume, and total market capitalization. 
            <br />
            <br />
            We used the Google Finance API to build this database and subsequently pared it down in JSON format for the purposes of this application.
            </p>
            <h2 style={{marginTop:'20px'}}>About Us</h2>
            <p className='advice'>
            This project was built by Andrew Hungate, Duc Nguyen, Sophia Chang, and Kenny Robert. We are all current students at UC Berkeley and
            this is the first time any of us have participated in a Hackathon! 
            <br />
            <br />
            </p>
        </div>
        </>
      );
}

export default AboutUs;