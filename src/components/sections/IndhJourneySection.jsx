// Suggested code may be subject to a license. Learn more: ~LicenseLog:471694772.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:696914078.
import React, { useState } from 'react';
import IndhJourneyCard from '../ui/IndhJourneyCard';

const IndhJourneySection = () => {
  // Placeholder data for the three stages
  const stages = [
    {
      id: 1,
      title: 'المرحلة الأولى',
      years: '(2010 - 2005)',
      description: 'مرحلة تأسيسية أدخلت نموذجا جديدا للعمل الاجتماعي من خلال استهداف عدد محدود من المجالات الترابية الهشة لمواجهة تحديات الفقر والهشاشة.',
      buttonText: 'اقرأ المزيد',
      detailedContent: {
        intro: 'في ظل الرؤية المتبصرة لصاحب الجلالة الملك محمد السادس، نصره الله، أرست هذه المرحلة الأولى أسس مقاربة جديدة للتدخل في مجال التنمية البشرية. وقد تم خلال هذه الفترة إرساء حكامة تشاركية، وتوسيع الولوج إلى الخدمات الاجتماعية الأساسية، وإطلاق أولى الأنشطة المدرة للدخل، مع التركيز على المناطق القروية والحضرية الأكثر هشاشة.',
        programs: [
          {
            title: 'محاربة الفقر في الوسط القروي',
            description: 'استهدف 403 جماعات قروية ذات هشاشة مرتفعة.',
          },
          {
            title: 'محاربة الإقصاء الاجتماعي في الوسط الحضري',
            description: 'شملت البرامج 284 حيا يفتقر إلى التجهيزات الأساسية في أكبر المدن.',
          },
          {
            title: 'محاربة الهشاشة',
            description: 'استهدفت 8 فئات اجتماعية هشة، مثل الأشخاص في وضعية تشرد، المسنين بدون موارد، والنساء في وضعية صعبة.',
          },
          {
            title: 'البرنامج الأفقي',
            description: 'خصص للجماعات غير المستهدفة باقي البرامج، لتشجيع المشاريع المبتكرة التي تستجيب لحاجات خاصة.',
          },
        ],
        approach: [
          'إجراء تشخيصات تشاركية في أكثر من 10,000 جماعة لتحديد الأولويات.',
          'إحداث أقسام العمل الاجتماعي (DAS) كآليات تقنية محلية.',
          'تشكيل هيئات تلاؤم (سلطات، منتخبون، مجتمع مدني) على مختلف المستويات الترابية.',
          'اعتماد معايير دقيقة للاستهداف بناءً على مؤشرات موضوعية للفقر.',
        ],
        keyFigures: [
          {
            title: 'إطلاق ما يقارب 000 23 مشروع',
          },
          {
            title: 'تعزيز دور أقسام العمل الاجتماعي (DAS)',
          },
          {
            title: 'تغيير النسيج الجمعوي وظهور نخب جديدة',
          },
        ],
        testimonies: [
        ],
        images: [
        ],
        videos: [
          {
            url: '/src/assets/indh_stage1.mp4',
            title: 'ورش ملكي أطلق سنة 2005، المبادرة الوطنية للتنمية البشرية فاعل رئيسي للتنمية البشرية.'
          }
        ]
      },
    },
    {
      id: 2,
      title: 'المرحلة الثانية',
      years: '(2018 - 2011)',
      description: 'أرسى خلالها نطاق التدخل، وتم تعزيز المكتسبات وهيكلة العمل المدني عبر آليات حكامة معززة.',
      buttonText: 'اقرأ المزيد',
      detailedContent: {
        intro: 'خلال المرحلة الثانية، تم توسيع نطاق تدخل المبادرة الوطنية للتنمية البشرية وتعزيز المكتسبات التي تحققت في المرحلة الأولى. تم التركيز على هيكلة العمل المدني وتقوية آليات الحكامة لضمان فعالية وشفافية أكبر في تنفيذ المشاريع.',
        programs: [
          {
            title: 'برنامج محاربة الفقر في الوسط القروي',
            description: 'توسع ليشمل 702 جماعة وفق معايير محدّثة.',
          },
          {
            title: 'برنامج محاربة الإقصاء الاجتماعي في الوسط الحضري',
            description: 'شمل 532 حيا ذات الأولوية.',
          },
          {
            title: 'برنامج محاربة الهشاشة',
            description: 'استهدف 10 فئات اجتماعية هشة.'
          },
          {
            title: 'البرنامج الأفقي',
            description: 'موجه للجماعات غير المشمولة بالبرامج الأخرى.'
          },
          {
            title: 'برنامج التأهيل الترابي (PMAT)',
            description: 'أطلق سنة 2011، واستهدف 3,300 دوار في 22 إقليماً، مع تركيز على تحسين البنية التحتية (ماء، كهرباء، طرق، تعليم، صحة).'
          }
        ],
        approach: [
          'تعميم إعداد البرنامج المتعدد السنوات للتنمية البشرية: تم وضع هذه البرامج بناءً على تشخيصات ميدانية تشاركية، مما أتاح برمجة ثلاث سنوات تتسم بالانسجام والملاءمة مع أولويات كل جماعة ترابية.',
          'دعم القدرات المحلية: من خلال تأهيل مهني لأقسام العمل الاجتماعي (DAS)، والمساهمة في تنظيم وتقوية النسيج الجمعوي بشكل تدريجي ومنهجي.',
          'تعزيز آليات التشاور والحكامة: عبر إشراك أوسع للجان الإقليمية والجهوية، بما يرسخ ممارسات الحكامة التشاركية ويعزز التنسيق المحلي.',
          'ضبط وتتبع دقيق للتدخلات: من خلال اعتماد أدوات موحدة لتدبير المالي والتقني، مما ساعد على ضمان الشفافية وتحسين فعالية المشاريع المنجزة.'
        ],
        keyFigures: [
          {
            title: 'إنجاز أكثر من 21 300 مشروع',
          },
          {
            title: 'حوالي 6,6 ملايين مستفيد مباشر، أغلبهم في الوسط القروي',
          },
          {
            title: 'تعبئة نحو 18 مليار درهم، بنسبة تمويل مشترك كبيرة'
          },
          {
            title: 'تنظيم أكثر من 581 000 يوم تكويني'
          },
          {
            title: 'مشاركة قرابة 14 000 جمعية وتعاونية محلية'
          }
        ],
        testimonies: [
        ],
        images: [
        ],
      },
    },
    {
      id: 3,
      title: 'المرحلة الثالثة',
      years: '(2025 - 2019)',
      description: 'تميزت هذه المرحلة بتحول استراتيجي، من خلال إعادة تركيز المبادرة الوطنية للتنمية البشرية على تنمية الرأسمال البشري عبر مقاربة مندمجة ومستدامة.',
      buttonText: 'اقرأ المزيد',
      detailedContent: {
        intro: 'ترتكز المرحلة الثالثة على تنمية الرأسمال البشري للأجيال الصاعدة، وتحسين ظروف عيش الفئات الهشة، وإدماج الشباب في التنمية الاقتصادية. تتميز هذه المرحلة بمقاربة مندمجة ومستدامة، تركز على النتائج والابتكار الاجتماعي.',
        programs: [
          {
            title: 'تدارك الخصاص على مستوى البنيات التحتية، والخدمات الأساسية، بالمجالات الترابية الأقل تجهيزا',
            description: 'تقليص الفوارق الاجتماعية والمجالية، من خلال استهداف المناطق ذات الخصاص في التجهيزات الأساسية عبر تدخلات ميدانية مباشرة، إلى جانب دعم تكميلي لبرنامج تقليص الفوارق المجالية والاجتماعية بالوسط القروي.',
          },
          {
            title: 'مواكبة الأشخاص في وضعية هشة',
            description: 'تحسين ظروف التكفل بالأشخاص في وضعية هشاشة قصوى، من خلال دعم مهيكل للمراكز المتخصصة، ويرتكز التدخل على محاور متعددة تشمل: تأهيل الخدمات المقدمة، تعزيز مهنية الفرق العاملة، إعادة هيكلة العرض الترابي، وتنسيق جهود مختلف الفاعلين عبر شبكات متكاملة.',
          },
          {
            title: 'تحسين الدخل والإدماج الاقتصادي للشباب',
            description: 'تعزيز الاستقلالية الاقتصادية للشباب من خلال دعم ريادة الأعمال، وتقوية قابلية التشغيل، وتحفيز ديناميات خلق القيمة على المستوى المحلي. ويرتكز على منظومة من آليات المواكبة، التوجيه، والتمويل، يتم تفعيلها بتنسيق وثيق مع الفاعلين العموميين والخواص والمجتمع المدني.'
          },
          {
            title: 'تعزيز الرأسمال البشري للأجيال الصاعدة',
            description: 'يهدف هذا البرنامج إلى ضمان انطلاقة جيدة لكل طفل في الحياة، من خلال الاشتغال على محددات التنمية البشرية اللامادية منذ السنوات الأولى. ويستهدف بالدرجة الأولى الأطفال والشباب المنحدرين من الأوساط الهشة.'
          }
        ],
        approach: [
          ' التدخلات خمسة مجالات أساسية: الصحة، التعليم، الولوج إلى التزويد بالماء الصالح للشرب، الكهربة القروية، والبنية التحتية الطرقية.',
          'اعتماد البرنامج 3 على أربعة محاور متكاملة: منصات الشباب, دعم قابلية التشغيل, دعم ريادة الأعمال, تحسين الدخل.',
          'اعتماد البرنامج 3 على ثلاثة محاور رئيسية: مصحة وتغذية الأم والطفل, تعميم التعليم الأولي في الوسط القروي,دعم التمدرس والمواكبة التربوية للأطفال.',
        ],
        keyFigures: [
          {
            title: 'فك العزلة الطرقية: 935 كلم من الطرق, 795 كلم من المسالك, 259 منشأة فنية.',
          },
          {
            title: 'التزويد بالماء الصالح للشرب: أكثر من 88 076 أسرة',
          },
          {
            title: 'الكهربة القروية: أكثر من 20 910 أسرة ومؤسسة'
          },
          {
            title: 'التعليم: حوالي 337 000 مستفيد'
          },
          {
            title: 'الصحة: أكثر من 2.9 مليون مستفيد'
          },
          {
            title: 'دعم 2 022 مركزًا اجتماعيًا'
          },
          {
            title: 'تحسين جودة الخدمات وقدرات مراكز الاستقبال'
          },
          {
            title: '130 منصة للشباب (+3 منصات متنقلة)'
          },
          {
            title: ' تحسين الدخل: 5 100 مشروعا ممولا'
          },
          {
            title: ' دعم ريادة الأعمال: 11 100 مشروعا ممولا'
          },
          {
            title: 'اعادة التهييء 94 مؤسسة صحية'
          },
          {
            title: '  اقتناء 401 جهازاً طبياً'
          },
          {
            title: ' اقتناء 266 سيارة إسعاف / ووحدة طبية متنقلة'
          },
          {
            title: ' داراً للأمومة: 441 عملية اعادة التأهيل او احداث'
          },
          {
            title: 'وحدة للتعليم الأولي (11.550 قاعة دراسية)'
          },
          {
            title: '394 000 طفل(ة) مستفيد على مستوى ما يقرب من 11 400 دوار'
          },
          {
            title: '692 000 تلميذ وتلميذة استفادوا من برامج الدعم المدرسي'
          },
          {
            title: '1 067 دار للطالب(ة)'
          },
          {
            title: '4 950 وسيلة نقل مدرسي'
          }
        ],
        testimonies: [
          {
            quote: 'المبادرة الوطنية للتنمية البشرية أعطت زخما كبيرا لمشروعها ومكنتها من تطويره وتوسيعه"، مضيفة "بفضل هذا الدعم، أصبحت أتمتع باستقلالي المالي، وأدبر شؤوني بنفسي. لقد أصبح لدي، الآن، زبائن مخلصين، وأشعر بالفخر الكبير بما أنجزته حتى الآن',
            beneficiary: 'كريمة معروفي',
            source: 'https://www.africa4press.com/art-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9-%D8%AF%D8%A7%D8%B9%D9%85-%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A-%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A7%D9%84%D9%86%D8%B3%D8%A7%D8%A1-%D8%A8%D9%88%D8%AC%D8%AF%D8%A9-%D8%A3%D9%86%D8%AC%D8%A7%D8%AF-africa4press-28158.html#:~:text=%D9%88%D9%82%D8%A7%D9%84%D8%AA%3A%20,%D8%A7%D9%84%D8%B0%D9%8A%20%D9%8A%D8%AC%D9%85%D8%B9%20%D8%A8%D9%8A%D9%86%20%D8%A7%D9%84%D8%A3%D8%B5%D8%A7%D9%84%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1%D8%A9'
          },
          {
            quote: 'استفدت من دعم المبادرة الوطنية للتنمية البشرية لاقتناء المعدات اللازمة، وبفضل هذه المساعدة تمكنت من توسيع مشروعي بشكل كبير',
            beneficiary: 'هدى بوفراح',
            source: 'https://www.africa4press.com/art-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9-%D8%AF%D8%A7%D8%B9%D9%85-%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A-%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A7%D9%84%D9%86%D8%B3%D8%A7%D8%A1-%D8%A8%D9%88%D8%AC%D8%AF%D8%A9-%D8%A3%D9%86%D8%AC%D8%A7%D8%AF-africa4press-28158.html#:~:text=%D8%A3%D9%85%D8%A7%20%D9%87%D8%AF%D9%89%20%D8%A8%D9%88%D9%81%D8%B1%D8%A7%D8%AD%D8%8C%20%D8%B5%D8%A7%D8%AD%D8%A8%D8%A9%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%D9%88%D8%A5%D8%B4%D9%87%D8%A7%D8%B1%D8%8C%20%D9%81%D8%B5%D8%B1%D8%AD%D8%AA%3A%20%22%D8%A7%D8%B3%D8%AA%D9%81%D8%AF%D8%AA%20%D9%85%D9%86%20%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9%20%D9%84%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9%20%D9%84%D8%A7%D9%82%D8%AA%D9%86%D8%A7%D8%A1%20%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D9%84%D8%A7%D8%B2%D9%85%D8%A9%D8%8C%20%D9%88%D8%A8%D9%81%D8%B6%D9%84%20%D9%87%D8%B0%D9%87%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D8%AA%D9%85%D9%83%D9%86%D8%AA%20%D9%85%D9%86%20%D8%AA%D9%88%D8%B3%D9%8A%D8%B9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A%20%D8%A8%D8%B4%D9%83%D9%84%20%D9%83%D8%A8%D9%8A%D8%B1%22.'
          },
        ],
        images: [
        ],
        videos: [
          {
            src: 'assets',
            url: '/src/assets/ind_stage3.mp4',
            title: 'المبادرة الوطنية للتنمية البشرية - المرحلة الثالثة'
          },
          {
            src: 'youtub',
            url: '5lWaZUUJAoY',
            title: 'دار للمسنين مشروع اجتماعي يبرز دور المبادرة الوطنية للتنمية البشرية'
          },
          {
            src: 'youtub',
            url: '-glBHN3GSrc',
            title: 'التمكين المتواصل للعنصر البشري'
          }
        ]
      },
    },
  ];

  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <section id="timeline" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-12">
          مسار المبادرة الوطنية للتنمية البشرية: 20 عاماً من التقدم
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <IndhJourneyCard
              key={stage.id}
              id={stage.id}
              title={stage.title}
              years={stage.years}
              description={stage.description}
              buttonText={stage.buttonText} // Note: This prop might not be needed in the Card if it handles its own expanded state
              openCardId={openCardId}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
        {/* Detailed Content Section */}
        {openCardId !== null && (
          <div className="mt-12 py-8 bg-background"> {/* Use bg-background for the main section */}
            {/* Find the selected stage based on openCardId */}
            {stages.find(stage => stage.id === openCardId) && (
              <div className="container mx-auto px-4 text-right"> {/* Use container for centering and padding */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {stages.find(stage => stage.id === openCardId).title} | {stages.find(stage => stage.id === openCardId).years}
                </h3>
                <p className="text-lg text-foreground mb-8">{stages.find(stage => stage.id === openCardId).detailedContent.intro}</p>

                {/* Programs */}
                <h4 className="text-xl font-semibold text-foreground mb-4">البرامج التي تم تنفيذها في هذه المرحلة</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {stages.find(stage => stage.id === openCardId).detailedContent.programs.map((program, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                      {/* You can add icons here if needed in the future */}
                      <h5 className="text-lg font-bold text-foreground mb-2">{program.title}</h5>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  ))}
                </div>

                {/* Approach (if applicable) */}
                {stages.find(stage => stage.id === openCardId).detailedContent.approach && stages.find(stage => stage.id === openCardId).detailedContent.approach.length > 0 && (
                  <>
                    <h4 className="text-xl font-semibold text-foreground mb-4">المرتكزات المنهجية</h4>
                    <ul className="list-disc list-inside text-foreground space-y-2 mb-8">
                      {stages.find(stage => stage.id === openCardId).detailedContent.approach.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Key Figures */}
                <h4 className="text-xl font-semibold text-foreground mb-4">الأرقام الرئيسية {stages.find(stage => stage.id === openCardId).years}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {stages.find(stage => stage.id === openCardId).detailedContent.keyFigures.map((figure, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                      {/* You can add icons here if needed in the future */}
                      <h5 className="text-lg font-bold text-foreground mb-2">{figure.title}</h5>
                      {figure.description && <p className="text-sm text-muted-foreground">{figure.description}</p>}
                    </div>
                  ))}
                </div>

                {/* Testimonies */}
                {stages.find(stage => stage.id === openCardId).detailedContent.testimonies && stages.find(stage => stage.id === openCardId).detailedContent.testimonies.length > 0 && (
                  <>
                    <h4 className="text-xl font-semibold text-foreground mb-4">شهادات المستفيدين</h4>
                    <div className="space-y-6 mb-8">
                      {stages.find(stage => stage.id === openCardId).detailedContent.testimonies.map((testimony, index) => (
                        <div key={index} className="bg-muted p-4 rounded-lg italic">
                          <p className="text-foreground mb-2">"{testimony.quote}"</p>
                          {testimony.source && (
                            <a href={testimony.source} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline flex items-center justify-start">
                              المصدر <span className="ml-1">→</span>
                            </a>
                          )}
                          <p className="text-muted-foreground text-sm text-left">- {testimony.beneficiary}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Images */}
                {stages.find(stage => stage.id === openCardId).detailedContent.images && stages.find(stage => stage.id === openCardId).detailedContent.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {stages.find(stage => stage.id === openCardId).detailedContent.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Phase ${openCardId} Image ${index + 1}`}
                        className="rounded-md w-full h-auto object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Example: Videos specific to the phase */}
                {stages.find(stage => stage.id === openCardId).detailedContent.videos?.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">فيديوهات</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {stages.find(stage => stage.id === openCardId).detailedContent.videos.map((video, index) => (
                        <div key={index} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          {video.src === 'assets' ? (
                          <video
                            src={video.url}
                            title={video.title}
                            controls
                            preload="metadata" // Prevent loading the whole video upfront
                              className="absolute top-0 left-0 w-full h-full rounded-md pointer-events-auto"
                            />
                          ) : (
                            <iframe
                              src={`https://www.youtube.com/embed/${video.url}`}
                              title={video.title}
                              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                              className="absolute top-0 left-0 w-full h-full rounded-md pointer-events-auto"
                            ></iframe>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        )}

        {/* TDOD: Timeline visualization can be added here */}

        {/* Add more sections as needed */}
        {/* Example: Timeline visualization specific to the phase */}
        {/* {stages.find(stage => stage.id === openCardId).detailedContent.phaseTimeline && (
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">الجدول الزمني للمرحلة</h4>
                    // Render phase-specific timeline here
                  </div>
                )} */}
      </div>
    </section>
  );
};

export default IndhJourneySection;