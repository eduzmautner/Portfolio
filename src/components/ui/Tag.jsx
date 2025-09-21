const Tag = ({ text = "About" }) => {
  return (
    <div className="w-fit px-2 py-2 lg:px-3 lg:py-2 bg-[#BBFF99]/30 text-stone-700 font-['Geist_Mono'] uppercase text-sm lg:text-sm font-normal tracking-wider">
      {text}
    </div>
  );
};

export default Tag;