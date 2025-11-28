import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <div className="relative w-full aspect-[16/5] bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative h-full flex items-center justify-between px-16">
            <div className="flex items-center gap-8">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/projects/eb8e32e1-0784-4ad9-ae7c-1bdaec177515/files/74468e5b-63d0-408a-8674-76b58e4465d6.jpg" 
                  alt="Логотип" 
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl font-bold text-white tracking-tight">
                  ТеплоСтрой
                </h1>
                <p className="text-xl text-white/90 font-light max-w-2xl">
                  Строительство, реконструкция и капитальный ремонт тепловых сетей
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <div className="text-sm font-light opacity-80">Контакты</div>
                  <div className="text-lg font-medium">+7 (XXX) XXX-XX-XX</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="Flame" size={24} />
                </div>
                <div>
                  <div className="text-sm font-light opacity-80">Опыт работы</div>
                  <div className="text-lg font-medium">15+ лет</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-white to-accent opacity-50"></div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Обложка для сообщества ВКонтакте • Размер: 1590×400px
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Скачать обложку
            </button>
            <button className="px-6 py-3 border-2 border-border rounded-lg hover:bg-secondary transition-colors font-medium">
              Изменить дизайн
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
