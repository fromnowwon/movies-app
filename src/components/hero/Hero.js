import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ movies }) => {
	return (
		<div className="movie-carousel-container">
			<Carousel>
				{
					movies && movies.map((movie) => {
						return (
							<div key={movie.imdbId}>
								<Paper>
									<div className="movie-card-container">
										<div className="movie-card">
											<div className="movie-detail">
												<div className="movie-poster">
													<img src={movie.poster} alt={movie.title} />
												</div>
												<div className="movie-title">
													<h4>{movie.title}</h4>
												</div>
											</div>
										</div>
									</div>
								</Paper>
							</div>
						)
					})
				}
			</Carousel>
		</div>
	)
}

export default Hero