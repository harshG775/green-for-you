import "./hero.css"

export default function Hero() {
    return (
        <div className="hero_outer">
            <section className="hero maxContainer">
                <div className="hero_left">
                    <h1>Buy Your Favorite Plants</h1>
                    <dir>
                        <span>60+ Plant Species</span>
                        <span>200+ Customers</span>
                    </dir>
                    <form action="/">
                        <input type="search" name="" id="" />
                        <button><i className="fa-solid fa-search"></i></button>
                    </form>
                </div>
                <div className="hero_right">
                    <img src="./hero.jpg" alt=""/>
                </div>
            </section>
        </div>
      )
}
