import { useEffect } from 'react'
import ProjectsTable from "@/components/sections/projects/projectsTable"

const HomeThreeSingle = () => {
    useEffect(() => {
        const metaRobots = document.createElement('meta')
        metaRobots.name = 'robots'
        metaRobots.content = 'noindex, nofollow'
        document.head.appendChild(metaRobots)

        return () => {
            document.head.removeChild(metaRobots)
        }
    }, [])

    return (
        <>
            <ProjectsTable />
        </>
    )
}

export default HomeThreeSingle