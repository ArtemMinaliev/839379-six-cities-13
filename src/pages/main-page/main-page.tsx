import {Helmet} from 'react-helmet-async';
import {Place} from '../../types/place';
import PlaceCardList from '../../components/place-card/place-card-list';
import { useState } from 'react';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import CityList from '../../components/cityList/city-list';
import { useAppSelector } from '../../hooks';

type MainPageProps = {
	places: Place[];
}

function MainPage({places}: MainPageProps): JSX.Element {
	const [activePlace, setActivePlace] = useState<Place | undefined>(undefined);
	const currentOffers = useAppSelector((state) => state.places);

	function handleMouseOver(id:string) {
		const currentPlace = places.find((place) => place.id === id);
		setActivePlace(currentPlace);
	}

	function handleMouseOut() {
		setActivePlace(undefined);
	}

	return (
		<div className="page page--gray page--main">
			<Helmet><title>6 cities. Main</title></Helmet>
			<Header/>
			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<CityList/>
				<div className="cities">
					<div className="cities__places-container container">
						<section className="cities__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">{currentOffers.length} places to stay in Amsterdam</b>
							<form className="places__sorting" action="#" method="get">
								<span className="places__sorting-caption">Sort by</span>{' '}
								<span className="places__sorting-type" tabIndex={0}>
                  Popular
									<svg className="places__sorting-arrow" width={7} height={4}>
										<use xlinkHref="#icon-arrow-select" />
									</svg>
								</span>
								<ul className="places__options places__options--custom places__options--opened">
									<li
										className="places__option places__option--active"
										tabIndex={0}
									>
                    Popular
									</li>
									<li className="places__option" tabIndex={0}>
                    Price: low to high
									</li>
									<li className="places__option" tabIndex={0}>
                    Price: high to low
									</li>
									<li className="places__option" tabIndex={0}>
                    Top rated first
									</li>
								</ul>
							</form>
							<PlaceCardList onPlace={handleMouseOver} outPlace={handleMouseOut}/>
						</section>
						<div className="cities__right-section">
							<section className="cities__map map">
								<Map activePlace={activePlace}/>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default MainPage;
