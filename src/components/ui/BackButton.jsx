import { useNavigate } from 'react-router-dom';
import Triangle from '/src/assets/triangle.svg';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
    navigate('/');
    };

    return (
    <div 
        onClick={handleBack}
        className="rounded-4xl m-2 lg:m-4 px-3 py-2 lg:px-4 flex space-x-2 items-center bg-stone-100 shadow-md hover:bg-amber-300 hover:cursor-pointer"
    >
        <img src={Triangle} className="w-2 h-auto"/>
        <div className="flex font-['Geist_Mono'] uppercase text-sm lg:text-base text-stone-700">back</div>
    </div>
    );
};

export default BackButton;