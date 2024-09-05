const Button = ({ label, variant, onClick }) => {
  const primaryColor =
    "bg-green-600 text-slate-50 p-2 text-sm rounded-lg hover:bg-green-500 hover:text-white hover:-translate-y-2 duration-1000";
  const secondaryColor =
    "bg-white text-black py-2 w-20 font-bold text-lg rounded-lg hover:bg-slate-200 hover:-translate-y-2 duration-1000";
  const buttonClass = variant === "secondary" ? secondaryColor : primaryColor;
  return (
    <>
      <div>
        <button className={buttonClass} onClick={onClick}>
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
