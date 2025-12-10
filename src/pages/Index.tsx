import { useState } from 'react';
import { Home, FolderKanban, Info, User, MessageSquare, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type Section = 'home' | 'projects' | 'about' | 'profile' | 'forum' | 'chat';

interface Project {
  id: number;
  title: string;
  description: string;
  raised: number;
  goal: number;
  backers: number;
  daysLeft: number;
  image: string;
  category: string;
}

interface ForumTopic {
  id: number;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
}

interface ChatMessage {
  id: number;
  author: string;
  message: string;
  time: string;
  avatar: string;
}

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [newTopic, setNewTopic] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Инновационное приложение для экологии',
      description: 'Помогаем сохранить планету через умные технологии',
      raised: 45000,
      goal: 100000,
      backers: 234,
      daysLeft: 12,
      image: 'https://cdn.poehali.dev/projects/c6f4161b-041a-4156-a629-00f4f7006ec4/files/23700e5c-c9a0-4f16-8751-98223bbd7283.jpg',
      category: 'Технологии'
    },
    {
      id: 2,
      title: 'Образовательная платформа для детей',
      description: 'Делаем обучение увлекательным и доступным',
      raised: 78000,
      goal: 120000,
      backers: 456,
      daysLeft: 8,
      image: 'https://cdn.poehali.dev/projects/c6f4161b-041a-4156-a629-00f4f7006ec4/files/71ef07f1-e90b-4180-aa7a-19900bce1a0c.jpg',
      category: 'Образование'
    },
    {
      id: 3,
      title: 'Проект поддержки местных художников',
      description: 'Создаем пространство для творчества и культуры',
      raised: 32000,
      goal: 50000,
      backers: 189,
      daysLeft: 20,
      image: 'https://cdn.poehali.dev/projects/c6f4161b-041a-4156-a629-00f4f7006ec4/files/7cc748d7-9d8e-48e3-82b3-56d22313afda.jpg',
      category: 'Искусство'
    }
  ];

  const forumTopics: ForumTopic[] = [
    {
      id: 1,
      title: 'Как правильно оформить проект для максимального отклика?',
      author: 'Анна Петрова',
      replies: 23,
      views: 456,
      lastActivity: '2 часа назад'
    },
    {
      id: 2,
      title: 'Истории успеха: Мой проект собрал 200% за неделю!',
      author: 'Михаил Сидоров',
      replies: 45,
      views: 892,
      lastActivity: '1 час назад'
    },
    {
      id: 3,
      title: 'Вопросы о платформе и её функционале',
      author: 'Елена Иванова',
      replies: 12,
      views: 234,
      lastActivity: '3 часа назад'
    }
  ];

  const chatMessages: ChatMessage[] = [
    {
      id: 1,
      author: 'Дмитрий',
      message: 'Привет всем! Кто-нибудь запускал проект в категории технологий?',
      time: '14:32',
      avatar: 'DK'
    },
    {
      id: 2,
      author: 'Светлана',
      message: 'Да, я! Могу поделиться опытом. Что именно интересует?',
      time: '14:35',
      avatar: 'СМ'
    },
    {
      id: 3,
      author: 'Александр',
      message: 'Я тоже готов помочь советом по маркетингу проекта',
      time: '14:38',
      avatar: 'АР'
    }
  ];

  const stats = [
    { label: 'Проектов запущено', value: '1,234', icon: FolderKanban },
    { label: 'Собрано средств', value: '₽45.6M', icon: FolderKanban },
    { label: 'Активных спонсоров', value: '12,456', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CrowdFund
              </h1>
            </div>
            
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: Home },
                { id: 'projects', label: 'Проекты', icon: FolderKanban },
                { id: 'about', label: 'О платформе', icon: Info },
                { id: 'forum', label: 'Форум', icon: MessageSquare },
                { id: 'chat', label: 'Чат', icon: MessageCircle },
                { id: 'profile', label: 'Профиль', icon: User }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as Section)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary hover:bg-purple-50'
                  }`}
                >
                  <Icon name={item.icon.name} size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Создать проект
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-12 text-white shadow-2xl">
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-5xl font-bold mb-4">
                  Воплоти свою идею в жизнь
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Платформа для сбора средств на проекты, которые меняют мир. Присоединяйся к сообществу создателей и спонсоров!
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg">
                    Создать проект
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    Смотреть проекты
                  </Button>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
                <img 
                  src="https://cdn.poehali.dev/projects/c6f4161b-041a-4156-a629-00f4f7006ec4/files/7cc748d7-9d8e-48e3-82b3-56d22313afda.jpg" 
                  alt="Hero" 
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-2 border-purple-100 hover:border-primary transition-all hover:shadow-lg animate-scale-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {stat.value}
                      </CardTitle>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <Icon name={stat.icon.name} className="text-primary" size={24} />
                      </div>
                    </div>
                    <CardDescription className="text-base">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Популярные проекты</h2>
                <Button variant="outline" onClick={() => setActiveSection('projects')}>
                  Все проекты →
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={project.id} className="overflow-hidden border-2 border-purple-100 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                      <Badge className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-semibold text-primary">₽{project.raised.toLocaleString()}</span>
                          <span className="text-muted-foreground">₽{project.goal.toLocaleString()}</span>
                        </div>
                        <Progress value={(project.raised / project.goal) * 100} className="h-2" />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{project.backers} спонсоров</span>
                        <span>{project.daysLeft} дней осталось</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        Поддержать проект
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold">Все проекты</h2>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-all">Все</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-all">Технологии</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-all">Образование</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-all">Искусство</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-2 border-purple-100 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white">
                      {project.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-primary">₽{project.raised.toLocaleString()}</span>
                        <span className="text-muted-foreground">₽{project.goal.toLocaleString()}</span>
                      </div>
                      <Progress value={(project.raised / project.goal) * 100} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{project.backers} спонсоров</span>
                      <span>{project.daysLeft} дней осталось</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Поддержать проект
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                О платформе
              </h2>
              <p className="text-xl text-muted-foreground">
                Мы создаем пространство, где идеи становятся реальностью
              </p>
            </div>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-2xl">Наша миссия</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>
                  CrowdFund — это современная платформа для сбора средств на проекты, которые меняют мир к лучшему. 
                  Мы объединяем создателей и спонсоров, помогая воплощать самые смелые идеи в реальность.
                </p>
                <p>
                  Наша цель — сделать процесс краудфандинга простым, прозрачным и эффективным. 
                  Мы предоставляем все необходимые инструменты для успешного запуска и продвижения проектов.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Прозрачность', description: 'Отслеживайте каждый этап развития проекта', icon: 'Eye' },
                { title: 'Безопасность', description: 'Защищенные платежи и гарантия возврата', icon: 'Shield' },
                { title: 'Сообщество', description: 'Общайтесь с единомышленниками', icon: 'Users' }
              ].map((feature, index) => (
                <Card key={index} className="border-2 border-purple-100 hover:border-primary transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                      <Icon name={feature.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'profile' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20 border-4 border-primary">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
                      ИП
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-3xl">Иван Петров</CardTitle>
                    <CardDescription className="text-base">Создатель • Спонсор</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="created" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="created">Мои проекты</TabsTrigger>
                    <TabsTrigger value="backed">Поддержанные</TabsTrigger>
                    <TabsTrigger value="activity">Активность</TabsTrigger>
                  </TabsList>
                  <TabsContent value="created" className="space-y-4">
                    <div className="text-center py-12 text-muted-foreground">
                      <Icon name="FolderKanban" size={48} className="mx-auto mb-4 opacity-50" />
                      <p>У вас пока нет созданных проектов</p>
                      <Button className="mt-4 bg-gradient-to-r from-primary to-secondary">
                        Создать первый проект
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="backed" className="space-y-4">
                    {projects.slice(0, 2).map((project) => (
                      <Card key={project.id} className="border border-purple-100">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <img src={project.image} alt={project.title} className="w-16 h-16 rounded-lg object-cover" />
                            <div>
                              <CardTitle className="text-lg">{project.title}</CardTitle>
                              <CardDescription>Вклад: ₽5,000</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </TabsContent>
                  <TabsContent value="activity" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                        <Icon name="Heart" className="text-red-500" size={20} />
                        <span className="text-sm">Вы поддержали проект "Инновационное приложение для экологии"</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                        <Icon name="MessageSquare" className="text-primary" size={20} />
                        <span className="text-sm">Новый комментарий в форуме</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'forum' && (
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold">Форум</h2>
              <Button className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать тему
              </Button>
            </div>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle>Создать новую тему</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Заголовок темы" 
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  className="border-purple-100"
                />
                <Textarea 
                  placeholder="Опишите вашу тему подробнее..." 
                  className="min-h-[100px] border-purple-100"
                />
                <Button className="bg-gradient-to-r from-primary to-secondary">
                  Опубликовать тему
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {forumTopics.map((topic) => (
                <Card key={topic.id} className="border border-purple-100 hover:border-primary transition-all hover:shadow-lg cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl hover:text-primary transition-colors">
                          {topic.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="User" size={16} />
                            <span>{topic.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="MessageSquare" size={16} />
                            <span>{topic.replies} ответов</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Eye" size={16} />
                            <span>{topic.views} просмотров</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {topic.lastActivity}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'chat' && (
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Card className="border-2 border-purple-100 h-[600px] flex flex-col">
              <CardHeader className="border-b border-purple-100">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                  Общий чат
                  <Badge variant="outline" className="ml-auto">124 онлайн</Badge>
                </CardTitle>
                <CardDescription>Общайтесь с создателями и спонсорами в режиме реального времени</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="flex items-start gap-3 animate-fade-in">
                    <Avatar className="border-2 border-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                        {msg.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{msg.author}</span>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-2">
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              <div className="border-t border-purple-100 p-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Напишите сообщение..." 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="border-purple-100"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && newMessage.trim()) {
                        setNewMessage('');
                      }
                    }}
                  />
                  <Button className="bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-white/80 backdrop-blur-lg border-t border-purple-100 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={20} />
              </div>
              <span className="font-semibold text-muted-foreground">CrowdFund © 2024</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О нас</a>
              <a href="#" className="hover:text-primary transition-colors">Помощь</a>
              <a href="#" className="hover:text-primary transition-colors">Условия</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}