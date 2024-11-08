import checkUrl from "@/assets/check.svg?url"; // Import as URL
import cam121Url from "@/assets/cam121.png?url";
import rapperUrl from "@/assets/rapper.png?url";
import audienceUrl from "@/assets/audience.jpg?url"; // Correct audience path

import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from './design/Services';

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Maximize Your Reach with Tailored, Professional Content"
          text="MoreSoul unlocks the potential of yourself"
        />

        <div className="relative">
          <div
            className="relative z-1 flex items-center
                h-[39rem] mb-5 p-8 border border-n-1/10
                rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div
              className="absolute top-0 left-0 w-full
                    h-full pointer-events-none md:w-3/5
                    xl:w-auto"
            >
              <img
                className="w-full h-full opacity-30 object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
                src={cam121Url} // Use imported URL here
              />
            </div>

            <div
              className="relative z-1 max-w-[17rem] 
                ml-auto"
            >
              <h4 className="h4 mb-4">More Soul, More Depth</h4>
              <p className="body-2 mb-[3rem] text-n-3"> Unlocking the potential of 'YOU!'</p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 
                          border-t border-n-6"
                  >
                    <img width={24} src={checkUrl} height={24} alt="Check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="relative z-1 grid gap-5
          lg:grid-cols-2"
        >
          <div
            className="relative min-h-[39rem] 
            border border-n-1/10 rounded-3xl 
            overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src={rapperUrl} // Use imported URL here
                className="h-full w-full object-cover"
                width={630}
                height={750}
                alt="Robot"
              />
            </div>
            <div
              className="absolute inset-0 flex 
                flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15"
            >
              <h4 className="h4 mb-3">Photo editing</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Enhancing your photos using high-quality photo editing tools
              </p>
            </div>

            <PhotoChatMessage />
          </div>

          <div
            className="p-4 bg-n-7 rounded-3xl 
              overflow-hidden lg:min-[46rem]"
          >
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4"> Video editing</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                We craft seamless narratives that engage your audience from beginning to end.
              </p>

              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map((item, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex 
                              items-center justify-center ${
                                index === 2
                                  ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                                  : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                              }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                          : ""
                      }
                    >
                      <img src={item} width={24} height={24} alt={item} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]"
            >
              <img
                src={audienceUrl} // Use imported URL here
                className="w-full h-full opacity-50 object-cover"
                width={530}
                height={400}
                alt="Scary robot"
              />

              <VideoChatMessage />
              <VideoBar />
            </div>
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};

export default Services;
