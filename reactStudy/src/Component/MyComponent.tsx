
import React, { useState } from 'react'

export default function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [quantity, setQuantity] = useState("");
    const [comment, setComment] = useState(1);
    const [payment, setPayment] = useState("");
     const updateName = () =>{
          setName("Puttipong")
          console.log(name)
    }

    const incrementAge = () => {
      setAge(age + 1)
    }

    function handleNameChange(event : any){
      setName(event.target.value);
    }

    function handleQuantityChange(event : any){
      setQuantity(event.target.value);
    }

    function handleCommentChange(event : any){
      setComment(event.target.value);
    }
    function handlePaymentChange(event : any){
      setPayment(event.target.value);
      console.log(payment)
    }

  return (
       <div>
            <input type="text"  value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            {/* <button onClick={updateName}>set Name</button>
            <p>Name: {age}</p>
            <button onClick={incrementAge}>set Age</button> */}
            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>
            <textarea name="" id="" value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange} >
              <option value="">Select an option</option>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            
       </div>
  )
}