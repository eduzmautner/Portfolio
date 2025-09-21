import { useState, useEffect, useRef } from 'react';

const Divider = ({ text = "projects", backgroundColor = "bg-yellow-200", textColor = "text-stone-50" }) => {
  return (
    <section className={`w-full ${backgroundColor} border-b border-[#7F7F7F] overflow-hidden`}>
      <div className="py-1 flex items-center">
        <div className="animate-scroll-text whitespace-nowrap font-['Geist_Mono'] font-normal text-sm">
          <span className={textColor}>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}
          </span>
          <span className={textColor}>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{text}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Divider;