import React from 'react';
import CardResturant from '../../components/CardResturant/CardResturant';
import { connect } from 'react-redux';

class ResturantDetailsComponent extends React.Component {
  state = {
    res: null
  }
  componentDidMount() {
    
    if (this.props.match.params.city) {
      if (!this.state.res || this.state.res.city !== this.state.match.params.city) {
        const res = this.props.restaurants.filter(r => r.city === this.props.match.params.city);
        if (res) {
          this.setState({
            res: res
          })
        } else {
          this.props.history.push("/")
        }

      }
    }
  }
  setRating(id, rating) {

    const index = this.state.res.findIndex((v) => {
      return v.id === id;
    });
    
    if (this.state.res[index].rating > -1 && this.state.res[index].rating < 5) {
      const nArray = [...this.state.res];
      nArray[index] = {
        ...this.state.res[index],
        rating: rating
      };

      this.setState({
        ...this.state,
        res: nArray
      });

    }
  }
  render() {
    let restaurants = null;
    if (this.state.res) {
      restaurants = this.state.res.map(r => {

        return (
          <CardResturant
            key={r.id}
            setrating={(id, rating) => this.setRating(id, rating)}
            resturant={r} />
        );
      })

    }
    return (
      <div className="menu-card">
        <div className="container">
          <div className="row">
            {restaurants}
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    restaurants: state.user.restaurants
  }
}
const ResturantDetails = connect(mapStateToProps)(ResturantDetailsComponent)
export { ResturantDetails };
