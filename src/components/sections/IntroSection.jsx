import polySnapshot from '../../assets/poly-snapshot.png';

const IntroSection = () => {
  return (
    <section id="intro" className="w-full">
      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Column - Image */}
        <div className="w-full lg:flex-1 py-24 border-r border-b border-[#7F7F7F] flex justify-center items-center">
          <img 
            src={polySnapshot} 
            alt="3D Wireframe Bust" 
            className="w-30 h-60 object-cover"
          />
        </div>
        
        {/* Right Column - Text */}
        <div className="w-full h-screen lg:w-160 lg:flex-auto py-6 border-b border-[#7F7F7F] flex justify-center items-center px-12 lg:px-24 bg-white">
          <div className="text-justify text-center lg:text-left max-w-none">
            <p className="text-2xl lg:text-[2.5rem] text-red-500 font-normal font-['UnifrakturMaguntia'] leading-tight lg:leading-none">
              Eduardo is a NY-based Generalist designer, currently working as an Industrial Designer @{' '}
              <a href="https://merkuryinnovations.com/" target="_blank" rel="noopener noreferrer" className="lg:text-[2rem] font-['Geist_Mono'] uppercase hover:text-neutral-300 underline">
                Merkury Innovations
              </a>
              . Previously @{' '}
              <a href="https://merkuryinnovations.com/" target="_blank" rel="noopener noreferrer" className="lg:text-[2rem] font-['Geist_Mono'] uppercase hover:text-neutral-300 underline">
                Kikkerland Design Inc.
              </a>
              , and{' '}
              <span>
                A Lot of Brasil
              </span>
              <span>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
