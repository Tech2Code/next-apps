
const Loading = () => (
  
  <div className="fixed inset-0 z-50 bg-black/70 bg-opacity-40 flex flex-col items-center justify-center backdrop-blur-sm">
    <div className="flex items-center justify-center">
      <div className="relative w-20 h-20">
        {/* Blob Morph Loading Animation */}

        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <svg className="animate-spin h-40 w-40 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
);

export default Loading;
