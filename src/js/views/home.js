import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import 'animate.css';


export const Home = () => (

	<div className="container-sm text-center mb-5">
		<div className="container loader mt-5 text-warning">
			<p> 
				If one is to understand the great mystery,
				<span>
					Welcome to the Dark Side
				</span>
				one must study all aspects.
			</p>
		</div>
		<div className="row mb-5 home_div">
			<div className="container-cards d-flex justify-content-center mb-5">
				<div className=" col-4 m-2">
					<div className="card bg-dark">
						<img
							src="https://media1.giphy.com/media/Rm3ZRGVUJrCDwK9KbU/200.gif"
							className="card-img-top rounded"
							alt="..."
						/>
						<div className=" card-body">
							<Link to="/people" className="btn btn-sm"><span>People</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 m-2">
					<div className="card bg-dark">
						<img
							src="https://64.media.tumblr.com/5e697a73a5a9fdcaadf742ea0a98d8be/tumblr_nsnbc3LZsM1uvhnh7o1_500.gifv"
							className="card-img-top rounded "
							alt="..."
						/>
						<div className="card-body">
							<Link to="/planets" className="btn btn-sm "><span>Planets</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 m-2">
					<div className="card bg-dark">
						<img
							src="https://i.pinimg.com/originals/f8/ad/54/f8ad54434a8cfb4ca4d7f88aaf921a20.gif"
							className="card-img-top rounded"
							alt="..."
						/>
						<div className="card-body">

							<Link to="/naves" className="btn btn-sm"><span>Naves</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
);