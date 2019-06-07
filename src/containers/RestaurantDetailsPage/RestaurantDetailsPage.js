import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardFood from '../../components/CardFood/CardFood';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../store/actions/cartActions';
import {addComment} from '../../store/actions/userActions';
import Comment from '../../components/comments/comments';
import OrderBill from '../../components/OrderBill/OrderBill';
class DetailsPage extends Component {
    state = {
        res: null
    }
 
    handleSubmit =(e) =>{
        e.preventDefault();
        const {id}=this.state.res;
        if(this.refs.author.value !== "" &&isNaN(this.refs.author.value) && this.refs.comment.value !=="" &&isNaN(this.refs.author.value) ){

            const author =this.refs.author.value;
            const comment = this.refs.comment.value;
            const rating = this.refs.rating.value;
            this.props.addComment(id,comment,rating,author);
        }else{
            alert("please enter your name and comment")
        }
    }
    setAmount = (id, amount) => {
        if (amount < 10 && amount > -1) {

            const index = this.state.menus.findIndex((v) => {
                return v.id === id;
            });
            const nArray = [...this.state.menus];
            nArray[index] = {
                ...this.state.menus[index],
                amount: amount
            };
            this.setState({
                ...this.state,
                menu: nArray
            });

        }
    }

    setRating = (id, rating) => {

        const index = this.state.menus.findIndex((v) => {
            return v.id === id;
        });

        if (this.state.menus[index].rating > -1 && this.state.menus[index].rating < 5) {
            const nArray = [...this.state.menus];
            nArray[index] = {
                ...this.state.menus[index],
                rating: rating
            };
            this.setState({
                ...this.state,
                menu: nArray
            });

        }
    }
    setSize = (id, size) => {
        const index = this.state.menus.findIndex((v) => {
            return v.id === id;
        });
        const nArray = [...this.state.menus];
        nArray[index] = {
            ...this.state.menus[index],
            size: size
        };
        this.setState({
            ...this.state,
            menu: nArray
        });
    }
    dispatchAddToCart(cardItem) {
        this.props.addToCart(cardItem)
    }
    componentDidMount() {

        if (this.props.match.params.id) {

            if (!this.state.res || this.state.res.id !== this.state.match.params.id) {
                const res = this.props.restaurants.find(r => r.id === this.props.match.params.id);
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
    render() {
        let Restaurant = this.state.res ? (
            <section className="Restaurant" style={{ "paddingTop": "100px" }}>
                <div className="container">
                    <div className="Restaurant__photo d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h3>{this.state.res.name}</h3>
                            <span className="edit-icon"><i className="fa fa-pencil"></i></span>
                            <span className="love-icon"><i className="fa fa-heart"></i></span>
                            <div className="star-rating">
                                <ul className="list-inline gold-star">
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-star-o"></i>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="Restaurant__details p-5">


                        <p>
                            {this.state.res.description}
                        </p>
                    </div>

                    <div className="Restaurant__categories">
                        <div className="form-group">
                            <input type="text" placeholder="Please enter the categories" name="categorie"
                                className="form-control w-25 p-4 d-inline-block" />
                            <button className="button button--primary button--small-btn">
                                <i className="fa fa-plus"></i> Add
                    </button>
                        </div>

                        <div className="tags w-50">
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                            <span className="tags__item">aaa</span>
                        </div>

                    </div>
                </div>

                <div className="Restaurant">
                    <div className="Restaurant__menu">
                        {/* <!--start filter-nav--> */}
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-12">
                                    <h2 className="listing-header">{this.state.res.name} Menu
                                <NavLink to="/foodform"
                                            className="badge badge-warning listing-header__btn btn--right text-white p-3">
                                            <i className="fa fa-plus-square"></i>
                                            Add Meal</NavLink></h2>
                                    <nav
                                        className="navbar navbar-expand-lg navbar-light bg-light justify-content-between py-3 mt-4 align-items-center">
                                        <form className="form-inline ">
                                            <input className="filter-search form-control p-4 mr-sm-2" type="search"
                                                placeholder="Search" />
                                            <button className="button button-filterNav" type="submit">
                                                Search
                                    </button>
                                        </form>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <ul className="navbar-nav ">
                                            <li className="nav-item dropdown mx-4">
                                                <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Category
                                        </NavLink>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <NavLink className="dropdown-item">Pizza</NavLink>
                                                    <NavLink className="dropdown-item">Sea Food</NavLink>
                                                    <NavLink className="dropdown-item">Drinks</NavLink>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown mx-4">
                                                <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Rating
                                        </NavLink>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <NavLink className="dropdown-item">Action</NavLink>
                                                    <NavLink className="dropdown-item">Another action</NavLink>
                                                    <div className="dropdown-divider"></div>
                                                    <NavLink className="dropdown-item">Something else here</NavLink>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown mx-4">
                                                <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Price
                                        </NavLink>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <NavLink className="dropdown-item">Action</NavLink>
                                                    <NavLink className="dropdown-item">Another action</NavLink>
                                                    <div className="dropdown-divider"></div>
                                                    <NavLink className="dropdown-item">Something else here</NavLink>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown mx-4">
                                                <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    A_Z
                                        </NavLink>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <NavLink className="dropdown-item">Action</NavLink>
                                                    <NavLink className="dropdown-item">Another action</NavLink>
                                                    <div className="dropdown-divider"></div>
                                                    <NavLink className="dropdown-item">Something else here</NavLink>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* <!--end filter-nav--> */}


                            <div className="row">
                                {this.state.res.menu.map(v => {
                                    return <CardFood
                                        handleOnAdd={this.dispatchAddToCart.bind(this)}
                                        data={v}
                                        setsize={(id, size) => this.setSize(id, size)}
                                        setrating={(id, rating) => this.setRating(id, rating)}
                                        setamount={(id, amount) => this.setAmount(id, amount)}
                                        key={v.id}
                                    />
                                })}
                            </div>
                            <OrderBill />
                            <div className="testimonials">
                                <div className="row">
                                    {this.state.res.comments.map(c => {
                                        return <Comment data={c} key={c.userId} />
                                    })}
                                </div>
                                <div className="add-comments">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form ref="commentForm" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">Add Comment</label>
                                                    <input type="text" ref="author" className="form-control form-control--inputs" id="exampleFormControlInput1" placeholder="author" />
                                                </div>
                                                <div className="form-group">
                                                <input type="text" ref="comment" className="form-control form-control--inputs" id="exampleFormControlInput1" placeholder="comment" />
                                                </div>
                                                <div className="form-group">
                                                <input type="number" min="0" max="5" ref="rating" className="form-control form-control--inputs" id="exampleFormControlInput1" placeholder="rating" />
                                                </div>
                                                <input type="submit" value="Send" className="button button--secondary"/> 
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ) : (<div style={{ "marginTop": "10rem" }}>no res to fetch</div>);
        return (
            <div>
                {Restaurant}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        restaurants: state.user.restaurants
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToCart,
        addComment
    }, dispatch);
}
export default connect(mapStateToProps, mapActionsToProps)(DetailsPage);

