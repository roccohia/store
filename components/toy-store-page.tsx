'use client'

import { Search, Heart, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export function ToyStorePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="font-bold text-xl">
              🧸 Bobo
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/new" className="text-sm font-medium">
                New
              </Link>
              <Link href="/best-sellers" className="text-sm font-medium">
                Best Sellers
              </Link>
              <Link href="/theme" className="text-sm font-medium">
                Theme
              </Link>
              <Link href="/plush-dolls" className="text-sm font-medium">
                Plush Dolls
              </Link>
              <Link href="/blind-box" className="text-sm font-medium">
                Blind Box
              </Link>
              <Link href="/vinyl-toys" className="text-sm font-medium">
                Vinyl Toys
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - 调整高度和宽度 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden max-w-6xl mx-auto">
            <div className="relative h-[500px]">
              <Image
                src="/header.png"
                alt="Toy store header"
                width={1920}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
                priority
                style={{ objectPosition: 'center 45%' }}
              />
              <div className="absolute inset-0 bg-black/20">
                <div className="h-full flex flex-col items-center justify-center px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
                    Welcome to the Toy Store
                  </h1>
                  <div className="w-full max-w-md flex gap-2">
                    <Input
                      placeholder="Search for toys, brands and more"
                      className="bg-white/90 backdrop-blur-sm"
                    />
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Cute Cartoon Bear",
                price: "$10.99",
                image: "/item1.png",
              },
              {
                name: "Cute Cartoon Pig",
                price: "$12.99",
                image: "/item2.png",
              },
              {
                name: "Cute Cartoon Rabbit",
                price: "$9.99",
                image: "/item3.png",
              },
              {
                name: "Cute Cartoon Cat",
                price: "$15.99",
                image: "/item4.png",
              },
            ].map((product, index) => (
              <Link
                key={index}
                href={`/product/${index}`}
                className="group relative"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Collections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Special Collections</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Special Collection 1",
                price: "$10.99",
                image: "/item5.png",
              },
              {
                name: "Special Collection 2",
                price: "$12.99",
                image: "/item6.png",
              },
              {
                name: "Cute Cartoon Rabbit",
                price: "$9.99",
                image: "/item3.png",
              },
              {
                name: "Cute Cartoon Cat",
                price: "$15.99",
                image: "/item4.png",
              },
            ].map((product, index) => (
              <Link
                key={index}
                href={`/product/${index}`}
                className="group relative"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Best Sellers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Cute Cartoon Bear",
                price: "$10.99",
                image: "/item1.png",
              },
              {
                name: "Cute Cartoon Pig",
                price: "$12.99",
                image: "/item2.png",
              },
              {
                name: "Cute Cartoon Rabbit",
                price: "$9.99",
                image: "/item3.png",
              },
              {
                name: "Cute Cartoon Cat",
                price: "$15.99",
                image: "/item4.png",
              },
            ].map((product, index) => (
              <Link
                key={index}
                href={`/product/${index}`}
                className="group relative"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}