import React,{Component} from 'react';
class Comment extends Component {
    render(){
        return(
           <>
                    
                   <div className="col-md-6">
                   <div className="item">
                        <div className="testimonial">
                            <p>{this.props.data.comment}</p>
                        </div>
                        <div className="media">
                            <div className="media-left d-flex mr-3">
                            <img src="../../assets/user2.png" alt="" />
                            </div>
                            <div className="media-body">
                            <div className="overview">
                                <div className="name">
                                <b>{this.props.data.userName}</b>
                                </div>
                                <div className="star-rating">
                                <ul className="list-inline">
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
                        </div>
                    </div>
                  </div>
                
            </>
                     
                   
        )
    }
}
export default Comment;
