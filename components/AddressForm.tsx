import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../styles/AddressForm.module.css'

function AddressForm(props: { handler: (address: string, balance: number) => void }) {

  const [values, setValues] = useState({
    address: '',
    balance: 0,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handler(values.address, values.balance)
  };

  const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      address: event.target.value,
    }));
  };

  const handleBalanceInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      balance: parseFloat(event.target.value)
    }));
  };


  return (
    <div className={styles.Form}>
      <form onSubmit={handleSubmit}>
        <input
          id="public-key"
          className={styles.formField}
          type="text"
          placeholder="Public Address, e.g. 7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp"
          name="firstName"
          value={values.address}
          onChange={handleAddressInputChange}
        />
        <br />
        <input
          id="balance"
          className={styles.formField}
          type="number"
          placeholder="Balance, 0"
          name="balance"
          value={values.balance}
          onChange={handleBalanceInputChange}
        />
        <br />
        <button type="submit" className={styles.formButton}>
          Check SOL Balance
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
