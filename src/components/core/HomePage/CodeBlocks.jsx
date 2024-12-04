import React from 'react'
import CTAButton from "../HomePage/Button"
import HighlightText from './HighlightText'
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
}) => {
    return (
        <div className={`flex ${position} flex-col lg:flex-row my-20 justify-between gap-10`}>

            {/* Section 1 */}
            <div className='w-full lg:w-[50%] flex flex-col gap-8'>
                <div className="text-2xl font-bold">
                    {heading}
                </div>
                <div className='text-richblack-300 font-bold text-lg'>
                    {subheading}
                </div>

                <div className='flex gap-7 mt-7'>
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className='flex gap-2 items-center'>
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div>

            {/* Section 2 */}
            <div className={`w-full lg:w-[500px] h-fit flex flex-col lg:flex-row text-10[px] py-4 blob glass-effect`}>
                
                {/* Line numbers */}
                <div className='lg:w-[10%] text-richblack-400 font-inter font-bold text-center lg:block hidden'>
                    {[...Array(11).keys()].map((i) => (
                        <p key={i}>{i + 1}</p>
                    ))}
                </div>

                {/* Code block */}
                <div className={`w-full lg:w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
                    <TypeAnimation
                        sequence={[codeblock, 2000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        style={{
                            whiteSpace: "pre-line",
                            display: "block",
                        }}
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>

        </div>
    )
}

export default CodeBlocks
