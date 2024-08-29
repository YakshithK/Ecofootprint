import { Button, Text, Img } from "../components";
import React from "react";
import { Helmet } from "react-helmet";

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>EcoFootprint Home</title>
                <meta
                  name="description"
                  content="skibidi toilet"
                />
            </Helmet>
            <div className="w-full bg-white-a700 py-2.5">
                <>
                    <div className="relative h-[1002px] px-3.5">
                        <Img
                        src="images/img_urban_vintage_7.png"
                        alt="Urban Image"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1002px] w-full max-w-[1480px] flex-1 rounded-[20px] object-cover"
                        />
                        <div className="absolute left-0 right-0 top-[28%] m-auto flex w-full max-w-[1410px] flex-1 flex-col items-center gap-24 px-14 md:gap-[72px] md:px-5 sm:gap-12">
                            <Text as="p" className="text-shadow-ts">
                                Welcome to EcoFootprint
                            </Text>
                        </div>
                        <div className="ml-[18px] mr-8 flex w-[70%] justify-between gap-5 md:mx-0 md:w-full">
                            <Button shape='round'>GET STARTED</Button>
                            <Button shape='round'>Go to Dashb</Button>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}