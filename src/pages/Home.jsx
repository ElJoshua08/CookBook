import Card from '@/components/Card'
import Filters from '@/components/Filters'

const Home = () => {
  return (
    <div className="relative w-full min-h-full overflow-hidden">
      {/* Filter wrapper */}
      <div className='w-40 min-h-full bg-green-500 absolute top-0 left-0'>
        <Filters />
      </div>

      {/* Main content */}
      <div className="pl-44 flex w-full flex-grow flex-row flex-wrap overflow-hidden items-center justify-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
