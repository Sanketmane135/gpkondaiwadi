"use client";

import React, { useState } from "react";
import { Suspense } from "react";   
import Certificate from "./Certificate";

export default function Page() {
 

  return (
     <Suspense fallback={<p>Loading...</p>}>
    <Certificate/>
    </Suspense>
  );
}
