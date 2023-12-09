import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [addedProductsArray, setAddedProductsArray] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleForm = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
    console.log(event);
  };
  //   const handleProductData = (event) => {
  //     console.log("event.target", event.target)
  //     setProductData((prevData) => ({
  //       ...prevData,
  //       [event.target.name]: event.target.value

  //     }));
  //     console.log(event)
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.title}, Price: ${formData.price} success`);
    setAddedProductsArray([...addedProductsArray, formData]);
    console.log("my array", addedProductsArray);
  };
  console.log("my array after", addedProductsArray);

  const handleSubmitPost = (event) => {
    event.preventDefault();
    axios
      .post("https://dummyjson.com/products/add", {
        title: formData.title,
        description: formData.description,
        price: formData.price,
      })
      .then((response) => {
        console.log("Post response", response);
      })
      .catch((error) => {
        console.log("error msg post", error, error.response);
      });
  };

  return (
    <>
      <div style={{ width: "700px" }}>
        {" "}
        Submit to array
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            required
            value={formData.title}
            onChange={handleForm}
          />
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            required
            value={formData.description}
            onChange={handleForm}
          />
          <input
            type="number"
            name="price"
            required
            placeholder="Enter price"
            value={formData.price}
            onChange={handleForm}
          />

          <button>Submit</button>
        </form>
      </div>

      <div>======================================</div>
      <div>submit to server POST</div>
      <div style={{ width: "700px" }}>
        <form
          onSubmit={handleSubmitPost}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            required
            value={formData.title}
            onChange={handleForm}
          />
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            required
            value={formData.description}
            onChange={handleForm}
          />
          <input
            type="number"
            name="price"
            required
            placeholder="Enter price"
            value={formData.price}
            onChange={handleForm}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
