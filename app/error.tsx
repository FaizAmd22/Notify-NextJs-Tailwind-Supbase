"use client"

import Box from "@/components/Box";

const Error = () => {
    return ( 
        <Box className="h-full w-[100vw] md:w-[70vw] flex items-center justify-center">
            <div className="text-neutral-400">
                Something went wrong!
            </div>
        </Box>
     );
}
 
export default Error;