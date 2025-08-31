import Product from "./Product"
const BMW = (props) => {
  const cars = [
    { name: "M Coupe", img: "/BMW/BMW 1 Series M Coupé (2011 Limited Sports Model).jpeg", price: "Rs. 14,000,000" },
    { name: "Alpina B7", img: "/BMW/BMW Alpina B7 (Luxury + High Performance).jpeg", price: "Rs. 39,200,000" },
    { name: "I8", img: "/BMW/BMW i8 (Hybrid Sports Car).jpeg", price: "Rs. 42,000,000" },
    { name: "M2", img: "/BMW/M2 Competition.jpeg", price: "Rs. 16,800,000" },
    { name: "M3", img: "/BMW/BMW M3 Competition.jpeg", price: "Rs. 21,000,000" },
    { name: "M4", img: "/BMW/BMW M4 Competition  M4 CSL.jpeg", price: "Rs. 22,400,000" },
    { name: "M5", img: "/BMW/BMW M5 Competition.jpeg", price: "Rs. 29,400,000" },
    { name: "M6", img: "/BMW/BMW M6 (Gran Coupé  Convertible).jpeg", price: "Rs. 32,200,000" },
    { name: "M8", img: "/BMW/BMW M8 Competition (Coupé  Convertible  Gran Coupé).jpeg", price: "Rs. 37,800,000" },
    { name: "M235i / M240i", img: "/BMW/BMW M235i  M240i (Sporty 2-Series).jpeg", price: "Rs. 14,000,000" },
    { name: "Z4 Roadster", img: "/BMW/BMW Z4 Roadster (M40i trim sporty hai).jpeg", price: "Rs. 19,600,000" },
    { name: "850i", img: "/BMW/BMW_850i_resized_640x640.jpg", price: "Rs. 33,600,000" }
  ]

  return (
    <>
      <div className="flex  items-center justify-center flex-wrap gap-5 mt-5 pb-5">
        {cars.map((car, index) => (
          <Product key={index} heading={car.name} imgSrc={car.img} price={car.price} buy={props.buy} />
        ))}
      </div>
    </>
  )
}

export default BMW