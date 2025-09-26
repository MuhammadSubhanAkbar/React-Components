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
/*
import React from 'react';
import Button from './components/Button/Button.jsx';
import { FiDownload, FiArrowRight, FiHeart, FiStar, FiSettings } from 'react-icons/fi';

function App() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    const handleSave = () => {
        alert('Data saved!');
    };

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            Section 1: Basic Variants
<section>
    <h2 className="text-2xl font-bold mb-4">Basic Variants</h2>
    <div className="flex flex-wrap gap-4">
        <Button variant="primary" onClick={handleClick}>
            Primary Button
        </Button>

        <Button variant="secondary">
            Secondary Button
        </Button>

        <Button variant="outline">
            Outline Button
        </Button>

        <Button variant="ghost">
            Ghost Button
        </Button>

        <Button variant="danger">
            Danger Button
        </Button>
    </div>
</section>

 Section 2: Different Sizes
<section>
    <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
    <div className="flex flex-wrap items-end gap-4">
        <Button size="sm" variant="primary">
            Small Button
        </Button>

        <Button size="md" variant="primary">
            Medium Button
        </Button>

        <Button size="lg" variant="primary">
            Large Button
        </Button>
    </div>
</section>

 Section 3: With Icons
<section>
    <h2 className="text-2xl font-bold mb-4">Buttons with Icons</h2>
    <div className="flex flex-wrap gap-4">
        <Button variant="primary" startIcon={<FiDownload />}>
            Download
        </Button>

        <Button variant="outline" endIcon={<FiArrowRight />}>
            Continue
        </Button>

        <Button variant="ghost" startIcon={<FiHeart />}>
            Add to Favorites
        </Button>

        <Button variant="secondary" startIcon={<FiSettings />} endIcon={<FiArrowRight />}>
            Settings
        </Button>
    </div>
</section>

Section 4: States
<section>
    <h2 className="text-2xl font-bold mb-4">Button States</h2>
    <div className="flex flex-wrap gap-4">
        <Button disabled variant="primary">
            Disabled Button
        </Button>

        <Button loading variant="primary">
            Loading Button
        </Button>

        <Button disabled variant="outline">
            Disabled Outline
        </Button>
    </div>
</section>

 Section 5: Form Usage
<section>
    <h2 className="text-2xl font-bold mb-4">Form Buttons</h2>
    <form className="space-y-4 max-w-md">
        <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
        </div>

        <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
        </div>

        <div className="flex gap-4">
            <Button type="submit" variant="primary">
                Login
            </Button>

            <Button type="reset" variant="outline">
                Clear Form
            </Button>
        </div>
    </form>
</section>

 Section 6: Real-world Examples
<section>
    <h2 className="text-2xl font-bold mb-4">Real-world Examples</h2>

     Product Card
    <div className="border rounded-lg p-4 max-w-sm">
        <h3 className="text-lg font-semibold">Premium Headphones</h3>
        <p className="text-gray-600 mt-2">High-quality sound with noise cancellation</p>
        <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold">$199.99</span>
            <Button variant="primary" startIcon={<FiStar />}>
                Add to Cart
            </Button>
        </div>
    </div>

    Action Buttons
    <div className="mt-6 flex gap-4">
        <Button variant="primary" size="lg" startIcon={<FiDownload />}>
            Download Report
        </Button>

        <Button variant="outline">
            Share
        </Button>

        <Button variant="ghost" startIcon={<FiSettings />}>
            Settings
        </Button>
    </div>
</section>

 Section 7: Custom Styling
<section>
    <h2 className="text-2xl font-bold mb-4">Custom Styling with className</h2>
    <div className="flex flex-wrap gap-4">
        <Button className="rounded-full px-8">
            Rounded Full
        </Button>

        <Button className="shadow-lg hover:shadow-xl transition-shadow">
            With Shadow
        </Button>

        <Button className="w-full max-w-xs">
            Full Width
        </Button>

        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 border-0">
            Gradient
        </Button>
    </div>
</section>
</div>
);
}

export default App;*/

export default Button;
