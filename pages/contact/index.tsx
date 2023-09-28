import React, { useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { BsArrowRight } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const formRef = useRef<any>();
  const onSubmit: SubmitHandler<any> = (event) => {
    event.preventDefault();
    console.log(process.env)
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string, 
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string, 
      formRef.current, 
      process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID as string)
    .then((result) => alert('Message Sent'))
    .catch((error) => alert('We had an issue sending email'))
  };
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* Text & Form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* Text */}
          <h2 className='h2 text-center mb-12'>
            {`Let's`} <span className='text-accent'>connect.</span>
          </h2>
          {/* Form */}
          <form ref={formRef} onSubmit={onSubmit} className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input {...register('name')} type="text" placeholder='name' className='input' name='user_name' />
              <input {...register('email')} type="text" placeholder='email' className='input' name='user_email' />
            </div>
            <input {...register('subject')} type="text" placeholder='subject' className='input' />
            <textarea {...register('message')} placeholder='Type your message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all
              duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>{`Let's talk`}</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact