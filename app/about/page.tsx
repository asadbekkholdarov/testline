'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Globe, Heart, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { licenses } from '@/data/licenses';

export default function About() {
  const { t, language } = useLanguage();

  const stats = [
    { icon: Users, label: t('happyClients'), value: t('happyClientsValue') },
    {
      icon: Award,
      label: t('yearsOfExperience'),
      value: t('yearsOfExperienceValue'),
    },
    {
      icon: Globe,
      label: t('countriesServed'),
      value: t('countriesServedValue'),
    },
    { icon: Heart, label: t('livesImproved'), value: t('livesImprovedValue') },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {t('aboutTitle')}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('aboutContent')}
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical laboratory"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('mission')} & {t('vision')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-blue-600 mr-3" />
                    {t('mission')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('missionText')}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-blue-600 mr-3" />
                    {t('vision')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('visionText')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('licensesTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('licensesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenses.map((license) => (
              <Card
                key={license.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <FileCheck className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {license.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-gray-600 text-sm">
                    {license.description[language]}
                  </p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>
                      <span className="font-medium">
                        {language === 'uz'
                          ? 'Berilgan sana:'
                          : language === 'ru'
                          ? 'Дата выдачи:'
                          : 'Issue Date:'}
                      </span>{' '}
                      {new Date(license.issueDate).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-medium">
                        {language === 'uz'
                          ? 'Amal qilish muddati:'
                          : language === 'ru'
                          ? 'Действителен до:'
                          : 'Valid Until:'}
                      </span>{' '}
                      {new Date(license.validUntil).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
