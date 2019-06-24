import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
const ProfileSideBar = (props) => {
  return (
       
          <div className="sidebar menu-border text-center">
            
            <div className="profile-img">
                <img src="http://placehold.it/100/100" alt=""/>
                <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file"/>
                </div>
            </div>
        
            <h2 className="username">{props.profile.name}</h2>

            <div className="alert alert-primary link__info">
              <button className="btn link__copy ml-1">Copy Link</button>
              <span className="group__link">http://placehold.it/100/100</span>
            </div>
            <ul>
              <li className="my-5">
                <div className=" sidebar__links">
                  <i className="fa fa-users"></i>
                  <span>My Groups</span>
                  <i className="fa fa-caret-down"></i>
                </div>

                <ul>
                  <li className="p-2">
                    <input type="text" placeholder="Search group .. " className="form-control p-4"/>
                            </li>
                    <li className="p-1 mb-1">
                      <NavLink to="">ITI UI</NavLink>
                    </li>
                    <hr/>

                      <li className="p-1 mb-1 ">
                        <NavLink to="">ITI SD</NavLink>
                      </li>
                      <hr/>

                        <li className="p-1 mb-1 ">
                          <NavLink to="">ITI Wireless</NavLink>
                        </li>
                        <hr/>

                          <li className="p-1 mb-1">
                            <NavLink to="">ITI 3-Month Track</NavLink>
                          </li>
                        </ul>
                    </li>


                      <li className="my-1  sidebar__links">
                        <i className="fa fa-heart"></i>
                        <span>Favourite</span>
                        <i className="fa fa-caret-down"></i>

                      </li>

                      <li className="my-5  sidebar__links">
                        <i className="fa fa-history"></i>
                        <span>History</span>
                        <i className="fa fa-caret-down"></i>
                      </li>
                </ul>

            </div>
     
   
            );
};
function mapStateToProps({auth}){
  return{
   isAuth:auth.isAuth,
   profile:auth.profile
  }
}
export default connect(mapStateToProps)(ProfileSideBar);
