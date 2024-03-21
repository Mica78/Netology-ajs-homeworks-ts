import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  const movie = new Movie(
    22,
    "The Avengers",
    0,
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', ],
    137,
    );
  cart.add(movie);
  expect(cart.items.includes(movie)).toEqual(true);
});
