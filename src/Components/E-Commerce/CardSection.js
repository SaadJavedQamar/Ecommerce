import React, { useState } from 'react'
import data from '../E-Commerce/Data'
import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function CardSection() {

  const [state] = useState(data);
  const [noofEle, setNoofEle] = useState(8);

  const slice = state.slice(0, noofEle);

  const loadMore = () => {
    setNoofEle(noofEle + noofEle);
  }

 
  return (
    <>
      <div className='container mt-5'>
        <h1 className='fw-bold fs-2 '>Available Items In Store</h1>
        {
          slice.map((item) => {
            return <div key={item.id} className="card d-flex  float-start mx-2 mt-4 " style={{ width: "18rem", height: "25rem" }}>
              <img src={item.pic} style={{ width: "14rem", height: "12rem", alignItems: "center", margin: "auto" }} className="card-img-top mt-3 " alt="..." />
              <div className="card-body">
                <h5 className="fw-bold card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
                {/* <p className=" btn btn-outline-dark ">Price is {item.price} $ </p> */}

                <Link to="/Cart"><p onClick={() => checkinput(item)} className="  btn btn-outline-info ">Price is {item.price} $ </p></Link>
              </div>
            </div>
          })
        }


<button className="btn btn-primary btn-center mt-5 mb-5 w-50" onClick={loadMore}>See More</button>

      </div>

    </>
  )
}

const checkinput = (e) => {
  const itemsdata = e;
  localStorage.setItem('Items', JSON.stringify(itemsdata))
}


function Last() {


  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("SignIn"))
      navigate('/login')
  }, [])

  let list = localStorage.getItem('Items');
  var filterItems = JSON.parse(list);
  const [first] = useState(filterItems)



  // localStorage.setItem("CartSelect", false)

  console.log(CartClick())

  function CartClick() {
    var a=+1;
    localStorage.setItem("CartSelect", a)
    a++
  }
  
  return (
    <>
      <div className='container mt-5' >
        <div className="card mb-3  " style={{ maxWidth: "1250px", border: "2px solid rgba(0,0,0,.125)" }}>
          <div className="row g-0 ">
            <div className="col-md-4 mt-4">
              <img src={first.pic} className="  ps-4 img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 pt-5">
              <div className="card-body pt-5 ">
                <h5 className=" card-title " style={{ fontSize: "70px" }}>{first.title}</h5>
                <p className="card-text fs-5" style={{ color: "Grey", maxWidth: "650px" }}>{first.desc}</p>
                <p className="card-text fs-1 fw-bold" style={{ color: "Orange" }}>{first.price}$</p>
                <p className="card-text text-muted">Rating is Good</p>
                <p className=" fw-bold btn btn-success w-25 ">Buy Now</p>
                <p onClick={CartClick} className=" fw-bold ms-3 btn btn-warning w-25">Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// Math.random()


export default CardSection
export { Last }
