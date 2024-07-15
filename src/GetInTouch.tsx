import maps from "./assets/maps.png";
import GetInTouchForm from "./components/GetInTouchForm";

export default function GetInTouch() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black py-2 gap-2">
      <div className="flex m-4 w-full h-full">
        <a
          href="https://www.google.com/maps/place/To-Let+Globe/@26.8465566,80.9797793,15z/data=!4m6!3m5!1s0x399bfd77577ba78f:0xd2d6f22d1b246815!8m2!3d26.8465566!4d80.9797793!16s%2Fg%2F11vhrqqb45?entry=ttu"
          className="w-3/5 block"
        >
          <div className="relative overflow-hidden h-full w-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${maps})`,
              }}
            ></div>
          </div>
        </a>
        <div className="w-2/5 flex flex-col justify-center items-center p-8 bg-black">
          <p className="text-4xl font-bold mb-4 text-customTeal">
            GET IN TOUCH
          </p>
          <p className="text-xl mb-2 text-white">Have some questions?</p>
          <p className="text-xl mb-8 text-white">
            Feel free to ask them anytime
          </p>
          <GetInTouchForm/>
        </div>
      </div>
    </div>
  );
}
