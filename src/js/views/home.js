import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (

	<div className="text-center mt-5">
		<div className="container">
			<h1 className="title">Welcome To The Dark Side</h1>
			
			<div className="row">
				<div className="containerCards d-flex justify-content-center m-1">
					<div className=" col-4">
						<div className="card bg-dark bg-opacity-10">
							<img
								src="https://media1.giphy.com/media/Rm3ZRGVUJrCDwK9KbU/200.gif"
								className="card-img-top rounded peop"
								alt="..."
							/>
							<div className="card-body">
								<Link to="/characters" className="btn btn-outline-warning">
									Go to People!
								</Link>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card bg-dark bg-opacity-10">
							<img
								src="https://64.media.tumblr.com/5e697a73a5a9fdcaadf742ea0a98d8be/tumblr_nsnbc3LZsM1uvhnh7o1_500.gifv"
								className="card-img-top rounded "
								alt="..."
							/>
							<div className="card-body">

								<Link to="/planets" className="btn btn-outline-warning">
									Go to Planets!
								</Link>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card bg-dark bg-opacity-10">
							<img
								src="https://i.pinimg.com/originals/f8/ad/54/f8ad54434a8cfb4ca4d7f88aaf921a20.gif"
								className="card-img-top rounded "
								alt="..."
							/>
							<div className="card-body ">

								<Link to="/naves" className="btn btn-outline-warning">
									Go to Starships!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);