import { Backdrop } from './backdrop';
import { useOnClickOutside } from './common-hooks';
import { twMerge } from 'tailwind-merge';

type PopperProps = React.PropsWithChildren<{
  parentRef: React.RefObject<HTMLElement>;
  className?: string;
  onClickOutside: VoidFunction;
}>;

export function Popper({
  parentRef,
  className,
  children,
  onClickOutside,
}: PopperProps) {
  const popperRef = useOnClickOutside(onClickOutside);

  return (
    <Backdrop>
      <div
        ref={popperRef}
        className={twMerge(
          'absolute border-4 border-slate-300 bg-slate-800 p-4',
          className,
        )}
        style={{
          top: parentRef.current?.getBoundingClientRect().bottom,
        }}
      >
        {children}
      </div>
    </Backdrop>
  );
}
