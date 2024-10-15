const { useState } = React;

const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: './images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: './images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: './images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: './images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: './images/grey-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: './images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: './images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: './images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: './images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

const TshirtStore = () => {
  const [stockData, setStockData] = useState(tshirts);

  const handleBuy = (index) => {
    const newStockData = [...stockData];
    const selectedTshirt = newStockData[index];

    if (selectedTshirt.stock > 0 && selectedTshirt.quantity <= selectedTshirt.stock) {
      selectedTshirt.stock -= selectedTshirt.quantity;
      setStockData(newStockData);
    }
  };

  return (
    <div>
      <h1>T-Shirts Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {stockData.map((tshirt, index) => (
          <div key={index} style={{ border: '1px solid #000', margin: '10px', padding: '10px', width: '200px' }}>
            <h2>{tshirt.title}</h2>
            <img src={tshirt.image} alt={tshirt.title} style={{ width: '100%' }} />
            <p>Price: ${tshirt.price.toFixed(2)}</p>
            <p>Stock: {tshirt.stock > 0 ? tshirt.stock : 'Out of Stock'}</p>
            {tshirt.stock > 0 ? (
              <div>
                <select
                  value={tshirt.quantity}
                  onChange={(e) => {
                    const newStockData = [...stockData];
                    newStockData[index].quantity = parseInt(e.target.value);
                    setStockData(newStockData);
                  }}
                >
                  {[...Array(tshirt.stock).keys()].map((num) => (
                    <option key={num} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleBuy(index)}>Buy</button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<TshirtStore />, document.getElementById('root'));