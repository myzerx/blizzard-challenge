import Content from '@/components/Layouts/content'
import Header from '@/components/Layouts/header'
import ExclusiveGames from '@/components/exclusiveGames'
import Footer from '@/components/Layouts/footer'

export default function Index() {
  return (
    <div>
      <Header />
      <Content />
      <ExclusiveGames />
      <Footer />
    </div>
  )
}
