import axios from "axios";
import { useState, useEffect, createContext } from "react";
import MobilePhone from "./MobilePhone";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const Ppp = createContext();

export const MobilePhoneList = ({ children }) => {
  const [phoneArray, setPhoneArray] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [activeProduct, setActiveProduct] = useState();
  // const [addToCartProduct, setAddToCartProduct] = useState();
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((data) => {
        console.log(data.data.products);
        setPhoneArray(data.data.products);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClose = () => {
    setActiveProduct(null);
  };

  const buttonControl = (phone) => {
    console.log("pavadinimas", phone);
    setActiveProduct(phone);
  };

  const addToCart = () => {
    setCartArray([...cartArray, activeProduct]);
  };
  console.log("cart array", cartArray);

  let cartToShow = [];
  cartToShow = cartArray.reduce((groupedProductsInCart, product) => {
    const id = product.id;
    if (groupedProductsInCart[id] == null) groupedProductsInCart[id] = [];
    groupedProductsInCart[id].push(product);
    return groupedProductsInCart;
  }, {});

  let totalPrice = 0;
  totalPrice = cartArray.reduce((cartTotalPrice, product) => {
    const price = product.price;
    return cartTotalPrice + price;
  }, 0);
  console.log("total price", totalPrice);

  console.log("cart to diplay", cartToShow);
  // const addToCart = () => {
  //   setAddToCartProduct(activeProduct);
  //   setActiveProduct(null);
  // };

  if (isLoading) {
    return <div>DATA IS LOADING...</div>;
  }

  return (
    <>
      {/* {addToCartProduct && (
        <Toast onClose={() => setAddToCartProduct(null)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      )} */}
      {/* <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>  */}
      <Container>
        <Row className="justify-content-center">
          {phoneArray.map((phone) => {
            return (
              // <div   style={{display: "flex", flexDirection:"column"}}>
              <MobilePhone
                key={phone.id}
                phone={phone}
                onButtonClick={buttonControl}
              />

              //    </div>
            );
          })}
        </Row>
        {/* </div> */}
      </Container>

      <Modal show={activeProduct} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addToCart()}>
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>

      <Ppp.Provider value={{ cartToShow, totalPrice }}>
        <div>{children}</div>
      </Ppp.Provider>
    </>
  );
};

export default MobilePhoneList;
