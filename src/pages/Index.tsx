import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background with classic Roblox games */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/img/9e776893-19d5-45a8-86f1-e84ea6a4b3d9.jpg')",
          backgroundSize: "cover",
        }}
      />

      <Navigation />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
            🎮 Классическая версия
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Roblox Studio Classic
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Вернитесь к истокам создания игр в Roblox! Старая версия студии с
            простым интерфейсом и всеми любимыми инструментами разработки игр
            2012-2014 годов.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              asChild
            >
              <Link to="/download">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать сейчас
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
              asChild
            >
              <Link to="/history">
                <Icon name="Clock" size={20} className="mr-2" />
                История версий
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <Icon name="Zap" size={32} className="text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Простота</h3>
                <p className="text-blue-100">
                  Интуитивный интерфейс без лишних сложностей современных версий
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <Icon name="Heart" size={32} className="text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Ностальгия</h3>
                <p className="text-blue-100">
                  Почувствуйте атмосферу золотого времени Roblox разработки
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <Icon name="Shield" size={32} className="text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                <p className="text-blue-100">
                  Проверенная временем версия без современных уязвимостей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
