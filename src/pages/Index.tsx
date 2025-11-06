import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-montserrat">PRODFILM</h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-accent transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-accent transition-colors">Процесс</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-accent transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl animate-fade-in">
            <h2 className="text-7xl md:text-8xl font-bold font-montserrat mb-6 leading-tight">
              Создаём видео,<br />которые продают
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
              Полный цикл видеопродакшена: от идеи до финального монтажа. 
              Работаем с брендами, которые ценят качество.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection('portfolio')} className="text-lg px-8">
                Смотреть работы
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold font-montserrat mb-4">Портфолио</h2>
          <p className="text-xl text-muted-foreground mb-16">Наши последние работы</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://cdn.poehali.dev/projects/7a100550-4453-43bb-bb37-3a52b757b26a/files/fdb38516-85ad-4c39-abf4-fe9d29d8a574.jpg", title: "Рекламная кампания", desc: "Производство для крупного бренда" },
              { img: "https://cdn.poehali.dev/projects/7a100550-4453-43bb-bb37-3a52b757b26a/files/ee704539-9f87-4d59-92c0-7e6101887666.jpg", title: "Корпоративный фильм", desc: "Презентация компании" },
              { img: "https://cdn.poehali.dev/projects/7a100550-4453-43bb-bb37-3a52b757b26a/files/d72918c3-8c3a-4b28-bbd0-2a298c20d7a9.jpg", title: "Цветокоррекция", desc: "Постпродакшн проекта" },
              { img: "https://cdn.poehali.dev/projects/7a100550-4453-43bb-bb37-3a52b757b26a/files/fdb38516-85ad-4c39-abf4-fe9d29d8a574.jpg", title: "Социальные ролики", desc: "Контент для соцсетей" },
              { img: "https://cdn.poehali.dev/projects/7a100550-4453-43bb-bb37-3a52b757b26a/files/ee704539-9f87-4d59-92c0-7e6101887666.jpg", title: "Продуктовое видео", desc: "Съёмка товаров" },
              { img: "https://cdn.poehali.dev/projects/7a100550-4453-43bb-bb37-3a52b757b26a/files/d72918c3-8c3a-4b28-bbd0-2a298c20d7a9.jpg", title: "Моушн графика", desc: "Анимированные ролики" }
            ].map((item, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer animate-scale-in hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-montserrat mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold font-montserrat mb-4">Услуги</h2>
          <p className="text-xl text-muted-foreground mb-16">Что мы делаем лучше всего</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Video", title: "Рекламные ролики", desc: "Создание продающих видео для брендов" },
              { icon: "Film", title: "Корпоративное видео", desc: "Презентации компаний и продуктов" },
              { icon: "Camera", title: "Съёмка мероприятий", desc: "Профессиональная съёмка событий" },
              { icon: "Users", title: "Интервью", desc: "Съёмка и монтаж интервью" },
              { icon: "Sparkles", title: "Моушн-дизайн", desc: "Анимация и графика для видео" },
              { icon: "Palette", title: "Цветокоррекция", desc: "Профессиональная обработка" }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold font-montserrat mb-4">Процесс работы</h2>
          <p className="text-xl text-muted-foreground mb-16">Как мы создаём видео</p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { num: "01", title: "Бриф и концепция", desc: "Изучаем задачу, разрабатываем концепцию и сценарий" },
              { num: "02", title: "Препродакшн", desc: "Подбор локаций, актёров, разработка раскадровки" },
              { num: "03", title: "Съёмка", desc: "Профессиональная съёмка с полным комплектом оборудования" },
              { num: "04", title: "Постпродакшн", desc: "Монтаж, цветокоррекция, звуковой дизайн, графика" },
              { num: "05", title: "Сдача проекта", desc: "Финальные правки и передача готового материала" }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start animate-fade-in">
                <div className="text-6xl font-bold font-montserrat text-accent/20 min-w-[100px]">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold font-montserrat mb-2">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold font-montserrat mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground mb-16">Что говорят о нас</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна Петрова", company: "CEO, TechBrand", text: "Отличная работа! Ролик превзошёл все ожидания. Профессионализм на каждом этапе." },
              { name: "Дмитрий Сидоров", company: "Маркетолог, StartUp Inc", text: "Быстро, качественно, креативно. Именно то, что нам было нужно для запуска продукта." },
              { name: "Елена Иванова", company: "Директор, Fashion House", text: "Команда поняла нашу эстетику с первого раза. Результат - произведение искусства!" }
            ].map((review, idx) => (
              <Card key={idx} className="p-8 animate-fade-in hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold font-montserrat">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold font-montserrat mb-6">Готовы начать?</h2>
          <p className="text-xl mb-12 opacity-90">
            Свяжитесь с нами, чтобы обсудить ваш проект
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="mailto:hello@prodfilm.ru" className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity">
              <Icon name="Mail" size={24} />
              hello@prodfilm.ru
            </a>
            <a href="tel:+79991234567" className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity">
              <Icon name="Phone" size={24} />
              +7 (999) 123-45-67
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="#" className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Icon name="Send" size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 PRODFILM. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;