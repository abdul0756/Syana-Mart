"use client";

export default function LoaderOverlay() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="main">
          <div className="up">
            <div className="loaders">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="loader"></div>
              ))}
            </div>
            <div className="loadersB">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="loaderA">
                  <div className={`ball${i}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
