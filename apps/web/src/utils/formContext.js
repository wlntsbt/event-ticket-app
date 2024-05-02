import { useState, useContext, createContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(null);

  const updateFormValues = (values) => {
    setFormValues(values);
  };

  return (
    <FormContext.Provider value={{ formValues, updateFormValues }}>
      {children}
    </FormContext.Provider>
  );
};
