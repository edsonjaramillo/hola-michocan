import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toastNotification, ToastType } from '@/lib/toastNotification';
import { HeadOpenGraph, CustomInput } from '@/components/index';
import { TextFieldInput, FormGroupLabel } from '@/components/index';
import { LocationIcon, MailIcon, PhoneIcon } from '@/components/contact/ContactIcons';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name } = data;

    toastNotification(
      ToastType.SUCCESS,
      `Thank you ${name} for your message. We will get back to you as soon as possible.`,
      5000
    );

    const templateParameters = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phone,
      message: data.message,
    };

    const { status } = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParameters,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    );

    if (status == 200) {
      toastNotification(ToastType.SUCCESS, `Your message was sent, ${name}!`);
      reset();
    } else {
      toastNotification(ToastType.ERROR, 'Error occured. Try again.');
    }
  };

  return (
    <>
      <HeadOpenGraph
        title='Contact Us'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corporis!'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
      />

      <div className='contact responsive-width-contact'>
        <div className='contact__grid'>
          <h1 className='contact__header'>Get in Touch!</h1>
          <span className='contact__subheader'>
            I hope to help and answer any questions you might have. I look forward to hearing
            from you.
          </span>
        </div>
        <div className='contact__buttongrid'>
          <PhoneIcon />
          <LocationIcon />
          <MailIcon />
        </div>
      </div>

      <form
        className='form'
        onSubmit={handleSubmit(onSubmit, () =>
          toastNotification(ToastType.ERROR, 'Check input requirements.')
        )}>
        <div className='form__grid responsive-width-contact'>
          <FormGroupLabel name='name' label='Name' errors={errors.name}>
            <CustomInput
              type='text'
              name='name'
              placeholder='Jane Doe'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='email' label='Email' errors={errors.email}>
            <CustomInput
              type='text'
              name='email'
              placeholder='janedoe@me.com'
              register={register}
              req={{
                required: { value: true, message: 'Required' },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='phone' label='Phone Number' errors={errors.phone}>
            <CustomInput
              type='text'
              name='phone'
              placeholder='0123456789'
              register={register}
              req={{
                required: { value: true, message: 'Required' },
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Must be 10 digit numbers',
                },
                minLength: { value: 10, message: 'Must be 10 digits' },
                maxLength: { value: 10, message: 'Must be 10 digits' },
              }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='message' label='Message' errors={errors.message}>
            <TextFieldInput
              name='message'
              placeholder='Enter Message'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <button type='submit' className='form__button'>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactPage;
