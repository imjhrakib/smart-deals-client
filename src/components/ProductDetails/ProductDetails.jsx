import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const ProductDetails = () => {
  const { _id: productId } = useLoaderData();
  const { user } = use(AuthContext);

  const bidModalRef = useRef(null);
  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };
  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log({ productId, name, email, bid });
    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => console.log("after submitting bids", data));
  };
  return (
    <div>
      <button onClick={handleBidModalOpen} className="btn btn-primary">
        I want to Buy this Product
      </button>
      <dialog
        ref={bidModalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Give the best offer!</h3>
          <p className="py-4">Offer something seller can not resist</p>
          <form onSubmit={handleBidSubmit}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                defaultValue={user ? user.displayName : ""}
                readOnly
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                defaultValue={user ? user.email : ""}
                readOnly
              />

              <label className="label">Bid</label>
              <input
                type="text"
                className="input"
                name="bid"
                placeholder="Your Bid"
              />
              <button className="btn btn-neutral mt-4">Place Your Bid</button>
            </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;
