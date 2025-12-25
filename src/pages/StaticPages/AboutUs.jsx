import { Link } from "react-router-dom";
import banner from "../../assets/Static/about-banner.jpeg";
import img from "../../assets/Static/img-about2.png";


const AboutUs = () => {
  return (
    <div>
      <div
        className="hero h-60"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content justify-start w-full">
          <div className=" text-white text-left pl-16">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">Get the latest news, updates and tips</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 space-y-3 max-w-2xl mx-auto">
        <h1 className="text-2xl text-[#66789C] font-semibold">OUR COMPANY</h1>
        <h2 className="text-4xl font-bold">About Our Company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante
          viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a
          blandit tempor, velit magna pellentesque risus, at congue tellus dui
          quis nisl.
        </p>
      </div>
      {/* What we do section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-14">
          <img src={img} className="w-full rounded-xl object-cover" />
          <div>
            <h1 className="text-3xl text-[#05264E] mb-6 font-bold">What we can do?</h1>
            <p className="py-6">
              Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat
              ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh
              vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam
              nec tellus a odio tincidunt auctora ornare odio. Aenean
              sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus
              a odio tincidunt auctora ornare odio. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit
              nostra, per inceptos himenaeos.
            </p>
            <button className="btn  text-lg text-white bg-[#05264E] hover:bg-[#007aff]">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
