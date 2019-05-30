import React from 'react';

class FormAddFood extends React.Component {
  state = {
    name: ' ',
    size : [],
    description: ' ',
    price: {small: null , meduim :null , large : null},
    discount: null,
    paymentTypes: [],
    categorySelected: ' ',
    tags : [],
    priceSize:[false,false,false,false],
}

checkboxHandler(e) {
  const checked = e.target.value;
  console.log(checked);
  let size = this.state.size;
  size.push(checked);
  console.log(size);
  this.setState({
      size
  })
}
category = ['meat' , 'chicken', 'pizza']
food =[]
x= true;
submitHandler=(event) => {
  event.preventDefault();
  if(isNaN(this.state.name) && isNaN(this.state.description) && !isNaN(this.state.price.small) && !isNaN(this.state.price.large) && !isNaN(this.state.price.meduim)&& !isNaN(this.state.discount))
{  this.food.push(this.state);
}
else{this.x = false}  
console.log(this.food)
}
displayPrice(event,id){
  const npricesize = [...this.state.priceSize];
  npricesize[id]=!npricesize[id];
  this.setState({
    ...this.state,
    priceSize:npricesize
  })
}
  render() {
    let options = (
      <>
          {
              this.category.map((category, index) => {
                  return <option key={index} value={category} >{category}</option>
              })
          }
      </>
  );
    return (
        <div className="container form-container form-separator">
        <h3 className="head-title col text-center">Add food to Menu</h3>
        <hr/>
        <div className="row d-flex">
            {/* <!-- form --> */}
            <div className="order-sm-0 order-1 col-md-7 col-sm-12 ml-sm-1 ml-md-5 mt-sm-2 p-4">
                {/* <!-- header --> */}

                {/* <!-- form --> */}
                <form className="" method="post" action="">
                    {/* <!-- padding --> */}

                    {/* <!-- horizontal display --> */}
                    <div className="d-flex flex-column">
                        {/* <!-- Name --> */}
                        <div className="input-group col">
                            <div className="input-group-prepend">
                                <span className="input-group-text label label--size" id="food-title">Food Name</span>
                            </div>
                            <input className="form-control col form-control--inputs" type="text" placeholder="Food Name" aria-label="Recipient's " aria-describedby="my-addon" onChange={(event) => this.setState({ name: event.target.value })}/>

                        </div>

                        {/* <!-- Category --> */}
                        <div className="form-separator"></div>
                        <div className="input-group col">
                            <div className="input-group-prepend">
                                <span className="input-group-text label label--size" id="food-category">category</span>
                            </div>
                            <select className="form-control form-control--inputs" onChange={(event) => this.setState({ categorySelected: event.target.value })} id="exampleFormControlSelect1">
                                {options}
                            </select>
                        </div>


                        {/* <!-- Sizes --> */}
                        <div className="form-separator"></div>
                        <div className="input-group col">
                            <div className="input-group-prepend">
                                <span className="input-group-text label label--size" id="food-size">Size</span>
                            </div>

                            <div className="custom-control custom-checkbox ml-5">
                                <input id="my-input-small" checked={!this.state.priceSize[0]} onChange={()=>{}}  onClick={(event)=>{this.displayPrice(event,0)}} className="custom-control-input" type="checkbox" name="" value="true"/>
                                <label htmlFor="my-input-small"  className="button button--secondary button--small-btn1 custom-control-label">Small</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-5 ml-5">
                                <input id="my-input-meduim" checked={!this.state.priceSize[1]} onChange={()=>{}} onClick={(event)=>{this.displayPrice(event,1)}} className="custom-control-input" type="checkbox" name="" value="true"/>
                                <label htmlFor="my-input-meduim" className="button button--secondary button--small-btn1 custom-control-label">Meduim</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-5">
                                <input id="my-input-large" checked={!this.state.priceSize[2]} onChange={()=>{}} onClick={(event)=>{this.displayPrice(event,2)}} className="custom-control-input" type="checkbox" name="" value="true"/>
                                <label htmlFor="my-input-large" className="button button--secondary button--small-btn1 custom-control-label">Large</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-auto">
                                <input id="my-input-sale" checked={!this.state.priceSize[3]} onChange={()=>{}} onClick={(event)=>{this.displayPrice(event,3)}} className="custom-control-input" type="checkbox" name="" value="true"/>
                                <label htmlFor="my-input-sale" className="button button--secondary button--small-btn1 custom-control-label">isSale</label>
                            </div>
                            <input disabled={this.state.priceSize[3]} onChange={(e)=>{this.setState({discount : e.target.value})}} id="my-input-sale-price" className="form-control form-control--size text-center" type="text" name="" placeholder="discount"/>
                        </div>

                        {/* <!-- Prices --> */}
                        <div className="form-separator"></div>
                        <div className="input-group col">
                            <div className="input-group-prepend">
                                <span className="input-group-text label label--size" id="food-size">Price</span>
                            </div>
                            <input disabled={this.state.priceSize[0]} className="form-control form-control--inputs col-3 ml-auto" id="price-small" type="text" name="Small" placeholder="small price" onChange={(e) => this.setState({price:{small:e.target.value , meduim:this.state.price.meduim ,Large :this.state.price.large }})}/>
                            <input disabled={this.state.priceSize[1]} className="form-control form-control--inputs col-3 ml-5 mr-5" id="price-meduim" type="text" name="Meduim" placeholder="meduim price" onChange={(e) => this.setState({price:{meduim:e.target.value , small:this.state.price.small ,Large :this.state.price.large }})}/>
                            <input disabled={this.state.priceSize[2]} className="form-control form-control--inputs col-3 mr-auto" id="price-large" type="text" name="Large" placeholder="large price" onChange={(e) => this.setState({price:{large:e.target.value , meduim:this.state.price.meduim ,small :this.state.price.small }})}/>
                        </div>

                        {/* <!-- Description --> */}
                        <div className="form-separator"></div>
                        <div className="input-group col">
                            <div className="input-group-prepend">
                                <span className="input-group-text label" id="description">Description</span>
                            </div>
                            <textarea className="form-control form-control--inputs form-control--inputs-txtarea" aria-label="With textarea" onChange={(e)=> this.setState({description : e.target.value})}></textarea>
                        </div>

                        {/* <-- confirm --> */}
                        <div className="form-separator"></div>
                        <div className="ml-auto mr-auto">
                            <button type="submit" className="button button--black" onClick={(e) => this.submitHandler(e)} >Save</button>
                            <button type="submit" className="button button--secondary">Cancel</button> 
                            {!this.x ? <div >
                                <ul>
                                    <li>name must be string</li>
                                    <li>description must be string</li>
                                    <li>price must be number</li>
                                    <li>discount must be number</li>
                            </ul></div> : null }
                        </div>



                    </div>
                </form>
            </div>
            <div className="order-sm-1 order-0 col-md-4 mt-auto mb-auto ml-auto ">
                <div className="add-group img ml-auto mr-auto">
                    <img src="./assets/14762094.jpg" alt=""/>
                </div>
                <div className="d-flex justify-content-center form-separator ">
                    <input type="file" href="#" className="button button--white" placeholder="Upload" />
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default FormAddFood;
