const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
   return (
      <button
         className={` flex justify-center items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 border font-montserrat sm:text-lg leading-none

         ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red cursor-pointer"}  rounded-full`}>
         
         {label}
         {iconURL && <img src={iconURL} alt="arrowRight" className="ml-2 rounded-full w-5 h-5 " />}
      </button>
   );
};

export default Button;
