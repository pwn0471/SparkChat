const Logo = ({ size = 80, textSize = "text-3xl" }) => {
  return (
    <div className="flex items-center gap-1">

      {/* Logo Image */}
      <img
        src="/logo1.png"
        alt="BindaasTalk"
        style={{ width: size, height: size }}
        className="w-8"
      />

      {/* Logo Text */}
      <h1 className={`${textSize} font-extrabold font-mono tracking-wide`}>
        <span className="text-orange-300">Spark</span>
        <span className="text-white">Chat</span>
      </h1>

    </div>
  );
};

export default Logo;