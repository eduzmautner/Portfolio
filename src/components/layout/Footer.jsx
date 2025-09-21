const Footer = () => {
    return (
      <section id="Footer" className="w-full">
        <div className="flex flex-col lg:flex-row h-32 bg-black text-stone-50 text-xs font-light uppercase">
            <div className="flex flex-1 border-b lg:border-r border-[#7F7F7F] justify-start lg:justify-center items-center px-4 lg:px-8">
                Designed and developed by Eduardo Mautner &copy;2025
            </div>
            <div className="flex flex-1 border-b lg:border-r border-[#7F7F7F] justify-start lg:justify-center items-center px-4 lg:px-8">
                eduzmautner@gmail.com
            </div>
            <div className="flex flex-1 justify-start lg:justify-center items-center px-4 lg:px-8">
                IG: @eduardozmautner
            </div>
        </div>
      </section>
    );
  };
  
  export default Footer;
  