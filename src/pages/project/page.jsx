
function Project() {
  return (
    <div className="max-w-screen justify-center  w-fulbg-gradient-to-b from-blue-400 to-blue-900l h-full">
      <h1 className="bg-transparent text-center text-white rounded-b-md text-4xl gap-5 border-black-500" style={{marginBottom:'20px',paddingTop:'20px'}}>Web Development Tech Stach</h1>
      <div className="text-center justify-center flex flex-col gap-5">

        {/*step 1*/}
        <div className="flex flex-col sm:flex-row justify-center gap gap-6">
        <div className="border-2 w-50 bg-transparent text-center justify-between text-4xl cursor-pointer rounded-full animate-bounce bg-[url('/Ncl.jpg')]" style={{marginLeft:'10px'}}>👉</div>
        <div className="border-2 w-300 bg-transparent text-center justify-between text-2xl cursor-pointer flex flex-col rounded-full animate-bounce text-white" style={{marginLeft:'10px'}}>MongoDB is a flexible, general-purpose document database that is ideally suited for modern applications</div>    
        </div>

        {/*step 2*/}
        <div className="flex flex-col justify-center gap-6 sm:flex-row-reverse">
        <div className="border-2 w-50 bg-transparent text-center justify-between text-4xl cursor-pointer rounded-full animate-bounce bg-[url('/Ncl.jpg')] ml-[10px]">👈</div>
        <div className="border-2 w-300 bg-transparent text-center justify-between text-2xl cursor-pointer flex flex-col rounded-full animate-bounce text-white" style={{marginLeft:'10px'}}>Express.js, commonly referred to as Express, is a minimal and flexible Node.js web application framework</div>
        </div>

        {/*step 3*/}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
        <div className="border-2 w-50 bg-transparent text-center justify-between text-4xl cursor-pointer rounded-full animate-bounce bg-[url('/Ncl.jpg')]" style={{marginLeft:'10px'}}>👉</div>
        <div className="border-2 w-300 bg-transparent text-center justify-between text-2xl cursor-pointer flex flex-col rounded-full animate-bounce text-white" style={{marginLeft:'10px'}}>React is a JavaScript library developed by Facebook that, among other things, was used to build Instagram.com</div>
        </div>

        {/*step 4*/}
        <div className="flex flex-col justify-center gap-6 sm:flex-row-reverse">
        <div className="border-2 w-50 bg-transparent text-center justify-between text-4xl cursor-pointer rounded-full animate-bounce bg-[url('/Ncl.jpg')]" style={{marginLeft:'10px'}}>👈</div>
        <div className="border-2 w-300 bg-transparent text-center justify-between text-2xl cursor-pointer flex flex-col rounded-full animate-bounce text-white" style={{marginLeft:'10px'}}>Node. js lets developers use JavaScript to write command line tools and for server-side scripting</div>
        </div>

        {/*step 5*/}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
        <div className="border-2 w-50 bg-transparent text-center justify-between text-4xl cursor-pointer rounded-full animate-bounce bg-[url('/Ncl.jpg')]" style={{marginLeft:'10px'}}>👉</div>
        <div className="border-2 w-300 bg-transparent text-center justify-between text-2xl cursor-pointer flex flex-col rounded-full animate-bounce text-white" style={{marginLeft:'10px'}}>Material UI (now often referred to as MUI) is a popular, open-source React UI library that implements Google's Material Design</div>
        </div>

      </div>
    </div>
  );
}

export default Project;
