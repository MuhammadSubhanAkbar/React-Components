import React, { useState } from 'react';
import Button from './Button';
import {
    FiDownload,
    FiArrowRight,
    FiHeart,
    FiStar,
    FiSettings,
    FiUser,
    FiSearch,
    FiShoppingCart,
    FiMail,
    FiThumbsUp
} from 'react-icons/fi';

const ButtonDemo = () => {
    const [loadingStates, setLoadingStates] = useState({});
    const [favorites, setFavorites] = useState(false);
    const [notifications, setNotifications] = useState(3);

    const handleClick = (buttonName) => {
        console.log(`${buttonName} clicked!`);

        // Simulate loading state
        setLoadingStates(prev => ({ ...prev, [buttonName]: true }));
        setTimeout(() => {
            setLoadingStates(prev => ({ ...prev, [buttonName]: false }));
        }, 2000);
    };

    const toggleFavorite = () => {
        setFavorites(!favorites);
        handleClick('favorite');
    };

    const sendMessage = () => {
        alert('Message sent successfully!');
    };

    const addToCart = () => {
        setNotifications(prev => prev + 1);
        handleClick('addToCart');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Button Component Demo
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A comprehensive showcase of our reusable Button component with various variants,
                        sizes, states, and real-world use cases.
                    </p>
                </header>

                {/* Section 1: Basic Variants */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Basic Variants
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Primary</h3>
                            <Button variant="primary" onClick={() => handleClick('primary')}>
                                Primary Action
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Secondary</h3>
                            <Button variant="secondary" onClick={() => handleClick('secondary')}>
                                Secondary Action
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Outline</h3>
                            <Button variant="outline" onClick={() => handleClick('outline')}>
                                Outline Button
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Ghost</h3>
                            <Button variant="ghost" onClick={() => handleClick('ghost')}>
                                Ghost Button
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Danger</h3>
                            <Button variant="danger" onClick={() => handleClick('danger')}>
                                Delete Item
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Section 2: Sizes */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Button Sizes
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Button size="sm" variant="primary">
                                Small (sm)
                            </Button>
                            <Button size="md" variant="primary">
                                Medium (md)
                            </Button>
                            <Button size="lg" variant="primary">
                                Large (lg)
                            </Button>
                            <Button size="xl" variant="primary">
                                Extra Large (xl)
                            </Button>
                        </div>

                        <div className="text-sm text-gray-600">
                            <p>Size comparison with different variants:</p>
                            <div className="flex flex-wrap items-center gap-3 mt-3">
                                <Button size="sm" variant="outline">Small Outline</Button>
                                <Button size="md" variant="outline">Medium Outline</Button>
                                <Button size="lg" variant="outline">Large Outline</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: With Icons */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Buttons with Icons
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Start Icon Only</h3>
                            <div className="space-y-3">
                                <Button variant="primary" startIcon={<FiDownload />}>
                                    Download
                                </Button>
                                <Button variant="outline" startIcon={<FiUser />}>
                                    Profile
                                </Button>
                                <Button variant="ghost" startIcon={<FiSettings />}>
                                    Settings
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">End Icon Only</h3>
                            <div className="space-y-3">
                                <Button variant="primary" endIcon={<FiArrowRight />}>
                                    Continue
                                </Button>
                                <Button variant="outline" endIcon={<FiSearch />}>
                                    Search
                                </Button>
                                <Button variant="ghost" endIcon={<FiArrowRight />}>
                                    Next
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Both Icons</h3>
                            <div className="space-y-3">
                                <Button variant="primary" startIcon={<FiMail />} endIcon={<FiArrowRight />}>
                                    Send Message
                                </Button>
                                <Button variant="outline" startIcon={<FiShoppingCart />} endIcon={<FiArrowRight />}>
                                    Checkout
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Icon Only Buttons</h3>
                            <div className="space-y-3">
                                <Button variant="ghost" startIcon={<FiHeart />} aria-label="Favorite" />
                                <Button variant="ghost" startIcon={<FiSettings />} aria-label="Settings" />
                                <Button variant="outline" startIcon={<FiSearch />} aria-label="Search" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: States */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Button States
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Disabled States</h3>
                            <div className="space-y-3">
                                <Button disabled variant="primary">
                                    Disabled Primary
                                </Button>
                                <Button disabled variant="outline">
                                    Disabled Outline
                                </Button>
                                <Button disabled variant="ghost">
                                    Disabled Ghost
                                </Button>
                                <Button disabled variant="danger">
                                    Disabled Danger
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-3">Loading States</h3>
                            <div className="space-y-3">
                                <Button loading={loadingStates.loading1} variant="primary" onClick={() => handleClick('loading1')}>
                                    {loadingStates.loading1 ? 'Processing...' : 'Save Changes'}
                                </Button>
                                <Button loading={loadingStates.loading2} variant="outline" onClick={() => handleClick('loading2')}>
                                    {loadingStates.loading2 ? 'Loading...' : 'Load More'}
                                </Button>
                                <Button loading={loadingStates.loading3} variant="danger" onClick={() => handleClick('loading3')}>
                                    {loadingStates.loading3 ? 'Deleting...' : 'Delete Forever'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Real-world Examples */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Real-world Examples
                    </h2>

                    {/* Product Card Example */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-4">E-commerce Product Card</h3>
                            <div className="border rounded-lg p-4 max-w-sm mx-auto">
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="text-lg font-semibold">Wireless Headphones</h4>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        startIcon={<FiHeart />}
                                        className={favorites ? 'text-red-500' : ''}
                                        onClick={toggleFavorite}
                                    >
                                        {favorites ? 'Liked' : 'Like'}
                                    </Button>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">Noise cancelling with 30hr battery</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold">$199.99</span>
                                    <Button
                                        variant="primary"
                                        startIcon={<FiShoppingCart />}
                                        onClick={addToCart}
                                    >
                                        Add to Cart {notifications > 0 && `(${notifications})`}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Actions */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold mb-4">Dashboard Actions</h3>
                            <div className="space-y-4">
                                <Button variant="primary" size="lg" startIcon={<FiDownload />}>
                                    Download Report
                                </Button>
                                <Button variant="outline" startIcon={<FiMail />} onClick={sendMessage}>
                                    Send Notification
                                </Button>
                                <div className="flex gap-2">
                                    <Button variant="ghost" startIcon={<FiSettings />}>
                                        Settings
                                    </Button>
                                    <Button variant="ghost" startIcon={<FiUser />}>
                                        Profile
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Custom Styling */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Custom Styling with className
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button className="rounded-full px-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                                Rounded Full
                            </Button>

                            <Button className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                Animated Shadow
                            </Button>

                            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white">
                                Gradient Background
                            </Button>

                            <Button className="border-dashed border-2 border-gray-300 hover:border-gray-400 bg-transparent">
                                Dashed Border
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Section 7: Form Usage */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Form Integration
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm border max-w-md">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <Button type="submit" variant="primary" className="flex-1">
                                    Sign In
                                </Button>
                                <Button type="reset" variant="outline">
                                    Clear
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ButtonDemo;