const Educarion = () => {
  return (
    <section className="py-8  bg-white lg:pt-6 pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/6BWxHwQ/FB-IMG-1719997740810-2.jpg"
              alt="tarek"
              className="shadow-md rounded"
            />
          </div>
          <div className="my-5 md:my-0 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Diploma in Engineering
              </h3>
              <p className="text-gray-700">Feni Computer Institute, Feni</p>
              <p className="text-gray-700" >
                Currently pursuing diploma engineering in Electrical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educarion;
