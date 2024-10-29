import Image from "next/image";
import img1 from "/public/images/Cambodia.jpg";
import img2 from "/public/images/Indonesia.jpg";
import img3 from "/public/images/Malaysia.jpg";
import img4 from "/public/images/Thailand.jpg";
import img5 from "/public/images/Vietnam.jpg";
import img6 from "/public/images/hero-bangladesh.jpg";
import img7 from "/public/images/khulna-sidebar.jpg";
const img = [img1, img2, img3, img4, img5, img6, img7];
const Gallery = () => {
  return (
    <div className="px-12 py-24 min-h-screen text-center">
      <h1 className="text-3xl mb-12">Gallery Page</h1>
      {img.map((imgSrc, index) => (
        <div key={index} className="flex justify-centerw-[675px] h-[490px]">
          <Image
            className="mx-auto my-2 rounded-md shadow-md"
            placeholder="blur"
            width={675}
            height={490}
            layout="responsive"
            src={imgSrc}
            alt="Country pic"
          />
        </div>
      ))}
      {/* <Image className="mx-auto" src={img1} alt="Combodia pic"/> */}
    </div>
  );
};

export default Gallery;
