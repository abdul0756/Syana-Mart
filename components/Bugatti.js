import Product from "./Product"
const Bugatti = (props) => {
  const cars = [
    {name:"Bolide Track", img:"/BUGATTI/Bugatti Bolide track hypercar.jpg", price:"Rs. 720,000,000"},
    {name:"Centodieci", img:"/BUGATTI/Bugatti Centodieci.jpg", price:"Rs. 520,000,000"},
    {name:"Chiron Pur Sport", img:"/BUGATTI/Bugatti Chiron Pur Sport.jpg", price:"Rs. 980,000,000"},
    {name:"Chiron Sport", img:"/BUGATTI/Bugatti Chiron Sport.jpg", price:"Rs. 868,000,000"},
    {name:"Chiron Super Sport", img:"/BUGATTI/Bugatti Chiron Super Sport 300+.jpg", price:"Rs. 992,000,000"},
    {name:"Chiron", img:"/BUGATTI/Bugatti Chiron.jpg", price:"Rs. 840,000,000"},
    {name:"Divo", img:"/BUGATTI/Bugatti Divo.jpg", price:"Rs. 400,000,000"},
    {name:"EB110", img:"/BUGATTI/Bugatti EB110 classic 90s supercar.jpg", price:"Rs. 168,000,000"},
    {name:"LA Voiture Noire", img:"/BUGATTI/Bugatti La Voiture Noire.jpg", price:"Rs. 360,000,000"},
    {name:"Veryon 16.4", img:"/BUGATTI/Bugatti Veyron 16.4.jpg", price:"Rs. 476,000,000"},
    {name:"Veyron Grand Sport", img:"/BUGATTI/Bugatti Veyron Grand Sport Vitesse.jpg", price:"Rs. 616,000,000"},
    {name:"Veyron Super Sport", img:"/BUGATTI/Bugatti Veyron Super Sport.jpg", price:"Rs. 672,000,000"}
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

export default Bugatti