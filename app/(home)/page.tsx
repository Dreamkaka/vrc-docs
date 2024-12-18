import Link from 'next/link';
import { Book, Code, Lightbulb, Rocket } from 'lucide-react'

export default function DocumentationLanding() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">VRC-TOOLS</h1>
          <p className="text-xl mb-8">基于koishi的vrchat查询插件</p>
          <Link 
            href="/docs" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-10 px-4 py-2"
          >
            了解更多
          </Link>
        </div>
      </header>
      <main className="container mx-auto py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Rocket className="h-20 w-10" />}
            title="随时查房"
            description="在qq便可轻松知道好友的在线状态，不用打开官网"
          />
          <FeatureCard
            icon={<Code className="h-20 w-10" />}
            title="可保存数据"
            description="将用户凭据保存在数据库中，无需反复登录"
          />


          <FeatureCard
            icon={<Book className="h-20 w-10" />}
            title="仍在开发"
            description="开发阶段，正在慢慢修bug和添加功能...."
          />
        </div>
      </main>
      <footer className="bg-muted">
        <div className="container mx-auto py-8 text-center">
          <p>© 2024 幻梦晓寒kaka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

