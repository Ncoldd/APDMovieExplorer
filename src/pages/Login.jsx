import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const { login, isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        // If already logged in, send user to Favorites
        if (isAuthenticated) {
            navigate("/favorites");
    }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault()

        login({ username, password });
    };

    return (
        <form onSubmit={handleSubmit}
        style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "10px" 
            }}>
                
            <h2>Login</h2>
            <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            
            <button type="submit">Login</button>
        </form>
    )
}

