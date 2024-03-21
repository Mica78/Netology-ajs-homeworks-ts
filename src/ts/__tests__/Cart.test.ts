import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Gadget from '../domain/Gadjet';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('not add double item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items.length).toEqual(1)
})

test('add double Gadget', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Gadget(52, 'Laptop1', 20000));
  cart.add(new Gadget(52, 'Laptop1', 20000));
  cart.add(new Gadget(100, 'Laptop2', 20000));
  cart.add(new Gadget(100, 'Laptop2', 20000));
  expect(cart.items.length).toEqual(5)
})

test('delete  Gadget', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Gadget(52, 'Laptop1', 20000));
  cart.add(new Gadget(52, 'Laptop1', 20000));
  cart.add(new Gadget(100, 'Laptop2', 20000));
  cart.add(new Gadget(100, 'Laptop2', 20000));
  cart.deleteItem(100)
  expect(cart.items.length).toEqual(4)
})

test('new card lenght should be correct', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(22, "The Avengers", 0, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', ], 137,));
  expect(cart.items.length).toEqual(3)
})

test('new card amount should be correct sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(22, "The Avengers", 0, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', ], 137,));
  expect(cart.totalAmount).toEqual(2900)
})

test('new card amount should be correct discount sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(22, "The Avengers", 0, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', ], 137,));
  expect(cart.getDiscountedTotalAmount(10)).toEqual(2900 - 2900 * 0.90)
})

test('testing deleting item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(22, "The Avengers", 0, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', ], 137,));
  cart.deleteItem(1008);
  expect(cart.items.length).toEqual(2)
})

test('testing deleting non-existent item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(22, "The Avengers", 0, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', ], 137,));
  cart.deleteItem(10);
  expect(cart.items.length).toEqual(3)
})
