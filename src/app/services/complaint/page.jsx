import React from 'react'
import Complaint from './Complaint'
import { Suspense } from "react";

function page() {
  return (
    <div>
        <Suspense fallback={<p>Loading...</p>}>
            <Complaint/>
        </Suspense>
    </div>
  )
}

export default page