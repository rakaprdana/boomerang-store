import Team from "../assets/gambar1.jfif";
const AboutTeam = () => {
  return (
    <>
      <section className="bg-slate-50 py-12">
        <h2 className="text-4xl font-bold text-center pb-12">About Our Team</h2>
        <div className="flex justify-between">
          <p className="flex items-center mx-12 text-xl text-gray-600">
            As a passionate and dedicated team, we wholeheartedly strive to
            provide our customers with exceptional products. Our unwavering
            commitment drives us to continuously innovate, ensuring that
            customer satisfaction remains our top priority.
          </p>
          <img src={Team} alt="Our Team" className="mx-16 w-1/4 rounded-xl" />
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
