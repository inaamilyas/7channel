import React from "react";

const PeopleCard = ({ info, classes }) => {
  return (
    <div className={`h-fit relative group mb-5 ${classes}`}>
      <img
        className="w-full "
        src="https://channel7.com.pk/wp-content/uploads/2023/04/Jawad-Humayun.jpg"
        alt=""
      />
      <div className="h-full w-full bg-[#00000025] absolute top-0 z-[9] group-hover:bg-[#00000050]"></div>
      <div className="w-full px-10 absolute bottom-[40px] z-[10] group-hover:top-[200px] transition delay-200 duration-[1000ms]">
        <p className=" text-[25px] font-semibold text-white ">Group Chairman</p>
        <h4 className=" text-[35px] font-bold text-white ">Name</h4>
      </div>
    </div>
  );
};

const PeopleContainer = ({ heading, data, itemsToShow }) => (
  <section className="px-5 py-[60px] h-[60%]">
    <div className="container h-full mx-auto mb-10">
      <h2>{heading}</h2>
      <div className="w-full flex items-center flex-wrap justify-start gap-7">
        {data.map((item, idx) => (
          <PeopleCard
            key={idx}
            info={item}
            classes={`w-full md:w-[450px]`}
          />
        ))}
      </div>
    </div>
  </section>
);

function WhoWeAre() {
  const managingPartners = [
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
  ];

  const direcotors = [
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
  ];

  const creative = [
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
  ];

  const artsDesign = [
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
  ];
  const clientServices = [
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
  ];

  const cards = [
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
    {
      img: "",
      name: "",
      design: "",
    },
  ];

  return (
    <>
      <section className="">
        <div className="w-[100%] h-[calc(100vh-88px)] flex items-center justify-center bg-whoweare ">
          <h1 className="text-[50px] text-white font-extrabold ">Who We Are</h1>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 py-[60px] h-fit ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
            <div className="flex-1 h-full px-8">
              <h1 className="my-5 who-heading">Skilled Team of Creators</h1>
              <p className="text-[25px] text-gray-600 leading-[40px] ">
                “We are result oriented agency with a clear objective to make
                brand impactful. We are dedicated to creative excellence and
                strive to become your trusted partner. We nurture to maintain a
                collaborative environment for outstanding client service and
                exceptional creativity which helps your brand stand-out.”
              </p>
            </div>
            <div className="flex-1 h-full px-8">
              <img
                src="https://channel7.com.pk/wp-content/uploads/2023/03/SkillTeam.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <h1 className="background-color text-center text-[45px] font-bold text-white py-2 my-5">
        Our Team
      </h1>

      <PeopleContainer
        heading="Managing Partners"
        data={managingPartners}
        itemsToShow={3}
      />
      {/* <PeopleContainer heading="Directors" data={direcotors} itemsToShow={3} />
      <PeopleContainer heading="Creative" data={creative} itemsToShow={4} /> */}
      {/* <PeopleContainer
        heading="Arts & Design"
        data={artsDesign}
        itemsToShow={3}
      />
      <PeopleContainer
        heading="Marketing and Client Services"
        data={clientServices}
        itemsToShow={3}
      /> */}

      <section>
        <div className="container mx-auto px-5 py-[60px]">
          <div className="flex items-center justify-between flex-wrap">
            {cards.map((item, idx) => (
              <div className="mb-[50px] w-full md:w-[50%] lg:w-[32%] px-3 flex flex-col justify-between items-center gap-[10px]">
                <img
                  className="rounded-[50%] w-[50%] text-center"
                  src="https://channel7.com.pk/wp-content/uploads/2021/01/Owais-Hamid-Khan.jpg"
                  alt=""
                />
                <h1 className="text-center text-[25px] font-bold text-[red] ">
                  Owais Hamid Khan
                </h1>
                <p className="text-center font-bold text-[20px]">
                  (Chief Creative Officer)
                </p>
                <p className="text-center text-lg leading-[30px]">
                  “We refresh each day with the realization that ours is not
                  merely a profession, but a gift we put to practice in a
                  winning combination of talent and skill. We are always eager
                  to learn and pass on the question and defend, challenge and
                  let go, interpret, and finally, resolve. In the process, we
                  strive to work as a seasoned team of communicators who never
                  stop short of reaching Eureka!’’
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre;
