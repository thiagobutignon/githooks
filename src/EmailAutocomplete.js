import React, { useState, useEffect } from "react";
import useEmailAutocomplete from "use-email-autocomplete";

export default function EmailAutocomplete() {
  const { email, bind } = useEmailAutocomplete();
  const [emails, setEmails] = useState([]);

  function onSubmit() {
    if (email.isValid) {
      setEmails([...emails, { id: Math.random(), email: email.address }]);
    } else {
      setEmails([...emails, { id: Math.random(), email: "Email inválido" }]);
    }
  }
  return (
    <>
      <h2>Digite o seu e-mail</h2>
      <input {...bind} />
      <button onClick={() => onSubmit()}>Veja seu email</button>
      <ul>
        {emails.map(list => (
          <li key={list.id}>{list.email}</li>
        ))}
      </ul>
    </>
  );
}
