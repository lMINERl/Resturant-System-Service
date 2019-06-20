import React from 'react';
import {NavLink} from 'react-router-dom';

const ProfileData = (props) => {
  return (
    <form method="post">
    <div className="row">
        
        <div className="col-md-10">
            <div className="profile-head">
                        <h5>
                            Ahmed Hatem
                        </h5>
                      
                        <p className="proile-rating"><span>34</span> Reviews</p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <NavLink to="" className="nav-link active" id="home-tab">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="" className="nav-link" id="profile-tab" >Payment</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="" className="nav-link" id="profile-tab" >Favourite Restaurants</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-md-2">
            <NavLink to="profile/edit" className="button button--primary button--small-btn" name="btnAddMore">Edit Profile</NavLink>
        </div>
    </div>
    <div className="row">
        
        <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>User Id</label>
                                </div>
                                <div className="col-md-10">
                                    <p>Hatem123</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-10">
                                    <p>Ahmed Hatem</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-10">
                                    <p>ahmedhatembekaar@gmail.com</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Phone</label>
                                </div>
                                <div className="col-md-10">
                                    <p>01155666827</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Profession</label>
                                </div>
                                <div className="col-md-10">
                                    <p>Web Developer and Designer</p>
                                </div>
                            </div>
                </div>

               
            </div>
        </div>
    </div>
</form>
         
   
        );
};

export default ProfileData;
