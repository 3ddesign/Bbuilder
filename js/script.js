const DATA = [{
        id: 1111,
        name: 'Name 1',
        description: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
        price: 121,
        image: 'https://im0-tub-ua.yandex.net/i?id=f5b645c68694c41a92466c1ae23dbf7a&n=33&h=215&w=287'
    },
    {
        id: 2222,
        name: 'Name 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 142,
        image: 'http://ta66.ru/uploadedFiles/images/red-number-2.jpg'
    },
    {
        id: 3333,
        name: 'Name 3',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 153,
        image: 'http://www.clipartkid.com/images/765/red-3d-numbers-set-psdgraphics-1iYLHA-clipart.jpg'
    },
    {
        id: 4444,
        name: 'Name 4',
        description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 161,
        image: 'http://cliparts.co/cliparts/rTn/r6G/rTnr6GaAc.jpg'
    }
];


const DataCard = React.createClass({
    render() {
      const {
        name,
        image,
        description,
        rating,
        price
      } = this.props;

        return (


<div className='card'>
<img className="image" src={image} />
<div className="body">
<h3  className="title">{name}</h3>
<p   className="description">{description}</p>
</div>
  <div className="book">
  <span className="price">{price}$</span>
  </div>
</div>

        );
    }
});

const DataApp = React.createClass({
    render() {
      const dataCards = DATA.map(data =>
        <DataCard
            key={data.id}
            id={data.id}
            name={data.name}
            image={data.image}
            description={data.description}
            image={data.image}
            rating={data.rating}
            price={data.price}
        />
    );

        return (
          <div className="app">
              <div className="header">Data Look</div>

              <div className="datas-list">
                  {dataCards}
              </div>
          </div>
        );
    }
});

ReactDOM.render(
   <DataApp /> ,
    document.getElementById('wrapper')
);
