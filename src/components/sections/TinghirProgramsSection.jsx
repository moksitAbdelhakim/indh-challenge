import FlippableProgramCard from '../ui/FlippableProgramCard';

const TinghirProgramsSection = () => {
  {/* Define the data for Tinghir programs */ }
  const tinghirPrograms = [
    {
      id: 1,
      title: 'قطاع التعليم',
      image: '/src/assets/enseignement_primaire_tinghir.jpg',
      content: [
        'بناء وتجهيز 480 وحدة للتعليم الأولي في مختلف جماعات الإقليم، ضمن برنامج "الدفع بالرأسمال البشري للأجيال الصاعدة"، بهدف دعم تمدرس الأطفال بالوسط القروي ومحاربة الهدر المدرسي.',
        'توزيع الكتب واللوازم المدرسية في إطار المبادرة الملكية "مليون محفظة"، حيث تم تخصيص غلاف مالي ناهز 7.65 مليون درهم لتلاميذ المستويين الابتدائي والإعدادي بالوسطين الحضري والقروي.'
      ], 
    },
    {
      id: 2,
      title: 'قطاع الصحة',
      image: '/src/assets/indh_sante_tinghir.jpg',
      content: [
        'اقتناء أربع وحدات طبية متنقلة (طب العيون، النساء والتوليد، طب الأسنان، تشخيص سرطان الثدي) بمبلغ إجمالي فاق 6.17 مليون درهم، لتحسين ولوج ساكنة العالم القروي إلى الخدمات الصحية.',
        'اقتناء ثلاث سيارات إسعاف لفائدة جماعات أسول، تودغى السفلى وتلمي بحوالي 1.4 مليون درهم.',
        'تجهيز مراكز تصفية الدم وتنغير وقلعة مكونة والنيف بمبالغ تفوق 4.6 مليون درهم.',
        'بناء وتجهيز دور الأمومة في عدة جماعات، بمبلغ قدره 6.98 مليون درهم، وتأهيل دور الولادة في جماعات أخرى بـ1.36 مليون درهم.'

      ], 
    },
    {
      id: 3,
      title: 'التمكين الاقتصادي للنساء',
      image: '/src/assets/femme_cooperative.jpg',
      content: [
        'تنظيم دورات تكوينية لفائدة حوالي 30 تعاونية نسوية، لتطوير مهارات ريادة الأعمال وتسهيل الولوج للأسواق والأدوات الرقمية، ضمن مشروع (WOMENA-GIZ)'
      ], 
    },
    {
      id: 4,
      title: 'البنيات التحتية والخدمات الأساسية',
      image: '/src/assets/INDH_tinghir_centre.jpg',
      content: [
        'إحداث مراكز صحية، ملاعب، قناطر، ومراكز للإدماج السوسيو اقتصادي.',
        'مشاريع للربط بشبكات الماء والكهرباء، تقوية الطرق، ودعم الفلاحة والتعاونيات.'
      ], 
    },
    {
      id: 5,
      title: 'برامج أخرى',
      image: '/src/assets/zaafarane-boulmane.jpg',
      content: [
        'برنامج محاربة الفقر بالوسط القروي: 23 مشروعًا بقيمة 12.95 مليون درهم.',
        'برنامج الأنشطة المدرة للدخل: 26 مشروعًا بقيمة 3.32 مليون درهم.',
        'تنمية سلسلة الزعفران: 9 مشاريع بـ1.34 مليون درهم.',
        'التكوين وتقوية القدرات: 8 مشاريع بـ553 ألف درهم.',
        'التنشيط الثقافي والرياضي والديني: 6 مشاريع بـ853 ألف درهم.'
      ], 
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-12">
          نظرة شاملة على أبرز مشاريع المبادرة الوطنية للتنمية البشرية (INDH) بإقليم تنغير خلال الفترة من 2005 إلى 2025، موزعة حسب القطاعات:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program cards will be added here */}
          {tinghirPrograms.map(program => (
            <FlippableProgramCard key={program.id} program={program} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default TinghirProgramsSection;