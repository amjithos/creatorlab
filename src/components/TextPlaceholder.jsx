import React from 'react'

const TextPlaceholder = ({ headline, subhead, ctaText, onCtaClick }) => {
  return (
    <div className="text-center py-12 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{headline}</h1>
      <p className="text-lg md:text-xl text-violet-100 mb-8">{subhead}</p>
      <button
        className="px-8 py-3 text-lg rounded-lg bg-gradient-to-r from-violet-700 to-violet-500 text-white font-semibold shadow-md hover:from-violet-800 hover:to-violet-600 transition-colors duration-200"
        onClick={onCtaClick}
      >
        {ctaText}
      </button>
    </div>
  )
}

export default TextPlaceholder 