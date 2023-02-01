import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const newsdata=[{
  headline:"RRR hits 100 days in Japan theatres,turns highest-grosser Indian film;Rajamouli pens thank you note ",
  link:"https://www.wionews.com/entertainment/rrr-completes-100-days-in-japan-theatres-ss-rajamouli-pens-thank-you-note-556940 "
},
{
  headline:"RRR hits 100 days in Japan theatres,turns highest-grosser Indian film;Rajamouli pens thank you note ",
  link:"https://www.wionews.com/entertainment/rrr-completes-100-days-in-japan-theatres-ss-rajamouli-pens-thank-you-note-556940 "
},
{
  headline:"RRR hits 100 days in Japan theatres,turns highest-grosser Indian film;Rajamouli pens thank you note ",
  link:"https://www.wionews.com/entertainment/rrr-completes-100-days-in-japan-theatres-ss-rajamouli-pens-thank-you-note-556940 "
},
{
  headline:"RRR hits 100 days in Japan theatres,turns highest-grosser Indian film;Rajamouli pens thank you note ",
  link:"https://www.wionews.com/entertainment/rrr-completes-100-days-in-japan-theatres-ss-rajamouli-pens-thank-you-note-556940 "
},
{
  headline:"RRR hits 100 days in Japan theatres,turns highest-grosser Indian film;Rajamouli pens thank you note ",
  link:"https://www.wionews.com/entertainment/rrr-completes-100-days-in-japan-theatres-ss-rajamouli-pens-thank-you-note-556940 "
},{
  headline:"RRR hits 100 days in Japan theatres,turns highest-grosser Indian film;Rajamouli pens thank you note ",
  link:"https://www.wionews.com/entertainment/rrr-completes-100-days-in-japan-theatres-ss-rajamouli-pens-thank-you-note-556940 "
},
{
  headline:"RRR hits 100 days in Japan theatres,turns highest-grosser Indian film;Rajamouli pens thank you note ",
  link:"https://www.wionews.com/entertainment/rrr-completes-100-days-in-japan-theatres-ss-rajamouli-pens-thank-you-note-556940 "
}]




function Widgets() {


const news=(headline,link)=>(
<a href={link} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
<div className="widgets">
  <div className='widgets_left'>
<FiberManualRecordIcon style={{width:"10px",height:"10px",color:'gray'}}/>
  </div>
  <div className='widgets_right'>
    <h1>{headline}</h1>
  </div>
</div>

</a>
)





  return (
    <div className='widgets_container'>
        <div className='widgets_header'>
<h2>Pro Network News</h2>
<InfoIcon/>


        </div>
       
           
        {newsdata.map((item,index)=>(<div className='single_news' key={index}>{news(item.headline,item.link)} </div> )) }
           
    
    </div>
  )
}

export default Widgets
