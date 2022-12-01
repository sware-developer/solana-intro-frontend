import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../styles/BalanceForm.module.css'

function BalanceForm(props: { handler: (balance: string) => void }) {

    const [values, setValues] = useState({
        balance: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.handler(values.balance)
    };

    const handleBalanceInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setValues((values) => ({
            ...values,
            balance: event.target.value,
        }));
    };

    return (
        <div className={styles.Form}>
            <form onSubmit={handleSubmit}>
                <input
                    id="balance"
                    className={styles.formField}
                    type="text"
                    placeholder="Balance, 0"
                    name="firstName"
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

export default BalanceForm;
