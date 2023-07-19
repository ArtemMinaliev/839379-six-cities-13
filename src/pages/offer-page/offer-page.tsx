import {Helmet} from 'react-helmet-async';
import cn from 'classnames';
import CommentForm from '../../components/form/comment-form';
import { Offer } from '../../types/offer';
import { Comments } from '../../types/comments';
import Header from '../../components/header/header';

type OfferPageProps = {
	offer: Offer;
	comments: Comments;
}

function OfferPage({offer, comments}: OfferPageProps): JSX.Element {
	const {title, type, price, isFavorite, isPremium, rating, description, bedrooms, goods, host, images, maxAdults} = offer;

	return (
		<div className="page">
			<Helmet><title>6 cities. Offer</title></Helmet>
			<Header/>
			<main className="page__main page__main--offer">
				<section className="offer">
					<div className="offer__gallery-container container">
						<div className="offer__gallery">
							{images.map((image, index) => {
								const keyValue = index;
								return (
									<div key={keyValue} className="offer__image-wrapper">
										<img
											className="offer__image"
											src={image}
											alt="Photo studio"
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div className="offer__container container">
						<div className="offer__wrapper">
							{isPremium && <div className="offer__mark"><span>Premium</span></div>}
							<div className="offer__name-wrapper">
								<h1 className="offer__name">{title}</h1>
								<button
									className={cn(
										'offer__bookmark-button button',
										{'offer__bookmark-button--active': isFavorite}
									)}
									type="button"
								>
									<svg className="offer__bookmark-icon" width={31} height={33}>
										<use xlinkHref="#icon-bookmark" />
									</svg>
									<span className="visually-hidden">To bookmarks</span>
								</button>
							</div>
							<div className="offer__rating rating">
								<div className="offer__stars rating__stars">
									<span style={{width: `${rating * 20}%`}} />
									<span className="visually-hidden">Rating</span>
								</div>
								<span className="offer__rating-value rating__value">{rating}</span>
							</div>
							<ul className="offer__features">
								<li className="offer__feature offer__feature--entire">{type}</li>
								<li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
								<li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
								</li>
							</ul>
							<div className="offer__price">
								<b className="offer__price-value">€{price}</b>
								<span className="offer__price-text">&nbsp;night</span>
							</div>
							<div className="offer__inside">
								<h2 className="offer__inside-title">What&#39;s inside</h2>
								<ul className="offer__inside-list">
									{goods.map((good, index)=> {
										const keyValue = index;
										return (
											<li key={keyValue} className="offer__inside-item">{good}</li>
										);
									})}
								</ul>
							</div>
							<div className="offer__host">
								<h2 className="offer__host-title">Meet the host</h2>
								<div className="offer__host-user user">
									<div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
										<img
											className="offer__avatar user__avatar"
											src={host.avatarUrl}
											width={74}
											height={74}
											alt={host.name}
										/>
									</div>
									<span className="offer__user-name">{host.name}</span>
									{host.isPro && <span className="offer__user-status">Pro</span>}
								</div>
								<div className="offer__description">
									<p className="offer__text">{description}</p>
								</div>
							</div>
							<section className="offer__reviews reviews">
								<h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{comments.length}</span>
								</h2>
								<ul className="reviews__list">
									{comments.map((comment) => (
										<li key={comment.id} className="reviews__item">
											<div className="reviews__user user">
												<div className="reviews__avatar-wrapper user__avatar-wrapper">
													<img
														className="reviews__avatar user__avatar"
														src={comment.user.avatarUrl}
														width={54}
														height={54}
														alt={comment.user.name}
													/>
												</div>
												<span className="reviews__user-name">{comment.user.name}</span>
											</div>
											<div className="reviews__info">
												<div className="reviews__rating rating">
													<div className="reviews__stars rating__stars">
														<span style={{ width: `${comment.rating * 20}%` }} />
														<span className="visually-hidden">Rating</span>
													</div>
												</div>
												<p className="reviews__text">{comment.comment}</p>
												<time className="reviews__time" dateTime={comment.date}>
													{comment.date}
												</time>
											</div>
										</li>
									))}
								</ul>
								<CommentForm/>
							</section>
						</div>
					</div>
					<section className="offer__map map" />
				</section>
				<div className="container">
					<section className="near-places places">
						<h2 className="near-places__title">
              Other places in the neighbourhood
						</h2>
						<div className="near-places__list places__list">
							<article className="near-places__card place-card">
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											className="place-card__image"
											src="img/room.jpg"
											width={260}
											height={200}
											alt="Place image"
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€80</b>
											<span className="place-card__price-text">/&nbsp;night</span>
										</div>
										<button
											className="place-card__bookmark-button place-card__bookmark-button--active button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												width={18}
												height={19}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">In bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '80%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Wood and stone place</a>
									</h2>
									<p className="place-card__type">Private room</p>
								</div>
							</article>
							<article className="near-places__card place-card">
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											className="place-card__image"
											src="img/apartment-02.jpg"
											width={260}
											height={200}
											alt="Place image"
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€132</b>
											<span className="place-card__price-text">/&nbsp;night</span>
										</div>
										<button
											className="place-card__bookmark-button button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												width={18}
												height={19}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">To bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '80%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Canal View Prinsengracht</a>
									</h2>
									<p className="place-card__type">Apartment</p>
								</div>
							</article>
							<article className="near-places__card place-card">
								<div className="place-card__mark">
									<span>Premium</span>
								</div>
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											className="place-card__image"
											src="img/apartment-03.jpg"
											width={260}
											height={200}
											alt="Place image"
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€180</b>
											<span className="place-card__price-text">/&nbsp;night</span>
										</div>
										<button
											className="place-card__bookmark-button button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												width={18}
												height={19}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">To bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '100%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Nice, cozy, warm big bed apartment</a>
									</h2>
									<p className="place-card__type">Apartment</p>
								</div>
							</article>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
export default OfferPage;
