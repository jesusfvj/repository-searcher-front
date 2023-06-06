export const Loader = ({modal = false}) => {
  return (
    <div className={`fixed z-50 h-screen w-screen top-0 bottom-0 left-0 right-0 ${modal ?  'backdrop-blur-lg' : 'bg-gradient-to-b from-[#4A4A4A]'} to-[#373f3f] flex items-center justify-center`}>
      <div className="animate-rotate flex flex-col items-center gap-4 bg-black rounded-full">
        <img className="h-20 w-20 md:h-52 md:w-52" src="https://res.cloudinary.com/diek1olu2/image/upload/v1685732941/samples/github.e4cf49de_gw95ss.png" alt="logo"/>
      </div>
    </div>
  );
};