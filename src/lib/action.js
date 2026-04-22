"use server"
import React from 'react';
import { postTask } from './task';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createTask = async(formData) => {

    const newTask = Object.fromEntries(formData.entries());
    // console.log(newTask)

    const res = await postTask(newTask)
    if(res.ok){
        revalidatePath('/about')  
    }
    return res
}

export const newBookTask = async(formData) => {

    const newTask = Object.fromEntries(formData.entries());

    const res = await postTask(newTask)
    if(res.ok){
        revalidatePath('/about')
        redirect('/about')
    }
    return res
}