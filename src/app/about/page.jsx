import BooksCArt from '@/component/BooksCArt';
import ModalTAsk from '@/component/ModalTAsk';
import { Toastify } from '@/component/Toastify';
import { createTask } from '@/lib/action';
import { auth } from '@/lib/auth';
import { bookData } from '@/lib/task';
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

    const data = await bookData()
    // console.log(data)

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5'>About Page: {data.length}</h2>
            <div className='flex justify-center gap-2 mb-3'>
                <Toastify></Toastify>
                <ModalTAsk createTask={createTask}></ModalTAsk>
            </div>
            <div className='max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10'>
                {
                    data.map(v => <BooksCArt key={v.id} book={v}></BooksCArt>)
                }
            </div>
        </div>
    );
};

export default page;