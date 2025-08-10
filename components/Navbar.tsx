'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    // Products dropdown will be inserted here
    { href: '/news', label: t('news') },
    { href: '/contact', label: t('contact') },
  ];

  const languages = [
    { code: 'uz' as Language, label: "O'zbek" },
    { code: 'ru' as Language, label: 'Русский' },
    { code: 'en' as Language, label: 'English' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Testline Logo"
              width={150}
              height={120}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-medium transition-colors cursor-pointer hover:text-blue-600 ${
                    isActive('/products') ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {t('products')}
                  <ChevronDown className="w-4 h-4 ml-1 inline" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem asChild>
                  <Link href="/products">{t('allProducts')}</Link>
                </DropdownMenuItem>
                
                {/* Rapid Diagnostic Tests with submenu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center justify-between w-full px-2 py-1.5 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground cursor-pointer">
                      {language === 'uz' ? 'Tezkor diagnostika testlari' : 
                       language === 'ru' ? 'Экспресс-диагностические тесты' : 
                       'Rapid Diagnostic Tests'}
                      <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" className="w-64">
                    <DropdownMenuItem asChild>
                      <Link href="/products/rapid-diagnostic-tests">
                        {language === 'uz' ? 'Barcha tezkor testlar' :
                         language === 'ru' ? 'Все экспресс-тесты' :
                         'All Rapid Tests'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/products/rapid-diagnostic-tests/infectious-diseases">
                        {language === 'uz' ? 'Yuqumli kasalliklar' :
                         language === 'ru' ? 'Инфекционные заболевания' :
                         'Infectious Diseases'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/products/rapid-diagnostic-tests/maternal-child-health">
                        {language === 'uz' ? 'Ona va bola salomatligi' :
                         language === 'ru' ? 'Здоровье матери и ребенка' :
                         'Maternal & Child Health'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/products/rapid-diagnostic-tests/gastrointestinal-fecal">
                        {language === 'uz' ? 'Oshqozon-ichak va najas' :
                         language === 'ru' ? 'Желудочно-кишечные и фекальные' :
                         'Gastrointestinal & Fecal'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/products/rapid-diagnostic-tests/cardiac-metabolic">
                        {language === 'uz' ? 'Yurak va metabolik' :
                         language === 'ru' ? 'Сердечные и метаболические' :
                         'Cardiac & Metabolic'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/products/rapid-diagnostic-tests/oncology">
                        {language === 'uz' ? 'Onkologiya' :
                         language === 'ru' ? 'Онкология' :
                         'Oncology'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/products/rapid-diagnostic-tests/drug-of-abuse">
                        {language === 'uz' ? 'Giyohvand moddalar' :
                         language === 'ru' ? 'Наркотические вещества' :
                         'Drug of Abuse'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/products/rapid-diagnostic-tests/others">
                        {language === 'uz' ? 'Boshqalar' :
                         language === 'ru' ? 'Другие' :
                         'Others'}
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenuItem asChild>
                  <Link href="/products/poct-fia-platform">POCT FIA Platform</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/blood-glucose-monitoring">
                    {language === 'uz' ? 'Qon shakarini nazorat qilish' :
                     language === 'ru' ? 'Мониторинг глюкозы крови' :
                     'Blood Glucose Monitoring'}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Globe className="w-4 h-4 mr-1" />
                  {language.toUpperCase()}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-blue-50' : ''}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-blue-600 px-3 py-2 rounded-md ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Products Dropdown for Mobile */}
              <div className="px-3">
                <p className="text-base font-medium text-gray-700 mb-1">
                  {t('products')}
                </p>
                <div className="flex flex-col space-y-1">
                  <Link
                    href="/products"
                    className="text-gray-700 hover:text-blue-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('allProducts')}
                  </Link>
                  
                  {/* Rapid Diagnostic Tests with subcategories */}
                  <div className="ml-2">
                    <Link
                      href="/products/rapid-diagnostic-tests"
                      className="text-gray-700 hover:text-blue-600 py-1 font-medium block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {language === 'uz' ? 'Tezkor diagnostika testlari' : 
                       language === 'ru' ? 'Экспресс-диагностические тесты' : 
                       'Rapid Diagnostic Tests'}
                    </Link>
                    <div className="ml-2 flex flex-col space-y-1">
                      <Link
                        href="/products/rapid-diagnostic-tests/infectious-diseases"
                        className="text-gray-600 hover:text-blue-600 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {language === 'uz' ? 'Yuqumli kasalliklar' :
                         language === 'ru' ? 'Инфекционные заболевания' :
                         'Infectious Diseases'}
                      </Link>
                      <Link
                        href="/products/rapid-diagnostic-tests/maternal-child-health"
                        className="text-gray-600 hover:text-blue-600 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {language === 'uz' ? 'Ona va bola salomatligi' :
                         language === 'ru' ? 'Здоровье матери и ребенка' :
                         'Maternal & Child Health'}
                      </Link>
                      <Link
                        href="/products/rapid-diagnostic-tests/gastrointestinal-fecal"
                        className="text-gray-600 hover:text-blue-600 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {language === 'uz' ? 'Oshqozon-ichak va najas' :
                         language === 'ru' ? 'Желудочно-кишечные и фекальные' :
                         'Gastrointestinal & Fecal'}
                      </Link>
                      <Link
                        href="/products/rapid-diagnostic-tests/cardiac-metabolic"
                        className="text-gray-600 hover:text-blue-600 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {language === 'uz' ? 'Yurak va metabolik' :
                         language === 'ru' ? 'Сердечные и метаболические' :
                         'Cardiac & Metabolic'}
                      </Link>
                      <Link
                        href="/products/rapid-diagnostic-tests/oncology"
                        className="text-gray-600 hover:text-blue-600 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {language === 'uz' ? 'Onkologiya' :
                         language === 'ru' ? 'Онкология' :
                         'Oncology'}
                      </Link>
                      <Link
                        href="/products/rapid-diagnostic-tests/drug-of-abuse"
                        className="text-gray-600 hover:text-blue-600 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {language === 'uz' ? 'Giyohvand moddalar' :
                         language === 'ru' ? 'Наркотические вещества' :
                         'Drug of Abuse'}
                      </Link>
                      <Link
                        href="/products/rapid-diagnostic-tests/others"
                        className="text-gray-600 hover:text-blue-600 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {language === 'uz' ? 'Boshqalar' :
                         language === 'ru' ? 'Другие' :
                         'Others'}
                      </Link>
                    </div>
                  </div>
                  
                  <Link
                    href="/products/poct-fia-platform"
                    className="text-gray-700 hover:text-blue-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    POCT FIA Platform
                  </Link>
                  <Link
                    href="/products/blood-glucose-monitoring"
                    className="text-gray-700 hover:text-blue-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === 'uz' ? 'Qon shakarini nazorat' :
                     language === 'ru' ? 'Мониторинг глюкозы' :
                     'Blood Glucose'}
                  </Link>
                </div>
              </div>
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-blue-600 px-3 py-2 rounded-md ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <p className="text-sm font-medium text-gray-500 mb-2 px-3">
                  Language
                </p>
                <div className="flex flex-col space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        language === lang.code
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
