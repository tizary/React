import React from 'react';
import './Home.scss';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import cardsInfo from './cards.json';

class Home extends React.Component {
  render() {
    const cardElements = cardsInfo.map((item) => (
      <Card
        key={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
        date={item.date}
        price={item.price}
      />
    ));
    return (
      <div className="page-wrapper">
        <h2 className="page-title">Home</h2>
        <Search search={''} />
        <div className="cards-list">{cardElements}</div>
      </div>
    );
  }
}

export default Home;
