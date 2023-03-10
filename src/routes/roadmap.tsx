import { RoadmapContent, RoadmapComponent, RoadmapMedia } from '@/components/roadmapComponent'
import { Layout } from '@/components/layout'
import roadmapImg from '/public/images/Roadmap.png';

export default function RoadmapPage() {
  return (
    <Layout>
      <RoadmapComponent>
        <RoadmapContent title="SNEAK-PIC">
          <img src={roadmapImg} className="sneakPic"/>
        </RoadmapContent>
      </RoadmapComponent>
    </Layout>
  )
}


//<img src={require("public/images/Roadmap.png").default} className="sneakPic"/>

//<img src="/public/images/Roadmap.png" className="sneakPic"/>