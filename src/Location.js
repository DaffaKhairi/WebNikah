function Location({ Id }) {
  return (
    <div className="h-full w-full py-32 wd:py-56 bg-dark-green" id={Id}>
      <div className="text-center">
      <p className="font-serif font-bold text-dark-brown text-4xl py-4">Wedding Location</p>
        <div className="bg-clay-dark w-5/6 md:w-3/6 rounded-xl m-auto flex flex-col gap-3 justify-center text-center p-1">
          {/* Google Maps Inframe Show Location*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6978751211336!2d107.75512997488535!3d-7.044746369027887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c12ee55cb359%3A0xe1d3dd80c4fa3ba8!2sKafe%20WJS%20(waroengjapsun)!5e0!3m2!1sid!2sid!4v1729008893734!5m2!1sid!2sid"
            style={{border : 0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="justify-center w-full h-96 rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
