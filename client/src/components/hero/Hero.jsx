import "./hero.css"


export default function Hero() {
    return (
        <div className="hero_outer">
            <HeroSection/>
            <BestSellingPlants/>
        </div>
      )
}


function HeroSection() {
  return (
    <section className="hero maxContainer">
        <div className="hero_left">
            <h1>Buy Your Favorite Plants</h1>
            <div>
                <span><b>60+</b> Plant Species</span>
                <span><b>200+</b> Customers</span>
            </div>
            <form action="/">
                <input type="search" name="" id="" />
                <button><i className="fa-solid fa-search"></i></button>
            </form>
        </div>
        <div className="hero_right">
            <img src="./hero.jpg" alt=""/>
        </div>
    </section>
  )
}

function BestSellingPlants() {
    const plantData = [
        {
            plantName:"Emma Bauso",
            plantImgUrl:"./emma-bauso.jpg",
            plantPrice:300
        },
        {
            plantName:"Lynda Sanchez",
            plantImgUrl:"./lynda-sanchez.jpg",
            plantPrice:300
        },
        {
            plantName:"Lynda Sanchez",
            plantImgUrl:"./lynda-sanchez.jpg",
            plantPrice:300
        },
    ]
    return (
            <div className="best_selling_plants maxContainer">
                <div className="best_selling_plants_item context">
                    <h6>Best Selling Plants</h6>
                    <span>Easiest way to healthy life by buying your favorite plants</span>
                    <button>See more <i className="fa-solid fa-arrow-right-long"></i></button>
                </div>
                {plantData.map((e,i)=>
                        <BestSellingPlantsItem {...e} key={i} />
                )}
            </div>
    );
}
function BestSellingPlantsItem(prop) {
    const {plantImgUrl,plantName,plantPrice}=prop
    return (
        <div className="best_selling_plants_item">
            <img src={plantImgUrl} alt="" loading="lazy" />
            <div>
                <h6>{plantName}</h6>
                <span><b>Rs.</b> {plantPrice}</span>
            </div>
        </div>
    );
}
