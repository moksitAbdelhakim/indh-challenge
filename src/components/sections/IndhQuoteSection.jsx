import React from 'react';
import kingImage from '/assets/king.png';

const IndhQuoteSection = () => {
  return (
    <section>
      <div className="container mx-auto px-0 py-12 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-[27.5rem] md:shrink-0">
          {/* Placeholder image */}
          <img src={kingImage} alt="King_Morocco" className="w-[27.5rem] h-auto rounded-lg shadow-lg" />
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-lg w-full md:w-1/2 md:order-2">
          {/* Placeholder text for the quote */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">رؤية ملكية مؤسسة</h2>
          <p className="text-foreground mb-4">
            [...] ولقد قررنا، بعون الله وتوفيقه، أن نتصدى لها بإطلاق مبادرة طموحة وخلاقة، باسم "المبادرة الوطنية للتنمية البشرية".
          </p>
          <p className="text-foreground mb-4">
            [...] إن المبادرة الوطنية للتنمية البشرية ليست مشروعا مرحليا، ولا برنامجا ظرفيا عابرا، وإنما هي ورش مفتوح باستمرار.
          </p>
          <p className="text-muted-foreground text-sm">مقتطفات من الخطاب الملكي السامي للمبادرة الوطنية للتنمية البشرية، الذي ألقاه صاحب الجلالة الملك محمد السادس نصره الله، بتاريخ 18 ماي 2005.</p>
        
        {/* Placeholder text definition */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">تعريف</h2>
          <p className="text-foregrou mb-4">
          المبادرة الوطنية التي أعلنها صاحب الجلالة الملك محمد السادس في 18 ماي 2005 هي مشروع اجتماعي تنموي وورشة ملكية مبدعة تهدف إلى مكافحة الفقر والإقصاء الاجتماعي والهشاشة.
          </p>
          <p className="text-foreground mb-4">
          تعتمد على استراتيجية شمولية تركز على التراث والمقاربة التشاركية مع مختلف الفاعلين التنمويين. تسعى المبادرة إلى تغيير أساليب العمل الاجتماعي عبر تطوير القدرات البشرية وتعكس إرادة سياسية عالية لمحاربة الفوارق الاجتماعية بسرعة وفعالية، مع تمويل مؤسسي خاص.
          </p>
          <p className="text-foreground">
          جاءت هذه المبادرة بعد تراكمات سلبية من سنوات الستينات والسبعينات، حيث كانت معدلات الأمية والفقر مرتفعة جداً، خاصة في القرى، وكان العديد من الجماعات القروية تفتقر إلى بنية اجتماعية أساسية.
            </p>
        </div>
      </div>
    </section >
  );
};

export default IndhQuoteSection;