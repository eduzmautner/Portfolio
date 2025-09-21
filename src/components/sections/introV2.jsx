
const introV2 = () => {
  return (
    <section id="introV2" className="w-full">
      <div className="w-full">
        {/* Text Column */}
        <div className="w-full h-screen py-18 border-b border-[#7F7F7F] flex justify-center items-center px-12 lg:px-32 2xl:px-64 animated-background bg-gradient-to-r from-red-100 to-amber-100 via-neutral-50">
          <div className="text-justify lg:text-center max-w-none">
            <p className="text-stone-800 text-2xl lg:text-5xl 2xl:text-7xl font-normal font-['Geist'] tracking-tighter leading-tight lg:leading-none">
              <span className="font-['UnifrakturMaguntia']">Eduardo{' '}</span>
              <span className="uppercase">is a NY-based Generalist designer, currently working as an Industrial Designer @{' '}</span>
              <a href="https://merkuryinnovations.com/" target="_blank" rel="noopener noreferrer" className="lg:text-5xl 2xl:text-7xl font-['UnifrakturMaguntia'] hover:text-neutral-300 tracking-tighter underline">
                Merkury Innovations
              </a>
              <span className="uppercase">
              . Previously @{' '}
              </span>
              <a href="https://merkuryinnovations.com/" target="_blank" rel="noopener noreferrer" className="lg:text-5xl 2xl:text-7xl font-['UnifrakturMaguntia'] hover:text-neutral-300 tracking-tighter underline">
                Kikkerland Design Inc.
              </a>
              <span className="uppercase">
              {' '}and A Lot of Brasil
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

export default introV2;
