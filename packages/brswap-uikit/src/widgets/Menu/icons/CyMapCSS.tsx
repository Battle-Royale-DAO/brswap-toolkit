import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <g id="Mode_Isolation" data-name="Mode Isolation">
            <path className="cls-1"
                  d="M112.34153,194.83216a4.52855,4.52855,0,0,1-3.45515-1.60031c-2.62291-3.08773-64.21811-76.05552-64.21811-112.13214a67.67222,67.67222,0,0,1,135.34432,0c0,36.07662-61.593,109.0444-64.2159,112.13214A4.52858,4.52858,0,0,1,112.34153,194.83216Zm0-172.25762A58.632,58.632,0,0,0,53.73446,81.09971c0,28.2256,45.55008,86.08233,58.60707,102.08761,13.057-16.00749,58.60487-73.87528,58.60487-102.0876A58.63151,58.63151,0,0,0,112.34153,22.57454Z"/>
            <path className="cls-1"
                  d="M112.34153,107.05655a26.83448,26.83448,0,1,1-.058-53.66893q.029,0,.058,0a4.5331,4.5331,0,0,1,.01429,9.06619q-.00714,0-.01429,0A17.7683,17.7683,0,1,0,130.13747,80.221a4.5331,4.5331,0,0,1,9.06619,0A26.87929,26.87929,0,0,1,112.34153,107.05655Z"/>
        </g>
    </Svg>
  );
};

export default Icon;
