'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Upload, X, Save, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

interface NewsFormData {
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  excerpt: {
    uz: string;
    ru: string;
    en: string;
  };
  content: {
    uz: string;
    ru: string;
    en: string;
  };
  category: {
    uz: string;
    ru: string;
    en: string;
  };
  readTime: string;
  images: string[];
}

export default function ForNews() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [activeLanguage, setActiveLanguage] = useState<'uz' | 'ru' | 'en'>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  
  const [formData, setFormData] = useState<NewsFormData>({
    title: { uz: '', ru: '', en: '' },
    excerpt: { uz: '', ru: '', en: '' },
    content: { uz: '', ru: '', en: '' },
    category: { uz: '', ru: '', en: '' },
    readTime: '3 min read',
    images: []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    { id: 'product-launch', uz: 'Mahsulot taqdimoti', ru: 'Запуск продукта', en: 'Product Launch' },
    { id: 'company-news', uz: 'Kompaniya yangiliklari', ru: 'Новости компании', en: 'Company News' },
    { id: 'partnership', uz: 'Hamkorlik', ru: 'Партнерство', en: 'Partnership' },
    { id: 'research', uz: 'Tadqiqot', ru: 'Исследования', en: 'Research' },
    { id: 'technology', uz: 'Texnologiya', ru: 'Технология', en: 'Technology' }
  ];

  const handleInputChange = (field: keyof NewsFormData, value: any, lang?: 'uz' | 'ru' | 'en') => {
    if (lang && typeof formData[field] === 'object') {
      setFormData(prev => ({
        ...prev,
        [field]: {
          ...prev[field] as any,
          [lang]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setUploadedImages(prev => [...prev, result]);
          setFormData(prev => ({
            ...prev,
            images: [...prev.images, result]
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Check if at least one language has content for required fields
    const requiredFields = ['title', 'excerpt', 'content'] as const;
    
    requiredFields.forEach(field => {
      const hasContent = Object.values(formData[field]).some(value => value.trim() !== '');
      if (!hasContent) {
        newErrors[field] = `${field} is required in at least one language`;
      }
    });

    if (!formData.category.en && !formData.category.uz && !formData.category.ru) {
      newErrors.category = 'Category is required';
    }

    if (formData.images.length === 0) {
      newErrors.images = 'At least one image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate a unique ID for the news item
      const newsId = `news-${Date.now()}`;
      
      // Create the news item object
      const newsItem = {
        id: newsId,
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        date: new Date().toISOString(),
        readTime: formData.readTime,
        mainImage: formData.images[0] || '',
        images: formData.images
      };

      // In a real application, you would send this to your backend API
      // For now, we'll store it in localStorage and show success
      const existingNews = JSON.parse(localStorage.getItem('customNews') || '[]');
      existingNews.push(newsItem);
      localStorage.setItem('customNews', JSON.stringify(existingNews));

      setShowSuccess(true);
      
      // Reset form
      setFormData({
        title: { uz: '', ru: '', en: '' },
        excerpt: { uz: '', ru: '', en: '' },
        content: { uz: '', ru: '', en: '' },
        category: { uz: '', ru: '', en: '' },
        readTime: '3 min read',
        images: []
      });
      setUploadedImages([]);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error saving news:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    const selectedCategory = categories.find(cat => cat.id === categoryId);
    if (selectedCategory) {
      setFormData(prev => ({
        ...prev,
        category: {
          uz: selectedCategory.uz,
          ru: selectedCategory.ru,
          en: selectedCategory.en
        }
      }));
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Create News Article
          </h1>
          <p className="text-lg text-gray-600">
            Add a new news article that will appear on the news page
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              News article created successfully! It will now appear on the news page.
            </p>
          </div>
        )}

        {/* Language Selector */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              Language
              <div className="flex gap-2">
                {(['uz', 'ru', 'en'] as const).map((lang) => (
                  <Button
                    key={lang}
                    variant={activeLanguage === lang ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveLanguage(lang)}
                  >
                    {lang.toUpperCase()}
                  </Button>
                ))}
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <Card>
            <CardHeader>
              <CardTitle>Title ({activeLanguage.toUpperCase()})</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                value={formData.title[activeLanguage]}
                onChange={(e) => handleInputChange('title', e.target.value, activeLanguage)}
                placeholder={`Enter title in ${activeLanguage.toUpperCase()}`}
                className={errors.title ? 'border-red-500' : ''}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </CardContent>
          </Card>

          {/* Excerpt */}
          <Card>
            <CardHeader>
              <CardTitle>Excerpt ({activeLanguage.toUpperCase()})</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.excerpt[activeLanguage]}
                onChange={(e) => handleInputChange('excerpt', e.target.value, activeLanguage)}
                placeholder={`Enter excerpt in ${activeLanguage.toUpperCase()}`}
                rows={3}
                className={errors.excerpt ? 'border-red-500' : ''}
              />
              {errors.excerpt && (
                <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>
              )}
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <CardTitle>Content ({activeLanguage.toUpperCase()})</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.content[activeLanguage]}
                onChange={(e) => handleInputChange('content', e.target.value, activeLanguage)}
                placeholder={`Enter full content in ${activeLanguage.toUpperCase()}`}
                rows={10}
                className={errors.content ? 'border-red-500' : ''}
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">{errors.content}</p>
              )}
            </CardContent>
          </Card>

          {/* Category and Read Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={handleCategorySelect}>
                  <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                )}
                {formData.category.en && (
                  <div className="mt-2">
                    <Badge variant="secondary">{formData.category.en}</Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Read Time</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  value={formData.readTime}
                  onChange={(e) => handleInputChange('readTime', e.target.value)}
                  placeholder="e.g., 3 min read"
                />
              </CardContent>
            </Card>
          </div>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Upload images for your news article</p>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('image-upload')?.click()}
                  >
                    Choose Images
                  </Button>
                </div>

                {errors.images && (
                  <p className="text-red-500 text-sm">{errors.images}</p>
                )}

                {/* Image Preview */}
                {uploadedImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`Upload ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                        {index === 0 && (
                          <Badge className="absolute bottom-2 left-2 bg-blue-600">
                            Main Image
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/news')}
            >
              <Eye className="w-4 h-4 mr-2" />
              View News Page
            </Button>
            
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setFormData({
                    title: { uz: '', ru: '', en: '' },
                    excerpt: { uz: '', ru: '', en: '' },
                    content: { uz: '', ru: '', en: '' },
                    category: { uz: '', ru: '', en: '' },
                    readTime: '3 min read',
                    images: []
                  });
                  setUploadedImages([]);
                  setErrors({});
                }}
              >
                Clear Form
              </Button>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Publishing...' : 'Publish Article'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}