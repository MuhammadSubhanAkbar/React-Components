// components/CardDemo/CardDemo.jsx
import React from 'react';
import Card from './Cards.jsx';
import Button from '../Button/Button.jsx';
import { FiStar, FiHeart, FiShare2, FiShoppingCart } from 'react-icons/fi';

const CardsDemo = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Card Component Demo</h1>

                {/* Basic Card Variants */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Basic Variants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card variant="elevated" padding="md">
                            <Card.Header>
                                <h3 className="text-lg font-semibold">Elevated Card</h3>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-gray-600">This is a simple elevated card with subtle shadow.</p>
                            </Card.Body>
                        </Card>

                        <Card variant="outline" padding="md">
                            <Card.Header>
                                <h3 className="text-lg font-semibold">Outline Card</h3>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-gray-600">Card with border outline for clean separation.</p>
                            </Card.Body>
                        </Card>

                        <Card variant="filled" padding="md">
                            <Card.Header>
                                <h3 className="text-lg font-semibold">Filled Card</h3>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-gray-600">Card with subtle background fill.</p>
                            </Card.Body>
                        </Card>
                    </div>
                </section>

                {/* Product Cards */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Product Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card variant="elevated" padding="none" hoverEffect="lift">
                            <Card.Image
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                                alt="Headphones"
                                className="h-48 rounded-t-lg"
                            />
                            <div className="p-6">
                                <Card.Header>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-semibold">Wireless Headphones</h3>
                                        <Button variant="ghost" size="sm" startIcon={<FiHeart />} />
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <FiStar className="text-yellow-400" />
                                        <span className="text-sm text-gray-600 ml-1">4.8 (128 reviews)</span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-gray-600 text-sm">Noise cancelling with 30hr battery life</p>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold">$199.99</span>
                                        <Button variant="primary" size="sm" startIcon={<FiShoppingCart />}>
                                            Add to Cart
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </div>
                        </Card>

                        <Card variant="elevated" padding="none" hoverEffect="lift">
                            <Card.Image
                                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400"
                                alt="Camera"
                                className="h-48 rounded-t-lg"
                            />
                            <div className="p-6">
                                <Card.Header>
                                    <h3 className="text-lg font-semibold">Professional Camera</h3>
                                    <div className="flex items-center mt-1">
                                        <FiStar className="text-yellow-400" />
                                        <span className="text-sm text-gray-600 ml-1">4.9 (256 reviews)</span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-gray-600 text-sm">24MP mirrorless camera with 4K video</p>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold">$1,299.99</span>
                                        <Button variant="outline" size="sm">
                                            View Details
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Blog Cards */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Blog Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card variant="outline" hoverEffect="glow" onClick={() => alert('Card clicked!')}>
                            <Card.Header>
                                <span className="text-sm text-blue-600 font-medium">Technology</span>
                                <h3 className="text-xl font-bold mt-2">The Future of Web Development</h3>
                                <p className="text-sm text-gray-500 mt-1">Published on January 15, 2024</p>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-gray-700">
                                    Exploring the latest trends and technologies that are shaping the future of web development...
                                </p>
                            </Card.Body>
                            <Card.Footer>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">5 min read</span>
                                    <Button variant="ghost" size="sm" endIcon={<FiShare2 />}>
                                        Share
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>

                        <Card variant="filled" hoverEffect="scale">
                            <Card.Header>
                                <span className="text-sm text-green-600 font-medium">Design</span>
                                <h3 className="text-xl font-bold mt-2">UI/UX Best Practices 2024</h3>
                                <p className="text-sm text-gray-500 mt-1">Published on January 12, 2024</p>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-gray-700">
                                    Essential UI/UX principles and practices that every designer should know in 2024...
                                </p>
                            </Card.Body>
                            <Card.Footer>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">8 min read</span>
                                    <Button variant="ghost" size="sm">
                                        Read More
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </section>

                {/* User Profile Cards */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">Profile Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card variant="elevated" padding="lg" className="text-center">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
                                alt="Profile"
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <Card.Header>
                                <h3 className="text-xl font-semibold">John Doe</h3>
                                <p className="text-gray-600">Software Engineer</p>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-gray-700 text-sm mb-4">
                                    Passionate about building amazing user experiences with React and TypeScript.
                                </p>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline" className="w-full">
                                    View Profile
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CardsDemo;