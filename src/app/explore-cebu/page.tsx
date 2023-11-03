"use client";
import React, { useState } from "react";

const ExploreCebu = () => {
  const [activeButton, setActiveButton] = useState("Getting to Cebu");

  const buttons = [
    "Getting to Cebu",
    "Where to Stay",
    "Things to Do",
    "Must-try Eats",
  ];
  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className="bg-[#F2F1E9]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-evenly">
          <div className="flex  flex-col justify-center px-10 mt-20 lg:mt-0">
            <h1 className="leading-none text-3xl mb-5 lg:mb-5 lg:text-[48px] text-[#234C81] font-bold text-center lg:text-left">
              Unwind and Explore Mactan's Treasures Beyond OSAPS 2024!
            </h1>
            <p className="leading-loose text-justify">
              Mactan, Cebu is a captivating island paradise nestled in the
              Philippines, renowned for its pristine beaches, crystal-clear
              waters, and vibrant marine life. This tropical haven offers an
              array of water sports, historic sites like the Magellan Shrine,
              and the striking Mactan-Cebu International Airport. It's a
              destination where natural beauty and rich culture converge,
              providing travelers with an unforgettable experience in the heart
              of the Visayas region.
            </p>
          </div>

          <img
            className="w-[562px] mx-auto object-contain px-5 my-20 "
            src="/assets/images/cebu/island1.png"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <div>
          <div className="flex justify-center space-x-5 px-5 lg:px-0">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={
                  activeButton === button
                    ? "bg-[#234C81] px-3 py-2 rounded-full text-white text-xs lg:text-base"
                    : "border px-3 py-2 rounded-full border-[#234C81] text-xs lg:text-base"
                }
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        {activeButton === "Getting to Cebu" && (
          <div className="px-5 max-w-7xl mx-auto flex lg:flex-row-reverse flex-col justify-center lg:justify-evenly">
            <div className="flex  flex-col justify-center px-10 mt-20 lg:mt-0">
              <h1 className="leading-none text-3xl mb-5 lg:mb-5 lg:text-[48px] text-[#234C81] font-bold text-center lg:text-left">
                Getting to Cebu
              </h1>
              <p className="leading-loose text-justify">
                Getting to Mactan, Cebu, is relatively straightforward, and for
                many travelers, it typically involves international flights.
                Mactan-Cebu International Airport, one of the Philippines'
                busiest airports, connects the island to various international
                destinations. Most international visitors will arrive in Cebu
                via connecting flights from major hubs such as Manila,
                Singapore, Hong Kong, or Incheon. Regarding travel
                documentation, most travelers to the Philippines, including
                Mactan, Cebu, are required to have a valid passport for entry.
                The specific visa requirements can vary depending on your
                nationality and the purpose and duration of your visit.
              </p>
            </div>

            <img
              className="w-[562px] mx-auto object-contain px-5 my-20 "
              src="/assets/images/cebu/island2.png"
              alt=""
            />
          </div>
        )}

        {activeButton === "Where to Stay" && (
          <div className="max-w-7xl mx-auto mt-20 px-10">
            <h1 className="leading-none text-3xl mb-5 lg:mb-5 lg:text-[48px] text-[#234C81] font-bold text-center lg:text-left">
              Where to Stay
            </h1>
            <p className="leading-loose text-justify">
              In Mactan, Cebu, your lodging options cater to all preferences and
              budgets. For the utmost in relaxation and convenience, consider{" "}
              <br /> the world-class resorts, such as the preferred Shangri-La
              Mactan, offering stunning ocean views, private beaches, and
              top-notch amenities.
            </p>
            <div className="max-w-7xl mx-auto flex lg:flex-row-reverse flex-col justify-center lg:justify-evenly">
              <div className="flex  flex-col justify-center px-10 mt-20 lg:mt-0">
                <h1 className="leading-none text-3xl mb-5 lg:mb-5 lg:text-[34px] text-[#234C81] font-bold text-center lg:text-left">
                  Make a reservation now!
                </h1>
                <p className="">Get in touch with Shangri-la Mactan</p>
                <div className="flex space-x-2 mt-10">
                  <img src="/assets/images/cebu/circleanchor.png" alt="" />
                  <p> Punta Engano Road, Lapu-Lapu, Cebu 6015 Philippines</p>
                </div>
                <div className="flex space-x-2 mt-10">
                  <img src="/assets/images/cebu/emailicon.png" alt="" />
                  <p> Mactan@shangri-la.com</p>
                </div>
                <div className="flex space-x-2 mt-10">
                  <img src="/assets/images/cebu/phoneicon.png" alt="" />
                  <p> (63 32) 231 0288</p>
                </div>
                <button className="bg-[#FBCE3A] px-3 py-2 rounded-full w-fit mt-10">
                  VISIT WEBSITE
                </button>
              </div>

              <img
                className="w-[562px] mx-auto object-contain  my-20 "
                src="/assets/images/cebu/island3.png"
                alt=""
              />
            </div>
          </div>
        )}

        {activeButton === "Things to Do" && (
          <div className="max-w-7xl mx-auto mt-20 px-10">
            <h1 className="leading-none text-3xl mb-5 lg:mb-5 lg:text-[48px] text-[#234C81] font-bold text-center lg:text-left">
              Things to Do
            </h1>
            <p className="leading-loose text-justify">
              Mactan, Cebu, offers a diverse range of activities, making it a
              fantastic destination for all types of travelers, from beach
              lovers to history enthusiasts.
            </p>
            <div className="flex justify-center  mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* card1 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage1.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Beach Bliss
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Mactan is famous for its beautiful beaches. Spend your
                      days sunbathing, swimming, snorkeling, or simply relaxing
                      by the crystal-clear waters.
                    </p>
                  </div>
                </div>
                {/* card 2 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage2.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Water Sports
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Try your hand at various water sports like scuba diving,
                      jet-skiing, parasailing, and windsurfing to make the most
                      of the island's aquatic wonders.
                    </p>
                  </div>
                </div>

                {/* card 3 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage3.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Island Hopping
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Explore nearby islands and enjoy their unique charms,
                      including Gilutongan, Nalusuan, and Caohagan, often
                      visited on island-hopping tours.
                    </p>
                  </div>
                </div>

                {/* card 4 */}

                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage4.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cultural and Historical Sites
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Discover the region's rich history by visiting landmarks
                      like the Magellan Shrine and Fort San Pedro, which offer
                      insights into the island's colonial past.
                    </p>
                  </div>
                </div>

                {/* card 5 */}

                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage5.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Golf
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Golf enthusiasts can tee off at one of the island's
                      world-class golf courses, such as the Mactan Island Golf
                      Club.
                    </p>
                  </div>
                </div>

                {/* card 6 */}

                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage6.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Marine Sanctuaries
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Explore marine sanctuaries like the Nalusuan Island Marine
                      Sanctuary, ideal for snorkeling and observing marine life.
                    </p>
                  </div>
                </div>

                {/* card 7 */}

                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage7.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Local Cuisines
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Savor delicious Cebuano cuisine, particularly the famous
                      lechon (roast pig), and experience local flavors at
                      various restaurants and markets.
                    </p>
                  </div>
                </div>

                {/* card 8 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage8.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Spa and Wellness
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Pamper yourself at one of the island's luxury spas,
                      offering massages, wellness treatments, and relaxation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 9*/}
            <div className="flex justify-center mt-5 mb-20">
              <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/assets/images/cebu/cardimage9.png"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Shopping
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Shop for souvenirs, handcrafted items, and local products in
                    Mactan's markets and shops, including the renowned Mactan
                    Shrine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeButton === "Must-try Eats" && (
          <div className="max-w-7xl mx-auto mt-20 px-10">
            <h1 className="leading-none text-3xl mb-5 lg:mb-5 lg:text-[48px] text-[#234C81] font-bold text-center lg:text-left">
              Must-try Eats
            </h1>
            <p className="leading-loose text-justify">
              Exploring the local food scene in Mactan, Cebu, is not only a
              culinary adventure but also a way to connect with the rich culture
              and flavors of the Philippines.Mactan, Cebu, offers a delightful
              culinary scene, blending local flavors with international
              influences. Here are some must-try eats in the area:
            </p>
            <div className="flex justify-center  mt-20 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* card1 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardimage7.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Lechon
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Cebu is renowned for its crispy, flavorful roasted pig
                      known as "lechon." It's a must-try local delicacy, and
                      several places specialize in serving this delicious dish.
                    </p>
                  </div>
                </div>
                {/* card 2 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats2.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Danggit
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      These dried and salted fish are a popular breakfast item,
                      often enjoyed with garlic rice and eggs.
                    </p>
                  </div>
                </div>

                {/* card 3 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats3.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sutukil
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A local dining experience where you can choose your
                      seafood from a market, have it cooked in different ways
                      and enjoy a variety of flavors in one meal.
                    </p>
                  </div>
                </div>

                {/* card 4 */}

                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats4.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Chorizo de Cebu
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      These sausages are sweet, spicy, and savory, and they make
                      for a tasty snack or a great addition to your meal.
                    </p>
                  </div>
                </div>

                {/* card 5 */}

                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats5.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Puso
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Known as "hanging rice," it's a serving of rice wrapped in
                      a woven coconut leaf pouch. It's a traditional way to
                      enjoy rice and is often served with grilled dishes.
                    </p>
                  </div>
                </div>

                {/* card 6 */}

                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats6.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Lapu-Lapu
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Named after the local hero Lapu-Lapu, this dish features
                      grouper or other white fish, typically cooked in a savory
                      sauce with vegetables.
                    </p>
                  </div>
                </div>

                {/* card 7 */}

                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats7.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Balut
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      For the adventurous eater, try this Filipino street food –
                      a fertilized duck embryo, often enjoyed with a dash of
                      salt and vinegar.
                    </p>
                  </div>
                </div>

                {/* card 8 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats8.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Halo-Halo
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A colorful and delightful Filipino dessert that combines
                      crushed ice with a mix of sweet ingredients like fruit,
                      jellies, beans, and leche flan, topped with ice cream.
                    </p>
                  </div>
                </div>

                {/* card 9 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats9.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Fresh Fruit
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Cebu is famous for its sweet mangoes, and you can also
                      enjoy other tropical fruits like pomelo and pineapple.
                    </p>
                  </div>
                </div>

                {/* card 10 */}
                <div className="max-w-[505px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/assets/images/cebu/cardeats10.png"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cebuano Pastries
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Don't miss trying some local pastries like otap (sweet
                      puff pastry), rosquillos (ring-shaped cookies), and
                      masareal (a sweet treat made from ground peanuts).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCebu;
