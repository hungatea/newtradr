import React, { useState, useEffect } from "react";
import SP500 from './SP500.json';

export default function Advice(props) {

    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);

    const riskLevels = ['small', 'moderate', 'healthy']
    const riskJSON = ['Conservative', 'Moderate', 'Aggressive']
    const risk = riskLevels[props.risk];

    const company1 = SP500[riskJSON[props.risk]].find(s => s['Sector'] === props.interests[0])
    const company2 = SP500[riskJSON[props.risk]].find(s => s['Sector'] === props.interests[1])
    const company3 = SP500[riskJSON[props.risk]].find(s => s['Sector'] === props.interests[2])

    const riskLevels2 = [
        'match market returns, on average. These stocks may vary from day-to-day, but over time should show healthy, moderate growth.',
        'do a bit better than the market, on average. Like all stocks, these will vary from day-to-day, but can be expected to have moderate returns over the long-term.',
        'can deliver high returns. In the long run, these companies can perform very well, but they may have more volatility and it will be important to be watchful of general market conditions.'
    ]

    const riskP = riskLevels2[props.risk];

  return (
    <>
    <div className='advice-container'>
      <h2>{`Thanks, ${props.name}!`}</h2>
      <br/>
      <h2>{`Based on your responses, you are ready to
            take on a ${risk} amount of risk.`}</h2>
      <p className='advice'>{`You will be best off investing in companies that ${riskP}`}
      </p>
      <br/>
      <p className='advice'>
      Here are a few companies to check out based on your interests and risk appetite. Click on a company to learn more or click the button below when you are ready to invest!
      </p>
      <div className='button'>
          <a href='https://www.blackrock.com/us/individual' target='blank'>
          <button className='invest-button'>Start Investing</button>
          </a>
          </div>
      <div className='company' onClick={() => {
          setExpand1(!expand1)
      }}>
          <div className='company-third'>
              <div className='company-ticker'>
                  {company1['Symbol']}
              </div>
              <div className='company-name'>
                  {company1['Name']}
              </div>
          </div>
          <div className='company-more'>
              {`${expand1 ? 'Read Less' : 'Read More'}`}
          </div>
          <div className='company-right'>
              <div className='company-ticker'>
                  $100
              </div>
              <div className='company-name'>
                  Current Price
              </div>
          </div>
      </div>
      {expand1 &&
      <div className='company-detail'>
          <div className='company-desc'>
              {`${company1['Name']} is a ${company1['Description']} with a market capitalization of $${company1['Market Capitalization']}
                and year-to-date gains of ${company1['1-Year % Growth']}%`}
          </div>
    </div>
        }
        
        <div className='company' onClick={() => {
          setExpand2(!expand2)
      }}>
          <div className='company-third'>
              <div className='company-ticker'>
                  {company2['Symbol']}
              </div>
              <div className='company-name'>
                  {company2['Name']}
              </div>
          </div>
          <div className='company-more'>
          {`${expand2 ? 'Read Less' : 'Read More'}`}
          </div>
          <div className='company-right'>
              <div className='company-ticker'>
                  $100
              </div>
              <div className='company-name'>
                  Current Price
              </div>
          </div>
      </div>
      {expand2 &&
      <div className='company-detail'>
          <div className='company-desc'>
              {`${company2['Name']} is a ${company2['Description']} with a market capitalization of $${company2['Market Capitalization']}
                and year-to-date gains of ${company2['1-Year % Growth']}%`}
          </div>
    </div>
        }
        <div className='company' onClick={() => {
          setExpand3(!expand3)
      }}>
          <div className='company-third'>
              <div className='company-ticker'>
                  {company3['Symbol']}
              </div>
              <div className='company-name'>
                  {company3['Name']}
              </div>
          </div>
          <div className='company-more'>
          {`${expand3 ? 'Read Less' : 'Read More'}`}
          </div>
          <div className='company-right'>
              <div className='company-ticker'>
                  $100
              </div>
              <div className='company-name'>
                  Current Price
              </div>
          </div>
      </div>
      {expand3 &&
      <div className='company-detail'>
          <div className='company-desc'>
              {`${company3['Name']} is a ${company3['Description']} with a market capitalization of $${company3['Market Capitalization']}
                and year-to-date gains of ${company3['1-Year % Growth']}%`}
          </div>
    </div>
        }
        
        </div>
        <p className='details' style={{marginTop:'500px'}}>
            Companies are suggested on the basis of weighted risk profile factors as well as quantitative signals including but not limited to: moving day averages, standard deviations of price movements, stochastic oscillators, and YTD performance benchmarked against the SPX. 
        </p>
    </>
  );

}

