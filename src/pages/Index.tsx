import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const coverRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!coverRef.current) return;

    try {
      toast({
        title: "Создаю изображение...",
        description: "Подождите несколько секунд",
      });

      const canvas = await html2canvas(coverRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
        width: 1590,
        height: 400,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'tyumenkапstroy-vk-cover.png';
          link.click();
          URL.revokeObjectURL(url);

          toast({
            title: "Готово!",
            description: "Обложка успешно скачана",
          });
        }
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось создать изображение",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <div ref={coverRef} className="relative w-full aspect-[16/5] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                rgba(255,255,255,.05) 35px,
                rgba(255,255,255,.05) 70px
              )`
            }}></div>
          </div>

          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-500/10 to-transparent"></div>

          <div className="relative h-full flex items-center justify-between px-16">
            <div className="flex items-center gap-8">
              <div className="w-36 h-36 bg-white rounded-xl flex items-center justify-center shadow-2xl p-4 border-2 border-blue-500/30">
                <img 
                  src="https://cdn.poehali.dev/files/9729fdfd-4313-4728-834b-ccec2d56c4fd.png" 
                  alt="Логотип ООО Тюменькапстрой" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="text-sm text-gray-300 font-light tracking-wide">ООО «Тюменькапстрой»</div>
                  <h1 className="text-5xl font-bold text-white tracking-tight">
                    Тюменькапстрой
                  </h1>
                </div>
                <p className="text-xl text-gray-200 font-light max-w-2xl">
                  Строительство, реконструкция и капитальный ремонт тепловых сетей
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <div className="text-sm font-light text-gray-300">Контакты</div>
                  <div className="text-lg font-medium">+7 (982) 963-22-11</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <Icon name="Flame" size={24} />
                </div>
                <div>
                  <div className="text-sm font-light text-gray-300">Опыт работы</div>
                  <div className="text-lg font-medium">10+ лет</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center shadow-lg">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <div className="text-sm font-light text-gray-300">Email</div>
                  <div className="text-base font-medium">kapstroy.office@mail.ru</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center shadow-lg">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <div className="text-sm font-light text-gray-300">Адрес</div>
                  <div className="text-sm font-medium">г. Тюмень, ул. Одесская, д.3 стр.1 оф.310</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600"></div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Обложка для сообщества ВКонтакте • Размер: 1590×400px
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button 
              onClick={handleDownload}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
            >
              <Icon name="Download" size={20} />
              Скачать обложку
            </button>
            <button className="px-6 py-3 border-2 border-border rounded-lg hover:bg-secondary transition-colors font-medium">
              Инструкция
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;