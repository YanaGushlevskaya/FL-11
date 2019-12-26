import React, { Component } from 'react';
import './News.scss';
import Button from '../Button/Button';

export default class News extends Component {
  state = {
    title: 'Bugs pack!',
    imgs: [{ char: '🐌' }, { char: '🦋' }, { char: '🐛' }],
    price: 1,
    isActive: false,
    id: 1
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.updateNewsPack(), 7000);
  }

  chooseNewsPackNumber() {
    const packItemsCount = this.props.list.length;
    const newsPackNumber = Math.floor(Math.random() * packItemsCount);
    return newsPackNumber;
  }

  updateNewsPack() {
    const newsPackNumber = this.chooseNewsPackNumber();
    const { isPurchased: isActive, id, title, price, emoji: imgs } = this.props.list[newsPackNumber];
    this.setState({
      title,
      imgs,
      price,
      isActive,
      id
    });
  }

  updatePackActivity = () => {
    this.timer = setTimeout(() => {
      this.setState(({ isActive }) => {
        isActive = this.props.list[this.state.id - 1].isPurchased;
        return {
          isActive
        };
      });
    }, 1);
  }

  render() {
    const { title, imgs, price, id, isActive } = this.state;
    
    const images = imgs
      .filter((img, i) => i <= 2)
      .map((img, i) => {
        return (
          <div key={i} className='news__img'>
            {img['char']}
          </div>
        );
      });

    return (
      <div className='news__banner'>
        <h2 className='news__title'>
          New! <span>{title}</span>
        </h2>
        <span className='news__subtitle'>Includes</span>
        <div className='news__imgs-wrapper'>{images}</div>
        <div className='btn-wrapper' onClick={this.updatePackActivity}>
          <Button price={price} type={'Get'} isActive={isActive} onPurchaseItem={() => this.props.onPurchaseItem(id)} />
        </div>
      </div>
    );
  }
}
