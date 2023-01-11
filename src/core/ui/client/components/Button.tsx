import React from 'react';
import cn from 'classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

const variants = {
  default: 'flex justify-center items-center px-6 py-3 text-base font-medium rounded ring-0 ring-offset-2 kb-focus:ring-2 outline-none select-none',
  primary: 'bg-primary text-on-primary hover:bg-primary-light ring-primary disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed',
  loading: 'bg-gray-200 text-black/0 cursor-wait pointer-events-none'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  loading,
  disabled,
  ...rest
}, ref) => {
  return (
    <button 
      ref={ref}
      disabled={loading || disabled}
      className={cn(
        variants.default,
        { [variants.primary]: !loading },
        { [variants.loading]: loading },
        className
      )}
      { ...rest }
    >
      { loading && (
        <span className='absolute block rounded-full border-4 w-7 h-7 border-black/20 border-t-black/60 animate-spin'></span>
      ) }
      { children }
    </button>
  );
});

export default Button;