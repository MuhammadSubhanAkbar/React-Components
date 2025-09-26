import clsx from 'clsx'

function Card({
                   variant = 'elevated', // 'elevated', 'outline', 'filled'
                   padding = 'md',       // 'none', 'sm', 'md', 'lg'
                   radius = 'lg',        // 'none', 'sm', 'md', 'lg', 'xl'
                   hoverEffect = 'none', // 'none', 'lift', 'glow', 'scale'
                   children,
                   className = '',
                   onClick,
                   ...props
               }) {
    // Base classes
    const baseClasses = `
    transition-all duration-300 ease-in-out
    bg-white
  `;

    // Variants
    const variants = {
        elevated: 'shadow-sm border border-gray-100',
        outline: 'border-2 border-gray-200',
        filled: 'bg-gray-50 border border-gray-100',
    };

    // Padding
    const paddings = {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    }

    //Broder Radius
    const radii = {
        none : 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
    }

    //Hover Effect
    const hoverEffects ={
        none: '',
        lift:'hover:shadow-lg hover:-transition-y-1',
        glow:'hover:shadow-lg hover:shadow-blue-500/10',
        scale: 'hover: scale-[1.02]'
    }

    const cardClasses = clsx(
        baseClasses,
        variants[variant],
        paddings[padding],
        radii[radius],
        hoverEffects[hoverEffect],
        onClick && 'cursor-pointer',
        className
    );


    return (
        <div className={cardClasses} onClick={onClick} {...props}>
            {children}
        </div>
    )
}

//Card subcomponents for better structure

//Header
Card.Header = function CardHeader({children, className, ...props}) {
    return (
        <div className={clsx('mb-4', className)} {...props}>
            {children}
        </div>
    );
};

//Body
Card.Body = function CardBody({children, className, ...props}) {
    return (
        <div className={clsx('flex-1', className)} {...props}></div>
    )
}

//Footer
Card.Footer = function CardFooter({children, className, ...props}) {
    return (
        <div className={clsx('mt-4 pt-4 border-t border-gray-100', className)} {...props}>
            {children}
        </div>
    );
};

//Image
Card.Image = function CardImage({children,src, alt, className, ...props}) {
    return (
        <img
            src={src}
            alt={alt}
            className={clsx('w-full object-cover', className)}
            {...props}
        />
    )
}

export default Card;