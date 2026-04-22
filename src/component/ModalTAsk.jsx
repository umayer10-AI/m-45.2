"use client";
import React from "react";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const ModalTAsk = ({createTask}) => {
  return (
    <div>
      <Modal>
        <Button variant="secondary">Open Form</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <CirclePlus className="size-5" />
                </Modal.Icon>
                <Modal.Heading>ADD To Books</Modal.Heading>
                
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form action={createTask} className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text">
                      <Label>Title</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="category" type="text">
                      <Label>Category</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="publishedYear" type="number">
                      <Label>Year</Label>
                      <Input placeholder="Enter your phone number" />
                    </TextField>
                    

                    <Modal.Footer>
                        <Button slot="close" variant="secondary">
                        Cancel
                        </Button>
                        <Button type="submit" slot="close">Send Book</Button>
                    </Modal.Footer>

                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ModalTAsk;
