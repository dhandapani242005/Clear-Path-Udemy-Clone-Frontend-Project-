import { useState , useEffect } from "react";
import icon from './assets/icon.png';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  MdDelete  } from "react-icons/md";

export default function Courses({ image, title, sub, price, dis, hide }) {

  const [purchased, setPurchased] = useState(false);
  const [Price, setPrice] = useState(price);

  useEffect(()=> {
    console.log('useEffect Called...');
  })

  function handlePurchase() {
    toast.success(`🎉 You have bought the course: ${title} for ₹${Price} (Discount: ${dis}%`, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setPurchased(true);
  }

  function applyDiscount() {
    const newPrice = price - (price * (dis / 100));
    setPrice(newPrice);

    toast.info(`💸 Discount of ${dis}% applied! New price: ₹${newPrice}`, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
      <div className="Courses">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{sub}</p>
        <h3>₹{Price}</h3>

        <div className="info">
          <img src={icon} alt="Instructor" />
          <button id="Disc" onClick={applyDiscount}>
            {Price === price ? "Apply Discount" : "Discount Added"}
          </button> 
          <button id="Buy" onClick={handlePurchase}>
            {purchased ? "View Course" : "Get it Now"}
          </button>
          <button id = "Hide" onClick={hide}><MdDelete  /></button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
