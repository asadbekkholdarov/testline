'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Globe, Heart, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Timeline from '@/components/Timeline';

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

      {/* Timeline Section */}
      <div className="py-20">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-6">
          {t('timelineTitle')}
        </h2>
        <br />
        <div className="py-20">
          <Timeline language={language} />
        </div>
      </div>

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

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'uz' ? 'Sertifikatlar' :
               language === 'ru' ? 'Сертификаты' :
               'Certifications'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'uz' ? 'Bizning mahsulotlarimiz xalqaro standartlarga muvofiq sertifikatlangan' :
               language === 'ru' ? 'Наша продукция сертифицирована в соответствии с международными стандартами' :
               'Our products are certified according to international standards'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-50 relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/HBs_Ag_Cassette.jpg"
                    alt="HBs Ag Cassette Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HBs Ag Cassette
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/anti_tp.jpg"
                    alt="Anti TP Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  Anti TP
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/hbs_ag_hcv.jpg"
                    alt="HBs Ag HCV Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HBs Ag HCV
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/hav_igm.jpg"
                    alt="HAV IgM Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HAV IgM
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/hbs_ag_strip.jpg"
                    alt="HBs Ag Strip Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HBs Ag Strip
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/hcv_cassette.jpg"
                    alt="HCV Cassette Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HCV Cassette
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/hcv_strip.jpg"
                    alt="HCV Strip Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HCV Strip
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/hp_ag_cassette.jpg"
                    alt="HP Ag Cassette Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HP Ag Cassette
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/iso_13485.jpg"
                    alt="ISO 13485 Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  ISO 13485
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/iso_9001.jpg"
                    alt="ISO 9001 Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  ISO 9001
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/hiv_1.2.jpg"
                    alt="HIV 1.2 Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HIV 1.2
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/certifications/images/hp_ab_cassette.jpg"
                    alt="HP Ab Cassette Certificate"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HP Ab Cassette
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}