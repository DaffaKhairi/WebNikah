import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Couple({ Id, Ref }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-full w-full md:py-60 py-24" id={Id} ref={Ref}>
      <div className="w-full justify-center m-auto flex flex-col font-serif">
        <div className="w-5/6 md:w-3/6 flex flex-col gap-3 justify-center text-center px-10 md:px-20 py-10 bg-clay-dark rounded-xl m-auto">
          <h1 className="md:text-2xl font-serif font-bold text-2xl">
            Assalamualaikum Wr. Wb
          </h1>
          <div>
            Dengan hormat, Kami dengan rasa hormat mengundang
            Bapak/Ibu/Saudara untuk hadir dalam Syukuran pernikahan kami:
          </div>
          <div>Acara akan dilaksanakan pada:</div>
          <div>Minggu, 27 Oktober 2024</div>
          <div>09.00-12.00</div>
        </div>
        <div className="flex flex-col justify-center gap-3 md:gap-6 md:flex-row my-3 w-5/6 m-auto">
          <div
            className="flex flex-col gap-3 justify-center text-center p-10 bg-clay-dark rounded-xl md:w-2/6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1 className="text-xl font-bold">Pengantin Pria</h1>
            <div>Deden Fadli</div>
            <div></div>
          </div>
          <div
            className="flex flex-col gap-3 justify-center text-center p-10 bg-clay-dark rounded-xl md:w-2/6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1 className="text-xl font-bold">Pengantin Wanita</h1>
            <div>Neng Desi Aggraeni</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couple;
