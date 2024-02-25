import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

export const Loading = forwardRef<React.ElementRef<'div'>>(
  function Loading(props, ref) {
    const dotClassName = 'bg-white h-4 w-4 animate-ping rounded-md';

    return (
      <div ref={ref} className="flex justify-center gap-4 py-6">
        <div className={dotClassName} />
        <div className={twJoin(dotClassName, 'animation-delay-150')} />
        <div className={twJoin(dotClassName, 'animation-delay-300')} />
      </div>
    );
  },
);
