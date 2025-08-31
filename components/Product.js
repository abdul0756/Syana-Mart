import ThreeDCard from "./ThreeDCard"
const Product = (props) => {
    return (
        <>
            <div className="flex flex-col items-center h-max w-76 rounded-3xl bg-slate-200 pb-6">
                <ThreeDCard height="h-auto"
                    width="w-65"
                    bgColor="bg-green-700"
                    heading={props.heading}
                    imgSrc={props.imgSrc}
                />
                <div className="flex justify-between items-center w-65 -space-y-2 -mt-12">
                    <span className="text-2xl text-slate-600 font-semibold roboto">{props.price}</span>
                    <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-bold py-1.5 px-4 rounded-3xl mt-2 z-10 pointer-events-auto" onClick={props.buy}>Buy</button>
                </div>
            </div>
        </>
    )
}

export default Product