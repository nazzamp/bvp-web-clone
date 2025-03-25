"use client";

import Image from "next/image";

const HomeMap = () => {
  return (
    <div className="mt-48 w-full rounded-3xl flex flex-col items-center mb-32">
      <div className="flex items-center gap-1 mb-2 justify-center">
        <Image src={"/svgs/map.svg"} alt="idea icon" width={24} height={24} />
        <span className="uppercase text-lg font-bold text-[#3D779F]">
          Bản đồ
        </span>
      </div>
      <h2 className="uppercase text-center font-bold text-2xl bg-gradient-to-l from-[#1879BC] to-[#0D7E8D] bg-clip-text text-transparent max-w-[560px]">
        Vị trí bệnh viện
      </h2>
      <div
        className="mt-8"
        style={{
          overflow: "hidden",
          resize: "none",
          maxWidth: "100%",
          width: "1000px",
          height: "400px",
          borderRadius: "16px",
        }}
      >
        <div
          id="gmap-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%", border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=benh+vien+phoi+quang+ninh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            title="Google Map"
          ></iframe>
        </div>
        <a
          className="code-for-google-map"
          href="https://www.bootstrapskins.com/themes"
          id="grab-maps-authorization"
        >
          premium bootstrap themes
        </a>
        <style>
          {`
                    #gmap-canvas img {
                        max-width: none !important;
                        background: none !important;
                        font-size: inherit;
                        font-weight: inherit;
                    }
                `}
        </style>
      </div>
    </div>
  );
};

export default HomeMap;
