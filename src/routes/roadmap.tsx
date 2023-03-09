import { RoadmapContent, RoadmapComponent, RoadmapMedia } from '@/components/roadmapComponent'
import { Layout } from '@/components/layout'

export default function RoadmapPage() {
  return (
    <Layout>
      <RoadmapComponent>
        <RoadmapContent title="SNEAK-PIC">
        <img src='public\images\Roadmap.png' className="sneakPic"/>
        
        </RoadmapContent>
      </RoadmapComponent>
    </Layout>
  )
}
