import { useEffect, useMemo, useState } from "react";
import { errorMessages, regExp } from "../shared/constants";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    useEffect(() => setFormState(initialForm), [initialForm]);
    const [formErrors, setFormErrors] = useState({});
    const isFormValid =  useMemo(() => {
        for (const formValue of Object.keys(formErrors)) {
            if (formErrors[formValue] !== null) return false;
        }

        return true;
    }, [formErrors])

    const onInputChange = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value
        });

        onInvalidInput(target);
    };

    const onInvalidInput = ({ value, name }) => {
        const isValid = regExp[name]?.test(value);
        
        setFormErrors({
            ...formErrors,
            [`${name}Error`]: isValid ? null : errorMessages[name]
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        ...formErrors,
        isFormValid,
        onInputChange,
        onResetForm
    }
}
