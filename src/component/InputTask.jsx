"use client";
import React from "react";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { newBookTask } from "@/lib/action";

const InputTask = () => {
  return (
    <div className="max-w-[30%] mx-auto">
      <form action={newBookTask} className="flex flex-col gap-4">
        <TextField className="w-full" name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField className="w-full" name="category" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter your description" />
        </TextField>
        <TextField className="w-full" name="price" type="number">
          <Label>Price</Label>
          <Input placeholder="Enter your price" />
        </TextField>


          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">
            Send Book
          </Button>

      </form>
    </div>
  );
};

export default InputTask;
