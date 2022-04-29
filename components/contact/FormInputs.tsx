import { RegisterOptions, UseFormRegister, FieldValues } from 'react-hook-form';
import { motion } from 'framer-motion';

interface ErrorMessageType {
  message: string;
}

interface CustomInputProps {
  name: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  req: RegisterOptions;
}

interface RadioInputProps {
  name: string;
  value: string;
  register: UseFormRegister<FieldValues>;
  req: RegisterOptions;
}

export const CustomInput = ({ name, type, placeholder, register, req }: CustomInputProps) => {
  return (
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      className='form__input'
      {...register(name, req)}
    />
  );
};

export const TextFieldInput = ({ name, placeholder, register, req }: CustomInputProps) => {
  return (
    <textarea
      id={name}
      className='form__input form--textarea'
      placeholder={placeholder}
      rows={10}
      {...register(name, req)}
    />
  );
};

export const FormGroupLabel = ({ name, label, errors, children }: any) => {
  return (
    <div className='form__inputgroup'>
      <label className='form__label' htmlFor={name}>
        {label}
        {errors && <ErrorMessage message={errors.message} />}
      </label>
      {children}
    </div>
  );
};

export const RadioInput = ({ name, value, register, req }: RadioInputProps) => {
  return (
    <input
      className='form__radioinput'
      type='radio'
      id={`${name}-${value}`}
      value={value}
      {...register(name, req)}
    />
  );
};

export const ErrorMessage = ({ message }: ErrorMessageType) => (
  <motion.span
    role='alert'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className='form__errormessage'>
    {message}
  </motion.span>
);
