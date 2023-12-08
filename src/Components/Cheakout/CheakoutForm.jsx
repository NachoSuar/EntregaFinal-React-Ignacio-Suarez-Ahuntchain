// import { useState } from "react";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";

// const CheckoutForm = ({ handleSubmitCheck }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     repeatEmail: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     // Realizar validación manual aquí y actualizar los errores si es necesario
//     let errorObj = { ...errors };

//     if (name === "name") {
//       // Ejemplo de validación de nombre
//       if (value.length < 3 || value.length > 50) {
//         errorObj = { ...errorObj, name: "El nombre debe tener entre 3 y 50 caracteres" };
//       } else {
//         delete errorObj.name;
//       }
//     }

//     // Agregar más validaciones para otros campos aquí

//     setErrors(errorObj);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Realizar validación final aquí antes de enviar los datos
//     if (Object.keys(errors).length === 0) {
//       const { repeatEmail, ...filteredFormData } = formData;
//       handleSubmitCheck(filteredFormData);
//     }
//   };

//   const handleReset = () => {
//     setFormData({ name: "", phone: "", email: "", repeatEmail: "" });
//     setErrors({});
//   };

//   return (
//     <div>
//       <h2 className="text-center my-2">Formulario de Orden de pedido</h2>
//       <Container fluid>
//         <Row className="justify-content-center">
//           <Col xs={12} md={8}>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Nombre y apellido"
//                   name="name"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   isInvalid={errors.name}
//                   value={formData.name}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
//               </Form.Group>
//               {/* Agregar más campos del formulario con el mismo enfoque */}

//               <Row className="d-flex justify-content-center" md={12}>
//                 <Col md={3}>
//                   <Button className="my-2" variant="success" onClick={handleSubmit}>
//                     Registrar Pedido
//                   </Button>
//                 </Col>
//                 <Col md={3}>
//                   <Button className="my-2" variant="info" onClick={handleReset}>
//                     Limpiar Campos
//                   </Button>
//                 </Col>
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default CheckoutForm;
