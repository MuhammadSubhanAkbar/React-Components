import React from "react";
import clsx from "clsx";
import "./button.css";

function Button({
                    children,
                    variant = "primary",
                    size = "md",
                    disabled = false,
                    loading = false,
                    onClick,
                    type = "button",
                    className = "",
                    startIcon,
                    endIcon,
                    ...props
                }) {
    const buttonClasses = clsx(
        "btn-base",
        `btn-${variant}`,
        `btn-${size}`,
        loading && "btn-loading",
        className
    );

    return (
        <button
            type={type}
            className={buttonClasses}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {/* Start Icon (not when loading) */}
            {startIcon && !loading && (
                <span className="flex-shrink-0">{startIcon}</span>
            )}

            {/* Loading Spinner */}
            {loading && (
                <svg
                    className="animate-spin h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            {/* Button Text */}
            {children}

            {/* End Icon (not when loading) */}
            {endIcon && !loading && (
                <span className="flex-shrink-0">{endIcon}</span>
            )}
        </button>
    );
}

export default Button;
