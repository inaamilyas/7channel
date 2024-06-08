import React from 'react'
const cities = [
    {
      icon: "https://channel7.com.pk/wp-content/uploads/2021/01/Peshawar-1.png",
      name: "PESHAWAR",
      address: "First Floor, New Cantonment Plaza, Bara Road, Peshawar Cantt.",
      ph: "+92-91-5252051",
    },
    {
      icon: "https://channel7.com.pk/wp-content/uploads/2021/01/Lahore-1.png",
      name: "LAHORE",
      address: "House 1-B, White House Lane 2, Sunderdas Road Lahore.",
      ph: "+92-91-5252051",
    },
    {
      icon: "https://channel7.com.pk/wp-content/uploads/2021/01/Islamabad-1.png",
      name: "ISLAMABAD",
      address:
        "3rd Floor, Office Tower, Fazal-e-Haq Road, Blue Area, Islamabad- Pakistan.",
      ph: "+92-91-5252051",
    },
    {
      icon: "https://channel7.com.pk/wp-content/uploads/2021/01/Karachi-1.png",
      name: "KARACHI",
      address: "Ground Floor,188-Q, Block 2, PECHS,Karachi.",
      ph: "+92-91-5252051",
    },
    {
      icon: "https://channel7.com.pk/wp-content/uploads/2021/01/Dubai-1.png",
      name: "DUBAI",
      address:
        "Office# 15, Second Floor, Building A5, DTEC, D.S.O, Dubai, U.A.E.",
      ph: "+92-91-5252051",
    },
  ];
  
function Cities() {
  return (
    <>
     <section className="w-[100%] h-fit border-t-[3px] py-20 ">
        <div className="container mx-auto h-full">
          <div className=" flex items-center justify-between flex-wrap">
            {cities.map((city, idx) => (
              <div key={idx} className="w-[19%] h-[300px]  ">
                <div className="flex flex-col items-center justify-around h-full gap-3">
                  <div className="flex flex-col items-center gap-4">
                    <img className=" h-[120px]" src={city.icon} alt="" />
                    <hr className="w-full border-b-[2px] border-[black]" />
                    <h1 className="text-[25px] text-center font-bold uppercase ">
                      {city.name}
                    </h1>
                    <p className="text-center uppercase">{city.address}</p>
                    <p>Tel:{city.ph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Cities