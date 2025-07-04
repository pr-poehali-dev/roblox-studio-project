import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Download = () => {
  const handleDownload = () => {
    window.open(
      "https://www.mediafire.com/file/xrb6oockl3gideo/roblox+studio.zip/file",
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background with classic games */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('/img/9e776893-19d5-45a8-86f1-e84ea6a4b3d9.jpg')",
          backgroundSize: "cover",
        }}
      />

      <Navigation />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
              📥 Скачать Studio
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Скачать Roblox Studio Classic
            </h1>

            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              Получите оригинальную версию Roblox Studio 2012-2014 годов.
              Полностью безопасная и проверенная временем версия для создания
              классических игр.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-green-400"
                  />
                  <span>Системные требования</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-100">
                  <li>• Windows 7 или новее</li>
                  <li>• 1 ГБ свободного места</li>
                  <li>• 2 ГБ оперативной памяти</li>
                  <li>• DirectX 9.0c</li>
                  <li>• Интернет не требуется для работы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Shield" size={24} className="text-blue-400" />
                  <span>Безопасность</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-100">
                  <li>• Без вирусов и вредоносного ПО</li>
                  <li>• Оригинальные файлы Roblox</li>
                  <li>• Проверено антивирусами</li>
                  <li>• Портативная версия</li>
                  <li>• Не требует установки</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-0 text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Icon
                  name="Download"
                  size={48}
                  className="mx-auto mb-4 text-white"
                />
                <h3 className="text-2xl font-bold mb-4">Готов к скачиванию!</h3>
                <p className="mb-6 text-green-100">
                  Размер архива: ~50 МБ | Время скачивания: 1-2 минуты
                </p>
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                  onClick={handleDownload}
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать Roblox Studio Classic
                </Button>
              </CardContent>
            </Card>
          </div>

          <Alert className="bg-blue-900/50 border-blue-500 text-blue-100 mb-8">
            <Icon name="Info" size={16} />
            <AlertDescription>
              <strong>Совет:</strong> Представь, что ты на даче и у тебя нет
              интернета на ноутбуке. Эта версия Studio работает полностью офлайн
              и не требует подключения к сети для создания игр!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon
                    name="Lightbulb"
                    size={24}
                    className="text-yellow-400"
                  />
                  <span>Примеры использования</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-green-100">
                  <li>
                    • <strong>На даче без интернета</strong> - создавай игры
                    офлайн
                  </li>
                  <li>
                    • <strong>В школе</strong> - обучение программированию
                  </li>
                  <li>
                    • <strong>Дома</strong> - ностальгические проекты
                  </li>
                  <li>
                    • <strong>В поездке</strong> - работай в любом месте
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon
                    name="HelpCircle"
                    size={24}
                    className="text-purple-400"
                  />
                  <span>Инструкция</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-green-100 list-decimal list-inside">
                  <li>Скачай архив по ссылке выше</li>
                  <li>Распакуй в любую папку</li>
                  <li>Запусти RobloxStudio.exe</li>
                  <li>Начни создавать игры!</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
