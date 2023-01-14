import React from "react"

export const Skeleton = () => (
    <>
        <h2 style={{textAlign: "center", fontSize: "18px"}}>Please select a character to see information</h2>
        <svg
            role="img"
            width="400"
            height="150"
            aria-labelledby="loading-aria"
            viewBox="0 0 400 150"
            preserveAspectRatio="none"
        >
            <title id="loading-aria">Loading...</title>
            <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                clip-path="url(#clip-path)"
                style={{fill: "url(#fill)"}}
            ></rect>
            <defs>
                <clipPath id="clip-path">
                    <rect x="51" y="20" rx="3" ry="3" width="326" height="16" />
                    <circle cx="22" cy="27" r="21" />
                    <rect x="4" y="128" rx="3" ry="3" width="375" height="27" />
                    <rect x="3" y="94" rx="3" ry="3" width="375" height="27" />
                    <rect x="3" y="61" rx="3" ry="3" width="375" height="27" />
                </clipPath>
                <linearGradient id="fill">
                    <stop
                        offset="0.599964"
                        stop-color="#f3f3f3"
                        stop-opacity="1"
                    >
                        <animate
                            attributeName="offset"
                            values="-2; -2; 1"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        ></animate>
                    </stop>
                    <stop
                        offset="1.59996"
                        stop-color="#ecebeb"
                        stop-opacity="1"
                    >
                        <animate
                            attributeName="offset"
                            values="-1; -1; 2"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        ></animate>
                    </stop>
                    <stop
                        offset="2.59996"
                        stop-color="#f3f3f3"
                        stop-opacity="1"
                    >
                        <animate
                            attributeName="offset"
                            values="0; 0; 3"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        ></animate>
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    </>
)

export default Skeleton;