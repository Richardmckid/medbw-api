import Link from 'next/link'
import './globals.css'

export default function Home() {
  const paths = [
    {
      path: '/api/districts',
      title: 'Districts',
      description: 'List all districts',
      method: 'GET'
    },
    {
      path: '/api/drug-categories',
      title: 'Categories',
      description: 'List all categories',
      method: 'GET'
    },
    {
      path: '/api/drugs',
      title: 'Drugs/Medicines',
      description: 'List all available stock country wide and the districts',
      method: 'GET'
    },
    {
      path: '/api/facilities',
      title: 'Facilities',
      description: 'List all facilities country wide',
      method: 'GET'
    },
    {
      path: '/api/search?',
      query1: 'q = search value e.g q=paracetamol', 
      query2: 'type = search type e.g type=drug', 
      title: 'Search',
      description: 'Search everything, drugs, districts, facilities, etc',
      method: 'GET'
    },
  ]
  return (
    <main>
      <div className="bg-white h-screen max-w-[600px] mt-6 mx-auto">
        <div className="p-2 border">
          <h1 className="text-slate-400">This api returns a JSON object with status: (success/error) then data object is success or message if error</h1>
        </div>
        
      {
        paths.map(path => (
          <div className="flex flex-col space-y-2 p-2 border-gray-500 border mb-6" key={path.path}>
            <div className="flex space-x-2 justify-between items-center border-b">
              <span className='text-2xl'>{path.title}</span>
              <Link className='text-blue-500' href={path.path}>{path.path}</Link>
            </div>
            <span>HTTP Method: {path.method}</span>
            {
              path?.query1 &&
              <div className="p-2 border flex flex-col">
                <h1>Query Params</h1>
                <span>{path?.query1}</span>
                <span>{path?.query2}</span>
                <h1>Examples</h1>
                <Link className='text-blue-500' href={'/api/search?q=paracetamol&type=drug'}>/api/search?q=paracetamol&type=drug</Link>
                <Link className='text-blue-500' href={'/api/search?q=AO Clinic&type=facility'}>/api/search?q=AO Clinic&type=facility</Link>
              </div>
            }
            <span>{path.description}</span>
          </div>
        ))
      }
      </div>
    </main>
  )
}
