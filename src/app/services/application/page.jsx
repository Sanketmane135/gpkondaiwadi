"use client";

import React, { useState } from "react";
import { Suspense } from "react";
import Application from "./Application";

export default function Page() {
 


  return (
        <Suspense fallback={<p>Loading...</p>}>
            <Application/>
        </Suspense>
  );
}
