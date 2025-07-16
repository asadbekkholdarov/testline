'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';

export default function Products() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: t('allProducts') },
    { id: 'express', label: t('express') },
    { id: 'poct', label: t('poct') },
    { id: 'blood', label: t('blood') },
  ];

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'express':
        return t('express');
      case 'poct':
        return t('poct');
      case 'blood':
        return t('blood');
      default:
        return category;
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('productsTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('productsSubtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`transition-all duration-200 
    ${
      activeFilter === category.id
        ? 'bg-blue-600 text-white'
        : 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white'
    }
  `}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90">
                      {getCategoryLabel(product.category)}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 line-clamp-2">
                  {product.title[language]}
                </CardTitle>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description[language]}
                </p>
                <Button
                  asChild
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href={`/products/${product.id}`}>
                    {t('viewDetails')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found for the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
