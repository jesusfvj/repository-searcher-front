export const Loader = ({modal = false}) => {
  return (
    <div className={`fixed z-50 h-screen w-screen top-0 bottom-0 left-0 right-0 ${modal ? 'backdrop-blur-md' : 'bg-gradient-to-b from-[#4A4A4A]'} to-[#373f3f] flex items-center justify-center`}>
      <div className="animate-rotate flex flex-col items-center gap-4">
        <img className="h-52 w-52" src="https://res.cloudinary.com/diek1olu2/image/upload/v1684838608/ASSEME%20-%20visual/logo_vzfxlv.png" alt="logo"/>
      </div>
    </div>
  );
};