import React from "react"

export default function FeatureCard({imageSrc, title, description}) {
  return (
    <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12">
            <img src={imageSrc} alt={title} className="w-full h-full object-contain"/>
        </div>

        <div>
            <h4 className="font-semibold mb-1 text-indigo-400">{title}</h4>
            <p className="text-sm text-gray-500 leading-snug">{description}</p>
        </div>
    </div>
  );
}
