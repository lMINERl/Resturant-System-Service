import React from 'react';
import CardResturant from '../../components/CardResturant/CardResturant';
import { connect } from 'react-redux';

class ResturantDetailsComponent extends React.Component {
  state = {
    res: null
  }
  componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.city) {
      if (!this.state.res || this.state.res.city !== this.state.match.params.city) {
       
          const res = this.props.restaurants.find(r => r.city === this.props.match.params.city);
          if (res) {
            this.setState({
              res: res
            })
          }else{
            this.props.history.push("/")
          }
        
      }
    }
  }
  render() {
    let res = null;
    if (this.state.res) {
      res = <CardResturant
        // setrating={(id, rating) => setRating(id, rating)}
        key={this.state.res.id}
        resturant={this.state.res} />
    }
    return (
      <div className="menu-card">
        <div className="container">
          <div className="row">
            {res}
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}
const ResturantDetails = connect(mapStateToProps)(ResturantDetailsComponent)
export { ResturantDetails };
