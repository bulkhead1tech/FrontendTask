import React from 'react';
import './components.css'
import Svg1 from './svg1';
import Svg2 from './svg2';
import Svg3 from './svg3';
const Minifr = ({count, type, value}) => {

 

    const renderSvg = () => {
        switch (count) {
          case 1:
            return <Svg1 />;
          case 2:
            return <Svg2 />;
          case 3:
            return <Svg3 />;
          default:
            return null;
        }
      };

return(
        <div className="frame_1171275872 flex flex-col flex-shrink-0 items-start gap-2.5 pt-[1.125rem] pl-[1.125rem] pr-[2.6875rem] pb-6 w-[13rem] h-[10rem] rounded-[0.875rem] bg-[#ecedee]">
  <div className="flex flex-col justify-center items-start gap-2.5">
    <div className="flex flex-col justify-center items-start gap-5">
    {renderSvg()}

      <div className="flex flex-col items-start gap-2.5">
        <div className="expired_tasks text-[#797979] font-['Poppins'] text-sm font-medium leading-[normal]">{type}</div>
        <div className="five text-[#060606] font-['Poppins'] text-[1.75rem] font-medium leading-[normal]">{value}</div>
      </div>
    </div>
  </div>
</div>
    )

}
export default Minifr;