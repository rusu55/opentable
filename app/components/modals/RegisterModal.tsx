'use client'
import {useState} from 'react'
import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../inputs/Input"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import {toast} from 'react-hot-toast';


import userRegisterModal from "../../hooks/userRegisterModal";

const RegisterModal = () => {
    const registerModal =  userRegisterModal()

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true)

        axios.post('api/register', data)
                    .then(() =>{
                        toast.success('User Registered!')
                        registerModal.onClose()
                    })
                    .catch((error) => {toast.error(error)})
                    .finally(() => setIsLoading(false))
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to Airbnb"
                subtitle="Create an account!"
            />
            <Input 
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
             <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
             <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <p>It will be updated</p>
        </div>
    )

  return (
   <Modal 
    title="User Register"
    body= {bodyContent}
    footer= {footerContent}
    isOpen = {registerModal.isOpen}
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    actionLabel='Register User'
    />
  )
}

export default RegisterModal
