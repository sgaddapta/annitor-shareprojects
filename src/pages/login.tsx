import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateCredentials } from '@/db/authData'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateCredentials(username.trim(), password)) {
            localStorage.setItem('isAuth', 'true')
            navigate('/')
        } else {
            setError('Usuario o contraseña incorrectos')
        }
    }

    return (
        <div style={{minHeight: '100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f5f6f8'}}>
            <form onSubmit={submit} style={{width:320,padding:24,boxShadow:'0 4px 24px rgba(0,0,0,0.1)',borderRadius:8,background:'#fff'}}>
                <h2 style={{marginBottom:12}}>Acceso</h2>
                <div style={{marginBottom:8}}>
                    <label>Usuario</label>
                    <input value={username} onChange={e=>setUsername(e.target.value)} style={{width:'100%',padding:8,color:'#111',background:'#fff',border:'1px solid #ddd',borderRadius:4}} />
                </div>
                <div style={{marginBottom:12}}>
                    <label>Contraseña</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%',padding:8,color:'#111',background:'#fff',border:'1px solid #ddd',borderRadius:4}} />
                </div>
                {error && <div style={{color:'red',marginBottom:12}}>{error}</div>}
                <button type="submit" style={{width:'100%',padding:10}}>Entrar</button>
            </form>
        </div>
    )
}

export default Login
