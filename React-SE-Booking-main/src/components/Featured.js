import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          className="featuredImg"
        />
        <div className="featuredTitle">
            <h1>Bangkok</h1>
            <h2> 2,000 propertiaes</h2>
        </div>
        </div>
         <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1508804052814-cd3ba865a116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="featuredImg"
        />
        <div className="featuredTitle">
            <h1>Beijing</h1>
            <h2> 2,000 propertiaes</h2>
        </div>
        </div>
         <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          className="featuredImg"
        />
        <div className="featuredTitle">
            <h1>Kualalumpur</h1>
            <h2> 2,000 propertiaes</h2>
        </div>
        </div>
         <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="featuredImg"
        />
        <div className="featuredTitle">
            <h1>Tokyo </h1>
            <h2> 2,000 propertiaes</h2>
        </div>
        </div>
        </div>
  );
};

export default Featured;
