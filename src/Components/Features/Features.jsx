import React from "react";
import './Features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features(){
    return(
        <div className="features">
            <div className="featuresItem">
                 <span className="faaturesTitle">Revanue</span>
                 <div className=" featuresContainer">
                     <span className="faeturesMony">$2,415</span>
                     <span className="faeturesRate">
                       -11.4 <ArrowDownwardIcon className="featuresIconsnagative"/>
                     </span>
                 </div>
                 <span className="featuresSub">compared last mounth</span>
            </div>

            <div className="featuresItem">
                 <span className="faaturesTitle">sales</span>
                 <div className=" featuresContainer">
                     <span className="faeturesMony">$4,445</span>
                     <span className="faeturesRate">
                       -1.4 <ArrowDownwardIcon className="featuresIconsnagative"/>
                     </span>
                 </div>
                 <span className="featuresSub">compared last mounth</span>
            </div>

            <div className="featuresItem">
                 <span className="faaturesTitle">cost</span>
                 <div className=" featuresContainer">
                     <span className="faeturesMony">$2,225</span>
                     <span className="faeturesRate">
                        +2.4 <ArrowUpwardIcon  className="featuresIcons"/>
                     </span>
                 </div>
                 <span className="featuresSub">compared last mounth</span>
            </div>


        </div>
    )
}