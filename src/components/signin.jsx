import React, { useState } from "react";
import Form from "react-bootstrap/Form";
export default function SignIn() {
  const [email, setEmail] = useState("");
  return (
    <div className="signup">
      <Form onSubmit="{handleSubmit}">
        <Form.Group size="lg" controlId="email">
          <Form.Label>username</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
