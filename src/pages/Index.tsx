import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">DeliverEase</span>
            </div>
            <NavigationMenuList className="hidden md:flex items-center space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px]">
                    <div className="grid gap-3">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md">
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Browse Products
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Explore items waiting to be delivered worldwide
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">Sign In</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button>Sign Up</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Global Shopping Made Easy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with travelers worldwide to get your favorite products delivered to your doorstep
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">List Your Product</Button>
            <Button size="lg" variant="outline">Become a Traveler</Button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>1. List Your Product</CardTitle>
                <CardDescription>
                  Tell us what you want to be delivered
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create a listing with product details, delivery location, and your offer price
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Secure Payment</CardTitle>
                <CardDescription>
                  Your payment is held safely in escrow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Make a secure payment that will only be released when you receive your item
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Get Delivered</CardTitle>
                <CardDescription>
                  A verified traveler delivers your item
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track your order and receive your product from a trusted traveler
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Join Section */}
      <div className="py-20 bg-gradient-to-t from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              Join DeliverEase Today
            </h2>
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <Label htmlFor="role">I want to:</Label>
                <RadioGroup defaultValue="client" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="client" id="client" />
                    <Label htmlFor="client">List Products for Delivery</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="traveler" id="traveler" />
                    <Label htmlFor="traveler">Become a Traveler</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Enter your email" />
                </div>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;