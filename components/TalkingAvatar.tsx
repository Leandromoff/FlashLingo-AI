import React from 'react';

interface TalkingAvatarProps {
  isSpeaking: boolean;
  size?: 'sm' | 'lg';
}

const TalkingAvatar: React.FC<TalkingAvatarProps> = ({ isSpeaking, size = 'lg' }) => {
  const containerSize = size === 'lg' ? 'w-24 h-24' : 'w-12 h-12';
  const eyeSize = size === 'lg' ? 'w-3 h-3' : 'w-1.5 h-1.5';
  const mouthWidth = size === 'lg' ? 'w-8' : 'w-4';
  
  return (
    <div className={`${containerSize} bg-slate-100 rounded-full flex flex-col items-center justify-center shadow-inner relative overflow-hidden transition-colors duration-300 ${isSpeaking ? 'bg-indigo-50' : ''}`}>
      {/* Eyes */}
      <div className="flex gap-4 mb-2 z-10">
        <div className={`${eyeSize} bg-slate-800 rounded-full`}></div>
        <div className={`${eyeSize} bg-slate-800 rounded-full`}></div>
      </div>

      {/* Mouth Container */}
      <div className={`${mouthWidth} flex justify-center items-center h-6 z-10`}>
        {/* 
          The Mouth 
          When not speaking: A flat line (height: 2px)
          When speaking: Animates height to simulate talking
        */}
        <div 
          className={`bg-slate-800 rounded-full transition-all duration-100 ${
            isSpeaking ? 'animate-talking-mouth' : 'h-[3px] w-full'
          }`}
          style={{
             animation: isSpeaking ? 'talk 0.3s infinite alternate ease-in-out' : 'none'
          }}
        ></div>
      </div>

      {/* CSS Injection for the specific keyframe since Tailwind arbitrary values for keyframes can be verbose */}
      <style>{`
        @keyframes talk {
          0% { height: 4px; width: 80%; border-radius: 10px; }
          100% { height: 20px; width: 70%; border-radius: 50%; }
        }
      `}</style>
    </div>
  );
};

export default TalkingAvatar;