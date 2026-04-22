"use client";

import {Button, toast} from "@heroui/react";

export function Toastify() {
  return (
    <div>
        <Button size="sm" variant="secondary" onClick={() => toast.success("Operation completed")}>
          Success
        </Button>
    </div>
  );
}