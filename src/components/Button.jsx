const Button = ({ label }) => {
  return (
    <>
      <div>
        <button className="bg-green-600 text-slate-50 p-2 text-sm rounded-lg hover:bg-green-500 hover:text-white hover:-translate-y-4 duration-1000">
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
