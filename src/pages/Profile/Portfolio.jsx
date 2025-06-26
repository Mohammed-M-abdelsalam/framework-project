import Star from "../../components/Star/Star"
import img1 from "../../assets/images/poert1.png"
import img2 from "../../assets/images/port2.png"
import img3 from "../../assets/images/port3.png"

function Portfolio(){
    return(
        <section className="container-style text-center py-6">
            <h1 className="text-5xl font-bold text-diffrent">Portfolio</h1>
            <Star color='black' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <div className="relative group">
                    <img className="w-full" src={img1} alt="" />
                    <div className="absolute opacity-0 group-hover:opacity-50 transition-opacity duration-500 top-0 w-full h-full bg-main z-5"></div>
                </div>
                <div className="relative group">
                    <img className="w-full" src={img2} alt="" />
                    <div className="absolute opacity-0 group-hover:opacity-50 transition-opacity duration-500 top-0 w-full h-full bg-main z-5"></div>
                </div>
                <div className="relative group">
                    <img className="w-full" src={img3} alt="" />
                    <div className="absolute opacity-0 group-hover:opacity-50 transition-opacity duration-500 top-0 w-full h-full bg-main z-5"></div>
                </div>
                <div className="relative group">
                    <img className="w-full" src={img1} alt="" />
                    <div className="absolute opacity-0 group-hover:opacity-50 transition-opacity duration-500 top-0 w-full h-full bg-main z-5"></div>
                </div>
                <div className="relative group">
                    <img className="w-full" src={img2} alt="" />
                    <div className="absolute opacity-0 group-hover:opacity-50 transition-opacity duration-500 top-0 w-full h-full bg-main z-5"></div>
                </div>
                <div className="relative group">
                    <img className="w-full" src={img3} alt="" />
                    <div className="absolute opacity-0 group-hover:opacity-50 transition-opacity duration-500 top-0 w-full h-full bg-main z-5"></div>
                </div>
            </div>
        </section>

    )
}

export default Portfolio