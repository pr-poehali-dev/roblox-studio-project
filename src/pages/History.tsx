import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const History = () => {
  const historyData = [
    {
      year: "2006",
      title: "Рождение Roblox",
      description:
        "Дэвид Базуки и Эрик Касселл создают платформу для создания игр",
    },
    {
      year: "2007",
      title: "Первая версия Studio",
      description: "Выпуск первой версии Roblox Studio для разработчиков",
    },
    {
      year: "2012",
      title: "Золотая эпоха",
      description: "Расцвет классического Roblox Studio с простым интерфейсом",
    },
    {
      year: "2014",
      title: "Последняя классическая версия",
      description: "Финальная версия старого Studio перед большими изменениями",
    },
    {
      year: "2015",
      title: "Модернизация",
      description: "Переход к новому интерфейсу и современным инструментам",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background with old studio interface */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('/img/377646b9-5f48-4d3a-8818-0858cc84eaee.jpg')",
          backgroundSize: "cover",
        }}
      />

      <Navigation />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
              📚 История платформы
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              История Roblox Studio
            </h1>

            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              Путешествие от простых инструментов до мощной платформы разработки
              игр
            </p>
          </div>

          <div className="space-y-8">
            {historyData.map((item, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                      {item.year}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-200 pl-20">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Star" size={24} className="text-yellow-400" />
                  <span>Особенности старых версий</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-200">
                  <li>• Простой и понятный интерфейс</li>
                  <li>• Быстрая загрузка и работа</li>
                  <li>• Меньше отвлекающих элементов</li>
                  <li>• Классические инструменты</li>
                  <li>• Ностальгическая атмосфера</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Trophy" size={24} className="text-yellow-400" />
                  <span>Легендарные игры той эпохи</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-200">
                  <li>• Natural Disaster Survival</li>
                  <li>• Work at a Pizza Place</li>
                  <li>• Sword Fight on the Heights</li>
                  <li>• Crossroads</li>
                  <li>• Hide and Seek Extreme</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
