import { Route, Routes } from 'react-router';

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';



const App = () => {
  
  return (
    <div className="relative h-full w-full">

      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%, #000_60%_#00FF9D40_100%)]" />
      <button className="btn">Create Note</button>
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-info">Info</button>
      <button className="btn btn-active btn-success">Success</button>
      <button className="btn btn-active btn-warning">Warning</button>
      <button className="btn btn-active btn-error">Error</button>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
       <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}
export { App };