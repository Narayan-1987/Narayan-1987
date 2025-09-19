import './about.css';
function Home() {
  return (

    <div className="bg-[url('/bg-1.avif')] h-100 w-full bg-cover flex">
      {/*left*/}
      <div className="bg-[url('/circle.avif')] h-90 w-90 bg-cover" style={{ marginTop: '30px'}}>
        {/*button*/}
        <div className="bg-blue-500 text-white text-center w-40 rounded-full cursor-pointer" style={{ marginLeft: '200px', marginTop: '30px' }}>Planning Suite</div>
        <div className="bg-blue-500 text-white text-center w-40 rounded-full cursor-pointer" style={{ marginLeft: '220px', marginTop: '20px' }}>Site Suite</div>
        <div className="bg-blue-500 text-white text-center w-60 rounded-full cursor-pointer" style={{ marginLeft: '250px', marginTop: '30px' }}>Patient Engagement Suite</div>
        <div className="bg-blue-500 text-white text-center w-60 rounded-full cursor-pointer" style={{ marginLeft: '280px', marginTop: '40px' }}>Safety, Regulatory Quality</div>
        <div className="bg-blue-500 text-white text-center w-60 rounded-full cursor-pointer" style={{ marginLeft: '250px', marginTop: '50px' }}>Clinical Data Analytic Solutions</div>

      </div>
      {/* right */}
      <div className="max-w-xl text-gray-700 px-10 ml-30 my-7" style={{ marginLeft: '300px', marginTop: '100px'}}>
        <h2 className="text-2xl font-semibold text-blue-500 mb-3" style={{ textShadow: '1px 1px 1px black' }}>
          Suites and products that work great on their own, but even better together
        </h2>
        <p className="mb-4 text-justify">
          The Orchestrated Clinical Trials (OCT) Suites are created to engage the patient
          and improve the speed and agility of clinical research. Most OCT products are
          cloud-based solutions designed to improve the clinical trial process and are
          interoperable with legacy systems. When used together, they power complete
          orchestration of your trials. Explore our full line of integrated suites and products.
        </p>
        <p className="text-blue-500 font-medium cursor-pointer">✨ Click each area to learn more</p>
        <div className="bg-blue-500 text-white text-center w-40 rounded-full cursor-pointer" style={{ marginLeft: '250px', marginTop: '50px'}}>Contact Us</div>
      </div>
    </div>

  );
}
export default Home;
