import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  showSub,
  subOptions,
  handleCategoryChange,
  handleSubmit,
  handleChange,
  values,
  setValues,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          onChange={handleChange}
          name="title"
          value={values.title}
          type="text"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          onChange={handleChange}
          name="description"
          value={values.description}
          type="text"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          onChange={handleChange}
          name="price"
          value={values.price}
          type="number"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Shipping</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          onChange={handleChange}
          name="quantity"
          value={values.quantity}
          type="number"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Color</label>
        <select name="color" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {values.colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Brand</label>
        <select name="brand" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {values.brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Category</label>
        <select
          onChange={handleCategoryChange}
          name="category"
          className="form-control"
        >
          <option value="">please select</option>
          {values.categories.length > 0 &&
            values.categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
      {showSub && (
        <div>
          <label>Sub categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={values.subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}
      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductCreateForm;
