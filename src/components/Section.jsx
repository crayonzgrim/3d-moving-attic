import React from 'react'

export const Section = (props) => {
  const {right, opacity, children, ...others} = props;

  return (
   <section
      {...others}
      className={`h-screen flex flex-col justify-center p-10 ${
        right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
