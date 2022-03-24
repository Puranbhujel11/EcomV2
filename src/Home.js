import React from 'react';
import heroImg from './ecomhero.jpeg'
const hero = {
    backgroundImage: `url(${heroImg})`,
}

function Home(){
    return (
        <main>
	 {/* Hero Section  */}
	<section id="hero">
		<div className="hero-content">
			<h1>Charlotte's Finest Soccer Experience</h1>
			<a href="product.html">SHOP NOW</a>
		</div>
	</section>

	 {/* Aboutus  */}
	<section>
		<h1 className="topic">Our Culture</h1>
		<div className="container">
			<div className="row">
				<div className="col">
					<p>
						At Soccer United you have the finest soccer specialists at your
						disposal when it comes to footwear, apparel and equipment so all
						you have to worry about is playing the best game of your life.
					</p>
					<br />
					<p>
						Soccer United's team Division can outfit your club or team from
						head to toe with the most current elite soccer brands. Buy soccer
						shoes, shin guards, and even club gear here! Best Buy Soccer
						carries exclusive products from Nike, adidas, Puma, Under Amour,
						and many more.
					</p>
					<br />
					<p>
						When you buy soccer shoes online at Best Buy Soccer, you receive
						the best all-around products and customer service. If you want to
						buy soccer equipment from our online store but can’t find what you
						are looking for, please contact us. We will have one of our Team
						Sales Representatives work with you today.
					</p>
				</div>
				<div className="col">
					<img className="gif" src="assets/img/humansoccer.webp" alt="" />
				</div>
			</div>
		</div>
	</section>
	
	<div className = "product-collection">
		<div className = "container">
			<div className = "product-collection-wrapper">
				 {/* product col left  */}
				<div className = "product-col-left flex">
					<div className = "product-col-content">
						<h2 className = "md-title">men's collection </h2>
						<p className = "text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequatur facilis eligendi quibusdam voluptatibus exercitationem autem voluptatum, beatae architecto odit, quisquam repellat. Deleniti, architecto ab.</p>
						<button type = "button" className = "btn-dark">Shop now</button>
					</div>
				</div>

				 {/* product col right  */}
				<div className = "product-col-right">
					<div className = "product-col-r-top flex">
						<div className = "product-col-content">
							<h2 className = "md-title">women's collection </h2>
							<p className = "text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequatur facilis eligendi quibusdam voluptatibus exercitationem autem voluptatum, beatae architecto odit, quisquam repellat. Deleniti, architecto ab.</p>
							<button type = "button" className = "btn-dark">Shop now</button>
						</div>
					</div>

					<div className = "product-col-r-bottom">
					    {/* left */}
						<div className = "flex">
							<div className = "product-col-content">
								<h2 className = "starRating"> </h2>
								<h2 className = "md-title"> </h2>
								<button type = "button" className = "btn-dark">Shop now</button>
							</div>
						</div>
						
                          {/* right */}
						<div className = "flex">
							<div className = "product-col-content">
								<h2 className = "starRating">summer sale </h2>
								<h2 className = "md-title">best sellers </h2>
								
								<button type = "button" className = "btn-dark">Shop now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    </main>
    )
}

export default Home;