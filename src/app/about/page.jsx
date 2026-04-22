import ModalTAsk from '@/component/ModalTAsk';
import { Toastify } from '@/component/Toastify';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user

    if(!user){
        redirect('/auth/login')
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5'>About Page</h2>
            <div className='flex justify-center gap-2'>
                <Toastify></Toastify>
                <ModalTAsk></ModalTAsk>
            </div>
        </div>
    );
};

export default page;