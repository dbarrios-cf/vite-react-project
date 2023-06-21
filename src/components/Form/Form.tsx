import { useState } from "react";

function Form() {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name"/>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="age">Age</label>
        <input type="number" className="form-control" id="age"/>
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form;