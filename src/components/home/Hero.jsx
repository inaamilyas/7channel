import React from 'react'

function Hero() {
    const heroSectionContent = [
        {
          img: "https://channel7.com.pk/wp-content/uploads/2023/04/Jawad-Humayun.jpg",
          designation: "Group Chairman",
          desc: "Advertising, to me, is more than just a profession, it is a life one has to live, a discipline that transcends the boundaries of commerce and reaches the very core of our humanity. Advertising is not just about selling products or services but about creating a connection with people on a deeper level, one that speaks to their values, aspirations, and dreams.",
          name: "Jawad Humayun",
        },
        {
          img: "https://channel7.com.pk/wp-content/uploads/2023/03/Sayyed-Ahmad-Masud1.png",
          designation: "Managing Director",
          desc: "Advertising is a non-personal effort to increase the volume of sales by utilizing media vehicles through owned, earned, and paid media. We create a brand identity for a client with distinction, enabling it to stay on top of emerging trends.",
          name: "Sayyed Ahmed Masud",
        },
      ];
  return (
    <section className="w-[100%] h-[calc(100vh-100px)]">
        <div className="container mx-auto h-full">
          <div className="h-full flex items-center justify-between gap-10 flex-wrap">
            {heroSectionContent.map((card, idx) => (
              <div
                key={idx}
                className="flex-1 min-h-[500px] p-5 rounded-[20px] shadow-lg bg-gray-200"
              >
                <div className="flex h-full">
                  <div className="w-[30%] h-full flex flex-col items-end justify-center p-3">
                    <img
                      className="w-full rounded-full"
                      src={card.img}
                      alt=""
                    />
                  </div>
                  <div className="w-[70%] h-full p-5 flex flex-col items-start justify-between gap-5">
                    <svg
                      className="w-[50px] h-[50px] "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="red"
                        d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                      />
                    </svg>
                    <p className="text-justify text-[18px]">{card.desc}</p>
                    <h1 className="my-5 text-[24px] text-red-600 font-bold text-center w-full">
                      {card.name}
                    </h1>
                    <a
                      className="text-[18px] px-5 py-2 bg-red-700 block mx-auto rounded-full font-bold text-white"
                      href=""
                    >
                      {card.designation}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Hero