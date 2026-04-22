"use server"
import React from 'react';
import { postTask } from './task';
import { revalidatePath } from 'next/cache';

export const createTask = async(formData) => {

    const newTask = Object.fromEntries(formData.entries());
    // console.log(newTask)

    const res = await postTask(newTask)
    if(res.ok){
        revalidatePath('/about')
    }
    return res
}