import Product from "./Product"
const Lamborghini = (props) => {
  const cars = [
    { name: "Aventador", img: "/LAMORGINI/Lamborghini Aventador SVJ, S, Ultimae.jpg", price: "Rs. 140,000,000" },
    { name: "Centenario", img: "/LAMORGINI/Lamborghini Centenario.jpg", price: "Rs. 560,000,000" },
    { name: "Countach", img: "/LAMORGINI/Lamborghini Countach (new LPI 800-4 + classic model).jpg", price: "Rs. 112,000,000" },
    { name: "Diablo", img: "/LAMORGINI/Lamborghini Diablo (SV, VT, GTR).jpg", price: "Rs. 70,000,000" },
    { name: "Gallardo", img: "/LAMORGINI/Lamborghini Gallardo Superleggera, Spyder.jpg", price: "Rs. 56,000,000" },
    { name: "Huracan", img: "/LAMORGINI/Lamborghini Huracán EVO, STO, Tecnica, Performante.jpg", price: "Rs. 70,000,000" },
    { name: "Miura Classic", img: "/LAMORGINI/Lamborghini Miura classic sports legend.jpg", price: "Rs. 840,000,000" },
    { name: "Murcielago", img: "/LAMORGINI/Lamborghini Murciélago LP640, SV.jpg", price: "Rs. 84,000,000" },
    { name: "Reventon", img: "/LAMORGINI/Lamborghini Reventón.jpg", price: "Rs. 420,000,000" },
    { name: "Sesto Elemento", img: "/LAMORGINI/Lamborghini Sesto Elemento.jpg", price: "Rs. 420,000,000" },
    { name: "Sian FKP 37", img: "/LAMORGINI/Lamborghini Sián FKP 37.jpg", price: "Rs. 980,000,000" },
    { name: "Veneno", img: "/LAMORGINI/Lamborghini Veneno.jpg", price: "Rs. 999,000,000" },
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

export default Lamborghini