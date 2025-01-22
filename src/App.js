import {Route, Routes, Navigate} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/login" element={<LoginForm />} />
    <Route
      path="/"
      element={<ProtectedRoute><Home /></ProtectedRoute>}
    />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not-found" />} /> 
  </Routes>
)

export default App
