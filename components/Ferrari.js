import Product from "./Product"
const Ferrari = (props) => {
  const cars = [
    { name: "GTS Hybrid", img: "/FERRARI/Ferrari 296 GTB GTS Hybrid sports.jpg", price: "Rs. 89,600,000" },
    { name: "Italia Speciale", img: "/FERRARI/Ferrari 458 Italia  Speciale .jpg", price: "Rs. 67,200,000" },
    { name: "GTB Pista", img: "/FERRARI/Ferrari 488 GTB Pista.jpg", price: "Rs. 78,400,000" },
    { name: "812 Competizione", img: "/FERRARI/Ferrari 812 Superfast  Competizione.jpg", price: "Rs. 93,800,000" },
    { name: "California T", img: "/FERRARI/Ferrari California T  Portofino M.jpg", price: "Rs. 56,000,000" },
    { name: "Enzo Ferrari", img: "/FERRARI/Ferrari Enzo Ferrari.jpg", price: "Rs. 182,000,000" },
    { name: "F8 Tributo", img: "/FERRARI/Ferrari F8 Tributo  Spider.jpg", price: "Rs. 84,000,000" },
    { name: "LaFerrari", img: "/FERRARI/Ferrari LaFerrari.jpg", price: "Rs. 420,000,000" },
    { name: "Monza SP1 SP2", img: "/FERRARI/Ferrari Monza SP1 SP2 .jpg", price: "Rs. 504,000,000" },
    { name: "Roma Spider", img: "/FERRARI/Ferrari Roma  Roma Spider.jpg", price: "Rs. 61,600,000" },
    { name: "SF90 Stradale", img: "/FERRARI/Ferrari SF90 Stradale  Spider.jpg", price: "Rs. 140,000,000" },
    { name: "Testtarossa", img: "/FERRARI/Ferrari Testarossa .jpg", price: "Rs. 33,600,000" },
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

export default Ferrari